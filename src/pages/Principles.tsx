import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  BookOpen, 
  Shield, 
  CheckCircle2, 
  Infinity, 
  Lock, 
  Scale, 
  Layers, 
  Percent,
  Landmark,
  SplitSquareVertical,
  Timer,
  CheckSquare,
  Ban
} from 'lucide-react';
import BitcoinLogoIcon from '../components/BitcoinLogoIcon';

// Monetary Principles with color styling
const monetaryPrinciples = [
  {
    title: "Fixed Supply",
    icon: Percent,
    color: "amber",
    description: [
      "Bitcoin has a capped supply of 21 million coins, creating true digital scarcity. Unlike fiat currencies that can be printed at will, the Bitcoin protocol ensures that no more coins can ever be created beyond this limit.",
      "This principle makes Bitcoin disinflationary by design, with a transparent and predictable issuance schedule that will eventually reach zero."
    ]
  },
  {
    title: "Decentralization",
    icon: Landmark,
    color: "blue",
    description: [
      "No single entity, government, or organization controls Bitcoin. It operates through a global network of nodes that maintain consensus without central authority, making it resistant to censorship and control.",
      "This distributed architecture ensures that Bitcoin cannot be manipulated by special interests or centralized powers, protecting its integrity as a neutral store of value."
    ]
  },
  {
    title: "Immutability",
    icon: Lock,
    color: "green",
    description: [
      "Once recorded on the blockchain, Bitcoin transactions cannot be altered or reversed. This immutability creates a definitive record of ownership and transfers, establishing an unalterable history of transactions.",
      "This principle ensures that Bitcoin's ledger maintains its integrity over time, creating a trustworthy foundation for long-term value storage."
    ]
  },
  {
    title: "Security",
    icon: Shield,
    color: "purple",
    description: [
      "Bitcoin is secured by cryptography and a proof-of-work consensus mechanism that makes the network extremely difficult to attack. The longer Bitcoin exists, the more secure it becomes.",
      "This security model has been battle-tested for over a decade, demonstrating resilience against various attack vectors and establishing confidence in its long-term viability."
    ]
  }
];

// Store of Value Properties
const valueProperties = [
  {
    title: "Portability",
    icon: ArrowRight,
    description: "Bitcoin can be transported across borders without physical constraints. A user can carry billions of dollars worth of Bitcoin in a small hardware wallet, or even memorize a seed phrase to transport value without any physical medium at all. This frictionless movement of value is unprecedented in human history."
  },
  {
    title: "Divisibility",
    icon: SplitSquareVertical,
    description: "Each Bitcoin can be divided into 100,000,000 satoshis (0.00000001 BTC), allowing for microscopic value transfer. This extreme divisibility enables Bitcoin to function as a store of value at any scale, from the smallest transactions to transferring billions in value."
  },
  {
    title: "Durability",
    icon: Timer,
    description: "As digital information secured by cryptography, Bitcoin doesn't physically degrade. It can be backed up and stored in multiple locations simultaneously. Unlike physical assets that can be damaged, destroyed, or deteriorate over time, Bitcoin exists as long as the network continues to function."
  },
  {
    title: "Verifiability",
    icon: CheckSquare,
    description: "Anyone can verify Bitcoin transactions and holdings independently without relying on third parties. This transparency allows for unprecedented auditability, eliminating the need to trust custodians or institutions to confirm ownership and authenticity."
  },
  {
    title: "Censorship Resistance",
    icon: Ban,
    description: "Properly secured Bitcoin cannot be confiscated or frozen by third parties, including governments. This property ensures that an individual's stored value remains under their sole control regardless of geopolitical events, sanctions, or other external pressures."
  }
];

// Helper function for color classes
const getColorClass = (color: string, type: 'border' | 'bg' | 'text', opacity?: string) => {
  const opacitySuffix = opacity ? `/${opacity}` : '';
  
  if (type === 'border') {
    return {
      amber: `border-amber-500${opacitySuffix}`,
      blue: `border-blue-500${opacitySuffix}`,
      green: `border-green-500${opacitySuffix}`,
      purple: `border-purple-500${opacitySuffix}`,
      red: `border-red-500${opacitySuffix}`,
      orange: `border-orange-500${opacitySuffix}`,
    }[color] || `border-gray-500${opacitySuffix}`;
  }
  
  if (type === 'bg') {
    return {
      amber: `bg-amber-500${opacitySuffix}`,
      blue: `bg-blue-500${opacitySuffix}`,
      green: `bg-green-500${opacitySuffix}`,
      purple: `bg-purple-500${opacitySuffix}`,
      red: `bg-red-500${opacitySuffix}`,
      orange: `bg-orange-500${opacitySuffix}`,
    }[color] || `bg-gray-500${opacitySuffix}`;
  }
  
  return {
    amber: `text-amber-500${opacitySuffix}`,
    blue: `text-blue-500${opacitySuffix}`,
    green: `text-green-500${opacitySuffix}`,
    purple: `text-purple-500${opacitySuffix}`,
    red: `text-red-500${opacitySuffix}`,
    orange: `text-orange-500${opacitySuffix}`,
  }[color] || `text-gray-500${opacitySuffix}`;
};

