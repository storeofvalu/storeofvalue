import React from 'react';
import { Button } from '@/components/ui/button';
import { Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import BitcoinLogoIcon from './BitcoinLogoIcon';

const CallToAction = () => {
  return (
    <section 
      id="learn"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-amber-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <BitcoinLogoIcon size="md" className="mb-5 md:mb-6" />
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Ready to learn more?</h2>
          
          <p className="text-lg md:text-xl text-primary/70 mb-8 md:mb-10 max-w-2xl">
            Dive deeper into Bitcoin and discover why it represents the most significant innovation in value storage for the digital age.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="outline" 
              size="lg"
              className="border-amber-500 text-amber-500 hover:bg-amber-500/10 w-full sm:w-auto"
              asChild
            >
              <Link to="/resources" className="px-6">
                <LinkIcon className="mr-2 h-4 w-4" />
                Read Resources
              </Link>
            </Button>
            
            <Button 
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-black w-full sm:w-auto"
              asChild
            >
              <Link to="/learn" className="px-6">
                Start Learning
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
