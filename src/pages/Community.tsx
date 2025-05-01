import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  AlertCircle, 
  CheckCircle, 
  Mail, 
  Users, 
  Calendar, 
  BookOpen, 
  MessageSquare, 
  Star, 
  Sparkles,
  Zap,
  Globe,
  Eye,
  Network,
  LightbulbIcon,
  Link as LinkIcon,
  BarChart
} from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import BitcoinLogoIcon from '../components/BitcoinLogoIcon';

// Animated feature card
const FeatureCard = ({ icon, title, description, delay = 0 }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  delay?: number 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`p-5 bg-gradient-to-br ${isHovered ? 'from-amber-500/10 to-amber-500/5' : 'from-amber-500/5 to-transparent'} rounded-xl transition-all duration-300 border border-amber-500/10 hover:border-amber-500/30 hover:shadow-md`}
    >
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </motion.div>
  );
};

// Benefit item with animation
const BenefitItem = ({ icon, title, description, index }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  index: number
}) => (
  <motion.div 
    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="flex"
  >
    <div className="bg-amber-500/10 p-2 rounded-full h-10 w-10 flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
      {icon}
    </div>
    <div>
      <h4 className="font-medium text-lg mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </motion.div>
);

// Community Journey Section with Tabs
const CommunityJourneyTabs = () => {
  const [activeTab, setActiveTab] = useState("learn");
  
  return (
    <Tabs 
      defaultValue="learn" 
      className="w-full"
      onValueChange={(value) => setActiveTab(value)}
    >
      <div className="relative mb-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-amber-500/10"></div>
        </div>
        
        <div className="relative flex justify-center">
          <div className="bg-background px-2">
            <TabsList className="bg-amber-950/5 border border-amber-500/20">
              <TabsTrigger 
                value="learn" 
                className="data-[state=active]:bg-amber-500/10 data-[state=active]:text-amber-600 data-[state=active]:shadow-none"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Learn
              </TabsTrigger>
              <TabsTrigger 
                value="contribute" 
                className="data-[state=active]:bg-amber-500/10 data-[state=active]:text-amber-600 data-[state=active]:shadow-none"
              >
                <LightbulbIcon className="mr-2 h-4 w-4" />
                Contribute
              </TabsTrigger>
              <TabsTrigger 
                value="connect" 
                className="data-[state=active]:bg-amber-500/10 data-[state=active]:text-amber-600 data-[state=active]:shadow-none"
              >
                <LinkIcon className="mr-2 h-4 w-4" />
                Connect
              </TabsTrigger>
            </TabsList>
          </div>
        </div>
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <TabsContent value="learn" className="p-6 bg-card rounded-lg border border-amber-500/20 shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Deepen Your Understanding</h3>
            <p className="mb-6 text-muted-foreground">As a founding community member, you'll receive:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BenefitItem 
                icon={<BookOpen className="h-5 w-5 text-amber-500" />}
                title="Educational Resources" 
                description="Early access to our courses, guides, and exclusive learning materials"
                index={0}
              />
              <BenefitItem 
                icon={<Users className="h-5 w-5 text-amber-500" />}
                title="Expert Webinars" 
                description="Join live sessions with thought leaders in Bitcoin and monetary history"
                index={1}
              />
              <BenefitItem 
                icon={<Star className="h-5 w-5 text-amber-500" />}
                title="Curated Content" 
                description="Personalized recommendations based on your interests and knowledge level"
                index={2}
              />
              <BenefitItem 
                icon={<Eye className="h-5 w-5 text-amber-500" />}
                title="Behind-the-Scenes" 
                description="See how our educational content is created and shaped"
                index={3}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="contribute" className="p-6 bg-card rounded-lg border border-amber-500/20 shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Help Build the Manifesto</h3>
            <p className="mb-6 text-muted-foreground">Your input will help shape this project:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BenefitItem 
                icon={<MessageSquare className="h-5 w-5 text-amber-500" />}
                title="Provide Feedback" 
                description="Review drafts and educational materials before they're published"
                index={0}
              />
              <BenefitItem 
                icon={<LightbulbIcon className="h-5 w-5 text-amber-500" />}
                title="Suggest Topics" 
                description="Help us identify important questions and subjects to address"
                index={1}
              />
              <BenefitItem 
                icon={<BarChart className="h-5 w-5 text-amber-500" />}
                title="Share Insights" 
                description="Contribute your own experiences and perspectives on Bitcoin"
                index={2}
              />
              <BenefitItem 
                icon={<Zap className="h-5 w-5 text-amber-500" />}
                title="Vote on Priorities" 
                description="Help determine which features and content we develop next"
                index={3}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="connect" className="p-6 bg-card rounded-lg border border-amber-500/20 shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Join a Growing Network</h3>
            <p className="mb-6 text-muted-foreground">Connect with others passionate about Bitcoin as a store of value:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BenefitItem 
                icon={<Network className="h-5 w-5 text-amber-500" />}
                title="Community Calls" 
                description="Participate in our regular virtual meetups and discussions"
                index={0}
              />
              <BenefitItem 
                icon={<Calendar className="h-5 w-5 text-amber-500" />}
                title="Exclusive Events" 
                description="Early invitations to both virtual and in-person gatherings"
                index={1}
              />
              <BenefitItem 
                icon={<Globe className="h-5 w-5 text-amber-500" />}
                title="Global Connections" 
                description="Connect with like-minded individuals from around the world"
                index={2}
              />
              <BenefitItem 
                icon={<Users className="h-5 w-5 text-amber-500" />}
                title="Founding Team Access" 
                description="Direct communication channels with the creators and core team"
                index={3}
              />
            </div>
          </TabsContent>
        </motion.div>
      </AnimatePresence>
    </Tabs>
  );
};

