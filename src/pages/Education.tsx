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
  GraduationCap, 
  Users, 
  Monitor, 
  BookOpen, 
  Calendar, 
  ArrowRight, 
  Check, 
  Brain, 
  BarChart4,
  PieChart,
  UserCheck,
  MessageSquare,
  Lightbulb,
  CircleUser,
  Building,
  Clock
} from 'lucide-react';
import BitcoinLogoIcon from '../components/BitcoinLogoIcon';

// Education program offerings
const educationPrograms = [
  {
    title: "Individual Learning",
    description: "Personalized Bitcoin education programs tailored to your knowledge level, goals, and learning style.",
    icon: CircleUser,
    color: "orange",
    features: [
      "One-on-one instruction sessions",
      "Customized curriculum",
      "Self-paced learning",
      "Hands-on practice exercises",
      "Follow-up Q&A support"
    ]
  },
  {
    title: "Corporate Training",
    description: "Comprehensive Bitcoin education for teams and organizations looking to build institutional knowledge.",
    icon: Building,
    color: "blue",
    features: [
      "Department-specific modules",
      "Executive briefings",
      "Technical deep dives",
      "Practical workshops",
      "Custom training materials"
    ]
  },
  {
    title: "Structured Courses",
    description: "Expert-designed Bitcoin courses with a clear progression from fundamentals to advanced concepts.",
    icon: BookOpen,
    color: "green",
    features: [
      "Beginner to advanced tracks",
      "Modular curriculum",
      "Weekly live sessions",
      "Recorded lessons access",
      "Certificate of completion"
    ]
  },
  {
    title: "Workshops & Events",
    description: "Intensive, focused learning experiences that dive deep into specific Bitcoin topics and use cases.",
    icon: Calendar,
    color: "purple",
    features: [
      "In-person and virtual formats",
      "Interactive exercises",
      "Expert-led discussions",
      "Networking opportunities",
      "Take-home resources"
    ]
  }
];

// Teaching approach principles
const teachingApproach = [
  {
    title: "First Principles",
    description: "We build understanding from the ground up, examining Bitcoin's fundamental components rather than relying on analogies or comparisons.",
    icon: Brain
  },
  {
    title: "Practical Application",
    description: "Every concept is paired with real-world usage, ensuring you can apply your knowledge in meaningful ways.",
    icon: Check
  },
  {
    title: "Visual Learning",
    description: "Complex Bitcoin concepts are made accessible through custom visualizations, animations, and interactive models.",
    icon: PieChart
  },
  {
    title: "Multi-disciplinary Context",
    description: "We examine Bitcoin through economic, technical, historical, and sociological lenses for a comprehensive understanding.",
    icon: BarChart4
  },
  {
    title: "Progressive Complexity",
    description: "Our education starts with accessible fundamentals and gradually introduces more advanced concepts as foundations are solidified.",
    icon: UserCheck
  }
];

// Curriculum areas
const curriculumTopics = [
  {
    title: "Bitcoin Fundamentals",
    description: "Essential concepts for understanding Bitcoin's purpose, function, and value proposition.",
    icon: GraduationCap,
    topics: [
      "Monetary history and principles",
      "Bitcoin's origin and purpose",
      "Blockchain technology basics",
      "Transaction mechanics",
      "Public and private keys"
    ]
  },
  {
    title: "Technical Understanding",
    description: "Deeper technical knowledge about how Bitcoin functions as a network and protocol.",
    icon: Monitor,
    topics: [
      "Network architecture",
      "Mining and consensus",
      "Script language",
      "Layer 2 solutions",
      "Node operation"
    ]
  },
  {
    title: "Economic Implications",
    description: "Bitcoin's role in the broader economic landscape and individual financial strategy.",
    icon: BarChart4,
    topics: [
      "Sound money principles",
      "Stock-to-flow model",
      "Global monetary policy",
      "Inflation and debasement",
      "Portfolio theory"
    ]
  },
  {
    title: "Practical Skills",
    description: "Hands-on skills for effectively using, securing, and leveraging Bitcoin in real-world contexts.",
    icon: UserCheck,
    topics: [
      "Wallet types and usage",
      "Security best practices",
      "Cold storage implementation",
      "Inheritance planning",
      "Transaction privacy"
    ]
  }
];

