import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Network, 
  Zap, 
  Lock, 
  Globe,
  LineChart,
  Clock, 
  Home, 
  Shield,
  Calculator,
  ArrowRight,
  BookOpen,
  Atom,
  Sprout,
  Milestone
} from 'lucide-react';
import BitcoinLogoIcon from '../components/BitcoinLogoIcon';

// Define perspective card data
const perspectives = [
  {
    title: "Networked Revolution",
    description: "How Bitcoin leverages network effects to create a global monetary transformation",
    icon: Network,
    color: "blue",
    path: "/networked-revolution",
    tags: ["Network Theory", "Adoption"]
  },
  {
    title: "Energy Alchemy",
    description: "Bitcoin's unique ability to transform excess energy into stored monetary value",
    icon: Zap,
    color: "yellow",
    path: "/energy-alchemy",
    tags: ["Energy", "Mining"]
  },
  {
    title: "Unconfiscatable Asset",
    description: "Why Bitcoin's resistance to seizure creates a new paradigm for property rights",
    icon: Lock,
    color: "purple",
    path: "/unconfiscatable-asset",
    tags: ["Sovereignty", "Security"]
  },
  {
    title: "The Global Game",
    description: "Bitcoin as a global, borderless game with equal rules for all participants",
    icon: Globe,
    color: "green",
    path: "/global-game",
    tags: ["Game Theory", "Inclusion"]
  },
  {
    title: "Last Free Market",
    description: "How Bitcoin's open, permissionless market creates true price discovery",
    icon: LineChart,
    color: "red",
    path: "/last-free-market",
    tags: ["Markets", "Economics"]
  },
  {
    title: "Time Traveler's Portfolio",
    description: "A speculative journey through the next century of monetary evolution",
    icon: Clock,
    color: "amber",
    path: "/time-travelers-portfolio",
    tags: ["Longevity", "Investment"]
  },
  {
    title: "Digital Homesteading",
    description: "Bitcoin as digital land that early adopters can claim and pass down generations",
    icon: Home,
    color: "emerald",
    path: "/digital-homesteading",
    tags: ["Legacy", "Adoption"]
  },
  {
    title: "Geopolitical Shield",
    description: "How Bitcoin provides protection in the global monetary battlefield",
    icon: Shield,
    color: "blue",
    path: "/geopolitical-shield",
    tags: ["Geopolitics", "Protection"]
  },
  {
    title: "Mathematical Money",
    description: "The elegance of Bitcoin's mathematical foundation and design principles",
    icon: Calculator,
    color: "indigo",
    path: "/mathematical-money",
    tags: ["Technology", "Cryptography"]
  },
  {
    title: "Temporal Rebellion",
    description: "Bitcoin as humanity's defense against the theft of time through monetary debasement",
    icon: Clock,
    color: "amber",
    path: "/temporal-rebellion",
    tags: ["Time", "Sovereignty"]
  },
  {
    title: "Digital Physics Revolution",
    description: "How Bitcoin represents the discovery of fundamental mathematical laws governing value transfer",
    icon: Atom,
    color: "blue",
    path: "/digital-physics-revolution",
    tags: ["Physics", "Mathematics"]
  },
  {
    title: "Monetary Evolution",
    description: "Bitcoin as the apex adaptation in the evolutionary journey of money throughout human history",
    icon: Sprout,
    color: "green",
    path: "/monetary-evolution",
    tags: ["Evolution", "History"]
  }
];

