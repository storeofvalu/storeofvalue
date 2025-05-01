import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BitcoinLogoIcon from '../components/BitcoinLogoIcon';
import { 
  Building2, 
  Clock, 
  ArrowDownUp,
  LineChart, 
  Lock, 
  Eye, 
  Wallet, 
  Building,
  Users,
  User,
  ShieldAlert,
  Scale,
  Banknote,
  TimerOff,
  Search,
  Check,
  X,
  LucideIcon,
  ArrowRight,
  BookOpen,
  BadgeAlert,
  RefreshCcw,
  BarChart4
} from 'lucide-react';
import { Link } from 'react-router-dom';

const LastFreeMarket = () => {
  // For tracking scroll position for animations
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);
  
  // State for the time display and block height
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentBlock, setCurrentBlock] = useState<number | null>(null);
  
  // Update time every second and fetch block height
  React.useEffect(() => {
    // Fetch current block height
    const fetchBlockHeight = async () => {
      try {
        const response = await fetch('https://blockchain.info/q/getblockcount');
        const blockHeight = await response.text();
        setCurrentBlock(parseInt(blockHeight));
      } catch (error) {
        console.error('Failed to fetch block height:', error);
      }
    };
    
    // Initial fetch
    fetchBlockHeight();
    
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    // Update block height every minute
    const blockTimer = setInterval(() => {
      fetchBlockHeight();
    }, 60000);
    
    return () => {
      clearInterval(timer);
      clearInterval(blockTimer);
    };
  }, []);
  
  // Market comparison data
  const marketComparison = [
    {
      name: "Traditional Markets",
      hours: "9:30 AM - 4:00 PM, Mon-Fri",
      closedHours: "75% of the time",
      transparent: false,
      manipulation: "Common",
      bailouts: "Yes (2008, 2020, 2023)",
      icon: <Building2 className="h-6 w-6 text-red-500" />
    },
    {
      name: "Bitcoin",
      hours: "24/7/365",
      closedHours: "Never (100% uptime since 2009)",
      transparent: true,
      manipulation: "Nearly impossible",
      bailouts: "Never (no counterparty risk)",
      icon: <BitcoinLogoIcon className="h-6 w-6 text-amber-500" />
    }
  ];
  
  // Trader profiles
  const traderStory = [
    {
      name: "Alex Chen",
      role: "Professional Trader",
      institution: "Former Wall Street, Now Independent",
      experience: "15+ years in financial markets",
      quote: "After years of playing a rigged game, finding Bitcoin was like discovering an entirely new dimension of finance. No circuit breakers, no 'closed for holiday' signs, no backdoor bailouts. Just pure market forces at work, 24/7/365. It's the fairest market I've ever traded in.",
      insights: [
        "I've had trades interrupted by exchange halts and circuit breakers more times than I can count",
        "Witnessed firsthand how big players get privileged information through 'research calls'",
        "Seen markets artificially propped up through central bank intervention",
        "With Bitcoin, I compete on equal footing with everyone else—from basement traders to billionaires"
      ]
    }
  ];
  
  // Key advantages of free markets
  const freeMarketAdvantages = [
    {
      title: "Price Discovery",
      description: "When markets operate freely without manipulation, prices accurately reflect real supply and demand.",
      icon: LineChart,
      bitcoinExample: "Bitcoin's price is determined purely by global buying and selling pressure, not by committee decisions."
    },
    {
      title: "Equal Access",
      description: "All participants can trade under the same rules without preferential treatment.",
      icon: Users,
      bitcoinExample: "Anyone with internet access can trade Bitcoin 24/7, from anywhere in the world."
    },
    {
      title: "Transparent Rules",
      description: "Market rules are clear, consistent, and applied uniformly to all participants.",
      icon: Eye,
      bitcoinExample: "Bitcoin's consensus rules are publicly viewable and cannot be changed without majority support."
    },
    {
      title: "No Backstops",
      description: "Market participants bear their own risks without expectation of bailouts.",
      icon: ShieldAlert,
      bitcoinExample: "Bitcoin operates without a central bank that can print money to rescue failed institutions."
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
            <Badge className="mb-6 px-3 py-1 bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 transition-colors">
              <ArrowDownUp className="mr-1 h-3.5 w-3.5" />
              <span>Pure Market Principles</span>
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              The Last Free Market
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium mb-8 text-muted-foreground">
              How Bitcoin created the world's first truly open, transparent financial market, free from manipulation and never closed for business
            </h2>
          </motion.div>
          
          {/* Market Hours Visualization */}
          <div className="mt-16 w-full max-w-4xl mx-auto">
            <Card className="border-amber-500/20 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-amber-950/20 to-background p-8 md:p-10">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center bg-amber-500/10 p-3 rounded-full mb-4">
                    <Clock className="h-10 w-10 text-amber-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">A Market That Never Sleeps</h3>
                  <p className="text-muted-foreground">
                    While traditional markets close daily, Bitcoin trades 24/7/365 without interruption
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Traditional Market Side */}
                  <div className="border rounded-lg shadow-sm overflow-hidden">
                    <div className="bg-red-500/10 p-4 border-b border-border flex items-center">
                      <Building2 className="h-5 w-5 text-red-500 mr-2" />
                      <h4 className="font-bold">Traditional Markets</h4>
                    </div>
                    
                    <div className="p-6">
                      <div className="mb-4 flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Current Status:</span>
                        <Badge 
                          variant="outline" 
                          className={`px-2 ${isMarketOpen() ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}
                        >
                          {isMarketOpen() ? 'OPEN' : 'CLOSED'}
                        </Badge>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h5 className="text-sm font-medium mb-1">NYSE Trading Hours</h5>
                          <p className="text-sm text-muted-foreground">9:30 AM - 4:00 PM ET, Monday-Friday</p>
                        </div>
                        
                        <div>
                          <h5 className="text-sm font-medium mb-1">Closed For</h5>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <p>• Weekends</p>
                            <p>• Nights</p>
                            <p>• National Holidays</p>
                            <p>• Market-Wide Circuit Breakers</p>
                            <p>• Technical Issues</p>
                          </div>
                        </div>
                        
                        <div className="pt-2">
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-red-500 w-[25%]"></div>
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">
                            <span className="font-medium text-red-500">~75%</span> of the time markets are closed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bitcoin Side */}
                  <div className="border rounded-lg shadow-sm overflow-hidden">
                    <div className="bg-amber-500/10 p-4 border-b border-border flex items-center">
                      <BitcoinLogoIcon className="h-5 w-5 text-amber-500 mr-2" />
                      <h4 className="font-bold">Bitcoin</h4>
                    </div>
                    
                    <div className="p-6">
                      <div className="mb-4 flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Current Status:</span>
                        <Badge variant="outline" className="px-2 bg-green-500/10 text-green-500">
                          ALWAYS OPEN
                        </Badge>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h5 className="text-sm font-medium mb-1">Bitcoin Trading Hours</h5>
                          <p className="text-sm text-muted-foreground">24 hours a day, 7 days a week, 365 days a year</p>
                        </div>
                        
                        <div>
                          <h5 className="text-sm font-medium mb-1">Never Closed For</h5>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <p>• Weekends <X className="inline h-3 w-3 text-green-500 ml-1" /></p>
                            <p>• Nights <X className="inline h-3 w-3 text-green-500 ml-1" /></p>
                            <p>• Holidays <X className="inline h-3 w-3 text-green-500 ml-1" /></p>
                            <p>• Circuit Breakers <X className="inline h-3 w-3 text-green-500 ml-1" /></p>
                            <p>• 100% Uptime Since 2009*</p>
                          </div>
                        </div>
                        
                        <div className="pt-2">
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 w-full"></div>
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">
                            <span className="font-medium text-green-500">100%</span> of the time Bitcoin is tradable
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-xs text-muted-foreground mt-4 text-center">
                  * Bitcoin network has maintained 99.99% uptime since launch, with blocks produced approximately every 10 minutes.
                </div>
                
                <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-4">
                  <div className="bg-amber-500/5 border border-amber-500/20 rounded-lg py-2 px-4">
                    <span className="text-sm text-muted-foreground mr-2">Current Time:</span> 
                    {currentTime.toLocaleTimeString()} {currentTime.toLocaleDateString()}
                  </div>
                  <div className="bg-amber-500/5 border border-amber-500/20 rounded-lg py-2 px-4">
                    <span className="text-sm text-muted-foreground mr-2">Bitcoin Block:</span> 
                    {currentBlock ? `#${currentBlock.toLocaleString()}` : 'Loading...'}
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="mt-12">
            <div className="inline-block animate-bounce">
              <ArrowDownUp className="h-8 w-8 text-amber-500" />
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-full h-full">
              <svg className="w-full h-full opacity-[0.02]" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="marketPattern" width="4" height="4" patternUnits="userSpaceOnUse">
                    <path d="M 0 2 L 4 2" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <path d="M 2 0 L 2 4" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#marketPattern)" />
              </svg>
            </div>
          </div>
        </section>
        
        {/* Market Comparison Section */}
        <section className="py-24 bg-card" ref={targetRef}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                style={{ opacity, scale }}
                className="text-center mb-16"
              >
                <Badge className="mb-4 px-3 py-1 bg-amber-500 text-white hover:bg-amber-600 transition-colors">
                  <Scale className="mr-1 h-3.5 w-3.5" />
                  <span>True Market Freedom</span>
                </Badge>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Not All Markets Are Created Equal</h2>
                <p className="text-lg text-muted-foreground">
                  Traditional financial markets operate with restrictions, interventions, and opacity.
                  Bitcoin represents a return to pure market principles.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-background rounded-lg p-6 border">
                  <div className="flex items-center mb-6">
                    <div className="bg-red-500/10 p-3 rounded-full mr-4">
                      <Building className="h-6 w-6 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold">Traditional Markets</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-red-500/10 text-red-500 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                        <TimerOff className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Limited Trading Hours</h4>
                        <p className="text-sm text-muted-foreground">
                          Stock markets operate ~6.5 hours per day, 5 days a week, excluding holidays. 
                          That's only about 25% of total time.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-red-500/10 text-red-500 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                        <X className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Circuit Breakers & Trading Halts</h4>
                        <p className="text-sm text-muted-foreground">
                          When markets move too quickly, trading is forcibly stopped. 
                          In March 2020, circuit breakers triggered four times in two weeks.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-red-500/10 text-red-500 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                        <ShieldAlert className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Backstopped by Bailouts</h4>
                        <p className="text-sm text-muted-foreground">
                          Failed institutions are repeatedly rescued through government intervention, creating moral hazard and privatizing gains while socializing losses.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-red-500/10 text-red-500 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                        <Search className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Limited Transparency</h4>
                        <p className="text-sm text-muted-foreground">
                          Opaque settlement processes, hidden order books for dark pools, and delayed reporting of large trades create information asymmetry.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-background rounded-lg p-6 border">
                  <div className="flex items-center mb-6">
                    <div className="bg-amber-500/10 p-3 rounded-full mr-4">
                      <BitcoinLogoIcon className="h-6 w-6 text-amber-500" />
                    </div>
                    <h3 className="text-xl font-bold">Bitcoin Market</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-green-500/10 text-green-500 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                        <Clock className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Always Open</h4>
                        <p className="text-sm text-muted-foreground">
                          Bitcoin markets operate 24/7/365, allowing trading during nights, weekends, and holidays. The network has operated continuously since 2009.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-green-500/10 text-green-500 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                        <RefreshCcw className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">No Circuit Breakers</h4>
                        <p className="text-sm text-muted-foreground">
                          Bitcoin's price can move freely in any direction without artificial constraints. 
                          This allows for true price discovery even during extreme market conditions.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-green-500/10 text-green-500 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                        <BarChart4 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">No Bailouts</h4>
                        <p className="text-sm text-muted-foreground">
                          Failed Bitcoin companies (like Mt. Gox, FTX, or Celsius) are allowed to fail, with no central authority able to create new bitcoins to rescue them.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-green-500/10 text-green-500 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                        <Eye className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Complete Transparency</h4>
                        <p className="text-sm text-muted-foreground">
                          Every Bitcoin transaction is recorded on a public ledger visible to anyone. 
                          There are no "dark pools" or hidden trades on the base layer.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Trader Story Section */}
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">A Trader's Journey to the Last Free Market</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  After years trading in traditional markets, Alex discovered the unprecedented 
                  freedom and fairness of Bitcoin.
                </p>
              </motion.div>
              
              <div>
                <Card className="overflow-hidden border-amber-500/20 shadow-md">
                  <div className="md:grid md:grid-cols-3">
                    <div className="bg-amber-500/10 p-8 md:col-span-1 flex flex-col justify-center items-center">
                      <div className="h-20 w-20 bg-amber-500/20 rounded-full flex items-center justify-center mb-4">
                        <User className="h-10 w-10 text-amber-500" />
                      </div>
                      <h3 className="text-xl font-bold text-center">{traderStory[0].name}</h3>
                      <p className="text-sm text-center text-muted-foreground mt-1">{traderStory[0].role}</p>
                      <p className="text-xs text-center text-muted-foreground mt-1">{traderStory[0].experience}</p>
                      <p className="text-xs text-center text-muted-foreground mt-1 italic">{traderStory[0].institution}</p>
                    </div>
                    
                    <CardContent className="p-8 md:col-span-2">
                      <div className="mb-6">
                        <blockquote className="text-lg italic border-l-4 border-amber-500/50 pl-4 py-1">
                          {traderStory[0].quote}
                        </blockquote>
                      </div>
                      
                      <h4 className="text-base font-bold mb-4">What I've Learned:</h4>
                      <div className="space-y-3">
                        {traderStory[0].insights.map((insight, index) => (
                          <div key={index} className="flex items-start">
                            <div className="mt-1 mr-3 text-amber-500">
                              <ArrowRight className="h-4 w-4" />
                            </div>
                            <p className="text-sm text-muted-foreground">{insight}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 p-4 bg-amber-500/5 rounded-lg border border-amber-500/20">
                        <h4 className="text-sm font-bold flex items-center">
                          <BadgeAlert className="h-4 w-4 text-amber-500 mr-2" />
                          The Price of Market Manipulation
                        </h4>
                        <p className="text-xs text-muted-foreground mt-2">
                          During the 2008 financial crisis, short-selling bans were implemented across global markets. These restrictions didn't prevent the crash—they simply obstructed price discovery and delayed the inevitable correction. 
                          Meanwhile, citizens had no choice but to accept the consequences, including taxpayer-funded bailouts that protected irresponsible institutions.
                        </p>
                      </div>
                    </CardContent>
                  </div>
                </Card>
                
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-amber-500/20">
                    <CardContent className="p-6">
                      <div className="flex items-start mb-4">
                        <div className="p-3 rounded-full bg-red-500/10 mr-4">
                          <Building className="h-5 w-5 text-red-500" />
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">Wall Street Experience</h4>
                          <p className="text-sm text-muted-foreground">
                            Limited trading hours, market halts during volatility, opaque settlement, and privileged access for institutional players
                          </p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        <li className="text-sm flex items-start">
                          <X className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Trading halted during most significant market events</span>
                        </li>
                        <li className="text-sm flex items-start">
                          <X className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Large trades often executed in dark pools, hidden from the public</span>
                        </li>
                        <li className="text-sm flex items-start">
                          <X className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Settlement takes T+2 days, creating counterparty risk</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-amber-500/20">
                    <CardContent className="p-6">
                      <div className="flex items-start mb-4">
                        <div className="p-3 rounded-full bg-amber-500/10 mr-4">
                          <BitcoinLogoIcon className="h-5 w-5 text-amber-500" />
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">Bitcoin Experience</h4>
                          <p className="text-sm text-muted-foreground">
                            Always-on trading, no price limits, transparent settlement, and equal access for all market participants
                          </p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        <li className="text-sm flex items-start">
                          <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Trading continues 24/7 through all market conditions</span>
                        </li>
                        <li className="text-sm flex items-start">
                          <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>All transactions visible on a public, immutable ledger</span>
                        </li>
                        <li className="text-sm flex items-start">
                          <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Settlement in ~10 minutes with final, irreversible confirmation</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Separation of Money and State Section */}
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
                  <Scale className="mr-1 h-3.5 w-3.5" />
                  <span>Monetary Independence</span>
                </Badge>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Separation of Money and State</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Just as religious freedom required the separation of church and state,
                  true financial freedom requires the separation of money and state.
                </p>
              </motion.div>
              
              <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8 bg-red-500/5 border-r border-amber-500/10">
                    <div className="flex items-center mb-6">
                      <div className="bg-red-500/10 p-3 rounded-full mr-4">
                        <Banknote className="h-6 w-6 text-red-500" />
                      </div>
                      <h3 className="text-xl font-bold">Government-Controlled Money</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-red-500/10 text-red-500 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                          <X className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Market Intervention</h4>
                          <p className="text-sm text-muted-foreground">
                            Central banks routinely manipulate interest rates and money supply, distorting natural market signals and creating boom-bust cycles.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-red-500/10 text-red-500 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                          <X className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Arbitrary Policy Changes</h4>
                          <p className="text-sm text-muted-foreground">
                            Monetary policies can change based on political pressures, creating uncertainty and preventing long-term economic planning.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-red-500/10 text-red-500 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                          <X className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Value Debasement</h4>
                          <p className="text-sm text-muted-foreground">
                            Unlimited money creation leads to currency devaluation, effectively transferring wealth from savers to borrowers (primarily governments).
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 bg-card p-4 rounded-lg border">
                      <h4 className="text-sm font-bold mb-2">Historical Example: Weimar Republic</h4>
                      <p className="text-xs text-muted-foreground">
                        In the early 1920s, the German government printed massive amounts of currency to pay war reparations, causing hyperinflation that wiped out life savings and destabilized society. By November 1923, a loaf of bread cost 200 billion marks.
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-8 bg-amber-500/5">
                    <div className="flex items-center mb-6">
                      <div className="bg-amber-500/10 p-3 rounded-full mr-4">
                        <BitcoinLogoIcon className="h-6 w-6 text-amber-500" />
                      </div>
                      <h3 className="text-xl font-bold">Neutral Network Money</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-green-500/10 text-green-500 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                          <Check className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Market-Determined Value</h4>
                          <p className="text-sm text-muted-foreground">
                            Bitcoin's price is set by global supply and demand, not by central authorities. This allows for honest price signals and efficient capital allocation.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-green-500/10 text-green-500 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                          <Check className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Predictable Monetary Policy</h4>
                          <p className="text-sm text-muted-foreground">
                            Bitcoin's issuance schedule is fixed and transparent—approximately 900 new bitcoins per day until 2024, then half that amount every four years until all 21 million are issued.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-green-500/10 text-green-500 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                          <Check className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Protection from Debasement</h4>
                          <p className="text-sm text-muted-foreground">
                            With a fixed supply cap of 21 million coins, Bitcoin cannot be devalued through arbitrary creation, preserving purchasing power over time.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 bg-card p-4 rounded-lg border">
                      <h4 className="text-sm font-bold mb-2">Historical Comparison: Free Banking Era</h4>
                      <p className="text-xs text-muted-foreground">
                        In the 19th century Scottish free banking system, multiple private banks issued their own notes backed by gold, with no central bank. This competitive system resulted in a stable monetary environment with few bank failures and sustained economic growth.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 border-t border-amber-500/10 bg-background">
                  <div className="flex items-center">
                    <div className="bg-amber-500/10 p-2 rounded-full mr-3">
                      <BadgeAlert className="h-5 w-5 text-amber-500" />
                    </div>
                    <h3 className="text-lg font-bold">Why Separation Matters</h3>
                  </div>
                  <p className="mt-2 text-muted-foreground">
                    When governments control money, they can finance activities through inflation rather than transparent taxation, bypassing public debate. 
                    Bitcoin reintroduces fiscal discipline by removing this ability, requiring governments to fund activities through legitimate taxation or borrowing, 
                    subject to public scrutiny. This restores honest price signals in markets and prevents the hidden tax of inflation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Free Market Principles */}
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Free Market Principles in Action</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Bitcoin embodies the fundamental principles that make markets efficient, 
                  fair, and productive.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {freeMarketAdvantages.map((advantage, index) => {
                  const Icon = advantage.icon;
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      key={index}
                    >
                      <Card className="h-full">
                        <CardContent className="p-6">
                          <div className="flex items-start">
                            <div className="bg-amber-500/10 p-3 rounded-full mr-4 flex-shrink-0">
                              <Icon className="h-6 w-6 text-amber-500" />
                            </div>
                            <div>
                              <h3 className="text-lg font-bold mb-2">{advantage.title}</h3>
                              <p className="text-sm text-muted-foreground mb-4">{advantage.description}</p>
                              <div className="bg-amber-500/5 p-3 rounded-md border border-amber-500/20 text-sm">
                                <span className="text-amber-700 dark:text-amber-400 text-xs font-medium mb-1 block">BITCOIN EXAMPLE:</span>
                                {advantage.bitcoinExample}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
              
              <div className="bg-card rounded-lg p-6 border shadow-sm">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold">Market Freedom Timeline</h3>
                  <p className="text-sm text-muted-foreground">
                    Major interventions that have distorted free market price discovery
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row items-start border-l-4 border-green-500 pl-4 py-2">
                    <div className="md:w-1/4 font-bold">1900</div>
                    <div className="md:w-3/4">
                      <h4 className="text-base font-medium">International Gold Standard Established</h4>
                      <p className="text-sm text-muted-foreground">
                        Major economies adopted the gold standard, creating a period of monetary stability and free market price signals based on sound money
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-start border-l-4 border-red-500 pl-4 py-2">
                    <div className="md:w-1/4 font-bold">1971</div>
                    <div className="md:w-3/4">
                      <h4 className="text-base font-medium">Nixon Ends Gold Standard</h4>
                      <p className="text-sm text-muted-foreground">
                        The U.S. abandoned gold convertibility, allowing unlimited fiat currency creation without backing
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-start border-l-4 border-red-500 pl-4 py-2">
                    <div className="md:w-1/4 font-bold">2008</div>
                    <div className="md:w-3/4">
                      <h4 className="text-base font-medium">Global Financial Crisis & Bailouts</h4>
                      <p className="text-sm text-muted-foreground">
                        Failed institutions received trillions in taxpayer support, disrupting market discipline
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-start border-l-4 border-amber-500 pl-4 py-2">
                    <div className="md:w-1/4 font-bold">2009</div>
                    <div className="md:w-3/4">
                      <h4 className="text-base font-medium">Bitcoin Genesis Block</h4>
                      <p className="text-sm text-muted-foreground">
                        "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks" - Message embedded in Bitcoin's first block
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-start border-l-4 border-red-500 pl-4 py-2">
                    <div className="md:w-1/4 font-bold">2020</div>
                    <div className="md:w-3/4">
                      <h4 className="text-base font-medium">COVID-19 Market Interventions</h4>
                      <p className="text-sm text-muted-foreground">
                        Unprecedented money printing and asset purchases distorted prices across all markets
                      </p>
                    </div>
                  </div>
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

// Function to check if traditional markets are open
// This is a simplified version - actual market hours are more complex
const isMarketOpen = () => {
  const now = new Date();
  const day = now.getDay();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours * 60 + minutes;
  
  // Weekend check (0 = Sunday, 6 = Saturday)
  if (day === 0 || day === 6) return false;
  
  // Trading hours check (9:30 AM - 4:00 PM ET)
  // This is simplified and doesn't account for timezone differences
  const marketOpen = 9 * 60 + 30; // 9:30 AM
  const marketClose = 16 * 60; // 4:00 PM
  
  return currentTime >= marketOpen && currentTime < marketClose;
};

export default LastFreeMarket; 