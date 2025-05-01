import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cookie, ExternalLink, Shield, BookOpen, GraduationCap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import BitcoinLogoIcon from './BitcoinLogoIcon';
import { useCookieConsent } from './CookieConsent';

// Footer version of the logo (slightly larger)
const FooterLogo = () => (
  <span className="text-2xl font-bold flex items-center gap-1.5 text-amber-500">
    Store of Value
    <BitcoinLogoIcon size="sm" className="text-amber-500" />
  </span>
);

const Footer = () => {
  const { openCookieSettings } = useCookieConsent();

  return (
    <footer className="bg-gradient-to-b from-black/50 to-black border-t border-amber-500/20">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-5">
            <Link to="/" className="inline-block">
              <FooterLogo />
            </Link>
            <p className="mt-4 text-gray-300 max-w-md">
              Dedicated to education about Bitcoin's role as the premier digital store of value in the modern financial landscape.
            </p>
            <div className="mt-6 flex space-x-3">
              <Button asChild variant="outline" className="rounded-full border-amber-500/50 text-amber-400 hover:bg-amber-500/10 hover:text-amber-300">
                <Link to="/about" className="flex items-center gap-2">
                  About Us <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="default" className="rounded-full bg-amber-500 hover:bg-amber-600 text-black">
                <Link to="/learn" className="flex items-center gap-2">
                  Start Learning <GraduationCap className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="font-semibold text-lg mb-4 text-amber-400">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/learn" className="text-gray-300 hover:text-amber-300 transition-colors flex items-center gap-2">
                  <BookOpen className="h-4 w-4" /> Learn
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-amber-300 transition-colors flex items-center gap-2">
                  <ArrowRight className="h-4 w-4" /> Resources
                </Link>
              </li>
              <li>
                <Link to="/manifesto" className="text-gray-300 hover:text-amber-300 transition-colors flex items-center gap-2">
                  <ArrowRight className="h-4 w-4" /> Manifesto
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-amber-300 transition-colors flex items-center gap-2">
                  <ArrowRight className="h-4 w-4" /> FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="font-semibold text-lg mb-4 text-amber-400">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://x.com/storeofvalue_ch" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-300 transition-colors flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" /> X (Twitter)
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-300 transition-colors flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" /> GitHub
                </a>
              </li>
              <li>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-300 transition-colors flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" /> Discord
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-amber-300 transition-colors flex items-center gap-2">
                  <ArrowRight className="h-4 w-4" /> Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <div className="bg-black/40 p-5 rounded-xl border border-amber-500/20">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="h-5 w-5 text-amber-500" />
                <h4 className="font-semibold text-amber-400">Educational Content</h4>
              </div>
              <p className="text-sm text-gray-300">
                All content is provided for educational purposes only. This is not financial advice. Do your own research before making any investment decisions.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-amber-500/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Store of Value. All rights reserved.
          </p>
          
          <div className="flex gap-6 items-center">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-amber-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-sm text-gray-400 hover:text-amber-300 transition-colors">
              Terms of Service
            </Link>
            <button 
              onClick={openCookieSettings}
              className="text-sm text-gray-400 hover:text-amber-300 transition-colors flex items-center gap-1.5"
            >
              <Cookie className="h-3.5 w-3.5" /> Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
