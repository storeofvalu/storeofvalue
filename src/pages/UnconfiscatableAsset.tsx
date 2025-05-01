import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BitcoinLogoIcon from '../components/BitcoinLogoIcon';
import { 
  ShieldAlert, 
  Truck, 
  Building, 
  GlobeLock, 
  Landmark, 
  UserX, 
  KeyRound, 
  Fingerprint,
  ArrowRight,
  ChevronDown,
  Brain,
  Globe,
  Banknote,
  Lock,
  Eye,
  Bitcoin,
  LockKeyhole,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';

const UnconfiscatableAsset = () => {
  const [activeStory, setActiveStory] = useState(0);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const confiscationEvents = [
    {
      year: "2008",
      title: "Venezuelan Hyperinflation",
      location: "Venezuela",
      description: "Government policy led to inflation of over 1,000,000%, effectively confiscating citizens' savings through devaluation.",
      icon: <Landmark className="h-6 w-6 text-red-500" />
    },
    {
      year: "2013",
      title: "Cyprus Bank Bail-in",
      location: "Cyprus",
      description: "Nearly 50% of uninsured deposits over €100,000 were seized from account holders to recapitalize banks.",
      icon: <Building className="h-6 w-6 text-red-500" />
    },
    {
      year: "2016",
      title: "Indian Demonetization",
      location: "India",
      description: "The government invalidated 86% of currency in circulation overnight, forcing citizens to deposit cash or lose their savings.",
      icon: <Banknote className="h-6 w-6 text-red-500" />
    },
    {
      year: "2019",
      title: "Hong Kong Asset Seizures",
      location: "Hong Kong",
      description: "Assets of pro-democracy activists were frozen under national security laws.",
      icon: <UserX className="h-6 w-6 text-red-500" />
    },
    {
      year: "2022",
      title: "Canadian Trucker Protests",
      location: "Canada",
      description: "The government froze bank accounts of protesters and supporters without due process, affecting over 200 accounts worth millions of dollars.",
      icon: <Truck className="h-6 w-6 text-red-500" />
    }
  ];

  const stories = [
    {
      name: "Maria",
      country: "Venezuela",
      story: "When hyperinflation destroyed her family's savings, Maria converted her remaining bolivars to Bitcoin. She memorized her seed phrase and crossed the border to Colombia with nothing but the clothes on her back and 12 words in her mind. She rebuilt her life using the Bitcoin she had secured."
    },
    {
      name: "Ahmed",
      country: "Syria",
      story: "As civil war engulfed his country, Ahmed's family home was destroyed and their bank accounts frozen. Before fleeing, he converted his emergency fund to Bitcoin. At each refugee camp, he could access small portions of his funds using only his memorized seed phrase, eventually financing their journey to safety in Germany."
    },
    {
      name: "Jacob",
      country: "Canada",
      story: "A small business owner who donated $50 to the Trucker Protest, Jacob was shocked when his bank account was frozen without warning or due process. After regaining access weeks later, he moved a portion of his savings to Bitcoin—a lesson in how quickly financial access can be revoked even in democratic countries."
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
            <Badge className="mb-6 px-3 py-1 bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors">
              <ShieldAlert className="mr-1 h-3.5 w-3.5" />
              <span>Financial Freedom</span>
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              The Unconfiscatable Asset
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium mb-8 text-muted-foreground">
              How Bitcoin protects wealth from seizure and enables a new form of
              financial sovereignty across borders
            </h2>
          </motion.div>
          
          {/* Dramatic Visualization */}
          <div className="mt-16 w-full max-w-3xl mx-auto">
            <Card className="border-red-500/20 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-red-950/30 to-background p-8 md:p-10">
                <div className="text-center mb-10">
                  <GlobeLock className="h-16 w-16 text-red-500 mx-auto mb-5" />
                  <h3 className="text-2xl font-bold">When Access is Denied</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Traditional Assets */}
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-red-500/10 rounded-full p-2.5 mr-4 flex-shrink-0">
                        <Building className="h-5 w-5 text-red-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base mb-1">Bank Accounts</h4>
                        <p className="text-sm text-muted-foreground">Frozen with a keystroke</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-red-500/10 rounded-full p-2.5 mr-4 flex-shrink-0">
                        <Banknote className="h-5 w-5 text-red-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base mb-1">Cash</h4>
                        <p className="text-sm text-muted-foreground">Devalued through inflation</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-red-500/10 rounded-full p-2.5 mr-4 flex-shrink-0">
                        <Landmark className="h-5 w-5 text-red-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base mb-1">Property</h4>
                        <p className="text-sm text-muted-foreground">Seized through decree</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bitcoin */}
                  <div className="md:border-l md:pl-8 border-red-500/20">
                    <div className="text-center mb-3">
                      <div className="inline-flex items-center justify-center bg-amber-500/10 p-2 rounded-full mb-2">
                        <BitcoinLogoIcon className="h-5 w-5 text-amber-500" />
                      </div>
                      <h4 className="font-semibold text-base">Bitcoin</h4>
                      <p className="text-xs text-muted-foreground">Protected by mathematics and cryptography</p>
                    </div>
                    
                    <div className="space-y-2.5">
                      <div className="flex items-start">
                        <div className="bg-amber-500/10 rounded-full p-1 mr-2 flex-shrink-0">
                          <Brain className="h-3.5 w-3.5 text-amber-500" />
                        </div>
                        <span className="text-xs leading-tight">Exists in memory through seed phrases</span>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-amber-500/10 rounded-full p-1 mr-2 flex-shrink-0">
                          <Globe className="h-3.5 w-3.5 text-amber-500" />
                        </div>
                        <span className="text-xs leading-tight">Accessible anywhere in the world</span>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-amber-500/10 rounded-full p-1 mr-2 flex-shrink-0">
                          <Lock className="h-3.5 w-3.5 text-amber-500" />
                        </div>
                        <span className="text-xs leading-tight">Protected by unbreakable cryptography</span>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-amber-500/10 rounded-full p-1 mr-2 flex-shrink-0">
                          <KeyRound className="h-3.5 w-3.5 text-amber-500" />
                        </div>
                        <span className="text-xs leading-tight">Cannot be confiscated without consent</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="mt-12">
            <div className="inline-block animate-bounce">
              <ChevronDown className="h-8 w-8 text-red-500" />
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-full h-full">
              <svg className="w-full h-full opacity-[0.02]" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </div>
        </section>
        
        {/* Canada Trucker Protests Feature Section */}
        <section className="py-24 bg-card" ref={targetRef}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                style={{ opacity, scale }}
                className="text-center mb-16"
              >
                <Badge className="mb-4 px-3 py-1 bg-red-500 text-white hover:bg-red-600 transition-colors">
                  <Truck className="mr-1 h-3.5 w-3.5" />
                  <span>Case Study</span>
                </Badge>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Canadian Trucker Protests</h2>
                <p className="text-lg text-muted-foreground">
                  When confiscation came to one of the world's most stable democracies.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-8 bg-background rounded-lg overflow-hidden border shadow-md">
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold mb-4">What Happened</h3>
                  <div className="space-y-4 text-sm leading-relaxed">
                    <p>
                      In early 2022, the "Freedom Convoy" protests in Canada demonstrated how quickly financial access can be revoked without due process—even in established democracies.
                    </p>
                    <p>
                      On February 14, 2022, the Canadian government invoked the Emergencies Act for the first time in history, granting itself extraordinary powers to freeze bank accounts and financial assets without court orders.
                    </p>
                    <p>
                      Over 200 bank accounts containing millions of dollars were frozen. This included not only the accounts of protesters but also those who had made even small donations to support them.
                    </p>
                    <p>
                      Many individuals discovered their accounts frozen without warning, leaving them unable to pay for basic necessities or operate their businesses.
                    </p>
                  </div>
                </div>
                
                <div className="bg-red-500/5 p-6 md:p-8 border-t md:border-t-0 md:border-l border-border">
                  <h3 className="text-xl font-bold mb-4">The Aftermath</h3>
                  <div className="space-y-4 text-sm leading-relaxed">
                    <p>
                      Even after the Emergencies Act was lifted, many Canadians had their worldview permanently changed. They realized that financial access they had taken for granted could be revoked without warning.
                    </p>
                    <p>
                      <span className="font-semibold">The lesson was clear:</span> When authorities decide your money doesn't belong to you anymore, traditional financial systems offer little protection.
                    </p>
                    <p>
                      In the months following, Bitcoin adoption among Canadians increased significantly as people sought an alternative system where their assets could not be arbitrarily frozen.
                    </p>
                    <div className="bg-red-500/10 p-4 rounded-md border border-red-500/20 mt-6">
                      <p className="italic text-sm">
                        "The state must declare the child to be the most precious treasure of the people. As long as the government is perceived as working for the benefit of the children, the people will happily endure almost any curtailment of liberty and almost any deprivation."
                      </p>
                      <p className="text-xs text-right mt-2">— Adolf Hitler, Mein Kampf</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Timeline of Confiscation Events */}
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">A History of Confiscation</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Throughout history and across the globe, people have had their assets seized by authorities. 
                  These events aren't isolated to authoritarian regimes—they occur in democracies too.
                </p>
              </motion.div>
              
              <div className="relative">
                <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-red-500/20 z-0 transform md:translate-x-0 translate-x-4" aria-hidden="true"></div>
                
                <div className="relative z-10">
                  {confiscationEvents.map((event, index) => (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      key={index}
                      className={`flex flex-col md:flex-row md:items-center mb-12 ${
                        index % 2 === 0 ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      <div 
                        className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} 
                        flex md:block pl-10 md:pl-0`}
                      >
                        <div className="bg-card rounded-lg p-6 border shadow-sm">
                          <div className="flex items-start">
                            {event.icon}
                            <div className="ml-4">
                              <div className="font-mono text-sm text-muted-foreground mb-1">{event.year}</div>
                              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                              <div className="flex items-center mb-3">
                                <Globe className="h-4 w-4 text-muted-foreground mr-1" />
                                <span className="text-sm text-muted-foreground">{event.location}</span>
                              </div>
                              <p className="text-sm">{event.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute left-0 md:left-1/2 transform md:translate-x-0 translate-x-4 flex items-center justify-center">
                        <div className="h-8 w-8 rounded-full bg-red-500 border-4 border-background flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-background"></div>
                        </div>
                      </div>
                      
                      <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} hidden md:block`}></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Real Stories Section */}
        <section className="py-24 bg-red-500/5 border-y border-red-500/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Real Stories, Real People</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Behind the headlines are real individuals who found sovereignty through Bitcoin when traditional systems failed them.
                </p>
              </motion.div>
              
              <Tabs defaultValue={stories[0].name.toLowerCase()} className="w-full">
                <TabsList className="grid grid-cols-3 mb-8">
                  {stories.map((story, index) => (
                    <TabsTrigger
                      key={index}
                      value={story.name.toLowerCase()}
                      onClick={() => setActiveStory(index)}
                      className="data-[state=active]:bg-red-500 data-[state=active]:text-white"
                    >
                      {story.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {stories.map((story, index) => (
                  <TabsContent
                    key={index}
                    value={story.name.toLowerCase()}
                    className="mt-0"
                  >
                    <Card className="border-red-500/20">
                      <CardContent className="pt-6">
                        <div className="flex items-start mb-6">
                          <div className="h-12 w-12 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mr-4">
                            <UserX className="h-6 w-6 text-red-500" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{story.name}'s Story</h3>
                            <Badge className="mt-1 bg-background">
                              <Globe className="mr-1 h-3 w-3" />
                              {story.country}
                            </Badge>
                          </div>
                        </div>
                        
                        <p className="text-lg mb-6 leading-relaxed">
                          "{story.story}"
                        </p>
                        
                        <div className="bg-background p-4 rounded-md border text-sm">
                          <p className="font-semibold mb-2">The Outcome:</p>
                          <div className="space-y-2">
                            <div className="flex items-start">
                              <div className="bg-amber-500/20 text-amber-700 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">✓</div>
                              <span>Protected wealth from confiscation</span>
                            </div>
                            <div className="flex items-start">
                              <div className="bg-amber-500/20 text-amber-700 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">✓</div>
                              <span>Maintained financial access during crisis</span>
                            </div>
                            <div className="flex items-start">
                              <div className="bg-amber-500/20 text-amber-700 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">✓</div>
                              <span>Transported value across borders without detection</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">How Bitcoin Enables The Uncensorable</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  For the first time in history, humans can store value in a form that exists purely in their minds,
                  cannot be detected physically, and can be transported across any border.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card p-6 rounded-lg border shadow-sm">
                  <div className="h-12 w-12 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 mb-6">
                    <Brain className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">The Brain Wallet</h3>
                  <div className="space-y-4 text-sm leading-relaxed">
                    <p>
                      Bitcoin exists as digital information secured by cryptography. The keys to access your Bitcoin 
                      are generated from a "seed phrase" — typically 12 or 24 common English words.
                    </p>
                    <p>
                      These words, committed to memory, become a "brain wallet." With these words, you can:
                    </p>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Cross any border without physical assets</li>
                      <li>Reconstruct your wallet in any country</li>
                      <li>Access your funds from anywhere with internet</li>
                    </ul>
                    <p className="bg-red-500/5 p-3 border border-red-500/10 rounded-md">
                      <span className="font-semibold">Unlike physical assets or bank accounts:</span> No authority can detect your Bitcoin if it exists only in your memory.
                    </p>
                  </div>
                </div>
                
                <div className="bg-card p-6 rounded-lg border shadow-sm">
                  <div className="h-12 w-12 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 mb-6">
                    <KeyRound className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Cryptographic Protection</h3>
                  <div className="space-y-4 text-sm leading-relaxed">
                    <p>
                      Bitcoin's security comes from public-key cryptography — mathematical functions that are 
                      practically impossible to reverse-engineer.
                    </p>
                    <p>
                      Your Bitcoin is protected by private keys that:
                    </p>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Cannot be guessed even with all computing power on Earth</li>
                      <li>Don't rely on any central authority or institution</li>
                      <li>Can't be confiscated without your seed phrase</li>
                    </ul>
                    <div className="bg-background p-4 rounded-md border text-center">
                      <p className="text-xs text-muted-foreground mb-2">Common methods of asset confiscation:</p>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div className="p-2 border rounded-md">
                          <LockKeyhole className="h-4 w-4 mx-auto mb-1" />
                          <span>Force</span>
                        </div>
                        <div className="p-2 border rounded-md">
                          <Eye className="h-4 w-4 mx-auto mb-1" />
                          <span>Surveillance</span>
                        </div>
                        <div className="p-2 border rounded-md">
                          <Fingerprint className="h-4 w-4 mx-auto mb-1" />
                          <span>Identity</span>
                        </div>
                      </div>
                      <p className="text-xs mt-2">Bitcoin can be structured to resist all three</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Final Call to Action */}
        <section className="py-24 bg-red-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <ShieldAlert className="h-12 w-12 text-red-500 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6">When The Unthinkable Happens</h2>
                <p className="text-lg text-muted-foreground mb-10">
                  In a world of increasing uncertainty, Bitcoin offers something unprecedented: 
                  value that cannot be seized, frozen, or confiscated without your consent.
                </p>
                
                <div className="bg-card rounded-lg p-6 md:p-10 border shadow-md mb-10">
                  <h3 className="text-xl font-bold mb-4">The Three Principles of Unconfiscatability</h3>
                  <div className="grid md:grid-cols-3 gap-6 text-left">
                    <div className="space-y-2">
                      <div className="flex items-center text-red-500 mb-2">
                        <div className="h-8 w-8 bg-red-500/10 rounded-full flex items-center justify-center mr-2">1</div>
                        <h4 className="font-bold">Self-Custody</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">Hold your own keys. Never rely on third-party custodians that can be pressured by authorities.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-red-500 mb-2">
                        <div className="h-8 w-8 bg-red-500/10 rounded-full flex items-center justify-center mr-2">2</div>
                        <h4 className="font-bold">Privacy</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">What others don't know exists cannot be targeted for confiscation. Privacy is essential for security.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-red-500 mb-2">
                        <div className="h-8 w-8 bg-red-500/10 rounded-full flex items-center justify-center mr-2">3</div>
                        <h4 className="font-bold">Redundancy</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">Create multiple recovery paths. Memorize your seed phrase and have secure backups in different locations.</p>
                    </div>
                  </div>
                </div>
                
                <Button
                  asChild
                  size="lg"
                  className="bg-red-500 hover:bg-red-600 text-white font-medium"
                >
                  <Link to="/learn/beginner">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Learn How To Protect Your Wealth
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default UnconfiscatableAsset; 