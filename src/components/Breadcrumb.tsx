import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import StructuredData, { createBreadcrumbSchema } from './StructuredData';

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Breadcrumb component for navigation with structured data
 */
const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  // Create breadcrumb schema for structured data
  const breadcrumbItems = [
    { name: 'Home', url: 'https://storeofvalue.ch/' },
    ...items.map(item => ({
      name: item.name,
      url: `https://storeofvalue.ch${item.href}`
    }))
  ];
  
  const breadcrumbSchema = createBreadcrumbSchema(breadcrumbItems);
  
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <nav className={`flex items-center text-sm text-muted-foreground mb-4 ${className}`} aria-label="Breadcrumb">
        <ol className="flex items-center space-x-1">
          <li>
            <Link to="/" className="flex items-center hover:text-foreground transition-colors">
              <Home className="h-4 w-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground/50" />
              {index === items.length - 1 ? (
                <span className="text-foreground font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link 
                  to={item.href} 
                  className="hover:text-foreground transition-colors hover:underline"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb; 