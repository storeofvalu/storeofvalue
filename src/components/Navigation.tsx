import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  Zap, 
  Search, 
  ChevronDown, 
  BookOpen, 
  Lightbulb, 
  Users, 
  HelpCircle, 
  FileText, 
  Home, 
  Settings, 
  GraduationCap, 
  Library, 
  CircleHelpIcon,
  PanelRightIcon,
  ArrowRight,
  Ban,
  Clock,
  Blocks,
  Compass,
  Calendar,
  MessageSquare,
  Github,
  Calculator,
  LineChart,
  BookText,
  Activity
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import BitcoinLogoIcon from './BitcoinLogoIcon';

// Define types for our navigation structure
interface NavItem {
  name: string;
  path: string;
  description?: string;
  icon?: React.ReactNode;
  color?: string;
}

interface NavSection {
  name: string;
  icon: any;
  path?: string;
  items: NavItem[];
  featured: {
    title: string;
    description: string;
    image: string;
  };
}

// Navigation structure data
const navigationStructure: NavSection[] = [
  {
    name: "Learn",
    icon: BookOpen,
    items: [
      {
        name: "Courses",
        description: "Structured learning paths from beginner to advanced",
        path: "/learn",
        icon: <GraduationCap className="h-5 w-5" />,
        color: "blue",
      },
      {
        name: "Principles",
        description: "Core tenets of Bitcoin's value proposition",
        path: "/principles",
        icon: <Blocks className="h-5 w-5" />,
      },
      {
        name: "Resources",
        description: "Curated learning materials and guides",
        path: "/resources",
        icon: <Lightbulb className="h-5 w-5" />,
      },
      {
        name: "Perspectives",
        description: "Different ways to understand Bitcoin",
        path: "/perspectives",
        icon: <Compass className="h-5 w-5" />,
      },
      {
        name: "Glossary",
        description: "Bitcoin terminology explained",
        path: "/glossary",
        icon: <BookText className="h-5 w-5" />,
      },
      {
        name: "Misconceptions",
        description: "Common myths about Bitcoin debunked",
        path: "/misconceptions",
        icon: <Ban className="h-5 w-5" />,
        color: "red",
      },
    ],
    featured: {
      title: "Start Your Bitcoin Journey",
      description: "Discover the fundamentals and advanced concepts of Bitcoin",
      image: "/images/learn-featured.jpg"
    }
  },
  {
    name: "Services",
    icon: MessageSquare,
    items: [
      {
        name: "Consulting",
        description: "Expert Bitcoin consulting for individuals and organizations",
        path: "/services/consulting",
        icon: <Users className="h-5 w-5" />,
        color: "orange",
      },
      {
        name: "Education",
        description: "Personalized Bitcoin education and guidance",
        path: "/services/education",
        icon: <GraduationCap className="h-5 w-5" />,
        color: "green",
      },
    ],
    featured: {
      title: "Bitcoin Expertise",
      description: "Professional guidance to navigate the Bitcoin ecosystem",
      image: "/images/services-featured.jpg"
    }
  },
  {
    name: "About",
    icon: HelpCircle,
    path: "/about",
    items: [
      {
        name: "Manifesto",
        description: "Our beliefs about Bitcoin's role in society",
        path: "/manifesto",
        icon: <BookOpen className="h-5 w-5" />,
      },
      {
        name: "Team",
        description: "The people behind Store of Value",
        path: "/about",
        icon: <Users className="h-5 w-5" />,
      },
      {
        name: "Contact",
        description: "Get in touch with us",
        path: "/contact",
        icon: <MessageSquare className="h-5 w-5" />,
      },
    ],
    featured: {
      title: "Our Story",
      description: "Learn about our mission to advance Bitcoin adoption through education",
      image: "/images/about-featured.jpg"
    }
  },
];

