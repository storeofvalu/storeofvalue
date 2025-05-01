import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import BitcoinLogoIcon from '../components/BitcoinLogoIcon';
import { createWebsiteSchema } from '../components/StructuredData';
import { 
  BookOpen, 
  Library, 
  Shield, 
  Lock, 
  Clock, 
  ArrowRight, 
  History,
  Scroll,
  FileText,
  Users,
  Eye,
  EyeOff,
  Network,
  Scale,
  GraduationCap,
  CircleDollarSign,
  Building,
  Landmark,
  Key,
  User,
  Globe,
  Lightbulb,
  ExternalLink,
  Check,
  LucideIcon,
  Zap,
  Code,
  Hash,
  X,
  Calendar
} from 'lucide-react';

// Define a type for historical texts
interface HistoricalText {
  id: number;
  title: string;
  author: string;
  year: string;
  description: string;
  link: string;
  category: 'austrian' | 'cypherpunk' | 'libertarian';
  icon: LucideIcon;
}

const PhilosophicalFoundations = () => {
  // Create refs for each philosophy section
  const austrianRef = useRef<HTMLElement>(null);
  const cypherpunkRef = useRef<HTMLElement>(null);
  const libertarianRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLElement>(null);
  const designRef = useRef<HTMLElement>(null);
  
  // State for dropdown menu
  const [menuOpen, setMenuOpen] = useState(false);
  const [textsModalOpen, setTextsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'all' | 'austrian' | 'cypherpunk' | 'libertarian'>('all');
  
  // Historical texts data
  const historicalTexts: HistoricalText[] = [
    {
      id: 1,
      title: "The Denationalization of Money",
      author: "Friedrich A. Hayek",
      year: "1976",
      description: "Advocated for competing private currencies to end government monopoly on money—directly influencing Bitcoin's free-market approach.",
      link: "https://mises.org/library/denationalisation-money-argument-refined",
      category: "austrian",
      icon: Landmark
    },
    {
      id: 2,
      title: "The Theory of Money and Credit",
      author: "Ludwig von Mises",
      year: "1912",
      description: "Explained why money must be scarce and how government intervention causes economic cycles.",
      link: "https://mises.org/library/theory-money-and-credit",
      category: "austrian",
      icon: Landmark
    },
    {
      id: 3,
      title: "What Has Government Done to Our Money?",
      author: "Murray Rothbard",
      year: "1963",
      description: "Advocated for a return to sound, market-based money systems, explaining the problems with fiat currency.",
      link: "https://mises.org/library/what-has-government-done-our-money",
      category: "austrian",
      icon: Landmark
    },
    {
      id: 4,
      title: "A Cypherpunk's Manifesto",
      author: "Eric Hughes",
      year: "1993",
      description: "Articulated the need for privacy through cryptography and predicted the need for anonymous electronic money systems.",
      link: "https://www.activism.net/cypherpunk/manifesto.html",
      category: "cypherpunk",
      icon: Key
    },
    {
      id: 5,
      title: "The Crypto Anarchist Manifesto",
      author: "Timothy C. May",
      year: "1988",
      description: "Predicted how cryptography would fundamentally alter the nature of government regulation, creating private digital spaces beyond state control.",
      link: "https://www.activism.net/cypherpunk/crypto-anarchy.html",
      category: "cypherpunk",
      icon: Key
    },
    {
      id: 6,
      title: "B-money Proposal",
      author: "Wei Dai",
      year: "1998",
      description: "Described a protocol for an anonymous, distributed electronic cash system, directly referenced in Bitcoin's whitepaper.",
      link: "http://www.weidai.com/bmoney.txt",
      category: "cypherpunk",
      icon: Key
    },
    {
      id: 7,
      title: "Bit Gold",
      author: "Nick Szabo",
      year: "1998",
      description: "Proposed a system for a decentralized digital currency that utilized proof-of-work and a public ledger, precursor concepts to Bitcoin.",
      link: "https://nakamotoinstitute.org/bit-gold/",
      category: "cypherpunk",
      icon: Key
    },
    {
      id: 8,
      title: "The Ethics of Liberty",
      author: "Murray Rothbard",
      year: "1982",
      description: "A foundational text on natural law libertarianism that establishes the moral case for individual liberty and property rights.",
      link: "https://mises.org/library/ethics-liberty",
      category: "libertarian",
      icon: User
    },
    {
      id: 9,
      title: "The Sovereign Individual",
      author: "James Dale Davidson and William Rees-Mogg",
      year: "1997",
      description: "Predicted how digital technology would transform money and reduce government power, anticipating cryptocurrency decades before Bitcoin.",
      link: "https://nakamotoinstitute.org/the-sovereign-individual/",
      category: "libertarian",
      icon: User
    },
    {
      id: 10,
      title: "The Machinery of Freedom",
      author: "David Friedman",
      year: "1973",
      description: "Explores how private companies could replace government functions in a libertarian society, including monetary systems.",
      link: "http://daviddfriedman.com/The_Machinery_of_Freedom_.pdf",
      category: "libertarian",
      icon: User
    },
    {
      id: 11,
      title: "Bitcoin: A Peer-to-Peer Electronic Cash System",
      author: "Satoshi Nakamoto",
      year: "2008",
      description: "The original Bitcoin whitepaper that introduced the world to the first successful cryptocurrency, synthesizing ideas from all three philosophical traditions.",
      link: "https://bitcoin.org/bitcoin.pdf",
      category: "cypherpunk",
      icon: FileText
    }
  ];
  
  // Filtered texts based on active category
  const filteredTexts = activeCategory === 'all' 
    ? historicalTexts 
    : historicalTexts.filter(text => text.category === activeCategory);
  
  // Smooth scroll function
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    setMenuOpen(false);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  // Create structured data for SEO
  const philosophyPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Bitcoin's Philosophical Foundations",
    "description": "Explore the Austrian Economics, Cypherpunk, and Libertarian principles that shaped Bitcoin's design and purpose.",
    "keywords": "Bitcoin, philosophy, Austrian Economics, Cypherpunk, Libertarian, Hayek, sound money, cryptography, censorship resistance",
    "inLanguage": "en-US",
    "mainEntity": {
      "@type": "Article",
      "name": "Bitcoin's Philosophical Foundations",
      "headline": "The Philosophical Foundations of Bitcoin",
      "author": {
        "@type": "Organization",
        "name": "Bitcoin Education"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Bitcoin Education",
        "logo": {
          "@type": "ImageObject",
          "url": "https://storeofvalue.ch/images/logo.png"
        }
      }
    }
  };
  
  return (
    <Layout
      seo={{
        title: "Bitcoin's Philosophical Foundations",
        description: "Discover how Austrian Economics, Cypherpunk ideology, and Libertarian principles directly shaped Bitcoin's revolutionary design and continue to guide its evolution.",
        canonicalUrl: "/philosophical-foundations",
        ogImage: "/images/og-philosophical-foundations.jpg",
        ogType: "article",
        keywords: "bitcoin, austrian economics, cypherpunk, libertarian, philosophy, satoshi nakamoto, sound money, friedrich hayek, eric hughes, digital cash",
        structuredData: philosophyPageSchema
      }}
    >
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-orange-500/10 z-0"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-orange-500">
                  Philosophical Foundations
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  The underlying philosophical principles that birthed Bitcoin and continue to guide its evolution
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center mb-10">
                  <div className="relative">
                    <Button 
                      className="bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white border-none"
                      size="lg"
                      onClick={() => setMenuOpen(!menuOpen)}
                      aria-expanded={menuOpen}
                    >
                      <span className="mr-2">Explore Philosophies</span>
                      <ArrowRight className={`h-4 w-4 transition-transform duration-200 ${menuOpen ? 'rotate-90' : ''}`} />
                    </Button>
                    
                    {/* Dropdown Menu */}
                    {menuOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute mt-2 w-64 rounded-lg border bg-card shadow-lg z-50"
                      >
                        <div className="py-2 px-1">
                          <button
                            onClick={() => scrollToSection(austrianRef)}
                            className="flex items-center w-full px-3 py-2 text-sm rounded-md hover:bg-amber-500/10 transition-colors"
                          >
                            <Landmark className="h-4 w-4 text-amber-500 mr-2" />
                            <span>Austrian Economics</span>
                          </button>
                          <button
                            onClick={() => scrollToSection(cypherpunkRef)}
                            className="flex items-center w-full px-3 py-2 text-sm rounded-md hover:bg-purple-500/10 transition-colors"
                          >
                            <Key className="h-4 w-4 text-purple-500 mr-2" />
                            <span>Cypherpunk Ideology</span>
                          </button>
                          <button
                            onClick={() => scrollToSection(libertarianRef)}
                            className="flex items-center w-full px-3 py-2 text-sm rounded-md hover:bg-green-500/10 transition-colors"
                          >
                            <User className="h-4 w-4 text-green-500 mr-2" />
                            <span>Libertarian Principles</span>
                          </button>
                          <button
                            onClick={() => scrollToSection(designRef)}
                            className="flex items-center w-full px-3 py-2 text-sm rounded-md hover:bg-blue-500/10 transition-colors"
                          >
                            <Shield className="h-4 w-4 text-blue-500 mr-2" />
                            <span>Design Decisions</span>
                          </button>
                          <button
                            onClick={() => scrollToSection(timelineRef)}
                            className="flex items-center w-full px-3 py-2 text-sm rounded-md hover:bg-orange-500/10 transition-colors"
                          >
                            <History className="h-4 w-4 text-orange-500 mr-2" />
                            <span>Historical Timeline</span>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-purple-500/20 hover:bg-purple-500/5"
                    onClick={() => setTextsModalOpen(true)}
                  >
                    <BookOpen className="h-4 w-4 mr-2 text-purple-500" />
                    <span>Key Historical Texts</span>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Floating philosophical icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div 
              className="absolute top-1/4 left-1/5 bg-orange-500/20 p-3 rounded-full"
              animate={{ 
                y: [0, -15, 0], 
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Landmark className="h-8 w-8 text-orange-500" />
            </motion.div>
            
            <motion.div 
              className="absolute top-3/4 right-1/3 bg-purple-500/20 p-3 rounded-full"
              animate={{ 
                y: [0, 10, 0], 
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4,
                delay: 1, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Key className="h-6 w-6 text-purple-500" />
            </motion.div>
            
            <motion.div 
              className="absolute top-1/3 right-1/4 bg-blue-500/20 p-3 rounded-full"
              animate={{ 
                y: [0, -10, 0], 
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4.5,
                delay: 0.5, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Lock className="h-6 w-6 text-blue-500" />
            </motion.div>
            
            <motion.div 
              className="absolute top-2/3 left-1/4 bg-green-500/20 p-3 rounded-full"
              animate={{ 
                y: [0, 15, 0], 
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 5.5,
                delay: 1.5, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <User className="h-6 w-6 text-green-500" />
            </motion.div>
          </div>
        </section>
        
        {/* Historical Texts Modal */}
        <AnimatePresence>
          {textsModalOpen && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-background rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
              >
                <div className="p-6 border-b flex items-center justify-between">
                  <h3 className="text-2xl font-bold flex items-center">
                    <BookOpen className="h-6 w-6 mr-3 text-purple-500" />
                    Key Historical Texts
                  </h3>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setTextsModalOpen(false)}
                    className="rounded-full h-8 w-8"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="p-6 border-b">
                  <p className="text-muted-foreground mb-4">
                    These influential texts laid the philosophical and technical groundwork for Bitcoin's creation.
                  </p>
                  
                  <div className="flex space-x-2">
                    <Button 
                      variant={activeCategory === 'all' ? 'default' : 'outline'} 
                      size="sm"
                      onClick={() => setActiveCategory('all')}
                      className="rounded-full"
                    >
                      All Texts
                    </Button>
                    <Button 
                      variant={activeCategory === 'austrian' ? 'default' : 'outline'} 
                      size="sm"
                      onClick={() => setActiveCategory('austrian')}
                      className="rounded-full border-amber-500/20 text-amber-600 bg-amber-500/10 hover:bg-amber-500/20"
                    >
                      <Landmark className="h-3 w-3 mr-1" />
                      Austrian Economics
                    </Button>
                    <Button 
                      variant={activeCategory === 'cypherpunk' ? 'default' : 'outline'} 
                      size="sm"
                      onClick={() => setActiveCategory('cypherpunk')}
                      className="rounded-full border-purple-500/20 text-purple-600 bg-purple-500/10 hover:bg-purple-500/20"
                    >
                      <Key className="h-3 w-3 mr-1" />
                      Cypherpunk
                    </Button>
                    <Button 
                      variant={activeCategory === 'libertarian' ? 'default' : 'outline'} 
                      size="sm"
                      onClick={() => setActiveCategory('libertarian')}
                      className="rounded-full border-green-500/20 text-green-600 bg-green-500/10 hover:bg-green-500/20"
                    >
                      <User className="h-3 w-3 mr-1" />
                      Libertarian
                    </Button>
                  </div>
                </div>
                
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {filteredTexts.map((text) => {
                      const IconComponent = text.icon;
                      let colorClass = "";
                      
                      switch (text.category) {
                        case "austrian":
                          colorClass = "text-amber-500 bg-amber-500/10";
                          break;
                        case "cypherpunk":
                          colorClass = "text-purple-500 bg-purple-500/10";
                          break;
                        case "libertarian":
                          colorClass = "text-green-500 bg-green-500/10";
                          break;
                      }
                      
                      return (
                        <div key={text.id} className="bg-card rounded-xl border shadow-sm overflow-hidden">
                          <div className="p-4 flex items-start">
                            <div className={`rounded-full p-2 ${colorClass} mr-4 flex-shrink-0`}>
                              <IconComponent className="h-5 w-5" />
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <h4 className="font-bold">{text.title}</h4>
                                <div className="flex items-center text-xs text-muted-foreground ml-2">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  {text.year}
                                </div>
                              </div>
                              
                              <p className="text-sm text-muted-foreground my-2">{text.author}</p>
                              <p className="text-sm mt-2">{text.description}</p>
                              
                              <div className="mt-3 pt-3 border-t">
                                <a 
                                  href={text.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-sm font-medium inline-flex items-center text-blue-600 hover:text-blue-700"
                                >
                                  Read the text
                                  <ExternalLink className="h-3 w-3 ml-1" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
        
        {/* Austrian Economics Section */}
        <section ref={austrianRef} className="py-20 bg-gradient-to-r from-amber-500/5 to-amber-500/10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="md:w-2/3">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Austrian School of Economics</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                      The foundational economic philosophy that criticized central banking, fiat currency, and monetary inflation—key issues that Bitcoin was designed to address.
                    </p>
                  </div>
                  <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
                    <div className="rounded-full bg-amber-500/10 p-6">
                      <Landmark className="h-14 w-14 text-amber-500" />
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {/* Key Principle 1 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-card rounded-xl border shadow-md overflow-hidden"
                >
                  <div className="p-6 border-b bg-amber-500/5">
                    <h3 className="text-xl font-bold flex items-center">
                      <CircleDollarSign className="h-5 w-5 text-amber-500 mr-2" />
                      <span>Sound Money</span>
                    </h3>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-muted-foreground mb-6">
                      Money should maintain its value over time and resist artificial inflation, a principle Bitcoin embodies with its fixed supply of 21 million coins.
                    </p>
                    
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <p className="text-sm italic text-muted-foreground">
                        "I don't believe we shall ever have good money again before we take away from government the monopoly of issuing money."
                      </p>
                      <div className="text-sm font-medium mt-2">— Friedrich A. Hayek</div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Key Principle 2 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-card rounded-xl border shadow-md overflow-hidden"
                >
                  <div className="p-6 border-b bg-amber-500/5">
                    <h3 className="text-xl font-bold flex items-center">
                      <Building className="h-5 w-5 text-amber-500 mr-2" />
                      <span>Free Banking</span>
                    </h3>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-muted-foreground mb-6">
                      Austrian economists argue against central banks and for a competitive market of private currencies—Bitcoin realizes this vision as a non-state, market-driven currency.
                    </p>
                    
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <p className="text-sm italic text-muted-foreground">
                        "The denationalization of money would free us from the deep-rooted inflationary tendencies of our age."
                      </p>
                      <div className="text-sm font-medium mt-2">— Friedrich A. Hayek</div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Key Principle 3 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-card rounded-xl border shadow-md overflow-hidden"
                >
                  <div className="p-6 border-b bg-amber-500/5">
                    <h3 className="text-xl font-bold flex items-center">
                      <Scale className="h-5 w-5 text-amber-500 mr-2" />
                      <span>Subjective Value</span>
                    </h3>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-muted-foreground mb-6">
                      Value is determined by individuals in the market rather than imposed by authorities—Bitcoin's value emerges through voluntary adoption rather than decree.
                    </p>
                    
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <p className="text-sm italic text-muted-foreground">
                        "All things are only worth what someone else is willing to give for them."
                      </p>
                      <div className="text-sm font-medium mt-2">— Carl Menger</div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-xl border shadow-md p-6 mb-8"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <GraduationCap className="h-6 w-6 text-amber-500 mr-2" />
                  <span>Key Figures in Austrian Economics</span>
                </h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2 p-4 rounded-lg bg-muted/20">
                    <h4 className="font-bold">Friedrich A. Hayek</h4>
                    <p className="text-sm text-muted-foreground">Author of "The Denationalization of Money" (1976), which argued for competitive private currencies—a direct precursor to Bitcoin.</p>
                    <Link to="https://mises.org/library/denationalisation-money-argument-refined" target="_blank" className="text-amber-500 text-sm flex items-center">
                      <span>Read more</span>
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </Link>
                  </div>
                  
                  <div className="space-y-2 p-4 rounded-lg bg-muted/20">
                    <h4 className="font-bold">Ludwig von Mises</h4>
                    <p className="text-sm text-muted-foreground">His "The Theory of Money and Credit" (1912) explained why money must be scarce and how government intervention causes economic cycles.</p>
                    <Link to="https://mises.org/library/theory-money-and-credit" target="_blank" className="text-amber-500 text-sm flex items-center">
                      <span>Read more</span>
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </Link>
                  </div>
                  
                  <div className="space-y-2 p-4 rounded-lg bg-muted/20">
                    <h4 className="font-bold">Murray Rothbard</h4>
                    <p className="text-sm text-muted-foreground">His work "What Has Government Done to Our Money?" (1963) advocated for a return to sound, market-based money systems.</p>
                    <Link to="https://mises.org/library/what-has-government-done-our-money" target="_blank" className="text-amber-500 text-sm flex items-center">
                      <span>Read more</span>
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-amber-500/5 p-6 rounded-xl border"
              >
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-6 w-6 text-amber-500 mr-3" />
                  <h3 className="text-lg font-bold">Bitcoin's Austrian Design Elements</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-amber-500/10 p-1 rounded-full mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-amber-500" />
                    </div>
                    <div>
                      <span className="font-medium">Fixed Supply Cap</span>
                      <p className="text-sm text-muted-foreground mt-1">
                        Bitcoin's 21 million coin limit directly implements the Austrian principle that money should be scarce and resistant to debasement.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-amber-500/10 p-1 rounded-full mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-amber-500" />
                    </div>
                    <div>
                      <span className="font-medium">Predictable Issuance</span>
                      <p className="text-sm text-muted-foreground mt-1">
                        Bitcoin's transparent, algorithmic issuance schedule contrasts with the arbitrary monetary policy of central banks.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-amber-500/10 p-1 rounded-full mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-amber-500" />
                    </div>
                    <div>
                      <span className="font-medium">Market-Driven Value</span>
                      <p className="text-sm text-muted-foreground mt-1">
                        Bitcoin's price is determined purely by market forces, embodying the Austrian principle of subjective value theory.
                      </p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Cypherpunk Ideology Section */}
        <section ref={cypherpunkRef} className="py-20 bg-gradient-to-r from-purple-500/5 to-purple-500/10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="md:w-2/3">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Cypherpunk Ideology</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                      A movement advocating for privacy, cryptography, and resistance to surveillance that provided the technical foundation and cultural ethos for Bitcoin.
                    </p>
                  </div>
                  <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
                    <div className="rounded-full bg-purple-500/10 p-6">
                      <Key className="h-14 w-14 text-purple-500" />
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {/* Cypherpunk Manifesto */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-card rounded-xl border shadow-md overflow-hidden row-span-2"
                >
                  <div className="p-6 border-b bg-purple-500/5">
                    <h3 className="text-xl font-bold flex items-center">
                      <Scroll className="h-5 w-5 text-purple-500 mr-2" />
                      <span>The Cypherpunk Manifesto</span>
                    </h3>
                  </div>
                  
                  <div className="p-6">
                    <div className="bg-muted/20 p-5 rounded-lg mb-6">
                      <p className="text-sm italic text-muted-foreground mb-4">
                        "Privacy is necessary for an open society in the electronic age. Privacy is not secrecy. A private matter is something one doesn't want the whole world to know, but a secret matter is something one doesn't want anybody to know. Privacy is the power to selectively reveal oneself to the world."
                      </p>
                      <p className="text-sm italic text-muted-foreground mb-4">
                        "We the Cypherpunks are dedicated to building anonymous systems. We are defending our privacy with cryptography, with anonymous mail forwarding systems, with digital signatures, and with electronic money."
                      </p>
                      <div className="text-sm font-medium">— Eric Hughes, 1993</div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      The Cypherpunk Manifesto, written by Eric Hughes in 1993, articulated the vision that would eventually lead to Bitcoin's creation. It emphasized the importance of cryptography for protecting privacy and freedom in the digital age.
                    </p>
                    
                    <p className="text-muted-foreground mb-4">
                      The manifesto predicted the need for electronic money systems that preserve privacy and operate outside traditional banking systems—precisely what Bitcoin would later become.
                    </p>
                    
                    <div className="flex justify-center mt-4">
                      <Link to="https://www.activism.net/cypherpunk/manifesto.html" target="_blank" className="inline-flex items-center text-purple-500 hover:text-purple-600 transition-colors">
                        <span className="font-medium">Read the full manifesto</span>
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
                
                {/* Key Concepts Column */}
                <div className="space-y-8">
                  {/* Privacy */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-card rounded-xl border shadow-md overflow-hidden"
                  >
                    <div className="p-6 border-b bg-purple-500/5">
                      <h3 className="text-xl font-bold flex items-center">
                        <EyeOff className="h-5 w-5 text-purple-500 mr-2" />
                        <span>Privacy Through Technology</span>
                      </h3>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-muted-foreground mb-4">
                        Cypherpunks believed that privacy must be protected through technology rather than laws, as governments themselves are often the greatest threats to privacy.
                      </p>
                      
                      <div className="flex items-center p-3 bg-purple-500/5 rounded-lg">
                        <div className="mr-3 text-purple-500">→</div>
                        <div className="text-sm">
                          Bitcoin implements this principle with pseudonymous transactions that don't require personal identification.
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Cryptography */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-card rounded-xl border shadow-md overflow-hidden"
                  >
                    <div className="p-6 border-b bg-purple-500/5">
                      <h3 className="text-xl font-bold flex items-center">
                        <Lock className="h-5 w-5 text-purple-500 mr-2" />
                        <span>Cryptography as Freedom</span>
                      </h3>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-muted-foreground mb-4">
                        Cryptography was seen not just as a technical tool but as a political one—a way to preserve freedom in an increasingly surveilled digital world.
                      </p>
                      
                      <div className="flex items-center p-3 bg-purple-500/5 rounded-lg">
                        <div className="mr-3 text-purple-500">→</div>
                        <div className="text-sm">
                          Bitcoin uses cryptography to ensure that only the owner of private keys can spend their coins, regardless of what authorities might demand.
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Digital Cash */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-card rounded-xl border shadow-md overflow-hidden"
                  >
                    <div className="p-6 border-b bg-purple-500/5">
                      <h3 className="text-xl font-bold flex items-center">
                        <CircleDollarSign className="h-5 w-5 text-purple-500 mr-2" />
                        <span>Digital Cash Vision</span>
                      </h3>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-muted-foreground mb-4">
                        Cypherpunks worked on various digital cash systems throughout the 1990s, with Bitcoin ultimately fulfilling this long-sought goal of private, censorship-resistant electronic money.
                      </p>
                      
                      <div className="flex items-center p-3 bg-purple-500/5 rounded-lg">
                        <div className="mr-3 text-purple-500">→</div>
                        <div className="text-sm">
                          Bitcoin built upon earlier cypherpunk experiments like DigiCash, Bit Gold, and b-money to create the first successful implementation.
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-xl border shadow-md p-6 mb-8"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Users className="h-6 w-6 text-purple-500 mr-2" />
                  <span>Key Cypherpunk Figures</span>
                </h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2 p-4 rounded-lg bg-muted/20">
                    <h4 className="font-bold">Eric Hughes</h4>
                    <p className="text-sm text-muted-foreground">Author of the Cypherpunk Manifesto, which outlined the philosophical foundation for privacy-enhancing technologies.</p>
                  </div>
                  
                  <div className="space-y-2 p-4 rounded-lg bg-muted/20">
                    <h4 className="font-bold">Wei Dai</h4>
                    <p className="text-sm text-muted-foreground">Created b-money in 1998, a direct conceptual precursor to Bitcoin that was cited in Satoshi's whitepaper.</p>
                  </div>
                  
                  <div className="space-y-2 p-4 rounded-lg bg-muted/20">
                    <h4 className="font-bold">Hal Finney</h4>
                    <p className="text-sm text-muted-foreground">Developed the first reusable proof-of-work system and was the first person to receive a Bitcoin transaction from Satoshi.</p>
                  </div>
                  
                  <div className="space-y-2 p-4 rounded-lg bg-muted/20">
                    <h4 className="font-bold">Nick Szabo</h4>
                    <p className="text-sm text-muted-foreground">Created Bit Gold, which introduced the concept of solving computational puzzles to create scarce digital property.</p>
                  </div>
                  
                  <div className="space-y-2 p-4 rounded-lg bg-muted/20">
                    <h4 className="font-bold">Tim May</h4>
                    <p className="text-sm text-muted-foreground">Authored the Crypto Anarchist Manifesto and co-founded the cypherpunk mailing list where many Bitcoin precursors were discussed.</p>
                  </div>
                  
                  <div className="space-y-2 p-4 rounded-lg bg-muted/20">
                    <h4 className="font-bold">Adam Back</h4>
                    <p className="text-sm text-muted-foreground">Creator of Hashcash, the proof-of-work system that Bitcoin's mining algorithm is based on.</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-purple-500/5 p-6 rounded-xl border"
              >
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-6 w-6 text-purple-500 mr-3" />
                  <h3 className="text-lg font-bold">Bitcoin's Cypherpunk Elements</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-purple-500/10 p-1 rounded-full mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-purple-500" />
                    </div>
                    <div>
                      <span className="font-medium">Pseudonymous Transactions</span>
                      <p className="text-sm text-muted-foreground mt-1">
                        Bitcoin allows users to transact without revealing their real-world identity, implementing the cypherpunk value of privacy in financial matters.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-purple-500/10 p-1 rounded-full mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-purple-500" />
                    </div>
                    <div>
                      <span className="font-medium">Public-Key Cryptography</span>
                      <p className="text-sm text-muted-foreground mt-1">
                        Bitcoin uses asymmetric cryptography to secure transactions, a technology championed by cypherpunks as essential for digital privacy.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-purple-500/10 p-1 rounded-full mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-purple-500" />
                    </div>
                    <div>
                      <span className="font-medium">Trustless Verification</span>
                      <p className="text-sm text-muted-foreground mt-1">
                        Bitcoin's consensus mechanism eliminates the need to trust third parties, embodying the cypherpunk principle of minimizing required trust.
                      </p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Libertarian Principles Section */}
        <section ref={libertarianRef} className="py-20 bg-gradient-to-r from-green-500/5 to-green-500/10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="md:w-2/3">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Libertarian Principles</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                      The political philosophy focused on individual sovereignty, voluntary exchange, and minimal coercion that informed Bitcoin's permissionless and censorship-resistant design.
                    </p>
                  </div>
                  <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
                    <div className="rounded-full bg-green-500/10 p-6">
                      <User className="h-14 w-14 text-green-500" />
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {/* Core Principle 1 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-card rounded-xl border shadow-md overflow-hidden"
                >
                  <div className="p-6 border-b bg-green-500/5">
                    <h3 className="text-xl font-bold flex items-center">
                      <User className="h-5 w-5 text-green-500 mr-2" />
                      <span>Individual Sovereignty</span>
                    </h3>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-muted-foreground mb-6">
                      Each person has the right to self-determination and control over their own life, property, and choices without external interference.
                    </p>
                    
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <p className="text-sm italic text-muted-foreground">
                        "Every man is free to do that which he wills, provided he infringes not the equal freedom of any other man."
                      </p>
                      <div className="text-sm font-medium mt-2">— Herbert Spencer</div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Core Principle 2 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-card rounded-xl border shadow-md overflow-hidden"
                >
                  <div className="p-6 border-b bg-green-500/5">
                    <h3 className="text-xl font-bold flex items-center">
                      <Scale className="h-5 w-5 text-green-500 mr-2" />
                      <span>Voluntary Exchange</span>
                    </h3>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-muted-foreground mb-6">
                      Free market transactions between consenting individuals create value and should occur without external force or coercion.
                    </p>
                    
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <p className="text-sm italic text-muted-foreground">
                        "The most important single central fact about a free market is that no exchange takes place unless both parties benefit."
                      </p>
                      <div className="text-sm font-medium mt-2">— Milton Friedman</div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Core Principle 3 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-card rounded-xl border shadow-md overflow-hidden"
                >
                  <div className="p-6 border-b bg-green-500/5">
                    <h3 className="text-xl font-bold flex items-center">
                      <Building className="h-5 w-5 text-green-500 mr-2" />
                      <span>State Minimalism</span>
                    </h3>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-muted-foreground mb-6">
                      Centralized authorities and governments should be limited in their power, particularly over property rights and personal freedom.
                    </p>
                    
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <p className="text-sm italic text-muted-foreground">
                        "That government is best which governs least."
                      </p>
                      <div className="text-sm font-medium mt-2">— Henry David Thoreau</div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-xl border shadow-md p-6 mb-16"
              >
                <h3 className="text-xl font-bold mb-6">How Bitcoin Embodies Libertarian Values</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-green-500/10 p-2 rounded-full mr-4 flex-shrink-0">
                      <Globe className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Permissionless Access</h4>
                      <p className="text-muted-foreground">
                        Anyone can use Bitcoin regardless of location, wealth, status, or identity—no central authority can prevent participation, advancing equal access and financial inclusion.
                      </p>
                      <div className="mt-2 bg-green-500/5 p-3 rounded-lg text-sm">
                        <span className="font-medium">Bitcoin implementation:</span> Open network with no KYC requirements or restrictions on who can transact
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-500/10 p-2 rounded-full mr-4 flex-shrink-0">
                      <Shield className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Censorship Resistance</h4>
                      <p className="text-muted-foreground">
                        Bitcoin transactions cannot be blocked, frozen, or reversed by governments or other third parties, protecting the libertarian principle of freedom from external control.
                      </p>
                      <div className="mt-2 bg-green-500/5 p-3 rounded-lg text-sm">
                        <span className="font-medium">Bitcoin implementation:</span> Decentralized network with thousands of nodes ensuring no single point of control
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-500/10 p-2 rounded-full mr-4 flex-shrink-0">
                      <Key className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Self-Custody of Assets</h4>
                      <p className="text-muted-foreground">
                        Bitcoin enables individuals to have complete control over their wealth without requiring trusted third parties, aligning with libertarian ideals of self-sovereignty.
                      </p>
                      <div className="mt-2 bg-green-500/5 p-3 rounded-lg text-sm">
                        <span className="font-medium">Bitcoin implementation:</span> Private keys that give users direct control over their funds
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-8 mb-8"
              >
                <div className="bg-card rounded-xl border shadow-md overflow-hidden">
                  <div className="p-6 border-b bg-green-500/5">
                    <h3 className="text-xl font-bold flex items-center">
                      <BookOpen className="h-5 w-5 text-green-500 mr-2" />
                      <span>Key Libertarian Texts</span>
                    </h3>
                  </div>
                  
                  <div className="p-6">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <FileText className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <div>
                          <span className="font-medium">"The Ethics of Liberty" by Murray Rothbard (1982)</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            A foundational text on natural law libertarianism that establishes the moral case for individual liberty and property rights.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <FileText className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <div>
                          <span className="font-medium">"The Machinery of Freedom" by David Friedman (1973)</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            Explores how private companies could replace government functions in a libertarian society, including monetary systems.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <FileText className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <div>
                          <span className="font-medium">"Economics in One Lesson" by Henry Hazlitt (1946)</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            A primer on free-market economics that explains how interventions in markets often lead to unintended consequences.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-card rounded-xl border shadow-md overflow-hidden">
                  <div className="p-6 border-b bg-green-500/5">
                    <h3 className="text-xl font-bold flex items-center">
                      <Users className="h-5 w-5 text-green-500 mr-2" />
                      <span>Influential Libertarian Figures</span>
                    </h3>
                  </div>
                  
                  <div className="p-6">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <User className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Murray Rothbard</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            A key figure in both libertarianism and Austrian economics who provided intellectual foundations for Bitcoin's monetary policy.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <User className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Milton Friedman</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            Predicted the rise of digital money in 1999: "I think that the Internet is going to be one of the major forces for reducing the role of government."
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <User className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Ayn Rand</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            Her philosophy of Objectivism emphasized individual rights and rational self-interest, influencing many early Bitcoin adopters.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-green-500/5 p-6 rounded-xl border"
              >
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-6 w-6 text-green-500 mr-3" />
                  <h3 className="text-lg font-bold">Notable Bitcoin Libertarian Connections</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Many early Bitcoin developers, adopters, and promoters were explicitly libertarian, seeing Bitcoin as a practical tool for advancing their vision of a freer society.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-green-500/10 p-1 rounded-full mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                    <div>
                      <span className="font-medium">Bitcoin's Genesis Block</span>
                      <p className="text-sm text-muted-foreground mt-1">
                        Includes a Times headline about bank bailouts, indicating Satoshi's libertarian critique of the banking system.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-green-500/10 p-1 rounded-full mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                    <div>
                      <span className="font-medium">Early Adoption Communities</span>
                      <p className="text-sm text-muted-foreground mt-1">
                        Libertarian forums like those at mises.org were among the first places where Bitcoin gained traction.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-green-500/10 p-1 rounded-full mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                    <div>
                      <span className="font-medium">Satoshi's Own Writings</span>
                      <p className="text-sm text-muted-foreground mt-1">
                        Included libertarian themes about the problems of fiat currency and central banking.
                      </p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Bitcoin Design Decisions Section */}
        <section ref={designRef} className="py-20 bg-gradient-to-r from-blue-500/5 to-blue-500/10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Philosophical Influence on Design</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  How these three philosophical traditions directly shaped Bitcoin's key design decisions and technical features
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-card rounded-xl border shadow-md overflow-hidden"
                >
                  <div className="p-6 border-b">
                    <h3 className="text-xl font-bold flex items-center">
                      <Hash className="h-5 w-5 text-blue-500 mr-2" />
                      <span>Fixed Supply Cap (21 Million)</span>
                    </h3>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start p-4 rounded-lg bg-amber-500/5 border border-amber-500/10">
                        <Landmark className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium text-amber-500">Austrian Economics</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            Implements the Austrian principle that sound money must be scarce and resistant to debasement. The fixed supply creates digital scarcity, preventing inflation.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start p-4 rounded-lg bg-purple-500/5 border border-purple-500/10">
                        <Key className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium text-purple-500">Cypherpunk Ideology</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            The fixed supply is enforced by cryptography rather than trust in authorities, embodying the cypherpunk principle of mathematical certainty over institutional promises.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start p-4 rounded-lg bg-green-500/5 border border-green-500/10">
                        <User className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium text-green-500">Libertarian Principles</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            Removes monetary policy from government control, aligning with libertarian opposition to centralized economic planning and manipulation of the money supply.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-card rounded-xl border shadow-md overflow-hidden"
                >
                  <div className="p-6 border-b">
                    <h3 className="text-xl font-bold flex items-center">
                      <Eye className="h-5 w-5 text-blue-500 mr-2" />
                      <span>Pseudonymous Transactions</span>
                    </h3>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start p-4 rounded-lg bg-amber-500/5 border border-amber-500/10">
                        <Landmark className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium text-amber-500">Austrian Economics</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            Enables market participants to engage freely without identification requirements, supporting the Austrian emphasis on free market transactions and price discovery.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start p-4 rounded-lg bg-purple-500/5 border border-purple-500/10">
                        <Key className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium text-purple-500">Cypherpunk Ideology</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            Directly implements the cypherpunk commitment to privacy, allowing financial activity without surveillance while maintaining a transparent ledger.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start p-4 rounded-lg bg-green-500/5 border border-green-500/10">
                        <User className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium text-green-500">Libertarian Principles</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            Protects financial privacy as an essential aspect of individual sovereignty and freedom from state monitoring of personal economic choices.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-card rounded-xl border shadow-md overflow-hidden"
                >
                  <div className="p-6 border-b">
                    <h3 className="text-xl font-bold flex items-center">
                      <Globe className="h-5 w-5 text-blue-500 mr-2" />
                      <span>Permissionless Participation</span>
                    </h3>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start p-4 rounded-lg bg-amber-500/5 border border-amber-500/10">
                        <Landmark className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium text-amber-500">Austrian Economics</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            Creates a truly free market for money, allowing competition rather than monopoly provision of currency, as advocated by Hayek.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start p-4 rounded-lg bg-purple-500/5 border border-purple-500/10">
                        <Key className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium text-purple-500">Cypherpunk Ideology</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            Fulfills the cypherpunk vision of systems that cannot discriminate or censor based on identity, allowing universal access regardless of status.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start p-4 rounded-lg bg-green-500/5 border border-green-500/10">
                        <User className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium text-green-500">Libertarian Principles</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            Embodies libertarian advocacy for open access and voluntary participation, removing gatekeepers and permission requirements.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-card rounded-xl border shadow-md overflow-hidden"
                >
                  <div className="p-6 border-b">
                    <h3 className="text-xl font-bold flex items-center">
                      <Shield className="h-5 w-5 text-blue-500 mr-2" />
                      <span>Censorship Resistance</span>
                    </h3>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start p-4 rounded-lg bg-amber-500/5 border border-amber-500/10">
                        <Landmark className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium text-amber-500">Austrian Economics</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            Protects against capital controls and confiscation, preserving the Austrian principle that property rights are essential for economic calculation and prosperity.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start p-4 rounded-lg bg-purple-500/5 border border-purple-500/10">
                        <Key className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium text-purple-500">Cypherpunk Ideology</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            Uses cryptography to ensure that not even powerful entities can block or reverse transactions, implementing the cypherpunk goal of technology-based freedom.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start p-4 rounded-lg bg-green-500/5 border border-green-500/10">
                        <User className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium text-green-500">Libertarian Principles</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            Directly counters state power over financial transactions, enabling resistance to economic control and financial surveillance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-xl border shadow-md p-6 mb-8"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Network className="h-6 w-6 text-blue-500 mr-2" />
                  <span>Philosophical Harmony in Bitcoin's Design</span>
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  Bitcoin's brilliance lies in how it synthesizes these three philosophical traditions into a coherent whole. Each philosophical strand reinforces the others:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-muted/20 p-5 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="h-8 w-8 rounded-full bg-amber-500/10 flex items-center justify-center mr-3">
                        <Landmark className="h-4 w-4 text-amber-500" />
                      </div>
                      <div className="h-8 w-8 rounded-full bg-purple-500/10 flex items-center justify-center mr-3">
                        <Key className="h-4 w-4 text-purple-500" />
                      </div>
                      <span className="font-medium">Austrian Economics + Cypherpunk Ideology</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Austrian economists theorized that sound money must be scarce and market-driven, while cypherpunks provided the cryptographic tools to enforce scarcity digitally without requiring trust in authorities.
                    </p>
                  </div>
                  
                  <div className="bg-muted/20 p-5 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="h-8 w-8 rounded-full bg-purple-500/10 flex items-center justify-center mr-3">
                        <Key className="h-4 w-4 text-purple-500" />
                      </div>
                      <div className="h-8 w-8 rounded-full bg-green-500/10 flex items-center justify-center mr-3">
                        <User className="h-4 w-4 text-green-500" />
                      </div>
                      <span className="font-medium">Cypherpunk Ideology + Libertarian Principles</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Libertarians identified the problem of government control over money, while cypherpunks provided the technical means to create systems outside government control through privacy-enhancing technologies.
                    </p>
                  </div>
                  
                  <div className="bg-muted/20 p-5 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="h-8 w-8 rounded-full bg-green-500/10 flex items-center justify-center mr-3">
                        <User className="h-4 w-4 text-green-500" />
                      </div>
                      <div className="h-8 w-8 rounded-full bg-amber-500/10 flex items-center justify-center mr-3">
                        <Landmark className="h-4 w-4 text-amber-500" />
                      </div>
                      <span className="font-medium">Libertarian Principles + Austrian Economics</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Austrian economics provided the theoretical case against central banking, while libertarianism provided the moral and political framework for why individuals should have sovereignty over money.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-blue-500/5 p-6 rounded-xl border"
              >
                <div className="flex items-center mb-4">
                  <BitcoinLogoIcon className="h-6 w-6 text-orange-500 mr-3" />
                  <h3 className="text-lg font-bold">Bitcoin's Continuing Philosophical Evolution</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  As Bitcoin has grown beyond its original community, its philosophical foundations remain evident in ongoing debates and development priorities:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-500/10 p-1 rounded-full mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-blue-500" />
                    </div>
                    <div>
                      <span className="font-medium">Conservative Development Approach</span>
                      <p className="text-sm text-muted-foreground mt-1">
                        The Bitcoin development community's prioritization of security and decentralization over features and innovation speed reflects the Austrian economic principle of stability in money.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-blue-500/10 p-1 rounded-full mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-blue-500" />
                    </div>
                    <div>
                      <span className="font-medium">Resistance to Corporate Capture</span>
                      <p className="text-sm text-muted-foreground mt-1">
                        The rejection of attempts to fundamentally alter Bitcoin's properties (like the block size wars) reflects both libertarian resistance to centralization and cypherpunk emphasis on user sovereignty.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-blue-500/10 p-1 rounded-full mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-blue-500" />
                    </div>
                    <div>
                      <span className="font-medium">Focus on Self-Custody Solutions</span>
                      <p className="text-sm text-muted-foreground mt-1">
                        The community's continued emphasis on non-custodial wallets and solutions reflects the libertarian principle of individual sovereignty and the cypherpunk value of minimizing required trust.
                      </p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Historical Timeline Section - NEW DESIGN */}
        <section ref={timelineRef} className="py-20 bg-gradient-to-r from-amber-500/5 via-purple-500/5 to-green-500/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Philosophical Timeline</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Key moments in the development of Bitcoin's philosophical foundations
                </p>
              </motion.div>
              
              <div className="relative">
                {/* Desktop timeline line */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 via-purple-500 to-green-500 rounded-full" style={{ transform: 'translateX(-50%)' }}></div>
                
                {/* Timeline Items */}
                <div className="space-y-16">
                  {/* 1974 - Austrian Economics */}
                  <div className="relative">
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                      className="md:ml-[50%] md:pl-12 relative"
                    >
                      {/* Mobile year badge */}
                      <div className="md:hidden absolute -left-2 top-0 bg-amber-500 text-white h-8 w-16 rounded-full flex items-center justify-center font-bold text-sm shadow-md z-10">1974</div>
                      
                      {/* Connection to timeline */}
                      <div className="hidden md:block absolute left-0 top-1/2 h-[3px] w-10 bg-amber-500" style={{ transform: 'translateY(-50%)' }}></div>
                      
                      {/* Dot on timeline */}
                      <div className="hidden md:flex absolute -left-[38px] top-1/2 w-16 h-16 rounded-full bg-background border-2 border-amber-500 items-center justify-center" style={{ transform: 'translateY(-50%)' }}>
                        <Landmark className="h-8 w-8 text-amber-500" />
                      </div>
                      
                      {/* Content card */}
                      <div className="pl-8 md:pl-0 ml-4 md:ml-0">
                        <div className="bg-card rounded-xl border shadow-md overflow-hidden">
                          <div className="p-6 border-b border-amber-500/10 bg-amber-500/5 flex flex-col md:flex-row justify-between items-start md:items-center">
                            <div>
                              <h3 className="text-xl font-bold">Hayek's Denationalization of Money</h3>
                              <p className="text-sm text-muted-foreground mt-1">Austrian Economics</p>
                            </div>
                            <span className="hidden md:block text-amber-500 font-mono font-bold">1974</span>
                          </div>
                          <div className="p-6">
                            <div className="flex">
                              <div className="md:hidden mr-4 mt-1 flex-shrink-0">
                                <div className="h-10 w-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                                  <Landmark className="h-5 w-5 text-amber-500" />
                                </div>
                              </div>
                              <div>
                                <p className="text-muted-foreground">
                                  Friedrich Hayek publishes "The Denationalization of Money," advocating for competing private currencies to end government monopoly on money—directly influencing Bitcoin's free-market approach.
                                </p>
                                <div className="mt-4 flex">
                                  <Link to="https://mises.org/library/denationalisation-money-argument-refined" target="_blank" className="text-amber-500 text-sm flex items-center hover:text-amber-600 transition-colors">
                                    <span className="font-medium">Read Hayek's work</span>
                                    <ExternalLink className="h-3 w-3 ml-1" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* 1993 - Cypherpunk */}
                  <div className="relative">
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                      className="md:mr-[50%] md:pr-12 relative"
                    >
                      {/* Mobile year badge */}
                      <div className="md:hidden absolute -left-2 top-0 bg-purple-500 text-white h-8 w-16 rounded-full flex items-center justify-center font-bold text-sm shadow-md z-10">1993</div>
                      
                      {/* Connection to timeline */}
                      <div className="hidden md:block absolute right-0 top-1/2 h-[3px] w-10 bg-purple-500" style={{ transform: 'translateY(-50%)' }}></div>
                      
                      {/* Dot on timeline */}
                      <div className="hidden md:flex absolute -right-[38px] top-1/2 w-16 h-16 rounded-full bg-background border-2 border-purple-500 items-center justify-center" style={{ transform: 'translateY(-50%)' }}>
                        <Key className="h-8 w-8 text-purple-500" />
                      </div>
                      
                      {/* Content card */}
                      <div className="pl-8 md:pl-0 ml-4 md:ml-0">
                        <div className="bg-card rounded-xl border shadow-md overflow-hidden">
                          <div className="p-6 border-b border-purple-500/10 bg-purple-500/5 flex flex-col md:flex-row justify-between items-start md:items-center">
                            <div>
                              <h3 className="text-xl font-bold">The Cypherpunk Manifesto</h3>
                              <p className="text-sm text-muted-foreground mt-1">Cypherpunk Ideology</p>
                            </div>
                            <span className="hidden md:block text-purple-500 font-mono font-bold">1993</span>
                          </div>
                          <div className="p-6">
                            <div className="flex">
                              <div className="md:hidden mr-4 mt-1 flex-shrink-0">
                                <div className="h-10 w-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                                  <Key className="h-5 w-5 text-purple-500" />
                                </div>
                              </div>
                              <div>
                                <p className="text-muted-foreground">
                                  Eric Hughes publishes "A Cypherpunk's Manifesto," articulating the need for privacy through cryptography and predicting the need for anonymous electronic money systems.
                                </p>
                                <div className="mt-4 flex">
                                  <Link to="https://www.activism.net/cypherpunk/manifesto.html" target="_blank" className="text-purple-500 text-sm flex items-center hover:text-purple-600 transition-colors">
                                    <span className="font-medium">Read the manifesto</span>
                                    <ExternalLink className="h-3 w-3 ml-1" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* 1997 - Libertarian */}
                  <div className="relative">
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                      className="md:ml-[50%] md:pl-12 relative"
                    >
                      {/* Mobile year badge */}
                      <div className="md:hidden absolute -left-2 top-0 bg-green-500 text-white h-8 w-16 rounded-full flex items-center justify-center font-bold text-sm shadow-md z-10">1997</div>
                      
                      {/* Connection to timeline */}
                      <div className="hidden md:block absolute left-0 top-1/2 h-[3px] w-10 bg-green-500" style={{ transform: 'translateY(-50%)' }}></div>
                      
                      {/* Dot on timeline */}
                      <div className="hidden md:flex absolute -left-[38px] top-1/2 w-16 h-16 rounded-full bg-background border-2 border-green-500 items-center justify-center" style={{ transform: 'translateY(-50%)' }}>
                        <User className="h-8 w-8 text-green-500" />
                      </div>
                      
                      {/* Content card */}
                      <div className="pl-8 md:pl-0 ml-4 md:ml-0">
                        <div className="bg-card rounded-xl border shadow-md overflow-hidden">
                          <div className="p-6 border-b border-green-500/10 bg-green-500/5 flex flex-col md:flex-row justify-between items-start md:items-center">
                            <div>
                              <h3 className="text-xl font-bold">The Sovereign Individual</h3>
                              <p className="text-sm text-muted-foreground mt-1">Libertarian Principles</p>
                            </div>
                            <span className="hidden md:block text-green-500 font-mono font-bold">1997</span>
                          </div>
                          <div className="p-6">
                            <div className="flex">
                              <div className="md:hidden mr-4 mt-1 flex-shrink-0">
                                <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center">
                                  <User className="h-5 w-5 text-green-500" />
                                </div>
                              </div>
                              <div>
                                <p className="text-muted-foreground">
                                  James Dale Davidson and William Rees-Mogg publish their libertarian treatise predicting how digital technology would transform money and reduce government power.
                                </p>
                                <div className="mt-4 py-3 px-4 bg-green-500/5 rounded-lg border border-green-500/10">
                                  <p className="text-sm italic text-muted-foreground">
                                    "The new digital money will be a liberating force... reducing the capacity of governments to tax."
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* 2008 - Bitcoin Whitepaper */}
                  <div className="relative">
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                      className="md:mr-[50%] md:pr-12 relative"
                    >
                      {/* Mobile year badge */}
                      <div className="md:hidden absolute -left-2 top-0 bg-blue-500 text-white h-8 w-16 rounded-full flex items-center justify-center font-bold text-sm shadow-md z-10">2008</div>
                      
                      {/* Connection to timeline */}
                      <div className="hidden md:block absolute right-0 top-1/2 h-[3px] w-10 bg-blue-500" style={{ transform: 'translateY(-50%)' }}></div>
                      
                      {/* Dot on timeline */}
                      <div className="hidden md:flex absolute -right-[38px] top-1/2 w-16 h-16 rounded-full bg-background border-2 border-blue-500 items-center justify-center" style={{ transform: 'translateY(-50%)' }}>
                        <FileText className="h-8 w-8 text-blue-500" />
                      </div>
                      
                      {/* Content card */}
                      <div className="pl-8 md:pl-0 ml-4 md:ml-0">
                        <div className="bg-card rounded-xl border shadow-md overflow-hidden">
                          <div className="p-6 border-b border-blue-500/10 bg-blue-500/5 flex flex-col md:flex-row justify-between items-start md:items-center">
                            <div>
                              <h3 className="text-xl font-bold">Bitcoin Whitepaper</h3>
                              <p className="text-sm text-muted-foreground mt-1">Synthesis of Philosophies</p>
                            </div>
                            <span className="hidden md:block text-blue-500 font-mono font-bold">2008</span>
                          </div>
                          <div className="p-6">
                            <div className="flex">
                              <div className="md:hidden mr-4 mt-1 flex-shrink-0">
                                <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                                  <FileText className="h-5 w-5 text-blue-500" />
                                </div>
                              </div>
                              <div>
                                <p className="text-muted-foreground">
                                  Satoshi Nakamoto publishes "Bitcoin: A Peer-to-Peer Electronic Cash System," synthesizing Austrian economics, cypherpunk technology, and libertarian ideals into a revolutionary design.
                                </p>
                                <div className="mt-4 flex">
                                  <Link to="https://bitcoin.org/bitcoin.pdf" target="_blank" className="text-blue-500 text-sm flex items-center hover:text-blue-600 transition-colors">
                                    <span className="font-medium">Read the whitepaper</span>
                                    <ExternalLink className="h-3 w-3 ml-1" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* 2009 - Genesis Block */}
                  <div className="relative">
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                      className="md:ml-[50%] md:pl-12 relative"
                    >
                      {/* Mobile year badge */}
                      <div className="md:hidden absolute -left-2 top-0 bg-orange-500 text-white h-8 w-16 rounded-full flex items-center justify-center font-bold text-sm shadow-md z-10">2009</div>
                      
                      {/* Connection to timeline */}
                      <div className="hidden md:block absolute left-0 top-1/2 h-[3px] w-10 bg-orange-500" style={{ transform: 'translateY(-50%)' }}></div>
                      
                      {/* Dot on timeline */}
                      <div className="hidden md:flex absolute -left-[38px] top-1/2 w-16 h-16 rounded-full bg-background border-2 border-orange-500 items-center justify-center" style={{ transform: 'translateY(-50%)' }}>
                        <BitcoinLogoIcon className="h-8 w-8 text-orange-500" />
                      </div>
                      
                      {/* Content card */}
                      <div className="pl-8 md:pl-0 ml-4 md:ml-0">
                        <div className="bg-card rounded-xl border shadow-md overflow-hidden">
                          <div className="p-6 border-b border-orange-500/10 bg-orange-500/5 flex flex-col md:flex-row justify-between items-start md:items-center">
                            <div>
                              <h3 className="text-xl font-bold">Genesis Block</h3>
                              <p className="text-sm text-muted-foreground mt-1">Philosophy Becomes Reality</p>
                            </div>
                            <span className="hidden md:block text-orange-500 font-mono font-bold">2009</span>
                          </div>
                          <div className="p-6">
                            <div className="flex">
                              <div className="md:hidden mr-4 mt-1 flex-shrink-0">
                                <div className="h-10 w-10 rounded-full bg-orange-500/10 flex items-center justify-center">
                                  <BitcoinLogoIcon className="h-5 w-5 text-orange-500" />
                                </div>
                              </div>
                              <div>
                                <p className="text-muted-foreground">
                                  Bitcoin's first block includes a Times headline about bank bailouts, embedding a critique of the banking system that emphasizes Bitcoin's philosophical purpose.
                                </p>
                                <div className="mt-4 p-4 bg-orange-500/5 border border-orange-500/10 rounded-lg font-mono text-sm">
                                  <p className="text-muted-foreground break-all">
                                    "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-purple-500/5 via-orange-500/5 to-green-500/5">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Explore Bitcoin's Philosophical Foundations Further
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Understanding the philosophical roots of Bitcoin reveals its true significance as more than just a technology—it is the practical implementation of powerful ideas about freedom, economics, and human organization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/principles" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-11 px-8">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Bitcoin Principles
                </Link>
                <Link to="/resources" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow hover:bg-secondary/80 h-11 px-8">
                  <Library className="mr-2 h-5 w-5" />
                  Reading Resources
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default PhilosophicalFoundations; 