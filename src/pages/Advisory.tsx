import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Lightbulb,
  GlobeIcon, 
  BarChart3, 
  TrendingUp, 
  Shield, 
  ArrowRight, 
  Check, 
  Brain,
  BookOpen,
  LineChart,
  Layers,
  MessageSquare,
  Lock,
  Building2,
  Network,
  CombineIcon,
  Workflow,
  PanelTopOpen,
  Rocket,
  ChevronsUp,
  CircleDollarSign,
  Landmark,
  Scale,
  Users
} from 'lucide-react';
import BitcoinLogoIcon from '../components/BitcoinLogoIcon';

// Advisory service offerings
const advisoryServices = [
  {
    title: "Strategic Planning",
    description: "Long-term Bitcoin strategy development aligned with your organization's vision, mission, and financial goals.",
    icon: TrendingUp,
    color: "blue",
    features: [
      "Bitcoin adoption roadmap",
      "Integration with existing systems",
      "Risk assessment and mitigation",
      "Competitive advantage analysis",
      "Performance metrics development"
    ]
  },
  {
    title: "Treasury Management",
    description: "Expert guidance on integrating Bitcoin into corporate treasury strategies to preserve and grow capital.",
    icon: CircleDollarSign,
    color: "amber",
    features: [
      "Treasury allocation modeling",
      "Dollar-cost averaging strategies",
      "Volatility management",
      "Accounting best practices",
      "Board and shareholder communication"
    ]
  },
  {
    title: "Regulatory Navigation",
    description: "Stay compliant while maximizing Bitcoin opportunities with our regulatory advisory services.",
    icon: Scale,
    color: "green",
    features: [
      "Regulatory landscape analysis",
      "Compliance framework development",
      "Policy and procedure creation",
      "Audit preparation guidance",
      "Cross-border considerations"
    ]
  },
  {
    title: "Institutional Implementation",
    description: "End-to-end guidance for institutions looking to incorporate Bitcoin into their financial infrastructure.",
    icon: Landmark,
    color: "purple",
    features: [
      "Custody solution evaluation",
      "Insurance and security protocols",
      "Liquidity management",
      "Operational workflow design",
      "Staff training and governance"
    ]
  }
];

// Advisory methodology steps
const methodologySteps = [
  {
    title: "Strategic Assessment",
    description: "We begin with a comprehensive analysis of your organization's current position, goals, and the specific challenges and opportunities Bitcoin presents in your context.",
    icon: Lightbulb
  },
  {
    title: "Horizon Mapping",
    description: "Developing scenarios and projections that account for various Bitcoin adoption trajectories and regulatory developments.",
    icon: GlobeIcon
  },
  {
    title: "Solution Architecture",
    description: "Designing a tailored Bitcoin strategy that aligns with your organization's risk profile, timeline, and strategic objectives.",
    icon: Layers
  },
  {
    title: "Implementation Planning",
    description: "Creating detailed roadmaps with specific actions, responsibilities, resources, and timelines for executing your Bitcoin strategy.",
    icon: Workflow
  },
  {
    title: "Continual Optimization",
    description: "Establishing feedback mechanisms and review processes to ensure your Bitcoin strategy evolves with the market and your organizational needs.",
    icon: ChevronsUp
  }
];

// Expertise areas
const expertiseAreas = [
  {
    title: "Macro Economic Analysis",
    description: "Our advisors contextualize Bitcoin within global economic trends, providing insights on monetary policy implications and long-term value propositions.",
    icon: BarChart3,
    credentials: [
      "Former central banking professionals",
      "Macro economic researchers",
      "International monetary system experts",
      "Capital market specialists"
    ]
  },
  {
    title: "Corporate Strategy",
    description: "Strategic expertise to help organizations integrate Bitcoin in ways that enhance their competitive positioning and long-term resilience.",
    icon: Building2,
    credentials: [
      "Corporate strategy consultants",
      "Treasury management specialists",
      "Board-level advisors",
      "Executive leadership experience"
    ]
  },
  {
    title: "Regulatory Expertise",
    description: "Navigate the evolving regulatory landscape with guidance from experts who understand both Bitcoin and financial compliance requirements.",
    icon: Shield,
    credentials: [
      "Financial regulatory specialists",
      "Legal compliance professionals",
      "Policy development advisors",
      "Cross-border regulatory experts"
    ]
  },
  {
    title: "Network Economics",
    description: "Deep understanding of Bitcoin's network effects, game theory implications, and how these dynamics affect strategic decision-making.",
    icon: Network,
    credentials: [
      "Network economics researchers",
      "Game theory specialists",
      "Adoption curve forecasters",
      "Digital ecosystem analysts"
    ]
  }
];

