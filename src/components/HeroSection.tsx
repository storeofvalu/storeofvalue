import React, { useEffect, useRef } from 'react';
import { TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import BitcoinLogoIcon from './BitcoinLogoIcon';

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add('animate-fade-in');
    }
    
    if (iconRef.current) {
      setTimeout(() => {
        iconRef.current?.classList.add('opacity-100', 'translate-y-0');
      }, 500);
    }
  }, []);

  return (
    <section className="pt-24 pb-20 md:py-32 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-amber-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-amber-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <div 
          ref={iconRef}
          className="flex justify-center mb-6 md:mb-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <BitcoinLogoIcon size="lg" />
        </div>
        
        <h1 
          ref={titleRef} 
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-8 md:mb-12 text-center opacity-0"
        >
          Store of Value
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-primary/90 leading-relaxed text-center mb-8 md:mb-10">
          Throughout human history, we have sought reliable ways to 
          <span className="text-amber-500 font-medium mx-1">preserve wealth</span> 
          across time. Today, Bitcoin emerges as the 
          <span className="text-amber-500 font-medium mx-1">digital answer</span> 
          to a question asked for millennia: how do we protect value from the erosion of time?
        </p>
        
        <div className="flex justify-center">
          <Button 
            variant="default" 
            size="lg" 
            className="bg-amber-500 hover:bg-amber-600 text-black font-medium"
            asChild
          >
            <Link to="/principles">
              Explore Principles
              <TrendingUp className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
