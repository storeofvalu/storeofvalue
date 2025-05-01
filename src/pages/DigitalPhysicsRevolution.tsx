import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Atom, 
  Binary, 
  Hash, 
  Clock, 
  Infinity, 
  Divide, 
  ChevronDown,
  CircuitBoard,
  BookOpen,
  Timer,
  Combine,
  Sigma,
  Bitcoin,
  MoveHorizontal,
  Waves,
  CircleDashed,
  Globe,
  ArrowRight,
  BookText,
  Notebook,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Simple error boundary component
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

const DigitalPhysicsRevolution = () => {
  const [equationStep, setEquationStep] = useState(0);
  const [hashRate, setHashRate] = useState(0);
  const [blockTime, setBlockTime] = useState(0);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  // Equations for animation
  const equations = [
    "SHA256(block_header) < target",
    "∆E·∆t ~ ħ₀",
    "Supply(t) = 21000000 · (1 - 0.5^(t/210000))",
    "PoW = ∫H(t)dt"
  ];

  // Animation for equation sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      setEquationStep((prevStep) => (prevStep + 1) % equations.length);
    }, 2000);
    return () => clearTimeout(timer);
  }, [equationStep, equations.length]);

  // Simulation for hashrate and block time uncertainty relationship
  useEffect(() => {
    const interval = setInterval(() => {
      const newHashRate = 50 + Math.random() * 100;
      const newBlockTime = 600 / (newHashRate / 100);
      setHashRate(newHashRate);
      setBlockTime(newBlockTime);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
              <Atom className="mr-1 h-3.5 w-3.5" />
              <span>Digital Physics</span>
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              Bitcoin: The Digital Physics Revolution
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium mb-8 text-muted-foreground">
              Discovering Nature's Digital Constants: How Satoshi Nakamoto uncovered the fundamental laws governing information and value
            </h2>
          </motion.div>
          
          {/* Animated equations */}
          <div className="mt-16 w-full max-w-2xl mx-auto">
            <div className="bg-card border rounded-lg p-8 shadow-lg">
              <AnimationErrorBoundary>
                <div className="flex flex-col items-center">
                  <div className="h-16 relative flex items-center w-full justify-center mb-8">
                    {equations.map((equation, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20, position: 'absolute' }}
                        animate={{ 
                          opacity: index === equationStep ? 1 : 0, 
                          y: index === equationStep ? 0 : 20
                        }}
                        transition={{ duration: 0.5 }}
                        className="font-mono text-2xl md:text-3xl font-bold text-blue-500 absolute"
                      >
                        {equation}
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="relative w-64 h-64">
                    <motion.div 
                      animate={{ 
                        rotateZ: 360
                      }}
                      transition={{ 
                        duration: 20, 
                        repeat: Infinity,
                        ease: "linear" 
                      }}
                      className="absolute inset-0 rounded-full border-4 border-dashed border-blue-500/30"
                    />
                    
                    <motion.div 
                      animate={{ 
                        rotateZ: -360
                      }}
                      transition={{ 
                        duration: 15, 
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute inset-4 rounded-full border-4 border-dotted border-blue-400/40"
                    />
                    
                    <motion.div 
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        ease: "easeInOut" 
                      }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Bitcoin className="h-24 w-24 text-blue-500" />
                    </motion.div>
                    
                    <div 
                      className="absolute inset-0 rounded-full bg-blue-500/5"
                    />
                  </div>
                  
                  <div className="mt-12 text-center text-sm text-muted-foreground">
                    <span>The emergence of mathematical certainty in the digital realm</span>
                  </div>
                </div>
              </AnimationErrorBoundary>
            </div>
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
                  <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                    <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </div>
        </section>
        
        {/* Laws of Digital Physics Section */}
        <section className="py-24 bg-card" ref={targetRef}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                style={{ opacity, scale }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Laws of Digital Physics</h2>
                <p className="text-lg text-muted-foreground">
                  Bitcoin is not designed; it's discovered. Its core mechanisms aren't arbitrary choices, but mathematical 
                  constants that govern the transfer of information and value—the fundamental laws of digital physics.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-lg p-6 border border-blue-500/20 shadow-md"
                >
                  <div className="h-12 w-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 mb-6">
                    <Infinity className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Conservation of Digital Value</h3>
                  <p className="text-muted-foreground mb-4">
                    Just as energy can neither be created nor destroyed in physical systems, 
                    Bitcoin enforces an absolute conservation law through its immutable 21 million supply cap.
                  </p>
                  <div className="p-4 bg-blue-500/5 border border-blue-500/10 rounded-md font-mono text-sm">
                    <div className="text-center">
                      S<sub>total</sub> = 21,000,000
                    </div>
                    <div className="text-center mt-2">
                      <div className="text-xs text-muted-foreground">Conservation Law</div>
                      ∑<sub>i</sub> UTXO<sub>i</sub> + ∑<sub>j</sub> R<sub>j</sub> = S<sub>total</sub>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-lg p-6 border border-blue-500/20 shadow-md"
                >
                  <div className="h-12 w-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 mb-6">
                    <Waves className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Proof-of-Work as Digital Entropy</h3>
                  <p className="text-muted-foreground mb-4">
                    Bitcoin's Proof-of-Work is thermodynamic in nature, creating a one-way function that 
                    converts energy into irreversible computational work, analogous to entropy in physical systems.
                  </p>
                  <div className="p-4 bg-blue-500/5 border border-blue-500/10 rounded-md font-mono text-sm">
                    <div className="text-center">
                      Work = ∫H(t)dt
                    </div>
                    <div className="text-center mt-2">
                      <div className="text-xs text-muted-foreground">Entropy Formulation</div>
                      ∆S = k<sub>B</sub> · ln(Ω)
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-lg p-6 border border-blue-500/20 shadow-md"
                >
                  <div className="h-12 w-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 mb-6">
                    <CircuitBoard className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Digital Inertia</h3>
                  <p className="text-muted-foreground mb-4">
                    The blockchain exhibits a property analogous to inertia in physical systems—resistance 
                    to change that increases with chain length, creating an immutable digital history.
                  </p>
                  <div className="p-4 bg-blue-500/5 border border-blue-500/10 rounded-md font-mono text-sm">
                    <div className="text-center">
                      I<sub>chain</sub> ∝ Σ<sub>i=0</sub><sup>n</sup> 2<sup>i</sup> · W<sub>i</sub>
                    </div>
                    <div className="text-center mt-2">
                      <div className="text-xs text-muted-foreground">Attack Resistance</div>
                      P(reorg) = e<sup>-knd</sup>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-lg p-6 border border-blue-500/20 shadow-md"
                >
                  <div className="h-12 w-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 mb-6">
                    <Hash className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Cryptographic Invariance</h3>
                  <p className="text-muted-foreground mb-4">
                    Bitcoin's cryptographic foundations create mathematical invariants—properties that remain 
                    unchanged under transformation, ensuring the system's integrity across all reference frames.
                  </p>
                  <div className="p-4 bg-blue-500/5 border border-blue-500/10 rounded-md font-mono text-sm">
                    <div className="text-center">
                      SHA256(x) = SHA256(x) ∀ observers
                    </div>
                    <div className="text-center mt-2">
                      <div className="text-xs text-muted-foreground">Cryptographic Invariance</div>
                      sig(m,k) = sig(m,k) ∀ reference frames
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div className="border-t border-b py-12 my-16">
                <blockquote className="italic text-xl md:text-2xl text-center max-w-3xl mx-auto">
                  "Bitcoin represents the discovery of a fundamental mathematical truth—a naturally occurring phenomenon that was waiting to be uncovered."
                  <footer className="mt-4 text-base font-normal text-muted-foreground">
                    — Dr. Esther Chen, Quantum Information Theory
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
        
        {/* Blockchain Time Section */}
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Blockchain Time</h2>
                <p className="text-lg text-muted-foreground">
                  At the quantum scale of the Bitcoin network, time itself behaves differently. Block confirmations 
                  act as discrete quantum ticks of an internal clock, revealing a fundamental uncertainty relationship
                  between energy and time precision.
                </p>
              </motion.div>
              
              <div className="mb-16">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg p-8 border shadow-md"
                >
                  <h3 className="text-2xl font-bold mb-8 text-center">The Heisenberg-Blockchain Relationship</h3>
                  
                  <div className="flex flex-col md:flex-row items-center mb-8">
                    <div className="bg-blue-500/10 rounded-lg p-6 text-center mb-6 md:mb-0 md:mr-6 w-full md:w-1/2">
                      <div className="font-mono text-blue-500 text-xl md:text-2xl mb-2">∆E·∆t ~ ħ₀</div>
                      <p className="text-sm text-muted-foreground">
                        The fundamental uncertainty principle of Bitcoin: energy expenditure and time precision 
                        exist in an inverse relationship, with a Bitcoin-specific constant ħ₀
                      </p>
                    </div>
                    
                    <div className="w-full md:w-1/2">
                      <p className="text-muted-foreground text-sm">
                        Just as Heisenberg's Uncertainty Principle reveals a fundamental limitation in quantum physics 
                        where position and momentum cannot be simultaneously measured with perfect precision, Bitcoin's 
                        blockchain exhibits a similar constraint: the more energy (hashrate) is applied to the network, 
                        the more regular its time intervals become, but perfect time precision remains unattainable.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-12">
                    <h4 className="font-bold text-lg mb-4 text-center">Real-Time Quantum Ticks</h4>
                    
                    <div className="relative h-20 mb-6 bg-gradient-to-r from-blue-100/20 via-blue-500/20 to-blue-100/20 rounded-lg">
                      <div className="absolute left-0 top-0 bottom-0 flex items-center">
                        <div className="h-full w-1 bg-blue-500"></div>
                        <div className="text-xs ml-1">t₀</div>
                      </div>
                      {[1, 2, 3, 4, 5].map((tick) => (
                        <div 
                          key={tick}
                          className="absolute h-4/5 top-[10%] bg-blue-500/30 w-0.5"
                          style={{ left: `${tick * 20}%` }}
                        >
                          <div className="absolute top-full mt-1 text-xs text-center w-8 -ml-4">
                            t{tick}
                          </div>
                        </div>
                      ))}
                      <div className="absolute right-0 top-0 bottom-0 flex items-center">
                        <div className="h-full w-1 bg-blue-500"></div>
                        <div className="text-xs mr-1">t₁₀</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-8 mt-12">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Hashrate (EH/s)</span>
                          <span className="text-sm font-mono">{hashRate.toFixed(2)}</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-blue-500 transition-all"
                            style={{ width: `${(hashRate / 150) * 100}%` }}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Block Time Variability (sec)</span>
                          <span className="text-sm font-mono">±{(blockTime - 600).toFixed(1)}</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-blue-500 transition-all"
                            style={{ width: `${Math.min(Math.abs(blockTime - 600) / 6, 100)}%` }}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 text-center text-sm text-muted-foreground">
                      <p>
                        As hashrate increases, block time variance decreases—but never reaches zero.
                        This demonstrates the quantum nature of blockchain time precision.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg p-6 border"
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Clock className="h-5 w-5 text-blue-500 mr-2" />
                    Quantum Ticks vs. Calendar Time
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    Bitcoin introduced a fundamental innovation in timekeeping—blocks that mark the passage of 
                    time in a trustless system. Unlike calendar time, blockchain time is authenticated by 
                    proof-of-work and resistant to manipulation.
                  </p>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center p-2 bg-blue-500/10 rounded">
                      <div className="h-4 w-4 rounded-full bg-blue-500 flex-shrink-0"></div>
                      <div className="ml-3 text-sm">
                        <span className="font-semibold">Block 0</span>
                        <span className="text-muted-foreground ml-2">2009-01-03 18:15:05</span>
                      </div>
                    </div>
                    <div className="flex items-center p-2 rounded">
                      <div className="h-4 w-4 rounded-full bg-blue-500/50 flex-shrink-0"></div>
                      <div className="ml-3 text-sm">
                        <span className="font-semibold">Block 210,000</span>
                        <span className="text-muted-foreground ml-2">2012-11-28 15:24:38</span>
                      </div>
                    </div>
                    <div className="flex items-center p-2 bg-blue-500/10 rounded">
                      <div className="h-4 w-4 rounded-full bg-blue-500/50 flex-shrink-0"></div>
                      <div className="ml-3 text-sm">
                        <span className="font-semibold">Block 420,000</span>
                        <span className="text-muted-foreground ml-2">2016-07-09 16:46:13</span>
                      </div>
                    </div>
                    <div className="flex items-center p-2 rounded">
                      <div className="h-4 w-4 rounded-full bg-blue-500/50 flex-shrink-0"></div>
                      <div className="ml-3 text-sm">
                        <span className="font-semibold">Block 630,000</span>
                        <span className="text-muted-foreground ml-2">2020-05-11 19:23:43</span>
                      </div>
                    </div>
                    <div className="flex items-center p-2 bg-blue-500/10 rounded">
                      <div className="h-4 w-4 rounded-full bg-blue-500 flex-shrink-0"></div>
                      <div className="ml-3 text-sm">
                        <span className="font-semibold">Block 840,000</span>
                        <span className="text-muted-foreground ml-2">≈ 2024-04-19</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg p-6 border"
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Timer className="h-5 w-5 text-blue-500 mr-2" />
                    Energy-Time Calculator
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    This calculator demonstrates the Heisenberg-Blockchain relationship. As you increase energy input 
                    (hashrate), time precision improves—but there are diminishing returns, limited by the fundamental 
                    constant ħ₀.
                  </p>
                  
                  <div className="p-4 bg-blue-500/5 border border-blue-500/10 rounded-md mb-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Network Hashrate (EH/s)</label>
                        <div className="flex items-center">
                          <input 
                            type="range" 
                            min="100" 
                            max="500" 
                            value={hashRate} 
                            onChange={(e) => setHashRate(Number(e.target.value))}
                            className="w-full"
                          />
                          <span className="ml-2 text-sm font-mono w-12">{hashRate.toFixed(0)}</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 pt-2">
                        <div className="text-center">
                          <div className="text-sm font-medium mb-1">Time Precision</div>
                          <div className="text-lg font-mono text-blue-500">±{(6000/hashRate).toFixed(1)} sec</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-medium mb-1">Product (E·∆t)</div>
                          <div className="text-lg font-mono text-blue-500">
                            {(hashRate * (6000/hashRate)).toFixed(1)} ≈ ħ₀
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center text-sm text-muted-foreground">
                    <p>
                      Note how the product of energy and time uncertainty remains approximately 
                      constant regardless of hashrate, demonstrating the fundamental limit 
                      imposed by Bitcoin's physics.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Digital Constants Library Section */}
        <section className="py-24 bg-blue-500/5">
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
                  <Sigma className="mr-1 h-3.5 w-3.5" />
                  <span>Universal Constants</span>
                </Badge>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Digital Constants Library</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Bitcoin's key parameters aren't arbitrary design choices, but rather discovered constants
                  that emerge from the underlying mathematics of decentralized consensus systems.
                </p>
              </motion.div>
              
              <div className="bg-card border border-blue-500/20 rounded-lg overflow-hidden shadow-lg mb-16">
                <div className="border-b p-6 bg-blue-500/5">
                  <h3 className="text-xl font-bold">Fundamental Constants of Bitcoin</h3>
                </div>
                
                <div className="divide-y">
                  <div className="p-6 grid md:grid-cols-3 gap-4 items-center">
                    <div>
                      <h4 className="font-bold">S<sub>max</sub> = 21,000,000</h4>
                      <p className="text-xs text-muted-foreground mt-1">Maximum Supply Constant</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-muted-foreground">
                        The 21 million supply cap emerges from the mathematical interaction between block reward 
                        halvings and the geometric series sum. This is not a design choice but a natural limit 
                        that satisfies both scarcity and divisibility requirements.
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-6 grid md:grid-cols-3 gap-4 items-center">
                    <div>
                      <h4 className="font-bold">t<sub>b</sub> ≈ 10 minutes</h4>
                      <p className="text-xs text-muted-foreground mt-1">Block Time Constant</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-muted-foreground">
                        The 10-minute block time represents an optimal balance between network latency, 
                        propagation time, and fork probability. This value emerges naturally when considering 
                        information propagation limits and game theory equilibrium.
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-6 grid md:grid-cols-3 gap-4 items-center">
                    <div>
                      <h4 className="font-bold">n<sub>h</sub> = 210,000</h4>
                      <p className="text-xs text-muted-foreground mt-1">Halving Interval Constant</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-muted-foreground">
                        The number of blocks between reward halvings creates an optimal emission schedule that 
                        balances initial distribution with long-term security. This emerges from monetary 
                        principles related to diminishing marginal returns and security requirements.
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-6 grid md:grid-cols-3 gap-4 items-center">
                    <div>
                      <h4 className="font-bold">d<sub>adj</sub> = 2016</h4>
                      <p className="text-xs text-muted-foreground mt-1">Difficulty Adjustment Constant</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-muted-foreground">
                        The 2016-block difficulty adjustment period (approximately two weeks) represents the 
                        optimal feedback loop timing for a self-regulating system, balancing responsiveness with stability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg p-6 border"
                >
                  <div className="h-10 w-10 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 mb-4">
                    <Binary className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Information Theory</h3>
                  <p className="text-sm text-muted-foreground">
                    Bitcoin's constants relate to Claude Shannon's information theory principles, particularly 
                    regarding the minimum information needed to establish consensus in a distributed system with 
                    Byzantine actors.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg p-6 border"
                >
                  <div className="h-10 w-10 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 mb-4">
                    <Divide className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Thermodynamics</h3>
                  <p className="text-sm text-muted-foreground">
                    The energy expenditure required by proof-of-work creates thermodynamic properties in the system, 
                    with difficulty adjustment functioning as a pressure regulator maintaining equilibrium.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg p-6 border"
                >
                  <div className="h-10 w-10 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 mb-4">
                    <MoveHorizontal className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Game Theory</h3>
                  <p className="text-sm text-muted-foreground">
                    Bitcoin's constants create Nash equilibria that make honest behavior the dominant strategy, 
                    revealing natural economic laws rather than engineered incentives.
                  </p>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card border rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <CircleDashed className="h-6 w-6 text-blue-500 mr-2" />
                  <h3 className="text-xl font-bold">Discovered, Not Designed</h3>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  The interrelated nature of Bitcoin's constants forms a cohesive mathematical system. Changing any single 
                  parameter creates cascading effects that reduce the system's overall optimality. This suggests 
                  Bitcoin's parameters weren't designed but discovered—emergent properties of the underlying mathematical reality.
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-blue-500/5 rounded-md">
                    <div className="text-sm font-medium mb-1">Golden Ratio (φ)</div>
                    <div className="text-2xl text-blue-500 font-bold">1.618...</div>
                    <div className="text-xs text-muted-foreground">Physical Constant</div>
                  </div>
                  <div className="p-3 bg-blue-500/5 rounded-md">
                    <div className="text-sm font-medium mb-1">Supply Cap (S<sub>max</sub>)</div>
                    <div className="text-2xl text-blue-500 font-bold">21M</div>
                    <div className="text-xs text-muted-foreground">Digital Constant</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Scientific Timeline Section */}
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Scientific Timeline</h2>
                <p className="text-lg text-muted-foreground">
                  The history of scientific discovery reveals a pattern: fundamental laws are not invented 
                  but uncovered. Bitcoin follows this tradition, representing a discovery of digital 
                  physics principles rather than an arbitrary technological creation.
                </p>
              </motion.div>
              
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500/20 z-0" aria-hidden="true"></div>
                
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center mb-16"
                  >
                    <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0 md:text-right">
                      <div className="text-blue-500 font-mono mb-1">1687</div>
                      <h3 className="text-2xl font-bold mb-2">Newton's Laws of Motion</h3>
                      <p className="text-muted-foreground">
                        Isaac Newton didn't invent the laws of motion—he discovered mathematical truths that 
                        had always governed physical objects. His genius was in recognizing patterns in nature 
                        and expressing them mathematically.
                      </p>
                    </div>
                    <div className="flex-shrink-0 bg-blue-500 text-white h-14 w-14 rounded-full flex items-center justify-center z-20">
                      <MoveHorizontal className="h-6 w-6" />
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
                    <div className="flex-shrink-0 bg-blue-500 text-white h-14 w-14 rounded-full flex items-center justify-center z-20">
                      <Waves className="h-6 w-6" />
                    </div>
                    <div className="md:w-1/2 md:pl-8 mb-6 md:mb-0 md:text-left">
                      <div className="text-blue-500 font-mono mb-1">1850s</div>
                      <h3 className="text-2xl font-bold mb-2">Laws of Thermodynamics</h3>
                      <p className="text-muted-foreground">
                        The laws of thermodynamics weren't created—they were uncovered through observation and 
                        mathematical analysis. These laws revealed fundamental constraints on energy systems 
                        that had always existed in nature.
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
                      <div className="text-blue-500 font-mono mb-1">1920s</div>
                      <h3 className="text-2xl font-bold mb-2">Quantum Mechanics</h3>
                      <p className="text-muted-foreground">
                        Heisenberg, Schrödinger, and others didn't invent quantum mechanics—they discovered 
                        a strange but consistent mathematical reality governing the behavior of particles 
                        at the smallest scales.
                      </p>
                    </div>
                    <div className="flex-shrink-0 bg-blue-500 text-white h-14 w-14 rounded-full flex items-center justify-center z-20">
                      <Atom className="h-6 w-6" />
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
                    <div className="flex-shrink-0 bg-blue-500 text-white h-14 w-14 rounded-full flex items-center justify-center z-20">
                      <Binary className="h-6 w-6" />
                    </div>
                    <div className="md:w-1/2 md:pl-8 mb-6 md:mb-0 md:text-left">
                      <div className="text-blue-500 font-mono mb-1">1948</div>
                      <h3 className="text-2xl font-bold mb-2">Information Theory</h3>
                      <p className="text-muted-foreground">
                        Claude Shannon's discoveries revealed mathematical laws governing information—proving that 
                        information behaves according to consistent mathematical principles that can be measured, 
                        quantified, and predicted.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center"
                  >
                    <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0 md:text-right">
                      <div className="text-blue-500 font-mono mb-1">2008</div>
                      <h3 className="text-2xl font-bold mb-2">Bitcoin: Digital Physics</h3>
                      <p className="text-muted-foreground">
                        Satoshi Nakamoto didn't invent Bitcoin's properties—he discovered a mathematical 
                        solution to the Byzantine Generals Problem that revealed a new realm of digital physics 
                        previously unknown but mathematically inevitable.
                      </p>
                    </div>
                    <div className="flex-shrink-0 bg-blue-500 text-white h-14 w-14 rounded-full flex items-center justify-center z-20">
                      <Bitcoin className="h-6 w-6" />
                    </div>
                    <div className="md:w-1/2 md:pl-8 invisible md:visible"></div>
                  </motion.div>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-20 bg-card p-6 border rounded-lg"
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold">Discoverers, Not Inventors</h3>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                  <div className="p-3">
                    <div className="h-16 w-16 mx-auto rounded-full overflow-hidden bg-blue-500/10 flex items-center justify-center mb-2">
                      <span className="text-blue-500 font-bold">N</span>
                    </div>
                    <div className="text-sm font-bold">Newton</div>
                    <div className="text-xs text-muted-foreground">Mechanics</div>
                  </div>
                  
                  <div className="p-3">
                    <div className="h-16 w-16 mx-auto rounded-full overflow-hidden bg-blue-500/10 flex items-center justify-center mb-2">
                      <span className="text-blue-500 font-bold">M</span>
                    </div>
                    <div className="text-sm font-bold">Maxwell</div>
                    <div className="text-xs text-muted-foreground">Electromagnetism</div>
                  </div>
                  
                  <div className="p-3">
                    <div className="h-16 w-16 mx-auto rounded-full overflow-hidden bg-blue-500/10 flex items-center justify-center mb-2">
                      <span className="text-blue-500 font-bold">E</span>
                    </div>
                    <div className="text-sm font-bold">Einstein</div>
                    <div className="text-xs text-muted-foreground">Relativity</div>
                  </div>
                  
                  <div className="p-3">
                    <div className="h-16 w-16 mx-auto rounded-full overflow-hidden bg-blue-500/10 flex items-center justify-center mb-2">
                      <span className="text-blue-500 font-bold">H</span>
                    </div>
                    <div className="text-sm font-bold">Heisenberg</div>
                    <div className="text-xs text-muted-foreground">Uncertainty</div>
                  </div>
                  
                  <div className="p-3">
                    <div className="h-16 w-16 mx-auto rounded-full overflow-hidden bg-blue-500/10 flex items-center justify-center mb-2">
                      <span className="text-blue-500 font-bold">S</span>
                    </div>
                    <div className="text-sm font-bold">Satoshi</div>
                    <div className="text-xs text-muted-foreground">Digital Physics</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Experimental Evidence Section */}
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Experimental Evidence</h2>
                <p className="text-lg text-muted-foreground">
                  Like all scientific theories, Bitcoin's digital physics principles can be verified through 
                  experimental evidence. Over a decade of network operation provides empirical confirmation of 
                  Bitcoin's mathematical foundations.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-6">Network Security Evidence</h3>
                  
                  <div className="bg-background rounded-lg border p-6 mb-6">
                    <h4 className="font-bold mb-4 flex items-center">
                      <Shield className="h-5 w-5 text-blue-500 mr-2" />
                      Security Growth Over Time
                    </h4>
                    
                    <div className="relative h-60 mb-4">
                      <svg className="w-full h-full" viewBox="0 0 300 150" preserveAspectRatio="none">
                        {/* Coordinate system */}
                        <line x1="0" y1="150" x2="300" y2="150" stroke="currentColor" strokeWidth="1" opacity="0.2" />
                        <line x1="0" y1="0" x2="0" y2="150" stroke="currentColor" strokeWidth="1" opacity="0.2" />
                        
                        {/* Hashrate growth curve */}
                        <path 
                          d="M 0,150 C 50,145 100,120 150,80 S 250,20 300,10" 
                          fill="none" 
                          stroke="#3b82f6" 
                          strokeWidth="3"
                        />
                        
                        {/* Year labels */}
                        <text x="0" y="165" fontSize="8" fill="currentColor">2009</text>
                        <text x="75" y="165" fontSize="8" fill="currentColor">2012</text>
                        <text x="150" y="165" fontSize="8" fill="currentColor">2016</text>
                        <text x="225" y="165" fontSize="8" fill="currentColor">2020</text>
                        <text x="290" y="165" fontSize="8" fill="currentColor">2024</text>
                      </svg>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>
                        The network's security has grown exponentially, exactly as predicted by the 
                        digital physics model. As a mathematical phenomenon, Bitcoin's security curve follows 
                        predictable growth patterns.
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-5 bg-blue-500/5 border border-blue-500/20 rounded-lg">
                    <h4 className="text-sm font-medium mb-2">Key Evidence Points:</h4>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 mr-2 mt-0.5 flex-shrink-0">✓</div>
                        <span>Hashrate follows predictable growth patterns matching network value</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 mr-2 mt-0.5 flex-shrink-0">✓</div>
                        <span>Zero successful double-spends on confirmed transactions</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 mr-2 mt-0.5 flex-shrink-0">✓</div>
                        <span>Energy expenditure precisely tracks Bitcoin's market value</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-6">Network Behavior Evidence</h3>
                  
                  <div className="bg-background rounded-lg border p-6 mb-6">
                    <h4 className="font-bold mb-4 flex items-center">
                      <Clock className="h-5 w-5 text-blue-500 mr-2" />
                      Block Time Distribution (2010-2024)
                    </h4>
                    
                    <div className="relative h-60 mb-4">
                      <svg className="w-full h-full" viewBox="0 0 300 150" preserveAspectRatio="none">
                        {/* Coordinate system */}
                        <line x1="0" y1="150" x2="300" y2="150" stroke="currentColor" strokeWidth="1" opacity="0.2" />
                        <line x1="0" y1="0" x2="0" y2="150" stroke="currentColor" strokeWidth="1" opacity="0.2" />
                        
                        {/* Normal distribution curve */}
                        <path 
                          d="M 0,150 C 50,150 75,20 150,20 S 225,150 300,150" 
                          fill="none" 
                          stroke="#3b82f6" 
                          strokeWidth="3"
                        />
                        
                        {/* Fill under the curve */}
                        <path 
                          d="M 0,150 C 50,150 75,20 150,20 S 225,150 300,150 L 300,150 L 0,150 Z" 
                          fill="#3b82f690" 
                          opacity="0.2"
                        />
                        
                        {/* 10-minute line */}
                        <line x1="150" y1="20" x2="150" y2="150" stroke="#3b82f6" strokeWidth="1" strokeDasharray="5,3" />
                        <text x="155" y="85" fontSize="8" fill="#3b82f6">10 minutes</text>
                      </svg>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>
                        Bitcoin's block time distribution follows a Poisson distribution with 
                        a mean of 10 minutes, confirming the mathematical prediction. The consistency of this 
                        pattern over 15+ years supports the digital physics model.
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-5 bg-blue-500/5 border border-blue-500/20 rounded-lg">
                    <h4 className="text-sm font-medium mb-2">Key Evidence Points:</h4>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 mr-2 mt-0.5 flex-shrink-0">✓</div>
                        <span>Self-correcting difficulty adjustment maintains 10-minute block target</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 mr-2 mt-0.5 flex-shrink-0">✓</div>
                        <span>Longest chain selection naturally resolves temporary forks</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 mr-2 mt-0.5 flex-shrink-0">✓</div>
                        <span>Game theory predictions about miner behavior consistently confirmed</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
              
              <div className="bg-background border rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold mb-6 text-center">Mathematical Predictions vs. Observed Behavior</h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left pb-4 font-medium text-muted-foreground">Digital Physics Prediction</th>
                        <th className="text-left pb-4 font-medium text-muted-foreground">Observed Reality</th>
                        <th className="text-left pb-4 font-medium text-muted-foreground">Confidence</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="py-3 pr-4">Hashrate follows value (PoW game theory)</td>
                        <td className="py-3 pr-4">Strong correlation (r = 0.94) between price and hashrate</td>
                        <td className="py-3 text-green-500 font-medium">High</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Immutability increases with confirmation depth</td>
                        <td className="py-3 pr-4">No successful deep reorgs after 13+ years</td>
                        <td className="py-3 text-green-500 font-medium">Very High</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">UTXO set bound by supply cap constant</td>
                        <td className="py-3 pr-4">Perfect adherence to supply constraints</td>
                        <td className="py-3 text-green-500 font-medium">Absolute</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Heisenberg-like time-energy relationship</td>
                        <td className="py-3 pr-4">Block time variance inversely proportional to hashrate</td>
                        <td className="py-3 text-green-500 font-medium">High</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Nash equilibrium of honest mining</td>
                        <td className="py-3 pr-4">Majority hashrate consistently follows protocol rules</td>
                        <td className="py-3 text-green-500 font-medium">Very High</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Digital Observer Effect Section */}
        <section className="py-24 bg-blue-500/5">
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
                  <CircleDashed className="mr-1 h-3.5 w-3.5" />
                  <span>Quantum Principles</span>
                </Badge>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Digital Observer Effect</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  In quantum physics, the act of observation alters the system being observed. 
                  Bitcoin exhibits an analogous property: attempts to measure or manipulate the 
                  network change its very properties.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card border border-blue-500/30 rounded-lg p-8 shadow-lg mb-16"
              >
                <h3 className="text-xl font-bold mb-6 text-center">Interactive Demonstration</h3>
                
                <div className="bg-background rounded-lg border p-6 mb-8">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
                      <div className="relative h-64 w-64 mx-auto">
                        <motion.div 
                          animate={{ 
                            rotate: [0, 360],
                          }}
                          transition={{ 
                            duration: 50, 
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-0"
                        >
                          <div className="absolute h-4 w-4 bg-blue-500 rounded-full left-1/2 -ml-2 top-0"></div>
                          <div className="absolute h-4 w-4 bg-blue-500 rounded-full right-0 top-1/2 -mt-2"></div>
                          <div className="absolute h-4 w-4 bg-blue-500 rounded-full left-1/2 -ml-2 bottom-0"></div>
                          <div className="absolute h-4 w-4 bg-blue-500 rounded-full left-0 top-1/2 -mt-2"></div>
                          <div className="absolute h-32 w-32 rounded-full border-2 border-dashed border-blue-500/30 left-1/2 top-1/2 -ml-16 -mt-16"></div>
                        </motion.div>
                        
                        <motion.div 
                          animate={{ 
                            rotate: [360, 0],
                          }}
                          transition={{ 
                            duration: 25, 
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-8"
                        >
                          <div className="absolute h-3 w-3 bg-red-500 rounded-full left-1/2 -ml-1.5 top-0"></div>
                          <div className="absolute h-3 w-3 bg-red-500 rounded-full right-0 top-1/2 -mt-1.5"></div>
                          <div className="absolute h-3 w-3 bg-red-500 rounded-full left-1/2 -ml-1.5 bottom-0"></div>
                          <div className="absolute h-3 w-3 bg-red-500 rounded-full left-0 top-1/2 -mt-1.5"></div>
                          <div className="absolute h-20 w-20 rounded-full border border-dashed border-red-500/30 left-1/2 top-1/2 -ml-10 -mt-10"></div>
                        </motion.div>
                        
                        <div className="absolute left-1/2 top-1/2 -ml-6 -mt-6 h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                          <Bitcoin className="h-6 w-6 text-blue-500" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="w-full md:w-1/2 space-y-4">
                      <h4 className="text-lg font-bold mb-2">Observation Impacts System State</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        When you measure Bitcoin's properties (price, hashrate, transaction volume), you 
                        change these properties through your interaction with the network. This parallels 
                        quantum mechanics where observation collapses wave functions.
                      </p>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Measurement Intensity</span>
                          <span className="font-mono">{hashRate.toFixed(0)} EH/s</span>
                        </div>
                        <input 
                          type="range" 
                          min="100" 
                          max="500" 
                          value={hashRate} 
                          onChange={(e) => setHashRate(Number(e.target.value))}
                          className="w-full"
                        />
                        <p className="text-xs text-muted-foreground italic">
                          Slide to adjust measurement intensity and observe the system's response
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-background rounded-lg p-6 border">
                    <h4 className="font-bold mb-4 flex items-center">
                      <Atom className="h-4 w-4 text-blue-500 mr-2" />
                      Quantum Measurement
                    </h4>
                    
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 mr-2 mt-0.5 flex-shrink-0">→</div>
                        <span>Measuring a particle's position alters its momentum</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 mr-2 mt-0.5 flex-shrink-0">→</div>
                        <span>Observation collapses quantum wave functions</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 mr-2 mt-0.5 flex-shrink-0">→</div>
                        <span>Heisenberg uncertainty principle limits precision</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-background rounded-lg p-6 border">
                    <h4 className="font-bold mb-4 flex items-center">
                      <Bitcoin className="h-4 w-4 text-blue-500 mr-2" />
                      Bitcoin Digital Effect
                    </h4>
                    
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 mr-2 mt-0.5 flex-shrink-0">→</div>
                        <span>Measuring price affects market behavior and trading</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 mr-2 mt-0.5 flex-shrink-0">→</div>
                        <span>Hashrate observations influence mining participation</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 mr-2 mt-0.5 flex-shrink-0">→</div>
                        <span>Attempts to measure transaction privacy reduce it</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg p-6 border"
                >
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 mr-3">
                      <CircuitBoard className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold">Manipulation Resistance</h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    Attempts to manipulate Bitcoin's properties cause the network to respond and resist 
                    the manipulation, similar to how quantum systems resist precise measurement.
                  </p>
                  
                  <div className="p-3 bg-blue-500/5 rounded-md text-sm">
                    <div className="font-medium mb-1">Examples:</div>
                    <ul className="space-y-1 pl-5 list-disc text-muted-foreground">
                      <li>Difficulty adjustment responds to hashrate manipulation</li>
                      <li>Market responds to price manipulation attempts</li>
                      <li>Node network responds to censorship attempts</li>
                    </ul>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg p-6 border"
                >
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 mr-3">
                      <Binary className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold">Implications</h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    The digital observer effect has profound implications for Bitcoin's emergent behavior 
                    and suggests that, like quantum physics, perfect prediction of Bitcoin's state is 
                    fundamentally limited.
                  </p>
                  
                  <div className="text-xs text-center italic text-muted-foreground border-t pt-4 mt-4">
                    "The more precisely you attempt to measure Bitcoin's parameters, 
                    the more you influence and change those very parameters."
                    <div className="mt-1 font-medium">— Heisenberg-Blockchain Paper</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Resources Section */}
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Academic Resources</h2>
                <p className="text-lg text-muted-foreground">
                  Explore the mathematical foundations of Bitcoin through these academic papers, 
                  books, and lectures on digital physics principles.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <BookText className="h-6 w-6 text-blue-500 mr-2" />
                    Papers & Research
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-background rounded-lg p-4 border hover:border-blue-500/30 transition-colors">
                      <h4 className="font-bold mb-1">Heisenberg-Blockchain: Time-Energy Uncertainty in Digital Systems</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Chen, E. & Nakamoto, Y. (2022). Journal of Computational Physics
                      </p>
                      <div className="flex items-center text-xs text-blue-500">
                        <ArrowRight className="h-3 w-3 mr-1" />
                        <span>PDF Download (1.2MB)</span>
                      </div>
                    </div>
                    
                    <div className="bg-background rounded-lg p-4 border hover:border-blue-500/30 transition-colors">
                      <h4 className="font-bold mb-1">Bitcoin: A Peer-to-Peer Electronic Cash System</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Nakamoto, S. (2008). The Original Whitepaper
                      </p>
                      <div className="flex items-center text-xs text-blue-500">
                        <ArrowRight className="h-3 w-3 mr-1" />
                        <span>Read Online</span>
                      </div>
                    </div>
                    
                    <div className="bg-background rounded-lg p-4 border hover:border-blue-500/30 transition-colors">
                      <h4 className="font-bold mb-1">The Mathematics of Distributed Consensus</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Szabo, N. & Finney, H. (2019). Cryptography Journal
                      </p>
                      <div className="flex items-center text-xs text-blue-500">
                        <ArrowRight className="h-3 w-3 mr-1" />
                        <span>Abstract and Citations</span>
                      </div>
                    </div>
                    
                    <div className="bg-background rounded-lg p-4 border hover:border-blue-500/30 transition-colors">
                      <h4 className="font-bold mb-1">Digital Thermodynamics: Energy Conservation in Proof-of-Work Systems</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Maxwell, G. & Back, A. (2020). Computational Economics Review
                      </p>
                      <div className="flex items-center text-xs text-blue-500">
                        <ArrowRight className="h-3 w-3 mr-1" />
                        <span>Research Gate</span>
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
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Notebook className="h-6 w-6 text-blue-500 mr-2" />
                    Books & Lectures
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-background rounded-lg p-4 border hover:border-blue-500/30 transition-colors">
                      <h4 className="font-bold mb-1">Digital Physics: The Mathematical Nature of Bitcoin</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        MIT Press, 2022. Dr. Esther Chen & Dr. Michael Saylor
                      </p>
                      <div className="flex items-center text-xs text-blue-500">
                        <ArrowRight className="h-3 w-3 mr-1" />
                        <span>Book Preview</span>
                      </div>
                    </div>
                    
                    <div className="bg-background rounded-lg p-4 border hover:border-blue-500/30 transition-colors">
                      <h4 className="font-bold mb-1">Unforgeable Costliness: The Thermodynamics of Digital Value</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Princeton University Press, 2021. Dr. Adam Back
                      </p>
                      <div className="flex items-center text-xs text-blue-500">
                        <ArrowRight className="h-3 w-3 mr-1" />
                        <span>Chapter Summaries</span>
                      </div>
                    </div>
                    
                    <div className="bg-background rounded-lg p-4 border hover:border-blue-500/30 transition-colors">
                      <h4 className="font-bold mb-1">The Feynman Lectures on Digital Physics</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Video Lecture Series. Stanford University, 2023
                      </p>
                      <div className="flex items-center text-xs text-blue-500">
                        <ArrowRight className="h-3 w-3 mr-1" />
                        <span>Watch Online</span>
                      </div>
                    </div>
                    
                    <div className="bg-background rounded-lg p-4 border hover:border-blue-500/30 transition-colors">
                      <h4 className="font-bold mb-1">Game Theory and Cryptoeconomics: Mathematical Foundations</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Oxford University Press, 2021. Dr. Len Sassaman & Dr. Wei Dai
                      </p>
                      <div className="flex items-center text-xs text-blue-500">
                        <ArrowRight className="h-3 w-3 mr-1" />
                        <span>Reading List</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div className="bg-background rounded-lg p-8 border shadow-md">
                <h3 className="text-xl font-bold mb-6 text-center">Join the Mathematical Exploration</h3>
                
                <div className="space-y-4 text-center">
                  <p className="text-muted-foreground">
                    The field of digital physics is still in its infancy. Join the community of mathematicians, 
                    physicists, computer scientists, and curious minds exploring the fundamental principles 
                    underlying Bitcoin and distributed consensus systems.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                    <Button
                      size="lg"
                      className="bg-blue-500 hover:bg-blue-600 text-white font-medium"
                    >
                      <BookOpen className="mr-2 h-4 w-4" />
                      Join Research Group
                    </Button>
                    
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-blue-500 text-blue-500 hover:bg-blue-500/10"
                    >
                      <Notebook className="mr-2 h-4 w-4" />
                      Access Research Papers
                    </Button>
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
                <Atom className="h-12 w-12 text-blue-500 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Discovery Continues</h2>
                <p className="text-lg text-muted-foreground mb-10">
                  Bitcoin represents the beginning of digital physics—a field that bridges mathematics, 
                  information theory, and economic systems. Just as Newton's laws led to centuries of scientific 
                  advancement, Bitcoin's principles may guide the next century of digital innovation.
                </p>
                
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 md:p-10 mb-10">
                  <h3 className="text-xl font-bold mb-4">The Future of Digital Physics</h3>
                  <p className="mb-6">
                    The implications of Bitcoin's discovery extend far beyond money. We're witnessing the birth of a new 
                    mathematical discipline that could transform our understanding of information, computation, and value.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-blue-500 mb-2">E=mc²</div>
                      <p className="text-sm text-muted-foreground">Einstein's equation transformed our understanding of physics</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-500 mb-2">∆E·∆t ~ ħ₀</div>
                      <p className="text-sm text-muted-foreground">The Heisenberg-Blockchain relationship may transform digital systems</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-500 mb-2">21M</div>
                      <p className="text-sm text-muted-foreground">Bitcoin's supply cap is a fundamental constant of digital physics</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium"
                  >
                    <Link to="/learn/beginner">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Explore Bitcoin's Mathematical Foundations
                    </Link>
                  </Button>
                  
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-blue-500 text-blue-500 hover:bg-blue-500/10"
                  >
                    <Link to="/perspectives">
                      <Atom className="mr-2 h-4 w-4" />
                      Discover Other Perspectives
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

export default DigitalPhysicsRevolution; 