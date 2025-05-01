import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen,
  ArrowRight,
  ChevronRight, 
  Network,
  Zap,
  Lock,
  Globe,
  LineChart,
  Clock,
  Home,
  Shield,
  Calculator,
  Ban,
  CheckCircle2,
  Users,
  TrendingUp,
  Landmark,
  UserCog,
  DollarSign,
  Lightbulb,
  BrainCircuit,
  Coins,
  GraduationCap,
  Sparkles
} from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import BitcoinLogoIcon from '../components/BitcoinLogoIcon';

// Learning path/perspective analyzer core data
const knowledgeLevels = [
  {
    id: 'beginner',
    title: 'Beginner',
    description: 'New to Bitcoin or just getting started',
    icon: Sparkles,
    color: 'blue'
  },
  {
    id: 'intermediate',
    title: 'Intermediate',
    description: 'Familiar with basics, looking to deepen understanding',
    icon: BookOpen,
    color: 'amber'
  },
  {
    id: 'advanced',
    title: 'Advanced',
    description: 'Well-versed in Bitcoin, seeking expert knowledge',
    icon: BrainCircuit,
    color: 'orange'
  }
];

const motivations = [
  {
    id: 'investment',
    title: 'Investment',
    description: 'I want to understand Bitcoin as an investment asset',
    icon: TrendingUp,
    color: 'green',
    relatedPerspectives: ['time-travelers-portfolio', 'geopolitical-shield']
  },
  {
    id: 'technology',
    title: 'Technology',
    description: "I'm fascinated by the technological innovation",
    icon: Network,
    color: 'blue',
    relatedPerspectives: ['networked-revolution', 'mathematical-money']
  },
  {
    id: 'economics',
    title: 'Economics',
    description: 'I want to understand the economic implications',
    icon: Landmark,
    color: 'purple',
    relatedPerspectives: ['last-free-market', 'energy-alchemy']
  },
  {
    id: 'sovereignty',
    title: 'Sovereignty',
    description: 'I care about financial freedom and self-sovereignty',
    icon: Lock,
    color: 'red',
    relatedPerspectives: ['unconfiscatable-asset', 'digital-homesteading']
  },
  {
    id: 'social',
    title: 'Social Impact',
    description: "I'm interested in how Bitcoin affects society",
    icon: Globe,
    color: 'emerald',
    relatedPerspectives: ['global-game', 'networked-revolution']
  }
];

const interestAreas = [
  {
    id: 'monetary-policy',
    title: 'Monetary Policy',
    description: 'How Bitcoin functions as money and challenges existing systems',
    icon: DollarSign,
    color: 'amber',
    relatedPerspectives: ['mathematical-money', 'geopolitical-shield']
  },
  {
    id: 'self-custody',
    title: 'Self-Custody',
    description: 'Securing and controlling your own Bitcoin',
    icon: UserCog,
    color: 'indigo',
    relatedPerspectives: ['unconfiscatable-asset', 'digital-homesteading']
  },
  {
    id: 'sustainability',
    title: 'Energy & Sustainability',
    description: "Bitcoin's relationship with energy and environmental considerations",
    icon: Zap,
    color: 'yellow',
    relatedPerspectives: ['energy-alchemy']
  },
  {
    id: 'future-developments',
    title: 'Future Developments',
    description: 'Protocol evolution and emerging innovations',
    icon: Lightbulb,
    color: 'blue',
    relatedPerspectives: ['networked-revolution', 'time-travelers-portfolio']
  },
  {
    id: 'practical-use',
    title: 'Practical Use',
    description: 'Using Bitcoin in everyday situations',
    icon: Coins,
    color: 'orange',
    relatedPerspectives: ['global-game', 'last-free-market']
  }
];

