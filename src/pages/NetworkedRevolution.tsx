import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Network, 
  Share2, 
  Radio, 
  Smartphone, 
  Globe, 
  ArrowRight, 
  Users, 
  TrendingUp, 
  Zap, 
  Bitcoin, 
  ChevronDown,
  BookOpen,
  Shield,
  GanttChart,
  Webhook
} from 'lucide-react';
import { Link } from 'react-router-dom';

const NetworkedRevolution = () => {
  const [currentNetwork, setCurrentNetwork] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [networkValue, setNetworkValue] = useState(0);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const networkStages = [
    { name: "Early Telegraph Network (1850s)", users: 20 },
    { name: "Telephone Network (1900s)", users: 1000 },
    { name: "Radio Broadcast (1940s)", users: 50000 },
    { name: "Television Networks (1960s)", users: 200000 },
    { name: "Early Internet (1990s)", users: 1000000 },
    { name: "Social Media (2010s)", users: 100000000 },
    { name: "Bitcoin Network (Present)", users: 300000000 },
    { name: "Bitcoin Network (Future)", users: 1000000000 }
  ];

  // Animation for network stage
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentNetwork < networkStages.length - 1) {
        setCurrentNetwork(prev => prev + 1);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [currentNetwork, networkStages.length]);

  // Animation for active users count
  useEffect(() => {
    const targetUsers = networkStages[currentNetwork].users;
    if (activeUsers < targetUsers) {
      const step = Math.max(Math.floor(targetUsers / 20), 1);
      const timer = setTimeout(() => {
        setActiveUsers(prev => Math.min(prev + step, targetUsers));
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [activeUsers, currentNetwork, networkStages]);

  // Animation for network value calculation
  useEffect(() => {
    // Metcalfe's Law: value ~ n²
    const targetValue = Math.pow(activeUsers, 2) / 10000000;
    if (networkValue < targetValue) {
      const step = Math.max(targetValue / 20, 1);
      const timer = setTimeout(() => {
        setNetworkValue(prev => Math.min(prev + step, targetValue));
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [activeUsers, networkValue]);

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
              <Network className="mr-1 h-3.5 w-3.5" />
              <span>The Network Effect</span>
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              Bitcoin: The Networked Revolution
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium mb-8 text-muted-foreground">
              How Bitcoin follows the pattern of history's most transformative networks — but with an unprecedented economic twist
            </h2>
          </motion.div>
          
          {/* Network animation */}
          <div className="mt-16 w-full max-w-2xl mx-auto">
            <div className="bg-card border rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6">{networkStages[currentNetwork].name}</h3>
              
              <div className="flex flex-col space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Active Users</span>
                    <span className="text-sm font-mono">{activeUsers.toLocaleString()}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-amber-500 transition-all duration-500 ease-out"
                      style={{ width: `${Math.min((activeUsers / 1000000000) * 100, 100)}%` }}
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Network Value (Metcalfe's Law)</span>
                    <span className="text-sm font-mono">${networkValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-amber-500 transition-all duration-500 ease-out"
                      style={{ width: `${Math.min((networkValue / 100000) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-8 gap-1 mt-8">
                {networkStages.map((stage, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-colors ${
                      index <= currentNetwork ? 'bg-amber-500' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
            </div>
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
        
        {/* The Network Theory Section */}
        <section className="py-24 bg-card" ref={targetRef}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                style={{ opacity, scale }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Power of Networks</h2>
                <p className="text-lg text-muted-foreground">
                  Throughout history, revolutionary networks have followed a predictable pattern of growth and value creation.
                  Bitcoin is the latest evolution, but with an unprecedented twist.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-lg p-6 border"
                >
                  <div className="h-12 w-12 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 mb-6">
                    <Share2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Metcalfe's Law</h3>
                  <p className="text-muted-foreground">
                    The value of a network is proportional to the square of the number of connected users (n²). 
                    When a network doubles in size, its value quadruples.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-lg p-6 border"
                >
                  <div className="h-12 w-12 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 mb-6">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Adoption S-Curve</h3>
                  <p className="text-muted-foreground">
                    All network technologies follow an S-shaped adoption curve: slow initial growth, 
                    rapid acceleration during mainstream adoption, then plateau at saturation.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-lg p-6 border"
                >
                  <div className="h-12 w-12 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 mb-6">
                    <GanttChart className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Network Effects</h3>
                  <p className="text-muted-foreground">
                    Each additional user increases the value for all existing users. This creates a 
                    positive feedback loop that drives exponential growth and natural monopolies.
                  </p>
                </motion.div>
              </div>
              
              <div className="border-t border-b py-12 my-16">
                <blockquote className="italic text-xl md:text-2xl text-center max-w-3xl mx-auto">
                  "Bitcoin is not just money. It's the world's first truly open financial network."
                  <footer className="mt-4 text-base font-normal text-muted-foreground">
                    — Chris Dixon, a16z
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
        
        {/* The Evolution of Networks Section */}
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Evolution of Networks</h2>
                <p className="text-lg text-muted-foreground">
                  Bitcoin follows the same adoption pattern as history's most transformative technologies.
                </p>
              </motion.div>
              
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-500/20 z-0" aria-hidden="true"></div>
                
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center mb-16"
                  >
                    <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0 md:text-right">
                      <h3 className="text-2xl font-bold mb-3">Telegraph & Telephone</h3>
                      <p className="text-muted-foreground">
                        The first electronic communication networks connected people across vast distances, 
                        revolutionizing business and social interaction. Initially expensive and used by few, 
                        they eventually reached nearly universal adoption.
                      </p>
                    </div>
                    <div className="flex-shrink-0 bg-amber-500 text-white h-14 w-14 rounded-full flex items-center justify-center z-20">
                      <Radio className="h-6 w-6" />
                    </div>
                    <div className="md:w-1/2 md:pl-8 invisible md:visible"></div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center mb-16"
                  >
                    <div className="md:w-1/2 md:pr-8 invisible md:visible"></div>
                    <div className="flex-shrink-0 bg-amber-500 text-white h-14 w-14 rounded-full flex items-center justify-center z-20">
                      <Globe className="h-6 w-6" />
                    </div>
                    <div className="md:w-1/2 md:pl-8 mb-6 md:mb-0 md:text-left">
                      <h3 className="text-2xl font-bold mb-3">The Internet</h3>
                      <p className="text-muted-foreground">
                        From a specialized network for researchers to a global system connecting billions, 
                        the Internet followed a similar adoption curve. Early skeptics doubted its utility, 
                        yet it eventually transformed virtually every industry.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center mb-16"
                  >
                    <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0 md:text-right">
                      <h3 className="text-2xl font-bold mb-3">Mobile Networks</h3>
                      <p className="text-muted-foreground">
                        Mobile phones evolved from luxury items for the wealthy to essential devices used by 
                        over 5 billion people. The infrastructure investment was massive, but the payoff was 
                        even greater as network effects took hold.
                      </p>
                    </div>
                    <div className="flex-shrink-0 bg-amber-500 text-white h-14 w-14 rounded-full flex items-center justify-center z-20">
                      <Smartphone className="h-6 w-6" />
                    </div>
                    <div className="md:w-1/2 md:pl-8 invisible md:visible"></div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center"
                  >
                    <div className="md:w-1/2 md:pr-8 invisible md:visible"></div>
                    <div className="flex-shrink-0 bg-amber-500 text-white h-14 w-14 rounded-full flex items-center justify-center z-20">
                      <Bitcoin className="h-6 w-6" />
                    </div>
                    <div className="md:w-1/2 md:pl-8 mb-6 md:mb-0 md:text-left">
                      <h3 className="text-2xl font-bold mb-3">Bitcoin Network</h3>
                      <p className="text-muted-foreground">
                        Bitcoin follows the same pattern but adds a crucial innovation: economic incentives built directly 
                        into the protocol. This accelerates network effects and aligns all participants toward growth.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* The Bitcoin Difference Section */}
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
                  <Webhook className="mr-1 h-3.5 w-3.5" />
                  <span>The Bitcoin Difference</span>
                </Badge>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">More Than Just Another Network</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Bitcoin's unique design creates powerful new dynamics that accelerate adoption and entrench its value proposition.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-10 mb-20">
                <Card className="overflow-hidden border border-amber-500/30 shadow-lg">
                  <CardContent className="p-0">
                    <div className="p-6 border-b border-border bg-amber-500/5">
                      <h3 className="text-xl font-bold flex items-center">
                        <TrendingUp className="h-5 w-5 text-amber-500 mr-2" />
                        Economic Incentives
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="mb-4">
                        Unlike previous networks, Bitcoin directly rewards early participants through price appreciation. 
                        This creates a powerful incentive for adoption and evangelism.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 mr-3 mt-0.5 flex-shrink-0">1</div>
                          <span>Users become stakeholders with financial interest in network growth</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 mr-3 mt-0.5 flex-shrink-0">2</div>
                          <span>Each new adopter increases scarcity and potentially price</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 mr-3 mt-0.5 flex-shrink-0">3</div>
                          <span>The incentive to "buy and hold" creates persistent network effects</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden border border-amber-500/30 shadow-lg">
                  <CardContent className="p-0">
                    <div className="p-6 border-b border-border bg-amber-500/5">
                      <h3 className="text-xl font-bold flex items-center">
                        <Shield className="h-5 w-5 text-amber-500 mr-2" />
                        Security Through Decentralization
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="mb-4">
                        The Bitcoin network becomes more secure as it grows, creating a reinforcing cycle of 
                        adoption → security → trust → further adoption.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 mr-3 mt-0.5 flex-shrink-0">1</div>
                          <span>More miners = more hash power = greater security</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 mr-3 mt-0.5 flex-shrink-0">2</div>
                          <span>More nodes = more decentralization = censorship resistance</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 mr-3 mt-0.5 flex-shrink-0">3</div>
                          <span>Network security attracts institutional adoption and further investment</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-card rounded-lg p-8 border shadow-md">
                <h3 className="text-xl font-bold mb-6 text-center">Network Adoption Comparison</h3>
                
                <div className="relative h-80 mb-8">
                  {/* This is a simplified representation of adoption curves */}
                  <div className="absolute inset-0">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      {/* Bitcoin curve */}
                      <path 
                        d="M 0,100 C 20,100 30,80 50,30 S 80,0 100,0" 
                        fill="none" 
                        stroke="#f59e0b" 
                        strokeWidth="3"
                        strokeDasharray="1"
                      />
                      
                      {/* Internet curve */}
                      <path 
                        d="M 0,100 C 30,100 40,90 60,40 S 85,5 100,5" 
                        fill="none" 
                        stroke="#3b82f6" 
                        strokeWidth="2"
                        strokeDasharray="5,2"
                      />
                      
                      {/* Phone curve */}
                      <path 
                        d="M 0,100 C 40,100 50,95 70,50 S 90,10 100,10" 
                        fill="none" 
                        stroke="#10b981" 
                        strokeWidth="2"
                        strokeDasharray="3,2"
                      />
                      
                      {/* Years text */}
                      <text x="0" y="110" fontSize="3" fill="currentColor">0</text>
                      <text x="25" y="110" fontSize="3" fill="currentColor">5</text>
                      <text x="50" y="110" fontSize="3" fill="currentColor">10</text>
                      <text x="75" y="110" fontSize="3" fill="currentColor">15</text>
                      <text x="95" y="110" fontSize="3" fill="currentColor">20 years</text>
                      
                      {/* Adoption % */}
                      <text x="-5" y="100" fontSize="3" fill="currentColor">0%</text>
                      <text x="-5" y="75" fontSize="3" fill="currentColor">25%</text>
                      <text x="-5" y="50" fontSize="3" fill="currentColor">50%</text>
                      <text x="-5" y="25" fontSize="3" fill="currentColor">75%</text>
                      <text x="-5" y="5" fontSize="3" fill="currentColor">100%</text>
                      
                      {/* We are here marker */}
                      <circle cx="32" cy="72" r="1.5" fill="#f59e0b" />
                      <text x="28" y="68" fontSize="3" fontWeight="bold" fill="#f59e0b">We are here</text>
                    </svg>
                  </div>
                </div>
                
                <div className="flex justify-center space-x-8">
                  <div className="flex items-center">
                    <div className="w-4 h-0.5 bg-amber-500 mr-2"></div>
                    <span className="text-sm">Bitcoin</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-0.5 bg-blue-500 mr-2 border-t border-dashed"></div>
                    <span className="text-sm">Internet</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-0.5 bg-emerald-500 mr-2 border-t-2 border-dotted"></div>
                    <span className="text-sm">Telephone</span>
                  </div>
                </div>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Where Are You On The Curve?</h2>
                <p className="text-lg text-muted-foreground mb-10">
                  With Bitcoin, we're witnessing the birth of a global, peer-to-peer financial network that follows 
                  the same exponential growth pattern as previous networks — but with economic incentives 
                  that reward early participation.
                </p>
                
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6 md:p-10 mb-10">
                  <h3 className="text-xl font-bold mb-4">Network Position Determines Outcome</h3>
                  <p className="mb-6">
                    Every revolutionary network in history has rewarded early adopters with outsized returns — whether social, financial, or technological.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-red-500 mb-2">6%</div>
                      <p className="text-sm text-muted-foreground">Global Bitcoin adoption rate in 2023</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-amber-500 mb-2">90%</div>
                      <p className="text-sm text-muted-foreground">Of Bitcoin's supply that has already been mined</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-500 mb-2">2140</div>
                      <p className="text-sm text-muted-foreground">Year when the last Bitcoin will be mined</p>
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
                      Start Learning About Bitcoin
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

export default NetworkedRevolution; 