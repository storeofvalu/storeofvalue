import React from 'react';
import { Helmet } from 'react-helmet';

interface StructuredDataProps {
  data: Record<string, any>;
}

/**
 * Component that adds structured data in JSON-LD format to a page's head
 * for improved SEO and rich search results
 */
const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  );
};

/**
 * Creates standard website structured data
 */
export const createWebsiteSchema = (name: string, url: string, description: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": name,
    "url": url,
    "description": description,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
};

/**
 * Creates standard article structured data
 */
export const createArticleSchema = (
  headline: string,
  description: string,
  authorName: string,
  publisherName: string, 
  publisherLogoUrl: string,
  url: string,
  imageUrl: string,
  datePublished: string,
  dateModified: string
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "image": imageUrl,
    "author": {
      "@type": "Person",
      "name": authorName,
    },
    "publisher": {
      "@type": "Organization",
      "name": publisherName,
      "logo": {
        "@type": "ImageObject",
        "url": publisherLogoUrl
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "datePublished": datePublished,
    "dateModified": dateModified
  };
};

/**
 * Creates enhanced FAQ structured data with additional properties
 */
export const createFAQSchema = (
  questions: Array<{
    question: string, 
    answer: string, 
    id?: string, 
    category?: string,
    dateCreated?: string,
    dateModified?: string,
    author?: string
  }>, 
  pageData?: {
    mainEntity?: string,
    dateCreated?: string,
    dateModified?: string,
    description?: string,
    image?: string
  }
) => {
  // Base schema structure
  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map((item, index) => ({
      "@type": "Question",
      "name": item.question,
      "identifier": item.id || `faq-${index + 1}`,
      ...(item.dateCreated && { "dateCreated": item.dateCreated }),
      ...(item.dateModified && { "dateModified": item.dateModified }),
      ...(item.category && { "about": { "@type": "Thing", "name": item.category } }),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
        ...(item.author && { "author": { "@type": "Person", "name": item.author } })
      }
    }))
  };

  // Add optional page-level metadata
  if (pageData) {
    if (pageData.mainEntity) schema.mainEntity = pageData.mainEntity;
    if (pageData.dateCreated) schema.dateCreated = pageData.dateCreated;
    if (pageData.dateModified) schema.dateModified = pageData.dateModified;
    if (pageData.description) schema.description = pageData.description;
    if (pageData.image) schema.image = pageData.image;
  }

  return schema;
};

/**
 * Creates breadcrumb structured data
 */
export const createBreadcrumbSchema = (items: Array<{name: string, url: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

/**
 * Creates structured data for product information
 */
export const createProductSchema = (
  name: string,
  description: string,
  price: number,
  currency: string,
  imageUrl: string,
  url: string,
  brand: string,
  availability: 'InStock' | 'OutOfStock' | 'PreOrder',
  sku?: string,
  reviewCount?: number,
  reviewRating?: number
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "image": imageUrl,
    "sku": sku,
    "brand": {
      "@type": "Brand",
      "name": brand
    },
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": currency,
      "availability": `https://schema.org/${availability}`,
      "url": url
    },
    ...(reviewCount && reviewRating ? {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": reviewRating,
        "reviewCount": reviewCount
      }
    } : {})
  };
};

/**
 * Creates HowTo structured data for tutorial content
 */
export const createHowToSchema = (
  name: string,
  description: string,
  steps: Array<{
    name: string,
    text: string,
    imageUrl?: string
  }>,
  totalTime?: string,
  imageUrl?: string,
  tools?: Array<string>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    ...(imageUrl && { "image": imageUrl }),
    ...(totalTime && { "totalTime": totalTime }),
    ...(tools && tools.length > 0 && {
      "tool": tools.map(tool => ({
        "@type": "HowToTool",
        "name": tool
      }))
    }),
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "name": step.name,
      "text": step.text,
      "position": index + 1,
      ...(step.imageUrl && { "image": step.imageUrl })
    }))
  };
};

export default StructuredData; 