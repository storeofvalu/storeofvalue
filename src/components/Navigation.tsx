
import React from 'react';
import { Bitcoin } from 'lucide-react';

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Bitcoin className="h-6 w-6 text-amber-500 mr-2" />
            <span className="text-lg font-medium">Store of Value</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {[
              { name: "Manifesto", id: "manifesto" },
              { name: "Principles", id: "principles" },
              { name: "Learn", id: "learn" },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-primary/70 hover:text-amber-500 transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