const getColorClass = (color: string, type: 'border' | 'bg' | 'text', opacity?: string) => {
  // Tailwind JIT can't handle dynamic class name construction at runtime
  // We need to manually map colors to their full class names
  const opacitySuffix = opacity ? `/${opacity}` : '';
  
  if (type === 'border') {
    return {
      blue: `border-blue-500${opacitySuffix}`,
      yellow: `border-yellow-500${opacitySuffix}`,
      purple: `border-purple-500${opacitySuffix}`,
      green: `border-green-500${opacitySuffix}`,
      red: `border-red-500${opacitySuffix}`,
      amber: `border-amber-500${opacitySuffix}`,
      emerald: `border-emerald-500${opacitySuffix}`,
      indigo: `border-indigo-500${opacitySuffix}`,
    }[color] || `border-gray-500${opacitySuffix}`;
  }
  
  if (type === 'bg') {
    return {
      blue: `bg-blue-500${opacitySuffix}`,
      yellow: `bg-yellow-500${opacitySuffix}`,
      purple: `bg-purple-500${opacitySuffix}`,
      green: `bg-green-500${opacitySuffix}`,
      red: `bg-red-500${opacitySuffix}`,
      amber: `bg-amber-500${opacitySuffix}`,
      emerald: `bg-emerald-500${opacitySuffix}`,
      indigo: `bg-indigo-500${opacitySuffix}`,
    }[color] || `bg-gray-500${opacitySuffix}`;
  }
  
  return {
    blue: `text-blue-500${opacitySuffix}`,
    yellow: `text-yellow-500${opacitySuffix}`,
    purple: `text-purple-500${opacitySuffix}`,
    green: `text-green-500${opacitySuffix}`,
    red: `text-red-500${opacitySuffix}`,
    amber: `text-amber-500${opacitySuffix}`,
    emerald: `text-emerald-500${opacitySuffix}`,
    indigo: `text-indigo-500${opacitySuffix}`,
  }[color] || `text-gray-500${opacitySuffix}`;
};

const PerspectiveCard = ({ perspective, index }: { perspective: typeof perspectives[0], index: number }) => {
  const borderClass = getColorClass(perspective.color, 'border');
  const borderHoverClass = getColorClass(perspective.color, 'border', '40');
  const bgClass = getColorClass(perspective.color, 'bg', '10');
  const textClass = getColorClass(perspective.color, 'text');
  const bgBadgeClass = getColorClass(perspective.color, 'bg', '5');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link to={perspective.path} className="block h-full">
        <Card className={`${borderClass} hover:${borderHoverClass} transition-colors h-full`}>
          <CardContent className="p-6 flex flex-col h-full">
            <div className={`p-3 rounded-full ${bgClass} w-fit mb-4`}>
              <perspective.icon className={`h-6 w-6 ${textClass}`} />
            </div>
            
            <h3 className="text-xl font-bold mb-2">{perspective.title}</h3>
            
            <p className="text-muted-foreground text-sm mb-4 flex-grow">
              {perspective.description}
            </p>
            
            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                {perspective.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="outline" className={`${bgBadgeClass} ${textClass} text-xs`}>
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className={`${textClass} text-sm font-medium flex items-center`}>
                <span>Explore perspective</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

const Perspectives = () => {
  console.log('Perspectives component mounted');
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="min-h-[50vh] relative flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden bg-gradient-to-b from-background to-background/95">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto z-10"
          >
            <div className="inline-flex mb-6">
              <BitcoinLogoIcon className="h-12 w-12 text-orange-500" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              Bitcoin Perspectives
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium mb-8 text-muted-foreground max-w-2xl mx-auto">
              Explore different conceptual frameworks and mental models for understanding Bitcoin's significance
            </h2>
          </motion.div>
          
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-full h-full">
              <svg className="w-full h-full opacity-[0.02]" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="gridPattern" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#gridPattern)" />
              </svg>
            </div>
          </div>
        </section>
        
        {/* Perspectives Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {perspectives.map((perspective, index) => (
                  <PerspectiveCard 
                    key={index} 
                    perspective={perspective} 
                    index={index} 
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-orange-950/5 to-yellow-950/5 border-y border-orange-500/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Deepen Your Bitcoin Understanding</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  These perspectives offer different entry points into Bitcoin's multifaceted nature. 
                  Continue your journey with our structured learning resources.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/learn">
                    <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                      <BookOpen className="mr-2 h-5 w-5" />
                      Explore Learning Paths
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
      
      <Footer />
    </div>
  );
};

export default Perspectives; 