// Map of perspectives to their details
const perspectivesMap = {
  'networked-revolution': {
    title: "Networked Revolution",
    description: "How Bitcoin leverages network effects to create a global monetary transformation",
    path: "/networked-revolution",
    icon: Network,
    color: "blue"
  },
  'energy-alchemy': {
    title: "Energy Alchemy",
    description: "Bitcoin's unique ability to transform excess energy into stored monetary value",
    path: "/energy-alchemy",
    icon: Zap,
    color: "yellow"
  },
  'unconfiscatable-asset': {
    title: "Unconfiscatable Asset",
    description: "Why Bitcoin's resistance to seizure creates a new paradigm for property rights",
    path: "/unconfiscatable-asset",
    icon: Lock,
    color: "purple"
  },
  'global-game': {
    title: "The Global Game",
    description: "Bitcoin as a global, borderless game with equal rules for all participants",
    path: "/global-game",
    icon: Globe,
    color: "green"
  },
  'last-free-market': {
    title: "Last Free Market",
    description: "How Bitcoin's open, permissionless market creates true price discovery",
    path: "/last-free-market",
    icon: LineChart,
    color: "red"
  },
  'time-travelers-portfolio': {
    title: "Time Traveler's Portfolio",
    description: "A speculative journey through the next century of monetary evolution",
    path: "/time-travelers-portfolio",
    icon: Clock,
    color: "amber"
  },
  'digital-homesteading': {
    title: "Digital Homesteading",
    description: "Bitcoin as digital land that early adopters can claim and pass down generations",
    path: "/digital-homesteading",
    icon: Home,
    color: "emerald"
  },
  'geopolitical-shield': {
    title: "Geopolitical Shield",
    description: "How Bitcoin provides protection in the global monetary battlefield",
    path: "/geopolitical-shield",
    icon: Shield,
    color: "blue"
  },
  'mathematical-money': {
    title: "Mathematical Money",
    description: "The elegance of Bitcoin's mathematical foundation and design principles",
    path: "/mathematical-money",
    icon: Calculator,
    color: "indigo"
  }
};

// Learning path data
const learningPaths = {
  'beginner': {
    title: "Beginner Path",
    description: "Start your Bitcoin journey with the fundamentals",
    modules: [
      "What is Money?", 
      "Store of Value", 
      "Bitcoin Fundamentals"
    ],
    path: "/learn/beginner",
    icon: GraduationCap,
    color: "blue"
  },
  'intermediate': {
    title: "Intermediate Path",
    description: "Deepen your knowledge of Bitcoin's technical and economic aspects",
    modules: [
      "Bitcoin Design", 
      "Network Economics", 
      "Self-Custody"
    ],
    path: "/learn/intermediate",
    icon: BookOpen,
    color: "amber"
  },
  'advanced': {
    title: "Advanced Path",
    description: "Master complex topics and cutting-edge Bitcoin concepts",
    modules: [
      "Bitcoin Scripting", 
      "Protocol Development", 
      "Advanced Game Theory"
    ],
    path: "/learn/advanced",
    icon: BrainCircuit,
    color: "orange"
  }
};

