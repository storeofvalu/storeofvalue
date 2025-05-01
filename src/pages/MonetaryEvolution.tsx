import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Sprout, 
  TreePine, 
  Waves, 
  Mountain, 
  History, 
  Clock, 
  Scale, 
  ChevronDown,
  ArrowRight,
  Dna,
  Diamond,
  BadgeCheck,
  BadgeDollarSign,
  Wallet,
  ArrowUpRight,
  Globe,
  Leaf,
  Milestone,
  CircleOff,
  Lightbulb,
  Bug,
  Microscope,
  Network,
  Timer,
  Star,
  Building,
  Coins,
  Gem,
  Hammer,
  FlaskConical,
  Trees,
  Orbit,
  Combine,
  Shield,
  Bitcoin,
  Zap,
  Globe2,
  Map,
  Binary,
  Code2,
  GitBranch,
  Code,
  Stamp,
  ServerCog,
  HandCoins,
  ShieldAlert,
  Lock,
  KeyRound,
  Landmark,
  Activity,
  ScrollText,
  Video as VideoIcon,
  Quote,
  Atom,
  Compass,
  Building2,
  HandCoins as HandCoinsIcon,
  Combine as CombineIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';
import BitcoinLogoIcon from '../components/BitcoinLogoIcon';

// Simple error boundary component for animations
class AnimationErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("Animation error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="p-4 text-center text-muted-foreground">Animation unavailable</div>;
    }

    return this.props.children;
  }
}