// Animated principle card
const PrincipleCard = ({ principle, index }: { principle: typeof monetaryPrinciples[0], index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const bgClass = getColorClass(principle.color, 'bg', '5');
  const textClass = getColorClass(principle.color, 'text');
  const borderClass = getColorClass(principle.color, 'border');
  
  const y = useTransform(scrollYProgress, [0, 0.3, 1], [50, 0, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  
  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="h-full"
    >
      <Card className={`h-full bg-card border-border overflow-hidden hover:shadow-md transition-shadow duration-300`}>
        <CardContent className="p-0 h-full flex flex-col">
          <div className={`bg-gradient-to-r ${getColorClass(principle.color, 'bg', '10')} to-background/80 p-6 border-b ${borderClass}`}>
            <h3 className="text-2xl font-semibold flex items-center gap-3">
              <div className={`p-2 rounded-full ${getColorClass(principle.color, 'bg', '20')}`}>
                {React.createElement(principle.icon, { className: `h-5 w-5 ${textClass}` })}
              </div>
              <span>{principle.title}</span>
            </h3>
          </div>
          <div className="p-6 space-y-4 flex-grow">
            {principle.description.map((paragraph, i) => (
              <p key={i} className="text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Animated value property card
const ValuePropertyCard = ({ property, index }: { property: typeof valueProperties[0], index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const x = useTransform(scrollYProgress, [0, 0.3, 1], [index % 2 === 0 ? -50 : 50, 0, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  
  return (
    <motion.div
      ref={ref}
      style={{ x, opacity }}
      className="py-6"
    >
      <Card className="p-1 bg-gradient-to-br from-amber-500/5 via-background to-background overflow-hidden">
        <div className="bg-card p-8 rounded-lg">
          <div className="flex flex-col sm:flex-row sm:items-start gap-6">
            <div className="bg-amber-500/10 p-3 rounded-full">
              {React.createElement(property.icon, { className: "h-6 w-6 text-amber-500" })}
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">{property.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {property.description}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const PrinciplesPage = () => {
  // For parallax effect
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute w-full h-full">
            <svg className="w-full h-full opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="gridPattern" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#gridPattern)" />
            </svg>
          </div>
        </div>
        
        {/* Bitcoin network background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            style={{ y }}
            className="w-full h-full relative"
          >
            <svg viewBox="0 0 1000 1000" className="absolute top-0 left-0 w-full h-full opacity-5">
              {/* Connected nodes as a network */}
              <line x1="100" y1="100" x2="300" y2="200" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              <line x1="300" y1="200" x2="500" y2="150" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              <line x1="500" y1="150" x2="700" y2="250" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              <line x1="700" y1="250" x2="900" y2="200" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              
              <line x1="200" y1="400" x2="400" y2="350" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              <line x1="400" y1="350" x2="500" y2="150" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              <line x1="400" y1="350" x2="600" y2="450" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              <line x1="600" y1="450" x2="800" y2="500" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              
              <line x1="100" y1="700" x2="300" y2="650" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              <line x1="300" y1="650" x2="500" y2="600" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              <line x1="500" y1="600" x2="600" y2="450" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              <line x1="500" y1="600" x2="700" y2="700" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              <line x1="700" y1="700" x2="900" y2="750" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              
              {/* Network nodes */}
              <circle cx="100" cy="100" r="4" fill="#F7931A" />
              <circle cx="300" cy="200" r="4" fill="#F7931A" />
              <circle cx="500" cy="150" r="6" fill="#F7931A" />
              <circle cx="700" cy="250" r="4" fill="#F7931A" />
              <circle cx="900" cy="200" r="4" fill="#F7931A" />
              
              <circle cx="200" cy="400" r="4" fill="#F7931A" />
              <circle cx="400" cy="350" r="5" fill="#F7931A" />
              <circle cx="600" cy="450" r="6" fill="#F7931A" />
              <circle cx="800" cy="500" r="4" fill="#F7931A" />
              
              <circle cx="100" cy="700" r="4" fill="#F7931A" />
              <circle cx="300" cy="650" r="4" fill="#F7931A" />
              <circle cx="500" cy="600" r="5" fill="#F7931A" />
              <circle cx="700" cy="700" r="4" fill="#F7931A" />
              <circle cx="900" cy="750" r="4" fill="#F7931A" />
            </svg>
          </motion.div>
        </div>
        
        <motion.div
          className="container mx-auto px-4 relative z-10 text-center"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 px-3 py-1 bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 transition-colors">
              <Scale className="mr-1 h-3.5 w-3.5" />
              <span>Foundation</span>
            </Badge>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-5">
                <BitcoinLogoIcon className="h-80 w-80 text-amber-500" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-8 text-foreground relative">
                Core Principles
              </h1>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <motion.p 
                className="text-xl md:text-2xl leading-relaxed text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                The Store of Value thesis is built on several fundamental principles that establish 
                Bitcoin's unique position in the monetary landscape. These principles form the foundation 
                of why Bitcoin represents a revolutionary approach to preserving wealth.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-muted-foreground rounded-full mt-2"></div>
          </div>
        </motion.div>
          </section>
          
      <main className="relative">
        {/* Monetary Principles Section */}
        <section className="py-24 bg-gradient-to-b from-background to-background/90">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Badge className="mb-6 px-3 py-1 bg-orange-500/80 text-white hover:bg-orange-600 transition-colors">
                  <Landmark className="mr-1 h-3.5 w-3.5" />
                  <span>Monetary Foundation</span>
                </Badge>
                
                <h2 className="text-3xl md:text-5xl font-bold mb-8">Monetary Principles</h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                  These fundamental monetary principles distinguish Bitcoin from all other assets and establish its foundation as a superior store of value.
                </p>
              </motion.div>
            </div>
            
            <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {monetaryPrinciples.map((principle, index) => (
                  <PrincipleCard key={index} principle={principle} index={index} />
                ))}
              </div>
            </div>
                  </div>
        </section>
        
        {/* Store of Value Properties Section */}
        <section className="py-24 bg-card/5 border-y border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Badge className="mb-6 px-3 py-1 bg-amber-500 text-white hover:bg-amber-600 transition-colors">
                  <Layers className="mr-1 h-3.5 w-3.5" />
                  <span>Value Properties</span>
                </Badge>
                
                <h2 className="text-3xl md:text-5xl font-bold mb-8">Store of Value Properties</h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                  Bitcoin exhibits the classic properties of a store of value, but with significant improvements over traditional assets
                </p>
              </motion.div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {valueProperties.map((property, index) => (
                <ValuePropertyCard key={index} property={property} index={index} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Bitcoin as Ultimate SoV Section */}
        <section className="py-24 bg-gradient-to-br from-amber-950/5 via-background to-amber-950/5 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-5">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F7931A" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#F7931A" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grad)"/>
            </svg>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="relative aspect-square flex items-center justify-center">
                    <div className="absolute inset-0 bg-amber-500/5 rounded-full blur-3xl"></div>
                    <div className="relative">
                      <BitcoinLogoIcon className="h-32 w-32 md:h-48 md:w-48 text-amber-500" />
                      
                      {/* Rotating ring */}
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      >
                        <div className="h-full w-full rounded-full border border-amber-500/20 border-dashed" />
                      </motion.div>
                      
                      {/* Value properties positioned around the circle */}
                      <motion.div 
                        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <div className="bg-card p-2 rounded-full shadow-md">
                          <Percent className="h-6 w-6 text-amber-500" />
                  </div>
                      </motion.div>
              
                      <motion.div 
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <div className="bg-card p-2 rounded-full shadow-md">
                          <Shield className="h-6 w-6 text-purple-500" />
                  </div>
                      </motion.div>
                      
                      <motion.div 
                        className="absolute left-0 top-1/2 -translate-x-1/4 -translate-y-1/2"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <div className="bg-card p-2 rounded-full shadow-md">
                          <Lock className="h-6 w-6 text-green-500" />
                  </div>
                      </motion.div>
              
                      <motion.div 
                        className="absolute right-0 top-1/2 translate-x-1/4 -translate-y-1/2"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <div className="bg-card p-2 rounded-full shadow-md">
                          <Landmark className="h-6 w-6 text-blue-500" />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Badge className="mb-6 px-3 py-1 bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 transition-colors">
                    <Infinity className="mr-1 h-3.5 w-3.5" />
                    <span>The Future of Value</span>
                  </Badge>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Bitcoin: The Ultimate Store of Value</h2>
                  
                  <div className="space-y-6 text-lg text-muted-foreground">
                    <p>
                      When combined, these principles and properties create a unique asset that addresses the 
                      shortcomings of traditional stores of value while introducing unprecedented capabilities.
                    </p>
                    <p>
                      For the first time in history, we have an asset that is simultaneously scarce, portable, 
                      divisible, durable, verifiable, and censorship-resistant. Bitcoin's combined properties 
                      make it arguably the best store of value humanity has ever created.
                    </p>
                    <p>
                      As more people come to understand these fundamental principles, Bitcoin adoption as a 
                      store of value continues to grow, reinforcing its network effects and increasing its 
                      value proposition over time.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            </div>
          </section>
          
        {/* Call to action */}
        <section className="py-20 bg-amber-950/5 border-t border-amber-500/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <BitcoinLogoIcon className="h-12 w-12 mx-auto text-amber-500 mb-6" />
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Learn More?</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Explore our educational resources to deepen your understanding of Bitcoin as a store of value
                  or revisit our manifesto to see how these principles align with our mission.
                </p>
              
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/learn">
                    <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                      <BookOpen className="mr-2 h-5 w-5" />
                      Start Learning
                    </Button>
                  </Link>
                  <Link to="/manifesto">
                    <Button variant="outline" size="lg" className="border-amber-500 text-amber-500 hover:bg-amber-500/10">
                      <Scale className="mr-2 h-5 w-5" />
                      Back to Manifesto
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
              </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrinciplesPage; 