const CommunityPage = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [interests, setInterests] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // For parallax effect
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  // Scroll to form reference
  const formRef = useRef<HTMLDivElement>(null);
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create form data for Netlify
      const formData = new FormData();
      formData.append('form-name', 'community');
      formData.append('name', name);
      formData.append('email', email);
      formData.append('interests', interests);
      
      // Submit to Netlify
      await fetch('/', {
        method: 'POST',
        body: formData,
      });
      
      // Show success toast
      toast({
        title: "You're in!",
        description: "Thank you for joining our growing community.",
        variant: "default",
      });
      
      // Update UI to show success state
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Show error toast
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero section with parallax */}
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
        
        {/* Animated Bitcoin network nodes background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            style={{ y }}
            className="w-full h-full relative"
          >
            <svg viewBox="0 0 1000 1000" className="absolute top-0 left-0 w-full h-full opacity-5">
              {/* Connected nodes as a network */}
              <line x1="200" y1="200" x2="400" y2="300" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              <line x1="400" y1="300" x2="600" y2="250" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              <line x1="600" y1="250" x2="800" y2="350" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              <line x1="800" y1="350" x2="900" y2="200" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              
              <line x1="200" y1="500" x2="400" y2="450" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              <line x1="400" y1="450" x2="600" y2="250" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              <line x1="400" y1="450" x2="600" y2="550" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              <line x1="600" y1="550" x2="800" y2="600" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              
              <line x1="200" y1="800" x2="400" y2="750" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              <line x1="400" y1="750" x2="600" y2="700" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              <line x1="600" y1="700" x2="600" y2="550" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              <line x1="600" y1="700" x2="800" y2="800" stroke="#F7931A" strokeWidth="0.5" strokeOpacity="0.6" />
              
              {/* Network nodes */}
              <circle cx="200" cy="200" r="4" fill="#F7931A" />
              <circle cx="400" cy="300" r="4" fill="#F7931A" />
              <circle cx="600" cy="250" r="6" fill="#F7931A" />
              <circle cx="800" cy="350" r="4" fill="#F7931A" />
              <circle cx="900" cy="200" r="4" fill="#F7931A" />
              
              <circle cx="200" cy="500" r="4" fill="#F7931A" />
              <circle cx="400" cy="450" r="5" fill="#F7931A" />
              <circle cx="600" cy="550" r="6" fill="#F7931A" />
              <circle cx="800" cy="600" r="4" fill="#F7931A" />
              
              <circle cx="200" cy="800" r="4" fill="#F7931A" />
              <circle cx="400" cy="750" r="4" fill="#F7931A" />
              <circle cx="600" cy="700" r="5" fill="#F7931A" />
              <circle cx="800" cy="800" r="4" fill="#F7931A" />
            </svg>
          </motion.div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 px-3 py-1 bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 transition-colors">
              <Sparkles className="mr-1 h-3.5 w-3.5" />
              <span>Founding Members</span>
            </Badge>
            
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center justify-center opacity-5">
                <BitcoinLogoIcon className="h-80 w-80 text-amber-500" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground relative">
                Join Our Community
              </h1>
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8"
            >
              Be part of something special from the beginning. Help shape the future of Bitcoin's narrative as the premier digital store of value.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button 
                onClick={scrollToForm}
                size="lg" 
                className="bg-amber-500 hover:bg-amber-600 text-white"
              >
                <Users className="mr-2 h-5 w-5" />
                Join the Founding Circle
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
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
      
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Features section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-16"
          >
            <div className="text-center mb-12">
              <Badge className="mb-4 px-3 py-1 bg-amber-500 text-white hover:bg-amber-600 transition-colors">
                <Star className="mr-1 h-3.5 w-3.5" />
                <span>Community Benefits</span>
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join Our Community?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Connect with like-minded individuals passionate about preserving wealth through Bitcoin, the premier digital store of value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard 
                icon={<div className="bg-amber-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-amber-500" />
                </div>}
                title="Early Access to Education"
                description="Be the first to access our educational resources, courses, and exclusive content before everyone else."
                delay={0.1}
              />
              <FeatureCard 
                icon={<div className="bg-amber-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-amber-500" />
                </div>}
                title="Direct Communication"
                description="Get direct access to our founding team, ask questions, and provide feedback that shapes our direction."
                delay={0.2}
              />
              <FeatureCard 
                icon={<div className="bg-amber-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center">
                  <Users className="h-6 w-6 text-amber-500" />
                </div>}
                title="Connect with Like-Minds"
                description="Join a growing network of individuals who share your interest in Bitcoin as a store of value."
                delay={0.3}
                />
              </div>
          </motion.section>
          
          {/* Journey and form section */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-3 space-y-12"
            >
              <div>
                <h2 className="text-3xl font-bold mb-8">Your Community Journey</h2>
                <CommunityJourneyTabs />
              </div>
            </motion.div>
            
            <motion.div 
              ref={formRef}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="sticky top-28">
                <Card className="border-2 border-amber-500/20 shadow-lg overflow-hidden bg-gradient-to-br from-amber-500/5 to-transparent">
                  <CardHeader className="bg-amber-500/10 border-b border-amber-500/20">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl">
                        Join Our Founding Circle
                      </CardTitle>
                      <div className="bg-amber-500/20 p-2 rounded-full">
                        <Users className="h-5 w-5 text-amber-500" />
                      </div>
                    </div>
                    <CardDescription>
                      Be among the first to join our community and help us build something amazing together.
                    </CardDescription>
                </CardHeader>

                  <CardContent className="pt-6">
                    {!submitted ? (
                      <form 
                        onSubmit={handleSubmit} 
                        className="space-y-4"
                        name="community"
                        method="POST"
                        data-netlify="true"
                        netlify-honeypot="bot-field"
                      >
                        <input type="hidden" name="form-name" value="community" />
                        <div className="hidden">
                          <label>
                            Don't fill this out if you're human: <input name="bot-field" />
                          </label>
                        </div>
                        
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-1">
                            Your Name
                          </label>
                          <Input 
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="How should we call you?"
                            required
                            className="border-amber-500/20 focus:border-amber-500 focus:ring-amber-500/20"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-1">
                            Email Address
                          </label>
                          <Input 
                            id="email"
                            name="email"
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Your best email"
                            required
                            className="border-amber-500/20 focus:border-amber-500 focus:ring-amber-500/20"
                          />
                          <p className="mt-1 text-xs text-muted-foreground">
                            We'll never share your email. No spam, just updates.
                          </p>
                        </div>
                        
                        <div>
                          <label htmlFor="interests" className="block text-sm font-medium mb-1">
                            What interests you about Bitcoin as a Store of Value? (Optional)
                          </label>
                          <Textarea 
                            id="interests"
                            name="interests"
                            value={interests}
                            onChange={(e) => setInterests(e.target.value)}
                            placeholder="Share your thoughts, interests, or questions..."
                            rows={4}
                            className="border-amber-500/20 focus:border-amber-500 focus:ring-amber-500/20"
                          />
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-amber-500 hover:bg-amber-600 text-white mt-4"
                          size="lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-current border-t-transparent"></span>
                              Submitting...
                            </>
                          ) : (
                            <>
                              <Mail className="mr-2 h-4 w-4" /> 
                              Join the Community
                            </>
                          )}
                    </Button>
                  </form>
                    ) : (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-8"
                      >
                        <div className="bg-green-500/10 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                          <CheckCircle className="h-10 w-10 text-green-500" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Thank You for Joining!</h3>
                        <p className="text-muted-foreground mb-4">
                          We're excited to have you as one of our founding community members.
                        </p>
                        <p className="text-sm">
                          Keep an eye on your inbox for updates, exclusive content, and invitations to our first community events.
                        </p>
                      </motion.div>
                    )}
                </CardContent>
              </Card>
              </div>
            </motion.div>
          </div>
          
          {/* Call to action */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="py-16 mt-16 rounded-2xl overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-amber-500/10 to-amber-500/5"></div>
            <div className="absolute right-0 bottom-0 opacity-10">
              <BitcoinLogoIcon className="h-64 w-64 text-amber-500" />
            </div>
            
            <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
              <Badge className="mb-6 px-3 py-1 bg-amber-500 text-white hover:bg-amber-600 transition-colors">
                <AlertCircle className="mr-1 h-3.5 w-3.5" />
                <span>Early Stages</span>
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">We're Just Getting Started</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our community is in its early stages, but with your help, it will grow into a vibrant hub for those interested in Bitcoin as the ultimate store of value. Every community starts somewhere—join us at the beginning of this journey.
              </p>
              
              <Button 
                onClick={scrollToForm}
                size="lg" 
                className="bg-amber-500 hover:bg-amber-600 text-white"
              >
                <Users className="mr-2 h-5 w-5" />
                Join the Founding Circle
              </Button>
            </div>
          </motion.section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CommunityPage; 