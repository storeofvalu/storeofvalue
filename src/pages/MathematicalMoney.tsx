import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  SquareCode, 
  Binary, 
  Lock, 
  Calculator, 
  Infinity, 
  Scale, 
  ArrowDown, 
  ChevronDown,
  FileDigit,
  Shield,
  Hash,
  PenTool,
  Bitcoin,
  Sigma,
  ArrowRight,
  BookOpen,
  BarChart4,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MathematicalMoney = () => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const [animationStep, setAnimationStep] = useState(0);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const mathFunctions = [
    { name: "Scarcity", equation: "f(supply) = 21,000,000" },
    { name: "Halving Schedule", equation: "R(n) = R₀ ÷ 2^(n÷210000)" },
    { name: "Difficulty Adjustment", equation: "D = D₀ × (2016 × 10min) ÷ T" },
    { name: "ECDSA Security", equation: "y² = x³ + 7 (mod p)" },
    { name: "Proof of Work", equation: "hash(block + nonce) < target" }
  ];

  // Animation for mathematical sequence
  useEffect(() => {
    const mathSequence = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946];
    
    if (animationStep < mathSequence.length) {
      const timer = setTimeout(() => {
        setAnimatedValue(mathSequence[animationStep]);
        setAnimationStep(prev => prev + 1);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [animationStep]);

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
              <SquareCode className="mr-1 h-3.5 w-3.5" />
              <span>Pure Mathematics</span>
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              The Mathematical Money
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium mb-8 text-muted-foreground">
              How mathematics and code created the first perfect money in human history
            </h2>
          </motion.div>
          
          {/* Mathematical animation */}
          <div className="mt-16 w-full max-w-2xl mx-auto">
            <div className="bg-card border rounded-lg p-8 shadow-lg">
              <div className="flex flex-col items-center">
                <div className="font-mono text-5xl md:text-7xl font-bold text-indigo-500 mb-2 tracking-widest">
                  {animatedValue.toLocaleString()}
                </div>
                <div className="text-lg text-muted-foreground space-x-2">
                  <span>→</span>
                  <span className="text-indigo-400">Fibonacci(n)</span>
                  <span>→</span>
                </div>
                
                <div className="mt-12 text-center">
                  <div className="text-2xl font-bold mb-4">The Golden Ratio</div>
                  <div className="text-4xl mb-4">φ = 1.618033...</div>
                  <div className="text-sm text-muted-foreground">
                    <span>As n approaches infinity, F(n+1)/F(n) approaches φ</span>
                  </div>
                </div>
              </div>
            </div>
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
                  <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                    <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </div>
        </section>
        
        {/* The Mathematics of Money Section */}
        <section className="py-24 bg-card" ref={targetRef}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                style={{ opacity, scale }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Mathematics of Money</h2>
                <p className="text-lg text-muted-foreground">
                  For millennia, humanity has relied on imperfect monetary systems designed and manipulated by fallible humans.
                  Bitcoin introduces a revolutionary concept: money governed by immutable mathematical principles.
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
                  <div className="h-12 w-12 bg-indigo-500/10 rounded-full flex items-center justify-center text-indigo-500 mb-6">
                    <Calculator className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Deterministic Issuance</h3>
                  <p className="text-muted-foreground">
                    Unlike fiat currencies with arbitrary supply, Bitcoin's release schedule is mathematically predetermined. 
                    Every ~10 minutes, new supply is issued at a rate that halves every 210,000 blocks.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-lg p-6 border"
                >
                  <div className="h-12 w-12 bg-indigo-500/10 rounded-full flex items-center justify-center text-indigo-500 mb-6">
                    <Infinity className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Absolute Scarcity</h3>
                  <p className="text-muted-foreground">
                    Bitcoin is the first asset in human history with perfect mathematical scarcity. 
                    Its total supply is capped at 21 million—a number that will never change, guaranteed by code, not policy.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-lg p-6 border"
                >
                  <div className="h-12 w-12 bg-indigo-500/10 rounded-full flex items-center justify-center text-indigo-500 mb-6">
                    <Lock className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Cryptographic Security</h3>
                  <p className="text-muted-foreground">
                    Bitcoin's security is based on elliptic curve cryptography and SHA-256—mathematical functions 
                    so strong that breaking them would require more computing power than exists in the universe.
                  </p>
                </motion.div>
              </div>
              
              <div className="border-t border-b py-12 my-16">
                <blockquote className="italic text-xl md:text-2xl text-center max-w-3xl mx-auto">
                  "Mathematics as an expression of the human mind reflects the active will, the contemplative reason, and the desire for aesthetic perfection."
                  <footer className="mt-4 text-base font-normal text-muted-foreground">
                    — Richard Courant, mathematician
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
        
        {/* The Mathematician's Journey */}
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Mathematician's Journey</h2>
                <p className="text-lg text-muted-foreground">
                  Dr. Sophia Chen spent her life studying perfect mathematical systems. 
                  Then she discovered that money—the most important social technology—was the least mathematical.
                </p>
              </motion.div>
              
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-500/20 z-0" aria-hidden="true"></div>
                
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center mb-16"
                  >
                    <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0 md:text-right">
                      <h3 className="text-2xl font-bold mb-3">The Realization</h3>
                      <p className="text-muted-foreground">
                        "All my life, I've studied systems with clear rules and predictable outcomes. Then I looked 
                        at our monetary system—arbitrary decisions, unpredictable policies, and endless manipulation. 
                        How could the foundation of our economy be so...unrigorous?"
                      </p>
                    </div>
                    <div className="flex-shrink-0 bg-indigo-500 text-white h-14 w-14 rounded-full flex items-center justify-center z-20">
                      <FileDigit className="h-6 w-6" />
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
                    <div className="flex-shrink-0 bg-indigo-500 text-white h-14 w-14 rounded-full flex items-center justify-center z-20">
                      <Binary className="h-6 w-6" />
                    </div>
                    <div className="md:w-1/2 md:pl-8 mb-6 md:mb-0 md:text-left">
                      <h3 className="text-2xl font-bold mb-3">The Discovery</h3>
                      <p className="text-muted-foreground">
                        "When I read the Bitcoin whitepaper, I was stunned. Here was a monetary system built on 
                        pure mathematics—predetermined issuance, perfect scarcity, and cryptographic security. 
                        For the first time, money could operate with the precision of a mathematical formula."
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
                      <h3 className="text-2xl font-bold mb-3">The Implication</h3>
                      <p className="text-muted-foreground">
                        "The implications were profound. If money could be governed by mathematics instead of human discretion, 
                        we could eliminate the arbitrary decisions and political influences that destabilize economies. 
                        We could have a financial system as reliable as the laws of mathematics themselves."
                      </p>
                    </div>
                    <div className="flex-shrink-0 bg-indigo-500 text-white h-14 w-14 rounded-full flex items-center justify-center z-20">
                      <Scale className="h-6 w-6" />
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
                    <div className="flex-shrink-0 bg-indigo-500 text-white h-14 w-14 rounded-full flex items-center justify-center z-20">
                      <Sigma className="h-6 w-6" />
                    </div>
                    <div className="md:w-1/2 md:pl-8 mb-6 md:mb-0 md:text-left">
                      <h3 className="text-2xl font-bold mb-3">The Conclusion</h3>
                      <p className="text-muted-foreground">
                        "After years of research, my conclusion is inescapable: Bitcoin is the first perfect money 
                        from a mathematical perspective. It's not just another currency—it's a fundamental breakthrough 
                        in how we structure financial systems."
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mathematical Formulas Section */}
        <section className="py-24 bg-indigo-500/5">
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
                  <Hash className="mr-1 h-3.5 w-3.5" />
                  <span>The Code That Changed Finance</span>
                </Badge>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Mathematical Foundations</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  These formulas aren't just abstract concepts—they're the actual rules governing Bitcoin's operation.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-10 mb-20">
                <Card className="overflow-hidden border border-indigo-500/30 shadow-lg">
                  <CardContent className="p-0">
                    <div className="p-6 border-b border-border bg-indigo-500/5">
                      <h3 className="text-xl font-bold flex items-center">
                        <Calculator className="h-5 w-5 text-indigo-500 mr-2" />
                        Bitcoin's Mathematical DNA
                      </h3>
                    </div>
                    <div className="divide-y">
                      {mathFunctions.slice(0, 3).map((func, index) => (
                        <div key={index} className="p-6 flex flex-col md:flex-row justify-between items-center">
                          <div className="mb-4 md:mb-0 md:pr-4">
                            <h4 className="font-bold mb-1">{func.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {index === 0 && "The total capped supply of Bitcoin"}
                              {index === 1 && "Block reward at height n, halving every 210,000 blocks"}
                              {index === 2 && "Difficulty adjustment based on actual block time T"}
                            </p>
                          </div>
                          <div className="bg-background py-3 px-6 rounded-md border font-mono text-sm whitespace-nowrap">
                            {func.equation}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden border border-indigo-500/30 shadow-lg">
                  <CardContent className="p-0">
                    <div className="p-6 border-b border-border bg-indigo-500/5">
                      <h3 className="text-xl font-bold flex items-center">
                        <Shield className="h-5 w-5 text-indigo-500 mr-2" />
                        Security Foundations
                      </h3>
                    </div>
                    <div className="divide-y">
                      {mathFunctions.slice(3, 5).map((func, index) => (
                        <div key={index} className="p-6 flex flex-col md:flex-row justify-between items-center">
                          <div className="mb-4 md:mb-0 md:pr-4">
                            <h4 className="font-bold mb-1">{func.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {index === 0 && "The elliptic curve used for Bitcoin's cryptography"}
                              {index === 1 && "The condition miners must satisfy to add a block"}
                            </p>
                          </div>
                          <div className="bg-background py-3 px-6 rounded-md border font-mono text-sm whitespace-nowrap">
                            {func.equation}
                          </div>
                        </div>
                      ))}
                      <div className="p-6">
                        <p className="text-sm text-muted-foreground">
                          Bitcoin's mathematical foundations provide security guarantees that are impossible 
                          to achieve with human institutions. Breaking these cryptographic functions would require 
                          computational resources that exceed all of the world's current computing power combined.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-card rounded-lg p-8 border shadow-md">
                <h3 className="text-xl font-bold mb-8 text-center">Mathematics vs. Human Institutions</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-background p-5 rounded-lg border">
                    <h4 className="font-bold mb-3 flex items-center text-indigo-500">
                      <Calculator className="h-4 w-4 mr-2" />
                      Mathematical Governance
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-500 mr-2 mt-0.5 flex-shrink-0">✓</div>
                        <span>Predictable rules that never change</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-500 mr-2 mt-0.5 flex-shrink-0">✓</div>
                        <span>Operates 24/7 with perfect consistency</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-500 mr-2 mt-0.5 flex-shrink-0">✓</div>
                        <span>Immune to political pressure</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-500 mr-2 mt-0.5 flex-shrink-0">✓</div>
                        <span>Transparent to all participants</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-background p-5 rounded-lg border">
                    <h4 className="font-bold mb-3 flex items-center text-red-500">
                      <Users className="h-4 w-4 mr-2" />
                      Human Governance
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 mr-2 mt-0.5 flex-shrink-0">✗</div>
                        <span>Rules change based on political climate</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 mr-2 mt-0.5 flex-shrink-0">✗</div>
                        <span>Subject to human error and corruption</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 mr-2 mt-0.5 flex-shrink-0">✗</div>
                        <span>Vulnerable to special interests</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 mr-2 mt-0.5 flex-shrink-0">✗</div>
                        <span>Opaque decisions made behind closed doors</span>
                      </li>
                    </ul>
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
                <SquareCode className="h-12 w-12 text-indigo-500 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Mathematics Meets Money</h2>
                <p className="text-lg text-muted-foreground mb-10">
                  For the first time in human history, we have a monetary system built on mathematical certainty 
                  rather than human promises. Bitcoin represents the convergence of mathematical perfection 
                  and economic reality.
                </p>
                
                <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-6 md:p-10 mb-10">
                  <h3 className="text-xl font-bold mb-4">The Mathematical Advantage</h3>
                  <p className="mb-6">
                    Throughout history, mathematics has given us our most reliable tools for understanding and interacting with reality. 
                    Now, that same reliability has come to money.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-indigo-500 mb-2">2140</div>
                      <p className="text-sm text-muted-foreground">Year when the last Bitcoin will be issued — known with mathematical certainty</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-indigo-500 mb-2">10⁷⁷</div>
                      <p className="text-sm text-muted-foreground">Number of attempts needed to break Bitcoin's cryptography (more than atoms in universe)</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-indigo-500 mb-2">100%</div>
                      <p className="text-sm text-muted-foreground">Predictability of Bitcoin's supply schedule</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium"
                  >
                    <Link to="/learn/beginner">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Learn The Mathematical Foundations
                    </Link>
                  </Button>
                  
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-indigo-500 text-indigo-500 hover:bg-indigo-500/10"
                  >
                    <Link to="/perspectives">
                      <Calculator className="mr-2 h-4 w-4" />
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

export default MathematicalMoney; 