import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Clock, 
  DollarSign, 
  Brain, 
  ChevronDown, 
  ArrowRight, 
  School, 
  AlertCircle, 
  CheckCircle, 
  Coins, 
  ArrowDownCircle, 
  Lightbulb, 
  Lock, 
  Unlock, 
  BarChart4, 
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FinancialEducation = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoursSpent, setHoursSpent] = useState(0);
  const [salaryPercent, setSalaryPercent] = useState(0);
  
  // Animate counting up hours
  useEffect(() => {
    const timer = setTimeout(() => {
      if (hoursSpent < 2100) {
        setHoursSpent(prev => Math.min(prev + 100, 2100));
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [hoursSpent]);
  
  // Animate progress bar with scroll
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Animate salary percentage
  useEffect(() => {
    const timer = setTimeout(() => {
      if (salaryPercent < 97) {
        setSalaryPercent(prev => prev + 1);
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [salaryPercent]);
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div 
          className="h-full bg-amber-500 transition-all duration-300" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-[90vh] relative flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto z-10"
          >
            <Badge className="mb-6 px-3 py-1 bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 transition-colors">
              <Sparkles className="mr-1 h-3.5 w-3.5" />
              <span>Financial Enlightenment</span>
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              We spend <span className="text-amber-500 font-mono">{hoursSpent.toLocaleString()}</span> hours a year working for money...
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-medium mb-8 text-muted-foreground">
              Yet we spend almost <span className="text-amber-500 font-bold">zero</span> hours understanding it.
            </h2>
            
            <div className="mt-10">
              <div className="inline-block animate-bounce">
                <ChevronDown className="h-8 w-8 text-amber-500" />
              </div>
            </div>
          </motion.div>
          
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5 z-0 overflow-hidden">
            <div className="absolute -right-10 top-10 text-[400px] font-bold">$</div>
            <div className="absolute -left-10 bottom-10 text-[400px] font-bold">¢</div>
          </div>
        </section>
        
        {/* Time vs. Knowledge Contrast */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-10">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-lg p-8 border"
                >
                  <div className="flex items-center mb-6">
                    <div className="h-12 w-12 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 mr-4">
                      <Clock className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold">Time Investment</h3>
                  </div>
                  
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                      <span>40+ hours per week at work</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                      <span>Years of education to prepare for a career</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                      <span>Commuting hours & overtime</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                      <span>Constant professional development</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 pt-6 border-t">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Time spent working for money</span>
                      <span className="font-medium">~35% of your life</span>
                    </div>
                    <Progress value={35} className="h-2 bg-muted" />
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-lg p-8 border"
                >
                  <div className="flex items-center mb-6">
                    <div className="h-12 w-12 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 mr-4">
                      <Brain className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold">Money Knowledge</h3>
                  </div>
                  
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                      <span>No financial education in schools</span>
                    </li>
                    <li className="flex items-center">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                      <span>Most adults can't explain how money works</span>
                    </li>
                    <li className="flex items-center">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                      <span>Saving & investing knowledge is minimal</span>
                    </li>
                    <li className="flex items-center">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                      <span>Almost no understanding of monetary policy</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 pt-6 border-t">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Time spent learning about money</span>
                      <span className="font-medium">~0.1% of your life</span>
                    </div>
                    <Progress value={0.1} className="h-2 bg-muted" />
                  </div>
                </motion.div>
              </div>
              
              <div className="mt-16 text-center">
                <h2 className="text-3xl font-bold mb-6">Does this imbalance make sense?</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  We dedicate our lives to earning money but remain willfully ignorant about how it actually works,
                  how it's created, and how to preserve its value over time.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* The Cost of Financial Ignorance */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">The Cost of Financial Ignorance</h2>
                <p className="text-lg text-muted-foreground mb-12 text-center">
                  Your hard-earned money is silently being eroded, and most people don't even realize it.
                </p>
              </motion.div>
              
              <Card className="overflow-hidden border border-amber-500/30 shadow-lg mb-12">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-amber-500/10 p-6 md:p-10 md:w-1/3 flex items-center justify-center">
                      <div className="text-center">
                        <DollarSign className="h-16 w-16 text-amber-500 mx-auto mb-3" />
                        <h3 className="text-2xl font-bold">Salary</h3>
                        <div className="text-4xl font-mono mt-2">
                          ${salaryPercent}k
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 md:p-10 md:w-2/3">
                      <h3 className="text-2xl font-bold mb-6">Wealth Transfer Through Inflation</h3>
                      
                      <div className="space-y-6">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Purchasing Power Loss (2% Inflation)</span>
                            <span className="text-sm font-medium">-$1,940/year</span>
                          </div>
                          <Progress value={2} className="h-2 bg-muted" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Purchasing Power Loss (5% Inflation)</span>
                            <span className="text-sm font-medium">-$4,850/year</span>
                          </div>
                          <Progress value={5} className="h-2 bg-muted" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Purchasing Power Loss (10% Inflation)</span>
                            <span className="text-sm font-medium">-$9,700/year</span>
                          </div>
                          <Progress value={10} className="h-2 bg-muted" />
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-6 border-t text-sm text-muted-foreground">
                        <p>Even at modest inflation rates, your purchasing power erodes significantly each year. 
                        At 5% inflation, someone earning $97k loses almost $5,000 in purchasing power annually.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-lg border"
                >
                  <BarChart4 className="h-8 w-8 text-red-500 mb-4" />
                  <h4 className="text-xl font-bold mb-2">Retirement Crisis</h4>
                  <p className="text-muted-foreground">
                    78% of Americans are unprepared for retirement due to a lack of financial literacy and planning.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-lg border"
                >
                  <Lock className="h-8 w-8 text-red-500 mb-4" />
                  <h4 className="text-xl font-bold mb-2">Debt Trap</h4>
                  <p className="text-muted-foreground">
                    The average American carries $90,460 in debt without understanding how compound interest works against them.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-lg border"
                >
                  <Coins className="h-8 w-8 text-red-500 mb-4" />
                  <h4 className="text-xl font-bold mb-2">Wealth Gap</h4>
                  <p className="text-muted-foreground">
                    The knowledge gap about money directly contributes to the growing wealth inequality in society.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Taking the Bitcoin Red Pill */}
        <section className="py-24 bg-gradient-to-b from-background to-amber-500/10">
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
                  <Lightbulb className="mr-1 h-3.5 w-3.5" />
                  <span>Moment of Revelation</span>
                </Badge>
                
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Enter The Bitcoin Rabbit Hole</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Understanding Bitcoin is the gateway to financial enlightenment and possibly the most important form of self-education in the 21st century.
                </p>
              </motion.div>
              
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-500/50 z-0" aria-hidden="true"></div>
                
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center mb-16"
                  >
                    <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0 md:text-right">
                      <h3 className="text-2xl font-bold mb-3">Monetary History</h3>
                      <p className="text-muted-foreground">
                        Understand how money evolved from shells and metals to digital scarcity, and why this matters for your financial future.
                      </p>
                    </div>
                    <div className="flex-shrink-0 bg-amber-500 text-white h-12 w-12 rounded-full flex items-center justify-center z-20">
                      <span className="font-bold">1</span>
                    </div>
                    <div className="md:w-1/2 md:pl-8 invisible md:visible"></div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center mb-16"
                  >
                    <div className="md:w-1/2 md:pr-8 invisible md:visible"></div>
                    <div className="flex-shrink-0 bg-amber-500 text-white h-12 w-12 rounded-full flex items-center justify-center z-20">
                      <span className="font-bold">2</span>
                    </div>
                    <div className="md:w-1/2 md:pl-8 mb-6 md:mb-0 md:text-left">
                      <h3 className="text-2xl font-bold mb-3">The Bitcoin Innovation</h3>
                      <p className="text-muted-foreground">
                        Discover how Bitcoin solved the double-spending problem and created the first truly scarce digital asset in human history.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center mb-16"
                  >
                    <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0 md:text-right">
                      <h3 className="text-2xl font-bold mb-3">Store of Value Properties</h3>
                      <p className="text-muted-foreground">
                        Learn why Bitcoin's fixed supply, censorship resistance, and verifiability make it a superior store of value compared to traditional options.
                      </p>
                    </div>
                    <div className="flex-shrink-0 bg-amber-500 text-white h-12 w-12 rounded-full flex items-center justify-center z-20">
                      <span className="font-bold">3</span>
                    </div>
                    <div className="md:w-1/2 md:pl-8 invisible md:visible"></div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center"
                  >
                    <div className="md:w-1/2 md:pr-8 invisible md:visible"></div>
                    <div className="flex-shrink-0 bg-amber-500 text-white h-12 w-12 rounded-full flex items-center justify-center z-20">
                      <span className="font-bold">4</span>
                    </div>
                    <div className="md:w-1/2 md:pl-8 mb-6 md:mb-0 md:text-left">
                      <h3 className="text-2xl font-bold mb-3">Financial Sovereignty</h3>
                      <p className="text-muted-foreground">
                        Take control of your financial future by understanding how Bitcoin empowers individuals to be their own bank, free from third-party control.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Unlock className="h-12 w-12 text-amber-500 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6">It's Time to Rebalance The Equation</h2>
                <p className="text-lg text-muted-foreground mb-10">
                  Devote just a fraction of your time to understanding money and Bitcoin, and you'll gain knowledge that can protect and grow your wealth for decades to come.
                </p>
                
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6 md:p-10 mb-10">
                  <h3 className="text-xl font-bold mb-4">The 1% Rule for Financial Education</h3>
                  <p className="mb-6">
                    If you spend 2,100 hours a year working for money, spend just 21 hours (1%) learning about it.
                  </p>
                  
                  <div className="flex items-center justify-center">
                    <div className="h-16 w-16 bg-amber-500 rounded-full flex items-center justify-center text-white mr-4">
                      <ArrowDownCircle className="h-8 w-8" />
                    </div>
                    <div className="text-left">
                      <div className="text-2xl font-bold">21 hours</div>
                      <div className="text-sm text-muted-foreground">Just 30 minutes a week</div>
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
                      Start Your Bitcoin Journey
                    </Link>
                  </Button>
                  
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-amber-500/50 hover:bg-amber-500/10"
                  >
                    <Link to="/principles">
                      <School className="mr-2 h-4 w-4" />
                      Read Our Principles
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">From Financial Confusion to Clarity</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg p-6 border"
                >
                  <div className="flex items-start mb-4">
                    <div className="h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center mr-4">
                      <span className="font-bold text-amber-500">M</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Michael T.</h4>
                      <p className="text-sm text-muted-foreground">Software Engineer</p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground">
                    "I spent years earning six figures but knew nothing about how money actually works. Learning about Bitcoin completely changed my relationship with money and saving. Now I actually understand what inflation is doing to my savings."
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg p-6 border"
                >
                  <div className="flex items-start mb-4">
                    <div className="h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center mr-4">
                      <span className="font-bold text-amber-500">S</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Sarah K.</h4>
                      <p className="text-sm text-muted-foreground">Healthcare Professional</p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground">
                    "The revelation that money is being devalued by design was shocking. Bitcoin education helped me understand why my savings weren't growing as much as I thought, and gave me a strategy to preserve my wealth."
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg p-6 border"
                >
                  <div className="flex items-start mb-4">
                    <div className="h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center mr-4">
                      <span className="font-bold text-amber-500">J</span>
                    </div>
                    <div>
                      <h4 className="font-bold">James R.</h4>
                      <p className="text-sm text-muted-foreground">Small Business Owner</p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground">
                    "My business was growing but I didn't understand how to store that value long-term. The Bitcoin education journey opened my eyes to monetary history and how to think about storing wealth across generations."
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg p-6 border"
                >
                  <div className="flex items-start mb-4">
                    <div className="h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center mr-4">
                      <span className="font-bold text-amber-500">A</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Aisha M.</h4>
                      <p className="text-sm text-muted-foreground">Educator</p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground">
                    "As a teacher, I was frustrated that we don't teach kids about money. Learning about Bitcoin has made me a better saver, investor, and teacher. I now incorporate financial literacy into my curriculum."
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Final CTA */}
        <section className="py-20 bg-amber-500/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Understand Money?</h2>
              <p className="text-lg text-muted-foreground mb-10">
                Start your journey to financial enlightenment. Our beginner-friendly educational resources will help you make sense of Bitcoin and money in the digital age.
              </p>
              
              <Button
                asChild
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-8"
              >
                <Link to="/learn/beginner">
                  Begin Your Education
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FinancialEducation; 