// Helper function to get correct color classes for Tailwind JIT
const getColorClasses = (color, type, opacity = 100) => {
  // Create a mapping of colors to their respective Tailwind classes
  const colorMap = {
    blue: {
      border: "border-blue-500/20 hover:border-blue-500/40",
      bg: "bg-blue-500/5 hover:bg-blue-500/10",
      text: "text-blue-500"
    },
    orange: {
      border: "border-orange-500/20 hover:border-orange-500/40",
      bg: "bg-orange-500/5 hover:bg-orange-500/10",
      text: "text-orange-500"
    },
    green: {
      border: "border-green-500/20 hover:border-green-500/40",
      bg: "bg-green-500/5 hover:bg-green-500/10",
      text: "text-green-500"
    },
    amber: {
      border: "border-amber-500/20 hover:border-amber-500/40",
      bg: "bg-amber-500/5 hover:bg-amber-500/10",
      text: "text-amber-500"
    },
    purple: {
      border: "border-purple-500/20 hover:border-purple-500/40",
      bg: "bg-purple-500/5 hover:bg-purple-500/10",
      text: "text-purple-500"
    },
    indigo: {
      border: "border-indigo-500/20 hover:border-indigo-500/40",
      bg: "bg-indigo-500/5 hover:bg-indigo-500/10",
      text: "text-indigo-500"
    },
    red: {
      border: "border-red-500/20 hover:border-red-500/40",
      bg: "bg-red-500/5 hover:bg-red-500/10",
      text: "text-red-500"
    }
  };

  // Return the appropriate class based on type
  return colorMap[color]?.[type] || colorMap.orange[type]; // Default to orange if color not found
};

// Image with fallback component
const FeaturedImage = ({ src, alt, sectionName }) => {
  const [hasError, setHasError] = useState(false);
  
  // Get the appropriate icon based on section name
  const getFallbackIcon = () => {
    switch(sectionName) {
      case "Learn":
        return <BookOpen className="h-8 w-8 text-amber-500/70" />;
      case "Services":
        return <MessageSquare className="h-8 w-8 text-amber-500/70" />;
      case "Tools":
        return <Lightbulb className="h-8 w-8 text-amber-500/70" />;
      case "About":
        return <HelpCircle className="h-8 w-8 text-amber-500/70" />;
      default:
        return <BookOpen className="h-8 w-8 text-amber-500/70" />;
    }
  };
  
  return hasError ? (
    <div className="h-32 w-full rounded-md bg-gradient-to-r from-orange-500/20 to-amber-500/20 flex items-center justify-center">
      {getFallbackIcon()}
    </div>
  ) : (
    <img 
      src={src} 
      alt={alt}
      className="object-cover h-full w-full rounded-md" 
      onError={() => setHasError(true)}
    />
  );
};

// NavLogo component with enhanced styling
const NavLogo = () => (
  <span className="text-xl font-bold flex items-center gap-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
    <span className="flex items-center">
      <BitcoinLogoIcon size="sm" className="mr-2" animated={false} />
      <span className="tracking-tight">Store of Value</span>
    </span>
  </span>
);

