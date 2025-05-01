import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Slider 
} from "@/components/ui/slider";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import BitcoinLogoIcon from '../components/BitcoinLogoIcon';
import { 
  Globe, 
  Shield, 
  Lock,
  Unlock,
  CircleDollarSign,
  BarChart4,
  TrendingDown,
  TrendingUp,
  ArrowRight,
  History,
  Timer,
  Rocket,
  Zap,
  Scale,
  Users,
  Building,
  CreditCard,
  Wallet,
  Check,
  X,
  ChevronDown,
  Server,
  Flag,
  AlertTriangle,
  RefreshCw,
  Map as MapIcon,
  Shuffle,
  LineChart,
  Landmark,
  Banknote,
  Network,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';

const GeopoliticalShield = () => {
  // For tracking scroll position for animations
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);
  
  // For the interactive elements
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedCrisis, setSelectedCrisis] = useState("2008");
  const [selectedConcern, setSelectedConcern] = useState("inflation");
  const [userCountry, setUserCountry] = useState("United States");
  
  // Example data for the currency wars timeline
  const currencyWarsEvents = [
    {
      year: "1971",
      name: "Nixon Shock",
      description: "US unilaterally canceled the direct convertibility of the dollar to gold, ending the Bretton Woods system and fundamentally changing global currency relationships",
      bitcoinProtection: "Bitcoin's fixed supply cap prevents unilateral money supply manipulation, making it immune to such policy decisions",
      icon: Landmark
    },
    {
      year: "1985",
      name: "Plaza Accord",
      description: "G5 nations coordinated to deliberately devalue the US dollar against the Japanese yen and German Deutsche Mark, affecting global trade and financial markets",
      bitcoinProtection: "Bitcoin exists outside the control of central banks and is immune to coordinated currency manipulation agreements between nations",
      icon: Shuffle
    },
    {
      year: "1997",
      name: "Asian Financial Crisis",
      description: "Multiple Asian currencies collapsed after Thailand unpegged the baht from the dollar, triggering a contagion of devaluations across the region",
      bitcoinProtection: "Bitcoin's decentralized nature prevents contagion effects from one currency or region affecting its underlying value",
      icon: TrendingDown
    },
    {
      year: "2008",
      name: "Global Financial Crisis",
      description: "Widespread bank failures and emergency monetary policies led to unprecedented money printing and near-zero interest rates for over a decade",
      bitcoinProtection: "Bitcoin was created as a direct response to the 2008 crisis, offering an alternative monetary system outside banking control",
      icon: Zap
    },
    {
      year: "2018",
      name: "US-China Trade War",
      description: "Accusations of currency manipulation as China allowed the yuan to devalue in response to US tariffs, weaponizing currency in trade disputes",
      bitcoinProtection: "Bitcoin offers neutral settlement for international trade that cannot be weaponized or manipulated by either side in a trade dispute",
      icon: Scale
    },
    {
      year: "2022",
      name: "Russia Sanctions",
      description: "Russia was disconnected from SWIFT and its foreign reserves were frozen, demonstrating how quickly access to the global financial system can be revoked",
      bitcoinProtection: "Bitcoin operates on a neutral network that cannot exclude specific countries or be controlled by any specific government",
      icon: Lock
    }
  ];
  
  // Example data for assets during crises
  const crisisPerformanceData = {
    "2008": {
      "Bitcoin": null, // Didn't exist yet
      "Gold": 5.5,
      "S&P 500": -38.5,
      "US Dollar": 8.4,
      "Real Estate": -18.2
    },
    "2013-Euro": {
      "Bitcoin": 5400,
      "Gold": -28,
      "S&P 500": 29.6,
      "US Dollar": 4.3,
      "Real Estate": 11.4
    },
    "2020-COVID": {
      "Bitcoin": 305,
      "Gold": 24.6,
      "S&P 500": 16.3,
      "US Dollar": -6.7,
      "Real Estate": 10.8
    },
    "2022-Ukraine": {
      "Bitcoin": -65,
      "Gold": -0.3,
      "S&P 500": -19.4,
      "US Dollar": 8.2,
      "Real Estate": -19.5
    }
  };
  
  // Example data for country concerns
  const countryConcerns = {
    "United States": {
      inflation: "6.5%",
      sanctions: "Low",
      capitalControls: "Low",
      bitcoinStrategy: "Hold 3-5% as insurance against dollar debasement and to maintain economic sovereignty in a multi-polar future"
    },
    "Argentina": {
      inflation: "100+%",
      sanctions: "Moderate",
      capitalControls: "Severe",
      bitcoinStrategy: "Consider 15-20% allocation to preserve purchasing power against extreme inflation and circumvent capital controls"
    },
    "Russia": {
      inflation: "4.5%",
      sanctions: "Severe",
      capitalControls: "Severe",
      bitcoinStrategy: "Bitcoin can maintain access to the global economy despite sanctions, consider 10-15% allocation"
    },
    "China": {
      inflation: "2.0%",
      sanctions: "Increasing",
      capitalControls: "Severe",
      bitcoinStrategy: "Small bitcoin allocation (3-8%) provides protection against potential future international restrictions"
    },
    "Nigeria": {
      inflation: "21%",
      sanctions: "Low",
      capitalControls: "Moderate",
      bitcoinStrategy: "10-15% allocation to preserve wealth amid currency devaluation and facilitate remittances"
    },
    "Lebanon": {
      inflation: "200+%",
      sanctions: "Moderate",
      capitalControls: "Severe",
      bitcoinStrategy: "25-30% allocation as protection against banking system collapse and currency hyperinflation"
    }
  };
  
  // Example testimonials from crisis countries
  const testimonials = [
    {
      name: "Carlos Hernandez",
      country: "Venezuela",
      quote: "When our bolivar became worthless, my bitcoin savings were the only thing that maintained value. It literally fed my family during the worst of the hyperinflation.",
      year: "2018"
    },
    {
      name: "Fatima Saad",
      country: "Lebanon",
      quote: "After our banks froze everyone's accounts during the financial crisis, Bitcoin became our only way to preserve savings and make international transactions. The banking collapse taught me: no self-custody, no control.",
      year: "2021"
    },
    {
      name: "Mehmet Yilmaz",
      country: "Turkey",
      quote: "As the lira fell 44% in a single year, my bitcoin holdings became the most stable part of my savings. Even through volatility, it outperformed our national currency by far.",
      year: "2021"
    },
    {
      name: "Gabriel Torres",
      country: "Argentina",
      quote: "Living through multiple currency crises showed me the importance of holding assets outside the local financial system. Bitcoin isn't just an investment here—it's financial self-defense.",
      year: "2022"
    }
  ];

  // National Bitcoin adoption data
  const nationalAdoption = [
    {
      country: "El Salvador",
      status: "Legal Tender",
      reserves: "~2,400 BTC",
      year: 2021,
      noteworthy: "First nation to adopt Bitcoin as legal tender"
    },
    {
      country: "Central African Republic",
      status: "Legal Tender",
      reserves: "Unknown",
      year: 2022,
      noteworthy: "Second country to recognize Bitcoin as legal tender"
    },
    {
      country: "Switzerland",
      status: "Friendly Regulation",
      reserves: "Unknown (Municipal holdings)",
      year: 2021,
      noteworthy: "Multiple cities accept tax payments in Bitcoin"
    }
  ];
  
  // Corporate adoption data
  const corporateAdoption = [
    {
      company: "MicroStrategy",
      industry: "Software",
      holdings: "158,200 BTC",
      strategy: "Primary Treasury Reserve Asset"
    },
    {
      company: "Tesla",
      industry: "Automotive/Energy",
      holdings: "10,725 BTC",
      strategy: "Partial Treasury Allocation"
    },
    {
      company: "Marathon Digital",
      industry: "Bitcoin Mining",
      holdings: "13,726 BTC",
      strategy: "Operational Holdings"
    },
    {
      company: "Square/Block",
      industry: "Financial Services",
      holdings: "8,027 BTC",
      strategy: "Strategic Investment"
    }
  ];
  
  // Bitcoin Sovereignty Index data
  const sovereigntyIndexData = [
    {
      country: "United States",
      nodeCount: "High (2,000+)",
      miningPresence: "High (37.8%)",
      regulation: "Mixed",
      overallRating: 78
    },
    {
      country: "Germany",
      nodeCount: "High (1,000+)",
      miningPresence: "Low",
      regulation: "Positive",
      overallRating: 72
    },
    {
      country: "Canada",
      nodeCount: "Medium (400+)",
      miningPresence: "High (6.5%)",
      regulation: "Positive",
      overallRating: 69
    },
    {
      country: "El Salvador",
      nodeCount: "Low (100+)",
      miningPresence: "Growing",
      regulation: "Very Positive",
      overallRating: 65
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
            <Badge className="mb-6 px-3 py-1 bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-colors">
              <Shield className="mr-1 h-3.5 w-3.5" />
              <span>Monetary Defense</span>
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              Bitcoin: The Geopolitical Shield
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium mb-8 text-muted-foreground">
              How the neutral, borderless cryptocurrency provides protection 
              in an increasingly divided global monetary landscape
            </h2>
          </motion.div>
          
          {/* Interactive Global Map Visualization */}
          <div className="mt-10 w-full max-w-5xl mx-auto">
            <Card className="border-blue-500/20 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-950/20 to-background p-6 md:p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center bg-blue-500/10 p-3 rounded-full mb-4">
                    <Globe className="h-10 w-10 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Global Monetary Landscape</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Explore how Bitcoin forms a protective network above traditional currency conflicts,
                    sanctions, and capital controls across the global monetary system
                  </p>
                </div>
                
                {/* Interactive Map Placeholder */}
                <div className="relative h-[400px] bg-card rounded-lg border border-blue-500/10 overflow-hidden mb-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-b from-blue-950/5 to-blue-950/10 flex flex-col items-center justify-center">
                      {/* This would be replaced with an actual interactive map component */}
                      <div className="relative w-full h-full">
                        {/* World map background SVG - simplified for example */}
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 1000 500"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute inset-0 opacity-20"
                        >
                          <path
                            d="M150,150 Q200,100 250,150 T350,150 T450,150 T550,150 T650,150 T750,150 T850,150"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            className="text-blue-500"
                          />
                          <path
                            d="M150,250 Q200,200 250,250 T350,250 T450,250 T550,250 T650,250 T750,250 T850,250"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            className="text-blue-500"
                          />
                          <path
                            d="M150,350 Q200,300 250,350 T350,350 T450,350 T550,350 T650,350 T750,350 T850,350"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            className="text-blue-500"
                          />
                          {/* Bitcoin network overlay */}
                          <circle cx="200" cy="150" r="5" fill="#F7931A" className="animate-pulse" />
                          <circle cx="500" cy="200" r="5" fill="#F7931A" className="animate-pulse" />
                          <circle cx="300" cy="300" r="5" fill="#F7931A" className="animate-pulse" />
                          <circle cx="700" cy="250" r="5" fill="#F7931A" className="animate-pulse" />
                          <circle cx="800" cy="150" r="5" fill="#F7931A" className="animate-pulse" />
                          
                          <line x1="200" y1="150" x2="500" y2="200" stroke="#F7931A" strokeWidth="1" strokeOpacity="0.5" />
                          <line x1="500" y1="200" x2="300" y2="300" stroke="#F7931A" strokeWidth="1" strokeOpacity="0.5" />
                          <line x1="500" y1="200" x2="700" y2="250" stroke="#F7931A" strokeWidth="1" strokeOpacity="0.5" />
                          <line x1="700" y1="250" x2="800" y2="150" stroke="#F7931A" strokeWidth="1" strokeOpacity="0.5" />
                          <line x1="300" y1="300" x2="200" y2="150" stroke="#F7931A" strokeWidth="1" strokeOpacity="0.5" />
                        </svg>
                        
                        {/* Country hotspots that would be interactive in the full implementation */}
                        <div className="absolute top-1/4 left-1/4 flex flex-col items-center">
                          <div className="w-3 h-3 bg-red-500 rounded-full animate-ping" />
                          <span className="text-xs mt-1 bg-background/80 px-1 rounded">Venezuela</span>
                        </div>
                        
                        <div className="absolute top-1/5 right-1/3 flex flex-col items-center">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full animate-ping" />
                          <span className="text-xs mt-1 bg-background/80 px-1 rounded">Russia</span>
                        </div>
                        
                        <div className="absolute bottom-1/3 right-1/4 flex flex-col items-center">
                          <div className="w-3 h-3 bg-red-500 rounded-full animate-ping" />
                          <span className="text-xs mt-1 bg-background/80 px-1 rounded">Turkey</span>
                        </div>
                        
                        <div className="absolute bottom-1/4 left-1/3 flex flex-col items-center">
                          <div className="w-3 h-3 bg-red-500 rounded-full animate-ping" />
                          <span className="text-xs mt-1 bg-background/80 px-1 rounded">Argentina</span>
                        </div>
                        
                        <div className="absolute top-1/3 left-1/5 flex flex-col items-center">
                          <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping" />
                          <span className="text-xs mt-1 bg-background/80 px-1 rounded">El Salvador</span>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-4 right-4 flex space-x-4">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-red-500 rounded-full mr-2" />
                          <span className="text-xs">Currency Crisis</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2" />
                          <span className="text-xs">Sanctions</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2" />
                          <span className="text-xs">Bitcoin Adoption</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="bg-gradient-to-b from-red-950/5 to-background border-red-500/20">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-2">
                        <TrendingDown className="h-5 w-5 text-red-500 mr-2" />
                        <h4 className="font-bold">Currency Devaluations</h4>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        17 currencies have lost over 90% of their value against the 
                        US dollar in the past decade. Bitcoin's fixed supply of 21 million 
                        makes it immune to arbitrary devaluation.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-b from-yellow-950/5 to-background border-yellow-500/20">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-2">
                        <Lock className="h-5 w-5 text-yellow-500 mr-2" />
                        <h4 className="font-bold">Sanctions & Restrictions</h4>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Over 40 countries are currently under some form of financial sanctions.
                        Bitcoin's permissionless network enables value transfer regardless of 
                        geopolitical boundaries.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-b from-blue-950/5 to-background border-blue-500/20">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-2">
                        <Wallet className="h-5 w-5 text-blue-500 mr-2" />
                        <h4 className="font-bold">Capital Controls</h4>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Citizens in 75+ countries face restrictions on moving their money 
                        across borders. Bitcoin enables individuals to store and transfer 
                        value without permission or restrictions.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="mt-12">
            <div className="inline-block animate-bounce">
              <ChevronDown className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          
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
        
        {/* Currency Wars Timeline Section */}
        <section className="py-24 bg-card" ref={targetRef}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                style={{ opacity, scale }}
                className="text-center mb-16"
              >
                <Badge className="mb-4 px-3 py-1 bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                  <History className="mr-1 h-3.5 w-3.5" />
                  <span>Historical Perspective</span>
                </Badge>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Currency Wars Timeline</h2>
                <p className="text-lg text-muted-foreground">
                  A history of how geopolitical conflicts play out on the monetary battlefield—and how 
                  Bitcoin provides protection against these economic weapons
                </p>
              </motion.div>
              
              <div className="space-y-12 mb-8">
                {currencyWarsEvents.map((event, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    key={index}
                    className="relative"
                  >
                    {index < currencyWarsEvents.length - 1 && (
                      <div className="absolute top-16 bottom-0 left-8 md:left-[7.5%] w-0.5 bg-blue-500/20 z-0"></div>
                    )}
                    
                    <div className="flex flex-col md:flex-row gap-6 relative z-10">
                      <div className="md:w-[15%] flex flex-col items-center md:items-end">
                        <div className="bg-blue-500/10 p-3 rounded-full border-4 border-card">
                          <event.icon className="h-6 w-6 text-blue-500" />
                        </div>
                        <h3 className="mt-3 text-center md:text-right text-xl font-bold text-blue-500">{event.year}</h3>
                      </div>
                      
                      <div className="md:w-[85%] bg-background border rounded-lg overflow-hidden">
                        <div className="p-6 border-b">
                          <h3 className="text-lg font-bold mb-2">{event.name}</h3>
                          <p className="text-sm text-muted-foreground">{event.description}</p>
                        </div>
                        
                        <div className="bg-blue-500/5 p-4">
                          <div className="flex items-start">
                            <Shield className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="text-sm font-bold text-blue-500 mb-1">Bitcoin Protection</h4>
                              <p className="text-xs text-muted-foreground">{event.bitcoinProtection}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="bg-blue-500/5 rounded-lg border border-blue-500/20 p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500/10 p-3 rounded-full mr-4">
                    <Shield className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold">Bitcoin: The Meta-Currency</h3>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Throughout history, economic conflicts between nations have repeatedly weaponized money 
                  against populations. Bitcoin was designed specifically to exist outside the control 
                  of any single government or institution, creating for the first time a truly neutral 
                  global monetary network that cannot be weaponized by one country against another.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="bg-background p-4 rounded-lg border">
                    <div className="flex items-center justify-center mb-2">
                      <Building className="h-5 w-5 text-blue-500 mr-2" />
                      <h4 className="font-medium">Institutional Neutrality</h4>
                    </div>
                    <p className="text-xs text-muted-foreground">No central authority can manipulate or control it</p>
                  </div>
                  
                  <div className="bg-background p-4 rounded-lg border">
                    <div className="flex items-center justify-center mb-2">
                      <Globe className="h-5 w-5 text-blue-500 mr-2" />
                      <h4 className="font-medium">Borderless Operation</h4>
                    </div>
                    <p className="text-xs text-muted-foreground">Functions identically regardless of nationality or location</p>
                  </div>
                  
                  <div className="bg-background p-4 rounded-lg border">
                    <div className="flex items-center justify-center mb-2">
                      <Users className="h-5 w-5 text-blue-500 mr-2" />
                      <h4 className="font-medium">Equal Access Rules</h4>
                    </div>
                    <p className="text-xs text-muted-foreground">Protocol treats all participants with the same immutable rules</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Crisis Asset Performance Section */}
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
                <Badge className="mb-4 px-3 py-1 bg-amber-500 text-white hover:bg-amber-600 transition-colors">
                  <BarChart4 className="mr-1 h-3.5 w-3.5" />
                  <span>Asset Comparison</span>
                </Badge>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Crisis-Resistant Assets</h2>
                <p className="text-lg text-muted-foreground">
                  How different investments performed during major geopolitical and financial crises
                </p>
              </motion.div>
              
              <Card className="border-amber-500/20 mb-12">
                <CardContent className="p-0">
                  <div className="p-6 border-b">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className="bg-amber-500/10 p-3 rounded-full mr-4">
                          <AlertTriangle className="h-6 w-6 text-amber-500" />
                        </div>
                        <h3 className="text-xl font-bold">Asset Performance During Crises</h3>
                      </div>
                      
                      <div>
                        <Select value={selectedCrisis} onValueChange={setSelectedCrisis}>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select Crisis" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2008">2008 Financial Crisis</SelectItem>
                            <SelectItem value="2013-Euro">2013 Euro Crisis</SelectItem>
                            <SelectItem value="2020-COVID">2020 COVID Crash</SelectItem>
                            <SelectItem value="2022-Ukraine">2022 Ukraine Conflict</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="relative h-80 bg-background rounded-lg border overflow-hidden mb-8">
                      {/* Asset Performance Chart (simplified visualization) */}
                      <div className="absolute inset-0 flex items-end p-6">
                        <div className="w-full grid grid-cols-5 gap-2 h-full relative">
                          {/* X and Y axes */}
                          <div className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-200"></div>
                          <div className="absolute left-0 bottom-0 h-full w-0.5 bg-gray-200"></div>
                          
                          {/* Horizontal guidelines */}
                          <div className="absolute left-0 bottom-1/4 w-full h-px bg-gray-200 opacity-30"></div>
                          <div className="absolute left-0 bottom-1/2 w-full h-px bg-gray-200 opacity-30"></div>
                          <div className="absolute left-0 bottom-3/4 w-full h-px bg-gray-200 opacity-30"></div>
                          
                          {/* Chart Y-axis labels */}
                          <div className="absolute left-2 bottom-0 transform -translate-y-2 text-xs text-muted-foreground">0%</div>
                          <div className="absolute left-2 bottom-1/4 transform -translate-y-2 text-xs text-muted-foreground">25%</div>
                          <div className="absolute left-2 bottom-1/2 transform -translate-y-2 text-xs text-muted-foreground">50%</div>
                          <div className="absolute left-2 bottom-3/4 transform -translate-y-2 text-xs text-muted-foreground">100%+</div>
                          
                          {/* Bitcoin */}
                          <div className="flex flex-col items-center justify-end">
                            {crisisPerformanceData[selectedCrisis]["Bitcoin"] !== null ? (
                              <>
                                <div 
                                  className="w-full bg-gradient-to-t from-amber-500 to-amber-400 rounded-t-sm relative group"
                                  style={{ 
                                    height: `${Math.min(Math.abs(crisisPerformanceData[selectedCrisis]["Bitcoin"]), 100) / 100 * 75}%`,
                                    maxHeight: '75%'
                                  }}
                                >
                                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-amber-500/90 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    {crisisPerformanceData[selectedCrisis]["Bitcoin"] > 0 ? '+' : ''}
                                    {crisisPerformanceData[selectedCrisis]["Bitcoin"]}%
                                  </div>
                                  {crisisPerformanceData[selectedCrisis]["Bitcoin"] > 100 && (
                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 text-amber-500 text-xs font-bold">
                                      ↑
                                    </div>
                                  )}
                                </div>
                                <div className="mt-2 text-xs font-medium">Bitcoin</div>
                              </>
                            ) : (
                              <>
                                <div className="h-10 flex items-center justify-center border border-dashed border-gray-300 w-full rounded-t-sm">
                                  <span className="text-xs text-muted-foreground">N/A</span>
                                </div>
                                <div className="mt-2 text-xs font-medium">Bitcoin</div>
                              </>
                            )}
                          </div>
                          
                          {/* Gold */}
                          <div className="flex flex-col items-center justify-end">
                            <div 
                              className={`w-full ${
                                crisisPerformanceData[selectedCrisis]["Gold"] >= 0 
                                  ? 'bg-gradient-to-t from-yellow-500 to-yellow-400' 
                                  : 'bg-gradient-to-t from-red-500 to-red-400'
                              } rounded-t-sm relative group`}
                              style={{ 
                                height: `${Math.min(Math.abs(crisisPerformanceData[selectedCrisis]["Gold"]), 100) / 100 * 75}%` 
                              }}
                            >
                              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-yellow-500/90 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                {crisisPerformanceData[selectedCrisis]["Gold"] > 0 ? '+' : ''}
                                {crisisPerformanceData[selectedCrisis]["Gold"]}%
                              </div>
                            </div>
                            <div className="mt-2 text-xs font-medium">Gold</div>
                          </div>
                          
                          {/* S&P 500 */}
                          <div className="flex flex-col items-center justify-end">
                            <div 
                              className={`w-full ${
                                crisisPerformanceData[selectedCrisis]["S&P 500"] >= 0 
                                  ? 'bg-gradient-to-t from-green-500 to-green-400' 
                                  : 'bg-gradient-to-t from-red-500 to-red-400'
                              } rounded-t-sm relative group`}
                              style={{ 
                                height: `${Math.min(Math.abs(crisisPerformanceData[selectedCrisis]["S&P 500"]), 100) / 100 * 75}%` 
                              }}
                            >
                              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-500/90 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                {crisisPerformanceData[selectedCrisis]["S&P 500"] > 0 ? '+' : ''}
                                {crisisPerformanceData[selectedCrisis]["S&P 500"]}%
                              </div>
                            </div>
                            <div className="mt-2 text-xs font-medium">S&P 500</div>
                          </div>
                          
                          {/* US Dollar */}
                          <div className="flex flex-col items-center justify-end">
                            <div 
                              className={`w-full ${
                                crisisPerformanceData[selectedCrisis]["US Dollar"] >= 0 
                                  ? 'bg-gradient-to-t from-blue-500 to-blue-400' 
                                  : 'bg-gradient-to-t from-red-500 to-red-400'
                              } rounded-t-sm relative group`}
                              style={{ 
                                height: `${Math.min(Math.abs(crisisPerformanceData[selectedCrisis]["US Dollar"]), 100) / 100 * 75}%` 
                              }}
                            >
                              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-500/90 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                {crisisPerformanceData[selectedCrisis]["US Dollar"] > 0 ? '+' : ''}
                                {crisisPerformanceData[selectedCrisis]["US Dollar"]}%
                              </div>
                            </div>
                            <div className="mt-2 text-xs font-medium">US Dollar</div>
                          </div>
                          
                          {/* Real Estate */}
                          <div className="flex flex-col items-center justify-end">
                            <div 
                              className={`w-full ${
                                crisisPerformanceData[selectedCrisis]["Real Estate"] >= 0 
                                  ? 'bg-gradient-to-t from-indigo-500 to-indigo-400' 
                                  : 'bg-gradient-to-t from-red-500 to-red-400'
                              } rounded-t-sm relative group`}
                              style={{ 
                                height: `${Math.min(Math.abs(crisisPerformanceData[selectedCrisis]["Real Estate"]), 100) / 100 * 75}%` 
                              }}
                            >
                              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-indigo-500/90 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                {crisisPerformanceData[selectedCrisis]["Real Estate"] > 0 ? '+' : ''}
                                {crisisPerformanceData[selectedCrisis]["Real Estate"]}%
                              </div>
                            </div>
                            <div className="mt-2 text-xs font-medium">Real Estate</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-amber-500/5">
                    <div className="flex items-start mb-4">
                      <div className="bg-amber-500/10 p-2 rounded-full mr-3 mt-1">
                        <Zap className="h-4 w-4 text-amber-500" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold mb-1">Key Insights</h4>
                        <p className="text-sm text-muted-foreground">
                          {selectedCrisis === "2008" && (
                            "During the 2008 financial crisis, traditional safe havens like gold and the US dollar outperformed risk assets, while Bitcoin did not yet exist. This crisis directly inspired Bitcoin's creation."
                          )}
                          {selectedCrisis === "2013-Euro" && (
                            "The European debt crisis coincided with Bitcoin's first major bull market, showing its potential as a hedge against banking system instability and sovereign debt concerns."
                          )}
                          {selectedCrisis === "2020-COVID" && (
                            "The COVID-19 market crash initially hit all assets, but Bitcoin recovered faster and appreciated more than any other asset class during the recovery, showing its emerging role as a crisis hedge."
                          )}
                          {selectedCrisis === "2022-Ukraine" && (
                            "During the Russia-Ukraine conflict and resulting sanctions, Bitcoin demonstrated volatility but served a critical function for people in affected regions who needed to preserve wealth or make cross-border transactions."
                          )}
                        </p>
                      </div>
                    </div>
                    
                    {selectedCrisis === "2008" && (
                      <div className="bg-card p-4 rounded-lg border">
                        <div className="flex items-start">
                          <BitcoinLogoIcon className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                          <p className="text-xs text-muted-foreground italic">
                            "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks" —Inscription in Bitcoin's genesis block, referencing the 2008 financial crisis that inspired its creation
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-amber-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-amber-500/10 p-3 rounded-full mr-4">
                        <AlertTriangle className="h-6 w-6 text-amber-500" />
                      </div>
                      <h4 className="text-lg font-bold">Traditional Crisis Hedges</h4>
                    </div>
                    
                    <ul className="space-y-3 mb-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 bg-amber-500/10 p-1 rounded-full mr-2 mt-1">
                          <Check className="h-3 w-3 text-amber-500" />
                        </div>
                        <div>
                          <span className="font-medium">Gold</span>
                          <p className="text-xs text-muted-foreground mt-0.5">Physical store of value but difficult to transport across borders and susceptible to confiscation</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 bg-amber-500/10 p-1 rounded-full mr-2 mt-1">
                          <X className="h-3 w-3 text-amber-500" />
                        </div>
                        <div>
                          <span className="font-medium">US Dollar</span>
                          <p className="text-xs text-muted-foreground mt-0.5">Reserve currency often strengthens during crises, but subject to sanctions and inflation over time</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 bg-amber-500/10 p-1 rounded-full mr-2 mt-1">
                          <X className="h-3 w-3 text-amber-500" />
                        </div>
                        <div>
                          <span className="font-medium">Government Bonds</span>
                          <p className="text-xs text-muted-foreground mt-0.5">Relatively stable but tied to specific government policies and vulnerable to devaluations</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-amber-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-amber-500/10 p-3 rounded-full mr-4">
                        <BitcoinLogoIcon className="h-6 w-6 text-amber-500" />
                      </div>
                      <h4 className="text-lg font-bold">Bitcoin's Crisis Advantages</h4>
                    </div>
                    
                    <ul className="space-y-3 mb-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 bg-amber-500/10 p-1 rounded-full mr-2 mt-1">
                          <Check className="h-3 w-3 text-amber-500" />
                        </div>
                        <div>
                          <span className="font-medium">Self-Sovereign</span>
                          <p className="text-xs text-muted-foreground mt-0.5">Cannot be frozen, confiscated, or blocked if properly self-custodied</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 bg-amber-500/10 p-1 rounded-full mr-2 mt-1">
                          <Check className="h-3 w-3 text-amber-500" />
                        </div>
                        <div>
                          <span className="font-medium">Digitally Portable</span>
                          <p className="text-xs text-muted-foreground mt-0.5">Can be transported across borders via memorized seed phrase or hardware wallet</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 bg-amber-500/10 p-1 rounded-full mr-2 mt-1">
                          <Check className="h-3 w-3 text-amber-500" />
                        </div>
                        <div>
                          <span className="font-medium">Neutral Network</span>
                          <p className="text-xs text-muted-foreground mt-0.5">Functions identically for all users regardless of nationality, wealth, or political status</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Strategic Allocation Calculator Section */}
        <section className="py-24 bg-blue-950/5 border-y border-blue-500/10">
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
                  <CircleDollarSign className="mr-1 h-3.5 w-3.5" />
                  <span>Customized Strategy</span>
                </Badge>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Strategic Allocation Calculator</h2>
                <p className="text-lg text-muted-foreground">
                  Get tailored insights on how Bitcoin might fit into your financial strategy
                  based on your location and specific concerns
                </p>
              </motion.div>
              
              <Card className="border-green-500/20 mb-12 overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6 md:p-8 border-b">
                    <div className="flex items-center mb-6">
                      <div className="bg-green-500/10 p-3 rounded-full mr-4">
                        <Flag className="h-6 w-6 text-green-500" />
                      </div>
                      <h3 className="text-xl font-bold">Your Geopolitical Position</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Country of Residence</label>
                        <Select value={userCountry} onValueChange={setUserCountry}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="United States">United States</SelectItem>
                            <SelectItem value="Argentina">Argentina</SelectItem>
                            <SelectItem value="Russia">Russia</SelectItem>
                            <SelectItem value="China">China</SelectItem>
                            <SelectItem value="Nigeria">Nigeria</SelectItem>
                            <SelectItem value="Lebanon">Lebanon</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Primary Concern</label>
                        <Select value={selectedConcern} onValueChange={setSelectedConcern}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your main concern" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="inflation">Currency Devaluation / Inflation</SelectItem>
                            <SelectItem value="sanctions">Sanctions / International Restrictions</SelectItem>
                            <SelectItem value="capitalControls">Capital Controls / Bank Restrictions</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-950/10 to-background p-6 md:p-8">
                    <div className="mb-8">
                      <h4 className="text-lg font-bold mb-4 flex items-center">
                        <span className="inline-block px-2 py-1 bg-green-500 text-white rounded mr-3 text-xs">
                          {userCountry}
                        </span>
                        Financial Landscape Analysis
                      </h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-card rounded-lg border p-4">
                          <div className="flex items-center mb-2">
                            <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                            <h5 className="text-sm font-bold">Inflation Rate</h5>
                          </div>
                          <div className="flex items-baseline">
                            <span className="text-2xl font-bold">{countryConcerns[userCountry].inflation}</span>
                            <span className="text-xs text-muted-foreground ml-2">Annual</span>
                          </div>
                          <div className={`h-1 mt-2 rounded-full ${
                            parseFloat(countryConcerns[userCountry].inflation) > 20 
                              ? 'bg-red-500' 
                              : parseFloat(countryConcerns[userCountry].inflation) > 5 
                                ? 'bg-amber-500' 
                                : 'bg-green-500'
                          }`}></div>
                        </div>
                        
                        <div className="bg-card rounded-lg border p-4">
                          <div className="flex items-center mb-2">
                            <Lock className="h-4 w-4 text-green-500 mr-2" />
                            <h5 className="text-sm font-bold">Sanctions Risk</h5>
                          </div>
                          <div className="flex items-baseline">
                            <span className="text-2xl font-bold">{countryConcerns[userCountry].sanctions}</span>
                          </div>
                          <div className={`h-1 mt-2 rounded-full ${
                            countryConcerns[userCountry].sanctions === 'Severe' 
                              ? 'bg-red-500' 
                              : countryConcerns[userCountry].sanctions === 'Moderate' 
                                ? 'bg-amber-500' 
                                : 'bg-green-500'
                          }`}></div>
                        </div>
                        
                        <div className="bg-card rounded-lg border p-4">
                          <div className="flex items-center mb-2">
                            <Wallet className="h-4 w-4 text-green-500 mr-2" />
                            <h5 className="text-sm font-bold">Capital Controls</h5>
                          </div>
                          <div className="flex items-baseline">
                            <span className="text-2xl font-bold">{countryConcerns[userCountry].capitalControls}</span>
                          </div>
                          <div className={`h-1 mt-2 rounded-full ${
                            countryConcerns[userCountry].capitalControls === 'Severe' 
                              ? 'bg-red-500' 
                              : countryConcerns[userCountry].capitalControls === 'Moderate' 
                                ? 'bg-amber-500' 
                                : 'bg-green-500'
                          }`}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-card rounded-lg border p-6">
                      <div className="flex items-start mb-6">
                        <div className="bg-green-500/10 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                          <Shield className="h-5 w-5 text-green-500" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold mb-2">Recommended Bitcoin Strategy</h4>
                          <p className="text-sm text-muted-foreground">
                            {countryConcerns[userCountry].bitcoinStrategy}
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-green-500/5 p-4 rounded-lg border border-green-500/20">
                        <h5 className="text-sm font-bold mb-2">Implementation Tactics</h5>
                        <ul className="space-y-2">
                          {selectedConcern === "inflation" && (
                            <>
                              <li className="text-xs flex items-start">
                                <Check className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">Regular dollar-cost averaging to smooth volatility</span>
                              </li>
                              <li className="text-xs flex items-start">
                                <Check className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">Cold storage for long-term holdings</span>
                              </li>
                              <li className="text-xs flex items-start">
                                <Check className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">Focus on self-custody to maintain monetary sovereignty</span>
                              </li>
                            </>
                          )}
                          
                          {selectedConcern === "sanctions" && (
                            <>
                              <li className="text-xs flex items-start">
                                <Check className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">Prioritize non-KYC acquisition methods if legally permissible</span>
                              </li>
                              <li className="text-xs flex items-start">
                                <Check className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">Consider running your own node for direct network access</span>
                              </li>
                              <li className="text-xs flex items-start">
                                <Check className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">Maintain multiple wallet options for resilience</span>
                              </li>
                            </>
                          )}
                          
                          {selectedConcern === "capitalControls" && (
                            <>
                              <li className="text-xs flex items-start">
                                <Check className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">Exercise regular transactions to maintain familiarity with process</span>
                              </li>
                              <li className="text-xs flex items-start">
                                <Check className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">Secure seed phrase for border crossings (memorized or steel backup)</span>
                              </li>
                              <li className="text-xs flex items-start">
                                <Check className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">Consider multisig setups for significant holdings</span>
                              </li>
                            </>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-6 max-w-2xl mx-auto">
                  This strategic allocation tool provides general information, not personalized investment advice. 
                  Bitcoin allocation should be considered as part of a broader financial strategy aligned with your specific circumstances and risk tolerance.
                </p>
                
                <Link to="/learn-bitcoin">
                  <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Learn More About Self-Sovereign Bitcoin Strategy
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Global Adoption Tracker Section */}
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
                <Badge className="mb-4 px-3 py-1 bg-indigo-500 text-white hover:bg-indigo-600 transition-colors">
                  <Globe className="mr-1 h-3.5 w-3.5" />
                  <span>Accelerating Adoption</span>
                </Badge>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Global Adoption Tracker</h2>
                <p className="text-lg text-muted-foreground">
                  Nations, companies, and sovereign wealth funds adding Bitcoin to their reserves
                </p>
              </motion.div>
              
              <div className="mb-12">
                <Tabs defaultValue="nations" className="w-full">
                  <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
                    <TabsTrigger value="nations" className="flex items-center">
                      <Flag className="mr-2 h-4 w-4" />
                      Nation States
                    </TabsTrigger>
                    <TabsTrigger value="corporations" className="flex items-center">
                      <Building className="mr-2 h-4 w-4" />
                      Corporations
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="nations">
                    <Card className="border-indigo-500/20">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-6">
                          <div className="bg-indigo-500/10 p-3 rounded-full mr-4">
                            <Flag className="h-6 w-6 text-indigo-500" />
                          </div>
                          <h3 className="text-xl font-bold">National Bitcoin Adoption</h3>
                        </div>
                        
                        <div className="space-y-6">
                          {nationalAdoption.map((country, index) => (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              key={index}
                              className="bg-card border rounded-lg p-4"
                            >
                              <div className="flex flex-col md:flex-row md:items-center gap-4">
                                <div className="md:w-1/4">
                                  <h4 className="text-lg font-bold text-indigo-500">{country.country}</h4>
                                  <div className="inline-block px-2 py-0.5 bg-indigo-500/10 text-indigo-500 rounded text-xs mt-1">
                                    Since {country.year}
                                  </div>
                                </div>
                                
                                <div className="md:w-1/4">
                                  <div className="text-sm font-medium">Status</div>
                                  <div className="text-base">{country.status}</div>
                                </div>
                                
                                <div className="md:w-1/4">
                                  <div className="text-sm font-medium">Known Reserves</div>
                                  <div className="text-base">{country.reserves}</div>
                                </div>
                                
                                <div className="md:w-1/4">
                                  <div className="text-sm font-medium">Noteworthy</div>
                                  <div className="text-xs text-muted-foreground">{country.noteworthy}</div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        
                        <div className="mt-8 p-4 bg-indigo-500/5 rounded-lg border border-indigo-500/20">
                          <div className="flex items-start">
                            <Rocket className="h-5 w-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="text-base font-bold mb-1">Future Adoption Projections</h4>
                              <p className="text-sm text-muted-foreground">
                                Economic analysts project that 5-10 more countries will incorporate Bitcoin into their monetary strategy by 2030, while as many as 25-30 may hold some Bitcoin in their reserves. This trend is expected to accelerate as financial competition between nation states intensifies.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="corporations">
                    <Card className="border-indigo-500/20">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-6">
                          <div className="bg-indigo-500/10 p-3 rounded-full mr-4">
                            <Building className="h-6 w-6 text-indigo-500" />
                          </div>
                          <h3 className="text-xl font-bold">Corporate Bitcoin Holdings</h3>
                        </div>
                        
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr>
                                <th className="text-left p-2 border-b text-sm font-medium text-muted-foreground">Company</th>
                                <th className="text-left p-2 border-b text-sm font-medium text-muted-foreground">Industry</th>
                                <th className="text-right p-2 border-b text-sm font-medium text-muted-foreground">Bitcoin Holdings</th>
                                <th className="text-left p-2 border-b text-sm font-medium text-muted-foreground">Strategy</th>
                              </tr>
                            </thead>
                            <tbody>
                              {corporateAdoption.map((company, index) => (
                                <motion.tr
                                  initial={{ opacity: 0, y: 5 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.2, delay: index * 0.05 }}
                                  viewport={{ once: true }}
                                  key={index}
                                  className="border-b last:border-b-0"
                                >
                                  <td className="p-3 text-sm font-medium">{company.company}</td>
                                  <td className="p-3 text-sm text-muted-foreground">{company.industry}</td>
                                  <td className="p-3 text-sm text-right font-mono">{company.holdings}</td>
                                  <td className="p-3 text-sm text-muted-foreground">{company.strategy}</td>
                                </motion.tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-card p-4 rounded-lg border text-center">
                            <h4 className="text-3xl font-bold text-indigo-500">50+</h4>
                            <p className="text-xs text-muted-foreground">Public companies with Bitcoin</p>
                          </div>
                          
                          <div className="bg-card p-4 rounded-lg border text-center">
                            <h4 className="text-3xl font-bold text-indigo-500">280,000+</h4>
                            <p className="text-xs text-muted-foreground">Bitcoin in public corporate treasuries</p>
                          </div>
                          
                          <div className="bg-card p-4 rounded-lg border text-center">
                            <h4 className="text-3xl font-bold text-indigo-500">1.33%</h4>
                            <p className="text-xs text-muted-foreground">Of total Bitcoin supply in corporate hands</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
              
              <Card className="border-indigo-500/20 bg-indigo-950/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-500/10 p-3 rounded-full mr-4">
                      <LineChart className="h-6 w-6 text-indigo-500" />
                    </div>
                    <h3 className="text-xl font-bold">Institutional Adoption Trends</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">
                    As geopolitical tensions rise and monetary sovereignty becomes a strategic priority, 
                    both nations and corporations are increasingly turning to Bitcoin as a neutral reserve asset. 
                    This trend accelerates during periods of global instability, creating a self-reinforcing cycle 
                    as adoption drives further adoption.
                  </p>
                  
                  <div className="bg-card rounded-lg border p-4">
                    <h4 className="text-base font-bold mb-2">Adoption Inflection Points</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-indigo-500/10 p-1 rounded-full mr-2 mt-1">
                          <Landmark className="h-3 w-3 text-indigo-500" />
                        </div>
                        <div>
                          <span className="text-sm font-medium">Central Bank Digital Currencies (CBDCs)</span>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            The rise of government digital currencies is driving increased interest in Bitcoin as a non-state alternative
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-indigo-500/10 p-1 rounded-full mr-2 mt-1">
                          <Lock className="h-3 w-3 text-indigo-500" />
                        </div>
                        <div>
                          <span className="text-sm font-medium">Sanctions & Financial Warfare</span>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Countries experiencing or fearing financial sanctions see Bitcoin as strategic insurance
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-indigo-500/10 p-1 rounded-full mr-2 mt-1">
                          <RefreshCw className="h-3 w-3 text-indigo-500" />
                        </div>
                        <div>
                          <span className="text-sm font-medium">First Mover Advantage</span>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Game theory suggests early national adoption provides significant economic advantages
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-24 bg-gradient-to-r from-red-950/5 to-amber-950/5 border-y border-red-500/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <Badge className="mb-4 px-3 py-1 bg-red-500 text-white hover:bg-red-600 transition-colors">
                  <Users className="mr-1 h-3.5 w-3.5" />
                  <span>Real Stories</span>
                </Badge>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">From the Front Lines of Currency Crises</h2>
                <p className="text-lg text-muted-foreground">
                  Testimonials from people who used Bitcoin to protect their savings 
                  during severe currency devaluations in their countries
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    key={index}
                  >
                    <Card className="h-full border-red-500/20">
                      <CardContent className="p-6">
                        <div className="flex flex-col h-full">
                          <div className="mb-4">
                            <Badge variant="outline" className="bg-red-500/10 text-red-500 mb-2">
                              {testimonial.country}, {testimonial.year}
                            </Badge>
                            <h3 className="text-lg font-bold">{testimonial.name}</h3>
                          </div>
                          
                          <div className="flex-grow">
                            <div className="relative pl-6 border-l-2 border-red-500/20">
                              <div className="absolute top-0 left-[-9px]">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12 6.5C12 9 10 11 6.5 11H6V10.5L4 12.5L6 14.5V14H6.5C11 14 14 10.5 14 6.5V4H12V6.5Z" fill="#ef4444" fillOpacity="0.2"/>
                                  <path d="M6.5 2C5.57174 2 4.6815 2.36875 4.02513 3.02513C3.36875 3.6815 3 4.57174 3 5.5V8H5.5V5.5C5.5 5.10218 5.65804 4.72064 5.93934 4.43934C6.22064 4.15804 6.60218 4 7 4H9.5C9.89782 4 10.2794 3.84196 10.5607 3.56066C10.842 3.27936 11 2.89782 11 2.5V2H6.5Z" fill="#ef4444" fillOpacity="0.2"/>
                                </svg>
                              </div>
                              <p className="text-muted-foreground italic text-sm">
                                {testimonial.quote}
                              </p>
                            </div>
                          </div>
                          
                          <div className="mt-6 pt-4 border-t flex justify-between items-center">
                            <div className="flex items-center text-xs text-muted-foreground">
                              <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                              <span>
                                {testimonial.country === "Venezuela" && "1,000,000%+ inflation"}
                                {testimonial.country === "Lebanon" && "201% inflation, 95% currency devaluation"}
                                {testimonial.country === "Turkey" && "85.5% inflation peak"}
                                {testimonial.country === "Argentina" && "100%+ annual inflation"}
                              </span>
                            </div>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <BitcoinLogoIcon className="h-3 w-3 text-amber-500 mr-1" />
                              <span>Protective asset</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12 bg-background rounded-lg border p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-red-500/10 p-3 rounded-full mr-4 mt-1">
                    <Banknote className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">The Human Cost of Currency Collapse</h3>
                    <p className="text-sm text-muted-foreground">
                      In the past decade alone, over 1.8 billion people have experienced severe currency crises in their home countries. 
                      These are not just economic statistics—they represent life savings evaporating, retirement funds becoming worthless, 
                      and families unable to afford basic necessities. Bitcoin offers protection against these devastating events by 
                      providing a neutral, borderless alternative that cannot be devalued by any government.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Bitcoin Sovereignty Index Section */}
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
                <Badge className="mb-4 px-3 py-1 bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                  <Server className="mr-1 h-3.5 w-3.5" />
                  <span>Infrastructure Analysis</span>
                </Badge>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Bitcoin Sovereignty Index</h2>
                <p className="text-lg text-muted-foreground">
                  Measuring a country's Bitcoin infrastructure as an indicator of future economic resilience
                </p>
              </motion.div>
              
              <Card className="border-blue-500/20 mb-12">
                <CardContent className="p-0">
                  <div className="p-6 border-b">
                    <div className="flex items-center mb-6">
                      <div className="bg-blue-500/10 p-3 rounded-full mr-4">
                        <Network className="h-6 w-6 text-blue-500" />
                      </div>
                      <h3 className="text-xl font-bold">National Bitcoin Infrastructure</h3>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr>
                            <th className="text-left p-2 border-b text-sm font-medium text-muted-foreground">Country</th>
                            <th className="text-left p-2 border-b text-sm font-medium text-muted-foreground">Node Count</th>
                            <th className="text-left p-2 border-b text-sm font-medium text-muted-foreground">Mining Presence</th>
                            <th className="text-left p-2 border-b text-sm font-medium text-muted-foreground">Regulation</th>
                            <th className="text-center p-2 border-b text-sm font-medium text-muted-foreground">Sovereignty Score</th>
                          </tr>
                        </thead>
                        <tbody>
                          {sovereigntyIndexData.map((country, index) => (
                            <tr key={index} className="border-b last:border-b-0">
                              <td className="p-3 text-sm font-medium">{country.country}</td>
                              <td className="p-3 text-sm text-muted-foreground">{country.nodeCount}</td>
                              <td className="p-3 text-sm text-muted-foreground">{country.miningPresence}</td>
                              <td className="p-3 text-sm text-muted-foreground">{country.regulation}</td>
                              <td className="p-3">
                                <div className="flex items-center justify-center">
                                  <div className="w-12 h-12 rounded-full border-4 flex items-center justify-center relative">
                                    <svg viewBox="0 0 36 36" className="absolute inset-0">
                                      <path
                                        d="M18 2.0845
                                          a 15.9155 15.9155 0 0 1 0 31.831
                                          a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#e2e8f0"
                                        strokeWidth="3"
                                        strokeDasharray="100, 100"
                                      />
                                      <path
                                        d="M18 2.0845
                                          a 15.9155 15.9155 0 0 1 0 31.831
                                          a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#3b82f6"
                                        strokeWidth="3"
                                        strokeDasharray={`${country.overallRating}, 100`}
                                      />
                                    </svg>
                                    <span className="text-sm font-bold">{country.overallRating}</span>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-blue-500/5">
                    <h4 className="text-base font-bold mb-4">Sovereignty Index Metrics</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-card p-4 rounded-lg border">
                        <div className="flex items-center mb-2">
                          <Server className="h-4 w-4 text-blue-500 mr-2" />
                          <h5 className="text-sm font-bold">Node Infrastructure</h5>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          A high count of Bitcoin full nodes ensures the country has resilient network access and validation capabilities regardless of external factors
                        </p>
                      </div>
                      
                      <div className="bg-card p-4 rounded-lg border">
                        <div className="flex items-center mb-2">
                          <Zap className="h-4 w-4 text-blue-500 mr-2" />
                          <h5 className="text-sm font-bold">Mining Decentralization</h5>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Countries with significant mining operations have greater influence over network security and benefit from Bitcoin's value creation cycle
                        </p>
                      </div>
                      
                      <div className="bg-card p-4 rounded-lg border">
                        <div className="flex items-center mb-2">
                          <Scale className="h-4 w-4 text-blue-500 mr-2" />
                          <h5 className="text-sm font-bold">Regulatory Environment</h5>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Jurisdictions with clear, supportive regulations for Bitcoin activities attract talent, innovation, and capital in the rapidly growing sector
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="bg-blue-950/5 rounded-lg border border-blue-500/20 p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500/10 p-3 rounded-full mr-4">
                    <Shield className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold">The Sovereignty Advantage</h3>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Countries with high Bitcoin sovereignty scores are better positioned for economic 
                  resilience in an increasingly uncertain global financial system. These nations 
                  maintain direct access to a neutral monetary network regardless of international 
                  relationships or banking system disruptions.
                </p>
                
                <div className="bg-card p-4 rounded-lg border mb-6">
                  <div className="border-l-4 border-blue-500 pl-4 italic">
                    <p className="text-sm">
                      "The Bitcoin network serves as neutral financial infrastructure with no central point of control. 
                      Nations that establish robust connections to this network—through nodes, mining, and clear 
                      regulations—are creating strategic economic advantages for the decades ahead."
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">— Dr. Alex Gladstein, Chief Strategy Officer, Human Rights Foundation</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-500/5 rounded-lg border border-blue-500/20 p-4">
                    <h4 className="text-base font-bold mb-2">Individual Sovereignty</h4>
                    <ul className="space-y-2">
                      <li className="text-sm flex items-start">
                        <div className="flex-shrink-0 bg-blue-500/10 p-1 rounded-full mr-2 mt-0.5">
                          <Check className="h-3 w-3 text-blue-500" />
                        </div>
                        <span className="text-muted-foreground">Run your own full node to verify transactions without trusting third parties</span>
                      </li>
                      <li className="text-sm flex items-start">
                        <div className="flex-shrink-0 bg-blue-500/10 p-1 rounded-full mr-2 mt-0.5">
                          <Check className="h-3 w-3 text-blue-500" />
                        </div>
                        <span className="text-muted-foreground">Use non-custodial wallets that give you full control of your private keys</span>
                      </li>
                      <li className="text-sm flex items-start">
                        <div className="flex-shrink-0 bg-blue-500/10 p-1 rounded-full mr-2 mt-0.5">
                          <Check className="h-3 w-3 text-blue-500" />
                        </div>
                        <span className="text-muted-foreground">Secure your keys with redundant backups that can survive geopolitical events</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-500/5 rounded-lg border border-blue-500/20 p-4">
                    <h4 className="text-base font-bold mb-2">National Sovereignty</h4>
                    <ul className="space-y-2">
                      <li className="text-sm flex items-start">
                        <div className="flex-shrink-0 bg-blue-500/10 p-1 rounded-full mr-2 mt-0.5">
                          <Check className="h-3 w-3 text-blue-500" />
                        </div>
                        <span className="text-muted-foreground">Create clear legal frameworks that encourage Bitcoin development and mining</span>
                      </li>
                      <li className="text-sm flex items-start">
                        <div className="flex-shrink-0 bg-blue-500/10 p-1 rounded-full mr-2 mt-0.5">
                          <Check className="h-3 w-3 text-blue-500" />
                        </div>
                        <span className="text-muted-foreground">Support local education initiatives to build domestic Bitcoin expertise</span>
                      </li>
                      <li className="text-sm flex items-start">
                        <div className="flex-shrink-0 bg-blue-500/10 p-1 rounded-full mr-2 mt-0.5">
                          <Check className="h-3 w-3 text-blue-500" />
                        </div>
                        <span className="text-muted-foreground">Establish strategic Bitcoin reserves as insurance against currency wars</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-24 bg-gradient-to-r from-blue-950/20 via-indigo-950/20 to-blue-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-6 px-4 py-1.5 bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                  <Shield className="mr-2 h-4 w-4" />
                  <span className="text-base">Protect Your Future</span>
                </Badge>
                
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Secure Your Financial Sovereignty</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  In an increasingly uncertain global financial landscape, Bitcoin provides a neutral, 
                  borderless shield against monetary manipulation, sanctions, and currency devaluation.
                </p>
              </div>
              
              <div className="bg-background rounded-lg border shadow-lg p-8 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-blue-500/10 p-4 rounded-full mb-4">
                      <BookOpen className="h-8 w-8 text-blue-500" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Learn</h3>
                    <p className="text-sm text-muted-foreground">
                      Understand how Bitcoin works and the fundamental principles that make it a powerful geopolitical shield
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-blue-500/10 p-4 rounded-full mb-4">
                      <Wallet className="h-8 w-8 text-blue-500" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Acquire</h3>
                    <p className="text-sm text-muted-foreground">
                      Start building your Bitcoin position with a prudent allocation based on your personal risk profile
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-blue-500/10 p-4 rounded-full mb-4">
                      <Lock className="h-8 w-8 text-blue-500" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Secure</h3>
                    <p className="text-sm text-muted-foreground">
                      Take full control of your Bitcoin through proper self-custody practices for long-term protection
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <Link to="/learn-bitcoin">
                    <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Start Learning
                    </Button>
                  </Link>
                  <Link to="/buy-bitcoin">
                    <Button variant="outline" size="lg" className="border-blue-500 text-blue-500 hover:bg-blue-500/10">
                      <Shield className="mr-2 h-4 w-4" />
                      Build Your Shield
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

export default GeopoliticalShield; 