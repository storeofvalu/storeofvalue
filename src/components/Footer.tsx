
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <p className="text-sm text-primary/60 mb-4 md:mb-0">© 2023</p>
          <p className="text-sm text-primary/60">
            Made by <a href="#" className="underline hover:text-primary transition-colors">Lovable</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
