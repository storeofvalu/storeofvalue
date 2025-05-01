import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BitcoinLogoIcon from '../components/BitcoinLogoIcon';
import { 
  Globe, 
  Users, 
  Landmark, 
  Building, 
  UserCheck,
  UserX,
  Scale,
  Check,
  X,
  Wallet,
  User,
  ChevronDown,
  BookOpen,
  ArrowRight,
  Clock,
  ShieldAlert,
  GanttChart,
  Gem,
  Unlock,
  Lock,
  ShieldCheck,
  Code2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const GlobalGame = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  // Switch tabs automatically every 4 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTabIndex(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Different financial access scenarios
  const accessScenarios = [
    {
      title: "Traditional Finance",
      icon: <Landmark className="h-6 w-6 text-red-500" />,
      color: "bg-red-500/10",
      scenarios: [
        { who: "High-net-worth individual", access: "Full access to global financial tools", result: true },
        { who: "Middle class in developed nation", access: "Good access, some limitations", result: true },
        { who: "Low income in developed nation", access: "Limited access, high fees", result: false },
        { who: "Middle class in developing nation", access: "Restricted access, currency controls", result: false },
        { who: "Unbanked individual", access: "No access", result: false }
      ]
    },
    {
      title: "Bitcoin Network",
      icon: <BitcoinLogoIcon className="h-6 w-6 text-amber-500" />,
      color: "bg-amber-500/10",
      scenarios: [
        { who: "High-net-worth individual", access: "Same protocol rules as everyone", result: true },
        { who: "Middle class in developed nation", access: "Same protocol rules as everyone", result: true },
        { who: "Low income in developed nation", access: "Same protocol rules as everyone", result: true },
        { who: "Middle class in developing nation", access: "Same protocol rules as everyone", result: true },
        { who: "Unbanked individual with smartphone", access: "Same protocol rules as everyone", result: true }
      ]
    }
  ];

  // Character profiles
  const characters = [
    {
      name: "Elena",
      location: "Argentina",
      color: "bg-amber-600",
      background: "Caught in Hyperinflation",
      story: "As a teacher in Buenos Aires, Elena watched her savings lose 50% of value annually due to inflation. Banks imposed strict limits on foreign currency purchases, and her salary couldn't keep up with rising prices.",
      impact: "Through Bitcoin, Elena now preserves her earnings in an asset the government can't devalue. She converts a portion of her salary each month, protecting her family's financial future despite continued economic instability."
    },
    {
      name: "Michael",
      location: "United States",
      color: "bg-blue-600",
      background: "Small Business Owner",
      story: "Running a specialized online business, Michael was frustrated with payment processors that charged 3-5% per transaction, held funds for days, and arbitrarily limited his account due to 'suspicious activity' in his industry.",
      impact: "By accepting Bitcoin, Michael reduced payment costs to less than 1%, received funds instantly, and eliminated the risk of account freezes. His business now serves customers in 32 countries previously unreachable due to banking restrictions."
    },
    {
      name: "Amir",
      location: "Iran",
      color: "bg-green-700",
      background: "International Freelancer",
      story: "As a talented web developer in Tehran, Amir couldn't access global freelancing platforms that wouldn't pay to Iranian accounts due to international sanctions. His skills were in demand, but payment was impossible.",
      impact: "Bitcoin allowed Amir to work with clients worldwide, bypassing banking restrictions entirely. He now earns a competitive income comparable to developers in Western countries, supporting his family and investing in his future."
    },
    {
      name: "Grace",
      location: "Kenya",
      color: "bg-red-700",
      background: "Rural Entrepreneur",
      story: "Living in a village 30 miles from the nearest bank, Grace ran a small textile business but struggled with safely storing cash and sending money to suppliers in Nairobi. Mobile money services charged high fees for larger transactions.",
      impact: "Using a basic smartphone, Grace now receives Bitcoin payments from international buyers and local customers. She manages her business finances digitally, sending funds to suppliers instantly at minimal cost regardless of distance."
    }
  ];

  const bitcoinRules = [
    {
      title: "Fixed Supply",
      description: "Only 21 million bitcoins will ever exist. This rule applies equally to everyone—no special interests can create more for themselves or their allies.",
      icon: <Gem className="h-6 w-6 text-amber-500" />
    },
    {
      title: "Open Access",
      description: "Anyone with internet access can use Bitcoin without permission—no ID requirements, credit checks, or account applications.",
      icon: <Unlock className="h-6 w-6 text-amber-500" />
    },
    {
      title: "Immutable Transactions",
      description: "Once confirmed, transactions cannot be reversed—even by powerful entities. The same finality rules apply to all users.",
      icon: <Lock className="h-6 w-6 text-amber-500" />
    },
    {
      title: "Equal Validation Rights",
      description: "Anyone can run a full node to verify all network rules are being followed. No special hardware or permissions required.",
      icon: <ShieldCheck className="h-6 w-6 text-amber-500" />
    },
    {
      title: "Transparent Rules",
      description: "Bitcoin's code is open source—allowing anyone to review the rules. Nothing is hidden in legal jargon or behind corporate secrecy.",
      icon: <Code2 className="h-6 w-6 text-amber-500" />
    },
    {
      title: "Borderless Operation",
      description: "Bitcoin works the same way everywhere on Earth. No country-specific versions, restrictions, or special conditions based on location.",
      icon: <Globe className="h-6 w-6 text-amber-500" />
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
              <Globe className="mr-1 h-3.5 w-3.5" />
              <span>Equal Rules for All</span>
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              The Global Game
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium mb-8 text-muted-foreground">
              How Bitcoin created the first truly borderless financial system where the rules are the same for everyone
            </h2>
          </motion.div>
          
          {/* Main visualization */}
          <div className="mt-16 w-full max-w-3xl mx-auto">
            <Card className="border-blue-500/20 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-950/30 to-background p-8 md:p-10">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center bg-blue-500/10 p-3 rounded-full mb-4">
                    <Scale className="h-10 w-10 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold">The Rules of the Game</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-6 gap-2 px-4 text-sm font-medium text-muted-foreground">
                    <div className="col-span-3">Participant</div>
                    <div className="col-span-2">Access Level</div>
                    <div className="col-span-1 text-center">Result</div>
                  </div>
                  
                  <div className={`border rounded-lg overflow-hidden transition-all duration-500 ${tabIndex === 0 ? 'opacity-100' : 'opacity-30'}`}>
                    <div className="bg-red-500/10 p-4 border-b border-border flex items-center">
                      <Landmark className="h-5 w-5 text-red-500 mr-2" />
                      <h4 className="font-bold">Traditional Finance</h4>
                    </div>
                    
                    <div className="divide-y">
                      {accessScenarios[0].scenarios.map((scenario, idx) => (
                        <div key={idx} className="grid grid-cols-6 gap-2 p-3 items-center">
                          <div className="col-span-3 text-sm">{scenario.who}</div>
                          <div className="col-span-2 text-xs text-muted-foreground">{scenario.access}</div>
                          <div className="col-span-1 flex justify-center">
                            {scenario.result ? 
                              <Check className="h-5 w-5 text-green-500" /> : 
                              <X className="h-5 w-5 text-red-500" />
                            }
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`border rounded-lg overflow-hidden transition-all duration-500 ${tabIndex === 1 ? 'opacity-100' : 'opacity-30'}`}>
                    <div className="bg-amber-500/10 p-4 border-b border-border flex items-center">
                      <BitcoinLogoIcon className="h-5 w-5 text-amber-500 mr-2" />
                      <h4 className="font-bold">Bitcoin Network</h4>
                    </div>
                    
                    <div className="divide-y">
                      {accessScenarios[1].scenarios.map((scenario, idx) => (
                        <div key={idx} className="grid grid-cols-6 gap-2 p-3 items-center">
                          <div className="col-span-3 text-sm">{scenario.who}</div>
                          <div className="col-span-2 text-xs text-muted-foreground">{scenario.access}</div>
                          <div className="col-span-1 flex justify-center">
                            {scenario.result ? 
                              <Check className="h-5 w-5 text-green-500" /> : 
                              <X className="h-5 w-5 text-red-500" />
                            }
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center mt-8 space-x-2">
                  <button 
                    className={`w-3 h-3 rounded-full ${tabIndex === 0 ? 'bg-blue-500' : 'bg-muted'}`}
                    onClick={() => setTabIndex(0)}
                    aria-label="View traditional finance"
                  />
                  <button 
                    className={`w-3 h-3 rounded-full ${tabIndex === 1 ? 'bg-blue-500' : 'bg-muted'}`}
                    onClick={() => setTabIndex(1)}
                    aria-label="View Bitcoin network"
                  />
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
        
        {/* Unequal vs Equal Rules Section */}
        <section className="py-24 bg-card" ref={targetRef}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                style={{ opacity, scale }}
                className="text-center mb-16"
              >
                <Badge className="mb-4 px-3 py-1 bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                  <Scale className="mr-1 h-3.5 w-3.5" />
                  <span>Financial Inclusion</span>
                </Badge>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">A Tale of Two Systems</h2>
                <p className="text-lg text-muted-foreground">
                  Traditional finance operates with different rules for different people. 
                  Bitcoin introduces a system where all participants play by the same rules, regardless of who they are.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-background rounded-lg p-6 border">
                  <div className="flex items-center mb-6">
                    <div className="bg-red-500/10 p-3 rounded-full mr-4">
                      <Building className="h-6 w-6 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold">Traditional Finance</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-red-500/10 text-red-500 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                        <X className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Geographic Restrictions</h4>
                        <p className="text-sm text-muted-foreground">
                          Services vary dramatically based on nationality and location. Many financial products are simply unavailable in certain regions.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-red-500/10 text-red-500 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                        <X className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Wealth-Based Access</h4>
                        <p className="text-sm text-muted-foreground">
                          Premium services, lower fees, and better rates are reserved for those with higher account balances or wealth metrics.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-red-500/10 text-red-500 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                        <X className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Exclusionary Requirements</h4>
                        <p className="text-sm text-muted-foreground">
                          Credit scores, employment verification, address history, and government ID requirements systematically exclude billions of people.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-red-500/10 text-red-500 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                        <X className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Arbitrary Rule Changes</h4>
                        <p className="text-sm text-muted-foreground">
                          Terms of service, interest rates, and accessibility can change at any time, often with little notice to customers.
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
                    <h3 className="text-xl font-bold">Bitcoin Network</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-green-500/10 text-green-500 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                        <Check className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Borderless by Design</h4>
                        <p className="text-sm text-muted-foreground">
                          Bitcoin operates identically everywhere in the world. A transaction from Tokyo to Toronto works exactly the same as one from Lagos to Lima.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-green-500/10 text-green-500 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                        <Check className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Equal Protocol Rules</h4>
                        <p className="text-sm text-muted-foreground">
                          All transactions follow the same validation rules. A billionaire's transaction has no priority over a student's transaction with the same fee.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-green-500/10 text-green-500 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                        <Check className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Permissionless Access</h4>
                        <p className="text-sm text-muted-foreground">
                          Anyone with internet access can participate without approval, background checks, or identification. No minimum balance requirements or social status needed.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-green-500/10 text-green-500 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                        <Check className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Predictable Protocol</h4>
                        <p className="text-sm text-muted-foreground">
                          The core rules of Bitcoin (like the 21 million cap) are virtually impossible to change, creating certainty for all participants regardless of political influence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Real People Stories */}
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Real People, Real Stories</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Across the world, people from vastly different backgrounds are discovering 
                  financial inclusion through the level playing field of Bitcoin.
                </p>
              </motion.div>
              
              <div className="space-y-8">
                {characters.map((character, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    key={index}
                  >
                    <Card className="overflow-hidden border-blue-500/20">
                      <div className="md:grid md:grid-cols-3">
                        <div className={`${character.color} p-6 md:col-span-1 flex flex-col justify-center items-center`}>
                          <div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                            <User className="h-8 w-8 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-center">{character.name}</h3>
                          <p className="text-sm text-center">{character.location}</p>
                        </div>
                        
                        <CardContent className="p-6 md:col-span-2">
                          <h4 className="text-lg font-bold mb-2">{character.background}</h4>
                          <p className="text-muted-foreground mb-4">
                            {character.story}
                          </p>
                          <div className="bg-background p-3 rounded-md border text-sm">
                            <span className="font-medium block mb-1">Impact:</span>
                            {character.impact}
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Bitcoin Rules Section */}
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Same Rules for Everyone</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Bitcoin's protocol treats all participants equally. These core rules apply to everyone,
                  from institutions to individuals, creating a truly level playing field.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {bitcoinRules.map((rule, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    key={index}
                    className="bg-card rounded-lg p-6 border shadow-sm"
                  >
                    <div className="flex items-start">
                      <div className="bg-amber-500/10 p-3 rounded-full mr-4 flex-shrink-0">
                        {rule.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">{rule.title}</h3>
                        <p className="text-sm text-muted-foreground">{rule.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12 p-6 bg-blue-500/5 rounded-lg border border-blue-500/20">
                <div className="flex items-start">
                  <div className="bg-blue-500/10 p-3 rounded-full mr-4 flex-shrink-0">
                    <ShieldAlert className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">The Power of Protocol Rules</h3>
                    <p className="text-muted-foreground mb-4">
                      Unlike traditional systems where rules are enforced by human authorities who may apply them differently based on who you are, Bitcoin's rules are enforced by mathematical consensus across thousands of independent nodes.
                    </p>
                    <p className="text-muted-foreground">
                      This means no special access, no preferential treatment, and no exceptions for the powerful or well-connected. The same rules apply to everyone, creating the first truly level financial playing field in history.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Global Statistics */}
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Global Financial Game in Numbers</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Traditional finance leaves billions on the sidelines, 
                  while Bitcoin offers a path to universal financial inclusion.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card className="border-blue-500/20">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <h3 className="text-5xl font-bold text-blue-500 mb-2">1.4B</h3>
                      <p className="text-sm text-muted-foreground mb-4">Adults without bank accounts</p>
                      <p className="text-xs text-muted-foreground">
                        Nearly 1 in 4 adults globally remain excluded from the traditional financial system.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-blue-500/20">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <h3 className="text-5xl font-bold text-blue-500 mb-2">5.2B</h3>
                      <p className="text-sm text-muted-foreground mb-4">People with internet access</p>
                      <p className="text-xs text-muted-foreground">
                        The potential reach of Bitcoin—anyone with internet can participate without permission.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-blue-500/20">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <h3 className="text-5xl font-bold text-blue-500 mb-2">100+</h3>
                      <p className="text-sm text-muted-foreground mb-4">Countries with currency restrictions</p>
                      <p className="text-xs text-muted-foreground">
                        Citizens in these countries face limitations on moving or exchanging their money freely.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-card rounded-lg p-6 border">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                    <h3 className="text-xl font-bold mb-4">Financial Inclusion Impact</h3>
                    <p className="text-muted-foreground mb-4">
                      By removing gatekeepers and minimizing entry barriers, Bitcoin is bringing financial services to populations that have been historically excluded:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mr-2 mt-1" />
                        <span>Unbanked individuals can receive and store value without a bank account</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mr-2 mt-1" />
                        <span>People in countries with capital controls can preserve savings</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mr-2 mt-1" />
                        <span>Small businesses can access global customers without expensive intermediaries</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="md:w-1/2 md:border-l md:pl-8">
                    <h3 className="text-xl font-bold mb-4">Bitcoin Adoption Growth</h3>
                    <div className="h-32 w-full bg-blue-500/5 rounded-lg border border-blue-500/20 flex items-center justify-center p-4">
                      <div className="space-y-1 w-full">
                        <div className="flex justify-between text-xs mb-1">
                          <span>Users (est.)</span>
                          <span>425M+</span>
                        </div>
                        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 w-[42.5%]"></div>
                        </div>
                        
                        <div className="flex justify-between text-xs mt-4 mb-1">
                          <span>Countries</span>
                          <span>195+</span>
                        </div>
                        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 w-[97.5%]"></div>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4 text-center">
                      The only financial network that operates 24/7/365 in every country on Earth
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Final Call to Action */}
        <section className="py-24 bg-blue-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Globe className="h-12 w-12 text-blue-500 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Global Game</h2>
                <p className="text-lg text-muted-foreground mb-10">
                  For the first time in history, we have a financial system that treats everyone equally.
                  No matter who you are or where you're from, the rules stay the same for everyone.
                </p>
                
                <div className="bg-card rounded-lg p-6 md:p-10 border shadow-md mb-10">
                  <div className="flex items-center justify-center mb-6">
                    <div className="p-4 rounded-full bg-blue-500/10">
                      <BitcoinLogoIcon className="h-8 w-8 text-amber-500" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-6">The Level Playing Field</h3>
                  <p className="mb-8">
                    Throughout history, financial systems have operated with different rules for different people. 
                    Bitcoin changes that paradigm by creating a system where the rules are the same for everyone, 
                    and they're enforced by mathematics, not human discretion.
                  </p>
                  
                  <Button
                    asChild
                    size="lg"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium"
                  >
                    <Link to="/learn/beginner">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Learn How Bitcoin Creates Financial Equality
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

export default GlobalGame; 