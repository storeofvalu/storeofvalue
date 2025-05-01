import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Ban,
  Lightbulb,
  TrendingUp,
  Skull,
  Zap,
  ShieldAlert,
  Coins,
  School,
  Globe,
  Scale,
  BarChart3,
  BookOpen,
  Check,
  X,
  ChevronsUp,
  Clock,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import BitcoinLogoIcon from '../components/BitcoinLogoIcon';

// Define common Bitcoin misconceptions and their rebuttals
const misconceptions = [
  {
    id: "bubble",
    title: "Bitcoin is just a bubble",
    icon: Ban,
    shortRebuttal: "One of history's most persistent bubbles with multiple 80%+ crashes and recoveries",
    misconception: "Bitcoin has no intrinsic value and its price is purely speculative. It's a bubble that will eventually pop to zero.",
    reality: "Bitcoin has survived multiple 80%+ drawdowns and recovered to make new all-time highs. Unlike actual bubbles that burst and disappear, Bitcoin has demonstrated remarkable resilience over 14+ years. Its value is derived from its properties: digital scarcity, censorship resistance, and a secure monetary network outside any single entity's control.",
    stats: [
      { label: "Market cycles survived", value: "4+" },
      { label: "Years since creation", value: "14+" },
      { label: "Major obituaries written", value: "400+" }
    ]
  },
  {
    id: "volatility",
    title: "Too volatile to be money",
    icon: TrendingUp,
    shortRebuttal: "Early monetization phase volatility is necessary and expected",
    misconception: "Bitcoin's price volatility makes it unsuitable as a currency or store of value.",
    reality: "Bitcoin's volatility is a natural feature of its monetary evolution. As a nascent asset monetizing from zero, volatility is expected during price discovery. The volatility has actually decreased over time as market cap grows. Additionally, Bitcoin's volatility is predominantly upward - a desirable trait for a savings technology.",
    stats: [
      { label: "Reduced volatility over time", value: "↓ 60%" },
      { label: "Average yearly return", value: "+130%" },
      { label: "Compound annual growth rate", value: "+50%" }
    ]
  },
  {
    id: "criminal",
    title: "Primarily used by criminals",
    icon: Skull,
    shortRebuttal: "Transparent ledger is actually criminals' worst nightmare",
    misconception: "Bitcoin is mainly used for illegal activities like drug trafficking, money laundering, and ransomware.",
    reality: "Bitcoin's blockchain is entirely public and transparent - the opposite of what criminals want. Chainalysis reports that illicit activity represents less than 0.5% of Bitcoin transaction volume. Cash remains the preferred medium for illegal transactions. Law enforcement has repeatedly used Bitcoin's transparent ledger to catch criminals.",
    stats: [
      { label: "Illicit transactions", value: "<0.5%" },
      { label: "Transparency level", value: "100%" },
      { label: "Crimes solved using blockchain", value: "Thousands" }
    ]
  },
  {
    id: "energy",
    title: "Wastes energy / harms environment",
    icon: Zap,
    shortRebuttal: "Monetizes stranded energy and incentivizes renewable development",
    misconception: "Bitcoin mining consumes too much electricity and contributes to climate change.",
    reality: "Bitcoin mining increasingly utilizes renewable energy sources (est. 59%+) and incentivizes their development by providing a baseload buyer. Miners target the cheapest energy sources, which are often stranded renewables or wasted energy (flared methane). The network's security and unique properties justify its energy consumption, which is lower than the traditional banking system or gold mining.",
    stats: [
      { label: "Renewable energy usage", value: "59%+" },
      { label: "Energy used vs. banking", value: "~40% less" },
      { label: "Carbon footprint vs. gold", value: "~25% less" }
    ]
  },
  {
    id: "security",
    title: "Can be hacked / not secure",
    icon: ShieldAlert,
    shortRebuttal: "Most secure computing network in human history by orders of magnitude",
    misconception: "Bitcoin can be hacked, counterfeited, or shut down by a coordinated attack.",
    reality: "Bitcoin's core network has never been hacked in 14+ years despite the $500B+ bounty for doing so. Its security budget (mining) makes it the most powerful computing network ever created. While individual custodial services may be vulnerable, the base protocol has proven remarkably resilient to attacks through game theory, cryptography, and decentralization.",
    stats: [
      { label: "Days without network downtime", value: "5,200+" },
      { label: "Hash rate security", value: "420+ EH/s" },
      { label: "Computing power vs. 2010", value: "100,000,000×" }
    ]
  },
  {
    id: "replaced",
    title: "Will be replaced by a better crypto",
    icon: Coins,
    shortRebuttal: "Network effects of money are nearly impossible to displace",
    misconception: "A cryptocurrency with better technology will eventually replace Bitcoin.",
    reality: "Money is primarily a social technology that derives value from network effects, not technical features alone. Bitcoin's first-mover advantage, established liquidity, security, and brand recognition create tremendous staying power. While other cryptocurrencies may serve different purposes, Bitcoin's specific combination of properties (decentralization, fixed supply, security, liquidity) remains unmatched for its intended function as sound money.",
    stats: [
      { label: "Market dominance", value: "50%+" },
      { label: "Liquidity advantage", value: "10×" },
      { label: "Developer count", value: "Growing" }
    ]
  },
  {
    id: "centralized",
    title: "Controlled by a few entities",
    icon: Globe,
    shortRebuttal: "Most decentralized monetary network in history",
    misconception: "Bitcoin is controlled by a small group of miners, developers, or wealthy holders.",
    reality: "Bitcoin's consensus mechanism requires broad agreement across multiple stakeholder groups. No single entity can change the rules without consensus. Mining is distributed globally across thousands of facilities. There are 50,000+ reachable nodes, millions of holders, and hundreds of independent developers. This makes Bitcoin the most decentralized monetary network in existence.",
    stats: [
      { label: "Full nodes worldwide", value: "50,000+" },
      { label: "Countries with miners", value: "100+" },
      { label: "Unique addresses", value: "45 million+" }
    ]
  },
  {
    id: "banned",
    title: "Governments will ban it",
    icon: Scale,
    shortRebuttal: "Impossible to comprehensively ban; tried and failed repeatedly",
    misconception: "Governments will eventually ban Bitcoin, making it worthless.",
    reality: "Bitcoin's decentralized nature makes comprehensive bans technically unfeasible. Countries that have attempted bans (China, Russia) have shown the limitations of such approaches, with usage continuing underground or users accessing via VPNs. The trend is actually toward increasing regulatory clarity and institutional adoption. Democratic governments face constitutional challenges in banning speech-like software and property.",
    stats: [
      { label: "Countries with legal clarity", value: "Increasing" },
      { label: "Efficacy of attempted bans", value: "Limited" },
      { label: "Institutional adoption", value: "Growing" }
    ]
  },
  {
    id: "supply",
    title: "The 21M supply limit can be changed",
    icon: BarChart3,
    shortRebuttal: "Economic incentives make this virtually impossible",
    misconception: "Bitcoin's 21 million supply cap can be changed through a software update.",
    reality: "Changing Bitcoin's supply cap would require near-unanimous consensus across the entire network, including miners, nodes, exchanges, and users. The economic incentives strongly oppose any supply increase, as it would devalue everyone's holdings. This creates one of the strongest assurances in Bitcoin - that monetary policy is effectively set in stone.",
    stats: [
      { label: "Consensus required", value: "Near 100%" },
      { label: "Economic incentive", value: "Strongly against" },
      { label: "Supply cap debates", value: "Consistently rejected" }
    ]
  }
];

