import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import SEOHead, { SEOHeadProps } from '@/components/SEOHead';
import Analytics from '@/components/Analytics';

interface LayoutProps {
  children: React.ReactNode;
  seo: SEOHeadProps;
  className?: string;
  hideFooter?: boolean;
  analytics?: {
    pageId?: string;
    pageCategory?: string;
    customDimensions?: Record<string, string>;
  };
}

/**
 * Reusable layout component that includes SEO, Navigation, and Footer
 */
const Layout: React.FC<LayoutProps> = ({
  children,
  seo,
  className = '',
  hideFooter = false,
  analytics
}) => {
  return (
    <div className={`min-h-screen bg-background flex flex-col ${className}`}>
      <SEOHead {...seo} />
      <Analytics 
        pageId={analytics?.pageId || seo.title}
        pageCategory={analytics?.pageCategory}
        customDimensions={analytics?.customDimensions}
      />
      <Navigation />
      
      <main className="flex-grow">
        {children}
      </main>
      
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout; 