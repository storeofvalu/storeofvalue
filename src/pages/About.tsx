import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Mail, MapPin, GraduationCap, Briefcase, BookOpen, ArrowRight, Users, Shield, Sparkles } from 'lucide-react';
import BitcoinLogoIcon from '../components/BitcoinLogoIcon';

const AboutPage = () => {
  // For parallax effect
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  
  // Service card animation variant
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
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
        
        {/* Bitcoin network background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            style={{ y }}
            className="w-full h-full relative"
          >
            <svg viewBox="0 0 1000 1000" className="absolute top-0 left-0 w-full h-full opacity-5">
              {/* Connected nodes as a network */}
              <line x1="100" y1="100" x2="300" y2="200" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              <line x1="300" y1="200" x2="500" y2="150" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              <line x1="500" y1="150" x2="700" y2="250" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              <line x1="700" y1="250" x2="900" y2="200" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              
              <line x1="200" y1="400" x2="400" y2="350" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              <line x1="400" y1="350" x2="500" y2="150" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              <line x1="400" y1="350" x2="600" y2="450" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              <line x1="600" y1="450" x2="800" y2="500" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              
              <line x1="100" y1="700" x2="300" y2="650" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              <line x1="300" y1="650" x2="500" y2="600" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              <line x1="500" y1="600" x2="600" y2="450" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              <line x1="500" y1="600" x2="700" y2="700" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              <line x1="700" y1="700" x2="900" y2="750" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              
              {/* Network nodes */}
              <circle cx="100" cy="100" r="4" fill="#F7931A" />
              <circle cx="300" cy="200" r="4" fill="#F7931A" />
              <circle cx="500" cy="150" r="6" fill="#F7931A" />
              <circle cx="700" cy="250" r="4" fill="#F7931A" />
              <circle cx="900" cy="200" r="4" fill="#F7931A" />
              
              <circle cx="200" cy="400" r="4" fill="#F7931A" />
              <circle cx="400" cy="350" r="5" fill="#F7931A" />
              <circle cx="600" cy="450" r="6" fill="#F7931A" />
              <circle cx="800" cy="500" r="4" fill="#F7931A" />
              
              <circle cx="100" cy="700" r="4" fill="#F7931A" />
              <circle cx="300" cy="650" r="4" fill="#F7931A" />
              <circle cx="500" cy="600" r="5" fill="#F7931A" />
              <circle cx="700" cy="700" r="4" fill="#F7931A" />
              <circle cx="900" cy="750" r="4" fill="#F7931A" />
            </svg>
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
              <MapPin className="mr-1 h-3.5 w-3.5" />
              <span>Based in Zug, Switzerland</span>
            </Badge>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-5">
                <BitcoinLogoIcon className="h-80 w-80 text-orange-500" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-8 text-foreground relative">
                About Store of Value
              </h1>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <motion.p 
                className="text-xl md:text-2xl leading-relaxed text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Guiding you through the digital monetary revolution with education, expertise, and practical solutions.
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
        {/* Founder Section */}
        <section className="py-20 bg-gradient-to-b from-background to-background/90">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                <div className="md:col-span-1">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/20 to-amber-500/5 rounded-full blur-lg"></div>
                    <div className="aspect-square bg-gradient-to-br from-orange-500/10 to-orange-500/5 rounded-full flex items-center justify-center overflow-hidden border-2 border-orange-500/20 relative">
                      <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-6xl font-bold text-orange-500"
                      >
                        HB
                      </motion.div>
                      
                      {/* Decorative elements */}
                      <motion.div 
                        className="absolute inset-0 border-4 border-dashed border-orange-500/10 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Henry E. Barrows</h2>
                    <p className="text-lg text-muted-foreground mb-4">
                      Blockchain educator, digital currency specialist, and Bitcoin advocate based in the heart of "Crypto Valley" - Zug, Switzerland.
                    </p>
                    <div className="flex items-center text-muted-foreground mb-6">
                      <div className="p-1.5 rounded-full bg-orange-500/10">
                        <GraduationCap className="h-5 w-5 text-orange-500" />
                      </div>
                      <span className="ml-2">MSc in Blockchain & Digital Currencies</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      I founded Store of Value with a singular vision: to illuminate the pivotal shift that Bitcoin and blockchain technology represent for our global financial system and to help individuals navigate this transformation with confidence.
                    </p>
                    <p>
                      After completing my Master's degree in Blockchain & Digital Currencies, I committed myself to translating complex technical concepts into accessible knowledge that empowers people to make informed decisions about their financial future.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-20 bg-gradient-to-b from-background/90 to-orange-950/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="max-w-5xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-16">
                <Badge className="mb-6 px-3 py-1 bg-orange-500 text-white hover:bg-orange-600 transition-colors">
                  <Sparkles className="mr-1 h-3.5 w-3.5" />
                  <span>Our Purpose</span>
                </Badge>
                
                <h2 className="text-3xl md:text-5xl font-bold mb-8">Our Mission</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  To guide people toward understanding Bitcoin as the ultimate store of value in an increasingly digital world.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div 
                  className="bg-gradient-to-br from-background to-orange-950/5 p-1 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-card p-6 rounded-lg h-full flex flex-col items-center text-center">
                    <div className="h-16 w-16 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6">
                      <BookOpen className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Educate</h3>
                    <p className="text-muted-foreground">
                      Demystify Bitcoin and blockchain technology through accessible, evidence-based content.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-gradient-to-br from-background to-amber-950/5 p-1 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-card p-6 rounded-lg h-full flex flex-col items-center text-center">
                    <div className="h-16 w-16 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 mb-6">
                      <Shield className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Empower</h3>
                    <p className="text-muted-foreground">
                      Provide practical tools and insights that help individuals take control of their financial sovereignty.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-gradient-to-br from-background to-blue-950/5 p-1 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-card p-6 rounded-lg h-full flex flex-col items-center text-center">
                    <div className="h-16 w-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6">
                      <MapPin className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Guide</h3>
                    <p className="text-muted-foreground">
                      Navigate the complex landscape of digital assets with clarity and confidence.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
              </div>
            </section>
            
        {/* Zug's Crypto Valley Section */}
        <section className="py-20 bg-orange-950/5 border-y border-orange-500/10">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-5xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <Badge className="mb-6 px-3 py-1 bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 transition-colors">
                  <MapPin className="mr-1 h-3.5 w-3.5" />
                  <span>Location</span>
                </Badge>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Zug's "Crypto Valley"?</h2>
              </div>
              
              <Card className="overflow-hidden border-orange-500/10 bg-gradient-to-br from-card to-orange-950/5">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <motion.div 
                      className="p-8 md:p-10"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          Based in Zug, Switzerland—often called "Crypto Valley"—I'm at the epicenter of blockchain innovation and regulatory clarity.
                        </p>
                        <p>
                          Zug has become a global hub for blockchain projects and digital asset businesses, providing an ideal environment for understanding the cutting edge of this technology and its real-world applications.
                        </p>
                        <p>
                          Switzerland's progressive approach to digital currency regulation, combined with its longstanding tradition as a financial center, creates the perfect backdrop for exploring Bitcoin's role as a store of value in the modern economy.
                        </p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 p-8 md:p-10 border-t md:border-t-0 md:border-l border-orange-500/10"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-xl font-semibold mb-6">Crypto Valley Benefits</h3>
                      <ul className="space-y-4">
                        <motion.li 
                          className="flex items-start"
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="h-6 w-6 rounded-full bg-orange-500/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                            <ArrowRight className="h-3.5 w-3.5 text-orange-500" />
                          </div>
                          <span>Access to world-class blockchain expertise and innovation</span>
                        </motion.li>
                        <motion.li 
                          className="flex items-start"
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          viewport={{ once: true }}
                        >
                          <div className="h-6 w-6 rounded-full bg-orange-500/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                            <ArrowRight className="h-3.5 w-3.5 text-orange-500" />
                          </div>
                          <span>Regulatory clarity for digital assets</span>
                        </motion.li>
                        <motion.li 
                          className="flex items-start"
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <div className="h-6 w-6 rounded-full bg-orange-500/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                            <ArrowRight className="h-3.5 w-3.5 text-orange-500" />
                          </div>
                          <span>Connection to a global network of cryptocurrency pioneers</span>
                        </motion.li>
                        <motion.li 
                          className="flex items-start"
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <div className="h-6 w-6 rounded-full bg-orange-500/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                            <ArrowRight className="h-3.5 w-3.5 text-orange-500" />
                          </div>
                          <span>Swiss tradition of financial sovereignty and privacy</span>
                        </motion.li>
              </ul>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
            </section>
            
        {/* Services Section */}
        <section className="py-20 bg-gradient-to-b from-orange-950/5 to-background">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-5xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <Badge className="mb-6 px-3 py-1 bg-orange-500 text-white hover:bg-orange-600 transition-colors">
                  <Briefcase className="mr-1 h-3.5 w-3.5" />
                  <span>Offerings</span>
                </Badge>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Services Offered</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <Card className="h-full border-orange-500/10 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300">
                    <CardHeader className="bg-gradient-to-r from-orange-500/10 to-background border-b border-orange-500/10">
                      <CardTitle>Educational Consulting</CardTitle>
                      <CardDescription>Learn about Bitcoin and blockchain technology</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 pt-6">
                      <p className="text-muted-foreground">
                        Personalized education sessions tailored to your knowledge level, from beginner to advanced.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <div className="h-6 w-6 rounded-full bg-orange-500/10 flex items-center justify-center mr-3 flex-shrink-0">
                            <ArrowRight className="h-3.5 w-3.5 text-orange-500" />
                          </div>
                          <span>Bitcoin fundamentals and investment strategies</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-6 w-6 rounded-full bg-orange-500/10 flex items-center justify-center mr-3 flex-shrink-0">
                            <ArrowRight className="h-3.5 w-3.5 text-orange-500" />
                          </div>
                          <span>Blockchain technology explained simply</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-6 w-6 rounded-full bg-orange-500/10 flex items-center justify-center mr-3 flex-shrink-0">
                            <ArrowRight className="h-3.5 w-3.5 text-orange-500" />
                          </div>
                          <span>Monetary history and Bitcoin's role</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white" asChild>
                        <a href="/community" className="flex items-center justify-center gap-2">
                          Learn More <ExternalLink size={16} />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
                
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="h-full"
                >
                  <Card className="h-full border-orange-500/10 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300">
                    <CardHeader className="bg-gradient-to-r from-orange-500/10 to-background border-b border-orange-500/10">
                      <CardTitle>Technical Advisory</CardTitle>
                      <CardDescription>Expert guidance for your blockchain journey</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 pt-6">
                      <p className="text-muted-foreground">
                        Professional advice on implementing Bitcoin and blockchain solutions for individuals and organizations.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <div className="h-6 w-6 rounded-full bg-orange-500/10 flex items-center justify-center mr-3 flex-shrink-0">
                            <ArrowRight className="h-3.5 w-3.5 text-orange-500" />
                          </div>
                          <span>Self-custody setup and best practices</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-6 w-6 rounded-full bg-orange-500/10 flex items-center justify-center mr-3 flex-shrink-0">
                            <ArrowRight className="h-3.5 w-3.5 text-orange-500" />
                          </div>
                          <span>Portfolio diversification strategies</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-6 w-6 rounded-full bg-orange-500/10 flex items-center justify-center mr-3 flex-shrink-0">
                            <ArrowRight className="h-3.5 w-3.5 text-orange-500" />
                          </div>
                          <span>Security audits and recommendations</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white" asChild>
                        <a href="/community" className="flex items-center justify-center gap-2">
                          Learn More <ExternalLink size={16} />
                        </a>
              </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
            </div>
            </motion.div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-orange-950/5 via-background to-orange-950/5">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto bg-card border border-orange-500/10 rounded-xl p-10 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Decorative elements */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="inline-flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-orange-500/10 mb-6">
                  <Users className="h-8 w-8 text-orange-500" />
                </div>
                
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">Ready to Start Your Bitcoin Journey?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  Whether you're just curious about Bitcoin or looking to deepen your understanding of its role as a store of value, I'm here to guide you through every step of the process.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                    <a href="/community">Join Our Community</a>
                  </Button>
                  <Button asChild variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500/10 flex items-center gap-2">
                    <a href="mailto:contact@storeofvalue.ch">
                      <Mail className="h-4 w-4 mr-2" /> Contact Me
                    </a>
                  </Button>
        </div>
      </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage; 