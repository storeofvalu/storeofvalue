import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, PlayCircle, FileText, GraduationCap, Sparkles, Library, Network, Zap, Globe, Shield, Atom, Clock } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import BitcoinLogoIcon from '../components/BitcoinLogoIcon';

const LearnPage = () => {
  // For parallax effect
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  
  // Card animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute w-full h-full">
            <svg className="w-full h-full opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="gridPattern" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#gridPattern)" />
            </svg>
          </div>
        </div>
        
        {/* Bitcoin logo background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            style={{ y }}
            className="w-full h-full relative"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <BitcoinLogoIcon className="h-[120%] w-[120%] text-orange-500 opacity-[0.02]" />
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="container mx-auto px-4 relative z-10 text-center"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 px-3 py-1 bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 transition-colors">
              <GraduationCap className="mr-1 h-3.5 w-3.5" />
              <span>Educational Resources</span>
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-foreground relative">
              Learn About Bitcoin
            </h1>
            
            <div className="max-w-2xl mx-auto">
              <motion.p 
                className="text-xl md:text-2xl leading-relaxed text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Explore our educational paths and resources to understand Bitcoin as a revolutionary store of value.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-muted-foreground rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>
      
      <main className="relative pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-24">
            {/* Learning Paths Section */}
            <section>
              <div className="mb-12 text-center">
                <Badge className="mb-4 px-3 py-1 bg-orange-500 text-white hover:bg-orange-600 transition-colors">
                  <Sparkles className="mr-1 h-3.5 w-3.5" />
                  <span>Educational Journeys</span>
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Learning Paths</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Choose the path that best matches your current knowledge level
                </p>
              </div>
              
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={cardVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                  <Card className="h-full border-blue-500/10 bg-gradient-to-br from-background to-blue-950/5 overflow-hidden flex flex-col">
                    <CardHeader className="pb-4 relative">
                      <div className="absolute top-0 right-0 h-24 w-24 opacity-[0.03]">
                        <BookOpen className="h-full w-full" />
                      </div>
                      <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                        <BookOpen className="h-6 w-6 text-blue-500" />
                      </div>
                      <CardTitle>Beginners</CardTitle>
                      <CardDescription>New to Bitcoin and store of value concepts</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5 mr-2">
                            <ArrowRight className="h-3 w-3 text-blue-500" />
                          </div>
                          <span className="text-muted-foreground">What is money and why do we need it?</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5 mr-2">
                            <ArrowRight className="h-3 w-3 text-blue-500" />
                          </div>
                          <span className="text-muted-foreground">Understanding store of value as a property of money</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5 mr-2">
                            <ArrowRight className="h-3 w-3 text-blue-500" />
                          </div>
                          <span className="text-muted-foreground">Introduction to Bitcoin fundamentals</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5 mr-2">
                            <ArrowRight className="h-3 w-3 text-blue-500" />
                          </div>
                          <span className="text-muted-foreground">Comparing Bitcoin to traditional stores of value</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                        asChild
                      >
                        <Link to="/learn/beginner" className="flex items-center justify-center gap-2">
                          Start Here
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
                
                <motion.div variants={cardVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                  <Card className="h-full border-amber-500/10 bg-gradient-to-br from-background to-amber-950/5 overflow-hidden flex flex-col">
                    <CardHeader className="pb-4 relative">
                      <div className="absolute top-0 right-0 h-24 w-24 opacity-[0.03]">
                        <FileText className="h-full w-full" />
                      </div>
                      <div className="h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-4">
                        <FileText className="h-6 w-6 text-amber-500" />
                      </div>
                      <CardTitle>Intermediate</CardTitle>
                      <CardDescription>Deepen your understanding of Bitcoin's value proposition</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 mt-0.5 mr-2">
                            <ArrowRight className="h-3 w-3 text-amber-500" />
                          </div>
                          <span className="text-muted-foreground">Monetary history and the evolution of money</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 mt-0.5 mr-2">
                            <ArrowRight className="h-3 w-3 text-amber-500" />
                          </div>
                          <span className="text-muted-foreground">Bitcoin's economic principles and game theory</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 mt-0.5 mr-2">
                            <ArrowRight className="h-3 w-3 text-amber-500" />
                          </div>
                          <span className="text-muted-foreground">The technology behind Bitcoin's security model</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 mt-0.5 mr-2">
                            <ArrowRight className="h-3 w-3 text-amber-500" />
                          </div>
                          <span className="text-muted-foreground">Long-term storage strategies and key management</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        className="w-full bg-amber-500 hover:bg-amber-600 text-white"
                        asChild
                      >
                        <Link to="/learn/intermediate" className="flex items-center justify-center gap-2">
                          Explore Topics
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
                
                <motion.div variants={cardVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                  <Card className="h-full border-orange-500/10 bg-gradient-to-br from-background to-orange-950/5 overflow-hidden flex flex-col">
                    <CardHeader className="pb-4 relative">
                      <div className="absolute top-0 right-0 h-24 w-24 opacity-[0.03]">
                        <GraduationCap className="h-full w-full" />
                      </div>
                      <div className="h-12 w-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-4">
                        <GraduationCap className="h-6 w-6 text-orange-500" />
                      </div>
                      <CardTitle>Advanced</CardTitle>
                      <CardDescription>Explore complex topics and macroeconomic implications</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 mt-0.5 mr-2">
                            <ArrowRight className="h-3 w-3 text-orange-500" />
                          </div>
                          <span className="text-muted-foreground">Bitcoin's relationship to economic cycles</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 mt-0.5 mr-2">
                            <ArrowRight className="h-3 w-3 text-orange-500" />
                          </div>
                          <span className="text-muted-foreground">Game theory analysis of global Bitcoin adoption</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 mt-0.5 mr-2">
                            <ArrowRight className="h-3 w-3 text-orange-500" />
                          </div>
                          <span className="text-muted-foreground">Multi-signature setups and inheritance planning</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 mt-0.5 mr-2">
                            <ArrowRight className="h-3 w-3 text-orange-500" />
                          </div>
                          <span className="text-muted-foreground">Bitcoin's role in geopolitics and monetary policy</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                        asChild
                      >
                        <Link to="/learn/advanced" className="flex items-center justify-center gap-2">
                          Dive Deeper
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </motion.div>
            </section>
            
            {/* Featured Content Section */}
            <section>
              <div className="mb-12 text-center">
                <Badge className="mb-4 px-3 py-1 bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 transition-colors">
                  <Sparkles className="mr-1 h-3.5 w-3.5" />
                  <span>Highlighted Materials</span>
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Content</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Start with these essential educational pieces
                </p>
              </div>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={cardVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                  <Card className="h-full border-orange-500/10 bg-gradient-to-br from-background to-orange-950/5 overflow-hidden flex flex-col">
                    <div className="relative h-48 bg-gradient-to-r from-orange-500/20 to-black/20">
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <motion.div 
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <PlayCircle className="h-16 w-16 text-white opacity-90" />
                        </motion.div>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>But how does Bitcoin actually work?</CardTitle>
                      <CardDescription>Video • 3Blue1Brown • 26 minutes</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">
                        A clear and visual explanation of the cryptographic technology behind Bitcoin, including digital signatures, proof-of-work, and the blockchain structure that makes it secure.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        variant="outline" 
                        className="w-full border-orange-500/20 text-orange-500 hover:bg-orange-500/10"
                        asChild
                      >
                        <a href="https://www.youtube.com/watch?v=bBC-nXj3Ng4" target="_blank" rel="noopener noreferrer">
                          Watch Video
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
                
                <motion.div variants={cardVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                  <Card className="h-full border-orange-500/10 bg-gradient-to-br from-background to-orange-950/5 overflow-hidden flex flex-col">
                    <div className="relative h-48 bg-gradient-to-r from-orange-500/20 to-black/20">
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <motion.div 
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <BookOpen className="h-16 w-16 text-white opacity-90" />
                        </motion.div>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>Why Bitcoin Matters for Value Preservation</CardTitle>
                      <CardDescription>Article • 15 minute read</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">
                        An in-depth analysis of how Bitcoin addresses the fundamental issues with traditional value 
                        storage systems in an increasingly digital and globalized world.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full border-orange-500/20 text-orange-500 hover:bg-orange-500/10">
                        <Link to="/value-preservation">
                          Read Article
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </motion.div>
            </section>
            
            {/* Perspectives CTA Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden"
            >
              <div className="mb-12 text-center">
                <Badge className="mb-4 px-3 py-1 bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-colors">
                  <Network className="mr-1 h-3.5 w-3.5" />
                  <span>Multiple Viewpoints</span>
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Explore Bitcoin Perspectives</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Examine Bitcoin through different lenses to gain a deeper understanding of its significance
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border border-blue-500/20 bg-gradient-to-br from-background to-blue-950/5">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <Network className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Networked Revolution</h3>
                        <p className="text-muted-foreground text-sm">Network effects in action</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">How Bitcoin leverages network effects to create a global monetary transformation.</p>
                    <Button asChild variant="outline" className="w-full border-blue-500/20 text-blue-500 hover:bg-blue-500/10 group">
                      <Link to="/networked-revolution" className="flex items-center justify-center gap-2">
                        Explore
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border border-amber-500/20 bg-gradient-to-br from-background to-amber-950/5">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                        <Clock className="h-6 w-6 text-amber-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Time Traveler's Portfolio</h3>
                        <p className="text-muted-foreground text-sm">Future monetary evolution</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">A speculative journey through the next century of monetary evolution with Bitcoin.</p>
                    <Button asChild variant="outline" className="w-full border-amber-500/20 text-amber-500 hover:bg-amber-500/10 group">
                      <Link to="/time-travelers-portfolio" className="flex items-center justify-center gap-2">
                        Explore
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border border-green-500/20 bg-gradient-to-br from-background to-green-950/5">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
                        <Globe className="h-6 w-6 text-green-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">The Global Game</h3>
                        <p className="text-muted-foreground text-sm">Borderless participation</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">Bitcoin as a global, borderless game with equal rules for all participants.</p>
                    <Button asChild variant="outline" className="w-full border-green-500/20 text-green-500 hover:bg-green-500/10 group">
                      <Link to="/global-game" className="flex items-center justify-center gap-2">
                        Explore
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8 text-center">
                <Button asChild className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white group">
                  <Link to="/perspectives" className="flex items-center gap-2">
                    View All Perspectives
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.section>
            
            {/* CTA Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-10 bg-gradient-to-br from-orange-950/5 to-background border border-orange-500/10 rounded-xl text-center relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="inline-flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-orange-500/10 mb-6">
                  <Library className="h-8 w-8 text-orange-500" />
                </div>
                
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to explore more?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Our comprehensive resource library contains books, articles, videos, and podcasts 
                  curated to enhance your understanding of Bitcoin as a store of value.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button asChild variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500/10 group">
                    <Link to="/principles" className="flex items-center gap-2">
                      View Principles
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                    <Link to="/resources">Explore Resources</Link>
                  </Button>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LearnPage; 