
import React from 'react';
import { Button } from '@/components/ui/button';
import { Bitcoin, Link } from 'lucide-react';

const CallToAction = () => {
  return (
    <section 
      id="learn"
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center p-3 bg-amber-500/10 rounded-full mb-6">
            <Bitcoin className="h-6 w-6 text-amber-500" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to learn more?</h2>
          
          <p className="text-xl text-primary/70 mb-10 max-w-2xl">
            Dive deeper into Bitcoin and discover why it represents the most significant innovation in value storage for the digital age.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="outline" 
              size="lg"
              className="border-amber-500 text-amber-500 hover:bg-amber-500/10"
            >
              <Link className="mr-2 h-4 w-4" />
              Read Resources
            </Button>
            
            <Button 
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-black"
            >
              Start Learning
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
