import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BitcoinLogoIcon from '../components/BitcoinLogoIcon';
import { 
  Clock, 
  Star, 
  BarChart, 
  TrendingDown,
  TrendingUp,
  Timer,
  Hourglass,
  Building,
  Landmark,
  Home,
  BookOpen,
  AreaChart,
  PiggyBank,
  Flame,
  X,
  Check,
  Orbit,
  ClipboardList,
  ChevronDown,
  ArrowRight,
  History,
  Wallet,
  Banknote,
  GanttChart,
  LineChart,
  Globe,
  Network,
  Shield,
  Code
} from 'lucide-react';
import { Link } from 'react-router-dom';

const TimeTravelersPortfolio = () => {
  // For tracking scroll position for animations
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);
  
  // For the year counter
  const [currentYear, setCurrentYear] = useState(2024);
  const [futureYear, setFutureYear] = useState(2024);
  
  // Start the year animation after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setFutureYear(prev => {
          if (prev >= 2124) {
            clearInterval(interval);
            return 2124;
          }
          return prev + 1;
        });
      }, 50);
      
      return () => clearInterval(interval);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Portfolio data over time
  const portfolioData = {
    fiatCurrencies: [
      { year: 2024, status: "Widely Used", value: 100, details: "USD, EUR, JPY, etc. serve as global reserve currencies" },
      { year: 2054, status: "Declining", value: 70, details: "Digital currencies gaining market share, devaluation accelerating" },
      { year: 2084, status: "Mostly Replaced", value: 30, details: "Few physical notes in museums, most replaced by CBDCs and alternatives" },
      { year: 2124, status: "Historical Artifacts", value: 5, details: "Paper currencies preserved as collectibles only, most defunct" }
    ],
    realEstate: [
      { year: 2024, status: "Fundamental Asset", value: 100, details: "Primary store of wealth for middle class" },
      { year: 2054, status: "Changing Landscape", value: 110, details: "Climate migration shifts valuable locations, virtual ownership increases" },
      { year: 2084, status: "Transformed Market", value: 125, details: "Property tokenization standard, climate-resilient areas premium" },
      { year: 2124, status: "Enduring Value", value: 140, details: "Physical prime locations remain valuable, ownership structures evolved" }
    ],
    stocks: [
      { year: 2024, status: "Market Dominance", value: 100, details: "Major exchanges and companies define global markets" },
      { year: 2054, status: "Major Turnover", value: 110, details: "80% of 2024's top companies no longer exist, replaced by new industries" },
      { year: 2084, status: "Index Survival", value: 130, details: "Individual stocks highly volatile, indexes remain as diversified exposure" },
      { year: 2124, status: "Transformed Market", value: 150, details: "95% of 2024 companies gone, indexes completely reconstituted" }
    ],
    gold: [
      { year: 2024, status: "Traditional Safe Haven", value: 100, details: "Central banks and investors hold as inflation hedge" },
      { year: 2054, status: "Stable Store of Value", value: 105, details: "Maintains purchasing power through economic cycles" },
      { year: 2084, status: "Consistent Holding", value: 115, details: "Still valued for scarcity and industrial applications" },
      { year: 2124, status: "Timeless Asset", value: 125, details: "Multi-millennial track record intact, stable purchasing power" }
    ],
    bitcoin: [
      { year: 2024, status: "Early Adoption", value: 100, details: "Volatile asset held by small percentage of global population" },
      { year: 2054, status: "Monetary Recognition", value: 500, details: "Widely recognized as digital gold, volatility decreased" },
      { year: 2084, status: "Global Reserve Asset", value: 2000, details: "Part of sovereign reserves, unit of account for international trade" },
      { year: 2124, status: "Monetary Foundation", value: 5000, details: "Primary global value settlement layer, near-universal adoption" }
    ]
  };
  
  // Historical examples of defunct currencies
  const extinctCurrencies = [
    {
      name: "Continental Dollar",
      period: "1775-1785",
      decline: "Hyperinflation reached 47% per month by 1779",
      endNote: "Became worthless within a decade ('not worth a Continental')"
    },
    {
      name: "German Papiermark",
      period: "1914-1923",
      decline: "Hyperinflation peak of 29,500% per month in October 1923",
      endNote: "1 trillion marks per dollar at final conversion to Rentenmark"
    },
    {
      name: "Yugoslav Dinar",
      period: "1990-1994",
      decline: "Hyperinflation peak of 313,000,000% per month in January 1994",
      endNote: "Required denomination of 500 billion dinar notes before replacement"
    },
    {
      name: "Zimbabwe Dollar",
      period: "1980-2009",
      decline: "Hyperinflation peak of 79.6 billion percent per month in November 2008",
      endNote: "Final 100 trillion dollar notes worth about US$0.40 when abandoned"
    }
  ];
  
  // Bitcoin design elements for longevity
  const bitcoinLongevityPillars = [
    {
      title: "Decentralized Network",
      description: "No single point of failure, with nodes distributed globally across thousands of independent operators",
      icon: Network,
      futureRelevance: "Resilient against geopolitical conflicts, regulatory changes, and corporate failures"
    },
    {
      title: "Fixed Supply Cap",
      description: "Maximum of 21 million bitcoins can ever exist, creating digital scarcity that cannot be inflated away",
      icon: GanttChart,
      futureRelevance: "Protection against monetary debasement that has ended all fiat currencies throughout history"
    },
    {
      title: "Proof-of-Work Consensus",
      description: "Energy-backed security model ensures the network cannot be corrupted without massive resource expenditure",
      icon: Shield,
      futureRelevance: "Maintains security regardless of political or corporate interests over centuries"
    },
    {
      title: "Open-Source Protocol",
      description: "Transparent code allows public verification and ensures no hidden vulnerabilities or backdoors",
      icon: Code,
      futureRelevance: "Adaptable to technological changes while maintaining core principles and backwards compatibility"
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
            <Badge className="mb-6 px-3 py-1 bg-indigo-500/10 text-indigo-500 hover:bg-indigo-500/20 transition-colors">
              <Clock className="mr-1 h-3.5 w-3.5" />
              <span>Financial Future Sight</span>
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              The Time Traveler's Portfolio
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium mb-8 text-muted-foreground">
              A journey through the next century of global finance reveals which assets survive
              the test of time—and which ones disappear completely
            </h2>
          </motion.div>
          
          {/* Year Counter Visualization */}
          <div className="mt-16 w-full max-w-4xl mx-auto">
            <Card className="border-indigo-500/20 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-950/20 to-background p-8 md:p-10">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center bg-indigo-500/10 p-3 rounded-full mb-4">
                    <Hourglass className="h-10 w-10 text-indigo-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Financial Time Travel</h3>
                  <p className="text-muted-foreground">
                    What happens to your investments when viewed across a century?
                  </p>
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <div className="text-7xl md:text-8xl font-bold font-mono mb-8 flex items-center justify-center space-x-8">
                    <div className="flex flex-col items-center">
                      <span className="text-sm text-muted-foreground mb-2">Today</span>
                      <span className="bg-indigo-500/5 border border-indigo-500/20 rounded-lg px-4 py-2">{currentYear}</span>
                    </div>
                    
                    <div className="text-2xl text-muted-foreground">→</div>
                    
                    <div className="flex flex-col items-center">
                      <span className="text-sm text-muted-foreground mb-2">Future</span>
                      <motion.span 
                        className="bg-indigo-500/5 border border-indigo-500/20 rounded-lg px-4 py-2"
                        animate={{ scale: futureYear === 2124 ? [1, 1.05, 1] : 1 }}
                        transition={{ duration: 0.5, repeat: futureYear === 2124 ? 3 : 0 }}
                      >
                        {futureYear}
                      </motion.span>
                    </div>
                  </div>
                  
                  <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
                    Imagine being able to see 100 years into the future of various assets. 
                    Which survive? Which thrive? And which ones disappear entirely?
                  </p>
                </div>
                
                <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="p-4 rounded-lg bg-indigo-500/5 border border-indigo-500/20 flex flex-col items-center">
                    <Banknote className="h-8 w-8 text-indigo-500 mb-2" />
                    <h4 className="font-bold text-sm">Fiat Currencies</h4>
                    <span className={`text-xs mt-1 ${futureYear >= 2084 ? 'text-red-500' : 'text-muted-foreground'}`}>
                      {futureYear < 2054 ? 'In Use' : 
                       futureYear < 2084 ? 'Declining' : 
                       futureYear < 2124 ? 'Mostly Gone' : 
                       'Historical Only'}
                    </span>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-indigo-500/5 border border-indigo-500/20 flex flex-col items-center">
                    <Home className="h-8 w-8 text-indigo-500 mb-2" />
                    <h4 className="font-bold text-sm">Real Estate</h4>
                    <span className="text-xs mt-1 text-green-500">
                      {futureYear < 2054 ? 'Fundamental' : 
                       futureYear < 2084 ? 'Transformed' : 
                       futureYear < 2124 ? 'Evolved' : 
                       'Still Valuable'}
                    </span>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-indigo-500/5 border border-indigo-500/20 flex flex-col items-center">
                    <TrendingUp className="h-8 w-8 text-indigo-500 mb-2" />
                    <h4 className="font-bold text-sm">Stock Market</h4>
                    <span className={`text-xs mt-1 ${futureYear >= 2084 ? 'text-amber-500' : 'text-green-500'}`}>
                      {futureYear < 2054 ? 'Growing' : 
                       futureYear < 2084 ? 'Churning' : 
                       futureYear < 2124 ? 'Transformed' : 
                       '95% Turnover'}
                    </span>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-indigo-500/5 border border-indigo-500/20 flex flex-col items-center">
                    <Star className="h-8 w-8 text-indigo-500 mb-2" />
                    <h4 className="font-bold text-sm">Gold</h4>
                    <span className="text-xs mt-1 text-amber-500">
                      {futureYear < 2054 ? 'Stable' : 
                       futureYear < 2084 ? 'Consistent' : 
                       futureYear < 2124 ? 'Enduring' : 
                       'Still Valued'}
                    </span>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-indigo-500/5 border border-indigo-500/20 flex flex-col items-center">
                    <BitcoinLogoIcon className="h-8 w-8 text-amber-500 mb-2" />
                    <h4 className="font-bold text-sm">Bitcoin</h4>
                    <span className={`text-xs mt-1 ${futureYear >= 2054 ? 'text-green-500' : 'text-amber-500'}`}>
                      {futureYear < 2054 ? 'Early Days' : 
                       futureYear < 2084 ? 'Recognized' : 
                       futureYear < 2124 ? 'Reserve Asset' : 
                       'Foundation'}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="mt-12">
            <div className="inline-block animate-bounce">
              <ChevronDown className="h-8 w-8 text-indigo-500" />
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-full h-full">
              <svg className="w-full h-full opacity-[0.02]" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="timePattern" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="5" cy="5" r="0.5" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#timePattern)" />
              </svg>
            </div>
          </div>
        </section>
        
        {/* Discovery Narrative Section */}
        <section className="py-24 bg-card" ref={targetRef}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                style={{ opacity, scale }}
                className="text-center mb-16"
              >
                <Badge className="mb-4 px-3 py-1 bg-indigo-500 text-white hover:bg-indigo-600 transition-colors">
                  <History className="mr-1 h-3.5 w-3.5" />
                  <span>The Discovery</span>
                </Badge>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">A Window Into Financial Futures</h2>
                <p className="text-lg text-muted-foreground">
                  Professor Elena Morgan, a renowned economist, discovers an unprecedented way 
                  to project the true longevity of financial systems
                </p>
              </motion.div>
              
              <div className="bg-background rounded-lg border p-6 md:p-8 shadow-sm mb-12">
                <div className="border-l-4 border-indigo-500 pl-4 mb-6 italic">
                  <p className="text-lg">
                    "I expected to see economic cycles, booms and busts, but what stunned me was
                    how many of today's 'permanent' financial institutions simply ceased to exist. 
                    The data showed an unmistakable pattern: centralized systems collapsed, 
                    while truly decentralized networks flourished. It forced me to reconsider 
                    everything I thought I knew about financial durability."
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">— Professor Elena Morgan, Financial Futurist</p>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  Professor Morgan's groundbreaking work in longitudinal financial system analysis 
                  allowed her to extrapolate the survival rates of various asset classes over unprecedented 
                  timeframes, combining historical patterns with network theory and complex adaptive systems.
                </p>
                
                <p className="text-muted-foreground">
                  What she found challenged conventional wisdom: the average national currency 
                  lasted just 50-75 years before a regime change, hyperinflation, or technological obsolescence 
                  rendered it worthless. Even major reserve currencies showed signs of terminal decline 
                  within a century, while Bitcoin's decentralized architecture demonstrated remarkable resilience.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-b from-background to-red-950/5">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-red-500/10 p-3 rounded-full mr-4">
                        <Flame className="h-6 w-6 text-red-500" />
                      </div>
                      <h3 className="text-xl font-bold">The Great Devaluation</h3>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      By 2060, most major fiat currencies had lost over 90% of their purchasing power, 
                      and by 2090, even the US Dollar and Euro had been replaced by new currencies 
                      after unsustainable debt and digital alternatives made them obsolete.
                    </p>
                    
                    <div className="bg-red-500/5 p-3 rounded border border-red-500/20 text-sm">
                      <span className="font-medium">Key Finding:</span>
                      <p className="text-xs mt-1 text-muted-foreground">
                        No government-issued currency in history has survived a 100-year period without 
                        significant devaluation or complete collapse.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-b from-background to-amber-950/5">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-amber-500/10 p-3 rounded-full mr-4">
                        <Timer className="h-6 w-6 text-amber-500" />
                      </div>
                      <h3 className="text-xl font-bold">The Survivors</h3>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      Assets with true scarcity and decentralization showed the most resilience. 
                      Prime real estate, physical gold, and Bitcoin emerged as the century's 
                      enduring stores of value. Stock indexes survived through constant reconstitution.
                    </p>
                    
                    <div className="bg-amber-500/5 p-3 rounded border border-amber-500/20 text-sm">
                      <span className="font-medium">Key Finding:</span>
                      <p className="text-xs mt-1 text-muted-foreground">
                        Historically constant assets (gold, land) maintained value while Bitcoin joined their ranks through digital scarcity and decentralization.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-b from-background to-green-950/5">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-green-500/10 p-3 rounded-full mr-4">
                        <LineChart className="h-6 w-6 text-green-500" />
                      </div>
                      <h3 className="text-xl font-bold">The Optimization</h3>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      Based on the findings, the optimal century-spanning portfolio weighted assets 
                      by their durability rather than short-term returns. This approach sacrificed 
                      some immediate gains but ensured preservation through multiple crises.
                    </p>
                    
                    <div className="bg-green-500/5 p-3 rounded border border-green-500/20 text-sm">
                      <span className="font-medium">Key Finding:</span>
                      <p className="text-xs mt-1 text-muted-foreground">
                        When timeframes extend to decades or centuries, optimization shifts dramatically toward assets with self-sovereign durability.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Historical Extinct Currencies Section */}
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
                <Badge className="mb-4 px-3 py-1 bg-red-500 text-white hover:bg-red-600 transition-colors">
                  <History className="mr-1 h-3.5 w-3.5" />
                  <span>Historical Context</span>
                </Badge>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Currencies That Vanished</h2>
                <p className="text-lg text-muted-foreground">
                  History is littered with once-dominant currencies that are now worthless relics—
                  victims of the inevitable consequences of centralization and unchecked money creation
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 gap-6 mb-12">
                {extinctCurrencies.map((currency, index) => (
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    key={index}
                    className="bg-card border rounded-lg overflow-hidden shadow-sm"
                  >
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="md:w-1/4">
                          <h3 className="text-xl font-bold text-red-500">{currency.name}</h3>
                          <p className="text-sm text-muted-foreground">{currency.period}</p>
                        </div>
                        
                        <div className="md:w-2/4">
                          <div className="mb-2">
                            <Badge variant="outline" className="bg-red-500/10 text-red-500 mb-2">
                              <TrendingDown className="mr-1 h-3.5 w-3.5" />
                              <span>Decline</span>
                            </Badge>
                            <p className="text-sm text-muted-foreground">{currency.decline}</p>
                          </div>
                        </div>
                        
                        <div className="md:w-1/4">
                          <div className="bg-red-500/5 p-3 rounded border border-red-500/20">
                            <h4 className="text-sm font-medium mb-1">Final Outcome:</h4>
                            <p className="text-xs text-muted-foreground">{currency.endNote}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <Card className="border-indigo-500/20 bg-indigo-950/5">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-indigo-500/10 p-3 rounded-full mr-4">
                      <Orbit className="h-6 w-6 text-indigo-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">The 100-Year Currency Test</h3>
                      <p className="text-sm text-muted-foreground">What percentage of currencies survive a century?</p>
                    </div>
                  </div>
                  
                  <div className="bg-card p-4 rounded-lg border mb-6">
                    <p className="text-sm text-muted-foreground">
                      Professor Morgan's research revealed a startling pattern: of the 775 fiat currencies 
                      created since 1700, only 20% lasted longer than 50 years, and less than 4% survived 
                      a full century. Even then, survivors lost 99%+ of their purchasing power.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-base font-bold mb-2">Why Fiat Currencies Fail:</h4>
                      <ul className="space-y-2">
                        <li className="text-sm flex items-start">
                          <X className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Unlimited supply allows for continuous debasement</span>
                        </li>
                        <li className="text-sm flex items-start">
                          <X className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Political control leads to short-term manipulation</span>
                        </li>
                        <li className="text-sm flex items-start">
                          <X className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Debt-based creation requires exponential growth</span>
                        </li>
                        <li className="text-sm flex items-start">
                          <X className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Government regime changes invalidate previous currency</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-base font-bold mb-2">Why Bitcoin Is Different:</h4>
                      <ul className="space-y-2">
                        <li className="text-sm flex items-start">
                          <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Fixed supply of 21 million ensures permanent scarcity</span>
                        </li>
                        <li className="text-sm flex items-start">
                          <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Decentralized control prevents political manipulation</span>
                        </li>
                        <li className="text-sm flex items-start">
                          <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Self-sustaining security model through mining incentives</span>
                        </li>
                        <li className="text-sm flex items-start">
                          <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Apolitical design transcends government regimes</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Dollar Devaluation Section */}
        <section className="py-24 bg-red-950/5 border-y border-red-500/10">
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
                  <TrendingDown className="mr-1 h-3.5 w-3.5" />
                  <span>The Great Debasement</span>
                </Badge>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What Happened to the Dollar?</h2>
                <p className="text-lg text-muted-foreground">
                  Even the "strongest" fiat currency in the world has lost over 96% of its purchasing power 
                  in just the last century—with a critical inflection point in 1971
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-6">
                        <div className="bg-amber-500/10 p-3 rounded-full mr-4">
                          <Hourglass className="h-6 w-6 text-amber-500" />
                        </div>
                        <h3 className="text-xl font-bold">A Century of Decline</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <p className="text-muted-foreground text-sm">
                          In 1913, with the creation of the Federal Reserve, the dollar began its long, steady decline. 
                          What cost $1 in 1913 would cost over $29 by 2024—a loss of more than 96% of its purchasing power.
                        </p>
                        
                        <div className="relative h-52 bg-card rounded-lg border overflow-hidden">
                          {/* Dollar Purchasing Power Chart */}
                          <svg viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="dollarDecline" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="#ef4444" stopOpacity="0.1" />
                              </linearGradient>
                            </defs>
                            
                            {/* Background grid */}
                            <line x1="0" y1="20" x2="100" y2="20" stroke="#94a3b8" strokeWidth="0.2" />
                            <line x1="0" y1="40" x2="100" y2="40" stroke="#94a3b8" strokeWidth="0.2" />
                            <line x1="0" y1="60" x2="100" y2="60" stroke="#94a3b8" strokeWidth="0.2" />
                            <line x1="0" y1="80" x2="100" y2="80" stroke="#94a3b8" strokeWidth="0.2" />
                            
                            <line x1="25" y1="0" x2="25" y2="100" stroke="#94a3b8" strokeWidth="0.2" />
                            <line x1="50" y1="0" x2="50" y2="100" stroke="#94a3b8" strokeWidth="0.2" />
                            <line x1="75" y1="0" x2="75" y2="100" stroke="#94a3b8" strokeWidth="0.2" />
                            
                            {/* Dollar Purchasing Power */}
                            <path 
                              d="M0,0 L0,0 L10,5 L20,7 L30,10 L40,15 L50,20 L58,40 L66,65 L75,80 L83,85 L92,90 L100,95 L100,100 L0,100 Z" 
                              fill="url(#dollarDecline)" 
                            />
                            <path 
                              d="M0,0 L10,5 L20,7 L30,10 L40,15 L50,20 L58,40 L66,65 L75,80 L83,85 L92,90 L100,95" 
                              fill="none" 
                              stroke="#ef4444" 
                              strokeWidth="0.8" 
                            />
                            
                            {/* 1971 Marker */}
                            <line x1="58" y1="0" x2="58" y2="100" stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="2,1" />
                            <text x="58" y="97" textAnchor="middle" fill="#f59e0b" fontSize="3">1971</text>
                          </svg>
                          
                          <div className="absolute top-2 left-2 text-xs text-muted-foreground">
                            <span className="font-bold">Dollar Purchasing Power</span>
                            <div className="flex items-center mt-1">
                              <div className="w-2 h-2 rounded-full bg-red-500 mr-1"></div>
                              <span>Purchasing power relative to 1913 = 100%</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div className="bg-red-500/5 p-2 rounded border border-red-500/20">
                            <h4 className="text-xs font-bold mb-1">1913-1933</h4>
                            <p className="text-xs text-muted-foreground">-21% Value</p>
                          </div>
                          <div className="bg-red-500/5 p-2 rounded border border-red-500/20">
                            <h4 className="text-xs font-bold mb-1">1933-1971</h4>
                            <p className="text-xs text-muted-foreground">-58% Value</p>
                          </div>
                          <div className="bg-red-500/10 p-2 rounded border border-red-500/20">
                            <h4 className="text-xs font-bold mb-1">1971-2024</h4>
                            <p className="text-xs text-muted-foreground">-84% Value</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-6">
                        <div className="bg-red-500/10 p-3 rounded-full mr-4">
                          <Clock className="h-6 w-6 text-red-500" />
                        </div>
                        <h3 className="text-xl font-bold">WTF Happened in 1971?</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="border-l-4 border-amber-500 pl-4 italic">
                          <p className="text-sm">
                            "I don't believe we shall ever have a good money again before we take the thing out of the hands of government, that is, we can't take it violently out of the hands of government, all we can do is by some sly roundabout way introduce something that they can't stop."
                          </p>
                          <p className="mt-1 text-xs text-muted-foreground">— F.A. Hayek, 1984</p>
                        </div>
                        
                        <p className="text-muted-foreground text-sm">
                          On August 15, 1971, President Nixon announced that the United States would no longer convert dollars to gold at a fixed value, effectively ending the Bretton Woods system and severing the dollar's last tie to physical scarcity.
                        </p>
                        
                        <div className="bg-red-500/5 p-4 rounded-lg border border-red-500/20">
                          <h4 className="text-sm font-medium mb-2">The 1971 Divergence:</h4>
                          <ul className="space-y-2">
                            <li className="text-xs flex items-start">
                              <X className="h-3 w-3 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">Productivity continued rising while wages stagnated</span>
                            </li>
                            <li className="text-xs flex items-start">
                              <X className="h-3 w-3 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">Income inequality began expanding dramatically</span>
                            </li>
                            <li className="text-xs flex items-start">
                              <X className="h-3 w-3 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">Money supply growth accelerated exponentially</span>
                            </li>
                            <li className="text-xs flex items-start">
                              <X className="h-3 w-3 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">National debt began climbing at previously unimaginable rates</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="relative h-36 bg-card rounded-lg border overflow-hidden">
                          {/* Post-1971 Charts */}
                          <svg viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="none">
                            {/* Grid */}
                            <line x1="0" y1="50" x2="100" y2="50" stroke="#94a3b8" strokeWidth="0.2" />
                            <line x1="58" y1="0" x2="58" y2="100" stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="2,1" />
                            <text x="58" y="97" textAnchor="middle" fill="#f59e0b" fontSize="3">1971</text>
                            
                            {/* Productivity Line */}
                            <path 
                              d="M0,90 L10,88 L20,85 L30,83 L40,80 L50,75 L58,70 L66,60 L75,50 L83,35 L92,20 L100,10" 
                              fill="none" 
                              stroke="#3b82f6" 
                              strokeWidth="1" 
                            />
                            
                            {/* Wages Line */}
                            <path 
                              d="M0,90 L10,88 L20,85 L30,83 L40,80 L50,75 L58,70 L66,72 L75,74 L83,72 L92,70 L100,68" 
                              fill="none" 
                              stroke="#ef4444" 
                              strokeWidth="1" 
                            />
                          </svg>
                          
                          <div className="absolute top-2 left-2 text-xs text-muted-foreground">
                            <div className="flex items-center">
                              <div className="w-2 h-2 rounded-full bg-blue-500 mr-1"></div>
                              <span>Productivity</span>
                            </div>
                            <div className="flex items-center mt-1">
                              <div className="w-2 h-2 rounded-full bg-red-500 mr-1"></div>
                              <span>Real Wages</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
              
              <Card className="border-red-500/20 mb-4">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <h4 className="text-base font-bold text-center mb-3">$1 in 1913 would buy:</h4>
                      <div className="bg-card rounded-lg border p-4 text-center">
                        <p className="text-3xl font-bold text-amber-500">24 hours</p>
                        <p className="text-xs text-muted-foreground">of average labor</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-base font-bold text-center mb-3">$1 in 1971 would buy:</h4>
                      <div className="bg-card rounded-lg border p-4 text-center">
                        <p className="text-3xl font-bold text-amber-500">6 hours</p>
                        <p className="text-xs text-muted-foreground">of average labor</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-base font-bold text-center mb-3">$1 in 2024 would buy:</h4>
                      <div className="bg-card rounded-lg border p-4 text-center">
                        <p className="text-3xl font-bold text-amber-500">3 minutes</p>
                        <p className="text-xs text-muted-foreground">of average labor</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-center text-sm text-muted-foreground">
                    Professor Morgan noted that this debasement wasn't accidental—it was a deliberate policy choice 
                    to allow governments to spend beyond tax revenues while transferring wealth from savers to borrowers.
                  </p>
                </CardContent>
              </Card>
              
              <div className="text-center">
                <Link to="https://wtfhappenedin1971.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="border-red-500 text-red-500 hover:bg-red-500/10">
                    <ArrowRight className="mr-2 h-3.5 w-3.5" />
                    Explore More Economic Charts from 1971
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Bitcoin Longevity Pillars Section */}
        <section className="py-24 bg-amber-950/5 border-y border-amber-500/10">
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
                  <BitcoinLogoIcon className="mr-1 h-3.5 w-3.5" />
                  <span>Designed for Permanence</span>
                </Badge>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Bitcoin's Longevity Pillars</h2>
                <p className="text-lg text-muted-foreground">
                  Unlike temporary financial instruments, Bitcoin was designed from the ground up 
                  for long-term survival through multiple centuries
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {bitcoinLongevityPillars.map((pillar, index) => {
                  const Icon = pillar.icon;
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      key={index}
                    >
                      <Card className="h-full border-amber-500/20">
                        <CardContent className="p-6">
                          <div className="flex items-start mb-6">
                            <div className="bg-amber-500/10 p-3 rounded-full mr-4 flex-shrink-0">
                              <Icon className="h-6 w-6 text-amber-500" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold mb-1">{pillar.title}</h3>
                              <p className="text-sm text-muted-foreground">{pillar.description}</p>
                            </div>
                          </div>
                          
                          <div className="bg-amber-500/5 p-4 rounded-md border border-amber-500/20">
                            <h4 className="text-sm font-medium mb-2">Century-Scale Relevance:</h4>
                            <p className="text-xs text-muted-foreground">{pillar.futureRelevance}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
              
              <div className="mt-12 bg-card rounded-lg border p-6 md:p-8 shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="bg-amber-500/10 p-3 rounded-full mr-4">
                    <ClipboardList className="h-6 w-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">The Lindy Effect</h3>
                    <p className="text-sm text-muted-foreground">Why Bitcoin gets stronger with time</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  The Lindy Effect states that the future life expectancy of non-perishable things like technology 
                  is proportional to their current age. Every additional year Bitcoin survives 
                  increases its expected future lifespan—the opposite trajectory of fiat currencies, 
                  which become more fragile with age as debt accumulates.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-indigo-500/5 p-4 rounded-lg border border-indigo-500/20">
                    <h4 className="text-sm font-bold mb-2">Current Age</h4>
                    <p className="text-2xl font-bold">{new Date().getFullYear() - 2009} Years</p>
                    <p className="text-xs text-muted-foreground mt-1">Since January 3, 2009</p>
                  </div>
                  
                  <div className="bg-indigo-500/5 p-4 rounded-lg border border-indigo-500/20">
                    <h4 className="text-sm font-bold mb-2">Attack Attempts</h4>
                    <p className="text-2xl font-bold">400+</p>
                    <p className="text-xs text-muted-foreground mt-1">All unsuccessful</p>
                  </div>
                  
                  <div className="bg-indigo-500/5 p-4 rounded-lg border border-indigo-500/20">
                    <h4 className="text-sm font-bold mb-2">Uptime</h4>
                    <p className="text-2xl font-bold">99.99%</p>
                    <p className="text-xs text-muted-foreground mt-1">Since genesis block</p>
                  </div>
                </div>
                
                <div className="text-sm text-muted-foreground bg-background p-4 rounded-md">
                  <p>
                    <span className="font-medium">Professor Morgan's Analysis: </span>
                    "Bitcoin's probability of surviving 100+ years increases with each passing year. 
                    Having already survived its most vulnerable early period, and with accelerating institutional adoption, 
                    its probability of long-term survival now exceeds that of most national currencies created in the last century."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Time Traveler's Portfolio Section */}
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
                  <Wallet className="mr-1 h-3.5 w-3.5" />
                  <span>Optimal Allocation</span>
                </Badge>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Time Traveler's Portfolio</h2>
                <p className="text-lg text-muted-foreground">
                  With the benefit of seeing 100 years ahead, how would you structure your investments today?
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 gap-8 mb-12">
                <Card className="border-indigo-500/20">
                  <CardContent className="p-0 overflow-hidden">
                    <div className="p-6 md:p-8 border-b">
                      <div className="flex items-center mb-4">
                        <div className="bg-indigo-500/10 p-3 rounded-full mr-4">
                          <PiggyBank className="h-6 w-6 text-indigo-500" />
                        </div>
                        <h3 className="text-xl font-bold">Century-Optimized Portfolio</h3>
                      </div>
                      
                      <p className="text-muted-foreground mb-6">
                        Professor Morgan's century-optimized portfolio prioritizes assets that maintain their value and utility across multiple generations, 
                        focusing on uncorrelated assets that have demonstrated resilience against political and economic regime changes.
                      </p>
                      
                      <div className="relative h-80 mb-6">
                        <div className="absolute inset-0">
                          {/* Portfolio Allocation Chart - Simple representation */}
                          <svg width="100%" height="100%" viewBox="0 0 100 100" className="rounded-md overflow-hidden">
                            <rect x="0" y="0" width="40" height="100" fill="#C084FC" opacity="0.7" />
                            <rect x="40" y="0" width="25" height="100" fill="#FCD34D" opacity="0.7" />
                            <rect x="65" y="0" width="20" height="100" fill="#4ADE80" opacity="0.7" />
                            <rect x="85" y="0" width="10" height="100" fill="#60A5FA" opacity="0.7" />
                            <rect x="95" y="0" width="5" height="100" fill="#F87171" opacity="0.7" />
                            
                            <text x="20" y="50" textAnchor="middle" fill="white" fontWeight="bold" fontSize="5">40%</text>
                            <text x="52.5" y="50" textAnchor="middle" fill="white" fontWeight="bold" fontSize="5">25%</text>
                            <text x="75" y="50" textAnchor="middle" fill="white" fontWeight="bold" fontSize="5">20%</text>
                            <text x="90" y="50" textAnchor="middle" fill="white" fontWeight="bold" fontSize="5">10%</text>
                            <text x="97.5" y="50" textAnchor="middle" fill="white" fontWeight="bold" fontSize="5">5%</text>
                          </svg>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-indigo-500/5 rounded-lg border border-indigo-500/20 p-4">
                          <div className="flex items-center mb-2">
                            <div className="w-3 h-3 bg-purple-400 rounded-full mr-2"></div>
                            <h4 className="font-bold">Bitcoin: 40%</h4>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            The only asset designed specifically for multi-century value preservation,
                            with full digital self-custody and resistance to confiscation.
                          </p>
                        </div>
                        
                        <div className="bg-indigo-500/5 rounded-lg border border-indigo-500/20 p-4">
                          <div className="flex items-center mb-2">
                            <div className="w-3 h-3 bg-amber-400 rounded-full mr-2"></div>
                            <h4 className="font-bold">Gold: 25%</h4>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Multi-millennial history of preserving value through civilizational changes
                            and economic regime transitions.
                          </p>
                        </div>
                        
                        <div className="bg-indigo-500/5 rounded-lg border border-indigo-500/20 p-4">
                          <div className="flex items-center mb-2">
                            <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                            <h4 className="font-bold">Productive Land: 20%</h4>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Climate-resilient properties with productive capacity, water rights and 
                            adaptability to environmental changes.
                          </p>
                        </div>
                        
                        <div className="bg-indigo-500/5 rounded-lg border border-indigo-500/20 p-4">
                          <div className="flex items-center mb-2">
                            <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                            <h4 className="font-bold">Broad Market Indexes: 10%</h4>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Globally diversified exposure to human productivity and innovation,
                            but with awareness of high company turnover rates.
                          </p>
                        </div>
                        
                        <div className="bg-indigo-500/5 rounded-lg border border-indigo-500/20 p-4 md:col-span-2">
                          <div className="flex items-center mb-2">
                            <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                            <h4 className="font-bold">Cash & Equivalents: 5%</h4>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Minimal allocation for immediate needs only, recognizing the historical
                            certainty of long-term devaluation and potential for complete loss.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-indigo-950/5 p-6 md:p-8">
                      <div className="flex items-center mb-4">
                        <div className="bg-indigo-500/10 p-2 rounded-full mr-3">
                          <BookOpen className="h-5 w-5 text-indigo-500" />
                        </div>
                        <h3 className="text-lg font-bold">Professor Morgan's Journal Entry, 2124</h3>
                      </div>
                      
                      <div className="bg-card rounded-lg p-4 border italic text-sm">
                        <p>
                          "Looking back from 2124, it seems obvious now. The signs were there for anyone who cared to see them.
                          Fiat currencies had never survived a century without massive devaluation or replacement. Bitcoin's 
                          antifragile design allowed it to strengthen with each passing decade.
                        </p>
                        <p className="mt-2">
                          Those who recognized this reality early were able to preserve and grow wealth across generations, 
                          while those who clung to traditional monetary instruments watched their purchasing power erode to nothing.
                          The transition wasn't smooth or immediate, but it was inevitable."
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Call to Action */}
              <div className="mt-16 bg-gradient-to-r from-indigo-950/20 via-amber-950/20 to-indigo-950/20 rounded-lg p-8 border border-amber-500/20 text-center">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Position Your Portfolio for the Next Century</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    History has shown that most currencies eventually disappear. Bitcoin is designed to survive.
                    Are you allocating for the next month, or the next hundred years?
                  </p>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <Link to="/learn-bitcoin">
                    <Button variant="default" size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Learn About Bitcoin
                    </Button>
                  </Link>
                  <Link to="/buy-bitcoin">
                    <Button variant="outline" size="lg" className="border-amber-500 text-amber-500 hover:bg-amber-500/10">
                      <BitcoinLogoIcon className="mr-2 h-4 w-4 text-amber-500" />
                      Get Started With Bitcoin
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

export default TimeTravelersPortfolio; 