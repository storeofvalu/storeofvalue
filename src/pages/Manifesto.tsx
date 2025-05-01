import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Layout from '@/components/Layout';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';
import BitcoinLogoIcon from '../components/BitcoinLogoIcon';
import { createArticleSchema } from '@/components/StructuredData';
import { 
  ArrowRight, 
  BookOpen, 
  Lock, 
  Scale, 
  Clock, 
  Sparkles,
  FlaskConical,
  Users
} from 'lucide-react';

// Manifesto points with icons and colors
const manifestoPoints = [
  {
    number: '01',
    title: 'Scarcity defines value',
    content: "Throughout history, humans have valued scarce resources. From gold and silver to art and land, scarcity has always been the foundation of value storage. Bitcoin's mathematically enforced cap of 21 million coins creates digital scarcity that cannot be manipulated or inflated away.",
    icon: FlaskConical,
    color: "amber"
  },
  {
    number: '02',
    title: 'Trust requires verification',
    content: "Traditional value systems rely on trusted third parties. Bitcoin eliminates this need through transparent code and a decentralized network where anyone can verify transactions and holdings without permission. This radical transparency builds a foundation of trust through mathematics rather than institutions.",
    icon: Scale,
    color: "blue"
  },
  {
    number: '03',
    title: 'Sovereignty is essential',
    content: "True ownership means complete control. Bitcoin enables unprecedented financial sovereignty by allowing individuals to secure their wealth with cryptographic keys. No entity—governmental or corporate—can confiscate or freeze properly secured bitcoin, returning financial autonomy to the individual.",
    icon: Lock,
    color: "green"
  },
  {
    number: '04',
    title: 'Durability transcends the physical',
    content: "Physical stores of value degrade or require protection. Gold can be seized, art can burn, and property rights can be violated. Bitcoin exists as information secured by the largest computing network in human history, making it resilient against physical threats and potentially eternal in nature.",
    icon: Clock,
    color: "purple"
  },
  {
    number: '05',
    title: 'Adoption follows understanding',
    content: "The journey to a better money begins with education. As more people comprehend Bitcoin's fundamental properties and historical context, its adoption as a superior store of value becomes inevitable. Knowledge, not speculation, drives sustainable value preservation.",
    icon: Users,
    color: "red"
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

// Manifesto tenet card
const ManifestoTenet = ({ point, index }: { point: typeof manifestoPoints[0], index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const bgClass = getColorClass(point.color, 'bg', '5');
  const textClass = getColorClass(point.color, 'text');
  const borderClass = getColorClass(point.color, 'border', '20');
  
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [index % 2 === 0 ? -50 : 50, 0, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  
  return (
    <motion.div
      ref={ref}
      style={{ x, opacity }}
      className="py-8"
    >
      <Card className={`p-1 bg-gradient-to-br ${
        index % 2 === 0 
          ? 'from-background via-background to-amber-500/10' 
          : 'from-amber-500/10 via-background to-background'
      } overflow-hidden`}
    >
        <div className={`bg-card p-8 rounded-lg ${borderClass}`}>
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="flex flex-col items-center md:items-start">
              <span className={`text-6xl font-bold ${textClass}`}>{point.number}</span>
              <div className={`${bgClass} p-3 rounded-full mt-4 hidden md:flex`}>
                <point.icon className={`h-6 w-6 ${textClass}`} />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center md:hidden gap-3">
                <div className={`${bgClass} p-2 rounded-full`}>
                  <point.icon className={`h-5 w-5 ${textClass}`} />
                </div>
                <h3 className="text-2xl font-bold">{point.title}</h3>
              </div>
              
              <h3 className="text-2xl font-bold hidden md:block">{point.title}</h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {point.content}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const ManifestoPage = () => {
  // For hero section parallax effect
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  
  // Generate structured data for the manifesto page
  const manifestoStructuredData = createArticleSchema(
    "Store of Value Manifesto", 
    "In a world of infinite monetary expansion and financial censorship, we declare Bitcoin as the premier digital store of value, empowering individuals to preserve their wealth across time and space without permission.",
    "Henry E. Barrows",
    "Bitcoin Education",
    "https://storeofvalue.ch/images/logo.png",
    "https://storeofvalue.ch/manifesto",
    "https://storeofvalue.ch/images/og-manifesto.jpg",
    "2023-01-01T00:00:00+00:00",
    "2023-10-01T00:00:00+00:00"
  );
  
  return (
    <Layout
      seo={{
        title: "Store of Value Manifesto",
        description: "In a world of infinite monetary expansion and financial censorship, we declare Bitcoin as the premier digital store of value, empowering individuals to preserve their wealth across time and space without permission.",
        canonicalUrl: "/manifesto",
        ogImage: "/images/og-manifesto.jpg",
        ogType: "article",
        keywords: "bitcoin manifesto, store of value, bitcoin principles, digital gold, sound money, cryptocurrency",
        structuredData: manifestoStructuredData
      }}
    >
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
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
        
        {/* Animated Bitcoin svg pattern background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            style={{ y }}
            className="w-full h-full relative"
          >
            <svg viewBox="0 0 400 400" className="absolute top-0 left-0 w-full h-full opacity-10">
              <circle cx="50" cy="50" r="1" fill="#F7931A" />
              <circle cx="100" cy="100" r="1" fill="#F7931A" />
              <circle cx="150" cy="50" r="1" fill="#F7931A" />
              <circle cx="200" cy="100" r="1" fill="#F7931A" />
              <circle cx="250" cy="50" r="1" fill="#F7931A" />
              <circle cx="300" cy="100" r="1" fill="#F7931A" />
              <circle cx="350" cy="50" r="1" fill="#F7931A" />
              <circle cx="50" cy="150" r="1" fill="#F7931A" />
              <circle cx="100" cy="200" r="1" fill="#F7931A" />
              <circle cx="150" cy="150" r="1" fill="#F7931A" />
              <circle cx="200" cy="200" r="1" fill="#F7931A" />
              <circle cx="250" cy="150" r="1" fill="#F7931A" />
              <circle cx="300" cy="200" r="1" fill="#F7931A" />
              <circle cx="350" cy="150" r="1" fill="#F7931A" />
              <circle cx="50" cy="250" r="1" fill="#F7931A" />
              <circle cx="100" cy="300" r="1" fill="#F7931A" />
              <circle cx="150" cy="250" r="1" fill="#F7931A" />
              <circle cx="200" cy="300" r="1" fill="#F7931A" />
              <circle cx="250" cy="250" r="1" fill="#F7931A" />
              <circle cx="300" cy="300" r="1" fill="#F7931A" />
              <circle cx="350" cy="250" r="1" fill="#F7931A" />
              <circle cx="50" cy="350" r="1" fill="#F7931A" />
              <circle cx="100" cy="400" r="1" fill="#F7931A" />
              <circle cx="150" cy="350" r="1" fill="#F7931A" />
              <circle cx="200" cy="400" r="1" fill="#F7931A" />
              <circle cx="250" cy="350" r="1" fill="#F7931A" />
              <circle cx="300" cy="400" r="1" fill="#F7931A" />
              <circle cx="350" cy="350" r="1" fill="#F7931A" />
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
              <Sparkles className="mr-1 h-3.5 w-3.5" />
              <span>Our Declaration</span>
            </Badge>
            
            <div className="relative mb-10">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <BitcoinLogoIcon className="h-80 w-80 text-amber-500" />
              </div>
              
              <h1 className="text-4xl md:text-7xl font-bold mb-8 text-foreground relative">
                BITCOIN
                <div className="text-2xl md:text-4xl font-semibold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-500">STORE OF VALUE MANIFESTO</div>
              </h1>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <motion.p 
                className="text-xl md:text-2xl leading-relaxed text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                In a world of infinite monetary expansion and financial censorship, we declare Bitcoin 
                as the premier digital store of value, empowering individuals to preserve their wealth 
                across time and space without permission.
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
        {/* Mission section */}
        <section className="py-24 bg-gradient-to-b from-background to-background/95">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16 text-center"
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Our Mission</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Store of Value aims to educate and articulate the fundamental 
                  principles that make Bitcoin the premier digital store of value in the modern era. 
                  We believe that understanding Bitcoin's unique properties is essential for financial 
                  sovereignty in an increasingly digital world.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Core tenets section */}
        <section className="py-24 bg-card/10 border-y border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Badge className="mb-6 px-3 py-1 bg-amber-500 text-white hover:bg-amber-600 transition-colors">
                  <Scale className="mr-1 h-3.5 w-3.5" />
                  <span>Core Tenets</span>
                </Badge>
                
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Foundational Principles</h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                  These five principles form the philosophical foundation of Bitcoin as the premier digital store of value
                </p>
              </motion.div>
            </div>
            
            {/* Manifesto points */}
            <div className="max-w-4xl mx-auto">
              {manifestoPoints.map((point, index) => (
                <ManifestoTenet key={index} point={point} index={index} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Vision section */}
        <section className="py-24 bg-gradient-to-br from-amber-950/5 via-background to-amber-950/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-8 -top-8 -z-10 w-3/4 h-3/4 bg-amber-500/5 rounded-full blur-3xl"></div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Our Vision</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We envision a world where individuals can preserve their wealth without reliance on 
                    third parties or fear of debasement. Bitcoin provides a revolutionary alternative to 
                    traditional value storage mechanisms, combining the scarcity of precious metals with 
                    the portability and divisibility of digital assets.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative aspect-square"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full max-w-md">
                      {/* Bitcoin logo with orbital rings */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <BitcoinLogoIcon className="h-24 w-24 text-amber-500" />
                      </div>
                      
                      {/* Orbital rings */}
                      <svg viewBox="0 0 200 200" className="w-full h-full">
                        <motion.circle 
                          cx="100" 
                          cy="100" 
                          r="60" 
                          fill="none" 
                          stroke="#F7931A" 
                          strokeWidth="0.5"
                          strokeOpacity="0.3"
                          strokeDasharray="1,3"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.circle 
                          cx="100" 
                          cy="100" 
                          r="80" 
                          fill="none" 
                          stroke="#F7931A" 
                          strokeWidth="0.5" 
                          strokeOpacity="0.2"
                          strokeDasharray="1,2"
                          animate={{ rotate: -360 }}
                          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.circle 
                          cx="100" 
                          cy="100" 
                          r="40" 
                          fill="none" 
                          stroke="#F7931A" 
                          strokeWidth="0.5" 
                          strokeOpacity="0.4"
                          strokeDasharray="1,1"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        />
                        
                        {/* Orbital nodes */}
                        <motion.circle 
                          cx="100" 
                          cy="40" 
                          r="4" 
                          fill="#F7931A"
                          fillOpacity="0.6"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                          style={{ transformOrigin: '100px 100px' }}
                        />
                        <motion.circle 
                          cx="100" 
                          cy="160" 
                          r="3" 
                          fill="#F7931A"
                          fillOpacity="0.4"
                          animate={{ rotate: -360 }}
                          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                          style={{ transformOrigin: '100px 100px' }}
                        />
                        <motion.circle 
                          cx="180" 
                          cy="100" 
                          r="5" 
                          fill="#F7931A"
                          fillOpacity="0.5"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                          style={{ transformOrigin: '100px 100px' }}
                        />
                      </svg>
                    </div>
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
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Join The Bitcoin Journey</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Embark on a path to financial sovereignty through education and understanding.
                  Explore our principles or begin your learning journey today.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/learn">
                    <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                      <BookOpen className="mr-2 h-5 w-5" />
                      Start Learning
                    </Button>
                  </Link>
                  <Link to="/principles">
                    <Button variant="outline" size="lg" className="border-amber-500 text-amber-500 hover:bg-amber-500/10">
                      <Scale className="mr-2 h-5 w-5" />
                      Explore Principles
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ManifestoPage; 