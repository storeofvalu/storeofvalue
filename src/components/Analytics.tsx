import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface AnalyticsProps {
  pageId?: string;
  pageCategory?: string;
  customDimensions?: Record<string, string>;
  pageTemplate?: string;
  contentType?: string;
  author?: string;
  publishDate?: string;
  keywords?: string[];
  section?: string;
}

/**
 * Analytics component for tracking page views and custom events
 * Supports multiple analytics providers (Google Analytics, custom)
 */
const Analytics: React.FC<AnalyticsProps> = ({
  pageId,
  pageCategory,
  customDimensions = {},
  pageTemplate,
  contentType,
  author,
  publishDate,
  keywords,
  section
}) => {
  const location = useLocation();
  
  // Track page views when route changes
  useEffect(() => {
    const enhancedDimensions = {
      ...customDimensions,
      ...(pageTemplate && { page_template: pageTemplate }),
      ...(contentType && { content_type: contentType }),
      ...(author && { author }),
      ...(publishDate && { publish_date: publishDate }),
      ...(keywords && { keywords: keywords.join(',') }),
      ...(section && { section }),
      // Include URL parameters as custom dimensions (excluding sensitive data)
      ...(location.search && { url_params: location.search }),
      referrer: document.referrer || 'direct',
      screen_resolution: `${window.screen.width}x${window.screen.height}`,
      viewport_size: `${window.innerWidth}x${window.innerHeight}`,
      timestamp: new Date().toISOString()
    };
    
    trackPageView({
      path: location.pathname,
      pageId,
      pageCategory,
      customDimensions: enhancedDimensions
    });
  }, [location.pathname, pageId, pageCategory, customDimensions, pageTemplate, contentType, author, publishDate, keywords, section]);
  
  return null; // This component doesn't render anything
};

// Analytics helper functions
interface PageViewParams {
  path: string;
  pageId?: string;
  pageCategory?: string;
  customDimensions?: Record<string, string>;
}

/**
 * Tracks a page view in analytics
 */
export const trackPageView = ({ 
  path, 
  pageId, 
  pageCategory,
  customDimensions = {}
}: PageViewParams) => {
  // Google Analytics 4 tracking
  if (typeof window !== 'undefined' && 'gtag' in window) {
    const gtag = (window as any).gtag;
    
    gtag('event', 'page_view', {
      page_path: path,
      page_title: document.title,
      page_id: pageId,
      page_category: pageCategory,
      ...customDimensions
    });
  }
  
  // Add other analytics providers here as needed
  // e.g., Fathom, Plausible, custom event tracking, etc.
  
  // Development logging
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', {
      type: 'pageview',
      path,
      pageId,
      pageCategory,
      customDimensions
    });
  }
};

/**
 * Tracks a custom event in analytics
 */
export const trackEvent = (
  eventName: string, 
  eventParams: Record<string, any> = {}
) => {
  // Google Analytics 4 tracking
  if (typeof window !== 'undefined' && 'gtag' in window) {
    const gtag = (window as any).gtag;
    gtag('event', eventName, eventParams);
  }
  
  // Add other analytics providers here as needed
  
  // Development logging
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', {
      type: 'event',
      eventName,
      eventParams
    });
  }
};

/**
 * Common event tracking functions for specific interactions
 */
export const analyticsEvents = {
  /**
   * Track when a link is clicked
   */
  trackLinkClick: (
    linkText: string, 
    linkUrl: string, 
    linkType?: string, 
    additionalParams = {}
  ) => {
    trackEvent('link_click', {
      link_text: linkText,
      link_url: linkUrl,
      link_type: linkType || 'standard',
      ...additionalParams
    });
  },
  
  /**
   * Track when a button is clicked
   */
  trackButtonClick: (
    buttonText: string, 
    buttonId?: string, 
    section?: string,
    additionalParams = {}
  ) => {
    trackEvent('button_click', {
      button_text: buttonText,
      button_id: buttonId,
      section: section,
      ...additionalParams
    });
  },
  
  /**
   * Track when a form is submitted
   */
  trackFormSubmit: (
    formName: string,
    formId?: string,
    additionalParams = {}
  ) => {
    trackEvent('form_submit', {
      form_name: formName,
      form_id: formId,
      ...additionalParams
    });
  },
  
  /**
   * Track when content is engaged with (e.g., video played, accordion opened)
   */
  trackContentEngagement: (
    contentType: string,
    contentId: string,
    action: string,
    additionalParams = {}
  ) => {
    trackEvent('content_engagement', {
      content_type: contentType,
      content_id: contentId,
      action: action,
      ...additionalParams
    });
  },
  
  /**
   * Track when a user scrolls to a specific section
   */
  trackScroll: (
    depth: number,
    milestone: string,
    additionalParams = {}
  ) => {
    trackEvent('scroll_milestone', {
      scroll_depth: depth,
      scroll_milestone: milestone,
      ...additionalParams
    });
  }
};

export default Analytics; 