// Helper function to get color classes
const getColorClass = (color, type, opacity = "20") => {
  const colorMap = {
    blue: {
      bg: `bg-blue-500/${opacity}`,
      text: "text-blue-500",
      border: `border-blue-500/${opacity}`,
      hover: {
        bg: `hover:bg-blue-500/${parseInt(opacity) + 10}`,
        border: `hover:border-blue-500/${parseInt(opacity) + 20}`
      }
    },
    green: {
      bg: `bg-green-500/${opacity}`,
      text: "text-green-500",
      border: `border-green-500/${opacity}`,
      hover: {
        bg: `hover:bg-green-500/${parseInt(opacity) + 10}`,
        border: `hover:border-green-500/${parseInt(opacity) + 20}`
      }
    },
    red: {
      bg: `bg-red-500/${opacity}`,
      text: "text-red-500",
      border: `border-red-500/${opacity}`,
      hover: {
        bg: `hover:bg-red-500/${parseInt(opacity) + 10}`,
        border: `hover:border-red-500/${parseInt(opacity) + 20}`
      }
    },
    yellow: {
      bg: `bg-yellow-500/${opacity}`,
      text: "text-yellow-500",
      border: `border-yellow-500/${opacity}`,
      hover: {
        bg: `hover:bg-yellow-500/${parseInt(opacity) + 10}`,
        border: `hover:border-yellow-500/${parseInt(opacity) + 20}`
      }
    },
    purple: {
      bg: `bg-purple-500/${opacity}`,
      text: "text-purple-500",
      border: `border-purple-500/${opacity}`,
      hover: {
        bg: `hover:bg-purple-500/${parseInt(opacity) + 10}`,
        border: `hover:border-purple-500/${parseInt(opacity) + 20}`
      }
    },
    indigo: {
      bg: `bg-indigo-500/${opacity}`,
      text: "text-indigo-500",
      border: `border-indigo-500/${opacity}`,
      hover: {
        bg: `hover:bg-indigo-500/${parseInt(opacity) + 10}`,
        border: `hover:border-indigo-500/${parseInt(opacity) + 20}`
      }
    },
    orange: {
      bg: `bg-orange-500/${opacity}`,
      text: "text-orange-500",
      border: `border-orange-500/${opacity}`,
      hover: {
        bg: `hover:bg-orange-500/${parseInt(opacity) + 10}`,
        border: `hover:border-orange-500/${parseInt(opacity) + 20}`
      }
    },
    amber: {
      bg: `bg-amber-500/${opacity}`,
      text: "text-amber-500",
      border: `border-amber-500/${opacity}`,
      hover: {
        bg: `hover:bg-amber-500/${parseInt(opacity) + 10}`,
        border: `hover:border-amber-500/${parseInt(opacity) + 20}`
      }
    },
    emerald: {
      bg: `bg-emerald-500/${opacity}`,
      text: "text-emerald-500",
      border: `border-emerald-500/${opacity}`,
      hover: {
        bg: `hover:bg-emerald-500/${parseInt(opacity) + 10}`,
        border: `hover:border-emerald-500/${parseInt(opacity) + 20}`
      }
    }
  };
  
  return colorMap[color]?.[type] || colorMap.orange[type];
};

// Selection card component
const SelectionCard = ({ item, selected, onClick }) => {
  const bgClass = getColorClass(item.color, 'bg', selected ? '20' : '10');
  const textClass = getColorClass(item.color, 'text');
  const borderClass = getColorClass(item.color, 'border', selected ? '30' : '20');
  const hoverBgClass = getColorClass(item.color, 'hover', 'bg');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <button
        className={`w-full h-full text-left ${borderClass} ${hoverBgClass} border rounded-xl p-5 transition-all duration-300 ${selected ? 'shadow-md ' + bgClass : 'bg-card hover:shadow-sm'}`}
        onClick={() => onClick(item.id)}
      >
        <div className="flex items-start">
          <div className={`p-2 rounded-full ${bgClass} mr-4`}>
            <item.icon className={`h-5 w-5 ${textClass}`} />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg flex items-center">
              {item.title}
              {selected && (
                <CheckCircle2 className="h-5 w-5 ml-2 text-green-500" />
              )}
            </h3>
            <p className="text-muted-foreground mt-1 text-sm">{item.description}</p>
          </div>
        </div>
      </button>
    </motion.div>
  );
};

