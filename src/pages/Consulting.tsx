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
  Users, 
  Building2, 
  GraduationCap, 
  Shield, 
  ArrowRight, 
  Check, 
  Zap, 
  Briefcase,
  BookOpen,
  LineChart,
  MessageSquare
} from 'lucide-react';
import BitcoinLogoIcon from '../components/BitcoinLogoIcon';

// Consulting service offerings
const consultingServices = [
  {
    title: "Individual Strategy",
    description: "Personalized Bitcoin investment and security strategy tailored to your financial goals and risk tolerance.",
    icon: Users,
    color: "orange",
    features: [
      "One-on-one consultation sessions",
      "Personalized investment strategy",
      "Self-custody guidance",
      "Security best practices",
      "Regular strategy reviews"
    ]
  },
  {
    title: "Corporate Integration",
    description: "Comprehensive solutions for businesses looking to integrate Bitcoin into their treasury, operations, or offerings.",
    icon: Building2,
    color: "blue",
    features: [
      "Treasury management strategy",
      "Bitcoin payment solutions",
      "Corporate custody solutions",
      "Staff education programs",
      "Regulatory compliance guidance"
    ]
  },
  {
    title: "Educational Programs",
    description: "Custom Bitcoin education for teams, organizations, and institutions seeking to build internal knowledge.",
    icon: GraduationCap,
    color: "green",
    features: [
      "Custom curriculum development",
      "Executive briefings",
      "Technical workshops",
      "Economic implications seminars",
      "Ongoing learning resources"
    ]
  },
  {
    title: "Security Audits",
    description: "Comprehensive review of your Bitcoin security practices and custody solutions with actionable recommendations.",
    icon: Shield,
    color: "red",
    features: [
      "Custody setup evaluation",
      "Security protocol assessment",
      "Vulnerability identification",
      "Recovery strategy planning",
      "Staff security training"
    ]
  }
];

// Consulting process steps
const processSteps = [
  {
    title: "Discovery",
    description: "We begin with a thorough assessment of your current understanding, goals, and specific needs regarding Bitcoin.",
    icon: Lightbulb
  },
  {
    title: "Strategy Development",
    description: "Our experts craft a customized approach tailored to your unique situation and objectives.",
    icon: LineChart
  },
  {
    title: "Implementation",
    description: "We guide you through executing the strategy with hands-on support at every step.",
    icon: Briefcase
  },
  {
    title: "Education",
    description: "Knowledge transfer is built into our process, ensuring you understand the 'why' behind each recommendation.",
    icon: BookOpen
  },
  {
    title: "Ongoing Support",
    description: "Our relationship continues with regular check-ins and strategy adjustments as needed.",
    icon: MessageSquare
  }
];

// Team expertise areas
const expertiseAreas = [
  {
    title: "Technical Expertise",
    description: "Our consultants have deep technical knowledge of the Bitcoin protocol, network, and development ecosystem.",
    icon: Zap,
    credentials: [
      "Bitcoin Core contributors",
      "Node operators and miners",
      "Lightning Network specialists",
      "Hardware & software wallet experts"
    ]
  },
  {
    title: "Financial Acumen",
    description: "Our team includes financial professionals who understand Bitcoin in the context of broader markets and portfolios.",
    icon: LineChart,
    credentials: [
      "Certified financial planners",
      "Investment strategists",
      "Treasury management experience",
      "Macro-economic analysts"
    ]
  },
  {
    title: "Security Background",
    description: "Security is paramount in Bitcoin. Our consultants bring extensive experience in digital security and best practices.",
    icon: Shield,
    credentials: [
      "Information security professionals",
      "Cold storage specialists",
      "Multi-signature implementation experts",
      "Key management advisors"
    ]
  },
  {
    title: "Educational Experience",
    description: "Our educators are skilled at making complex Bitcoin concepts accessible to audiences of all knowledge levels.",
    icon: GraduationCap,
    credentials: [
      "Course development specialists",
      "Public speakers and authors",
      "Workshop facilitators",
      "Technical translators"
    ]
  }
];