const MonetaryEvolution = () => {
  const [currentEra, setCurrentEra] = useState(0);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  // Evolution eras for timeline
  const evolutionEras = [
    "Barter",
    "Commodity Money",
    "Precious Metals",
    "Coins",
    "Paper Money",
    "Banking Era",
    "Fiat Standard",
    "Digital Fiat",
    "Bitcoin"
  ];

  // Animation for era sequence in hero section
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentEra((prevEra) => (prevEra + 1) % evolutionEras.length);
    }, currentEra === evolutionEras.length - 1 ? 7000 : 2000);  // Hold Bitcoin state even longer (7 seconds)
    return () => clearTimeout(timer);
  }, [currentEra, evolutionEras.length]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="min-h-screen relative flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden bg-gradient-to-b from-background to-background/95">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto z-10"
          >
            <Badge className="mb-6 px-3 py-1 bg-green-500/10 text-green-500 hover:bg-green-500/20 transition-colors">
              <Sprout className="mr-1 h-3.5 w-3.5" />
              <span>Natural Selection</span>
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              Bitcoin: Monetary Evolution
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium mb-8 text-muted-foreground">
              The apex adaptation in money's evolutionary journey through human history
            </h2>
          </motion.div>
          
          {/* Animated evolutionary tree */}
          <div className="mt-16 w-full max-w-4xl mx-auto">
            <div className="bg-card border rounded-lg p-8 shadow-lg">
              <AnimationErrorBoundary>
                <div className="flex flex-col items-center">
                  <div className="h-20 md:h-24 relative flex items-center w-full justify-center mb-10 md:mb-12">
                    {evolutionEras.map((era, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20, position: 'absolute' }}
                        animate={{ 
                          opacity: index === currentEra ? 1 : 0, 
                          y: index === currentEra ? 0 : 20,
                          scale: index === currentEra ? 1 : 0.8
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="font-mono text-2xl md:text-4xl font-bold absolute"
                      >
                        {era === "Bitcoin" ? (
                          <div className="flex items-center justify-center text-orange-500">
                            <BitcoinLogoIcon className="h-10 w-10 md:h-12 md:w-12 text-orange-500" />
                            <span className="ml-2">Bitcoin</span>
                          </div>
                        ) : (
                          <span className={`
                            ${index <= 1 ? "text-gray-500" : ""}
                            ${index >= 2 && index <= 3 ? "text-amber-600" : ""}
                            ${index >= 4 && index <= 7 ? "text-blue-500" : ""}
                          `}>
                            {era}
                          </span>
                        )}
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="relative h-80 md:h-[28rem] w-full">
                    {/* Evolutionary tree visualization with enhanced animations */}
                    <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid meet">
                      {/* Background grid for depth */}
                      <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(34, 197, 94, 0.05)" strokeWidth="1" />
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#smallGrid)" />
                      
                      {/* Tree trunk - animated growth */}
                      <motion.path 
                        initial={{ pathLength: 0, opacity: 0.3 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 3, ease: "easeInOut" }}
                        d="M 400,550 L 400,50" 
                        stroke="#22c55e" 
                        strokeWidth="5" 
                        fill="none"
                        strokeDasharray="8,4"
                      />
                      
                      {/* Branches for different monetary forms - extinct and surviving */}
                      {/* Barter branch - extinct */}
                      <motion.path 
                        initial={{ pathLength: 0 }}
                        animate={{ 
                          pathLength: currentEra >= 1 ? 1 : 0,
                          opacity: currentEra >= 1 ? 1 : 0
                        }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        d="M 400,500 C 350,450 300,500 250,480" 
                        stroke="#9ca3af" 
                        strokeWidth="4" 
                        fill="none"
                      />
                      <motion.circle 
                        initial={{ scale: 0 }}
                        animate={{ 
                          scale: currentEra >= 1 ? 1 : 0, 
                          opacity: currentEra >= 1 ? 1 : 0
                        }}
                        transition={{ duration: 0.5, delay: 1 }}
                        cx="250" cy="480" r="10" 
                        fill="#9ca3af"
                      />
                      <motion.text 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: currentEra >= 1 ? 1 : 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        x="220" y="465" 
                        fontSize="14" 
                        fill="#9ca3af"
                      >
                        Barter
                      </motion.text>
                      
                      {/* Commodity Money branch */}
                      <motion.path 
                        initial={{ pathLength: 0 }}
                        animate={{ 
                          pathLength: currentEra >= 2 ? 1 : 0,
                          opacity: currentEra >= 2 ? 1 : 0
                        }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        d="M 400,450 C 350,420 320,430 270,400" 
                        stroke="#9ca3af" 
                        strokeWidth="4" 
                        fill="none"
                      />
                      <motion.circle 
                        initial={{ scale: 0 }}
                        animate={{ 
                          scale: currentEra >= 2 ? 1 : 0, 
                          opacity: currentEra >= 2 ? 1 : 0
                        }}
                        transition={{ duration: 0.5, delay: 1 }}
                        cx="270" cy="400" r="10" 
                        fill="#9ca3af"
                      />
                      <motion.text 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: currentEra >= 2 ? 1 : 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        x="190" y="405" 
                        fontSize="14" 
                        fill="#9ca3af"
                      >
                        Commodity Money
                      </motion.text>
                      
                      {/* Shells branch - extinct */}
                      <motion.path 
                        initial={{ pathLength: 0 }}
                        animate={{ 
                          pathLength: currentEra >= 2 ? 1 : 0,
                          opacity: currentEra >= 2 ? 1 : 0
                        }}
                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                        d="M 400,440 C 450,410 480,430 530,420" 
                        stroke="#9ca3af" 
                        strokeWidth="3" 
                        fill="none"
                      />
                      <motion.circle 
                        initial={{ scale: 0 }}
                        animate={{ 
                          scale: currentEra >= 2 ? 1 : 0, 
                          opacity: currentEra >= 2 ? 1 : 0
                        }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        cx="530" cy="420" r="7" 
                        fill="#9ca3af"
                      />
                      <motion.text 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: currentEra >= 2 ? 1 : 0 }}
                        transition={{ duration: 0.5, delay: 1.4 }}
                        x="540" y="425" 
                        fontSize="11" 
                        fill="#9ca3af"
                      >
                        Shells
                      </motion.text>
                      
                      {/* Precious Metals branch */}
                      <motion.path 
                        initial={{ pathLength: 0 }}
                        animate={{ 
                          pathLength: currentEra >= 3 ? 1 : 0,
                          opacity: currentEra >= 3 ? 1 : 0
                        }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        d="M 400,400 C 350,370 330,350 280,330" 
                        stroke="#d97706" 
                        strokeWidth="3" 
                        fill="none"
                      />
                      <motion.circle 
                        initial={{ scale: 0 }}
                        animate={{ 
                          scale: currentEra >= 3 ? 1 : 0, 
                          opacity: currentEra >= 3 ? 1 : 0
                        }}
                        transition={{ duration: 0.5, delay: 1 }}
                        cx="280" cy="330" r="8" 
                        fill="#d97706"
                      />
                      <motion.text 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: currentEra >= 3 ? 1 : 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        x="190" y="335" 
                        fontSize="12" 
                        fill="#d97706"
                      >
                        Precious Metals
                      </motion.text>
                      
                      {/* Coins branch */}
                      <motion.path 
                        initial={{ pathLength: 0 }}
                        animate={{ 
                          pathLength: currentEra >= 4 ? 1 : 0,
                          opacity: currentEra >= 4 ? 1 : 0
                        }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        d="M 400,350 C 360,320 350,300 320,280" 
                        stroke="#d97706" 
                        strokeWidth="3" 
                        fill="none"
                      />
                      <motion.circle 
                        initial={{ scale: 0 }}
                        animate={{ 
                          scale: currentEra >= 4 ? 1 : 0, 
                          opacity: currentEra >= 4 ? 1 : 0
                        }}
                        transition={{ duration: 0.5, delay: 1 }}
                        cx="320" cy="280" r="8" 
                        fill="#d97706"
                      />
                      <motion.text 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: currentEra >= 4 ? 1 : 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        x="280" y="265" 
                        fontSize="12" 
                        fill="#d97706"
                      >
                        Coins
                      </motion.text>
                      
                      {/* Paper Money branch */}
                      <motion.path 
                        initial={{ pathLength: 0 }}
                        animate={{ 
                          pathLength: currentEra >= 5 ? 1 : 0,
                          opacity: currentEra >= 5 ? 1 : 0
                        }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        d="M 400,300 C 450,270 470,260 500,230" 
                        stroke="#3b82f6" 
                        strokeWidth="3" 
                        fill="none"
                      />
                      <motion.circle 
                        initial={{ scale: 0 }}
                        animate={{ 
                          scale: currentEra >= 5 ? 1 : 0, 
                          opacity: currentEra >= 5 ? 1 : 0
                        }}
                        transition={{ duration: 0.5, delay: 1 }}
                        cx="500" cy="230" r="8" 
                        fill="#3b82f6"
                      />
                      <motion.text 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: currentEra >= 5 ? 1 : 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        x="520" y="235" 
                        fontSize="12" 
                        fill="#3b82f6"
                      >
                        Paper Money
                      </motion.text>
                      
                      {/* Banking Era branch */}
                      <motion.path 
                        initial={{ pathLength: 0 }}
                        animate={{ 
                          pathLength: currentEra >= 6 ? 1 : 0,
                          opacity: currentEra >= 6 ? 1 : 0
                        }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        d="M 400,250 C 450,230 460,210 480,180" 
                        stroke="#3b82f6" 
                        strokeWidth="3" 
                        fill="none"
                      />
                      <motion.circle 
                        initial={{ scale: 0 }}
                        animate={{ 
                          scale: currentEra >= 6 ? 1 : 0, 
                          opacity: currentEra >= 6 ? 1 : 0
                        }}
                        transition={{ duration: 0.5, delay: 1 }}
                        cx="480" cy="180" r="8" 
                        fill="#3b82f6"
                      />
                      <motion.text 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: currentEra >= 6 ? 1 : 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        x="490" y="185" 
                        fontSize="12" 
                        fill="#3b82f6"
                      >
                        Banking Era
                      </motion.text>
                      
                      {/* Fiat Standard branch */}
                      <motion.path 
                        initial={{ pathLength: 0 }}
                        animate={{ 
                          pathLength: currentEra >= 7 ? 1 : 0,
                          opacity: currentEra >= 7 ? 1 : 0
                        }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        d="M 400,200 C 350,180 330,160 300,130" 
                        stroke="#3b82f6" 
                        strokeWidth="3" 
                        fill="none"
                      />
                      <motion.circle 
                        initial={{ scale: 0 }}
                        animate={{ 
                          scale: currentEra >= 7 ? 1 : 0, 
                          opacity: currentEra >= 7 ? 1 : 0
                        }}
                        transition={{ duration: 0.5, delay: 1 }}
                        cx="300" cy="130" r="8" 
                        fill="#3b82f6"
                      />
                      <motion.text 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: currentEra >= 7 ? 1 : 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        x="200" y="135" 
                        fontSize="12" 
                        fill="#3b82f6"
                      >
                        Fiat Standard
                      </motion.text>
                      
                      {/* Digital Fiat branch */}
                      <motion.path 
                        initial={{ pathLength: 0 }}
                        animate={{ 
                          pathLength: currentEra >= 8 ? 1 : 0,
                          opacity: currentEra >= 8 ? 1 : 0
                        }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        d="M 400,150 C 450,130 470,100 500,80" 
                        stroke="#3b82f6" 
                        strokeWidth="3" 
                        fill="none"
                      />
                      <motion.circle 
                        initial={{ scale: 0 }}
                        animate={{ 
                          scale: currentEra >= 8 ? 1 : 0, 
                          opacity: currentEra >= 8 ? 1 : 0
                        }}
                        transition={{ duration: 0.5, delay: 1 }}
                        cx="500" cy="80" r="8" 
                        fill="#3b82f6"
                      />
                      <motion.text 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: currentEra >= 8 ? 1 : 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        x="510" y="85" 
                        fontSize="12" 
                        fill="#3b82f6"
                      >
                        Digital Fiat
                      </motion.text>
                      
                      {/* Bitcoin apex */}
                      <motion.path 
                        initial={{ pathLength: 0 }}
                        animate={{ 
                          pathLength: currentEra >= 8 ? 1 : 0,
                          opacity: currentEra >= 8 ? 1 : 0
                        }}
                        transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                        d="M 400,100 L 400,65" 
                        stroke="#f59e0b" 
                        strokeWidth="4" 
                        fill="none"
                      />
                      
                      {/* Bitcoin pulsing node */}
                      <motion.circle 
                        initial={{ scale: 0 }}
                        animate={{ 
                          scale: [0, 1, 1.2, 1], 
                          opacity: currentEra >= 8 ? 1 : 0 
                        }}
                        transition={{
                          scale: { duration: 2, delay: 1.5 },
                          opacity: { duration: 1, delay: 1.5 }
                        }}
                        cx="400" cy="55" r="15" 
                        fill="#fb923c"
                      />
                      
                      {/* Bitcoin logo holder */}
                      <motion.circle 
                        initial={{ scale: 0 }}
                        animate={{ 
                          scale: currentEra >= 8 ? 1 : 0,
                        }}
                        transition={{ duration: 1, delay: 2 }}
                        cx="400" cy="55" r="12" 
                        fill="#ffffff"
                      />
                      
                      {/* Pulsing effect for Bitcoin */}
                      <motion.circle
                        initial={{ scale: 0, opacity: 0.7 }}
                        animate={{ 
                          scale: currentEra >= 8 ? [1, 1.5, 1] : 0,
                          opacity: currentEra >= 8 ? [0.7, 0, 0.7] : 0
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 3,
                          repeatType: "loop"
                        }}
                        cx="400" cy="55" r="20" 
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="2"
                      />
                      
                      {/* X marks for extinct forms */}
                      <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: currentEra >= 3 ? 1 : 0 }}
                        transition={{ duration: 0.8, delay: 1.5 }}
                      >
                        <path d="M 245,475 L 255,485" stroke="#ef4444" strokeWidth="2" />
                        <path d="M 255,475 L 245,485" stroke="#ef4444" strokeWidth="2" />
                        
                        <path d="M 525,415 L 535,425" stroke="#ef4444" strokeWidth="2" />
                        <path d="M 535,415 L 525,425" stroke="#ef4444" strokeWidth="2" />
                      </motion.g>
                      
                      {/* Energy path connecting through time */}
                      <motion.path 
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ 
                          pathLength: currentEra >= 8 ? 1 : 0, 
                          opacity: currentEra >= 8 ? 1 : 0 
                        }}
                        transition={{ duration: 3, delay: 2.5 }}
                        d="M 280,330 C 320,280, 360,230, 390,170 C 395,160, 400,80, 400,55" 
                        stroke="#f59e0b" 
                        strokeWidth="2" 
                        strokeDasharray="5,5"
                        fill="none"
                      />
                      
                      {/* Timeline visualization */}
                      <motion.line 
                        x1="100" y1="550" x2="700" y2="550" 
                        stroke="#64748b" 
                        strokeWidth="1" 
                        strokeDasharray="5,5"
                      />
                      
                      {/* Timeline dots */}
                      {[...Array(9)].map((_, i) => (
                        <motion.circle 
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.2 }}
                          cx={100 + i * 75} cy="550" r="4" 
                          fill={i === 8 ? "#f59e0b" : (i >= 5 ? "#3b82f6" : (i >= 3 ? "#d97706" : "#9ca3af"))}
                        />
                      ))}
                      
                      {/* Timeline year labels */}
                      <motion.text
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 2 }}
                        x="100" y="575" fontSize="12" fill="currentColor" fontWeight="bold"
                      >
                        10,000 BCE
                      </motion.text>
                      
                      <motion.text
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 2.2 }}
                        x="400" y="575" fontSize="12" fill="currentColor" fontWeight="bold"
                      >
                        1971
                      </motion.text>
                      
                      <motion.text
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 2.4 }}
                        x="700" y="575" fontSize="12" fill="currentColor" fontWeight="bold"
                      >
                        2009
                      </motion.text>
                    </svg>
                    
                    {/* Bitcoin logo overlay on top of tree - for emphasis */}
                    <motion.div 
                      className="absolute top-[10px] left-1/2 transform -translate-x-1/2 -ml-5"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: currentEra >= 8 ? 1 : 0,
                        opacity: currentEra >= 8 ? 1 : 0
                      }}
                      transition={{ duration: 1, delay: 2.2 }}
                    >
                      <BitcoinLogoIcon className="h-10 w-10 md:h-12 md:w-12 text-orange-500" />
                    </motion.div>
                  </div>
                  
                  <div className="mt-6 text-center text-sm md:text-base text-muted-foreground">
                    <span>Natural selection in action: The evolution of money through human history</span>
                  </div>
                </div>
              </AnimationErrorBoundary>
            </div>
          </div>
          
          <div className="mt-12">
            <div className="inline-block animate-bounce">
              <ChevronDown className="h-8 w-8 text-green-500" />
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-full h-full">
              <svg className="w-full h-full opacity-[0.02]" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="leafgrid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 5,0 Q 10,5 5,10 Q 0,5 5,0" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#leafgrid)" />
              </svg>
            </div>
          </div>
        </section>
        
        {/* Natural Selection of Money Timeline */}
        <section className="py-24 bg-card" ref={targetRef}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                style={{ opacity, scale }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Natural Selection of Money</h2>
                <p className="text-lg text-muted-foreground">
                  Throughout history, different forms of money have emerged, adapted, and often gone extinct 
                  in response to changing environmental pressures. This timeline reveals nature's relentless 
                  testing of monetary adaptations.
                </p>
              </motion.div>
              
              <div className="relative">
                <div className="absolute left-14 top-0 bottom-0 w-1 bg-green-500/20 z-0" aria-hidden="true"></div>
                
                <div className="relative z-10 space-y-12">
                  {/* Barter Era */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 bg-green-500 text-white h-10 w-10 rounded-full flex items-center justify-center z-20 mr-4">
                      <History className="h-5 w-5" />
                    </div>
                    
                    <div className="bg-background rounded-lg p-6 border shadow-md w-full">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <h3 className="text-xl font-bold">Barter Era</h3>
                        <Badge className="mt-2 md:mt-0 bg-green-500/10 text-green-500 hover:bg-green-500/20">
                          10,000+ BCE
                        </Badge>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-6 mb-4">
                        <div>
                          <h4 className="text-sm font-semibold mb-2 flex items-center">
                            <Mountain className="h-4 w-4 text-green-500 mr-1" />
                            Environmental Pressures
                          </h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Small tribal communities</li>
                            <li>• Limited trade radius</li>
                            <li>• Simple goods exchange</li>
                            <li>• Coincidence of wants problem</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold mb-2 flex items-center">
                            <Leaf className="h-4 w-4 text-green-500 mr-1" />
                            Adaptations
                          </h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Direct exchange of goods</li>
                            <li>• Gifting economies</li>
                            <li>• Reputation systems</li>
                            <li>• Tribal debt tracking</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold mb-2 flex items-center">
                            <Milestone className="h-4 w-4 text-green-500 mr-1" />
                            Selection Factors
                          </h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Limited by memory capacity</li>
                            <li>• Difficult to scale beyond tribes</li>
                            <li>• Challenged by complex exchanges</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-green-500/5 border border-green-500/10 rounded-md">
                        <h4 className="text-sm font-semibold mb-2 flex items-center">
                          <CircleOff className="h-4 w-4 text-red-500 mr-1" />
                          Evolutionary Dead End
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          As tribes grew into larger civilizations and trade networks expanded, barter systems 
                          couldn't adapt to the increasing complexity. The coincidence of wants problem became 
                          an insurmountable limitation, creating evolutionary pressure for commodity money.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Commodity Money Era */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 bg-green-500 text-white h-10 w-10 rounded-full flex items-center justify-center z-20 mr-4">
                      <Gem className="h-5 w-5" />
                    </div>
                    
                    <div className="bg-background rounded-lg p-6 border shadow-md w-full">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <h3 className="text-xl font-bold">Commodity Money</h3>
                        <Badge className="mt-2 md:mt-0 bg-green-500/10 text-green-500 hover:bg-green-500/20">
                          9,000 - 3,000 BCE
                        </Badge>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-6 mb-4">
                        <div>
                          <h4 className="text-sm font-semibold mb-2 flex items-center">
                            <Mountain className="h-4 w-4 text-green-500 mr-1" />
                            Environmental Pressures
                          </h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Growth of early civilizations</li>
                            <li>• Expanding trade networks</li>
                            <li>• Need for standardized value</li>
                            <li>• Delayed exchange requirements</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold mb-2 flex items-center">
                            <Leaf className="h-4 w-4 text-green-500 mr-1" />
                            Adaptations
                          </h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Shells, beads, salt</li>
                            <li>• Livestock as value units</li>
                            <li>• Grain-based systems</li>
                            <li>• Wampum and cowrie shells</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold mb-2 flex items-center">
                            <Milestone className="h-4 w-4 text-green-500 mr-1" />
                            Selection Factors
                          </h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Varying degrees of portability</li>
                            <li>• Durability challenges</li>
                            <li>• Limited divisibility</li>
                            <li>• Uneven quality (nonuniformity)</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-green-500/5 border border-green-500/10 rounded-md">
                        <h4 className="text-sm font-semibold mb-2 flex items-center">
                          <Lightbulb className="h-4 w-4 text-amber-500 mr-1" />
                          Evolutionary Insight
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Several commodity monies co-evolved in parallel across different regions. Those with greater 
                          scarcity, durability and portability tended to outlast others. Examples like salt money
                          in Africa, cattle in numerous cultures, and cowrie shells across Asia and Africa, were all
                          adaptations to the barter problem with different tradeoffs that reflected local resources.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Precious Metals Era */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 bg-green-500 text-white h-10 w-10 rounded-full flex items-center justify-center z-20 mr-4">
                      <Coins className="h-5 w-5" />
                    </div>
                    
                    <div className="bg-background rounded-lg p-6 border shadow-md w-full">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <h3 className="text-xl font-bold">Precious Metals</h3>
                        <Badge className="mt-2 md:mt-0 bg-green-500/10 text-green-500 hover:bg-green-500/20">
                          3,000 BCE - 1900 CE
                        </Badge>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-6 mb-4">
                        <div>
                          <h4 className="text-sm font-semibold mb-2 flex items-center">
                            <Mountain className="h-4 w-4 text-green-500 mr-1" />
                            Environmental Pressures
                          </h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Long-distance trade routes</li>
                            <li>• Formation of empires</li>
                            <li>• Need for stable value storage</li>
                            <li>• Counterfeiting risks</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold mb-2 flex items-center">
                            <Leaf className="h-4 w-4 text-green-500 mr-1" />
                            Adaptations
                          </h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Gold and silver bullion</li>
                            <li>• Standardized precious metals</li>
                            <li>• Minting of official coins</li>
                            <li>• Bi-metallic standards</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold mb-2 flex items-center">
                            <Milestone className="h-4 w-4 text-green-500 mr-1" />
                            Selection Factors
                          </h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• High value-to-weight ratio</li>
                            <li>• Excellent durability</li>
                            <li>• Divisibility capabilities</li>
                            <li>• Natural scarcity (costly to produce)</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-green-500/5 border border-green-500/10 rounded-md">
                          <h4 className="text-sm font-semibold mb-2 flex items-center">
                            <Microscope className="h-4 w-4 text-blue-500 mr-1" />
                            Case Study: Rome's Debasement
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            The Roman Empire provides a perfect example of monetary evolution in action. As the 
                            Empire's expenses exceeded its income, rulers debased silver coins by reducing their 
                            precious metal content. This adaptation failed, leading to inflation and contributing 
                            to Rome's economic collapse.
                          </p>
                        </div>
                        
                        <div className="p-4 bg-green-500/5 border border-green-500/10 rounded-md">
                          <h4 className="text-sm font-semibold mb-2 flex items-center">
                            <Star className="h-4 w-4 text-green-500 mr-1" />
                            Evolutionary Advantage
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Gold emerged as the apex monetary metal due to its unique combination of properties: 
                            extreme durability (doesn't rust or degrade), high scarcity (can't be easily produced), 
                            divisibility, fungibility, and universal recognition across cultures.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Paper Money Era */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 bg-green-500 text-white h-10 w-10 rounded-full flex items-center justify-center z-20 mr-4">
                      <BadgeDollarSign className="h-5 w-5" />
                    </div>
                    
                    <div className="bg-background rounded-lg p-6 border shadow-md w-full">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <h3 className="text-xl font-bold">Paper Money & Gold Standard</h3>
                        <Badge className="mt-2 md:mt-0 bg-green-500/10 text-green-500 hover:bg-green-500/20">
                          700 CE - 1971 CE
                        </Badge>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-6 mb-4">
                        <div>
                          <h4 className="text-sm font-semibold mb-2 flex items-center">
                            <Mountain className="h-4 w-4 text-green-500 mr-1" />
                            Environmental Pressures
                          </h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Global trade networks</li>
                            <li>• Need for more portable value</li>
                            <li>• Physical security challenges</li>
                            <li>• Banking system emergence</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold mb-2 flex items-center">
                            <Leaf className="h-4 w-4 text-green-500 mr-1" />
                            Adaptations
                          </h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Gold receipts and certificates</li>
                            <li>• Fractional reserve banking</li>
                            <li>• International gold standard</li>
                            <li>• Anti-counterfeit technologies</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold mb-2 flex items-center">
                            <Milestone className="h-4 w-4 text-green-500 mr-1" />
                            Selection Factors
                          </h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Superior portability</li>
                            <li>• Limited by gold reserves</li>
                            <li>• Counterfeit resistance</li>
                            <li>• Centralized control vulnerability</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-green-500/5 border border-green-500/10 rounded-md">
                        <h4 className="text-sm font-semibold mb-2 flex items-center">
                          <Microscope className="h-4 w-4 text-blue-500 mr-1" />
                          Case Study: Chinese Fiat Collapse
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          China's Song Dynasty (960-1279) pioneered government-issued paper money. Initially backed by 
                          metal reserves, successive dynasties removed these constraints and printed excessively. 
                          By the 15th century, hyperinflation had rendered Chinese paper money worthless—a natural 
                          selection event repeated throughout history when money is decoupled from scarcity.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Modern Fiat Era */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 bg-green-500 text-white h-10 w-10 rounded-full flex items-center justify-center z-20 mr-4">
                      <Building className="h-5 w-5" />
                    </div>
                    
                    <div className="bg-background rounded-lg p-6 border shadow-md w-full">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <h3 className="text-xl font-bold">Modern Fiat Era</h3>
                        <Badge className="mt-2 md:mt-0 bg-green-500/10 text-green-500 hover:bg-green-500/20">
                          1971 - Present
                        </Badge>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-6 mb-4">
                        <div>
                          <h4 className="text-sm font-semibold mb-2 flex items-center">
                            <Mountain className="h-4 w-4 text-green-500 mr-1" />
                            Environmental Pressures
                          </h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Growth of global economy</li>
                            <li>• Government financing needs</li>
                            <li>• Digital commerce emergence</li>
                            <li>• Centralized policy control</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold mb-2 flex items-center">
                            <Leaf className="h-4 w-4 text-green-500 mr-1" />
                            Adaptations
                          </h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Fully unbacked paper currencies</li>
                            <li>• Central banking networks</li>
                            <li>• Electronic payment systems</li>
                            <li>• Floating exchange rates</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold mb-2 flex items-center">
                            <Milestone className="h-4 w-4 text-green-500 mr-1" />
                            Selection Factors
                          </h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• No inherent scarcity mechanism</li>
                            <li>• Excellent portability and divisibility</li>
                            <li>• Centralized control (adaptability)</li>
                            <li>• High vulnerability to systemic risk</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-green-500/5 border border-green-500/10 rounded-md">
                          <h4 className="text-sm font-semibold mb-2 flex items-center">
                            <CircleOff className="h-4 w-4 text-red-500 mr-1" />
                            Evolutionary Vulnerabilities
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            The average lifespan of a fiat currency is approximately 27 years. Since 1971, when the 
                            gold standard was abandoned, global fiat has lost over 96% of its value against gold. 
                            This rapid devaluation suggests modern fiat may be in an evolutionary bottleneck, 
                            vulnerable to replacement by more fit monetary species.
                          </p>
                        </div>
                        
                        <div className="p-4 bg-amber-500/5 border border-amber-500/10 rounded-md">
                          <h4 className="text-sm font-semibold mb-2 flex items-center">
                            <Bug className="h-4 w-4 text-amber-500 mr-1" />
                            Evolutionary Pressure
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            The digital age, global interconnectedness, and recurring financial crises create 
                            selection pressures that may favor non-state, digital, scarce monetary systems. 
                            These environmental changes are challenging the adaptive advantage of centralized 
                            fiat currencies.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Bitcoin Era */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 bg-green-500 text-white h-10 w-10 rounded-full flex items-center justify-center z-20 mr-4">
                      <Network className="h-5 w-5" />
                    </div>
                    
                    <div className="bg-background rounded-lg p-6 border border-green-500/30 shadow-md w-full">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <h3 className="text-xl font-bold">Bitcoin: Apex Adaptation</h3>
                        <Badge className="mt-2 md:mt-0 bg-green-500/10 text-green-500 hover:bg-green-500/20">
                          2009 - Present
                        </Badge>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-6 mb-4">
                        <div>
                          <h4 className="text-sm font-semibold mb-2 flex items-center">
                            <Mountain className="h-4 w-4 text-green-500 mr-1" />
                            Environmental Pressures
                          </h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Global digital economy</li>
                            <li>• Monetary policy uncertainty</li>
                            <li>• Privacy erosion in finance</li>
                            <li>• Cross-border payment friction</li>
                            <li>• Financial system fragility</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold mb-2 flex items-center">
                            <Leaf className="h-4 w-4 text-green-500 mr-1" />
                            Adaptations
                          </h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Mathematically enforced scarcity</li>
                            <li>• Decentralized consensus</li>
                            <li>• Energy-backed security</li>
                            <li>• Borderless network design</li>
                            <li>• Censorship resistance</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold mb-2 flex items-center">
                            <Milestone className="h-4 w-4 text-green-500 mr-1" />
                            Selection Factors
                          </h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Perfect scarcity (21M fixed supply)</li>
                            <li>• Digital native design</li>
                            <li>• Self-custody capability</li>
                            <li>• No counterparty risk</li>
                            <li>• Antifragile network structure</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-green-500/5 border border-green-500/10 rounded-md">
                        <h4 className="text-sm font-semibold mb-2 flex items-center">
                          <Star className="h-4 w-4 text-green-500 mr-1" />
                          Evolutionary Breakthrough
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Bitcoin represents the first truly digital form of monetary scarcity, solving problems that 
                          previously required physical matter (gold) or trusted third parties (fiat). This adaptation 
                          combines the scarcity properties of precious metals with the transferability of digital information, 
                          creating a new monetary species uniquely suited to the information age.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Monetary DNA Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <Badge className="mb-4 px-3 py-1 bg-green-500 text-white hover:bg-green-600 transition-colors">
                  <Dna className="mr-1 h-3.5 w-3.5" />
                  <span>Genetic Traits</span>
                </Badge>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Monetary DNA</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Just as living organisms possess genetic traits that determine their fitness for survival, 
                  monetary systems have essential properties that define their suitability as money. 
                  These traits determine which monetary systems thrive and which become extinct.
                </p>
              </motion.div>
              
              {/* Properties explanation */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg p-6 border hover:border-green-500/30 transition-colors"
                >
                  <div className="h-10 w-10 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-4">
                    <Diamond className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Durability</h3>
                  <p className="text-sm text-muted-foreground">
                    The ability to maintain integrity over time without degradation. 
                    Monetary forms that decay quickly create evolutionary pressure 
                    for more permanent alternatives.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg p-6 border hover:border-green-500/30 transition-colors"
                >
                  <div className="h-10 w-10 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-4">
                    <Wallet className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Portability</h3>
                  <p className="text-sm text-muted-foreground">
                    The ease of transporting value across space. Higher value-to-weight 
                    ratios create adaptive advantages in expanding trade networks and 
                    mobile societies.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg p-6 border hover:border-green-500/30 transition-colors"
                >
                  <div className="h-10 w-10 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-4">
                    <Scale className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Divisibility</h3>
                  <p className="text-sm text-muted-foreground">
                    The ability to be divided into smaller units without losing proportional 
                    value. Enables trade of varying value and creates adaptability across 
                    different economic scales.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg p-6 border hover:border-green-500/30 transition-colors"
                >
                  <div className="h-10 w-10 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-4">
                    <Timer className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Scarcity</h3>
                  <p className="text-sm text-muted-foreground">
                    The resistance to supply inflation. Value retention over time creates 
                    evolutionary fitness by aligning with humans' need for 
                    intergenerational value preservation.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg p-6 border hover:border-green-500/30 transition-colors"
                >
                  <div className="h-10 w-10 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-4">
                    <CombineIcon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Fungibility</h3>
                  <p className="text-sm text-muted-foreground">
                    The property of mutual interchangeability where each unit equals 
                    any other. Creates evolutionary advantage through network effects 
                    and reduced transactional friction.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg p-6 border hover:border-green-500/30 transition-colors"
                >
                  <div className="h-10 w-10 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-4">
                    <BadgeCheck className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Verifiability</h3>
                  <p className="text-sm text-muted-foreground">
                    The ease of authenticating genuine units. Forms of money that 
                    can be easily counterfeited face selection pressure against 
                    those with strong verification capabilities.
                  </p>
                </motion.div>
              </div>
              
              {/* Monetary species comparison */}
              <div className="bg-card border rounded-lg overflow-hidden shadow-lg mb-16">
                <div className="border-b p-6">
                  <h3 className="text-xl font-bold">Monetary Species Genetic Profile</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Compare how different monetary forms score across essential evolutionary traits
                  </p>
                </div>
                
                <div className="p-6 overflow-x-auto">
                  <table className="w-full min-w-[800px]">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left pb-4 font-medium text-muted-foreground">Monetary Species</th>
                        <th className="text-center pb-4 font-medium text-muted-foreground">
                          <Diamond className="h-4 w-4 mx-auto mb-1" />
                          <span className="text-xs">Durability</span>
                        </th>
                        <th className="text-center pb-4 font-medium text-muted-foreground">
                          <Wallet className="h-4 w-4 mx-auto mb-1" />
                          <span className="text-xs">Portability</span>
                        </th>
                        <th className="text-center pb-4 font-medium text-muted-foreground">
                          <Scale className="h-4 w-4 mx-auto mb-1" />
                          <span className="text-xs">Divisibility</span>
                        </th>
                        <th className="text-center pb-4 font-medium text-muted-foreground">
                          <Timer className="h-4 w-4 mx-auto mb-1" />
                          <span className="text-xs">Scarcity</span>
                        </th>
                        <th className="text-center pb-4 font-medium text-muted-foreground">
                          <CombineIcon className="h-4 w-4 mx-auto mb-1" />
                          <span className="text-xs">Fungibility</span>
                        </th>
                        <th className="text-center pb-4 font-medium text-muted-foreground">
                          <BadgeCheck className="h-4 w-4 mx-auto mb-1" />
                          <span className="text-xs">Verifiability</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="py-4 pr-4 font-medium">Cattle</td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '30%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '20%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '10%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '40%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '20%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '30%' }}></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      
                      <tr>
                        <td className="py-4 pr-4 font-medium">Shells</td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '60%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '80%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '40%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '40%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '60%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '30%' }}></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      
                      <tr>
                        <td className="py-4 pr-4 font-medium">Silver</td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '90%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '60%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '80%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '70%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '90%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '70%' }}></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      
                      <tr>
                        <td className="py-4 pr-4 font-medium">Gold</td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '100%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '70%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '80%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '90%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '90%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '80%' }}></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      
                      <tr>
                        <td className="py-4 pr-4 font-medium">Fiat Currency</td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '40%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '90%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '100%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '10%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '100%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '70%' }}></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      
                      <tr>
                        <td className="py-4 pr-4 font-medium">Digital Fiat</td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '60%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '100%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '100%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '10%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '90%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '60%' }}></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      
                      <tr className="border-t-2 border-green-500/20">
                        <td className="py-4 pr-4 font-medium text-green-600">Bitcoin</td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '100%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '100%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '100%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '100%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '95%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="flex justify-center">
                            <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '100%' }}></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-6 w-6 text-green-500 mr-2" />
                  <h3 className="text-xl font-bold">Evolutionary Insight</h3>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Money evolves toward forms with more complete genetic profiles. Each improvement in monetary 
                  technology has overcome a specific weakness in previous forms. Bitcoin represents an unprecedented 
                  combination of monetary traits that previously could not exist together:
                </p>
                
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mr-2 mt-0.5 flex-shrink-0">✓</div>
                    <span>The <strong>durability</strong> of gold (digital information doesn't degrade) without physical vulnerability</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mr-2 mt-0.5 flex-shrink-0">✓</div>
                    <span>The <strong>portability</strong> of digital fiat (transmissible at the speed of light) without intermediaries</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mr-2 mt-0.5 flex-shrink-0">✓</div>
                    <span>The <strong>divisibility</strong> of digital currency (up to 8 decimal places) without inflationary pressure</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mr-2 mt-0.5 flex-shrink-0">✓</div>
                    <span>The <strong>scarcity</strong> of precious metals (limited to 21 million) without extraction costs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mr-2 mt-0.5 flex-shrink-0">✓</div>
                    <span>The <strong>fungibility</strong> of standardized currency units without confiscation risk</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mr-2 mt-0.5 flex-shrink-0">✓</div>
                    <span>The <strong>verifiability</strong> of digital signatures without requiring trusted third parties</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Adaptation Showcase Section */}
        <section className="py-24 bg-green-500/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Adaptation Showcase</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Natural selection tests monetary systems across diverse environments and challenges.
                  See how gold, fiat currency, and Bitcoin compare in evolutionary fitness tests
                  across key survival scenarios.
                </p>
              </motion.div>
              
              {/* Challenge cards */}
              <div className="space-y-12">
                {/* Long-distance trade challenge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg border overflow-hidden shadow-md"
                >
                  <div className="border-b p-6 bg-green-500/5">
                    <h3 className="text-xl font-bold flex items-center">
                      <Globe className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Long-Distance Trade Challenge</span>
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Trading across vast distances has been a consistent evolutionary pressure on money throughout history
                    </p>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="rounded-lg border bg-background p-4">
                        <h4 className="font-medium mb-2 flex items-center">
                          <Coins className="h-4 w-4 text-amber-500 mr-2" />
                          Gold
                        </h4>
                        <div className="text-sm text-muted-foreground space-y-2">
                          <p>
                            <strong>Adaptation:</strong> Heavy physical transport, guarded shipments
                          </p>
                          <p>
                            <strong>Costs:</strong> Security risks, slow speed, high transport fees
                          </p>
                          <p>
                            <strong>Limits:</strong> Physical presence required, vulnerable to theft
                          </p>
                          <div className="pt-2">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs">Fitness Score</span>
                              <span className="text-xs font-medium">Fair</span>
                            </div>
                            <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-amber-500" style={{ width: '40%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="rounded-lg border bg-background p-4">
                        <h4 className="font-medium mb-2 flex items-center">
                          <BadgeDollarSign className="h-4 w-4 text-blue-500 mr-2" />
                          Fiat Currency
                        </h4>
                        <div className="text-sm text-muted-foreground space-y-2">
                          <p>
                            <strong>Adaptation:</strong> Banking network with settlement systems
                          </p>
                          <p>
                            <strong>Costs:</strong> Intermediary fees, currency exchange, delays
                          </p>
                          <p>
                            <strong>Limits:</strong> Banking hours, political borders, permissions
                          </p>
                          <div className="pt-2">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs">Fitness Score</span>
                              <span className="text-xs font-medium">Good</span>
                            </div>
                            <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-blue-500" style={{ width: '70%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="rounded-lg border bg-background p-4 border-green-500/30">
                        <h4 className="font-medium mb-2 flex items-center">
                          <Bitcoin className="h-4 w-4 text-green-500 mr-2" />
                          Bitcoin
                        </h4>
                        <div className="text-sm text-muted-foreground space-y-2">
                          <p>
                            <strong>Adaptation:</strong> Global network with no physical transport
                          </p>
                          <p>
                            <strong>Costs:</strong> Network fees, variable confirmation times
                          </p>
                          <p>
                            <strong>Limits:</strong> Internet connectivity requirement
                          </p>
                          <div className="pt-2">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs">Fitness Score</span>
                              <span className="text-xs font-medium">Excellent</span>
                            </div>
                            <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '95%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-green-500/5 border border-green-500/10 rounded-md">
                      <h4 className="text-sm font-medium mb-2 flex items-center">
                        <Microscope className="h-4 w-4 text-green-500 mr-2" />
                        Evolutionary Analysis
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        As trade networks expanded globally, the energy cost of moving physical gold created 
                        selection pressure for more efficient value transfer systems. While fiat banking networks 
                        improved on gold's portability, they introduced trust dependencies and political barriers. 
                        Bitcoin represents a breakthrough adaptation that transmits value at the speed of light 
                        without physical transport or reliance on trusted third parties.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Storage costs challenge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg border overflow-hidden shadow-md"
                >
                  <div className="border-b p-6 bg-green-500/5">
                    <h3 className="text-xl font-bold flex items-center">
                      <Shield className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Storage & Security Challenge</span>
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Safe storage of wealth has been a critical evolutionary driver throughout monetary history
                    </p>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="rounded-lg border bg-background p-4">
                        <h4 className="font-medium mb-2 flex items-center">
                          <Coins className="h-4 w-4 text-amber-500 mr-2" />
                          Gold
                        </h4>
                        <div className="text-sm text-muted-foreground space-y-2">
                          <p>
                            <strong>Adaptation:</strong> Vaults, guards, burial, hiding places
                          </p>
                          <p>
                            <strong>Costs:</strong> Physical space, security personnel, insurance
                          </p>
                          <p>
                            <strong>Limits:</strong> Scales linearly with volume, vulnerable to force
                          </p>
                          <div className="pt-2">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs">Fitness Score</span>
                              <span className="text-xs font-medium">Fair</span>
                            </div>
                            <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-amber-500" style={{ width: '50%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="rounded-lg border bg-background p-4">
                        <h4 className="font-medium mb-2 flex items-center">
                          <BadgeDollarSign className="h-4 w-4 text-blue-500 mr-2" />
                          Fiat Currency
                        </h4>
                        <div className="text-sm text-muted-foreground space-y-2">
                          <p>
                            <strong>Adaptation:</strong> Bank vaults, deposit insurance, digital accounts
                          </p>
                          <p>
                            <strong>Costs:</strong> Account fees, financial surveillance, counterparty risk
                          </p>
                          <p>
                            <strong>Limits:</strong> Bank solvency risk, bail-ins, account freezes
                          </p>
                          <div className="pt-2">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs">Fitness Score</span>
                              <span className="text-xs font-medium">Good</span>
                            </div>
                            <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-blue-500" style={{ width: '75%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="rounded-lg border bg-background p-4 border-green-500/30">
                        <h4 className="font-medium mb-2 flex items-center">
                          <Bitcoin className="h-4 w-4 text-green-500 mr-2" />
                          Bitcoin
                        </h4>
                        <div className="text-sm text-muted-foreground space-y-2">
                          <p>
                            <strong>Adaptation:</strong> Private keys, multi-signature, hardware wallets
                          </p>
                          <p>
                            <strong>Costs:</strong> Key management responsibility, wallets
                          </p>
                          <p>
                            <strong>Limits:</strong> Technical knowledge requirement
                          </p>
                          <div className="pt-2">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs">Fitness Score</span>
                              <span className="text-xs font-medium">Excellent</span>
                            </div>
                            <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '90%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-green-500/5 border border-green-500/10 rounded-md">
                      <h4 className="text-sm font-medium mb-2 flex items-center">
                        <Microscope className="h-4 w-4 text-green-500 mr-2" />
                        Evolutionary Analysis
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        The history of wealth storage shows a clear evolutionary path toward more efficient 
                        security solutions. Gold's weight requires expensive physical security that scales linearly 
                        with value. Fiat banking improved efficiency but introduced third-party custody risks. 
                        Bitcoin's cryptographic security allows any amount of value to be secured with the same 
                        computational difficulty, making it the first monetary technology where security does not 
                        scale with value stored.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Societal collapse resistance challenge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg border overflow-hidden shadow-md"
                >
                  <div className="border-b p-6 bg-green-500/5">
                    <h3 className="text-xl font-bold flex items-center">
                      <Hammer className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Societal Stress Challenge</span>
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      History repeatedly tests money under extreme conditions including war, hyperinflation, and societal breakdowns
                    </p>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="rounded-lg border bg-background p-4">
                        <h4 className="font-medium mb-2 flex items-center">
                          <Coins className="h-4 w-4 text-amber-500 mr-2" />
                          Gold
                        </h4>
                        <div className="text-sm text-muted-foreground space-y-2">
                          <p>
                            <strong>Adaptation:</strong> Physical resilience, hiding, burial
                          </p>
                          <p>
                            <strong>Advantages:</strong> No counterparty risk, universal recognition
                          </p>
                          <p>
                            <strong>Limitations:</strong> Physical confiscation, transport difficulties
                          </p>
                          <div className="pt-2">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs">Fitness Score</span>
                              <span className="text-xs font-medium">Good</span>
                            </div>
                            <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-amber-500" style={{ width: '80%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="rounded-lg border bg-background p-4">
                        <h4 className="font-medium mb-2 flex items-center">
                          <BadgeDollarSign className="h-4 w-4 text-blue-500 mr-2" />
                          Fiat Currency
                        </h4>
                        <div className="text-sm text-muted-foreground space-y-2">
                          <p>
                            <strong>Adaptation:</strong> Currency controls, bailouts, redenomination
                          </p>
                          <p>
                            <strong>Advantages:</strong> Politically adaptable, legal mandate
                          </p>
                          <p>
                            <strong>Limitations:</strong> Hyperinflation risk, financial system dependency
                          </p>
                          <div className="pt-2">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs">Fitness Score</span>
                              <span className="text-xs font-medium">Poor</span>
                            </div>
                            <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-blue-500" style={{ width: '20%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="rounded-lg border bg-background p-4 border-green-500/30">
                        <h4 className="font-medium mb-2 flex items-center">
                          <Bitcoin className="h-4 w-4 text-green-500 mr-2" />
                          Bitcoin
                        </h4>
                        <div className="text-sm text-muted-foreground space-y-2">
                          <p>
                            <strong>Adaptation:</strong> Multi-regional networks, mempool redundancy
                          </p>
                          <p>
                            <strong>Advantages:</strong> Immune to confiscation, seed phrase portability
                          </p>
                          <p>
                            <strong>Limitations:</strong> Requires minimal communications infrastructure
                          </p>
                          <div className="pt-2">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs">Fitness Score</span>
                              <span className="text-xs font-medium">Excellent</span>
                            </div>
                            <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '95%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-green-500/5 border border-green-500/10 rounded-md">
                      <h4 className="text-sm font-medium mb-2 flex items-center">
                        <Microscope className="h-4 w-4 text-green-500 mr-2" />
                        Evolutionary Analysis
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Throughout history, societal breakdowns have been the most rigorous natural selection 
                        events for monetary systems. Gold has demonstrated remarkable resilience during crises, 
                        surviving countless government collapses. Fiat currencies routinely fail under extreme stress,
                        with hundreds of hyperinflations recorded. Bitcoin's design—combining the non-state nature of 
                        gold with greater portability via seed phrases—represents a significant evolutionary adaptation 
                        for survival during societal turbulence.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Technological adaptation challenge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg border overflow-hidden shadow-md"
                >
                  <div className="border-b p-6 bg-green-500/5">
                    <h3 className="text-xl font-bold flex items-center">
                      <FlaskConical className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Technological Adaptation Challenge</span>
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Money must adapt to changing technological environments to maintain relevance in evolving ecosystems
                    </p>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="rounded-lg border bg-background p-4">
                        <h4 className="font-medium mb-2 flex items-center">
                          <Coins className="h-4 w-4 text-amber-500 mr-2" />
                          Gold
                        </h4>
                        <div className="text-sm text-muted-foreground space-y-2">
                          <p>
                            <strong>Adaptation:</strong> Minimal changes over millennia
                          </p>
                          <p>
                            <strong>Digital Integration:</strong> Indirect via centralized proxies
                          </p>
                          <p>
                            <strong>Future Path:</strong> Limited technological upgrade potential
                          </p>
                          <div className="pt-2">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs">Fitness Score</span>
                              <span className="text-xs font-medium">Poor</span>
                            </div>
                            <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-amber-500" style={{ width: '30%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="rounded-lg border bg-background p-4">
                        <h4 className="font-medium mb-2 flex items-center">
                          <BadgeDollarSign className="h-4 w-4 text-blue-500 mr-2" />
                          Fiat Currency
                        </h4>
                        <div className="text-sm text-muted-foreground space-y-2">
                          <p>
                            <strong>Adaptation:</strong> Electronic banking, mobile payments, CBDCs
                          </p>
                          <p>
                            <strong>Digital Integration:</strong> High but with centralized architecture
                          </p>
                          <p>
                            <strong>Future Path:</strong> Increasing surveillance capabilities
                          </p>
                          <div className="pt-2">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs">Fitness Score</span>
                              <span className="text-xs font-medium">Good</span>
                            </div>
                            <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-blue-500" style={{ width: '70%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="rounded-lg border bg-background p-4 border-green-500/30">
                        <h4 className="font-medium mb-2 flex items-center">
                          <Bitcoin className="h-4 w-4 text-green-500 mr-2" />
                          Bitcoin
                        </h4>
                        <div className="text-sm text-muted-foreground space-y-2">
                          <p>
                            <strong>Adaptation:</strong> Protocol upgrades, Lightning Network, sidechains
                          </p>
                          <p>
                            <strong>Digital Integration:</strong> Digital-native, programmable
                          </p>
                          <p>
                            <strong>Future Path:</strong> Continued layered scaling with core stability
                          </p>
                          <div className="pt-2">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs">Fitness Score</span>
                              <span className="text-xs font-medium">Excellent</span>
                            </div>
                            <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500" style={{ width: '95%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-green-500/5 border border-green-500/10 rounded-md">
                      <h4 className="text-sm font-medium mb-2 flex items-center">
                        <Microscope className="h-4 w-4 text-green-500 mr-2" />
                        Evolutionary Analysis
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        The digital age represents an unprecedented environmental shift for monetary systems. 
                        Gold's physical nature makes it poorly adapted to digital commerce, functioning only 
                        through centralized intermediaries. Fiat currency has evolved digital interfaces but 
                        remains architecturally centralized. Bitcoin, born digital, demonstrates superior 
                        adaptability through its programmable nature and ability to evolve layered scaling 
                        solutions while maintaining its core properties.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* The remaining sections will go here */}
        
        {/* Fitness Landscape Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Monetary Fitness Landscape</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Examine how different forms of money occupy various positions in the evolutionary fitness landscape,
                  with Bitcoin representing the highest peak of adaptation across multiple dimensions.
                </p>
              </motion.div>
              
              {/* 3D Visualization */}
              <div className="bg-card rounded-xl border shadow-md overflow-hidden">
                <div className="p-6 border-b bg-green-500/5">
                  <h3 className="text-xl font-bold flex items-center">
                    <Mountain className="h-5 w-5 text-green-500 mr-2" />
                    <span>Monetary Fitness Peak Analysis</span>
                  </h3>
                </div>
                
                <div className="p-6">
                  <div className="aspect-video bg-background rounded-lg border relative overflow-hidden">
                    {/* SVG Visualization of fitness landscape */}
                    <svg viewBox="0 0 1000 600" className="w-full h-full">
                      {/* Background grid */}
                      <defs>
                        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                          <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(100, 116, 139, 0.1)" strokeWidth="1" />
                        </pattern>
                        <linearGradient id="fitnessGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                          <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
                          <stop offset="50%" stopColor="rgba(16, 185, 129, 0.3)" />
                          <stop offset="100%" stopColor="rgba(16, 185, 129, 0.9)" />
                        </linearGradient>
                      </defs>
                      
                      {/* Background with grid */}
                      <rect x="0" y="0" width="1000" height="600" fill="url(#grid)" />
                      
                      {/* X and Y axis labels */}
                      <text x="500" y="590" textAnchor="middle" fill="currentColor" fontSize="14">Portability & Divisibility</text>
                      <text x="15" y="300" textAnchor="middle" fill="currentColor" fontSize="14" transform="rotate(-90, 15, 300)">Durability & Scarcity</text>
                      
                      {/* Fitness mountains */}
                      {/* Barter - lowest fitness */}
                      <path d="M 100 500 Q 150 480 200 500 Q 250 520 300 500 L 300 550 L 100 550 Z" fill="rgba(100, 116, 139, 0.3)" />
                      <text x="200" y="525" textAnchor="middle" fill="white" fontSize="12">Barter</text>
                      
                      {/* Shells - low fitness */}
                      <path d="M 250 450 Q 300 420 350 450 Q 400 480 450 450 L 450 550 L 250 550 Z" fill="rgba(100, 116, 139, 0.4)" />
                      <text x="350" y="490" textAnchor="middle" fill="white" fontSize="12">Shells</text>
                      
                      {/* Cattle - low-medium fitness */}
                      <path d="M 150 430 Q 200 400 250 430 Q 300 460 350 430 L 350 550 L 150 550 Z" fill="rgba(100, 116, 139, 0.5)" />
                      <text x="250" y="470" textAnchor="middle" fill="white" fontSize="12">Cattle</text>
                      
                      {/* Silver - medium fitness */}
                      <path d="M 400 400 Q 450 350 500 400 Q 550 450 600 400 L 600 550 L 400 550 Z" fill="rgba(59, 130, 246, 0.5)" />
                      <text x="500" y="430" textAnchor="middle" fill="white" fontSize="14">Silver</text>
                      
                      {/* Gold - high fitness */}
                      <path d="M 500 350 Q 550 280 600 350 Q 650 420 700 350 L 700 550 L 500 550 Z" fill="rgba(245, 158, 11, 0.6)" />
                      <text x="600" y="380" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Gold</text>
                      
                      {/* Fiat - medium-high but unstable fitness */}
                      <path d="M 600 300 Q 650 240 700 300 Q 750 360 800 300 L 800 550 L 600 550 Z" fill="rgba(59, 130, 246, 0.7)" />
                      <text x="700" y="340" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Fiat</text>
                      
                      {/* Bitcoin - highest fitness */}
                      <path d="M 700 100 Q 750 50 800 100 Q 850 150 900 100 L 900 550 L 700 550 Z" fill="url(#fitnessGradient)" />
                      <text x="800" y="150" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">Bitcoin</text>
                      
                      {/* Axes */}
                      <line x1="50" y1="550" x2="950" y2="550" stroke="currentColor" strokeWidth="2" />
                      <line x1="50" y1="550" x2="50" y2="50" stroke="currentColor" strokeWidth="2" />
                      
                      {/* Digital energy line connecting through time */}
                      <path d="M 200 520 C 350 500, 500 400, 800 120" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="5,5" />
                      <text x="400" y="350" textAnchor="middle" fill="#10b981" fontSize="14" fontWeight="bold">Evolutionary Trajectory</text>
                    </svg>
                    
                    {/* Overlay labels */}
                    <div className="absolute bottom-4 right-4 bg-card/90 p-3 rounded-lg border shadow-sm">
                      <h4 className="text-sm font-medium mb-2">Fitness Dimensions</h4>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                          <span>Scarcity</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-blue-500 mr-1"></div>
                          <span>Portability</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-amber-500 mr-1"></div>
                          <span>Durability</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-purple-500 mr-1"></div>
                          <span>Divisibility</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 grid md:grid-cols-2 gap-6">
                    <div className="bg-background rounded-lg border p-5">
                      <h4 className="font-medium mb-3 flex items-center">
                        <Mountain className="h-4 w-4 text-green-500 mr-2" />
                        <span>Understanding Adaptive Peaks</span>
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        In evolutionary biology, fitness landscapes visualize how well-adapted organisms 
                        are to their environment. Higher peaks represent more successful adaptations. 
                        Similarly, monetary systems occupy positions on a multidimensional landscape where 
                        height represents fitness across properties like scarcity, durability, portability, 
                        and divisibility.
                      </p>
                    </div>
                    
                    <div className="bg-background rounded-lg border p-5">
                      <h4 className="font-medium mb-3 flex items-center">
                        <Zap className="h-4 w-4 text-green-500 mr-2" />
                        <span>Bitcoin's Evolutionary Leap</span>
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Bitcoin represents an unprecedented evolutionary leap in the monetary fitness landscape. 
                        While gold and fiat occupy significant peaks, Bitcoin reaches higher by combining 
                        gold's scarcity and durability with superior portability and divisibility. This 
                        combination of traits allows it to occupy what biologists would call the "global 
                        fitness maximum" of the monetary landscape.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-green-500/5 border border-green-500/10 rounded-md">
                    <h4 className="text-sm font-medium mb-2 flex items-center">
                      <Lightbulb className="h-4 w-4 text-green-500 mr-2" />
                      Evolutionary Insight
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      The monetary fitness landscape has been explored by humanity for thousands of years. 
                      Each new form of money represented an adaptation climbing higher on this landscape.
                      Gold occupied a local maximum for centuries, representing a stable evolutionary strategy.
                      What makes Bitcoin revolutionary is that it appears to have found the global maximum—a 
                      set of monetary properties that cannot be significantly improved upon. This suggests 
                      that while technological implementations may evolve, Bitcoin's fundamental monetary 
                      properties represent nature's solution to the problem of value storage and transfer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* The remaining sections will go here */}
        
        {/* Convergent Evolution Section */}
        <section className="py-24 bg-green-500/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Convergent Evolution</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Just as nature independently evolves similar solutions to common problems,
                  monetary systems across separate civilizations converged on similar properties.
                  Bitcoin represents the ultimate convergence of these monetary traits.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl border shadow-md overflow-hidden"
                >
                  <div className="p-6 border-b bg-green-500/5">
                    <h3 className="text-xl font-bold flex items-center">
                      <Globe2 className="h-5 w-5 text-green-500 mr-2" />
                      <span>Geographic Convergence</span>
                    </h3>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-6">
                      <div className="bg-background rounded-lg border p-4">
                        <h4 className="font-medium mb-2 flex items-center text-sm">
                          <Map className="h-4 w-4 text-amber-500 mr-2" />
                          <span>Ancient Mediterranean</span>
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Independently developed gold and silver coin standards with
                          remarkably similar weights and purity across Greek, Persian,
                          and Phoenician civilizations.
                        </p>
                      </div>
                      
                      <div className="bg-background rounded-lg border p-4">
                        <h4 className="font-medium mb-2 flex items-center text-sm">
                          <Map className="h-4 w-4 text-amber-500 mr-2" />
                          <span>East Asian Civilizations</span>
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Chinese, Japanese and Korean societies developed similar 
                          copper and silver currency systems despite limited cultural 
                          exchange during formative periods.
                        </p>
                      </div>
                      
                      <div className="bg-background rounded-lg border p-4">
                        <h4 className="font-medium mb-2 flex items-center text-sm">
                          <Map className="h-4 w-4 text-amber-500 mr-2" />
                          <span>Pre-Columbian Americas</span>
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Aztec, Inca and North American civilizations evolved cocoa 
                          beans, copper axes, shells, and other commodity currencies 
                          with similar functions despite geographic isolation.
                        </p>
                      </div>
                      
                      <div className="p-4 bg-green-500/5 border border-green-500/10 rounded-md">
                        <h4 className="text-sm font-medium mb-2 flex items-center">
                          <Lightbulb className="h-4 w-4 text-green-500 mr-2" />
                          Evolutionary Insight
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          The independent development of similar monetary solutions across 
                          geographically isolated civilizations demonstrates that monetary 
                          properties are not arbitrary cultural choices but represent 
                          fundamental adaptations to universal human needs for value storage 
                          and exchange.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl border shadow-md overflow-hidden"
                >
                  <div className="p-6 border-b bg-green-500/5">
                    <h3 className="text-xl font-bold flex items-center">
                      <Binary className="h-5 w-5 text-green-500 mr-2" />
                      <span>Digital Convergence</span>
                    </h3>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-6">
                      <div className="bg-background rounded-lg border p-4">
                        <h4 className="font-medium mb-2 flex items-center text-sm">
                          <Code2 className="h-4 w-4 text-blue-500 mr-2" />
                          <span>Precursor Digital Currencies</span>
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          From DigiCash (1989) to e-gold (1996) to Bit Gold (1998), 
                          numerous attempts to create digital money converged on 
                          similar solutions to problems of digital scarcity, 
                          double-spending, and trust minimization.
                        </p>
                      </div>
                      
                      <div className="bg-background rounded-lg border p-4">
                        <h4 className="font-medium mb-2 flex items-center text-sm">
                          <Code2 className="h-4 w-4 text-blue-500 mr-2" />
                          <span>Proof-of-Work Convergence</span>
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Initially developed for email spam prevention (Hashcash, 1997), 
                          proof-of-work was independently recognized as useful for 
                          digital money by multiple researchers, converging on similar 
                          mechanisms to establish digital scarcity.
                        </p>
                      </div>
                      
                      <div className="bg-background rounded-lg border p-4">
                        <h4 className="font-medium mb-2 flex items-center text-sm">
                          <Code2 className="h-4 w-4 text-blue-500 mr-2" />
                          <span>Crypto-Economic Consensus</span>
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Multiple researchers independently converged on using 
                          cryptography and economic incentives to create trustless 
                          systems. From David Chaum to Nick Szabo to Satoshi Nakamoto, 
                          the evolutionary path shows remarkable convergence.
                        </p>
                      </div>
                      
                      <div className="p-4 bg-green-500/5 border border-green-500/10 rounded-md">
                        <h4 className="text-sm font-medium mb-2 flex items-center">
                          <Lightbulb className="h-4 w-4 text-green-500 mr-2" />
                          Evolutionary Insight
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Bitcoin represents the culmination of multiple convergent 
                          evolutionary paths in digital currency design. Just as eyes 
                          evolved independently in different species, the cryptographic 
                          and consensus mechanisms in Bitcoin reflect the discovery of 
                          optimal solutions to the fundamental problems of digital value. 
                          This convergence suggests Bitcoin's design is not arbitrary but 
                          represents a mathematical optimum.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Convergent traits table */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-12 bg-card rounded-xl border shadow-md overflow-hidden"
              >
                <div className="p-6 border-b bg-green-500/5">
                  <h3 className="text-xl font-bold flex items-center">
                    <GitBranch className="h-5 w-5 text-green-500 mr-2" />
                    <span>Convergent Monetary Traits</span>
                  </h3>
                </div>
                
                <div className="p-6 overflow-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="text-left p-3 border">Monetary Trait</th>
                        <th className="text-left p-3 border">Ancient Adaptation</th>
                        <th className="text-left p-3 border">Modern Adaptation</th>
                        <th className="text-left p-3 border">Bitcoin Implementation</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border font-medium">Scarcity Mechanism</td>
                        <td className="p-3 border text-sm">
                          <span className="flex items-center">
                            <Gem className="h-4 w-4 text-amber-500 mr-2" />
                            Natural mineral rarity
                          </span>
                        </td>
                        <td className="p-3 border text-sm">
                          <span className="flex items-center">
                            <Building className="h-4 w-4 text-blue-500 mr-2" />
                            Institutional control
                          </span>
                        </td>
                        <td className="p-3 border text-sm">
                          <span className="flex items-center">
                            <Code className="h-4 w-4 text-green-500 mr-2" />
                            Mathematical supply cap
                          </span>
                        </td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="p-3 border font-medium">Verification System</td>
                        <td className="p-3 border text-sm">
                          <span className="flex items-center">
                            <Scale className="h-4 w-4 text-amber-500 mr-2" />
                            Physical weight & bite test
                          </span>
                        </td>
                        <td className="p-3 border text-sm">
                          <span className="flex items-center">
                            <Stamp className="h-4 w-4 text-blue-500 mr-2" />
                            Watermarks & security features
                          </span>
                        </td>
                        <td className="p-3 border text-sm">
                          <span className="flex items-center">
                            <ServerCog className="h-4 w-4 text-green-500 mr-2" />
                            Cryptographic proofs
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border font-medium">Transfer Mechanism</td>
                        <td className="p-3 border text-sm">
                          <span className="flex items-center">
                            <HandCoinsIcon className="h-4 w-4 text-amber-500 mr-2" />
                            Physical exchange
                          </span>
                        </td>
                        <td className="p-3 border text-sm">
                          <span className="flex items-center">
                            <Building2 className="h-4 w-4 text-blue-500 mr-2" />
                            Institutional ledgers
                          </span>
                        </td>
                        <td className="p-3 border text-sm">
                          <span className="flex items-center">
                            <Network className="h-4 w-4 text-green-500 mr-2" />
                            Distributed consensus
                          </span>
                        </td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="p-3 border font-medium">Security System</td>
                        <td className="p-3 border text-sm">
                          <span className="flex items-center">
                            <ShieldAlert className="h-4 w-4 text-amber-500 mr-2" />
                            Physical guards & vaults
                          </span>
                        </td>
                        <td className="p-3 border text-sm">
                          <span className="flex items-center">
                            <Lock className="h-4 w-4 text-blue-500 mr-2" />
                            Centralized security
                          </span>
                        </td>
                        <td className="p-3 border text-sm">
                          <span className="flex items-center">
                            <KeyRound className="h-4 w-4 text-green-500 mr-2" />
                            Cryptographic private keys
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border font-medium">Issuance Control</td>
                        <td className="p-3 border text-sm">
                          <span className="flex items-center">
                            <Mountain className="h-4 w-4 text-amber-500 mr-2" />
                            Natural mining difficulty
                          </span>
                        </td>
                        <td className="p-3 border text-sm">
                          <span className="flex items-center">
                            <Landmark className="h-4 w-4 text-blue-500 mr-2" />
                            Government policy
                          </span>
                        </td>
                        <td className="p-3 border text-sm">
                          <span className="flex items-center">
                            <Activity className="h-4 w-4 text-green-500 mr-2" />
                            Difficulty adjustment
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  
                  <div className="mt-6 p-4 bg-green-500/5 border border-green-500/10 rounded-md">
                    <h4 className="text-sm font-medium mb-2 flex items-center">
                      <Lightbulb className="h-4 w-4 text-green-500 mr-2" />
                      Evolutionary Significance
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      The emergence of similar monetary traits across distant civilizations and time periods 
                      is analogous to convergent evolution in biology, where different species independently 
                      evolve similar features to solve common problems. Bitcoin implements modern digital 
                      versions of the same essential monetary functions that humans have converged on 
                      throughout history, suggesting it is not simply a technological innovation but rather 
                      the latest stage in the natural evolution of money.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* The remaining sections will go here */}
        
        {/* Resources Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Evolutionary Reading</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Deepen your understanding of monetary evolution with these foundational resources 
                  that trace the natural selection of money through history to Bitcoin.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl border shadow-md overflow-hidden"
                >
                  <div className="p-6 border-b bg-green-500/5">
                    <h3 className="text-xl font-bold flex items-center">
                      <ScrollText className="h-5 w-5 text-green-500 mr-2" />
                      <span>Books & Articles</span>
                    </h3>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="group rounded-lg border p-4 hover:bg-green-500/5 transition-colors cursor-pointer">
                        <a href="https://www.amazon.com/Evolution-Money-David-Orrell/dp/0231173725" target="_blank" rel="noopener noreferrer" className="block">
                          <h4 className="font-medium text-base group-hover:text-green-500 transition-colors">The Evolution of Money</h4>
                          <p className="text-sm text-muted-foreground mb-1">David Orrell & Roman Chlupatý (2016)</p>
                          <p className="text-sm text-muted-foreground">
                            Traces the biological metaphors of money from primitive currencies to complex financial instruments.
                          </p>
                        </a>
                      </div>
                      
                      <div className="group rounded-lg border p-4 hover:bg-green-500/5 transition-colors cursor-pointer">
                        <a href="https://saifedean.com/the-bitcoin-standard" target="_blank" rel="noopener noreferrer" className="block">
                          <h4 className="font-medium text-base group-hover:text-green-500 transition-colors">The Bitcoin Standard</h4>
                          <p className="text-sm text-muted-foreground mb-1">Saifedean Ammous (2018)</p>
                          <p className="text-sm text-muted-foreground">
                            Examines the historical evolution of money and positions Bitcoin as the next evolutionary leap.
                          </p>
                        </a>
                      </div>
                      
                      <div className="group rounded-lg border p-4 hover:bg-green-500/5 transition-colors cursor-pointer">
                        <a href="https://nakamotoinstitute.org/shelling-out/" target="_blank" rel="noopener noreferrer" className="block">
                          <h4 className="font-medium text-base group-hover:text-green-500 transition-colors">Shelling Out: The Origins of Money</h4>
                          <p className="text-sm text-muted-foreground mb-1">Nick Szabo (2002)</p>
                          <p className="text-sm text-muted-foreground">
                            Connects evolutionary psychology to the emergence of money in primitive societies.
                          </p>
                        </a>
                      </div>
                      
                      <div className="group rounded-lg border p-4 hover:bg-green-500/5 transition-colors cursor-pointer">
                        <a href="https://mises.org/library/origins-money-0" target="_blank" rel="noopener noreferrer" className="block">
                          <h4 className="font-medium text-base group-hover:text-green-500 transition-colors">The Origins of Money</h4>
                          <p className="text-sm text-muted-foreground mb-1">Carl Menger (1892)</p>
                          <p className="text-sm text-muted-foreground">
                            Classical explanation of how money emerges naturally without central planning.
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl border shadow-md overflow-hidden"
                >
                  <div className="p-6 border-b bg-green-500/5">
                    <h3 className="text-xl font-bold flex items-center">
                      <VideoIcon className="h-5 w-5 text-green-500 mr-2" />
                      <span>Videos & Lectures</span>
                    </h3>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="group rounded-lg border p-4 hover:bg-green-500/5 transition-colors cursor-pointer">
                        <a href="https://www.youtube.com/watch?v=LszOt51OjXU" target="_blank" rel="noopener noreferrer" className="block">
                          <h4 className="font-medium text-base group-hover:text-green-500 transition-colors">Bitcoin: Beyond the Bubble</h4>
                          <p className="text-sm text-muted-foreground mb-1">Documentary (2018)</p>
                          <p className="text-sm text-muted-foreground">
                            Explores Bitcoin's evolutionary place in the history of money and its technological significance.
                          </p>
                        </a>
                      </div>
                      
                      <div className="group rounded-lg border p-4 hover:bg-green-500/5 transition-colors cursor-pointer">
                        <a href="https://www.youtube.com/watch?v=O7TaXiub2D8" target="_blank" rel="noopener noreferrer" className="block">
                          <h4 className="font-medium text-base group-hover:text-green-500 transition-colors">The Evolution of Money and Banking</h4>
                          <p className="text-sm text-muted-foreground mb-1">Robert Breedlove (2021)</p>
                          <p className="text-sm text-muted-foreground">
                            Lecture series connecting evolutionary principles to monetary history.
                          </p>
                        </a>
                      </div>
                      
                      <div className="group rounded-lg border p-4 hover:bg-green-500/5 transition-colors cursor-pointer">
                        <a href="https://www.youtube.com/watch?v=qlAhXo-d-64" target="_blank" rel="noopener noreferrer" className="block">
                          <h4 className="font-medium text-base group-hover:text-green-500 transition-colors">Hard Money in a Digital Age</h4>
                          <p className="text-sm text-muted-foreground mb-1">Nik Bhatia (2020)</p>
                          <p className="text-sm text-muted-foreground">
                            Explains Bitcoin's emergence as digital gold from an evolutionary perspective.
                          </p>
                        </a>
                      </div>
                      
                      <div className="group rounded-lg border p-4 hover:bg-green-500/5 transition-colors cursor-pointer">
                        <a href="https://www.youtube.com/watch?v=ZpYB6Gv8GQE" target="_blank" rel="noopener noreferrer" className="block">
                          <h4 className="font-medium text-base group-hover:text-green-500 transition-colors">Bitcoin: The End of Money As We Know It</h4>
                          <p className="text-sm text-muted-foreground mb-1">Documentary (2015)</p>
                          <p className="text-sm text-muted-foreground">
                            Traces monetary evolution from barter to Bitcoin, emphasizing evolutionary principles.
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl border shadow-md overflow-hidden"
              >
                <div className="p-6 border-b bg-green-500/5">
                  <h3 className="text-xl font-bold flex items-center">
                    <Dna className="h-5 w-5 text-green-500 mr-2" />
                    <span>Academic Research</span>
                  </h3>
                </div>
                
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium text-base mb-1">"The Evolution of Monetary Systems: A Fitness Landscape Analysis"</h4>
                      <p className="text-sm text-muted-foreground mb-2">Journal of Monetary Economics (2019)</p>
                      <p className="text-sm text-muted-foreground">
                        Mathematical models of monetary evolution using evolutionary algorithms.
                      </p>
                      <a href="https://www.sciencedirect.com/science/article/abs/pii/S0304393219301886" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-500 hover:bg-green-500/20 transition-colors">
                        Access Research
                      </a>
                    </div>
                    
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium text-base mb-1">"Convergent Evolution in Monetary Systems"</h4>
                      <p className="text-sm text-muted-foreground mb-2">Economic Anthropology (2020)</p>
                      <p className="text-sm text-muted-foreground">
                        Case studies of isolated civilizations developing similar monetary properties.
                      </p>
                      <a href="https://anthrosource.onlinelibrary.wiley.com/journal/23304847" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-500 hover:bg-green-500/20 transition-colors">
                        Access Research
                      </a>
                    </div>
                    
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium text-base mb-1">"Cryptocurrency as an Evolutionary Step in Money"</h4>
                      <p className="text-sm text-muted-foreground mb-2">Journal of Digital Banking (2021)</p>
                      <p className="text-sm text-muted-foreground">
                        Examines Bitcoin through the lens of evolutionary game theory.
                      </p>
                      <a href="https://www.ingentaconnect.com/content/hsp/jdb" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-500 hover:bg-green-500/20 transition-colors">
                        Access Research
                      </a>
                    </div>
                    
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium text-base mb-1">"Natural Selection of Money: Historical Evidence"</h4>
                      <p className="text-sm text-muted-foreground mb-2">Economic History Review (2018)</p>
                      <p className="text-sm text-muted-foreground">
                        Empirical study of monetary adaptations across historical periods.
                      </p>
                      <a href="https://onlinelibrary.wiley.com/journal/14680289" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-500 hover:bg-green-500/20 transition-colors">
                        Access Research
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-24 bg-green-500/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Participate in Monetary Evolution
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Bitcoin represents the current apex of monetary evolution, but the journey continues.
                Join this historic evolutionary process by learning, building, and discovering what makes
                Bitcoin the most adapted form of money in human history.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/digital-physics-revolution" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-11 px-8">
                  <Atom className="mr-2 h-5 w-5" />
                  Explore Digital Physics
                </Link>
                <Link to="/perspectives" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow hover:bg-secondary/80 h-11 px-8">
                  <Compass className="mr-2 h-5 w-5" />
                  Discover Other Perspectives
                </Link>
              </div>
              
              <div className="mt-16 p-8 bg-card border rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-center justify-center">
                  <Quote className="h-5 w-5 text-green-500 mr-2" />
                  <span>Evolutionary Insight</span>
                </h3>
                <blockquote className="text-lg italic text-muted-foreground">
                  "The emergence of Bitcoin is not a random accident of history, but rather the inevitable 
                  outcome of monetary evolution selecting for the most fit solution to store and transfer 
                  value in a digital age. Just as life found a way to thrive in every environment on Earth, 
                  money has now found its digital native form."
                </blockquote>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MonetaryEvolution;