// Mega menu dropdown component
const MegaMenu = ({ section, isActive, onClose }) => {
  const menuRef = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);
  
  return (
    <motion.div
      ref={menuRef}
      className="fixed top-16 inset-x-0 z-50 w-full"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <div className="bg-card/95 backdrop-blur-md border border-border/50 rounded-lg shadow-xl p-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Section for featured item with image */}
            <div className="col-span-1 mb-4 md:mb-0 md:border-r md:border-border/30 md:pr-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                {section.featured?.title || section.name}
              </h3>
              {section.featured?.description && (
                <p className="text-muted-foreground mb-4">{section.featured.description}</p>
              )}
              {section.featured?.image && (
                <div className="relative h-32 w-full overflow-hidden rounded-md">
                  <FeaturedImage 
                    src={section.featured.image} 
                    alt={section.featured.title || section.name}
                    sectionName={section.name}
                  />
                </div>
              )}
            </div>
            
            {/* Section for links */}
            <div className="col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {section.items?.map((item, i) => (
                  <div key={i} className="group">
                    <Link 
                      to={item.path} 
                      onClick={onClose}
                      className="flex items-start p-3 rounded-md hover:bg-amber-500/10 transition-colors"
                    >
                      {item.icon && (
                        <div className={`mr-3 text-amber-500 ${getColorClasses(item.color || 'amber', 'text')}`}>
                          {item.icon}
                        </div>
                      )}
                      <div>
                        <h4 className="font-medium text-foreground group-hover:text-amber-500">{item.name}</h4>
                        {item.description && (
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        )}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Search modal component
const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  
  // Focus input on open
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);
  
  // Mock search function - in a real app, this would query your content
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    
    // Simulate search results based on navigation structure
    const searchResults = [];
    navigationStructure.forEach(section => {
      if (section.name.toLowerCase().includes(query.toLowerCase())) {
        searchResults.push({
          name: section.name,
          path: section.path || (section.items?.[0]?.path || "/"),
          type: "Main Section"
        });
      }
      
      if (section.items) {
        section.items.forEach(item => {
          if (
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            (item.description && item.description.toLowerCase().includes(query.toLowerCase()))
          ) {
            searchResults.push({
              name: item.name,
              path: item.path,
              description: item.description,
              type: section.name
            });
          }
        });
      }
      
      if (section.featured) {
        const featured = section.featured;
        if (
          featured.title.toLowerCase().includes(query.toLowerCase()) ||
          featured.description.toLowerCase().includes(query.toLowerCase())
        ) {
          searchResults.push({
            name: featured.title,
            path: section.path || (section.items?.[0]?.path || "/"),
            description: featured.description,
            type: "Featured"
          });
        }
      }
    });
    
    setResults(searchResults);
  }, [query]);
  
  if (!isOpen) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-start justify-center pt-[20vh]"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
        className="bg-background w-full max-w-2xl mx-4 rounded-xl shadow-xl border border-amber-500/20"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4 border-b border-amber-500/10 flex items-center">
          <Search className="h-5 w-5 text-muted-foreground mr-2" />
          <Input
            ref={inputRef}
            type="text"
            placeholder="Search for content..."
            className="border-none text-lg focus-visible:ring-0 focus-visible:ring-offset-0"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <Button variant="ghost" size="icon" onClick={onClose} className="ml-auto">
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="p-2 max-h-[60vh] overflow-y-auto">
          {results.length === 0 && query ? (
            <div className="p-4 text-center text-muted-foreground">
              No results found for "{query}"
            </div>
          ) : results.length > 0 ? (
            <div className="divide-y divide-border">
              {results.map((result, i) => (
                <Link
                  key={i}
                  to={result.path}
                  onClick={onClose}
                  className="block p-3 hover:bg-orange-500/5 rounded-lg transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-foreground">{result.name}</h4>
                      {result.description && (
                        <p className="text-sm text-muted-foreground">{result.description}</p>
                      )}
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-orange-500/10 text-orange-500">
                      {result.type}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-4">
              <h3 className="font-medium mb-2">Popular Topics</h3>
              <div className="grid grid-cols-2 gap-2">
                {["Bitcoin Basics", "Misconceptions", "Key Principles", "Bitcoin Services"].map((term, i) => (
                  <Button
                    key={i}
                    variant="outline"
                    size="sm"
                    onClick={() => setQuery(term)}
                    className="justify-start text-muted-foreground hover:text-foreground"
                  >
                    <Search className="h-3 w-3 mr-2" />
                    {term}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="p-3 border-t border-amber-500/10 bg-muted/30 text-xs text-muted-foreground text-center">
          Press <kbd className="px-1.5 py-0.5 bg-background border rounded">ESC</kbd> to close
        </div>
      </motion.div>
    </motion.div>
  );
};

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navRef = useRef(null);
  
  // Handle scroll for navbar background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close dropdowns when navigating
  useEffect(() => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  
  // Close search modal with ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen]);
  
  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Toggle dropdown function
  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };
  
  return (
    <>
      <motion.nav 
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-[100] backdrop-blur-md ${
          scrolled 
            ? 'bg-background/95 shadow-lg shadow-orange-500/5 border-b border-amber-500/20' 
            : 'bg-gradient-to-r from-background/70 via-background/80 to-background/70 border-b border-border/30'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center group transition-all duration-300">
              <div className="overflow-hidden flex items-center">
                <div>
                  <BitcoinLogoIcon animated={false} className="h-8 w-8 mr-3 transition-all duration-300 group-hover:text-orange-500" />
                </div>
                <div className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">Store of Value</div>
              </div>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:space-x-1">
              {navigationStructure.map((section) => (
                <div key={section.name} className="relative">
                  {section.items?.length > 0 ? (
                    <button
                      onClick={() => toggleDropdown(section.name)}
                      className={`flex items-center px-3 py-2 text-base font-medium rounded-md transition-colors ${
                        activeDropdown === section.name
                          ? 'text-orange-500 bg-orange-500/5'
                          : 'text-foreground hover:text-orange-500 hover:bg-orange-500/5'
                      }`}
                      aria-expanded={activeDropdown === section.name}
                    >
                      {section.name}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === section.name ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      to={section.path || '/'}
                      className={`flex items-center px-3 py-2 text-base font-medium rounded-md transition-colors ${
                        location.pathname === section.path
                          ? 'text-orange-500 bg-orange-500/5'
                          : 'text-foreground hover:text-orange-500 hover:bg-orange-500/5'
                      }`}
                    >
                      {section.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-md hover:bg-orange-500/5 transition-colors text-muted-foreground hover:text-foreground"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              
              {/* Call to Action Button */}
              <Button 
                className="ml-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-none"
                size="sm"
                onClick={() => window.location.href = "/get-started"}
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Get Started
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-md hover:bg-orange-500/5 transition-colors text-muted-foreground hover:text-foreground mr-2"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md hover:bg-orange-500/5 transition-colors"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-orange-500" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
      
      {/* Mega Menu Dropdowns */}
      <AnimatePresence>
        {activeDropdown && (
          <MegaMenu 
            section={navigationStructure.find(section => section.name === activeDropdown)} 
            isActive={true} 
            onClose={() => setActiveDropdown(null)} 
          />
        )}
      </AnimatePresence>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-background md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col h-full pt-16 pb-8 px-4 overflow-y-auto">
              <div className="py-4 border-b border-border">
                <h2 className="text-xl font-bold text-orange-500">Menu</h2>
              </div>
              
              <div className="mt-6 space-y-1">
                {navigationStructure.map((section) => (
                  <div key={section.name} className="mb-6">
                    <div className="flex items-center mb-3">
                      <section.icon className="h-5 w-5 text-orange-500 mr-3" />
                      <h3 className="font-bold text-orange-500">{section.name}</h3>
                    </div>
                    <div className="pl-8 space-y-4">
                      {section.name === "Learn" ? 
                        // Modified order for Learn section in mobile menu
                        [
                          ...(section.items.filter(item => item.name === "Courses")),
                          ...(section.items.filter(item => item.name === "Resources")),
                          ...(section.items.filter(item => item.name === "Principles")),
                          ...(section.items.filter(item => item.name === "Perspectives")),
                          ...(section.items.filter(item => item.name === "Misconceptions")),
                          ...(section.items.filter(item => item.name === "Glossary"))
                        ].map((item, i) => (
                          <Link
                            key={i}
                            to={item.path}
                            className="flex items-center py-2 text-base hover:text-orange-500 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <span className="mr-3 text-orange-500/70">{item.icon}</span>
                            <span>{item.name}</span>
                          </Link>
                        ))
                      : 
                        // Original order for other sections
                        section.items.map((item, i) => (
                          <Link
                            key={i}
                            to={item.path}
                            className="flex items-center py-2 text-base hover:text-orange-500 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <span className="mr-3 text-orange-500/70">{item.icon}</span>
                            <span>{item.name}</span>
                          </Link>
                        ))
                      }
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-auto pt-8 border-t border-border">
                <Button
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
                  onClick={() => {
                    window.location.href = "/get-started";
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <MessageSquare className="h-5 w-5 mr-3" />
                  Get Started
                </Button>
                
                <div className="mt-6 text-center text-sm text-muted-foreground">
                  &copy; {new Date().getFullYear()} Store of Value
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