// Testimonials
const testimonials = [
  {
    quote: "The team's Bitcoin expertise transformed our approach to treasury management. Their guidance was invaluable as we navigated our first significant Bitcoin acquisition.",
    author: "Sarah J.",
    position: "CFO, Tech Innovations Inc."
  },
  {
    quote: "I've gone from Bitcoin curious to confidently self-sovereign. The personalized consulting sessions were exactly what I needed to secure my financial future.",
    author: "Michael R.",
    position: "Individual Client"
  },
  {
    quote: "The educational program developed for our team struck the perfect balance between technical depth and accessibility. Our entire organization is now better positioned in the Bitcoin economy.",
    author: "David L.",
    position: "Director of Innovation, Financial Services"
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
    green: {
      bg: "bg-green-500/10",
      text: "text-green-500",
      border: "border-green-500/20",
      hover: {
        bg: "hover:bg-green-500/20",
        border: "hover:border-green-500/30"
      }
    },
    red: {
      bg: "bg-red-500/10",
      text: "text-red-500",
      border: "border-red-500/20",
      hover: {
        bg: "hover:bg-red-500/20",
        border: "hover:border-red-500/30"
      }
    }
  };
  
  return colorMap[color]?.[type] || colorMap.orange[type];
};

const Consulting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-b from-amber-500/5 to-orange-500/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center z-10 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="mb-4 px-3 py-1 bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 transition-colors">
                  <Briefcase className="mr-1 h-3.5 w-3.5" />
                  <span>Professional Services</span>
                </Badge>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Bitcoin Consulting Services
                </h1>
                
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                  Expert guidance to navigate the Bitcoin ecosystem with confidence. 
                  Whether you're an individual, business, or institution, our consulting 
                  services provide the clarity and strategy you need.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white">
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Schedule a Consultation
                    </Button>
                  </Link>
                  <Link to="/get-started">
                    <Button variant="outline" className="border-orange-500/20 text-orange-500 hover:bg-orange-500/10">
                      <Lightbulb className="mr-2 h-5 w-5" />
                      Learn About Bitcoin
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
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
                Our Consulting Offerings
              </h2>
              <p className="text-lg text-muted-foreground">
                Tailored solutions to meet your specific Bitcoin needs, whether you're an individual, 
                business, or educational institution.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {consultingServices.map((service, index) => (
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
                          Inquire About {service.title}
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
        
        {/* Process Section */}
        <section className="py-20 bg-gradient-to-b from-orange-950/5 to-amber-950/5 border-y border-amber-500/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Consulting Process
              </h2>
              <p className="text-lg text-muted-foreground">
                A structured yet flexible approach designed to deliver maximum value
                while respecting your unique context and goals.
              </p>
            </motion.div>
            
            <div className="max-w-5xl mx-auto">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-start mb-12 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                >
                  <div className={`hidden md:flex items-center justify-center w-24 h-24 rounded-full bg-orange-500/10 shrink-0 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <span className="text-3xl font-bold text-orange-500">{index + 1}</span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center md:hidden mb-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500/10 mr-4">
                        <span className="text-lg font-bold text-orange-500">{index + 1}</span>
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    
                    <div className="bg-card border border-orange-500/10 rounded-lg p-6">
                      <h3 className="text-xl font-bold mb-2 hidden md:block">{step.title}</h3>
                      <div className="flex items-start mb-4">
                        <div className="p-2 rounded-full bg-orange-500/10 mr-4 mt-1">
                          <step.icon className="h-5 w-5 text-orange-500" />
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
        
        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-orange-500/5 to-amber-500/5 border border-orange-500/20 rounded-xl p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Start Your Bitcoin Journey?
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Whether you're taking your first steps with Bitcoin or looking to optimize your 
                  existing strategy, our team is ready to help you navigate with confidence.
                </p>
                
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-6 h-auto">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Schedule Your Consultation
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Consulting; 