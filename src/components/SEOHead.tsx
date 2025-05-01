import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

export interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
  keywords?: string;
  structuredData?: Record<string, any>;
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  language?: string;
  alternateLanguageUrls?: {
    lang: string;
    url: string;
  }[];
}

/**
 * Randomly selects one of the OG images
 * This allows for variety in social media shares
 */
const getRandomOGImage = (): string => {
  const images = [
    '/images/Store-of-Value_OG-image-future.jpg',
    '/images/Store-of-Value_OG-image-hope.jpg'
  ];
  // Use the current date to select an image, changing every day
  // This creates variety but is deterministic for the same day
  const dayOfYear = Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  return images[dayOfYear % images.length];
};

/**
 * SEOHead component for managing meta tags and SEO
 */
const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage = getRandomOGImage(),
  ogType = 'website',
  twitterCard = 'summary_large_image',
  keywords,
  structuredData,
  noIndex = false,
  publishedTime,
  modifiedTime,
  author = 'Bitcoin Education',
  language = 'en',
  alternateLanguageUrls = []
}) => {
  // Get full URL from relative path
  const getFullUrl = (path: string) => {
    if (path.startsWith('http')) {
      return path;
    }
    
    // Use the site's domain
    const baseUrl = 'https://storeofvalue.ch'; // Replace with actual domain
    return `${baseUrl}${path.startsWith('/') ? '' : '/'}${path}`;
  };
  
  // Update the document title when the title prop changes
  useEffect(() => {
    document.title = `${title} | Store of Value`;
  }, [title]);
  
  // Sitename for OpenGraph
  const siteName = 'Store of Value';
  
  // Twitter username
  const twitterSite = '@storeofvalue_ch'; // Twitter handle
  
  return (
    <Helmet>
      <html lang={language} />
      <title>{title} | Store of Value</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Robots control */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={getFullUrl(canonicalUrl)} />}
      
      {/* Alternate language versions */}
      {alternateLanguageUrls.map((altLang) => (
        <link 
          key={altLang.lang}
          rel="alternate" 
          hrefLang={altLang.lang} 
          href={getFullUrl(altLang.url)}
        />
      ))}
      
      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteName} />
      {canonicalUrl && <meta property="og:url" content={getFullUrl(canonicalUrl)} />}
      {ogImage && <meta property="og:image" content={getFullUrl(ogImage)} />}
      {ogImage && <meta property="og:image:alt" content={title} />}
      {publishedTime && ogType === 'article' && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {modifiedTime && ogType === 'article' && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {author && ogType === 'article' && (
        <meta property="article:author" content={author} />
      )}
      
      {/* Twitter tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={getFullUrl(ogImage)} />}
      {ogImage && <meta name="twitter:image:alt" content={title} />}
      
      {/* Structured data for search engines */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead; 