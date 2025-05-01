import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BitcoinLogoIcon from '../components/BitcoinLogoIcon';
import { 
  FlaskConical as Flask, 
  Zap, 
  Wind, 
  Droplets, 
  Flame, 
  TreePine,
  Sparkles,
  Factory,
  CheckCircle2,
  XCircle,
  ArrowDownUp,
  Recycle,
  Globe,
  Mountain,
  CloudLightning,
  ChevronDown,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';

const EnergyAlchemy = () => {
  const [animationStage, setAnimationStage] = useState(0);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const energySources = [
    { 
      name: "Stranded Hydroelectric", 
      icon: <Droplets className="h-6 w-6 text-blue-500" />,
      description: "Remote dams with excess capacity and no nearby demand",
      emissions: "Zero-carbon",
      bitcoinUse: "High and growing"
    },
    { 
      name: "Flared Natural Gas", 
      icon: <Flame className="h-6 w-6 text-amber-500" />,
      description: "Gas that would otherwise be burned off at oil wells",
      emissions: "Reduces methane emissions by 96-98%",
      bitcoinUse: "Rapidly expanding"
    },
    { 
      name: "Curtailed Wind Power", 
      icon: <Wind className="h-6 w-6 text-green-500" />,
      description: "Excess wind energy that grids cannot absorb",
      emissions: "Zero-carbon",
      bitcoinUse: "Growing"
    },
    { 
      name: "Geothermal Energy", 
      icon: <Mountain className="h-6 w-6 text-stone-500" />,
      description: "Heat from beneath the Earth's surface",
      emissions: "Zero-carbon",
      bitcoinUse: "Emerging"
    },
    { 
      name: "Solar Overcapacity", 
      icon: <Sparkles className="h-6 w-6 text-yellow-500" />,
      description: "Excess solar during peak production periods",
      emissions: "Zero-carbon",
      bitcoinUse: "High potential"
    }
  ];

  // Animation for alchemy stages
  React.useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStage(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const alchemyStages = [
    { label: "Wasted Energy", icon: <XCircle className="h-6 w-6 text-red-500" />, color: "bg-red-500/10" },
    { label: "Mining Process", icon: <ArrowDownUp className="h-6 w-6 text-yellow-500" />, color: "bg-yellow-500/10" },
    { label: "Digital Gold", icon: <BitcoinLogoIcon className="h-6 w-6 text-amber-500" />, color: "bg-amber-500/10" },
    { label: "Stored Value", icon: <CheckCircle2 className="h-6 w-6 text-green-500" />, color: "bg-green-500/10" }
  ];

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
              <Flask className="mr-1 h-3.5 w-3.5" />
              <span>Modern Alchemy</span>
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              Energy Alchemy
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium mb-8 text-muted-foreground">
              How Bitcoin transforms stranded energy into stored value, monetizing waste and incentivizing renewable development
            </h2>
          </motion.div>
          
          {/* Alchemy Animation */}
          <div className="mt-16 w-full max-w-3xl mx-auto">
            <Card className="border-green-500/20 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-950/30 to-background p-8 md:p-10">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center bg-green-500/10 p-3 rounded-full mb-4">
                    <Flask className="h-10 w-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold">The Modern Alchemist's Formula</h3>
                </div>
                
                <div className="flex flex-col md:flex-row items-center justify-between my-10">
                  {alchemyStages.map((stage, index) => {
                    const isActive = index === animationStage;
                    return (
                      <div 
                        key={index}
                        className={`relative flex flex-col items-center transition-all duration-500 ${
                          isActive ? 'scale-110 opacity-100' : 'opacity-50'
                        } ${index < alchemyStages.length - 1 ? 'mb-4 md:mb-0' : ''}`}
                      >
                        <div className={`w-16 h-16 rounded-full ${stage.color} flex items-center justify-center mb-2`}>
                          {stage.icon}
                        </div>
                        <span className="text-sm font-medium">{stage.label}</span>
                        
                        {index < alchemyStages.length - 1 && (
                          <div className="hidden md:block absolute top-1/2 left-full transform -translate-y-1/2 w-full">
                            <div className="h-0.5 w-4 bg-muted-foreground/30 mx-auto"></div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                
                <div className="text-center mt-8">
                  <p className="text-lg font-medium">
                    Unlike ancient alchemists who failed to transform lead into gold,<br />
                    Bitcoin miners successfully transform wasted energy into digital gold.
                  </p>
                </div>
              </div>
            </Card>
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
                  <pattern id="alchemyGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#alchemyGrid)" />
              </svg>
            </div>
          </div>
        </section>
        
        {/* Quote from Daniel Batten */}
        <section className="py-24 bg-card" ref={targetRef}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                style={{ opacity, scale }}
                className="text-center mb-16"
              >
                <Badge className="mb-4 px-3 py-1 bg-green-500 text-white hover:bg-green-600 transition-colors">
                  <Zap className="mr-1 h-3.5 w-3.5" />
                  <span>Expert Insight</span>
                </Badge>
                
                <blockquote className="text-2xl md:text-3xl font-medium italic text-foreground">
                  "Bitcoin doesn't waste energy; it monetizes energy that would otherwise be wasted. By creating a buyer of last resort for stranded power, Bitcoin functions as a global battery that can turn otherwise unusable energy into stored value."
                  <footer className="mt-6 text-base font-normal text-muted-foreground">
                    — Daniel Batten, Climate Tech Investor & Bitcoin ESG Analyst
                  </footer>
                </blockquote>
              </motion.div>
              
              <div className="bg-background rounded-lg overflow-hidden border shadow-md">
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold mb-6">Three Ways Bitcoin Transforms Energy Systems</h3>
                  
                  <div className="space-y-8">
                    <div className="flex items-start">
                      <div className="bg-green-500/10 rounded-full p-2.5 mr-4 flex-shrink-0">
                        <Recycle className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Monetizing Stranded Energy</h4>
                        <p className="text-muted-foreground">
                          Bitcoin mining creates economic value from energy that would otherwise be wasted. For example, oil fields in North Dakota and Texas now capture flared natural gas to mine Bitcoin, turning an environmental liability into a revenue stream while reducing methane emissions by up to 98%.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-green-500/10 rounded-full p-2.5 mr-4 flex-shrink-0">
                        <Globe className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Enabling Renewable Deployments</h4>
                        <p className="text-muted-foreground">
                          Remote renewable energy projects often struggle with economics due to grid constraints. Bitcoin mining provides a profitable load that can be deployed immediately, improving project economics and allowing renewable infrastructure to scale faster than grid capacity.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-green-500/10 rounded-full p-2.5 mr-4 flex-shrink-0">
                        <CloudLightning className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Grid Stability & Load Balancing</h4>
                        <p className="text-muted-foreground">
                          Bitcoin miners can instantly power down during peak demand and ramp up during excess supply, providing demand response services that help stabilize electrical grids. This flexibility is particularly valuable for grids with high percentages of intermittent renewable energy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Energy Sources Section */}
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Stranded Energy Sources</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Bitcoin miners seek out the cheapest energy available, which is often energy that would otherwise go to waste.
                  Here are the primary sources of stranded energy being monetized by Bitcoin mining.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {energySources.map((source, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    key={index}
                    className="bg-card rounded-lg p-6 border shadow-sm"
                  >
                    <div className="flex items-start">
                      <div className="p-3 rounded-full bg-background border mr-4 flex-shrink-0">
                        {source.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">{source.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{source.description}</p>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="p-2 bg-background rounded border">
                            <span className="font-medium block mb-1">Emissions Impact</span>
                            {source.emissions}
                          </div>
                          <div className="p-2 bg-background rounded border">
                            <span className="font-medium block mb-1">Bitcoin Usage</span>
                            {source.bitcoinUse}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12 bg-green-500/5 border border-green-500/20 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-center">The Bitcoin Mining Energy Mix</h3>
                <div className="flex items-center justify-center mb-4">
                  <div className="h-8 w-8 bg-green-500 rounded-md mr-2"></div>
                  <span className="text-sm mr-4">Renewable (59%)</span>
                  
                  <div className="h-8 w-8 bg-amber-500 rounded-md mr-2"></div>
                  <span className="text-sm mr-4">Natural Gas (21%)</span>
                  
                  <div className="h-8 w-8 bg-gray-500 rounded-md mr-2"></div>
                  <span className="text-sm">Other (20%)</span>
                </div>
                <p className="text-sm text-center text-muted-foreground">
                  According to the Bitcoin Mining Council, Bitcoin mining has the highest percentage of renewable energy usage of any industrial sector globally.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Case Studies */}
        <section className="py-24 bg-green-950/5 border-y border-green-500/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">From Theory to Practice</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Real-world examples of Bitcoin mining transforming energy waste into value
                </p>
              </motion.div>
              
              <div className="space-y-8">
                <Card className="border-green-500/20 overflow-hidden">
                  <div className="md:grid md:grid-cols-3">
                    <div className="bg-amber-500/20 p-6 md:col-span-1 flex flex-col justify-center items-center">
                      <Flame className="h-16 w-16 text-amber-500 mb-4" />
                      <h3 className="text-xl font-bold text-center">Crusoe Energy</h3>
                      <p className="text-sm text-center text-muted-foreground">North Dakota & Texas</p>
                    </div>
                    
                    <CardContent className="p-6 md:col-span-2">
                      <h4 className="text-lg font-bold mb-2">Flared Gas Transformation</h4>
                      <p className="text-muted-foreground mb-4">
                        Crusoe Energy deploys modular data centers to oil fields to capture natural gas that would otherwise be flared, reducing CO2-equivalent emissions by over 60% compared to flaring. Their Digital Flare Mitigation® system has prevented over 5 billion cubic feet of natural gas from being wasted.
                      </p>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                          <span>Reduces methane emissions by up to 98%</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                          <span>Creates revenue from what was previously a waste product</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                          <span>Helps oil producers comply with environmental regulations</span>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
                
                <Card className="border-green-500/20 overflow-hidden">
                  <div className="md:grid md:grid-cols-3">
                    <div className="bg-blue-500/20 p-6 md:col-span-1 flex flex-col justify-center items-center">
                      <Droplets className="h-16 w-16 text-blue-500 mb-4" />
                      <h3 className="text-xl font-bold text-center">HydroMiner</h3>
                      <p className="text-sm text-center text-muted-foreground">Austria & Norway</p>
                    </div>
                    
                    <CardContent className="p-6 md:col-span-2">
                      <h4 className="text-lg font-bold mb-2">Hydroelectric Utilization</h4>
                      <p className="text-muted-foreground mb-4">
                        HydroMiner utilizes small, remote hydroelectric power plants that often produce more energy than the local grid can absorb. By installing mining equipment directly at these power plants, they monetize excess capacity that would otherwise be curtailed.
                      </p>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                          <span>100% renewable energy with minimal environmental impact</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                          <span>Improves economics of small hydroelectric facilities</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                          <span>Uses natural cooling from water to reduce energy consumption</span>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
                
                <Card className="border-green-500/20 overflow-hidden">
                  <div className="md:grid md:grid-cols-3">
                    <div className="bg-green-500/20 p-6 md:col-span-1 flex flex-col justify-center items-center">
                      <TreePine className="h-16 w-16 text-green-500 mb-4" />
                      <h3 className="text-xl font-bold text-center">ERCOT Grid</h3>
                      <p className="text-sm text-center text-muted-foreground">Texas</p>
                    </div>
                    
                    <CardContent className="p-6 md:col-span-2">
                      <h4 className="text-lg font-bold mb-2">Grid Stabilization</h4>
                      <p className="text-muted-foreground mb-4">
                        In Texas, Bitcoin miners participate in demand response programs, instantly reducing power consumption during peak demand periods. During Winter Storm Uri in 2021, miners voluntarily shut down operations to return power to the grid when it was most needed.
                      </p>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                          <span>Provides flexible load that responds instantly to grid conditions</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                          <span>Enables greater integration of intermittent renewable energy</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                          <span>Miners are paid for this grid service, creating a win-win</span>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Daniel Batten's Research */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Daniel Batten's Research</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center">
                  Climate tech investor Daniel Batten has conducted extensive research on Bitcoin's environmental impact, with surprising findings that contradict common narratives.
                </p>
              </motion.div>
              
              <div className="bg-card rounded-lg p-8 border shadow-md">
                <h3 className="text-xl font-bold mb-8 text-center">Key Research Findings</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-green-500/10 text-green-700 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-0.5">
                      <span className="text-lg font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Methane Mitigation Potential</h4>
                      <p className="text-muted-foreground">
                        Bitcoin mining could eliminate 5.32% of all global methane emissions by 2045 by capturing flared and vented methane from oil fields, landfills, and wastewater treatment. Given methane's potency as a greenhouse gas (86x more warming than CO2 over 20 years), this represents a massive climate opportunity.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-500/10 text-green-700 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-0.5">
                      <span className="text-lg font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Renewable Energy Acceleration</h4>
                      <p className="text-muted-foreground">
                        By providing a flexible load that can be deployed anywhere, Bitcoin mining creates demand for renewable energy in remote locations where grid connection is impossible or prohibitively expensive. This accelerates renewable deployments by 2-8 years in advance of grid capacity.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-500/10 text-green-700 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-0.5">
                      <span className="text-lg font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Net-Zero Bitcoin by 2030</h4>
                      <p className="text-muted-foreground">
                        Based on current energy trends and mining economics, Bitcoin could be net-zero or net-negative in emissions by 2030, potentially becoming the world's first net-zero industry without needing carbon credits or offsets—simply through the pursuit of lowest-cost energy.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 border-t pt-6 text-center">
                  <p className="italic text-sm mb-2">
                    "Bitcoin mining is effectively the only technology that can monetize methane mitigation without requiring carbon credits, subsidies, or altruism. It simply uses the free market to incentivize emissions reduction."
                  </p>
                  <p className="text-xs text-muted-foreground">— Daniel Batten</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Final Call to Action */}
        <section className="py-24 bg-green-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Flask className="h-12 w-12 text-green-500 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Modern Alchemy: Lead into Gold</h2>
                <p className="text-lg text-muted-foreground mb-10">
                  For centuries, alchemists attempted to transform lead into gold, failing because they violated the laws of physics.
                  Bitcoin miners succeed where alchemists failed, because they work with the laws of thermodynamics rather than against them.
                </p>
                
                <div className="bg-card rounded-lg p-6 md:p-10 border shadow-md mb-10">
                  <h3 className="text-xl font-bold mb-6">The Alchemist's Transformation</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-500/5 p-5 rounded-lg border border-red-500/20 text-left">
                      <h4 className="font-bold flex items-center mb-3">
                        <XCircle className="h-5 w-5 text-red-500 mr-2" />
                        <span>Wasted Energy</span>
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <div className="bg-red-500/10 text-red-700 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">✗</div>
                          <span>Flared methane heats the atmosphere</span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-red-500/10 text-red-700 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">✗</div>
                          <span>Curtailed renewables go unused</span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-red-500/10 text-red-700 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">✗</div>
                          <span>Stranded hydro runs below capacity</span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-red-500/10 text-red-700 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">✗</div>
                          <span>Economic value: zero</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-500/5 p-5 rounded-lg border border-green-500/20 text-left">
                      <h4 className="font-bold flex items-center mb-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                        <span>Captured Value</span>
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <div className="bg-green-500/10 text-green-700 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">✓</div>
                          <span>Methane converted to less harmful CO2</span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-green-500/10 text-green-700 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">✓</div>
                          <span>Revenue supports renewable development</span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-green-500/10 text-green-700 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">✓</div>
                          <span>Energy monetized regardless of location</span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-green-500/10 text-green-700 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">✓</div>
                          <span>Economic value: Bitcoin and grid services</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <Button
                  asChild
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white font-medium"
                >
                  <Link to="/learn/beginner">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Learn About Bitcoin's Energy Innovation
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default EnergyAlchemy; 