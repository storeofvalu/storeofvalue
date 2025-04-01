
import React, { useEffect, useRef } from 'react';
import { TrendingUp, Bitcoin } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    <section className="py-32 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-amber-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-amber-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div 
          ref={iconRef}
          className="flex justify-center mb-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <div className="p-5 bg-muted rounded-full relative">
            <Bitcoin className="h-10 w-10 text-amber-500" />
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-20"></span>
          </div>
        </div>
        
        <h1 
          ref={titleRef} 
          className="text-4xl md:text-5xl lg:text-heading font-bold tracking-tight text-primary mb-12 text-center opacity-0"
        >
          Store of Value
        </h1>
        
        <p className="text-xl md:text-2xl text-primary/90 leading-relaxed text-center mb-10">
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
          >
            Explore Principles
            <TrendingUp className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