// Testimonials
const testimonials = [
  {
    quote: "Their strategic guidance helped us develop a Bitcoin treasury strategy that aligned perfectly with our long-term financial goals while navigating regulatory considerations we hadn't even anticipated.",
    author: "Caroline M.",
    position: "CFO, Technology Corporation"
  },
  {
    quote: "The advisory team provided unparalleled insights into how Bitcoin could be integrated into our institutional investment framework, addressing every stakeholder concern with data-driven analysis.",
    author: "Jonathan P.",
    position: "Investment Director, Asset Management Firm"
  },
  {
    quote: "Their regulatory navigation advisory proved invaluable as we expanded our Bitcoin operations across multiple jurisdictions, ensuring compliance while maximizing our strategic opportunities.",
    author: "Eliza T.",
    position: "General Counsel, Financial Services"
  }
];

// Helper function to get color classes
const getColorClass = (color: string, type: string) => {
  const colorMap = {
    orange: {
      bg: "bg-orange-500/10",
      text: "text-orange-500",
      border: "border-orange-500/20",
      hover: {
        bg: "hover:bg-orange-500/20",
        border: "hover:border-orange-500/30"
      }
    },
    blue: {
      bg: "bg-blue-500/10",
      text: "text-blue-500",
      border: "border-blue-500/20",
      hover: {
        bg: "hover:bg-blue-500/20",
        border: "hover:border-blue-500/30"
      }
    },
    amber: {
      bg: "bg-amber-500/10",
      text: "text-amber-500",
      border: "border-amber-500/20",
      hover: {
        bg: "hover:bg-amber-500/20",
        border: "hover:border-amber-500/30"
      }
    },
    green: {
      bg: "bg-green-500/10",
      text: "text-green-500",
      border: "border-green-500/20",
      hover: {
        bg: "hover:bg-green-500/20",
        border: "hover:border-green-500/30"
      }
    },
    purple: {
      bg: "bg-purple-500/10",
      text: "text-purple-500",
      border: "border-purple-500/20",
      hover: {
        bg: "hover:bg-purple-500/20",
        border: "hover:border-purple-500/30"
      }
    }
  };
  
  return colorMap[color]?.[type] || colorMap.orange[type];
};

