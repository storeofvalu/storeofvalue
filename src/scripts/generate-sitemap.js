#!/usr/bin/env node

/**
 * Automated sitemap generator for the Bitcoin Education website
 * This script generates a sitemap.xml file based on the routes defined in App.tsx
 * Run this script during the build process to ensure the sitemap is always up-to-date
 */

import fs from 'fs';
import path from 'path';
import prettier from 'prettier';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SITE_URL = 'https://storeofvalue.ch';
const PUBLIC_DIR = path.join(__dirname, '../../public');
const OUTPUT_FILE = path.join(PUBLIC_DIR, 'sitemap.xml');
const SRC_DIR = path.join(__dirname, '../');

// Ensure the public directory exists
if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

// Default routes as fallback
const defaultRoutes = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/manifesto', priority: 0.9, changefreq: 'monthly' },
  { path: '/philosophical-foundations', priority: 0.9, changefreq: 'monthly' },
  { path: '/bitcoin-vs-crypto', priority: 0.9, changefreq: 'monthly' },
  { path: '/perspectives', priority: 0.8, changefreq: 'weekly' },
  { path: '/learn', priority: 0.8, changefreq: 'weekly' },
  { path: '/learn/beginner', priority: 0.7, changefreq: 'monthly' },
  { path: '/learn/intermediate', priority: 0.7, changefreq: 'monthly' },
  { path: '/learn/advanced', priority: 0.7, changefreq: 'monthly' },
  { path: '/perspectives/networked-revolution', priority: 0.7, changefreq: 'monthly' },
  { path: '/perspectives/energy-alchemy', priority: 0.7, changefreq: 'monthly' },
  { path: '/perspectives/geopolitical-shield', priority: 0.7, changefreq: 'monthly' },
  { path: '/perspectives/time-travelers-portfolio', priority: 0.7, changefreq: 'monthly' },
  { path: '/faq', priority: 0.6, changefreq: 'monthly' },
  { path: '/about', priority: 0.5, changefreq: 'monthly' },
  { path: '/community', priority: 0.6, changefreq: 'weekly' },
  { path: '/contact', priority: 0.5, changefreq: 'monthly' },
];

// Get file modification date
const getFileModDate = (routePath) => {
  // Map route to corresponding file path
  const routeToFilePath = {
    '/': 'pages/Home.tsx',
    '/manifesto': 'pages/Manifesto.tsx',
    '/philosophical-foundations': 'pages/PhilosophicalFoundations.tsx',
    '/bitcoin-vs-crypto': 'pages/BitcoinVsCrypto.tsx',
    '/perspectives': 'pages/Perspectives.tsx',
    '/faq': 'pages/FAQ.tsx',
    '/about': 'pages/About.tsx',
    '/community': 'pages/Community.tsx',
    '/contact': 'pages/Contact.tsx',
  };

  const filePath = routeToFilePath[routePath];
  if (filePath) {
    try {
      const fullPath = path.join(SRC_DIR, filePath);
      if (fs.existsSync(fullPath)) {
        const stats = fs.statSync(fullPath);
        return stats.mtime.toISOString().split('T')[0]; // Format: YYYY-MM-DD
      }
    } catch (error) {
      console.warn(`Could not get modification date for ${routePath}`);
    }
  }
  
  // Default to current date if file not found
  return new Date().toISOString().split('T')[0];
};

// Generate sitemap XML content
const generateSitemap = (routes) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `<url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${getFileModDate(route.path)}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join('\n')}
</urlset>`;

  return sitemap;
};

// Save the generated sitemap to file
const saveSitemap = async (sitemap) => {
  try {
    // Format the XML for better readability
    const formattedSitemap = await prettier.format(sitemap, {
      parser: 'html',
    });
    
    fs.writeFileSync(OUTPUT_FILE, formattedSitemap);
    console.log(`✅ Sitemap generated successfully at ${OUTPUT_FILE}`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
};

// Extract routes from App.tsx (primary approach)
const extractRoutesFromAppTsx = () => {
  try {
    const appTsxPath = path.join(__dirname, '../App.tsx');
    const appTsxContent = fs.readFileSync(appTsxPath, 'utf8');
    
    // Use regex to extract routes
    const routeRegex = /<Route\s+path="([^"]+)"/g;
    let match;
    const extractedRoutes = [];
    
    while ((match = routeRegex.exec(appTsxContent)) !== null) {
      const path = match[1];
      
      // Skip dynamic routes with params for simplicity
      if (!path.includes(':')) {
        let priority = 0.7;
        let changefreq = 'monthly';
        
        // Assign priority and change frequency based on path importance
        if (path === '/') {
          priority = 1.0;
          changefreq = 'weekly';
        } else if (path.includes('perspectives') || path.includes('learn')) {
          priority = 0.8;
          changefreq = 'weekly';
        } else if (path.includes('faq') || path.includes('about')) {
          priority = 0.6;
        }
        
        extractedRoutes.push({
          path,
          priority,
          changefreq,
        });
      }
    }
    
    console.log(`📋 Extracted ${extractedRoutes.length} routes from App.tsx`);
    return extractedRoutes;
  } catch (error) {
    console.error('Error extracting routes from App.tsx:', error);
    return [];
  }
};

// Merge default route metadata with extracted routes
const mergeRouteMetadata = (extractedRoutes) => {
  // Create a lookup of default route metadata
  const defaultRoutesMap = defaultRoutes.reduce((acc, route) => {
    acc[route.path] = route;
    return acc;
  }, {});
  
  // Update extracted routes with default metadata where available
  return extractedRoutes.map(route => {
    if (defaultRoutesMap[route.path]) {
      return {
        ...route,
        priority: defaultRoutesMap[route.path].priority,
        changefreq: defaultRoutesMap[route.path].changefreq
      };
    }
    return route;
  });
};

// Main execution
const main = async () => {
  console.log('🔄 Generating sitemap...');
  
  // Try to extract routes from App.tsx first
  let routes = extractRoutesFromAppTsx();
  
  // If extraction worked, merge with default route metadata
  if (routes.length > 0) {
    routes = mergeRouteMetadata(routes);
  } else {
    // Fall back to default routes if extraction failed
    console.log('⚠️ Using default routes as fallback');
    routes = defaultRoutes;
  }
  
  const sitemap = generateSitemap(routes);
  await saveSitemap(sitemap);
  
  console.log(`✅ Sitemap generation complete with ${routes.length} URLs!`);
};

main(); 