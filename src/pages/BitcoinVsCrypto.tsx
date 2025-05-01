import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import BitcoinLogoIcon from '../components/BitcoinLogoIcon';
import { createWebsiteSchema } from '../components/StructuredData';
import { 
  Shield, 
  Key, 
  Clock, 
  Lightbulb, 
  Network, 
  Hash, 
  ArrowRight, 
  Lock, 
  Zap, 
  Database, 
  Code, 
  Award,
  ServerCog,
  Layers,
  Globe,
  Rocket,
  Building2,
  Users,
  LucideEyeOff,
  Landmark,
  Check,
  CheckCircle,
  XCircle,
  Quote,
  Compass,
  GitFork,
  Info
} from 'lucide-react';

const BitcoinVsCrypto = () => {
  // Create structured data for SEO
  const comparisonPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Bitcoin vs Other Cryptocurrencies",
    "description": "Understanding the fundamental differences between Bitcoin and thousands of alternative cryptocurrencies.",
    "keywords": "Bitcoin, cryptocurrency, altcoins, comparison, digital currency, blockchain",
    "inLanguage": "en-US",
    "mainEntity": {
      "@type": "Article",
      "name": "Bitcoin vs Other Cryptocurrencies",
      "headline": "Understanding the Fundamental Differences Between Bitcoin and Other Cryptocurrencies",
      "author": {
        "@type": "Organization",
        "name": "Bitcoin Education"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Bitcoin Education",
        "logo": {
          "@type": "ImageObject",
          "url": "https://storeofvalue.ch/images/logo.png"
        }
      }
    }
  };

  return (
    <Layout
      seo={{
        title: "Bitcoin vs Other Cryptocurrencies",
        description: "Understand how Bitcoin fundamentally differs from other cryptocurrencies in its design, purpose, and security model, with key comparisons across technical features, governance, and monetary properties.",
        canonicalUrl: "/bitcoin-vs-crypto",
        ogImage: "/images/og-bitcoin-vs-crypto.jpg",
        ogType: "article",
        keywords: "bitcoin, cryptocurrency, altcoins, ethereum, blockchain, crypto comparison, digital gold, store of value, monetary policy, censorship resistance",
        structuredData: comparisonPageSchema
      }}
    >
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10 z-0"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
                  Bitcoin vs. Other Cryptocurrencies
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Understanding the fundamental differences between Bitcoin and thousands of alternative cryptocurrencies
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center mb-10">
                  <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-none" size="lg">
                    <span className="mr-2">Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg" className="border-orange-500/20 hover:bg-orange-500/5">
                    <Shield className="h-4 w-4 mr-2 text-orange-500" />
                    <span>Explore Bitcoin's Principles</span>
                  </Button>
                </div>
                
                {/* Hero visual comparison */}
                <div className="mt-12 bg-card border rounded-xl shadow-md overflow-hidden">
                  <div className="p-6 bg-muted/30">
                    <h3 className="text-xl font-medium mb-4">A Tale of Two Approaches</h3>
                  </div>
                  <div className="grid md:grid-cols-2 divide-x divide-y md:divide-y-0">
                    <div className="p-6 bg-gradient-to-b from-orange-500/5 to-transparent">
                      <div className="flex items-center mb-4">
                        <BitcoinLogoIcon className="h-8 w-8 text-orange-500 mr-3" />
                        <h4 className="text-lg font-bold">Bitcoin</h4>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Sound Money First</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Fixed Supply Cap</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">True Decentralization</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Security-First Design</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">14+ Years of Proven Reliability</span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-6 bg-gradient-to-b from-blue-500/5 to-transparent">
                      <div className="flex items-center mb-4">
                        <Code className="h-8 w-8 text-blue-500 mr-3" />
                        <h4 className="text-lg font-bold">Other Cryptocurrencies</h4>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Platform/App Tokens First</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Flexible/Undefined Supply</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Centralized Leadership</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Features Over Security</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Frequent Redesigns/Hard Forks</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Floating cryptocurrency icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div 
              className="absolute top-1/4 left-1/5 bg-orange-500/20 p-3 rounded-full"
              animate={{ 
                y: [0, -15, 0], 
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <BitcoinLogoIcon className="h-8 w-8 text-orange-500" />
            </motion.div>
            
            <motion.div 
              className="absolute top-3/4 right-1/3 bg-blue-500/20 p-3 rounded-full"
              animate={{ 
                y: [0, 10, 0], 
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4,
                delay: 1, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Code className="h-6 w-6 text-blue-500" />
            </motion.div>
            
            <motion.div 
              className="absolute top-1/3 right-1/4 bg-purple-500/20 p-3 rounded-full"
              animate={{ 
                y: [0, -10, 0], 
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4.5,
                delay: 0.5, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Rocket className="h-6 w-6 text-purple-500" />
            </motion.div>
            
            <motion.div 
              className="absolute top-2/3 left-1/4 bg-green-500/20 p-3 rounded-full"
              animate={{ 
                y: [0, 15, 0], 
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 5.5,
                delay: 1.5, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Zap className="h-6 w-6 text-green-500" />
            </motion.div>
          </div>
        </section>
        
        {/* Interactive Comparison Matrix - ADD THIS NEW SECTION before the Use Cases Comparison */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Feature Comparison Matrix</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  How Bitcoin and other cryptocurrencies stack up across key properties of money and technology
                </p>
              </motion.div>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse mb-12">
                  <thead>
                    <tr className="bg-muted">
                      <th className="p-4 text-left font-medium border-b">Property</th>
                      <th className="p-4 text-center font-medium border-b">Bitcoin</th>
                      <th className="p-4 text-center font-medium border-b">Ethereum</th>
                      <th className="p-4 text-center font-medium border-b">Altcoins</th>
                      <th className="p-4 text-center font-medium border-b">Stablecoins</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-muted/20 transition-colors">
                      <td className="p-4 font-medium">Decentralization</td>
                      <td className="p-4 text-center">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center mb-1">
                            <span className="text-green-500 font-bold">A+</span>
                          </div>
                          <span className="text-xs text-muted-foreground">Fully decentralized</span>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center mb-1">
                            <span className="text-amber-500 font-bold">B-</span>
                          </div>
                          <span className="text-xs text-muted-foreground">Some centralization</span>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mb-1">
                            <span className="text-red-500 font-bold">D</span>
                          </div>
                          <span className="text-xs text-muted-foreground">Mostly centralized</span>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mb-1">
                            <span className="text-red-500 font-bold">F</span>
                          </div>
                          <span className="text-xs text-muted-foreground">Fully centralized</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-muted/20 transition-colors">
                      <td className="p-4 font-medium">Scarcity</td>
                      <td className="p-4 text-center">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center mb-1">
                            <span className="text-green-500 font-bold">A+</span>
                          </div>
                          <span className="text-xs text-muted-foreground">Fixed at 21M</span>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mb-1">
                            <span className="text-red-500 font-bold">D</span>
                          </div>
                          <span className="text-xs text-muted-foreground">No supply cap</span>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center mb-1">
                            <span className="text-amber-500 font-bold">C</span>
                          </div>
                          <span className="text-xs text-muted-foreground">Varies widely</span>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mb-1">
                            <span className="text-red-500 font-bold">F</span>
                          </div>
                          <span className="text-xs text-muted-foreground">Unlimited issuance</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-muted/20 transition-colors">
                      <td className="p-4 font-medium">Security</td>
                      <td className="p-4 text-center">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center mb-1">
                            <span className="text-green-500 font-bold">A+</span>
                          </div>
                          <span className="text-xs text-muted-foreground">Energy-backed</span>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center mb-1">
                            <span className="text-amber-500 font-bold">C+</span>
                          </div>
                          <span className="text-xs text-muted-foreground">Capital-based</span>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mb-1">
                            <span className="text-red-500 font-bold">D</span>
                          </div>
                          <span className="text-xs text-muted-foreground">Vulnerable</span>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mb-1">
                            <span className="text-red-500 font-bold">F</span>
                          </div>
                          <span className="text-xs text-muted-foreground">Counterparty risk</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-muted/20 transition-colors">
                      <td className="p-4 font-medium">Immutability</td>
                      <td className="p-4 text-center">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center mb-1">
                            <span className="text-green-500 font-bold">A+</span>
                          </div>
                          <span className="text-xs text-muted-foreground">Practically unalterable</span>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center mb-1">
                            <span className="text-amber-500 font-bold">B-</span>
                          </div>
                          <span className="text-xs text-muted-foreground">History of rollbacks</span>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mb-1">
                            <span className="text-red-500 font-bold">D</span>
                          </div>
                          <span className="text-xs text-muted-foreground">Frequent changes</span>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mb-1">
                            <span className="text-red-500 font-bold">F</span>
                          </div>
                          <span className="text-xs text-muted-foreground">Can be frozen</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-muted/20 transition-colors">
                      <td className="p-4 font-medium">Layer 2 Scaling</td>
                      <td className="p-4 text-center">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center mb-1">
                            <span className="text-green-500 font-bold">A</span>
                          </div>
                          <span className="text-xs text-muted-foreground">Lightning Network</span>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center mb-1">
                            <span className="text-amber-500 font-bold">B</span>
                          </div>
                          <span className="text-xs text-muted-foreground">Many L2 solutions</span>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center mb-1">
                            <span className="text-amber-500 font-bold">C</span>
                          </div>
                          <span className="text-xs text-muted-foreground">Limited L2 options</span>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mb-1">
                            <span className="text-red-500 font-bold">D</span>
                          </div>
                          <span className="text-xs text-muted-foreground">Relies on base chain</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-card shadow-md rounded-xl border p-6">
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-6 w-6 text-amber-500 mr-2 flex-shrink-0" />
                  <h3 className="text-lg font-bold">Grading Key</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center mr-2">
                      <span className="text-green-500 font-bold">A+</span>
                    </div>
                    <span className="text-sm">Exceptional</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center mr-2">
                      <span className="text-green-500 font-bold">A</span>
                    </div>
                    <span className="text-sm">Excellent</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center mr-2">
                      <span className="text-amber-500 font-bold">B</span>
                    </div>
                    <span className="text-sm">Good</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center mr-2">
                      <span className="text-amber-500 font-bold">C</span>
                    </div>
                    <span className="text-sm">Average</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mr-2">
                      <span className="text-red-500 font-bold">F</span>
                    </div>
                    <span className="text-sm">Poor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Use Cases Comparison */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Comparing Use Cases</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Different design priorities lead to fundamentally different applications and purposes
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {/* Bitcoin Use Cases */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-card rounded-xl border shadow-md overflow-hidden"
                >
                  <div className="p-6 bg-orange-500/5 border-b">
                    <div className="flex items-center">
                      <BitcoinLogoIcon className="h-8 w-8 text-orange-500 mr-3" />
                      <h3 className="text-xl font-bold">Bitcoin: Digital Gold</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <ul className="space-y-6">
                      <li className="flex">
                        <div className="bg-orange-500/10 p-2 rounded-full mr-4 flex-shrink-0">
                          <Lock className="h-5 w-5 text-orange-500" />
                        </div>
                        <div>
                          <div className="font-medium mb-1">Long-term Value Storage</div>
                          <p className="text-sm text-muted-foreground">
                            Designed primarily as a secure, censorship-resistant store of value that preserves purchasing power over time.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex">
                        <div className="bg-orange-500/10 p-2 rounded-full mr-4 flex-shrink-0">
                          <Zap className="h-5 w-5 text-orange-500" />
                        </div>
                        <div>
                          <div className="font-medium mb-1">Lightning-Fast Payments</div>
                          <p className="text-sm text-muted-foreground">
                            Layer 2 solutions enable instant, low-fee payments while maintaining the security of the base layer.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex">
                        <div className="bg-orange-500/10 p-2 rounded-full mr-4 flex-shrink-0">
                          <Shield className="h-5 w-5 text-orange-500" />
                        </div>
                        <div>
                          <div className="font-medium mb-1">Inflation Hedge</div>
                          <p className="text-sm text-muted-foreground">
                            Fixed supply makes it a potential hedge against monetary inflation and currency debasement.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex">
                        <div className="bg-orange-500/10 p-2 rounded-full mr-4 flex-shrink-0">
                          <Key className="h-5 w-5 text-orange-500" />
                        </div>
                        <div>
                          <div className="font-medium mb-1">Self-Sovereign Savings</div>
                          <p className="text-sm text-muted-foreground">
                            Enables full control of your wealth without intermediaries or permission requirements.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </motion.div>
                
                {/* Cryptocurrency Use Cases */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-card rounded-xl border shadow-md overflow-hidden"
                >
                  <div className="p-6 bg-blue-500/5 border-b">
                    <div className="flex items-center">
                      <Code className="h-8 w-8 text-blue-500 mr-3" />
                      <h3 className="text-xl font-bold">Altcoins: Platform Tokens</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <ul className="space-y-6">
                      <li className="flex">
                        <div className="bg-blue-500/10 p-2 rounded-full mr-4 flex-shrink-0">
                          <Rocket className="h-5 w-5 text-blue-500" />
                        </div>
                        <div>
                          <div className="font-medium mb-1">Speculative Investment</div>
                          <p className="text-sm text-muted-foreground">
                            Often positioned as growth investments with high potential returns but significant risk.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex">
                        <div className="bg-blue-500/10 p-2 rounded-full mr-4 flex-shrink-0">
                          <Code className="h-5 w-5 text-blue-500" />
                        </div>
                        <div>
                          <div className="font-medium mb-1">Platform Functionality</div>
                          <p className="text-sm text-muted-foreground">
                            Primarily function as utility tokens for their respective networks rather than as money.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex">
                        <div className="bg-blue-500/10 p-2 rounded-full mr-4 flex-shrink-0">
                          <Layers className="h-5 w-5 text-blue-500" />
                        </div>
                        <div>
                          <div className="font-medium mb-1">Application Development</div>
                          <p className="text-sm text-muted-foreground">
                            Focus on enabling developers to build applications using smart contracts and other features.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex">
                        <div className="bg-blue-500/10 p-2 rounded-full mr-4 flex-shrink-0">
                          <Building2 className="h-5 w-5 text-blue-500" />
                        </div>
                        <div>
                          <div className="font-medium mb-1">Corporate Integration</div>
                          <p className="text-sm text-muted-foreground">
                            Often designed for enterprise adoption and integration with existing financial systems.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-orange-500/5 to-amber-500/5 rounded-xl border p-6"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Lightbulb className="h-6 w-6 text-amber-500 mr-2" />
                  <span>Different Money, Different Purpose</span>
                </h3>
                <p className="text-muted-foreground">
                  Bitcoin optimizes for the properties that make sound money: scarcity, durability, portability, divisibility, verifiability, and resistance to censorship. Most cryptocurrencies prioritize different properties, such as programmability, transaction throughput, or governance flexibility—making them fundamentally different tools serving different purposes.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Conclusion */}
        <section className="py-20 bg-orange-500/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card p-8 rounded-xl border shadow-md"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-orange-500/10 p-3 rounded-full mr-4">
                    <BitcoinLogoIcon className="h-10 w-10 text-orange-500" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Bitcoin Is Different By Design</h2>
                </div>
                
                <div className="space-y-4 text-muted-foreground mb-6">
                  <p>
                    Bitcoin's unique properties—including its truly decentralized origin, capped supply, proof-of-work security, and conservative development approach—make it fundamentally different from other cryptocurrencies.
                  </p>
                  <p>
                    While most cryptocurrencies attempt to compete on features, speed, or programmability, Bitcoin prioritizes the essential properties of sound money: security, censorship resistance, and monetary predictability.
                  </p>
                  <p>
                    Understanding these differences is crucial for anyone exploring the digital asset space, as they reveal why Bitcoin stands alone as a truly revolutionary monetary invention rather than simply being "the first cryptocurrency."
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/principles" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-orange-500 text-white hover:bg-orange-600 h-10 px-4 py-2 w-full sm:w-auto text-center">
                    Learn About Bitcoin Principles
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Animated Stats Section */}
        <section className="py-20 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">By The Numbers</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Key metrics that illustrate the fundamental differences between Bitcoin and other cryptocurrencies
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {/* Stat 1 - Network Age */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-card rounded-xl border shadow-md overflow-hidden"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="p-6 border-b bg-gradient-to-br from-orange-500/5 to-transparent">
                    <h3 className="text-lg font-medium flex items-center">
                      <Clock className="h-5 w-5 text-orange-500 mr-2" />
                      <span>Network Age</span>
                    </h3>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium">Bitcoin</span>
                      <span className="text-2xl font-bold text-orange-500">14+ years</span>
                    </div>
                    <div className="w-full bg-muted h-2 rounded-full mb-6">
                      <motion.div 
                        initial={{ width: 0 }} 
                        whileInView={{ width: '100%' }} 
                        transition={{ duration: 1.5, delay: 0.2 }}
                        className="h-full bg-orange-500 rounded-full" 
                      />
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium">Ethereum</span>
                      <span className="text-2xl font-bold text-blue-500">9 years</span>
                    </div>
                    <div className="w-full bg-muted h-2 rounded-full mb-6">
                      <motion.div 
                        initial={{ width: 0 }} 
                        whileInView={{ width: '64%' }} 
                        transition={{ duration: 1.5, delay: 0.4 }}
                        className="h-full bg-blue-500 rounded-full" 
                      />
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium">Most Altcoins</span>
                      <span className="text-2xl font-bold text-purple-500">&lt;5 years</span>
                    </div>
                    <div className="w-full bg-muted h-2 rounded-full">
                      <motion.div 
                        initial={{ width: 0 }} 
                        whileInView={{ width: '35%' }} 
                        transition={{ duration: 1.5, delay: 0.6 }}
                        className="h-full bg-purple-500 rounded-full" 
                      />
                    </div>
                  </div>
                </motion.div>
                
                {/* Stat 2 - Network Nodes */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-card rounded-xl border shadow-md overflow-hidden"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="p-6 border-b bg-gradient-to-br from-orange-500/5 to-transparent">
                    <h3 className="text-lg font-medium flex items-center">
                      <Network className="h-5 w-5 text-orange-500 mr-2" />
                      <span>Full Nodes</span>
                    </h3>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium">Bitcoin</span>
                      <span className="text-2xl font-bold text-orange-500">15,000+</span>
                    </div>
                    <div className="w-full bg-muted h-2 rounded-full mb-6">
                      <motion.div 
                        initial={{ width: 0 }} 
                        whileInView={{ width: '100%' }} 
                        transition={{ duration: 1.5, delay: 0.2 }}
                        className="h-full bg-orange-500 rounded-full" 
                      />
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium">Ethereum</span>
                      <span className="text-2xl font-bold text-blue-500">~6,000</span>
                    </div>
                    <div className="w-full bg-muted h-2 rounded-full mb-6">
                      <motion.div 
                        initial={{ width: 0 }} 
                        whileInView={{ width: '40%' }} 
                        transition={{ duration: 1.5, delay: 0.4 }}
                        className="h-full bg-blue-500 rounded-full" 
                      />
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium">Most Altcoins</span>
                      <span className="text-2xl font-bold text-purple-500">&lt;1,000</span>
                    </div>
                    <div className="w-full bg-muted h-2 rounded-full">
                      <motion.div 
                        initial={{ width: 0 }} 
                        whileInView={{ width: '7%' }} 
                        transition={{ duration: 1.5, delay: 0.6 }}
                        className="h-full bg-purple-500 rounded-full" 
                      />
                    </div>
                  </div>
                </motion.div>
                
                {/* Stat 3 - Protocol Changes */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-card rounded-xl border shadow-md overflow-hidden"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="p-6 border-b bg-gradient-to-br from-orange-500/5 to-transparent">
                    <h3 className="text-lg font-medium flex items-center">
                      <GitFork className="h-5 w-5 text-orange-500 mr-2" />
                      <span>Major Protocol Changes</span>
                    </h3>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium">Bitcoin</span>
                      <span className="text-2xl font-bold text-green-500">Few</span>
                    </div>
                    <div className="w-full bg-muted h-2 rounded-full mb-6">
                      <motion.div 
                        initial={{ width: 0 }} 
                        whileInView={{ width: '15%' }} 
                        transition={{ duration: 1.5, delay: 0.2 }}
                        className="h-full bg-green-500 rounded-full" 
                      />
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium">Ethereum</span>
                      <span className="text-2xl font-bold text-amber-500">Many</span>
                    </div>
                    <div className="w-full bg-muted h-2 rounded-full mb-6">
                      <motion.div 
                        initial={{ width: 0 }} 
                        whileInView={{ width: '70%' }} 
                        transition={{ duration: 1.5, delay: 0.4 }}
                        className="h-full bg-amber-500 rounded-full" 
                      />
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium">Most Altcoins</span>
                      <span className="text-2xl font-bold text-red-500">Constant</span>
                    </div>
                    <div className="w-full bg-muted h-2 rounded-full">
                      <motion.div 
                        initial={{ width: 0 }} 
                        whileInView={{ width: '95%' }} 
                        transition={{ duration: 1.5, delay: 0.6 }}
                        className="h-full bg-red-500 rounded-full" 
                      />
                    </div>
                  </div>
                </motion.div>
                
                {/* Stat 4 - Security Budget */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-card rounded-xl border shadow-md overflow-hidden"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="p-6 border-b bg-gradient-to-br from-orange-500/5 to-transparent">
                    <h3 className="text-lg font-medium flex items-center">
                      <Shield className="h-5 w-5 text-orange-500 mr-2" />
                      <span>Security Budget</span>
                    </h3>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium">Bitcoin</span>
                      <span className="text-2xl font-bold text-orange-500">Highest</span>
                    </div>
                    <div className="w-full bg-muted h-2 rounded-full mb-6">
                      <motion.div 
                        initial={{ width: 0 }} 
                        whileInView={{ width: '100%' }} 
                        transition={{ duration: 1.5, delay: 0.2 }}
                        className="h-full bg-orange-500 rounded-full" 
                      />
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium">Ethereum</span>
                      <span className="text-2xl font-bold text-blue-500">Medium</span>
                    </div>
                    <div className="w-full bg-muted h-2 rounded-full mb-6">
                      <motion.div 
                        initial={{ width: 0 }} 
                        whileInView={{ width: '45%' }} 
                        transition={{ duration: 1.5, delay: 0.4 }}
                        className="h-full bg-blue-500 rounded-full" 
                      />
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium">Most Altcoins</span>
                      <span className="text-2xl font-bold text-purple-500">Low</span>
                    </div>
                    <div className="w-full bg-muted h-2 rounded-full">
                      <motion.div 
                        initial={{ width: 0 }} 
                        whileInView={{ width: '10%' }} 
                        transition={{ duration: 1.5, delay: 0.6 }}
                        className="h-full bg-purple-500 rounded-full" 
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card p-6 rounded-xl border shadow-md"
              >
                <div className="flex items-center mb-4">
                  <Info className="h-6 w-6 text-orange-500 mr-3" />
                  <h3 className="text-lg font-bold">Data Interpretation</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  These metrics highlight Bitcoin's fundamental advantages in network maturity, decentralization, stability, and security. While other cryptocurrencies may prioritize features and flexibility, Bitcoin's focus on these core attributes makes it uniquely positioned as a sound money system rather than a technology platform.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-orange-500/5 to-amber-500/5">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Understand Bitcoin's Fundamental Difference
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Bitcoin is not just another cryptocurrency—it's a fundamentally different monetary system designed from first principles to be secure, decentralized, and censorship-resistant.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/principles" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-11 px-8">
                  <Shield className="mr-2 h-5 w-5" />
                  Explore Bitcoin Principles
                </Link>
                <Link to="/perspectives" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow hover:bg-secondary/80 h-11 px-8">
                  <Compass className="mr-2 h-5 w-5" />
                  Discover More Perspectives
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default BitcoinVsCrypto; 