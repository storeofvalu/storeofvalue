import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BitcoinLogoIcon from '../components/BitcoinLogoIcon';
import { 
  Map, 
  Compass, 
  Mountain,
  Trees,
  Home,
  ChevronDown,
  ArrowRight,
  History,
  Landmark,
  Users,
  Flag,
  Building,
  Clock,
  Axes,
  Shovel,
  Tractor,
  GanttChart,
  Wheat,
  Sprout,
  Seedling,
  Key,
  Lock,
  BrainCircuit,
  Leaf,
  LandPlot,
  Scroll,
  BookOpen,
  Wallet,
  Handshake
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DigitalHomesteading = () => {
  // For tracking scroll position for animations
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);
  
  // Homesteading timeline data
  const homesteadingTimeline = [
    {
      era: "1862",
      event: "Homestead Act Signed",
      description: "President Lincoln signs the Homestead Act, allowing Americans to claim 160 acres of public land if they live on it for five years and improve it",
      icon: Scroll
    },
    {
      era: "1863-1900",
      event: "Western Expansion",
      description: "Over 400,000 families claim homesteads, settling and developing previously uncultivated land across the American frontier",
      icon: Compass
    },
    {
      era: "1900-1950",
      event: "Generational Transfers",
      description: "Original homesteads begin passing to second and third generations, creating lasting family legacies and economic foundations",
      icon: Users
    },
    {
      era: "1976",
      event: "Homestead Act Ends",
      description: "After 114 years, the last claim under the original Homestead Act is filed in Alaska, marking the end of an era of 'free land'",
      icon: Flag
    },
    {
      era: "Today",
      event: "Lasting Value",
      description: "Many original homestead properties remain in families, some worth millions of dollars, having appreciated over 1000x in value",
      icon: Landmark
    }
  ];
  
  // Bitcoin homesteading parallels
  const bitcoinParallels = [
    {
      physical: "Land is physically scarce and finite",
      digital: "Bitcoin has a fixed supply cap of 21 million",
      icon: GanttChart
    },
    {
      physical: "Requires work to claim (cultivation)",
      digital: "Requires knowledge and initiative to acquire and secure",
      icon: Shovel
    },
    {
      physical: "Earliest settlers got the best land",
      digital: "Early adopters benefit from lowest acquisition cost",
      icon: Clock
    },
    {
      physical: "Passed down through generations",
      digital: "Digital inheritance through secure key management",
      icon: Key
    },
    {
      physical: "Land improvement increases value",
      digital: "Network growth increases utility and value",
      icon: Sprout
    }
  ];
  
  // The Johnsons: A multi-generational Bitcoin homesteading story
  const familyGenerations = [
    {
      generation: "1st Generation - 2023",
      name: "Thomas Johnson",
      action: "Claims the Digital Homestead",
      story: "Recognizing Bitcoin's revolutionary potential, Thomas purchases his family's first full bitcoin. Like his great-great-grandfather who claimed a homestead in Wyoming, Thomas sees securing bitcoin as staking a claim in a new frontier.",
      icon: Flag
    },
    {
      generation: "2nd Generation - 2045",
      name: "Sarah Johnson",
      action: "Cultivates the Digital Land",
      story: "Inheriting her father's bitcoin, Sarah develops deep expertise in the Bitcoin ecosystem. Like tending fertile soil, she uses her knowledge to help secure the network and teach others. The bitcoin has appreciated significantly, helping fund her children's education.",
      icon: Sprout
    },
    {
      generation: "3rd Generation - 2070",
      name: "Michael Johnson",
      action: "Builds on the Digital Homestead",
      story: "As bitcoin becomes a cornerstone of the global financial system, Michael's inheritance has transformed into substantial wealth. He uses a small portion to create a foundation focused on teaching financial literacy while preserving the majority for future generations.",
      icon: Building
    },
    {
      generation: "4th Generation - 2095",
      name: "Elena Johnson",
      action: "Reaps the Digital Harvest",
      story: "Elena Johnson's family bitcoin holdings have become a multi-generational treasure. While fiat currencies have come and gone, the Johnson family bitcoin endures, providing financial security that would have been unimaginable to Thomas 70 years earlier.",
      icon: Wheat
    }
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
              <Map className="mr-1 h-3.5 w-3.5" />
              <span>The New Frontier</span>
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              Digital Homesteading
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium mb-8 text-muted-foreground">
              How claiming your piece of Bitcoin today mirrors the American homesteaders 
              who secured their future by venturing West
            </h2>
          </motion.div>
          
          {/* Hero Visualization */}
          <div className="mt-16 w-full max-w-4xl mx-auto">
            <Card className="border-green-500/20 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-950/20 to-background p-8 md:p-10">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center bg-green-500/10 p-3 rounded-full mb-4">
                    <LandPlot className="h-10 w-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Stake Your Claim</h3>
                  <p className="text-muted-foreground">
                    In a world of unlimited digital copies, Bitcoin creates true digital scarcity
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-card rounded-lg border p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-amber-500/10 p-3 rounded-full mr-4">
                        <Mountain className="h-6 w-6 text-amber-500" />
                      </div>
                      <h3 className="text-xl font-bold">The American Frontier</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      From 1862 to 1976, the Homestead Acts allowed anyone to claim up to 160 acres of 
                      public land if they improved it and lived there for five years. This created 
                      generational wealth for over 1.6 million homesteading families.
                    </p>
                    <div className="flex items-center text-sm text-amber-500">
                      <span className="font-bold">Land claimed: </span>
                      <span className="ml-2">270 million acres</span>
                    </div>
                    <div className="flex items-center text-sm text-amber-500 mt-1">
                      <span className="font-bold">Percentage of US: </span>
                      <span className="ml-2">10% of all American land</span>
                    </div>
                  </div>
                  
                  <div className="bg-card rounded-lg border p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-green-500/10 p-3 rounded-full mr-4">
                        <BitcoinLogoIcon className="h-6 w-6 text-green-500" />
                      </div>
                      <h3 className="text-xl font-bold">The Bitcoin Frontier</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Since 2009, anyone can claim a fraction of the 21 million bitcoin that will ever exist.
                      Like land in the 1800s, this digital property requires knowledge and effort to claim,
                      but can create lasting value for generations to come.
                    </p>
                    <div className="flex items-center text-sm text-green-500">
                      <span className="font-bold">Supply limit: </span>
                      <span className="ml-2">21 million bitcoin</span>
                    </div>
                    <div className="flex items-center text-sm text-green-500 mt-1">
                      <span className="font-bold">Population ratio: </span>
                      <span className="ml-2">0.0026 BTC per person globally</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card border rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-500/10 p-3 rounded-full mr-4">
                      <Handshake className="h-6 w-6 text-indigo-500" />
                    </div>
                    <h3 className="text-xl font-bold">The Homesteader's Promise</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Just as American homesteaders traded present comfort for future security, 
                    Bitcoin homesteaders accept short-term volatility for long-term sovereignty. 
                    Both require vision to see value where others see only risk.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <div className="bg-indigo-500/10 p-2 rounded-full mr-3 mt-1">
                        <Landmark className="h-4 w-4 text-indigo-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold">Physical Homestead</h4>
                        <p className="text-xs text-muted-foreground">
                          5 years of cultivation transforms unclaimed wilderness into family property
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-indigo-500/10 p-2 rounded-full mr-3 mt-1">
                        <Wallet className="h-4 w-4 text-indigo-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold">Digital Homestead</h4>
                        <p className="text-xs text-muted-foreground">
                          Learning to self-custody transforms digital bits into generational wealth
                        </p>
                      </div>
                    </div>
                  </div>
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
                  <pattern id="homesteadPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 0,10 L 10,0 L 20,10 L 10,20 Z" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#homesteadPattern)" />
              </svg>
            </div>
          </div>
        </section>
        
        {/* History of Homesteading Section */}
        <section className="py-24 bg-card" ref={targetRef}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                style={{ opacity, scale }}
                className="text-center mb-16"
              >
                <Badge className="mb-4 px-3 py-1 bg-amber-500 text-white hover:bg-amber-600 transition-colors">
                  <History className="mr-1 h-3.5 w-3.5" />
                  <span>Historical Context</span>
                </Badge>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Original Homesteaders</h2>
                <p className="text-lg text-muted-foreground">
                  How the American Homestead Act created lasting prosperity for those who had the courage to stake their claim
                </p>
              </motion.div>
              
              <div className="bg-background rounded-lg border p-6 md:p-8 shadow-sm mb-12">
                <div className="border-l-4 border-amber-500 pl-4 mb-6 italic">
                  <p className="text-lg">
                    "The homestead policy was established only after long and earnest resistance; 
                    experience proves its wisdom. The lands in the hands of industrious settlers, 
                    whose labor creates wealth and contributes to the public resources, 
                    are worth more to the United States than if they had been reserved as a solitude for future purchasers."
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">— President Andrew Johnson, Fourth Annual Message to Congress, 1868</p>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  The Homestead Act of 1862 transformed the American landscape both physically and economically. 
                  It allowed any adult citizen (or intended citizen) who had never taken up arms against the United States 
                  to claim 160 acres of surveyed government land. In exchange, homesteaders paid a small filing fee and 
                  were required to live on the land for five years while making improvements.
                </p>
                
                <p className="text-muted-foreground">
                  While commonly remembered as merely a land distribution program, the Homestead Act was fundamentally 
                  about creating a path to wealth for ordinary people. Land that once sat idle in government hands became 
                  productive farms, ranches and homesteads. Many of these properties remain in the same families today, 
                  having created multi-generational prosperity from what was initially "free" land.
                </p>
              </div>
              
              <div className="space-y-8 mb-16">
                {homesteadingTimeline.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    key={index}
                    className="flex flex-col md:flex-row gap-6"
                  >
                    <div className="md:w-1/5 flex flex-col items-center md:items-end">
                      <div className="bg-amber-500/10 p-3 rounded-full">
                        <item.icon className="h-6 w-6 text-amber-500" />
                      </div>
                      <div className="mt-2 text-center md:text-right">
                        <h3 className="text-xl font-bold text-amber-500">{item.era}</h3>
                      </div>
                    </div>
                    
                    <div className="md:w-4/5 bg-card border rounded-lg p-6">
                      <h3 className="text-lg font-bold mb-2">{item.event}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="bg-amber-500/5 rounded-lg border border-amber-500/20 p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-amber-500/10 p-3 rounded-full mr-4">
                    <Landmark className="h-6 w-6 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-bold">The Homestead Legacy</h3>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  The true power of homesteading wasn't in the short-term benefit, but in the long-term value creation. 
                  Land that could be claimed for nearly free in the 1860s has, in many cases, remained in families for generations, 
                  appreciating thousands of times in value. This demonstrates a key principle: assets that can be acquired early in their 
                  history at low costs but have inherent durable value can create extraordinary intergenerational wealth.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="bg-card p-4 rounded-lg border">
                    <h4 className="font-bold text-amber-500 mb-1">1.6 million</h4>
                    <p className="text-xs text-muted-foreground">Homestead claims filed</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border">
                    <h4 className="font-bold text-amber-500 mb-1">270 million</h4>
                    <p className="text-xs text-muted-foreground">Acres transferred to private ownership</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border">
                    <h4 className="font-bold text-amber-500 mb-1">10%</h4>
                    <p className="text-xs text-muted-foreground">Of all land in the United States</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Digital Parallels Section */}
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
                  <BrainCircuit className="mr-1 h-3.5 w-3.5" />
                  <span>The Connection</span>
                </Badge>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">From Physical to Digital Land</h2>
                <p className="text-lg text-muted-foreground">
                  How Bitcoin mirrors the essential characteristics of land that made homesteading valuable
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 gap-8 mb-12">
                {bitcoinParallels.map((parallel, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    key={index}
                    className="bg-card border rounded-lg overflow-hidden"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/5 bg-green-500/5 p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-green-500/10">
                        <parallel.icon className="h-12 w-12 text-green-500 mb-4" />
                      </div>
                      
                      <div className="md:w-4/5 p-6 flex flex-col md:flex-row gap-4">
                        <div className="md:w-1/2 border-b md:border-b-0 md:border-r pb-4 md:pb-0 md:pr-4">
                          <h3 className="text-sm font-bold text-amber-500 mb-2">PHYSICAL HOMESTEADING</h3>
                          <p className="text-muted-foreground">{parallel.physical}</p>
                        </div>
                        
                        <div className="md:w-1/2 pt-4 md:pt-0 md:pl-4">
                          <h3 className="text-sm font-bold text-green-500 mb-2">DIGITAL HOMESTEADING</h3>
                          <p className="text-muted-foreground">{parallel.digital}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <Card className="border-green-500/20 bg-green-950/5 mb-16">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-500/10 p-3 rounded-full mr-4">
                      <Lock className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Scarcity as the Essential Element</h3>
                      <p className="text-sm text-muted-foreground">Why Bitcoin's 21 million supply cap makes it digital land</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-base font-bold mb-2">Physical Land</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        The value of physical land comes from its inherent scarcity. Mark Twain famously quipped, 
                        "Buy land, they're not making it anymore." This fixed supply against growing demand 
                        creates lasting value, particularly for well-located or productive land.
                      </p>
                      
                      <div className="bg-card p-4 rounded-lg border">
                        <p className="text-xs text-muted-foreground italic">
                          "After the Gold Rush of 1849, San Francisco land that was practically 
                          given away sold for $10,000 per acre just fifteen years later."
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-base font-bold mb-2">Bitcoin's Fixed Supply</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Bitcoin's supply is capped at 21 million, making it the first truly scarce digital asset. 
                        Unlike dollars, euros, or even digital products, Bitcoin cannot be arbitrarily increased. 
                        This digital scarcity creates a "land-like" quality in the digital realm.
                      </p>
                      
                      <div className="bg-card p-4 rounded-lg border">
                        <p className="text-xs text-muted-foreground italic">
                          "With a maximum of 21 million bitcoin and a global population of 8 billion, 
                          there can never be more than 0.0026 bitcoin per person."
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-background p-4 rounded-lg border text-sm">
                    <div className="flex items-start">
                      <div className="bg-green-500/10 p-2 rounded-full mr-3 mt-1">
                        <Key className="h-4 w-4 text-green-500" />
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-bold">Key Insight: </span>
                        The parallel between land and Bitcoin is not mere metaphor—both are scarce resources 
                        that gain value as more people recognize their utility and seek to claim their portion. 
                        Just as early land claims in Manhattan created dynastic wealth, early Bitcoin adoption 
                        represents a similar homesteading opportunity in the digital frontier.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Multi-generational Story Section */}
        <section className="py-24 bg-gradient-to-r from-green-950/10 to-amber-950/10 border-y border-green-500/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <Badge className="mb-4 px-3 py-1 bg-indigo-500 text-white hover:bg-indigo-600 transition-colors">
                  <Users className="mr-1 h-3.5 w-3.5" />
                  <span>Family Legacy</span>
                </Badge>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Johnson Family Legacy</h2>
                <p className="text-lg text-muted-foreground">
                  A speculative journey through four generations of a family that claimed their digital homestead
                </p>
              </motion.div>
              
              <div className="space-y-12 mb-16">
                {familyGenerations.map((generation, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    key={index}
                    className="relative"
                  >
                    {index < familyGenerations.length - 1 && (
                      <div className="absolute top-16 bottom-0 left-8 md:left-[7.5%] w-0.5 bg-indigo-500/20 z-0"></div>
                    )}
                    
                    <div className="flex flex-col md:flex-row gap-6 relative z-10">
                      <div className="md:w-[15%] flex flex-col items-center md:items-end">
                        <div className="bg-indigo-500/10 p-3 rounded-full border-4 border-background">
                          <generation.icon className="h-6 w-6 text-indigo-500" />
                        </div>
                        <h3 className="mt-3 text-center md:text-right text-base font-bold">{generation.generation}</h3>
                      </div>
                      
                      <div className="md:w-[85%] bg-card border rounded-lg p-6 shadow-sm">
                        <h3 className="text-lg font-bold mb-2">{generation.name}</h3>
                        <h4 className="text-base text-indigo-500 font-medium mb-4">{generation.action}</h4>
                        <p className="text-muted-foreground">{generation.story}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="bg-background rounded-lg border p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-500/10 p-3 rounded-full mr-4">
                    <BookOpen className="h-6 w-6 text-indigo-500" />
                  </div>
                  <h3 className="text-xl font-bold">Intergenerational Wealth Transfer</h3>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  The true power of homesteading—whether physical or digital—lies in the transfer of value across generations. 
                  The homesteaders of the 1800s couldn't have imagined that their simple log cabins would one day sit on land 
                  worth millions. In the same way, today's Bitcoin homesteaders are securing digital value that may grow beyond 
                  current imagination over generational timeframes.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-indigo-500/5 rounded-lg border border-indigo-500/20 p-4">
                    <h4 className="text-base font-bold mb-2">Keys to Successful Digital Homesteading</h4>
                    <ul className="space-y-3">
                      <li className="text-sm flex items-start">
                        <div className="bg-indigo-500/10 p-1 rounded-full mr-2 mt-0.5">
                          <Key className="h-3 w-3 text-indigo-500" />
                        </div>
                        <span className="text-muted-foreground">Secure your private keys with redundant backups</span>
                      </li>
                      <li className="text-sm flex items-start">
                        <div className="bg-indigo-500/10 p-1 rounded-full mr-2 mt-0.5">
                          <BrainCircuit className="h-3 w-3 text-indigo-500" />
                        </div>
                        <span className="text-muted-foreground">Educate heirs about Bitcoin security and inheritance</span>
                      </li>
                      <li className="text-sm flex items-start">
                        <div className="bg-indigo-500/10 p-1 rounded-full mr-2 mt-0.5">
                          <Lock className="h-3 w-3 text-indigo-500" />
                        </div>
                        <span className="text-muted-foreground">Create a detailed inheritance plan with legal documentation</span>
                      </li>
                      <li className="text-sm flex items-start">
                        <div className="bg-indigo-500/10 p-1 rounded-full mr-2 mt-0.5">
                          <Handshake className="h-3 w-3 text-indigo-500" />
                        </div>
                        <span className="text-muted-foreground">Hold for generational timeframes, not short-term speculation</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-card rounded-lg border p-4">
                    <div className="border-l-4 border-indigo-500 pl-4 italic">
                      <p className="text-sm">
                        "I'm not interested in a short-term gamble. I'm securing my great-grandchildren's future 
                        with a digital homestead. Just as my ancestors wouldn't sell their land after one bad harvest, 
                        I won't sell my bitcoin after one market cycle. This is a multi-generational treasure."
                      </p>
                      <p className="mt-2 text-xs text-muted-foreground">— Thomas Johnson, 1st Generation Digital Homesteader</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
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
                  <Flag className="mr-1 h-3.5 w-3.5" />
                  <span>Your Opportunity</span>
                </Badge>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Stake Your Claim</h2>
                <p className="text-lg text-muted-foreground">
                  Just as the best land was claimed early, the opportunity to establish your digital homestead is now
                </p>
              </motion.div>
              
              <div className="bg-gradient-to-r from-green-950/20 via-amber-950/20 to-green-950/20 rounded-lg p-8 border border-green-500/20 text-center">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Your Family's Digital Legacy Begins Today</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    There will only ever be 21 million bitcoin—less than one for every 400 people on Earth. 
                    By claiming your portion of this digital frontier now, you're creating a foundation for 
                    generational prosperity in a digital age.
                  </p>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <Link to="/learn-bitcoin">
                    <Button variant="default" size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Learn How to Homestead
                    </Button>
                  </Link>
                  <Link to="/buy-bitcoin">
                    <Button variant="outline" size="lg" className="border-green-500 text-green-500 hover:bg-green-500/10">
                      <Flag className="mr-2 h-4 w-4" />
                      Claim Your Digital Land
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DigitalHomesteading; 