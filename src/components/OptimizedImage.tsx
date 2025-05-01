import React, { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fallbackIcon?: React.ReactNode;
  lazyLoad?: boolean;
  priority?: boolean;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

/**
 * OptimizedImage component with lazy loading, error handling, and fallbacks
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  fallbackIcon,
  lazyLoad = true,
  priority = false,
  objectFit = 'cover',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  
  // Handle intersection observer for lazy loading
  useEffect(() => {
    if (!lazyLoad || priority) {
      return;
    }
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && imageRef.current) {
          const img = imageRef.current;
          // Set the actual src when image comes into view
          if (img.dataset.src) {
            img.src = img.dataset.src;
          }
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '200px 0px', // Start loading 200px before it comes into view
    });
    
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    
    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [lazyLoad, priority]);
  
  const handleImageLoad = () => {
    setIsLoaded(true);
  };
  
  const handleImageError = () => {
    setHasError(true);
  };
  
  const styleProp = {
    objectFit,
    width: width ? `${width}px` : 'auto',
    height: height ? `${height}px` : 'auto',
  } as React.CSSProperties;
  
  if (hasError && fallbackIcon) {
    return (
      <div 
        className={`flex items-center justify-center bg-orange-500/10 ${className}`}
        style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : '100%' }}
        role="img"
        aria-label={alt}
      >
        {fallbackIcon}
      </div>
    );
  }
  
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width: width ? `${width}px` : 'auto' }}>
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse" 
          style={{ height: height ? `${height}px` : '100%' }}
        />
      )}
      <img
        ref={imageRef}
        src={priority || !lazyLoad ? src : undefined}
        data-src={lazyLoad && !priority ? src : undefined}
        alt={alt}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        style={styleProp}
        onLoad={handleImageLoad}
        onError={handleImageError}
        loading={lazyLoad && !priority ? "lazy" : "eager"}
        width={width}
        height={height}
      />
    </div>
  );
};

export default OptimizedImage; 