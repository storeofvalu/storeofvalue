
import React from 'react';
import { Bitcoin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center mb-4">
              <Bitcoin className="h-5 w-5 text-amber-500 mr-2" />
              <span className="text-lg font-medium">Store of Value</span>
            </div>
            <p className="text-sm text-primary/60 mb-4">
              Empowering individuals through financial sovereignty and education.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {['Bitcoin Whitepaper', 'Getting Started', 'Security Guide'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-primary/60 hover:text-amber-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {['Twitter', 'GitHub', 'Discord'].map((item) => (
                <a 
                  key={item} 
                  href="#"
                  className="text-sm text-primary/60 hover:text-amber-500 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-16 pt-8 border-t border-border">
          <p className="text-sm text-primary/60 mb-4 md:mb-0">© 2023 Store of Value</p>
          <p className="text-sm text-primary/60">
            Made by <a href="#" className="underline hover:text-amber-500 transition-colors">Lovable</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
