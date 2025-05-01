import React, { useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { createWebsiteSchema } from '@/components/StructuredData';
import { 
  ArrowRight, 
  BookOpen, 
  Globe, 
  Network, 
  Zap, 
  Lock, 
  Clock, 
  LineChart,
  Shield,
  Home,
  Calculator,
  UsersRound,
  Sparkles,
  LightbulbIcon,
  GraduationCap
} from 'lucide-react';
import { getColorClass } from '@/lib/utils';
import BitcoinLogoIcon from '../components/BitcoinLogoIcon';

// Featured perspectives for homepage
const featuredPerspectives = [
  {
    title: "Networked Revolution",
    description: "How Bitcoin leverages network effects to create a global monetary transformation",
    icon: Network,
    color: "blue",
    path: "/networked-revolution"
  },
  {
    title: "Energy Alchemy",
    description: "Bitcoin's unique ability to transform excess energy into stored monetary value",
    icon: Zap,
    color: "yellow",
    path: "/energy-alchemy"
  },
  {
    title: "Geopolitical Shield",
    description: "How Bitcoin provides protection in the global monetary battlefield",
    icon: Shield,
    color: "blue",
    path: "/geopolitical-shield"
  },
  {
    title: "Time Traveler's Portfolio",
    description: "A speculative journey through the next century of monetary evolution",
    icon: Clock,
    color: "amber",
    path: "/time-travelers-portfolio"
  }
];

// Education pathways data
const educationPaths = [
  {
    title: "Beginner",
    description: "Start your Bitcoin journey with fundamentals and core concepts",
    path: "/learn/beginner",
    color: "blue",
    modules: ["What is Money?", "Store of Value", "Bitcoin Fundamentals"]
  },
  {
    title: "Intermediate",
    description: "Deepen your knowledge with technical and economic insights",
    path: "/learn/intermediate",
    color: "amber",
    modules: ["Bitcoin Design", "Network Economics", "Self-Custody"]
  },
  {
    title: "Advanced",
    description: "Master complex topics like scripting, protocol development, and game theory",
    path: "/learn/advanced",
    color: "orange",
    modules: ["Bitcoin Scripting", "Protocol Development", "Advanced Game Theory"]
  }
];

// Typed text animation component for hero section with memoization
const TypedText = React.memo(({ texts }: { texts: string[] }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Use useCallback to prevent recreation of this function on each render
  const advanceTyping = useCallback(() => {
    if (!isDeleting) {
      // Typing mode
      setDisplayText(texts[currentTextIndex].substring(0, currentCharIndex + 1));
      setCurrentCharIndex(currentCharIndex + 1);
      
      // If completed typing current text
      if (currentCharIndex >= texts[currentTextIndex].length) {
        setTimeout(() => setIsDeleting(true), 1500); // Pause before deleting
      }
    } else {
      // Deleting mode
      setDisplayText(texts[currentTextIndex].substring(0, currentCharIndex - 1));
      setCurrentCharIndex(currentCharIndex - 1);
      
      // If completed deleting current text
      if (currentCharIndex <= 0) {
        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
      }
    }
  }, [currentTextIndex, currentCharIndex, isDeleting, texts]);
  
  useEffect(() => {
    const timeout = setTimeout(
      advanceTyping, 
      isDeleting ? 50 : 100 // Faster when deleting
    );
    
    return () => clearTimeout(timeout);
  }, [advanceTyping, isDeleting]);
  
  return (
    <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
});

// Perspective card component for featured perspectives
const PerspectiveCard = ({ perspective, index }: { perspective: typeof featuredPerspectives[0], index: number }) => {
  const bgClass = getColorClass(perspective.color, 'bg', '10');
  const textClass = getColorClass(perspective.color, 'text');
  const borderClass = getColorClass(perspective.color, 'border', '20');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link to={perspective.path}>
        <Card className={`h-full hover:shadow-md transition-all ${borderClass} hover:scale-[1.02]`}>
          <CardContent className="p-6 flex flex-col h-full">
            <div className={`${bgClass} p-3 rounded-full w-fit mb-4`}>
              <perspective.icon className={`h-5 w-5 ${textClass}`} />
            </div>
            
            <h3 className="text-lg font-bold mb-2">{perspective.title}</h3>
            
            <p className="text-muted-foreground text-sm mb-4 flex-grow">
              {perspective.description}
            </p>
            
            <div className={`${textClass} text-sm font-medium flex items-center mt-auto`}>
              <span>Explore</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

// Education path card component
const EducationPathCard = ({ path, index }: { path: typeof educationPaths[0], index: number }) => {
  const bgClass = getColorClass(path.color, 'bg', '10');
  const textClass = getColorClass(path.color, 'text');
  const borderClass = getColorClass(path.color, 'border', '20');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex-1 min-w-[250px]"
    >
      <Card className={`h-full hover:shadow-md transition-all ${borderClass}`}>
        <CardContent className="p-6 flex flex-col h-full">
          <div className={`${bgClass} p-3 rounded-full w-fit mb-4`}>
            <GraduationCap className={`h-5 w-5 ${textClass}`} />
          </div>
          
          <h3 className="text-lg font-bold mb-2">{path.title}</h3>
          
          <p className="text-muted-foreground text-sm mb-4">
            {path.description}
          </p>
          
          <div className="border-t my-4 pt-4">
            <h4 className="text-sm font-medium mb-2">Modules include:</h4>
            <ul className="space-y-1">
              {path.modules.map((module, i) => (
                <li key={i} className="text-xs text-muted-foreground flex items-start">
                  <div className={`${bgClass} rounded-full w-1.5 h-1.5 mt-1.5 mr-2`}></div>
                  {module}
                </li>
              ))}
            </ul>
          </div>
          
          <Link to={path.path} className="mt-auto">
            <Button variant="outline" className={`w-full ${borderClass} ${textClass} hover:${bgClass}`}>
              Start Learning
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Index = () => {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  
  // Website structured data for SEO
  const websiteStructuredData = createWebsiteSchema(
    "Bitcoin Education",
    "https://storeofvalue.ch",
    "Explore the transformative power of Bitcoin through multiple perspectives, educational resources, and community insights."
  );
  
  return (
    <Layout
      seo={{
        title: "Bitcoin Education",
        description: "Explore the transformative power of Bitcoin through multiple perspectives, educational resources, and community insights.",
        canonicalUrl: "/",
        ogImage: "/images/og-home.jpg",
        keywords: "bitcoin, cryptocurrency, blockchain, education, digital currency, investment, finance",
        structuredData: websiteStructuredData
      }}
    >
      <main>
        {/* Animated Hero Section */}
        <section className="relative h-screen flex items-center overflow-hidden">
          {/* Background grid pattern */}
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
          
          {/* Bitcoin network visualization background */}
          <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <circle cx="100" cy="100" r="2" fill="#F7931A" className="animate-pulse" />
              <circle cx="200" cy="150" r="2" fill="#F7931A" className="animate-pulse" />
              <circle cx="300" cy="100" r="2" fill="#F7931A" className="animate-pulse" />
              <circle cx="150" cy="250" r="2" fill="#F7931A" className="animate-pulse" />
              <circle cx="250" cy="250" r="2" fill="#F7931A" className="animate-pulse" />
              <circle cx="350" cy="200" r="2" fill="#F7931A" className="animate-pulse" />
              <circle cx="120" cy="180" r="2" fill="#F7931A" className="animate-pulse" />
              <circle cx="280" cy="180" r="2" fill="#F7931A" className="animate-pulse" />
              <circle cx="180" cy="80" r="2" fill="#F7931A" className="animate-pulse" />
              <circle cx="220" cy="220" r="2" fill="#F7931A" className="animate-pulse" />
              
              <line x1="100" y1="100" x2="200" y2="150" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.5" />
              <line x1="200" y1="150" x2="300" y2="100" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.5" />
              <line x1="200" y1="150" x2="150" y2="250" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.5" />
              <line x1="150" y1="250" x2="250" y2="250" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.5" />
              <line x1="250" y1="250" x2="350" y2="200" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.5" />
              <line x1="300" y1="100" x2="350" y2="200" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.5" />
              <line x1="120" y1="180" x2="150" y2="250" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.5" />
              <line x1="120" y1="180" x2="200" y2="150" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.5" />
              <line x1="280" y1="180" x2="350" y2="200" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.5" />
              <line x1="280" y1="180" x2="250" y2="250" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.5" />
              <line x1="180" y1="80" x2="100" y2="100" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.5" />
              <line x1="180" y1="80" x2="200" y2="150" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.5" />
              <line x1="220" y1="220" x2="250" y2="250" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.5" />
              <line x1="220" y1="220" x2="200" y2="150" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.5" />
            </svg>
            </div>
            
          <motion.div
            className="container mx-auto px-4 z-10 relative"
            style={{ opacity: heroOpacity, scale: heroScale }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-8">
                  <BitcoinLogoIcon className="h-20 w-20 mx-auto text-orange-500" />
                    </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  Bitcoin is <TypedText texts={["Freedom.", "Sound Money.", "the Future.", "for Everyone.", "Hope.", "Sovereignty.", "Unstoppable."]} />
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Explore the transformative power of Bitcoin through multiple perspectives, educational resources, and community insights.
                    </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/perspectives">
                    <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-none shadow-md">
                      <LightbulbIcon className="mr-2 h-5 w-5" />
                      Explore Perspectives
                    </Button>
                      </Link>
                  <Link to="/learn">
                    <Button variant="outline" size="lg" className="border-orange-500 text-orange-500 hover:bg-orange-500/10">
                      <BookOpen className="mr-2 h-5 w-5" />
                      Start Learning
                    </Button>
                  </Link>
                  </div>
              </motion.div>
              
              {/* Bitcoin price visualization - removed */}
              
            </div>
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
              
        {/* Featured Perspectives Section */}
        <section className="py-20 bg-gradient-to-b from-background to-background/95">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-12"
            >
              <Badge className="mb-4 px-3 py-1 bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 transition-colors">
                <LightbulbIcon className="mr-1 h-3.5 w-3.5" />
                <span>Multiple Lenses</span>
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Bitcoin Perspectives</h2>
              
              <p className="text-lg text-muted-foreground">
                Discover different mental models to understand Bitcoin's significance and potential impact
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {featuredPerspectives.map((perspective, index) => (
                <PerspectiveCard 
                  key={index} 
                  perspective={perspective} 
                  index={index} 
                />
              ))}
                    </div>
            
            <div className="text-center mt-10">
              <Link to="/perspectives">
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500/10">
                  View All Perspectives
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                      </Link>
          </div>
        </div>
      </section>
      
        {/* Educational Pathways Section */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-12"
            >
              <Badge className="mb-4 px-3 py-1 bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-colors">
                <BookOpen className="mr-1 h-3.5 w-3.5" />
                <span>Structured Learning</span>
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Educational Pathways</h2>
              
              <p className="text-lg text-muted-foreground">
                Follow structured learning paths tailored to your current knowledge level
              </p>
            </motion.div>
            
            <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto overflow-x-auto pb-4">
              {educationPaths.map((path, index) => (
                <EducationPathCard 
                key={index}
                  path={path} 
                index={index}
              />
            ))}
            </div>
        </div>
        </section>
        
        {/* Community / Get Involved Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Badge className="mb-4 px-3 py-1 bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 transition-colors">
                    <UsersRound className="mr-1 h-3.5 w-3.5" />
                    <span>Join Us</span>
                  </Badge>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Be Part of the Bitcoin Community
                  </h2>
                  
                  <p className="text-lg text-muted-foreground mb-6">
                    Connect with like-minded individuals, contribute to projects, and participate in events and discussions.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-orange-500/10 p-2 rounded-full mr-3">
                        <Globe className="h-5 w-5 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold mb-1">Global Connections</h3>
                        <p className="text-sm text-muted-foreground">
                          Join a worldwide community working towards financial freedom and innovation
                        </p>
                      </div>
          </div>
          
                    <div className="flex items-start">
                      <div className="bg-orange-500/10 p-2 rounded-full mr-3">
                        <Sparkles className="h-5 w-5 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold mb-1">Collaborative Learning</h3>
                        <p className="text-sm text-muted-foreground">
                          Share insights, ask questions, and grow your knowledge alongside others
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Link to="/community">
                      <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                        Join the Community
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                  </Link>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 p-8 rounded-2xl border border-border"
                >
                  <div className="relative">
                    {/* Stylized community illustration */}
                    <div className="grid grid-cols-3 gap-4">
                      {[...Array(9)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`aspect-square rounded-lg ${
                            i % 3 === 0 ? 'bg-orange-500/20' :
                            i % 3 === 1 ? 'bg-amber-500/20' : 'bg-orange-600/20'
                          } flex items-center justify-center overflow-hidden`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05, duration: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <div className={`w-10 h-10 rounded-full ${
                            i % 3 === 0 ? 'bg-orange-500/30' :
                            i % 3 === 1 ? 'bg-amber-500/30' : 'bg-orange-600/30'
                          } flex items-center justify-center`}>
                            <BitcoinLogoIcon className="h-5 w-5 text-white" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Connection lines animation */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="rgba(249, 115, 22, 0.2)" strokeWidth="1">
                        <animate attributeName="stroke-opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite" />
                      </line>
                      <line x1="80%" y1="20%" x2="50%" y2="50%" stroke="rgba(245, 158, 11, 0.2)" strokeWidth="1">
                        <animate attributeName="stroke-opacity" values="0.2;0.5;0.2" dur="4s" repeatCount="indefinite" />
                      </line>
                      <line x1="20%" y1="80%" x2="50%" y2="50%" stroke="rgba(249, 115, 22, 0.2)" strokeWidth="1">
                        <animate attributeName="stroke-opacity" values="0.2;0.5;0.2" dur="3.5s" repeatCount="indefinite" />
                      </line>
                      <line x1="80%" y1="80%" x2="50%" y2="50%" stroke="rgba(234, 88, 12, 0.2)" strokeWidth="1">
                        <animate attributeName="stroke-opacity" values="0.2;0.5;0.2" dur="4.5s" repeatCount="indefinite" />
                      </line>
                    </svg>
                  </div>
                  
                  <div className="mt-8 px-4 py-6 bg-background/80 backdrop-blur-sm rounded-xl border border-border">
                    <blockquote className="text-sm italic text-muted-foreground">
                      "The strength of Bitcoin lies not just in its technology, but in its vibrant, diverse, and passionate community of advocates, developers, and users around the world."
                    </blockquote>
                    <div className="mt-4 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center mr-3">
                        <BitcoinLogoIcon className="h-4 w-4 text-orange-500" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">Satoshi Nakamoto</div>
                        <div className="text-xs text-muted-foreground">Bitcoin Creator</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-orange-950/5 to-yellow-950/5 border-y border-orange-500/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <BitcoinLogoIcon className="h-12 w-12 mx-auto text-orange-500 mb-6" />
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Bitcoin Journey?</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Whether you're new to Bitcoin or looking to deepen your understanding,
                  we have resources designed to help you at every step.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/learn">
                    <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                      <BookOpen className="mr-2 h-5 w-5" />
                      Start Learning
                    </Button>
                  </Link>
                  <Link to="/rabbit-hole">
                    <Button variant="outline" size="lg" className="border-orange-500 text-orange-500 hover:bg-orange-500/10">
                      <BitcoinLogoIcon className="mr-2 h-5 w-5" />
                      Down the Rabbit Hole
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

export default Index;