// Testimonials
const testimonials = [
  {
    quote: "The educational program transformed our executive team's understanding of Bitcoin. They tailored content to our financial services background, making complex concepts immediately relevant to our business.",
    author: "Jennifer K.",
    position: "Director of Innovation, Global Banking Group"
  },
  {
    quote: "My private tutoring sessions took me from confused beginner to confident Bitcoin user. The patient, clear explanations and hands-on exercises made all the difference in my journey.",
    author: "Michael T.",
    position: "Individual Student"
  },
  {
    quote: "The workshop our engineering team attended was exceptionally well-structured, with technical depth that challenged even our most experienced developers while remaining accessible to newcomers.",
    author: "Robert A.",
    position: "CTO, Technology Startup"
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

const Education = () => {
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
                  <GraduationCap className="mr-1 h-3.5 w-3.5" />
                  <span>Educational Services</span>
                </Badge>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Bitcoin Education Programs
                </h1>
                
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                  Comprehensive Bitcoin education designed to build genuine understanding. 
                  Our programs range from introductory concepts to advanced technical knowledge, 
                  all tailored to your specific goals and background.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white">
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Inquire About Programs
                    </Button>
                  </Link>
                  <Link to="/get-started">
                    <Button variant="outline" className="border-orange-500/20 text-orange-500 hover:bg-orange-500/10">
                      <Lightbulb className="mr-2 h-5 w-5" />
                      Take Our Learning Path Quiz
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
        
        {/* Programs Section */}
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
                Our Educational Offerings
              </h2>
              <p className="text-lg text-muted-foreground">
                From individual learning to corporate training, our Bitcoin education 
                programs are designed to meet your specific needs and goals.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {educationPrograms.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`h-full border ${getColorClass(program.color, 'border')} hover:shadow-md transition-all`}>
                    <CardContent className="p-6">
                      <div className={`p-3 rounded-full ${getColorClass(program.color, 'bg')} w-fit mb-4`}>
                        <program.icon className={`h-6 w-6 ${getColorClass(program.color, 'text')}`} />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                      
                      <p className="text-muted-foreground mb-6">
                        {program.description}
                      </p>
                      
                      <div className="space-y-2">
                        {program.features.map((feature, i) => (
                          <div key={i} className="flex items-start">
                            <div className={`p-1 rounded-full ${getColorClass(program.color, 'bg')} mr-3 mt-0.5`}>
                              <Check className={`h-3 w-3 ${getColorClass(program.color, 'text')}`} />
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
                          className={`w-full ${getColorClass(program.color, 'border')} ${getColorClass(program.color, 'text')} ${getColorClass(program.color, 'hover.bg')}`}
                        >
                          Learn About {program.title}
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
        
        {/* Teaching Approach Section */}
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
                Our Teaching Approach
              </h2>
              <p className="text-lg text-muted-foreground">
                We've developed a distinctive educational methodology that makes Bitcoin's 
                complexity approachable without sacrificing depth or accuracy.
              </p>
            </motion.div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {teachingApproach.map((principle, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex"
                  >
                    <div className="p-3 rounded-full bg-orange-500/10 h-fit mr-4">
                      <principle.icon className="h-6 w-6 text-orange-500" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
                      <p className="text-muted-foreground">{principle.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Curriculum Topics Section */}
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
                Curriculum Topics
              </h2>
              <p className="text-lg text-muted-foreground">
                Our comprehensive curriculum covers all aspects of Bitcoin, from foundational 
                concepts to advanced technical understanding.
              </p>
            </motion.div>
            
            <Tabs defaultValue="fundamentals" className="max-w-5xl mx-auto">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="fundamentals">Fundamentals</TabsTrigger>
                <TabsTrigger value="technical">Technical</TabsTrigger>
                <TabsTrigger value="economic">Economic</TabsTrigger>
                <TabsTrigger value="practical">Practical</TabsTrigger>
              </TabsList>
              
              {curriculumTopics.map((area, index) => {
                // Extract the correct value for each tab based on its position
                let tabValue;
                if (area.title.includes("Fundamentals")) {
                  tabValue = "fundamentals";
                } else if (area.title.includes("Technical")) {
                  tabValue = "technical";
                } else if (area.title.includes("Economic")) {
                  tabValue = "economic";
                } else if (area.title.includes("Practical")) {
                  tabValue = "practical";
                }
                
                return (
                <TabsContent key={index} value={tabValue}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-card border border-orange-500/10 rounded-lg p-8"
                  >
                    <div className="flex items-start mb-6">
                      <div className="p-3 rounded-full bg-orange-500/10 mr-4">
                        <area.icon className="h-6 w-6 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{area.title}</h3>
                        <p className="text-muted-foreground">{area.description}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-4">Topic Coverage:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {area.topics.map((topic, i) => (
                          <div key={i} className="flex items-start">
                            <div className="p-1 rounded-full bg-orange-500/10 mr-3 mt-1">
                              <Check className="h-3 w-3 text-orange-500" />
                            </div>
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
                );
              })}
            </Tabs>
          </div>
        </section>
        
        {/* Format Options Section */}
        <section className="py-20 bg-gradient-to-b from-amber-950/5 to-orange-950/5 border-y border-amber-500/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Learning Format Options
              </h2>
              <p className="text-lg text-muted-foreground">
                We offer a variety of educational formats to accommodate different learning 
                styles, schedules, and objectives.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <Card className="flex-1 border-orange-500/20 hover:border-orange-500/30 hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <div className="p-3 rounded-full bg-orange-500/10 w-fit mb-4">
                      <Users className="h-6 w-6 text-orange-500" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">Live Instruction</h3>
                    
                    <div className="space-y-3">
                      <p className="text-muted-foreground">
                        Real-time learning with our expert educators, allowing for immediate 
                        questions, discussions, and personalized guidance.
                      </p>
                      
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2 text-orange-500" />
                        <span>60-90 minute sessions</span>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="p-1 rounded-full bg-orange-500/10 mr-3 mt-0.5">
                          <Check className="h-3 w-3 text-orange-500" />
                        </div>
                        <span className="text-sm">In-person or virtual options</span>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="p-1 rounded-full bg-orange-500/10 mr-3 mt-0.5">
                          <Check className="h-3 w-3 text-orange-500" />
                        </div>
                        <span className="text-sm">Interactive exercises</span>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="p-1 rounded-full bg-orange-500/10 mr-3 mt-0.5">
                          <Check className="h-3 w-3 text-orange-500" />
                        </div>
                        <span className="text-sm">Q&A opportunities</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <Card className="flex-1 border-orange-500/20 hover:border-orange-500/30 hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <div className="p-3 rounded-full bg-orange-500/10 w-fit mb-4">
                      <Monitor className="h-6 w-6 text-orange-500" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">Self-Paced Learning</h3>
                    
                    <div className="space-y-3">
                      <p className="text-muted-foreground">
                        Flexible, on-demand educational content that allows you to learn 
                        at your own pace and on your own schedule.
                      </p>
                      
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2 text-orange-500" />
                        <span>Access anytime, anywhere</span>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="p-1 rounded-full bg-orange-500/10 mr-3 mt-0.5">
                          <Check className="h-3 w-3 text-orange-500" />
                        </div>
                        <span className="text-sm">HD video lessons</span>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="p-1 rounded-full bg-orange-500/10 mr-3 mt-0.5">
                          <Check className="h-3 w-3 text-orange-500" />
                        </div>
                        <span className="text-sm">Downloadable resources</span>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="p-1 rounded-full bg-orange-500/10 mr-3 mt-0.5">
                          <Check className="h-3 w-3 text-orange-500" />
                        </div>
                        <span className="text-sm">Progress tracking</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <Card className="flex-1 border-orange-500/20 hover:border-orange-500/30 hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <div className="p-3 rounded-full bg-orange-500/10 w-fit mb-4">
                      <BookOpen className="h-6 w-6 text-orange-500" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">Hybrid Programs</h3>
                    
                    <div className="space-y-3">
                      <p className="text-muted-foreground">
                        Combining self-paced content with scheduled live sessions for the 
                        benefits of both flexibility and interactive guidance.
                      </p>
                      
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2 text-orange-500" />
                        <span>Mixed format, optimal flexibility</span>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="p-1 rounded-full bg-orange-500/10 mr-3 mt-0.5">
                          <Check className="h-3 w-3 text-orange-500" />
                        </div>
                        <span className="text-sm">Weekly live sessions</span>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="p-1 rounded-full bg-orange-500/10 mr-3 mt-0.5">
                          <Check className="h-3 w-3 text-orange-500" />
                        </div>
                        <span className="text-sm">On-demand content access</span>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="p-1 rounded-full bg-orange-500/10 mr-3 mt-0.5">
                          <Check className="h-3 w-3 text-orange-500" />
                        </div>
                        <span className="text-sm">Community discussion</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
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
                Student Success Stories
              </h2>
              <p className="text-lg text-muted-foreground">
                Hear from those who have transformed their understanding of Bitcoin through 
                our educational programs.
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
                  <Card className="h-full border-orange-500/10 bg-card/50">
                    <CardContent className="p-6">
                      <div className="mb-6">
                        <BitcoinLogoIcon className="h-10 w-10 text-orange-500/30" />
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
        <section className="py-20 bg-gradient-to-b from-orange-950/5 to-amber-950/5 border-y border-amber-500/10">
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
                  Begin Your Bitcoin Learning Journey
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Whether you're a complete beginner or looking to deepen your Bitcoin knowledge, 
                  our educational programs provide the clarity and depth you need to navigate 
                  this revolutionary technology with confidence.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/contact">
                    <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8">
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Contact Us
                    </Button>
                  </Link>
                  
                  <Link to="/learn">
                    <Button variant="outline" className="border-orange-500/20 text-orange-500 hover:bg-orange-500/10 px-8">
                      <BookOpen className="mr-2 h-5 w-5" />
                      Explore Free Resources
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

export default Education; 