const Advisory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-b from-blue-500/5 to-amber-500/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center z-10 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="mb-4 px-3 py-1 bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-colors">
                  <Lightbulb className="mr-1 h-3.5 w-3.5" />
                  <span>Strategic Services</span>
                </Badge>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Bitcoin Strategic Advisory
                </h1>
                
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                  Navigate the future of finance with confidence through our expert Bitcoin advisory services.
                  We help institutions and organizations develop and implement transformative Bitcoin strategies.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button className="bg-gradient-to-r from-blue-500 to-amber-500 hover:from-blue-600 hover:to-amber-600 text-white">
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Request Advisory Services
                    </Button>
                  </Link>
                  <Link to="/services/consulting">
                    <Button variant="outline" className="border-blue-500/20 text-blue-500 hover:bg-blue-500/10">
                      <Users className="mr-2 h-5 w-5" />
                      Explore Consulting Options
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Background decoration - hexagon pattern for a more strategic/professional feel */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="hexagons" width="20" height="35" patternUnits="userSpaceOnUse">
                  <path d="M10 17.32l-10 0 5 -8.66 10 0 -5 8.66z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M15 8.66l-10 0 5 -8.66 10 0 -5 8.66z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M5 8.66l-10 0 5 -8.66 10 0 -5 8.66z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M10 17.32l-10 0 5 8.66 10 0 -5 -8.66z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M15 25.98l-10 0 5 8.66 10 0 -5 -8.66z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M5 25.98l-10 0 5 8.66 10 0 -5 -8.66z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hexagons)" />
            </svg>
          </div>
          
          {/* Floating blockchain-like elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 opacity-5">
              <BitcoinLogoIcon className="h-96 w-96 text-blue-500" />
            </div>
            <div className="absolute -bottom-20 -left-20 opacity-5">
              <BitcoinLogoIcon className="h-80 w-80 text-amber-500" />
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Advisory Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Strategic guidance for organizations navigating the complexities of Bitcoin integration 
                and leveraging its opportunities across various business functions.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {advisoryServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`h-full border ${getColorClass(service.color, 'border')} hover:shadow-md transition-all`}>
                    <CardContent className="p-6">
                      <div className={`p-3 rounded-full ${getColorClass(service.color, 'bg')} w-fit mb-4`}>
                        <service.icon className={`h-6 w-6 ${getColorClass(service.color, 'text')}`} />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      
                      <p className="text-muted-foreground mb-6">
                        {service.description}
                      </p>
                      
                      <div className="space-y-2">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-start">
                            <div className={`p-1 rounded-full ${getColorClass(service.color, 'bg')} mr-3 mt-0.5`}>
                              <Check className={`h-3 w-3 ${getColorClass(service.color, 'text')}`} />
                            </div>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Link to="/contact" className="w-full">
                        <Button 
                          variant="outline" 
                          className={`w-full ${getColorClass(service.color, 'border')} ${getColorClass(service.color, 'text')} ${getColorClass(service.color, 'hover.bg')}`}
                        >
                          Learn More About {service.title}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Methodology Section with Visual Timeline */}
        <section className="py-20 bg-gradient-to-b from-blue-950/5 to-amber-950/5 border-y border-amber-500/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Advisory Methodology
              </h2>
              <p className="text-lg text-muted-foreground">
                A proven approach that combines deep Bitcoin expertise with strategic business acumen
                to deliver transformative results for your organization.
              </p>
            </motion.div>
            
            <div className="max-w-5xl mx-auto">
              {methodologySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-start mb-12 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                >
                  <div className={`hidden md:flex items-center justify-center w-24 h-24 rounded-full bg-blue-500/10 shrink-0 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <span className="text-3xl font-bold text-blue-500">{index + 1}</span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center md:hidden mb-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/10 mr-4">
                        <span className="text-lg font-bold text-blue-500">{index + 1}</span>
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    
                    <div className="bg-card border border-blue-500/10 rounded-lg p-6">
                      <h3 className="text-xl font-bold mb-2 hidden md:block">{step.title}</h3>
                      <div className="flex items-start mb-4">
                        <div className="p-2 rounded-full bg-blue-500/10 mr-4 mt-1">
                          <step.icon className="h-5 w-5 text-blue-500" />
                        </div>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Expertise Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Advisory Expertise
              </h2>
              <p className="text-lg text-muted-foreground">
                Our team combines deep Bitcoin knowledge with diverse professional backgrounds
                to deliver comprehensive strategic guidance.
              </p>
            </motion.div>
            
            <Tabs defaultValue="macro" className="max-w-5xl mx-auto">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="macro">Macro Economics</TabsTrigger>
                <TabsTrigger value="corporate">Corporate Strategy</TabsTrigger>
                <TabsTrigger value="regulatory">Regulatory</TabsTrigger>
                <TabsTrigger value="network">Network Economics</TabsTrigger>
              </TabsList>
              
              {expertiseAreas.map((area, index) => (
                <TabsContent key={index} value={area.title.toLowerCase().split(' ')[0]}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-card border border-blue-500/10 rounded-lg p-8"
                  >
                    <div className="flex items-start mb-6">
                      <div className="p-3 rounded-full bg-blue-500/10 mr-4">
                        <area.icon className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{area.title}</h3>
                        <p className="text-muted-foreground">{area.description}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-4">Advisory Team Includes:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {area.credentials.map((credential, i) => (
                          <div key={i} className="flex items-start">
                            <div className="p-1 rounded-full bg-blue-500/10 mr-3 mt-1">
                              <Check className="h-3 w-3 text-blue-500" />
                            </div>
                            <span>{credential}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        {/* Case Study Highlight Section */}
        <section className="py-20 bg-gradient-to-br from-background to-blue-950/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <Badge className="mb-4 px-3 py-1 bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 transition-colors">
                <Rocket className="mr-1 h-3.5 w-3.5" />
                <span>Success Story</span>
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Strategic Transformation
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                See how our advisory services helped a forward-thinking organization
                implement a Bitcoin strategy that created lasting competitive advantage.
              </p>
            </motion.div>
            
            <div className="max-w-5xl mx-auto bg-card border border-amber-500/10 rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-10">
                  <h3 className="text-2xl font-bold mb-4">Global Financial Services Firm</h3>
                  
                  <div className="space-y-6 text-muted-foreground">
                    <p>
                      When a leading financial services firm needed to develop a comprehensive Bitcoin strategy 
                      that addressed both client demand and internal treasury considerations, they turned to our 
                      advisory team.
                    </p>
                    
                    <div className="flex items-start">
                      <div className="p-1 rounded-full bg-amber-500/10 mr-3 mt-1">
                        <Check className="h-3 w-3 text-amber-500" />
                      </div>
                      <span>Created a phased treasury adoption strategy</span>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="p-1 rounded-full bg-amber-500/10 mr-3 mt-1">
                        <Check className="h-3 w-3 text-amber-500" />
                      </div>
                      <span>Developed Bitcoin product offerings for clients</span>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="p-1 rounded-full bg-amber-500/10 mr-3 mt-1">
                        <Check className="h-3 w-3 text-amber-500" />
                      </div>
                      <span>Implemented cross-functional education program</span>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="p-1 rounded-full bg-amber-500/10 mr-3 mt-1">
                        <Check className="h-3 w-3 text-amber-500" />
                      </div>
                      <span>Structured a regulatory engagement strategy</span>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Link to="/case-studies">
                      <Button 
                        variant="outline" 
                        className="border-amber-500/20 text-amber-500 hover:bg-amber-500/10"
                      >
                        View All Case Studies
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-500/10 to-amber-500/10 p-8 md:p-10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-amber-500 mb-2">230%</div>
                    <p className="text-lg text-muted-foreground">
                      Increase in client engagement after implementing our strategic recommendations
                    </p>
                    
                    <div className="grid grid-cols-2 gap-6 mt-10">
                      <div>
                        <div className="text-3xl font-bold text-blue-500 mb-1">18 Months</div>
                        <p className="text-sm text-muted-foreground">
                          Time to full Bitcoin integration
                        </p>
                      </div>
                      
                      <div>
                        <div className="text-3xl font-bold text-blue-500 mb-1">5x</div>
                        <p className="text-sm text-muted-foreground">
                          Return on advisory investment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-b from-amber-950/5 to-blue-950/5 border-y border-amber-500/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Client Success Stories
              </h2>
              <p className="text-lg text-muted-foreground">
                Our clients range from innovative startups to established global institutions, 
                all leveraging our Bitcoin advisory expertise to achieve their strategic objectives.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-blue-500/10 bg-card/50">
                    <CardContent className="p-6">
                      <div className="mb-6">
                        <BitcoinLogoIcon className="h-10 w-10 text-blue-500/30" />
                      </div>
                      
                      <p className="italic text-muted-foreground mb-6">"{testimonial.quote}"</p>
                      
                      <div>
                        <p className="font-medium">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-500/5 to-amber-500/5 border border-blue-500/20 rounded-xl p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Transform Your Bitcoin Strategy?
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Whether you're making your first move into Bitcoin or looking to optimize your existing 
                  approach, our advisory team is ready to guide your organization to success.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button className="bg-gradient-to-r from-blue-500 to-amber-500 hover:from-blue-600 hover:to-amber-600 text-white px-8 py-6 h-auto">
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Schedule a Strategic Consultation
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

export default Advisory; 