// Interactive myth-busting component
const MythBuster = ({ misconception, isActive, onClick }) => {
  const bgClass = isActive ? 'bg-orange-500/10' : 'bg-card';
  const borderClass = isActive ? 'border-orange-500/20' : 'border-border';
  const iconBgClass = isActive ? 'bg-orange-500/20' : 'bg-muted';
  const iconClass = isActive ? 'text-orange-500' : 'text-muted-foreground';
  
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={`rounded-lg p-5 ${bgClass} ${borderClass} border cursor-pointer mb-4`}
      onClick={onClick}
    >
      <div className="flex items-center">
        <div className={`${iconBgClass} p-2 rounded-full mr-4`}>
          <misconception.icon className={`h-5 w-5 ${iconClass}`} />
        </div>
        <div>
          <h3 className="font-bold">{misconception.title}</h3>
          <p className="text-sm text-muted-foreground">{misconception.shortRebuttal}</p>
        </div>
        <div className="ml-auto">
          {isActive ? 
            <Check className="h-5 w-5 text-green-500" /> : 
            <Ban className="h-5 w-5 text-red-500/50" />
          }
        </div>
      </div>
    </motion.div>
  );
};

const Misconceptions = () => {
  const [activeMisconception, setActiveMisconception] = useState(misconceptions[0]);
  const detailsRef = useRef(null);
  const isInView = useInView(detailsRef, { once: false, amount: 0.3 });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  // Helper function to determine if a misconception is active
  const isActive = (misconception) => {
    return misconception.id === activeMisconception.id;
  };
  
  // Handle click on a myth card
  const handleMythClick = (misconception) => {
    setActiveMisconception(misconception);
    
    // Smooth scroll to details section on mobile
    if (window.innerWidth < 768) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto z-10"
          >
            <div className="inline-flex mb-6">
              <div className="relative">
                <BitcoinLogoIcon size="lg" className="text-orange-500" />
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full h-7 w-7 flex items-center justify-center"
                >
                  <X className="h-4 w-4" />
                </motion.div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              Bitcoin: Myths & Misconceptions
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium mb-8 text-muted-foreground max-w-2xl mx-auto">
              Correcting the record on the most persistent myths about Bitcoin
            </h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Badge className="mb-6 px-3 py-1 bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 transition-colors">
                <Lightbulb className="mr-1 h-3.5 w-3.5" />
                <span>Myth Busting</span>
              </Badge>
            </motion.div>
          </motion.div>
          
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div 
              style={{ y }} 
              className="absolute w-full h-full"
            >
              <svg className="w-full h-full opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="misconceptionPattern" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#misconceptionPattern)" />
              </svg>
            </motion.div>
          </div>
        </section>
        
        {/* Main content section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left column - Misconception list */}
                <div className="md:w-2/5">
                  <div className="sticky top-24">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="mb-8"
                    >
                      <h2 className="text-2xl font-bold mb-6 flex items-center">
                        <Ban className="mr-2 h-5 w-5 text-red-500" />
                        Common Misconceptions
                      </h2>
                    </motion.div>
                    
                    <div className="space-y-4">
                      {misconceptions.map((myth, index) => (
                        <motion.div
                          key={myth.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                          <MythBuster 
                            misconception={myth} 
                            isActive={isActive(myth)}
                            onClick={() => handleMythClick(myth)}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Right column - Detailed explanation */}
                <div className="md:w-3/5" ref={detailsRef}>
                  <motion.div
                    key={activeMisconception.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-br from-orange-500/5 to-amber-500/5 rounded-xl border border-orange-500/20 p-6 md:p-8"
                  >
                    <div className="flex items-center mb-6">
                      <div className="bg-orange-500/20 p-3 rounded-full mr-4">
                        <activeMisconception.icon className="h-6 w-6 text-orange-500" />
                      </div>
                      <h3 className="text-2xl font-bold">Myth: {activeMisconception.title}</h3>
                    </div>
                    
                    <div className="mb-8">
                      <div className="bg-background/80 backdrop-blur-sm rounded-lg border border-orange-500/10 p-4 mb-6">
                        <h4 className="text-sm uppercase text-red-500 font-semibold mb-2 flex items-center">
                          <Ban className="h-4 w-4 mr-1" />
                          The Misconception
                        </h4>
                        <p className="text-muted-foreground">{activeMisconception.misconception}</p>
                      </div>
                      
                      <div className="bg-background/80 backdrop-blur-sm rounded-lg border border-green-500/10 p-4">
                        <h4 className="text-sm uppercase text-green-500 font-semibold mb-2 flex items-center">
                          <Check className="h-4 w-4 mr-1" />
                          The Reality
                        </h4>
                        <p className="text-muted-foreground">{activeMisconception.reality}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      {activeMisconception.stats.map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="bg-card p-4 rounded-lg border border-orange-500/10 text-center"
                        >
                          <h4 className="font-bold text-orange-500 mb-1">{stat.value}</h4>
                          <p className="text-xs text-muted-foreground">{stat.label}</p>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="bg-background/80 backdrop-blur-sm rounded-lg border border-amber-500/10 p-4">
                      <h4 className="text-sm uppercase text-amber-500 font-semibold mb-2 flex items-center">
                        <Lightbulb className="h-4 w-4 mr-1" />
                        Key Insight
                      </h4>
                      <p className="text-muted-foreground">
                        Misconceptions about emerging technologies are common throughout history. The internet was once 
                        dismissed as a fad, automobiles were considered inferior to horses, and television was seen as a 
                        threat to society. Bitcoin follows this pattern as a disruptive innovation that challenges our 
                        understanding of money itself.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Interactive fun section */}
        <section className="py-16 bg-gradient-to-r from-orange-950/5 to-yellow-950/5 border-y border-orange-500/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <Badge className="mb-4 px-3 py-1 bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 transition-colors">
                  <ChevronsUp className="mr-1 h-3.5 w-3.5" />
                  <span>Higher Perspective</span>
                </Badge>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  The Pattern of Disruptive Innovation
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8">
                  History shows that transformative technologies follow a predictable pattern of criticism, 
                  resistance, and eventual acceptance
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg border p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-500/10 p-2 rounded-full mr-3">
                      <Clock className="h-5 w-5 text-amber-500" />
                    </div>
                    <h3 className="text-xl font-bold">The Stages of Disruption</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-red-500/10 p-2 rounded-full mr-3 mt-0.5">
                        <span className="text-red-500 font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Dismissal</h4>
                        <p className="text-sm text-muted-foreground">
                          "It's a fad that will never work" (Bitcoin 2009-2013)
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-orange-500/10 p-2 rounded-full mr-3 mt-0.5">
                        <span className="text-orange-500 font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Criticism</h4>
                        <p className="text-sm text-muted-foreground">
                          "It's dangerous and only used by criminals" (Bitcoin 2013-2017)
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-yellow-500/10 p-2 rounded-full mr-3 mt-0.5">
                        <span className="text-yellow-500 font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Competition</h4>
                        <p className="text-sm text-muted-foreground">
                          "Our alternative version is better" (Bitcoin 2017-2021)
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-green-500/10 p-2 rounded-full mr-3 mt-0.5">
                        <span className="text-green-500 font-bold text-sm">4</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Acceptance</h4>
                        <p className="text-sm text-muted-foreground">
                          "We've always supported innovation" (Bitcoin 2021-present)
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
                  className="bg-card rounded-lg border p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-500/10 p-2 rounded-full mr-3">
                      <School className="h-5 w-5 text-amber-500" />
                    </div>
                    <h3 className="text-xl font-bold">Historical Parallels</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="border-l-2 border-dashed border-amber-500/30 pl-4 py-1">
                      <h4 className="font-medium text-sm mb-1">The Internet (1990s)</h4>
                      <p className="text-xs text-muted-foreground mb-1">
                        "The internet is just a fad. The growth of it is tapering off now." — Robert Metcalfe, 1995
                      </p>
                      <div className="text-xs text-amber-500 font-medium">
                        Became foundation of global commerce
                      </div>
                    </div>
                    
                    <div className="border-l-2 border-dashed border-amber-500/30 pl-4 py-1">
                      <h4 className="font-medium text-sm mb-1">Automobiles (Early 1900s)</h4>
                      <p className="text-xs text-muted-foreground mb-1">
                        "The horse is here to stay but the automobile is only a novelty." — President of Michigan Savings Bank, 1903
                      </p>
                      <div className="text-xs text-amber-500 font-medium">
                        Transformed global transportation
                      </div>
                    </div>
                    
                    <div className="border-l-2 border-dashed border-amber-500/30 pl-4 py-1">
                      <h4 className="font-medium text-sm mb-1">Mobile Phones (1980s)</h4>
                      <p className="text-xs text-muted-foreground mb-1">
                        "Cellular phones will absolutely not replace local wire systems." — Marty Cooper, 1981
                      </p>
                      <div className="text-xs text-amber-500 font-medium">
                        Now used by 5+ billion people
                      </div>
                    </div>
                    
                    <div className="border-l-2 border-dashed border-amber-500/30 pl-4 py-1">
                      <h4 className="font-medium text-sm mb-1">Bitcoin (2009-Present)</h4>
                      <p className="text-xs text-muted-foreground mb-1">
                        "Stay away. Bitcoin is a mirage." — Warren Buffett, 2014
                      </p>
                      <div className="text-xs text-amber-500 font-medium">
                        On track to become global monetary standard
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Continue Your Bitcoin Journey</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Now that you understand common Bitcoin misconceptions, explore deeper perspectives 
                  or start your learning path to gain a comprehensive understanding.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/perspectives">
                    <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                      <Lightbulb className="mr-2 h-5 w-5" />
                      Explore Perspectives
                    </Button>
                  </Link>
                  <Link to="/learn">
                    <Button variant="outline" size="lg" className="border-orange-500 text-orange-500 hover:bg-orange-500/10">
                      <BookOpen className="mr-2 h-5 w-5" />
                      Start Learning
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

export default Misconceptions; 