// Result card component for perspectives
const PerspectiveResultCard = ({ perspectiveId }) => {
  const perspective = perspectivesMap[perspectiveId];
  const bgClass = getColorClass(perspective.color, 'bg', '10');
  const textClass = getColorClass(perspective.color, 'text');
  const borderClass = getColorClass(perspective.color, 'border', '20');
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Link to={perspective.path} className="block h-full">
        <Card className={`${borderClass} hover:shadow-md transition-all h-full`}>
          <CardContent className="p-5 flex flex-col h-full">
            <div className={`p-3 rounded-full ${bgClass} w-fit mb-4`}>
              <perspective.icon className={`h-5 w-5 ${textClass}`} />
            </div>
            
            <h3 className="text-lg font-bold mb-2">{perspective.title}</h3>
            
            <p className="text-muted-foreground text-sm mb-4 flex-grow">
              {perspective.description}
            </p>
            
            <div className={`${textClass} text-sm font-medium flex items-center mt-auto`}>
              <span>Explore this perspective</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

// Learning path result card component
const LearningPathResultCard = ({ pathId }) => {
  const path = learningPaths[pathId];
  const bgClass = getColorClass(path.color, 'bg', '10');
  const textClass = getColorClass(path.color, 'text');
  const borderClass = getColorClass(path.color, 'border', '20');
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="h-full"
    >
      <Card className={`${borderClass} h-full`}>
        <CardContent className="p-5">
          <div className={`p-3 rounded-full ${bgClass} w-fit mb-4`}>
            <path.icon className={`h-5 w-5 ${textClass}`} />
          </div>
          
          <h3 className="text-lg font-bold mb-2">{path.title}</h3>
          
          <p className="text-muted-foreground text-sm mb-4">
            {path.description}
          </p>
          
          <div className="border-t my-4 pt-4">
            <h4 className="text-sm font-medium mb-2">Modules include:</h4>
            <ul className="space-y-1 mb-4">
              {path.modules.map((module, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start">
                  <div className={`${bgClass} rounded-full w-1.5 h-1.5 mt-1.5 mr-2`}></div>
                  {module}
                </li>
              ))}
            </ul>
          </div>
          
          <Link to={path.path}>
            <Button className={`w-full ${bgClass} ${textClass}`}>
              Start Learning Path
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const GetStarted = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedKnowledgeLevel, setSelectedKnowledgeLevel] = useState(null);
  const [selectedMotivation, setSelectedMotivation] = useState(null);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [calculatingResults, setCalculatingResults] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [recommendedPath, setRecommendedPath] = useState(null);
  const [recommendedPerspectives, setRecommendedPerspectives] = useState([]);
  
  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;
  
  // Handle the selection of an interest area
  const handleInterestSelect = (interestId) => {
    setSelectedInterests(prev => {
      if (prev.includes(interestId)) {
        return prev.filter(id => id !== interestId);
      } else {
        return [...prev, interestId];
      }
    });
  };
  
  // Next step handler
  const handleNextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    } else {
      // Calculate results
      setCalculatingResults(true);
      setTimeout(() => {
        calculateResults();
        setCalculatingResults(false);
        setShowResults(true);
      }, 1200); // Add a small delay for visual effect
    }
  };
  
  // Back step handler
  const handleBackStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };
  
  // Calculate personalized recommendations
  const calculateResults = () => {
    // Determine recommended learning path based on knowledge level
    setRecommendedPath(selectedKnowledgeLevel);
    
    // Build a list of perspective recommendations
    const perspectiveScores = {};
    
    // Add perspectives from motivation
    const motivationItem = motivations.find(m => m.id === selectedMotivation);
    if (motivationItem) {
      motivationItem.relatedPerspectives.forEach(p => {
        perspectiveScores[p] = (perspectiveScores[p] || 0) + 2; // Weighted higher
      });
    }
    
    // Add perspectives from interests
    selectedInterests.forEach(interestId => {
      const interestItem = interestAreas.find(i => i.id === interestId);
      if (interestItem) {
        interestItem.relatedPerspectives.forEach(p => {
          perspectiveScores[p] = (perspectiveScores[p] || 0) + 1;
        });
      }
    });
    
    // Sort perspectives by score and take top 3
    const sortedPerspectives = Object.entries(perspectiveScores)
      .sort(([, scoreA], [, scoreB]) => Number(scoreB) - Number(scoreA))
      .map(([id]) => id)
      .slice(0, 3);
    
    setRecommendedPerspectives(sortedPerspectives);
    
    // Log user selections to Netlify
    logUserSelections();
  };
  
  // Log user selections for analytics
  const logUserSelections = async () => {
    try {
      // Get the full text of selections for better readability in logs
      const knowledgeLevelText = knowledgeLevels.find(level => level.id === selectedKnowledgeLevel)?.title || '';
      const motivationText = motivations.find(m => m.id === selectedMotivation)?.title || '';
      const interestsText = selectedInterests
        .map(id => interestAreas.find(area => area.id === id)?.title || '')
        .filter(Boolean)
        .join(', ');
      
      // Create form data for Netlify
      const formData = new FormData();
      formData.append('form-name', 'get-started-log');
      formData.append('knowledgeLevel', knowledgeLevelText);
      formData.append('motivation', motivationText);
      formData.append('interests', interestsText);
      formData.append('timestamp', new Date().toISOString());
      
      // Submit silently to Netlify
      await fetch('/', {
        method: 'POST',
        body: formData,
      });
      
      console.log('User journey logged successfully');
    } catch (error) {
      // Silent fail - don't disrupt user experience if logging fails
      console.error('Error logging user journey:', error);
    }
  };
  
  // Check if user can continue to next step
  const canContinue = () => {
    if (step === 1) return selectedKnowledgeLevel !== null;
    if (step === 2) return selectedMotivation !== null;
    if (step === 3) return selectedInterests.length > 0;
    return false;
  };
  
  // Restart the quiz
  const handleRestart = () => {
    setStep(1);
    setSelectedKnowledgeLevel(null);
    setSelectedMotivation(null);
    setSelectedInterests([]);
    setShowResults(false);
    window.scrollTo(0, 0);
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Header section */}
        <section className="relative py-16 overflow-hidden bg-gradient-to-b from-amber-500/5 to-orange-500/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center z-10 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="mb-4 px-3 py-1 bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 transition-colors">
                  <Sparkles className="mr-1 h-3.5 w-3.5" />
                  <span>Personalized Journey</span>
                </Badge>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Discover Your Bitcoin Path
                </h1>
                
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                  Answer a few questions to receive a personalized Bitcoin learning experience 
                  tailored to your interests, background, and goals.
                </p>
                
                {!showResults && (
                  <div className="max-w-xl mx-auto mb-8">
                    <Progress value={progress} className="h-2 mb-2" />
                    <p className="text-sm text-muted-foreground">Step {step} of {totalSteps}</p>
                  </div>
                )}
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
        
        {/* Main content section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                {/* Knowledge Level Selection */}
                {step === 1 && (
                  <motion.div
                    key="knowledge-level"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-2xl font-bold mb-2">What's your Bitcoin knowledge level?</h2>
                    <p className="text-muted-foreground mb-8">This helps us tailor the learning resources to your current understanding.</p>
                    
                    <div className="grid gap-4 md:grid-cols-3">
                      {knowledgeLevels.map((level) => (
                        <SelectionCard
                          key={level.id}
                          item={level}
                          selected={selectedKnowledgeLevel === level.id}
                          onClick={() => setSelectedKnowledgeLevel(level.id)}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
                
                {/* Primary Motivation */}
                {step === 2 && (
                  <motion.div
                    key="motivation"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-2xl font-bold mb-2">What's your primary motivation for learning about Bitcoin?</h2>
                    <p className="text-muted-foreground mb-8">Understanding your goals helps us suggest the most relevant content.</p>
                    
                    <div className="grid gap-4 md:grid-cols-2">
                      {motivations.map((motivation) => (
                        <SelectionCard
                          key={motivation.id}
                          item={motivation}
                          selected={selectedMotivation === motivation.id}
                          onClick={() => setSelectedMotivation(motivation.id)}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
                
                {/* Interest Areas */}
                {step === 3 && (
                  <motion.div
                    key="interests"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-2xl font-bold mb-2">Select topics you're most interested in</h2>
                    <p className="text-muted-foreground mb-8">Choose one or more areas that you'd like to explore (minimum 1, maximum 3).</p>
                    
                    <div className="grid gap-4 md:grid-cols-2">
                      {interestAreas.map((interest) => (
                        <SelectionCard
                          key={interest.id}
                          item={interest}
                          selected={selectedInterests.includes(interest.id)}
                          onClick={() => {
                            if (selectedInterests.includes(interest.id) || selectedInterests.length < 3) {
                              handleInterestSelect(interest.id);
                            }
                          }}
                        />
                      ))}
                    </div>
                    
                    <div className="mt-2 text-sm text-muted-foreground">
                      {selectedInterests.length} of 3 topics selected
                    </div>
                  </motion.div>
                )}
                
                {/* Calculating Results */}
                {calculatingResults && (
                  <motion.div
                    key="calculating"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="py-16 text-center"
                  >
                    <motion.div
                      animate={{ 
                        rotate: 360,
                        transition: { duration: 2, repeat: Infinity, ease: "linear" }
                      }}
                      className="inline-block mb-6"
                    >
                      <BitcoinLogoIcon className="h-16 w-16 text-orange-500" />
                    </motion.div>
                    
                    <h2 className="text-2xl font-bold mb-4">Analyzing your responses...</h2>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      We're crafting a personalized Bitcoin learning experience just for you.
                    </p>
                  </motion.div>
                )}
                
                {/* Results */}
                {showResults && (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-center mb-12">
                      <motion.div
                        initial={{ scale: 0, rotate: 180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 160, damping: 20 }}
                        className="inline-block mb-6"
                      >
                        <div className="bg-green-500/10 p-4 rounded-full">
                          <CheckCircle2 className="h-12 w-12 text-green-500" />
                        </div>
                      </motion.div>
                      
                      <h2 className="text-3xl font-bold mb-3">Your Bitcoin Journey</h2>
                      <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                        Based on your responses, we've crafted a personalized learning path and highlighted perspectives that will resonate with your interests.
                      </p>
                    </div>
                    
                    {/* Recommended Learning Path */}
                    <div className="mb-12">
                      <h3 className="text-2xl font-bold mb-6">Recommended Learning Path</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <LearningPathResultCard pathId={recommendedPath} />
                        
                        <div className="flex flex-col justify-center p-6">
                          <h4 className="text-xl font-bold mb-4">Why this path?</h4>
                          <p className="text-muted-foreground mb-4">
                            This structured learning journey is designed for your {selectedKnowledgeLevel} knowledge level. It provides a comprehensive understanding of Bitcoin with content that matches your learning needs.
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Your learning path will systematically build your knowledge from foundational concepts to more complex topics.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <Separator className="my-8" />
                    
                    {/* Recommended Perspectives */}
                    <div>
                      <h3 className="text-2xl font-bold mb-6">Recommended Perspectives</h3>
                      <p className="text-muted-foreground mb-8">
                        These perspectives align with your interests in {selectedInterests.map(i => interestAreas.find(area => area.id === i)?.title).join(', ')} and your motivation around {motivations.find(m => m.id === selectedMotivation)?.title}.
                      </p>
                      
                      <div className="grid md:grid-cols-3 gap-6">
                        {recommendedPerspectives.map((perspectiveId, index) => (
                          <PerspectiveResultCard 
                            key={perspectiveId} 
                            perspectiveId={perspectiveId} 
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-12 text-center">
                      <Button
                        variant="outline"
                        className="border-orange-500/20 text-orange-500 hover:bg-orange-500/10 mr-4"
                        onClick={handleRestart}
                      >
                        Restart Journey
                      </Button>
                      
                      <Link to="/perspectives">
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                          See All Perspectives
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Navigation Buttons */}
              {!showResults && !calculatingResults && (
                <div className="mt-12 flex justify-between">
                  {step > 1 ? (
                    <Button 
                      variant="outline" 
                      onClick={handleBackStep}
                    >
                      Back
                    </Button>
                  ) : (
                    <div></div> // Empty div for flexbox spacing
                  )}
                  
                  <Button 
                    onClick={handleNextStep}
                    disabled={!canContinue()}
                    className={canContinue() ? "bg-orange-500 hover:bg-orange-600 text-white" : ""}
                  >
                    {step === totalSteps ? "See Results" : "Continue"}
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GetStarted; 