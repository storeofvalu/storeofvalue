import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Clock, 
  Hourglass, 
  Calendar, 
  Clock3, 
  History, 
  Lock, 
  Save, 
  ArrowRight, 
  Users, 
  AlertTriangle, 
  Zap, 
  Bitcoin, 
  ChevronDown,
  BookOpen,
  Shield,
  TimerOff,
  Timer,
  Scale,
  Milestone,
  LineChart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const TemporalRebellion = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  
  // States for the calculator
  const [savings, setSavings] = useState(10000);
  const [years, setYears] = useState(10);
  const [inflationRate, setInflationRate] = useState(7);
  const [country, setCountry] = useState('United States');
  
  // For hourglass animation
  const [sandLevel, setSandLevel] = useState(100);
  const [bitcoinSandLevel, setBitcoinSandLevel] = useState(100);
  
  // Calculated values
  const [timeStolen, setTimeStolen] = useState(0);
  const [bitcoinPreserved, setBitcoinPreserved] = useState(0);
  
  // Calculate time theft
  useEffect(() => {
    // Simple compound inflation calculation
    const inflationImpact = savings * (Math.pow(1 + (inflationRate / 100), years) - 1);
    setTimeStolen(inflationImpact);
    
    // Simplified Bitcoin preservation calculation (assuming 100% preservation)
    setBitcoinPreserved(savings);
  }, [savings, years, inflationRate]);
  
  // Animated hourglass effect
  useEffect(() => {
    const timer = setInterval(() => {
      setSandLevel(prev => {
        // Reset when it gets too low
        if (prev <= 30) return 100;
        return prev - 0.5;
      });
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section with Hourglass Animation */}
        <section className="min-h-screen relative flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden bg-gradient-to-b from-background to-background/95">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto z-10"
          >
            <Badge className="mb-6 px-3 py-1 bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 transition-colors">
              <Clock className="mr-1 h-3.5 w-3.5" />
              <span>The Temporal Rebellion</span>
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              Your Time Is Being Stolen
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium mb-8 text-muted-foreground">
              Bitcoin: The First Incorruptible Time Vault in Human History
            </h2>
          </motion.div>
          
          {/* Hourglass animation */}
          <div className="mt-16 w-full max-w-4xl mx-auto flex flex-col lg:flex-row gap-8 items-center justify-center">
            {/* Fiat Currency Hourglass - Leaking Sand */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative w-64 h-96 flex flex-col items-center"
            >
              <div className="mb-4 text-lg font-semibold text-red-500">Fiat Currency</div>
              <div className="relative w-48 h-72 border-2 border-gray-300 rounded flex flex-col">
                {/* Upper glass */}
                <div className="w-full grow relative overflow-hidden rounded-t">
                  <div 
                    className="absolute bottom-0 left-0 right-0 bg-amber-500/80 transition-all duration-500 ease-out"
                    style={{ height: `${100 - sandLevel}%` }}
                  ></div>
                </div>
                
                {/* Middle pinch */}
                <div className="w-full h-4 bg-gray-300 flex justify-center items-center relative">
                  <div className="w-4 h-4 rounded-full bg-amber-500 absolute"></div>
                  <div className="absolute -right-10 w-20 h-2 bg-amber-500/50 blur-sm animate-pulse"></div>
                </div>
                
                {/* Lower glass - accumulated sand and invisible leak */}
                <div className="w-full grow relative overflow-hidden rounded-b">
                  <div 
                    className="absolute top-0 left-0 right-0 bg-amber-500/80 transition-all duration-500 ease-out"
                    style={{ height: `${sandLevel * 0.5}%` }}
                  ></div>
                  {/* Invisible leak animation */}
                  <div className="absolute bottom-0 right-0 w-2 h-10 opacity-30">
                    <div className="w-full h-full bg-amber-500/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                <span className="text-red-500 font-semibold">-{inflationRate}% per year</span> due to inflation
              </div>
            </motion.div>
            
            {/* Bitcoin Hourglass - Perfect Preservation */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="relative w-64 h-96 flex flex-col items-center"
            >
              <div className="mb-4 text-lg font-semibold text-amber-500">Bitcoin</div>
              <div className="relative w-48 h-72 border-2 border-amber-500 rounded flex flex-col">
                {/* Upper glass */}
                <div className="w-full grow relative overflow-hidden rounded-t">
                  <div 
                    className="absolute bottom-0 left-0 right-0 bg-amber-500 transition-all duration-500 ease-out"
                    style={{ height: `${0}%` }}
                  ></div>
                </div>
                
                {/* Middle pinch */}
                <div className="w-full h-4 bg-amber-500 flex justify-center items-center relative">
                  <div className="w-4 h-4 rounded-full bg-amber-600 absolute"></div>
                </div>
                
                {/* Lower glass - perfectly preserved sand */}
                <div className="w-full grow relative overflow-hidden rounded-b">
                  <div 
                    className="absolute top-0 left-0 right-0 bg-amber-500 transition-all duration-500 ease-out"
                    style={{ height: `100%` }}
                  ></div>
                </div>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                <span className="text-green-500 font-semibold">100% preserved</span> through Bitcoin
              </div>
            </motion.div>
          </div>
          
          <div className="mt-12">
            <div className="inline-block animate-bounce">
              <ChevronDown className="h-8 w-8 text-amber-500" />
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-full h-full">
              <svg className="w-full h-full opacity-[0.02]" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                    <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </div>
        </section>
        
        {/* Time Theft Calculator Section */}
        <section className="py-24 bg-card" ref={targetRef}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                style={{ opacity, scale }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Time Theft Calculator</h2>
                <p className="text-lg text-muted-foreground">
                  Visualize how much of your life energy is being stolen through monetary debasement, 
                  and discover how Bitcoin can preserve it.
                </p>
              </motion.div>
              
              <Card className="p-6 shadow-lg border-amber-500/20">
                <CardContent className="p-4">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="country" className="text-base font-medium mb-2 block">Your Country</Label>
                        <select 
                          id="country"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          className="w-full rounded-md border border-input bg-background px-3 py-2"
                        >
                          <option value="United States">United States (7% avg inflation)</option>
                          <option value="Eurozone">Eurozone (5% avg inflation)</option>
                          <option value="Turkey">Turkey (45% avg inflation)</option>
                          <option value="Argentina">Argentina (100% avg inflation)</option>
                          <option value="Venezuela">Venezuela (250% avg inflation)</option>
                        </select>
                      </div>
                      
                      <div>
                        <Label htmlFor="savings" className="text-base font-medium mb-2 block">
                          Your Savings Amount ($)
                        </Label>
                        <Input
                          id="savings"
                          type="number"
                          value={savings}
                          onChange={(e) => setSavings(parseInt(e.target.value) || 0)}
                          className="text-lg"
                        />
                        <div className="mt-2">
                          <Slider
                            defaultValue={[10000]}
                            max={100000}
                            step={1000}
                            value={[savings]}
                            onValueChange={(value) => setSavings(value[0])}
                            className="my-4"
                          />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>$1,000</span>
                            <span>$100,000</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="years" className="text-base font-medium mb-2 block">
                          Time Period (Years)
                        </Label>
                        <Input
                          id="years"
                          type="number"
                          value={years}
                          onChange={(e) => setYears(parseInt(e.target.value) || 0)}
                          className="text-lg"
                        />
                        <div className="mt-2">
                          <Slider
                            defaultValue={[10]}
                            max={40}
                            step={1}
                            value={[years]}
                            onValueChange={(value) => setYears(value[0])}
                            className="my-4"
                          />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>1 Year</span>
                            <span>40 Years</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="inflation" className="text-base font-medium mb-2 block">
                          Average Annual Inflation Rate (%)
                        </Label>
                        <Input
                          id="inflation"
                          type="number"
                          value={inflationRate}
                          onChange={(e) => setInflationRate(parseFloat(e.target.value) || 0)}
                          className="text-lg"
                        />
                        <div className="mt-2">
                          <Slider
                            defaultValue={[7]}
                            max={300}
                            step={1}
                            value={[inflationRate]}
                            onValueChange={(value) => setInflationRate(value[0])}
                            className="my-4"
                          />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>1%</span>
                            <span>300%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col justify-center space-y-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                          <TimerOff className="text-red-500 mr-2 h-5 w-5" />
                          <span>Your Time Stolen Through Inflation</span>
                        </h3>
                        
                        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                          <div className="text-3xl font-bold text-red-500 mb-2">
                            ${timeStolen.toLocaleString(undefined, {maximumFractionDigits: 0})}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            This represents {Math.round((timeStolen / savings) * 100)}% of your stored life energy lost over {years} years.
                          </div>
                          
                          <div className="mt-4 border-t border-red-500/20 pt-4">
                            <div className="text-sm">
                              <strong>Time equivalent:</strong> Approximately {Math.round((timeStolen / 25) / 8)} days of work stolen
                              <br />
                              <span className="text-xs text-muted-foreground">(Based on $25/hour average wage, 8-hour workday)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                          <Lock className="text-amber-500 mr-2 h-5 w-5" />
                          <span>Your Time Preserved With Bitcoin</span>
                        </h3>
                        
                        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6">
                          <div className="text-3xl font-bold text-amber-500 mb-2">
                            ${savings.toLocaleString(undefined, {maximumFractionDigits: 0})}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            100% of your stored life energy preserved with Bitcoin.
                          </div>
                          
                          <div className="mt-6 text-sm font-semibold flex items-center text-green-500">
                            <Save className="h-4 w-4 mr-1" />
                            <span>You saved {Math.round((timeStolen / 25) / 8)} days of your life from being stolen</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10 pt-6 border-t border-border">
                    <div className="text-sm text-muted-foreground italic">
                      Note: This calculator uses simplified compounding calculations and assumes constant inflation rates. 
                      Real-world scenarios may vary. Bitcoin's purchasing power can fluctuate in the short term but has historically 
                      appreciated over longer time periods.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Life Energy Conservation Section */}
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Life Energy Conservation</h2>
                <p className="text-lg text-muted-foreground">
                  Understanding money as stored human time and how Bitcoin preserves it through mathematical certainty.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg p-6 border"
                >
                  <div className="h-12 w-12 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 mb-6">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Human Productivity</h3>
                  <p className="text-muted-foreground">
                    Every hour of human effort creates value. When we work, we convert our finite time on Earth 
                    into products and services that benefit others.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg p-6 border"
                >
                  <div className="h-12 w-12 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 mb-6">
                    <Save className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Money as Stored Time</h3>
                  <p className="text-muted-foreground">
                    Money's primary function is to store the value of our work for future use. It's a 
                    claim on future human time and energy—a battery for human productivity.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg p-6 border"
                >
                  <div className="h-12 w-12 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 mb-6">
                    <TimerOff className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Inflation as Time Theft</h3>
                  <p className="text-muted-foreground">
                    When money is devalued through inflation, the hours of life represented by your savings 
                    are effectively taken from you without consent.
                  </p>
                </motion.div>
              </div>
              
              <div className="mt-16 grid md:grid-cols-2 gap-12">
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <Bitcoin className="text-amber-500 mr-2 h-6 w-6" />
                      Bitcoin's Proof-of-Work
                    </h3>
                    
                    <p className="text-muted-foreground mb-6">
                      Bitcoin mining uses proof-of-work to "timestamp" human effort into an immutable ledger. 
                      This process converts physical energy into digital security, creating a link between our 
                      physical world and digital value storage.
                    </p>
                    
                    <div className="bg-card border p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">The Energy-Time Exchange</h4>
                      <p className="text-sm text-muted-foreground">
                        Miners convert electricity (a physical resource) into block security (digital scarcity). 
                        This process establishes an unforgeable connection between the physical and digital 
                        realms, creating a true store of human time that cannot be counterfeited.
                      </p>
                    </div>
                  </motion.div>
                </div>
                
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <Shield className="text-amber-500 mr-2 h-6 w-6" />
                      Temporal Containers
                    </h3>
                    
                    <p className="text-muted-foreground mb-6">
                      Each Bitcoin block can be viewed as a temporal container that preserves human productivity.
                      The blockchain itself becomes an unbreakable chain of time-energy containers, each 
                      securing the value of human effort against debasement.
                    </p>
                    
                    <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Bitcoin's Temporal Integrity</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 mr-3 mt-0.5 flex-shrink-0">✓</div>
                          <span>Fixed supply of 21 million ensures your time can't be diluted</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 mr-3 mt-0.5 flex-shrink-0">✓</div>
                          <span>Blocks are secured by massive energy expenditure</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 mr-3 mt-0.5 flex-shrink-0">✓</div>
                          <span>Mathematical scarcity preserves the value of your work</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              <div className="border-t border-b py-12 my-16">
                <blockquote className="italic text-xl md:text-2xl text-center max-w-3xl mx-auto">
                  "Money is how we transport economic value across time and space."
                  <footer className="mt-4 text-base font-normal text-muted-foreground">
                    — Nic Carter
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
        
        {/* Generational Time Vault Visualization */}
        <section className="py-24 bg-amber-500/5">
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
                  <Calendar className="mr-1 h-3.5 w-3.5" />
                  <span>Generational Wealth</span>
                </Badge>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Generational Time Vault</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Visualize how wealth (stored time) transfers across generations under different monetary systems.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-10 mb-20">
                <Card className="overflow-hidden border border-red-500/30 shadow-lg">
                  <CardContent className="p-0">
                    <div className="p-6 border-b border-border bg-red-500/5">
                      <h3 className="text-xl font-bold flex items-center">
                        <TimerOff className="h-5 w-5 text-red-500 mr-2" />
                        Fiat Inheritance
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="mb-6 text-muted-foreground">
                        Under a fiat monetary system, generational wealth transfer suffers from 
                        multiple forms of erosion that diminish the value of stored time.
                      </p>
                      
                      <div className="relative py-12">
                        {/* Generation Line */}
                        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-red-200 z-0"></div>
                        
                        {/* Generation 1 */}
                        <div className="relative flex mb-16">
                          <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-500 mr-6 z-10">
                            <Users className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-1">Generation 1</h4>
                            <div className="flex items-center mb-2">
                              <div className="h-5 w-32 bg-red-500 rounded"></div>
                              <span className="ml-3 text-sm">$100,000</span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Lifetime of work stored as savings
                            </p>
                          </div>
                        </div>
                        
                        {/* Inflation & Tax Impact */}
                        <div className="relative flex mb-8 ml-16">
                          <div className="h-8 w-8 rounded-full bg-red-300/50 flex items-center justify-center text-red-500 mr-4 z-10">
                            <AlertTriangle className="h-4 w-4" />
                          </div>
                          <div>
                            <h5 className="font-medium text-sm mb-1">Value Erosion</h5>
                            <p className="text-xs text-muted-foreground">
                              Inflation (30 years): -70%<br />
                              Estate/Inheritance Tax: -40% of remainder
                            </p>
                          </div>
                        </div>
                        
                        {/* Generation 2 */}
                        <div className="relative flex mb-16">
                          <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-500 mr-6 z-10">
                            <Users className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-1">Generation 2</h4>
                            <div className="flex items-center mb-2">
                              <div className="h-5 w-8 bg-red-400 rounded"></div>
                              <span className="ml-3 text-sm">$18,000</span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Only 18% of original time value preserved
                            </p>
                          </div>
                        </div>
                        
                        {/* Inflation & Tax Impact */}
                        <div className="relative flex mb-8 ml-16">
                          <div className="h-8 w-8 rounded-full bg-red-300/50 flex items-center justify-center text-red-500 mr-4 z-10">
                            <AlertTriangle className="h-4 w-4" />
                          </div>
                          <div>
                            <h5 className="font-medium text-sm mb-1">Further Erosion</h5>
                            <p className="text-xs text-muted-foreground">
                              Continuing inflation and taxes compound the loss
                            </p>
                          </div>
                        </div>
                        
                        {/* Generation 3 */}
                        <div className="relative flex">
                          <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-500 mr-6 z-10">
                            <Users className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-1">Generation 3</h4>
                            <div className="flex items-center mb-2">
                              <div className="h-5 w-3 bg-red-300 rounded"></div>
                              <span className="ml-3 text-sm">$3,240</span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Just 3.2% of original time value remains
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden border border-amber-500/30 shadow-lg">
                  <CardContent className="p-0">
                    <div className="p-6 border-b border-border bg-amber-500/5">
                      <h3 className="text-xl font-bold flex items-center">
                        <Lock className="h-5 w-5 text-amber-500 mr-2" />
                        Bitcoin Inheritance
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="mb-6 text-muted-foreground">
                        With Bitcoin, generational wealth transfer benefits from perfect preservation 
                        of stored time value, enabling true long-term inheritance.
                      </p>
                      
                      <div className="relative py-12">
                        {/* Generation Line */}
                        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-amber-200 z-0"></div>
                        
                        {/* Generation 1 */}
                        <div className="relative flex mb-16">
                          <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 mr-6 z-10">
                            <Users className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-1">Generation 1</h4>
                            <div className="flex items-center mb-2">
                              <div className="h-5 w-32 bg-amber-500 rounded"></div>
                              <span className="ml-3 text-sm">$100,000</span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Lifetime of work stored as Bitcoin
                            </p>
                          </div>
                        </div>
                        
                        {/* Preservation & Appreciation */}
                        <div className="relative flex mb-8 ml-16">
                          <div className="h-8 w-8 rounded-full bg-amber-300/50 flex items-center justify-center text-amber-500 mr-4 z-10">
                            <Zap className="h-4 w-4" />
                          </div>
                          <div>
                            <h5 className="font-medium text-sm mb-1">Value Growth</h5>
                            <p className="text-xs text-muted-foreground">
                              Protection from inflation: 100%<br />
                              Potential appreciation through adoption
                            </p>
                          </div>
                        </div>
                        
                        {/* Generation 2 */}
                        <div className="relative flex mb-16">
                          <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 mr-6 z-10">
                            <Users className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-1">Generation 2</h4>
                            <div className="flex items-center mb-2">
                              <div className="h-5 w-32 bg-amber-500 rounded"></div>
                              <span className="ml-3 text-sm">$100,000+</span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              100% of original time value preserved
                            </p>
                          </div>
                        </div>
                        
                        {/* Preservation Impact */}
                        <div className="relative flex mb-8 ml-16">
                          <div className="h-8 w-8 rounded-full bg-amber-300/50 flex items-center justify-center text-amber-500 mr-4 z-10">
                            <Zap className="h-4 w-4" />
                          </div>
                          <div>
                            <h5 className="font-medium text-sm mb-1">Continued Preservation</h5>
                            <p className="text-xs text-muted-foreground">
                              Mathematical scarcity ensures value maintenance
                            </p>
                          </div>
                        </div>
                        
                        {/* Generation 3 */}
                        <div className="relative flex">
                          <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 mr-6 z-10">
                            <Users className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-1">Generation 3</h4>
                            <div className="flex items-center mb-2">
                              <div className="h-5 w-32 bg-amber-500 rounded"></div>
                              <span className="ml-3 text-sm">$100,000+</span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Full ancestral time value preserved
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-card rounded-lg p-8 border shadow-md">
                <h3 className="text-xl font-bold mb-6 text-center">Moral Implications</h3>
                
                <p className="text-muted-foreground mb-8">
                  When we recognize money as stored human time, we understand that monetary debasement is not just
                  an economic issue—it's a moral one. A society that respects human effort must have a money that 
                  perfectly preserves the value of that effort across generations.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background p-5 rounded-lg border">
                    <h4 className="font-bold mb-3 flex items-center text-red-500">
                      <TimerOff className="h-4 w-4 mr-2" />
                      Fiat Legacy
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 mr-2 mt-0.5 flex-shrink-0">✗</div>
                        <span>Devalues the efforts of previous generations</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 mr-2 mt-0.5 flex-shrink-0">✗</div>
                        <span>Discourages long-term saving and planning</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 mr-2 mt-0.5 flex-shrink-0">✗</div>
                        <span>Creates intergenerational wealth destruction</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-background p-5 rounded-lg border">
                    <h4 className="font-bold mb-3 flex items-center text-amber-500">
                      <Lock className="h-4 w-4 mr-2" />
                      Bitcoin Legacy
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 mr-2 mt-0.5 flex-shrink-0">✓</div>
                        <span>Honors the work of ancestors by preserving its value</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 mr-2 mt-0.5 flex-shrink-0">✓</div>
                        <span>Encourages low time preference and long-term thinking</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 mr-2 mt-0.5 flex-shrink-0">✓</div>
                        <span>Enables true intergenerational wealth building</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Chronological Integrity Section */}
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Chronological Integrity</h2>
                <p className="text-lg text-muted-foreground">
                  How Bitcoin creates an unfalsifiable timestamp using proof-of-work, securing saved human time
                  through physical energy expenditure.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-10 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <div className="absolute -right-4 -top-4 -bottom-4 -left-4 bg-amber-500/5 rounded-lg z-0"></div>
                    <div className="relative z-10 bg-card border border-amber-500/20 rounded-lg p-6 shadow-md">
                      <h3 className="text-xl font-bold mb-4">Unfalsifiable Timestamps</h3>
                      
                      <p className="text-muted-foreground mb-6">
                        Bitcoin's blockchain represents a new form of temporal consensus—an objective record of "what happened when" 
                        that cannot be altered after the fact.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex">
                          <div className="h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 mr-4 flex-shrink-0">
                            <Clock3 className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-medium text-base">Internal Blockchain Clock</h4>
                            <p className="text-sm text-muted-foreground">
                              Each block marks an objective point in time, creating a tamper-proof historical record that 
                              provides temporal certainty.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex">
                          <div className="h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 mr-4 flex-shrink-0">
                            <Milestone className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-medium text-base">Energy-Secured Timechain</h4>
                            <p className="text-sm text-muted-foreground">
                              Bitcoin's proof-of-work mining converts physical energy into temporal security, making 
                              it enormously expensive to rewrite history.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="shadow-lg border-amber-500/20">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">The Heisenberg-Blockchain Connection</h3>
                      
                      <p className="text-muted-foreground mb-6">
                        Just as the Heisenberg Uncertainty Principle links energy and time in quantum physics, 
                        Bitcoin's proof-of-work creates an unbreakable relationship between energy expenditure and 
                        temporal certification.
                      </p>
                      
                      <div className="border border-border p-4 rounded-lg bg-background mb-6">
                        <h4 className="font-semibold mb-2 text-sm">Energy-Time Relationship in Physics</h4>
                        <p className="text-xs text-muted-foreground">
                          ΔE × Δt ≥ ℏ/2<br />
                          <span className="block mt-1">
                            The product of energy uncertainty and time uncertainty must be greater than or equal to a constant. 
                            Energy and time are fundamentally linked.
                          </span>
                        </p>
                      </div>
                      
                      <div className="border border-amber-500/30 p-4 rounded-lg bg-amber-500/5">
                        <h4 className="font-semibold mb-2 text-sm">Energy-Time Relationship in Bitcoin</h4>
                        <p className="text-xs text-muted-foreground">
                          Hashpower × BlockTime ≈ Difficulty<br />
                          <span className="block mt-1">
                            Bitcoin's difficulty adjustment maintains a constant relationship between energy expenditure 
                            (hashpower) and temporal progression (block time).
                          </span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <h3 className="text-2xl font-bold mb-6 text-center">The Timestamping Mechanism</h3>
                
                <div className="relative py-10">
                  {/* Timeline */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-amber-500/30 z-0"></div>
                  
                  {/* Timestamp Block 1 */}
                  <div className="relative mb-16 md:ml-0">
                    <div className="flex flex-col md:flex-row items-center mb-4">
                      <div className="order-2 md:order-1 md:w-1/2 md:pr-12 md:text-right mt-4 md:mt-0">
                        <div className="bg-card border p-4 rounded-lg shadow-sm">
                          <h4 className="font-bold text-amber-500">Block Mining</h4>
                          <p className="text-sm text-muted-foreground">
                            Miners expend energy to solve a cryptographic puzzle, creating a block that 
                            contains transactions (representations of human time and effort).
                          </p>
                        </div>
                      </div>
                      <div className="order-1 md:order-2 md:w-1/2 flex justify-start md:justify-center">
                        <div className="h-14 w-14 rounded-full bg-amber-500 text-white flex items-center justify-center z-10 text-xl font-bold">1</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timestamp Block 2 */}
                  <div className="relative mb-16 md:ml-0">
                    <div className="flex flex-col md:flex-row items-center mb-4">
                      <div className="order-2 md:w-1/2 md:pl-12 mt-4 md:mt-0">
                        <div className="bg-card border p-4 rounded-lg shadow-sm">
                          <h4 className="font-bold text-amber-500">Proof-of-Work Signature</h4>
                          <p className="text-sm text-muted-foreground">
                            The solution to the puzzle creates a unique timestamp that can only be 
                            produced through energy expenditure, linking physical reality to digital value.
                          </p>
                        </div>
                      </div>
                      <div className="order-1 md:w-1/2 flex justify-end md:justify-center">
                        <div className="h-14 w-14 rounded-full bg-amber-500 text-white flex items-center justify-center z-10 text-xl font-bold">2</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timestamp Block 3 */}
                  <div className="relative mb-16 md:ml-0">
                    <div className="flex flex-col md:flex-row items-center mb-4">
                      <div className="order-2 md:order-1 md:w-1/2 md:pr-12 md:text-right mt-4 md:mt-0">
                        <div className="bg-card border p-4 rounded-lg shadow-sm">
                          <h4 className="font-bold text-amber-500">Blockchain Chronology</h4>
                          <p className="text-sm text-muted-foreground">
                            Each new block references the previous block, creating an unbreakable chain 
                            of temporal markers—a true "time chain" as described in the original whitepaper.
                          </p>
                        </div>
                      </div>
                      <div className="order-1 md:order-2 md:w-1/2 flex justify-start md:justify-center">
                        <div className="h-14 w-14 rounded-full bg-amber-500 text-white flex items-center justify-center z-10 text-xl font-bold">3</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timestamp Block 4 */}
                  <div className="relative md:ml-0">
                    <div className="flex flex-col md:flex-row items-center mb-4">
                      <div className="order-2 md:w-1/2 md:pl-12 mt-4 md:mt-0">
                        <div className="bg-card border p-4 rounded-lg shadow-sm">
                          <h4 className="font-bold text-amber-500">Temporal Security</h4>
                          <p className="text-sm text-muted-foreground">
                            As more blocks are added, the timestamps become increasingly secure. The work needed 
                            to rewrite history grows exponentially, making past records of human time immutable.
                          </p>
                        </div>
                      </div>
                      <div className="order-1 md:w-1/2 flex justify-end md:justify-center">
                        <div className="h-14 w-14 rounded-full bg-amber-500 text-white flex items-center justify-center z-10 text-xl font-bold">4</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <div className="bg-card border p-6 rounded-lg text-center">
                <p className="text-muted-foreground italic">
                  "In this sense, it's similar to gold and silver, which were valuable prior money because of their physical properties... 
                  In Bitcoin's case, the property is pure mathematical scarcity and the unforgeable costliness of its creation through proof-of-work."
                </p>
                <p className="mt-2 text-sm font-semibold">— Satoshi Nakamoto</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Time Capsule Feature */}
        <section className="py-24 bg-amber-500/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Bitcoin Time Capsule</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Record messages to future generations alongside your Bitcoin transactions, 
                  creating eternal timestamps of your thoughts, values, and intentions.
                </p>
              </motion.div>
              
              <div className="bg-card border rounded-lg overflow-hidden shadow-lg mb-16">
                <div className="md:grid md:grid-cols-5">
                  <div className="md:col-span-2 bg-amber-500/10 p-8 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-2xl font-bold mb-6">Leave Your Legacy</h3>
                      
                      <p className="text-muted-foreground mb-4">
                        Unlike physical time capsules that degrade or digital records that can be altered, 
                        messages embedded in Bitcoin transactions are permanent and immutable.
                      </p>
                      
                      <p className="text-muted-foreground mb-6">
                        Your message will remain in the blockchain alongside your stored value, creating a 
                        perfect record of both your economic energy and your thoughts for future generations.
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 mr-3 mt-0.5 flex-shrink-0">✓</div>
                          <span className="text-sm">Permanently recorded in the blockchain</span>
                        </div>
                        <div className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 mr-3 mt-0.5 flex-shrink-0">✓</div>
                          <span className="text-sm">Timestamped and tamper-proof</span>
                        </div>
                        <div className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 mr-3 mt-0.5 flex-shrink-0">✓</div>
                          <span className="text-sm">Accessible for centuries to come</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="md:col-span-3 p-8">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="max-w-md mx-auto"
                    >
                      <h3 className="text-xl font-bold mb-6 text-center">Create Your Time Capsule Message</h3>
                      
                      <div className="space-y-6">
                        <div>
                          <Label htmlFor="message" className="text-base font-medium mb-2 block">
                            Your Message to the Future
                          </Label>
                          <textarea
                            id="message"
                            rows={5}
                            placeholder="Enter the message you want to preserve in the blockchain..."
                            className="w-full rounded-md border border-input bg-background px-3 py-2 resize-none"
                          ></textarea>
                          <p className="text-xs text-muted-foreground mt-1">
                            Limited to 80 characters. This will be permanently recorded in the blockchain.
                          </p>
                        </div>
                        
                        <div>
                          <Label htmlFor="address" className="text-base font-medium mb-2 block">
                            Bitcoin Address
                          </Label>
                          <Input
                            id="address"
                            type="text"
                            placeholder="Your Bitcoin address"
                            className="text-sm font-mono"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="amount" className="text-base font-medium mb-2 block">
                            Satoshi Amount
                          </Label>
                          <Input
                            id="amount"
                            type="number"
                            placeholder="Minimum 10,000 sats"
                            className="text-sm"
                          />
                          <p className="text-xs text-muted-foreground mt-1">
                            The amount of bitcoin to include with your message transaction.
                          </p>
                        </div>
                        
                        <div className="pt-2">
                          <Button
                            className="w-full bg-amber-500 hover:bg-amber-600 text-white"
                          >
                            <History className="mr-2 h-4 w-4" />
                            Preview Time Capsule
                          </Button>
                          <p className="text-xs text-center text-muted-foreground mt-2">
                            This is a concept demonstration. Actual implementation would require wallet integration.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-6 text-center">Historical Bitcoin Messages</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <Card className="overflow-hidden border-amber-500/20">
                  <CardContent className="p-0">
                    <div className="p-4 border-b border-border bg-card">
                      <div className="flex justify-between items-center">
                        <div className="text-sm font-semibold">Genesis Block</div>
                        <div className="text-xs text-muted-foreground">January 3, 2009</div>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-mono mb-3">
                        "Chancellor on brink of second bailout for banks"
                      </p>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <div>Block #0</div>
                        <div className="font-mono">000000000019d6...</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden border-amber-500/20">
                  <CardContent className="p-0">
                    <div className="p-4 border-b border-border bg-card">
                      <div className="flex justify-between items-center">
                        <div className="text-sm font-semibold">Hal Finney</div>
                        <div className="text-xs text-muted-foreground">January 11, 2009</div>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-mono mb-3">
                        "Running bitcoin"
                      </p>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <div>Twitter Post</div>
                        <div className="font-mono">First Bitcoin recipient</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden border-amber-500/20">
                  <CardContent className="p-0">
                    <div className="p-4 border-b border-border bg-card">
                      <div className="flex justify-between items-center">
                        <div className="text-sm font-semibold">Pizza Transaction</div>
                        <div className="text-xs text-muted-foreground">May 22, 2010</div>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-mono mb-3">
                        "I'll pay 10,000 bitcoins for a couple of pizzas"
                      </p>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <div>Forum Post</div>
                        <div className="font-mono">First "real world" purchase</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden border-amber-500/20">
                  <CardContent className="p-0">
                    <div className="p-4 border-b border-border bg-card">
                      <div className="flex justify-between items-center">
                        <div className="text-sm font-semibold">Block #666,666</div>
                        <div className="text-xs text-muted-foreground">January 15, 2021</div>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-mono mb-3">
                        "Do not be overcome by evil, but overcome evil with good - Romans 12:21"
                      </p>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <div>Coinbase message</div>
                        <div className="font-mono">00000000000000...</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center">
                <p className="text-muted-foreground mb-4">
                  Messages encoded in the Bitcoin blockchain remain permanently accessible—
                  as long as Bitcoin exists, so will your words and the value they accompany.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Ethics of Time Section */}
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
                <Badge className="mb-4 px-3 py-1 bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 transition-colors">
                  <Scale className="mr-1 h-3.5 w-3.5" />
                  <span>Moral Philosophy</span>
                </Badge>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Ethics of Time</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Examining the moral dimensions of sound money as respect for human life energy and productivity.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-6">Philosophical Foundations</h3>
                  
                  <div className="space-y-8">
                    <div className="border-l-4 border-amber-500 pl-4">
                      <h4 className="font-bold mb-2">John Locke: Labor Theory of Value</h4>
                      <p className="text-muted-foreground text-sm">
                        Locke argued that property rights originate when a person mixes their labor with natural resources.
                        By this reasoning, money is the embodiment of stored human labor and should maintain its value as a
                        matter of natural rights.
                      </p>
                      <p className="italic text-xs mt-2">
                        "For this labour being the unquestionable property of the labourer, no man but he can have a right to
                        what that is once joined to."
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-amber-500 pl-4">
                      <h4 className="font-bold mb-2">Frédéric Bastiat: Seen and Unseen</h4>
                      <p className="text-muted-foreground text-sm">
                        Bastiat highlighted how monetary debasement represents an unseen theft from productive members of society.
                        The moral failing is especially severe because the victims often don't understand what's happening to their
                        stored time.
                      </p>
                      <p className="italic text-xs mt-2">
                        "When plunder becomes a way of life for a group of men in a society, over the course of time they create for
                        themselves a legal system that authorizes it and a moral code that glorifies it."
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-amber-500 pl-4">
                      <h4 className="font-bold mb-2">F.A. Hayek: Knowledge and Planning</h4>
                      <p className="text-muted-foreground text-sm">
                        Hayek demonstrated that manipulating money prevents individuals from effectively planning their lives.
                        When the unit of account is unstable, people cannot properly allocate their finite time across their lifespan.
                      </p>
                      <p className="italic text-xs mt-2">
                        "The curious task of economics is to demonstrate to men how little they really know about what they imagine
                        they can design."
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-6">Modern Moral Implications</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-card border rounded-lg p-5">
                      <h4 className="font-bold mb-3 flex items-center">
                        <Clock className="h-4 w-4 text-amber-500 mr-2" />
                        Time Sovereignty as a Right
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        If we accept that our time is our most precious possession, then a monetary system that
                        systematically devalues our stored time violates our fundamental right to the fruits of our labor.
                        Bitcoin restores this right through perfect preservability.
                      </p>
                    </div>
                    
                    <div className="bg-card border rounded-lg p-5">
                      <h4 className="font-bold mb-3 flex items-center">
                        <Users className="h-4 w-4 text-amber-500 mr-2" />
                        Intergenerational Justice
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Monetary inflation not only steals from the present generation but creates intergenerational
                        injustice by preventing the effective transfer of value from parents to children. A sound money
                        system is necessary for true intergenerational equity.
                      </p>
                    </div>
                    
                    <div className="bg-card border rounded-lg p-5">
                      <h4 className="font-bold mb-3 flex items-center">
                        <Scale className="h-4 w-4 text-amber-500 mr-2" />
                        Honesty in Economic Communication
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Sound money enables honest communication about value across time. When money loses value unpredictably,
                        it distorts all economic signals, leading to misallocation of limited human time. Bitcoin restores 
                        honesty to the economic calculation.
                      </p>
                    </div>
                    
                    <div className="bg-card border rounded-lg p-5">
                      <h4 className="font-bold mb-3 flex items-center">
                        <Shield className="h-4 w-4 text-amber-500 mr-2" />
                        The Moral Case for Hard Money
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        If we value human life and dignity, we must value the time people spend working. A monetary system
                        that preserves this value is not merely an economic preference but a moral imperative. Bitcoin is the
                        first money that fully respects this principle.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-amber-500/5 border border-amber-500/30 rounded-lg p-8 text-center"
              >
                <h3 className="text-xl font-bold mb-4">Time and Life</h3>
                <blockquote className="text-lg italic">
                  "Money is time you haven't spent, which allows you to buy other people's time. 
                  When money is debased, your time is stolen."
                </blockquote>
                <p className="mt-4 text-sm font-semibold">— Robert Breedlove</p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Time Sovereignty Section */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Time Sovereignty</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  How Bitcoin enables individuals to reclaim authority over their stored time without 
                  requiring permission from any third party.
                </p>
              </motion.div>
              
              <div className="mb-16">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-background border rounded-lg p-6 md:p-8 shadow-md"
                >
                  <div className="grid md:grid-cols-3 gap-6 md:gap-10">
                    <div className="flex flex-col items-center text-center">
                      <div className="h-16 w-16 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 mb-4">
                        <Lock className="h-8 w-8" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">Self-Custody</h3>
                      <p className="text-sm text-muted-foreground">
                        Bitcoin enables complete ownership of your stored time without dependency on 
                        third-party custodians who can restrict access or devalue your holdings.
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-center text-center">
                      <div className="h-16 w-16 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 mb-4">
                        <Shield className="h-8 w-8" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">Permissionless Usage</h3>
                      <p className="text-sm text-muted-foreground">
                        Your Bitcoin—your stored time—can be transferred to anyone, anywhere, at any time, 
                        without requiring approval from any authority.
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-center text-center">
                      <div className="h-16 w-16 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 mb-4">
                        <Milestone className="h-8 w-8" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">Temporal Autonomy</h3>
                      <p className="text-sm text-muted-foreground">
                        Bitcoin's fixed supply ensures that your share of the total money supply—and thus your 
                        claim on future human time—cannot be diluted without your consent.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold mb-4">The Path to Time Liberation</h3>
                  
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="h-8 w-8 rounded-full bg-amber-500 text-white flex items-center justify-center mr-4 flex-shrink-0">1</div>
                      <div>
                        <h4 className="font-semibold">Separate Money from State</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Bitcoin creates a clear separation between money and state control, eliminating the 
                          ability of governments to steal time through monetary expansion.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="h-8 w-8 rounded-full bg-amber-500 text-white flex items-center justify-center mr-4 flex-shrink-0">2</div>
                      <div>
                        <h4 className="font-semibold">Restore Temporal Property Rights</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Bitcoin's immutability and scarcity reinstate the fundamental right to own the 
                          full value of your time-energy expenditure without external dilution.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="h-8 w-8 rounded-full bg-amber-500 text-white flex items-center justify-center mr-4 flex-shrink-0">3</div>
                      <div>
                        <h4 className="font-semibold">Enable True Planning</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          A stable monetary unit with known supply allows individuals to effectively plan their 
                          lives across decades, making better decisions about time allocation.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="h-8 w-8 rounded-full bg-amber-500 text-white flex items-center justify-center mr-4 flex-shrink-0">4</div>
                      <div>
                        <h4 className="font-semibold">Secure Generational Transfer</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Bitcoin enables the perfect transfer of stored time across generations, 
                          allowing parents to truly preserve their life's work for their children.
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
                  className="bg-amber-500/5 border border-amber-500/30 rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold mb-4">The Declaration of Monetary Independence</h3>
                  
                  <p className="text-muted-foreground mb-4">
                    By holding Bitcoin, you are making a powerful declaration of temporal sovereignty—asserting 
                    that your time is yours alone and no authority has the right to devalue it without consent.
                  </p>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 mr-2 mt-0.5 flex-shrink-0">✓</div>
                      <p>
                        <strong>I assert</strong> that my time and labor are my own property, and the value they create 
                        should be preserved without dilution.
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 mr-2 mt-0.5 flex-shrink-0">✓</div>
                      <p>
                        <strong>I reject</strong> any system that enables third parties to confiscate my stored time 
                        through monetary debasement.
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 mr-2 mt-0.5 flex-shrink-0">✓</div>
                      <p>
                        <strong>I embrace</strong> the responsibility of self-custody and direct control over my 
                        monetary energy.
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 mr-2 mt-0.5 flex-shrink-0">✓</div>
                      <p>
                        <strong>I commit</strong> to a system that equally respects everyone's time, regardless of 
                        status, nationality, or political connection.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-amber-500/20 text-center">
                    <p className="text-sm font-semibold text-amber-500">
                      Every satoshi held is a vote for time sovereignty
                    </p>
                  </div>
                </motion.div>
              </div>
              
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <p className="text-muted-foreground mb-6">
                    Bitcoin represents a peaceful rebellion against time theft—a system that enables 
                    individuals to opt out of monetary debasement and preserve their life energy.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Zap className="h-12 w-12 text-amber-500 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Reclaim Your Time</h2>
                <p className="text-lg text-muted-foreground mb-10">
                  Every day that passes in a fiat currency system, a portion of your life energy is being 
                  silently confiscated. Bitcoin offers a way to preserve the full value of your work—to 
                  ensure that your time truly remains your own.
                </p>
                
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6 md:p-10 mb-10">
                  <h3 className="text-xl font-bold mb-4">The Time Preservation Imperative</h3>
                  <p className="mb-6">
                    We each have approximately 4,000 weeks of life. How much of that precious time will you allow to be 
                    taken through monetary debasement?
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-amber-500 mb-2">21M</div>
                      <p className="text-sm text-muted-foreground">Fixed supply ensures your stored time cannot be diluted</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-amber-500 mb-2">100%</div>
                      <p className="text-sm text-muted-foreground">Of your value preserved through mathematical certainty</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-amber-500 mb-2">∞</div>
                      <p className="text-sm text-muted-foreground">Generations of time value transfer without degradation</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-amber-500 hover:bg-amber-600 text-white font-medium"
                  >
                    <Link to="/learn/beginner">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Learn How to Preserve Your Time
                    </Link>
                  </Button>
                  
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-amber-500 text-amber-500 hover:bg-amber-500/10"
                  >
                    <Link to="/perspectives">
                      <Clock className="mr-2 h-4 w-4" />
                      Explore Other Perspectives
                    </Link>
                  </Button>
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

export default TemporalRebellion; 