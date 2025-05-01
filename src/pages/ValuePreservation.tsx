import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Clock, 
  Calendar, 
  Shield, 
  TrendingUp, 
  BarChart, 
  Globe, 
  Lock, 
  Zap,
  User,
  Quote as QuoteIcon,
  ExternalLink,
  FileText,
  ChevronRight,
  BookOpen,
  LucideIcon,
  CheckCircle,
  List,
  Hash,
  Newspaper,
  LineChart,
  DollarSign,
  Landmark,
  AlertTriangle,
  Info,
  Coins,
  Bitcoin,
  Search,
  Truck,
  Scale,
  Wrench,
  Divide,
  Eye,
  TrendingDown
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Citation component with improved tooltip
interface CitationProps {
  num: number;
  url: string;
  title: string;
  authors?: string;
  year?: string;
}

const Citation: React.FC<CitationProps> = ({ num, url, title, authors, year }) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="inline-flex items-center text-xs text-amber-500 hover:text-amber-400 superscript relative group"
  >
    <sup className="font-medium">[{num}]</sup>
    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-64 bg-black/90 border border-amber-500/30 rounded p-3 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
      {authors && <span className="block text-amber-400 mb-1">{authors}</span>}
      <span className="block font-medium mb-1">{title}</span>
      {year && <span className="block text-gray-400 text-xs">{year}</span>}
    </span>
  </a>
);

// Quote component
interface QuoteProps {
  text: string;
  author: string;
  role?: string;
  source?: string;
  sourceUrl?: string;
  className?: string;
}

const Quote: React.FC<QuoteProps> = ({ text, author, role, source, sourceUrl, className }) => (
  <div className={`bg-black/50 border border-amber-500/20 rounded-lg p-6 my-8 ${className}`}>
    <div className="flex items-start gap-4">
      <div className="mt-1 text-amber-500">
        <span className="text-5xl block leading-none">&ldquo;</span>
      </div>
      <div>
        <p className="text-white/90 text-lg italic leading-relaxed mb-4">{text}</p>
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 mr-3">
            <User className="h-5 w-5" />
          </div>
          <div>
            <p className="font-medium text-white">{author}</p>
            {role && <p className="text-white/60 text-sm">{role}</p>}
            {source && (
              <a 
                href={sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-500 hover:text-amber-400 text-sm flex items-center mt-1"
              >
                {source} <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Source component
interface SourceItemProps {
  num: number;
  title: string;
  url: string;
  publication: string;
  authors?: string;
  date?: string;
  doi?: string;
}

const SourceItem: React.FC<SourceItemProps> = ({ num, title, url, publication, authors, date, doi }) => (
  <div className="mb-6 last:mb-0 pb-6 last:pb-0 border-b last:border-b-0 border-amber-500/10">
    <p className="text-white">
      <span className="text-amber-500 font-semibold mr-2">[{num}]</span>
      <span className="font-medium">{title}</span>
    </p>
    {authors && <p className="text-white/70 text-sm mt-1">By {authors}</p>}
    <div className="flex flex-wrap items-center gap-x-3 mt-2">
      <span className="text-amber-500/80 text-sm">{publication}</span>
      {date && <span className="text-white/50 text-sm">{date}</span>}
      {doi && <span className="text-white/50 text-sm">DOI: {doi}</span>}
    </div>
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-amber-500 hover:text-amber-400 text-sm flex items-center mt-2"
    >
      {url} <ExternalLink className="ml-1 h-3 w-3" />
    </a>
  </div>
);

// Expert insight component
interface ExpertInsightProps {
  expert: string;
  role: string;
  points: string[];
  photoUrl?: string;
}

const ExpertInsight: React.FC<ExpertInsightProps> = ({ expert, role, points, photoUrl }) => (
  <div className="bg-gradient-to-br from-amber-950/20 to-black/20 border border-amber-500/20 rounded-lg p-6 my-8">
    <div className="flex items-center mb-4">
      <div className="h-14 w-14 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 mr-4">
        {photoUrl ? (
          <img src={photoUrl} alt={expert} className="h-14 w-14 rounded-full object-cover" />
        ) : (
          <User className="h-7 w-7" />
        )}
      </div>
      <div>
        <h4 className="text-xl font-semibold text-white">{expert}</h4>
        <p className="text-white/60">{role}</p>
      </div>
    </div>
    <div className="space-y-3">
      {points.map((point, index) => (
        <div key={index} className="flex">
          <div className="mr-3 text-amber-500 mt-1">
            <ChevronRight className="h-4 w-4" />
          </div>
          <p className="text-white/80">{point}</p>
        </div>
      ))}
    </div>
  </div>
);

// Section header component
interface SectionHeaderProps {
  title: string;
  icon: React.ReactElement;
  id?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, icon, id }) => (
  <div id={id} className="flex items-center border-b border-amber-500/20 pb-4 mb-6 scroll-mt-32">
    <div className="p-2 bg-amber-500/10 rounded-lg text-amber-500 mr-3">
      {icon}
    </div>
    <h2 className="text-2xl font-bold text-white">{title}</h2>
  </div>
);

// Table of Contents item
interface TOCItemProps {
  title: string;
  id: string;
  isActive: boolean;
  onClick: () => void;
}

const TOCItem: React.FC<TOCItemProps> = ({ title, id, isActive, onClick }) => (
  <a 
    href={`#${id}`} 
    onClick={(e) => {
      e.preventDefault();
      // Get the element we want to scroll to
      const element = document.getElementById(id);
      if (element) {
        // Get the element's position
        const elementPosition = element.getBoundingClientRect().top;
        // Get the current scroll position
        const offsetPosition = elementPosition + window.scrollY - 120; // 120px offset
        
        // Scroll to the element with the offset
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      onClick();
    }}
    className={`flex items-center py-2 px-3 rounded-md transition-colors ${
      isActive ? 'bg-amber-500/10 text-amber-400' : 'text-white/70 hover:text-amber-400 hover:bg-amber-500/5'
    }`}
  >
    <div className="mr-3">
      <ChevronRight className={`h-3.5 w-3.5 transition-transform ${isActive ? 'text-amber-500' : 'text-amber-500/50'}`} />
    </div>
    <span className="text-sm">{title}</span>
  </a>
);

// Data visualization component for Bitcoin vs. Gold performance
const PerformanceComparison = () => (
  <div className="my-8 p-5 bg-gradient-to-r from-amber-950/30 to-orange-950/30 border border-amber-500/20 rounded-lg overflow-hidden">
    <h4 className="text-lg font-semibold text-amber-300 mb-4 flex items-center">
      <LineChart className="h-5 w-5 mr-2 text-amber-400" />
      Bitcoin vs. Traditional Stores of Value (10-Year Performance)
    </h4>
    <div className="relative h-60 w-full">
      {/* This would be replaced with an actual chart library in production */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-500/20"></div>
      <div className="absolute left-0 h-full w-[2px] bg-amber-500/20"></div>
      
      {/* Bitcoin line */}
      <div className="absolute bottom-0 left-0 w-full h-full">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <path 
            d="M0,100 C10,90 20,85 30,70 C40,55 50,40 60,20 C70,10 80,5 90,2 L100,0" 
            fill="none" 
            stroke="#F59E0B" 
            strokeWidth="2"
            className="drop-shadow-[0_0_3px_rgba(245,158,11,0.7)]" 
          />
        </svg>
      </div>
      
      {/* Gold line */}
      <div className="absolute bottom-0 left-0 w-full h-full">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <path 
            d="M0,100 C10,98 20,96 30,97 C40,95 50,94 60,93 C70,92 80,90 90,92 L100,91" 
            fill="none" 
            stroke="#D4AF37" 
            strokeWidth="2" 
          />
        </svg>
      </div>
      
      {/* S&P 500 line */}
      <div className="absolute bottom-0 left-0 w-full h-full">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <path 
            d="M0,100 C10,95 20,90 30,88 C40,86 50,84 60,80 C70,78 80,76 90,74 L100,72" 
            fill="none" 
            stroke="#4CAF50" 
            strokeWidth="2" 
          />
        </svg>
      </div>
      
      {/* Labels at the right */}
      <div className="absolute top-2 right-2 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 bg-amber-500 rounded-full"></div>
          <span className="text-xs text-white">Bitcoin</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 bg-[#D4AF37] rounded-full"></div>
          <span className="text-xs text-white">Gold</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 bg-green-500 rounded-full"></div>
          <span className="text-xs text-white">S&P 500</span>
        </div>
      </div>
    </div>
    <div className="text-xs text-white/60 mt-4 text-center">
      10-year relative performance (not to scale, for illustrative purposes only)
    </div>
  </div>
);

// Key stats component
interface KeyStatProps {
  icon: React.ReactElement;
  title: string;
  value: string;
  description: string;
}

const KeyStat: React.FC<KeyStatProps> = ({ icon, title, value, description }) => (
  <div className="bg-gradient-to-r from-amber-950/30 to-orange-950/30 border border-amber-500/20 rounded-lg p-4">
    <div className="flex items-start">
      <div className="text-amber-400 mr-3 mt-1">{icon}</div>
      <div>
        <h4 className="text-sm font-medium text-amber-300 mb-1">{title}</h4>
        <p className="text-xl font-semibold text-white mb-1">{value}</p>
        <p className="text-xs text-white/70">{description}</p>
      </div>
    </div>
  </div>
);

// Main article page component
const ValuePreservationArticle = () => {
  const [activeTocItem, setActiveTocItem] = useState('summary');
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-amber-950/10 to-black">
      <Navigation />
      
      <main className="container max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm">
          <Link to="/" className="text-amber-400 hover:text-amber-300">Home</Link>
          <span className="mx-2 text-white/40">/</span>
          <Link to="/learn" className="text-amber-400 hover:text-amber-300">Learn</Link>
          <span className="mx-2 text-white/40">/</span>
          <span className="text-white/60">Value Preservation</span>
        </div>
        
        {/* Article Header */}
        <header className="mb-12 pt-10">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-300 to-amber-600 bg-clip-text text-transparent mb-6">
            Why Bitcoin Matters for Value Preservation
          </h1>
          
          <div className="flex flex-wrap items-center text-white/70 space-x-6 mb-8">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>April 4th, 2025</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>18 min read</span>
            </div>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl">
              In an era of unprecedented monetary expansion and economic uncertainty, the search for reliable value preservation has become increasingly important. This article examines Bitcoin's emerging role as a significant innovation in wealth preservation technology, addressing both its potential and limitations in this critical function.
            </p>
          </div>
        </header>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left sidebar with Table of Contents */}
            <div className="hidden lg:block">
              <div className="sticky top-24">
                <div className="bg-black/30 border border-amber-500/20 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 mb-4 pb-2 border-b border-amber-500/10">
                    <List className="h-4 w-4 text-amber-500" />
                    <h3 className="text-amber-400 font-medium">Table of Contents</h3>
                  </div>
                  <nav className="space-y-1">
                    <TOCItem title="Executive Summary" id="summary" isActive={activeTocItem === 'summary'} onClick={() => setActiveTocItem('summary')} />
                    <TOCItem title="Introduction" id="introduction" isActive={activeTocItem === 'introduction'} onClick={() => setActiveTocItem('introduction')} />
                    <TOCItem title="Historical Context" id="historical-context" isActive={activeTocItem === 'historical-context'} onClick={() => setActiveTocItem('historical-context')} />
                    <TOCItem title="Traditional Value Preservation" id="traditional-value" isActive={activeTocItem === 'traditional-value'} onClick={() => setActiveTocItem('traditional-value')} />
                    <TOCItem title="Bitcoin's Value Attributes" id="bitcoin-attributes" isActive={activeTocItem === 'bitcoin-attributes'} onClick={() => setActiveTocItem('bitcoin-attributes')} />
                    <TOCItem title="Expert Perspectives" id="expert-perspectives" isActive={activeTocItem === 'expert-perspectives'} onClick={() => setActiveTocItem('expert-perspectives')} />
                    <TOCItem title="Comparative Analysis" id="comparative-analysis" isActive={activeTocItem === 'comparative-analysis'} onClick={() => setActiveTocItem('comparative-analysis')} />
                    <TOCItem title="Practical Considerations" id="practical-considerations" isActive={activeTocItem === 'practical-considerations'} onClick={() => setActiveTocItem('practical-considerations')} />
                    <TOCItem title="Future Outlook" id="future-outlook" isActive={activeTocItem === 'future-outlook'} onClick={() => setActiveTocItem('future-outlook')} />
                    <TOCItem title="Conclusion" id="conclusion" isActive={activeTocItem === 'conclusion'} onClick={() => setActiveTocItem('conclusion')} />
                  </nav>
                </div>
                
                <div className="bg-black/30 border border-amber-500/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-4 pb-2 border-b border-amber-500/10">
                    <Hash className="h-4 w-4 text-amber-500" />
                    <h3 className="text-amber-400 font-medium">Key Statistics</h3>
                  </div>
                  <div className="space-y-4">
                    <KeyStat 
                      icon={<DollarSign className="h-5 w-5" />}
                      title="Bitcoin Total Supply"
                      value="21,000,000 BTC"
                      description="Fixed maximum supply, creating absolute scarcity"
                    />
                    <KeyStat 
                      icon={<Clock className="h-5 w-5" />}
                      title="Halving Schedule"
                      value="Every ~4 years"
                      description="Decreasing issuance rate, increasing scarcity"
                    />
                    <KeyStat 
                      icon={<TrendingUp className="h-5 w-5" />}
                      title="Annual Inflation Rate"
                      value="<2%"
                      description="Decreasing towards zero over time"
                    />
                    <KeyStat 
                      icon={<Globe className="h-5 w-5" />}
                      title="Network Nodes"
                      value="15,000+"
                      description="Decentralized, globally distributed security"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main content area */}
            <div className="lg:col-span-3">
              {/* Executive Summary Section */}
              <section className="mb-16" id="summary">
                <div className="bg-gradient-to-br from-amber-950/20 to-black/30 border border-amber-500/30 rounded-lg p-6 mb-12">
                  <div className="flex items-start">
                    <div className="p-2 bg-amber-500/10 rounded-lg text-amber-500 mr-4 mt-1">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">Executive Summary</h2>
                      <div className="space-y-4 text-white/90">
                        <p>
                          This article analyzes Bitcoin's emerging role as a revolutionary tool for value preservation. We examine historical monetary systems, limitations of traditional value storage methods, and Bitcoin's unique properties that address these shortcomings in the digital age.
                        </p>
                        <div className="mt-6 space-y-2">
                          <div className="flex items-start">
                            <div className="h-6 w-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 mr-3 mt-0.5 flex-shrink-0">
                              <CheckCircle className="h-3.5 w-3.5" />
                            </div>
                            <p className="text-sm">
                              <strong>Foundational Problem:</strong> Traditional stores of value face unprecedented challenges from monetary debasement, custody risks, and geopolitical instability.
                            </p>
                          </div>
                          <div className="flex items-start">
                            <div className="h-6 w-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 mr-3 mt-0.5 flex-shrink-0">
                              <CheckCircle className="h-3.5 w-3.5" />
                            </div>
                            <p className="text-sm">
                              <strong>Key Bitcoin Attributes:</strong> Fixed supply, censorship resistance, self-custody, borderless accessibility, and network security create a uniquely powerful value preservation tool.
                            </p>
                          </div>
                          <div className="flex items-start">
                            <div className="h-6 w-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 mr-3 mt-0.5 flex-shrink-0">
                              <CheckCircle className="h-3.5 w-3.5" />
                            </div>
                            <p className="text-sm">
                              <strong>Expert Consensus:</strong> Leading economists, investors, and cryptographers increasingly recognize Bitcoin's role as a hedge against monetary inflation and financial instability.
                            </p>
                          </div>
                          <div className="flex items-start">
                            <div className="h-6 w-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 mr-3 mt-0.5 flex-shrink-0">
                              <CheckCircle className="h-3.5 w-3.5" />
                            </div>
                            <p className="text-sm">
                              <strong>Practical Implementation:</strong> Effective value preservation with Bitcoin requires education on self-custody, security best practices, and long-term perspective despite volatility.
                            </p>
                          </div>
                          <div className="flex items-start">
                            <div className="h-6 w-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 mr-3 mt-0.5 flex-shrink-0">
                              <CheckCircle className="h-3.5 w-3.5" />
                            </div>
                            <p className="text-sm">
                              <strong>Future Outlook:</strong> As traditional monetary systems evolve, Bitcoin's role in value preservation will likely grow in importance, particularly in environments of economic uncertainty.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Historical Context Section */}
              <section className="mb-16" id="historical-context">
                <SectionHeader 
                  title="Historical Context of Money and Value" 
                  icon={<Clock className="h-6 w-6" />} 
                  id="historical-context"
                />
                
                <div className="prose prose-invert max-w-none">
                  <p className="mb-6">
                    To understand Bitcoin's role in value preservation, we must first examine the historical relationship between money and wealth storage across civilizations. Throughout history, societies have searched for reliable methods to preserve value across time.
                  </p>
                  
                  {/* Evolution Timeline */}
                  <div className="my-10 p-6 border-2 border-amber-400 bg-black rounded-lg shadow-md">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-amber-300 mb-3">Evolution of Value Preservation</h3>
                      <p className="text-white">From physical commodities to digital assets, value preservation tools have evolved to address changing economic needs.</p>
                    </div>
                    
                    <div className="relative border-l-2 border-amber-500/30 pl-8 ml-4 space-y-8">
                      <div className="relative">
                        <div className="absolute -left-[42px] h-6 w-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500">
                          <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                        </div>
                        <p className="text-amber-400 font-medium">5000+ BCE</p>
                        <p className="text-white/80 mb-1">Commodity Storage</p>
                        <p className="text-sm text-white/60">Early civilizations stored grains, salt, and metals as primitive forms of wealth preservation. These had practical utility but suffered from spoilage, bulk, and security challenges.</p>
                      </div>
                      
                      <div className="relative">
                        <div className="absolute -left-[42px] h-6 w-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500">
                          <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                        </div>
                        <p className="text-amber-400 font-medium">~700 BCE - 1900s</p>
                        <p className="text-white/80 mb-1">Precious Metals Era</p>
                        <p className="text-sm text-white/60">Gold and silver became dominant stores of value due to their durability, scarcity, and universal recognition. This era saw the development of standardized coinage and eventually gold-backed paper currencies.</p>
                      </div>
                      
                      <div className="relative">
                        <div className="absolute -left-[42px] h-6 w-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500">
                          <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                        </div>
                        <p className="text-amber-400 font-medium">1971 - 2008</p>
                        <p className="text-white/80 mb-1">Fiat Currency Dominance</p>
                        <p className="text-sm text-white/60">After the abandonment of the gold standard, government-issued fiat currencies became the primary medium of exchange, while diversified portfolios of stocks, bonds, real estate, and some gold served as wealth preservation strategies.</p>
                      </div>
                      
                      <div className="relative">
                        <div className="absolute -left-[42px] h-6 w-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500">
                          <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                        </div>
                        <p className="text-amber-400 font-medium">2009 - Present</p>
                        <p className="text-white/80 mb-1">Bitcoin and Digital Scarcity</p>
                        <p className="text-sm text-white/60">The invention of Bitcoin introduced the first digitally scarce asset, combining gold-like scarcity with digital transferability and programmable rules. This innovation opened a new chapter in value preservation technology.</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">The Ancient Quest for Value Preservation</h3>
                  <p>
                    For millennia, civilizations have grappled with a fundamental economic challenge: how to store the fruits of one's labor for future use. Nick Szabo, computer scientist and monetary historian, has documented how early societies used collectibles like shells, beads, and stones as proto-money, serving the dual function of status display and wealth preservation.<Citation num={5} url="https://nakamotoinstitute.org/shelling-out/" title="Shelling Out: The Origins of Money" authors="Nick Szabo" year="2002" />
                  </p>
                  
                  <p>
                    These early value preservation tools gradually evolved into more standardized monetary systems as societies grew more complex. Gold and silver emerged as dominant stores of value due to their unique combination of durability, scarcity, and universal recognition. For thousands of years, precious metals remained the foundation of monetary systems precisely because of their reliable value preservation characteristics.
                  </p>
                  
                  {/* Comparison of Value Preservation Methods */}
                  <div className="grid md:grid-cols-3 gap-4 my-8">
                    <div className="bg-black/30 border border-amber-500/20 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <div className="h-10 w-10 bg-amber-500/20 rounded-full flex items-center justify-center mr-3">
                          <Coins className="h-5 w-5 text-amber-500" />
                        </div>
                        <h4 className="text-amber-400 font-medium">Precious Metals</h4>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-white/90">Physical scarcity ensures long-term value</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-white/90">Proven track record over millennia</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-white/90">Universal recognition across cultures</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-black/30 border border-amber-500/20 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <div className="h-10 w-10 bg-amber-500/20 rounded-full flex items-center justify-center mr-3">
                          <Landmark className="h-5 w-5 text-amber-500" />
                        </div>
                        <h4 className="text-amber-400 font-medium">Real Assets</h4>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-white/90">Tangible physical ownership</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-white/90">Potential income generation</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-white/90">Often tied to population demand</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-black/30 border border-amber-500/20 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <div className="h-10 w-10 bg-amber-500/20 rounded-full flex items-center justify-center mr-3">
                          <Bitcoin className="h-5 w-5 text-amber-500" />
                        </div>
                        <h4 className="text-amber-400 font-medium">Digital Scarcity</h4>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-white/90">Programmatic, immutable supply caps</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-white/90">Global transmission at near-zero cost</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-white/90">Sovereign ownership without intermediaries</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">The Rise and Fall of Gold Standards</h3>
                  <p>
                    By the late 19th century, most major economies had adopted some form of gold standard, linking their paper currencies directly to specific amounts of gold. This system provided a natural constraint on money creation, as currencies could only be issued in proportion to a nation's gold reserves. Former Federal Reserve Chairman Alan Greenspan noted that "gold still represents the ultimate form of payment in the world," highlighting its enduring monetary significance.<Citation num={12} url="https://www.constitution.org/mon/greenspan_gold.htm" title="Gold and Economic Freedom" authors="Alan Greenspan" year="1966" />
                  </p>
                  
                  <p>
                    However, the gold standard's rigidity proved problematic during economic crises, leading to its gradual abandonment during the 20th century. The Bretton Woods system (1944-1971) attempted to maintain gold's disciplinary role while allowing more monetary flexibility, but it too collapsed when the United States ended dollar convertibility to gold in 1971.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">The Fiat Era and Search for Value Preservation</h3>
                  <p>
                    The post-1971 era of purely fiat currencies—backed only by government decree and not by physical commodities—created new challenges for value preservation. Without the constraint of gold convertibility, money supply growth accelerated worldwide, with the Federal Reserve's balance sheet expanding from $861 billion in 2008 to over $8.9 trillion by 2022.<Citation num={7} url="https://www.federalreserve.gov/monetarypolicy/bst_recenttrends.htm" title="Recent Balance Sheet Trends" authors="Federal Reserve" year="2022" />
                  </p>
                  
                  {/* Monetary Systems Comparison */}
                  <div className="overflow-x-auto my-8">
                    <table className="min-w-full bg-black/30 border border-amber-500/20 rounded-lg">
                      <thead>
                        <tr>
                          <th className="px-4 py-3 text-left border-b border-amber-500/10 text-amber-300">Monetary System</th>
                          <th className="px-4 py-3 text-left border-b border-amber-500/10 text-amber-300">Value Derivation</th>
                          <th className="px-4 py-3 text-left border-b border-amber-500/10 text-amber-300">Supply Mechanism</th>
                          <th className="px-4 py-3 text-left border-b border-amber-500/10 text-amber-300">Value Preservation</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-4 py-3 border-b border-amber-500/5 font-medium">Commodity Money</td>
                          <td className="px-4 py-3 border-b border-amber-500/5">Intrinsic value of commodity</td>
                          <td className="px-4 py-3 border-b border-amber-500/5">Physical discovery/production</td>
                          <td className="px-4 py-3 border-b border-amber-500/5">Strong if supply remains constrained</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 border-b border-amber-500/5 font-medium">Gold Standard</td>
                          <td className="px-4 py-3 border-b border-amber-500/5">Gold backing at fixed rate</td>
                          <td className="px-4 py-3 border-b border-amber-500/5">Limited by gold reserves</td>
                          <td className="px-4 py-3 border-b border-amber-500/5">Generally effective until abandoned</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 border-b border-amber-500/5 font-medium">Bretton Woods</td>
                          <td className="px-4 py-3 border-b border-amber-500/5">USD gold backing, other currencies to USD</td>
                          <td className="px-4 py-3 border-b border-amber-500/5">Limited by US gold reserves</td>
                          <td className="px-4 py-3 border-b border-amber-500/5">Variable effectiveness, collapsed under pressure</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 border-b border-amber-500/5 font-medium">Fiat System</td>
                          <td className="px-4 py-3 border-b border-amber-500/5">Government decree and confidence</td>
                          <td className="px-4 py-3 border-b border-amber-500/5">Central bank discretion</td>
                          <td className="px-4 py-3 border-b border-amber-500/5">Poor to moderate, dependent on policy</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Bitcoin</td>
                          <td className="px-4 py-3">Network consensus and programmatic scarcity</td>
                          <td className="px-4 py-3">Algorithmic, capped at 21 million</td>
                          <td className="px-4 py-3">Potentially strong, designed for scarcity</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <p>
                    This monetary expansion has contributed to significant asset price inflation and decreased purchasing power in many currencies, creating renewed interest in independent stores of value. As economist Saifedean Ammous notes in "The Bitcoin Standard," "For the first time since the emergence of the modern state and its fiat standard, individuals have a clear technical solution to opt out of the state's monopoly over money and assume full control of their money."<Citation num={8} url="https://saifedean.com/thebitcoinstandard" title="The Bitcoin Standard: The Decentralized Alternative to Central Banking" authors="Saifedean Ammous" year="2018" />
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">Bitcoin as a Historical Innovation</h3>
                  <p>
                    Bitcoin emerged in 2009 amidst the fallout of the global financial crisis, offering a new approach to value preservation that combines properties of precious metals (scarcity, durability) with modern digital capabilities (global transferability, divisibility, programmability).
                  </p>
                  
                  <p>
                    Unlike previous monetary innovations, which often involved repackaging existing concepts, Bitcoin represents a fundamental breakthrough: the creation of digital scarcity without requiring trusted third parties. This innovation potentially addresses limitations that have plagued previous value preservation methods, from the physical constraints of gold to the inflationary tendencies of fiat currencies.
                  </p>
                </div>
                
                <Quote 
                  text="History shows it is not possible to insulate yourself from the consequences of others holding money that is harder than yours."
                  author="Saifedean Ammous"
                  role="Economist"
                  source="The Bitcoin Standard"
                  sourceUrl="https://saifedean.com/thebitcoinstandard"
                  className="mt-8"
                />
              </section>
              
              {/* Introduction */}
              <section className="mb-16" id="introduction">
                <SectionHeader 
                  title="Introduction" 
                  icon={<FileText className="h-6 w-6" />}
                  id="introduction" 
                />
                
                <div className="prose prose-invert max-w-none">
                  <p>
                    In a world of increasing economic uncertainty, the preservation of value has become a critical concern for individuals, businesses, and institutions alike. Whether facing inflation, currency devaluation, or geopolitical instability, people seek reliable tools to safeguard their wealth against erosion.
                  </p>
                  
                  <p>
                    Bitcoin, initially conceptualized as a peer-to-peer electronic cash system by its pseudonymous creator Satoshi Nakamoto, has evolved beyond its original vision to emerge as a potentially revolutionary tool for value preservation. This transformation reflects both the asset's inherent properties and the growing recognition of its utility in addressing the limitations of traditional value preservation methods.
                  </p>
                  
                  <p>
                    This article explores how Bitcoin's unique characteristics—its fixed supply, global accessibility, sovereign-grade security, and resistance to censorship—position it as a significant innovation in wealth preservation technology. We'll examine the problems with traditional value preservation methods, Bitcoin's key attributes, expert perspectives, and practical implementation considerations.
                  </p>
                </div>
              </section>
              
              {/* Section: Traditional Value Preservation */}
              <section className="mb-16" id="traditional-problems">
                <SectionHeader 
                  title="The Problem with Traditional Value Preservation" 
                  icon={<AlertTriangle className="h-6 w-6" />}
                  id="traditional-problems" 
                />
                
                <div className="prose prose-invert max-w-none">
                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">The Fiat Currency Dilemma</h3>
                  <p>
                    Fiat currencies, while practical for everyday transactions, have proven problematic for long-term value storage due to their inherent inflationary design. Economist Steve Hanke notes that "since 1971, when the dollar's last tie to gold was severed, the dollar has lost over 85% of its purchasing power."<Citation num={10} url="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2130109" title="World Hyperinflations" authors="Steve H. Hanke and Nicholas Krus" year="2012" />
                  </p>
                  
                  <p>
                    This devaluation is not accidental but systemic. Central banks actively target inflation rates of approximately 2% annually, which compounds to significant value erosion over time. According to the U.S. Bureau of Labor Statistics, what cost $1.00 in 1971 would cost approximately $7.52 in 2022—an 86.7% loss in purchasing power over 51 years.<Citation num={11} url="https://www.bls.gov/data/inflation_calculator.htm" title="CPI Inflation Calculator" authors="U.S. Bureau of Labor Statistics" year="2023" />
                  </p>
                  
                  <p>
                    Moreover, monetary policy responses to economic crises have accelerated this trend. The unprecedented expansion of the money supply during the COVID-19 pandemic exemplifies this risk, with the U.S. M2 money supply expanding by nearly 40% between January 2020 and December 2021, creating significant inflationary pressure that impacts savers directly.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">Gold's Challenges in the Modern Era</h3>
                  <p>
                    Gold, humanity's traditional store of value, presents substantial challenges in the digital age despite its proven track record spanning millennia. Former Federal Reserve Chairman Alan Greenspan acknowledged that "gold still represents the ultimate form of payment in the world."<Citation num={12} url="https://www.constitution.org/mon/greenspan_gold.htm" title="Gold and Economic Freedom" authors="Alan Greenspan" year="1966" /> However, its use as a practical value preservation tool faces growing limitations:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    {/* Challenge 1: Verification */}
                    <div className="bg-black/30 border border-amber-500/20 rounded-lg p-5 shadow-md">
                      <div className="flex items-center mb-3">
                        <div className="h-10 w-10 bg-amber-500/20 rounded-full flex items-center justify-center mr-3">
                          <Search className="h-5 w-5 text-amber-500" />
                        </div>
                        <h4 className="text-amber-400 font-medium">Verification Difficulty</h4>
                      </div>
                      <p className="text-white/90 mb-3">
                        Unlike Bitcoin's transparent blockchain, gold requires specialized equipment and expertise to verify. Counterfeit gold remains a persistent problem; in 2019, Reuters reported that fake gold bars bearing major refinery logos had infiltrated the global market, undermining trust.
                      </p>
                      <div className="flex items-start mt-auto pt-2 border-t border-amber-500/10">
                        <Citation num={13} url="https://www.reuters.com/article/us-gold-swiss-fakes-exclusive/exclusive-fake-branded-bars-slip-dirty-gold-into-world-markets-idUSKCN1VI0DD" title="Exclusive: Fake-branded bars slip dirty gold into world markets" authors="Peter Hobson" year="2019" />
                      </div>
                    </div>
                    
                    {/* Challenge 2: Security Costs */}
                    <div className="bg-black/30 border border-amber-500/20 rounded-lg p-5 shadow-md">
                      <div className="flex items-center mb-3">
                        <div className="h-10 w-10 bg-amber-500/20 rounded-full flex items-center justify-center mr-3">
                          <Shield className="h-5 w-5 text-amber-500" />
                        </div>
                        <h4 className="text-amber-400 font-medium">Security Costs</h4>
                      </div>
                      <p className="text-white/90 mb-3">
                        Physical gold requires secure storage, typically in vaults with insurance, creating ongoing costs that erode returns. The World Gold Council acknowledges that "storage costs can significantly impact net returns from gold investment."
                      </p>
                      <div className="flex items-start mt-auto pt-2 border-t border-amber-500/10">
                        <Citation num={14} url="https://www.gold.org/goldhub/research/relevance-of-gold-as-a-strategic-asset-2022" title="The relevance of gold as a strategic asset" authors="World Gold Council" year="2022" />
                      </div>
                    </div>
                    
                    {/* Challenge 3: Transportation */}
                    <div className="bg-black/30 border border-amber-500/20 rounded-lg p-5 shadow-md">
                      <div className="flex items-center mb-3">
                        <div className="h-10 w-10 bg-amber-500/20 rounded-full flex items-center justify-center mr-3">
                          <Truck className="h-5 w-5 text-amber-500" />
                        </div>
                        <h4 className="text-amber-400 font-medium">Transportation Challenges</h4>
                      </div>
                      <p className="text-white/90 mb-3">
                        Moving significant quantities of gold across jurisdictions involves complex logistics, security concerns, and often governmental approval. This limits its utility for international settlements and creates bottlenecks during crises when physical movement may be restricted.
                      </p>
                    </div>
                    
                    {/* Challenge 4: Market Manipulation */}
                    <div className="bg-black/30 border border-amber-500/20 rounded-lg p-5 shadow-md">
                      <div className="flex items-center mb-3">
                        <div className="h-10 w-10 bg-amber-500/20 rounded-full flex items-center justify-center mr-3">
                          <AlertTriangle className="h-5 w-5 text-amber-500" />
                        </div>
                        <h4 className="text-amber-400 font-medium">Market Manipulation</h4>
                      </div>
                      <p className="text-white/90 mb-3">
                        Academic research has identified periods of gold price manipulation. A 2014 study published in the Journal of Futures Markets found evidence of suspicious price patterns in the London Gold Fixing, raising questions about market integrity.
                      </p>
                      <div className="flex items-start mt-auto pt-2 border-t border-amber-500/10">
                        <Citation num={15} url="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2489904" title="Gold Not Glittering: An Analysis of the Morning London Gold Fix" authors="Rosa Abrantes-Metz and Albert Metz" year="2014" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Bitcoin vs Gold Comparison */}
                  <div className="my-8 p-5 bg-gradient-to-r from-amber-950/30 to-orange-950/30 border border-amber-500/20 rounded-lg">
                    <h4 className="text-lg font-semibold text-amber-300 mb-4 flex items-center">
                      <Scale className="h-5 w-5 mr-2 text-amber-400" /> Bitcoin vs. Gold: Addressing Traditional Limitations
                    </h4>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-amber-500/20">
                            <th className="py-2 px-3 text-left text-amber-400">Challenge</th>
                            <th className="py-2 px-3 text-left text-amber-300">Gold</th>
                            <th className="py-2 px-3 text-left text-orange-300">Bitcoin</th>
                          </tr>
                        </thead>
                        <tbody className="text-sm">
                          <tr className="border-b border-amber-500/10">
                            <td className="py-3 px-3 font-medium text-white">Verification</td>
                            <td className="py-3 px-3 text-white/80">Requires expertise, specialized equipment, vulnerable to counterfeiting</td>
                            <td className="py-3 px-3 text-white/80">Cryptographically verifiable by anyone with a computer; mathematically impossible to counterfeit</td>
                          </tr>
                          <tr className="border-b border-amber-500/10">
                            <td className="py-3 px-3 font-medium text-white">Storage Security</td>
                            <td className="py-3 px-3 text-white/80">Physical vaults, recurring costs, third-party custodians</td>
                            <td className="py-3 px-3 text-white/80">Self-custody possible with minimal cost; no physical footprint</td>
                          </tr>
                          <tr className="border-b border-amber-500/10">
                            <td className="py-3 px-3 font-medium text-white">Transportation</td>
                            <td className="py-3 px-3 text-white/80">Physical movement with security risks; border controls</td>
                            <td className="py-3 px-3 text-white/80">Global transfer in minutes regardless of amount; no physical movement required</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-3 font-medium text-white">Market Structure</td>
                            <td className="py-3 px-3 text-white/80">Concentrated trading, documented manipulation cases</td>
                            <td className="py-3 px-3 text-white/80">24/7 global market, transparent blockchain, increasingly robust liquidity</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Section: Bitcoin's Attributes */}
              <section className="mb-16" id="bitcoin-attributes">
                <SectionHeader 
                  title="Bitcoin's Value Preservation Attributes" 
                  icon={<Shield className="h-6 w-6" />}
                  id="bitcoin-attributes" 
                />
                
                <div className="prose prose-invert max-w-none">
                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">Fixed Supply and Algorithmic Scarcity</h3>
                  <p>
                    Bitcoin's supply is mathematically capped at 21 million coins, creating a form of digital scarcity that cannot be inflated away by political decisions. This algorithmically enforced scarcity stands in stark contrast to fiat currencies, which have no theoretical limit to their creation. As noted by the Bank for International Settlements, "Bitcoin's fixed supply rule is a key feature that distinguishes it from conventional money."<Citation num={19} url="https://www.bis.org/publ/qtrpdf/r_qt1809i.htm" title="Cryptocurrencies: looking beyond the hype" authors="Bank for International Settlements" year="2018" />
                  </p>
                  
                  <p>
                    The Stock-to-Flow (S2F) ratio—a measure comparing existing supply to new production—further illustrates Bitcoin's scarcity properties. Following the 2024 halving event, Bitcoin's S2F ratio will exceed 100, surpassing gold's ratio of approximately 60, making it quantifiably the scarcest liquid asset in human history.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">Sovereign-Grade Security Through Cryptography</h3>
                  <p>
                    Bitcoin employs advanced cryptographic techniques to secure ownership. Stanford University cryptographer Dan Boneh describes Bitcoin's security model as "implementing digital scarcity through a combination of cryptographic techniques that would be practically impossible to break with current or foreseeable computing technology."<Citation num={20} url="https://crypto.stanford.edu/cs251/syllabus.html" title="CS 251: Cryptocurrencies and Blockchain Technologies" authors="Dan Boneh" year="2021" />
                  </p>
                  
                  <p>
                    This cryptographic foundation enables individuals to achieve sovereign-grade security without relying on third-party institutions. When properly implemented, Bitcoin's security model provides protection comparable to or exceeding that of traditional financial institutions, but with the critical difference that individuals maintain direct control over their assets.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">Self-Custody and Elimination of Counterparty Risk</h3>
                  <p>
                    Bitcoin enables true ownership in the digital realm—a concept computer scientist Nick Szabo explored in his work on "bit gold" years before Bitcoin's creation.<Citation num={21} url="https://nakamotoinstitute.org/bit-gold/" title="Bit Gold" authors="Nick Szabo" year="2005" /> When properly self-custodied using hardware wallets and robust security practices, Bitcoin eliminates the counterparty risks inherent in traditional financial assets.
                  </p>
                  
                  <p>
                    Unlike bank deposits, securities, or even physically held gold (which often requires third-party verification), properly secured Bitcoin requires no ongoing trust in any institution for its existence or validity. This property becomes particularly valuable during systemic financial crises, when institutional counterparties are most likely to fail.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">Global Accessibility and Censorship Resistance</h3>
                  <p>
                    Bitcoin operates on a global network independent of traditional financial infrastructure. Deloitte's research on blockchain technology notes that "Bitcoin's borderless nature represents a fundamental shift in how value can move in the digital age, enabling transactions that would be impractical or impossible through traditional financial rails."<Citation num={22} url="https://www2.deloitte.com/content/dam/Deloitte/uk/Documents/Innovation/deloitte-uk-what-is-blockchain-2016.pdf" title="Blockchain: Enigma. Paradox. Opportunity" authors="Deloitte" year="2016" />
                  </p>
                  
                  <p>
                    This property enables value preservation regardless of geography or political environment—a significant advantage in regions with unstable currencies, capital controls, or limited financial infrastructure. ARK Invest's research indicates that over 4 billion people live under some form of capital controls or financial repression, highlighting the potential market for censorship-resistant value storage.<Citation num={23} url="https://ark-invest.com/big-ideas-2022/" title="Big Ideas 2022" authors="ARK Invest" year="2022" />
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">Network Effects and Growing Utility</h3>
                  <p>
                    Bitcoin benefits from powerful network effects as adoption increases. According to research by Human Rights Foundation, Bitcoin is actively used as a value preservation tool in countries experiencing severe inflation, including Argentina, Venezuela, Nigeria, Turkey, and Lebanon.<Citation num={24} url="https://bitcoinmagazine.com/culture/check-your-financial-privilege" title="Check Your Financial Privilege" authors="Alex Gladstein" year="2021" />
                  </p>
                  
                  <p>
                    Empirical research from Yale University has found that despite its volatility, Bitcoin has demonstrated unique properties as an uncorrelated asset in global portfolios, potentially improving the risk-adjusted returns of traditional portfolios.<Citation num={25} url="https://som.yale.edu/story/2018/yale-study-examines-cryptocurrency-returns" title="Yale Study Examines Cryptocurrency Returns" authors="William Goetzmann" year="2018" /> This characteristic has attracted increased institutional interest, further strengthening the network effects that enhance Bitcoin's utility for value preservation.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">Continuous Operation and Antifragility</h3>
                  <p>
                    Bitcoin's network has maintained 99.98% uptime since its inception in 2009, with no successful attacks on its core protocol and no fraudulent transactions in its base layer. This operational resilience represents a significant advantage over traditional financial systems, which typically operate only during business hours and occasionally experience outages or need scheduled maintenance.
                  </p>
                  
                  <p>
                    Furthermore, Bitcoin has displayed properties of antifragility—a concept introduced by risk analyst Nassim Nicholas Taleb describing systems that gain strength from stressors and volatility.<Citation num={27} url="https://www.fooledbyrandomness.com/antifragile.html" title="Antifragile: Things That Gain from Disorder" authors="Nassim Nicholas Taleb" year="2012" /> Each challenge Bitcoin has faced—from regulatory crackdowns to market crashes—has ultimately strengthened its security model, market liquidity, and community resilience.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <KeyStat 
                    icon={<Lock className="h-6 w-6 text-amber-500" />}
                    title="Unhackable Record"
                    value="100%"
                    description="Bitcoin's blockchain has never been hacked at the protocol level since inception in 2009"
                  />
                  <KeyStat 
                    icon={<Zap className="h-6 w-6 text-amber-500" />}
                    title="Network Uptime"
                    value="99.98%"
                    description="Bitcoin's network has maintained nearly perfect operational status for 14+ years"
                  />
                  <KeyStat 
                    icon={<Globe className="h-6 w-6 text-amber-500" />}
                    title="Global Access"
                    value="170+"
                    description="Countries where Bitcoin can be accessed, including those with restricted financial systems"
                  />
                </div>
              </section>
              
              {/* Section: Expert Perspectives */}
              <section className="mb-16" id="expert-perspectives">
                <SectionHeader 
                  title="Expert Perspectives" 
                  icon={<User className="h-6 w-6" />} 
                  id="expert-perspectives"
                />
                
                <div className="prose prose-invert max-w-none mb-8">
                  <p>
                    The growing recognition of Bitcoin's value preservation properties extends beyond cryptocurrency enthusiasts to include respected economists, financial strategists, and institutional investors. Their diverse perspectives provide important context for understanding Bitcoin's emerging role in the global financial system.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">Academic and Economic Analysis</h3>
                  <p>
                    Economists are increasingly recognizing Bitcoin's monetary properties. Researchers Ammous and Selgin have drawn parallels between Bitcoin and historical monetary systems, identifying Bitcoin as a modern implementation of "sound money" principles.<Citation num={32} url="https://www.cato.org/cato-journal/spring/summer-2015/synthetic-commodity-money" title="Synthetic Commodity Money" authors="George Selgin" year="2015" />
                  </p>
                  
                  <p>
                    Nobel laureate and economist Paul Krugman, while critical of Bitcoin's utility as a payment system, has acknowledged its potential as a "digital version of gold" – a store of value rather than a medium of exchange.<Citation num={33} url="https://www.nytimes.com/2018/07/31/opinion/transaction-costs-and-tethers-why-im-a-crypto-skeptic.html" title="Transaction Costs and Tethers: Why I'm a Crypto Skeptic" authors="Paul Krugman, New York Times" year="2018" /> This perspective aligns with the narrative of Bitcoin as "digital gold" rather than a replacement for everyday currency.
                  </p>
                </div>
                
                <ExpertInsight 
                  expert="Lyn Alden"
                  role="Investment Strategist"
                  photoUrl="/images/experts/lyn-alden.jpg"
                  points={[
                    "Emphasizes Bitcoin's fixed supply and deflationary nature as a hedge against inflation, noting that 'Bitcoin is the only asset with a provably fixed supply in a world of unprecedented monetary expansion.'",
                    "Highlights its potential as a neutral reserve asset in an increasingly multi-polar geopolitical world, positioning it as 'the most politically neutral form of money that exists.'",
                    "Views Bitcoin as a logical response to the unprecedented expansion of global monetary supply, noting that central bank balance sheets have expanded by over $20 trillion since 2008."
                  ]}
                />
                
                <ExpertInsight 
                  expert="Paul Tudor Jones"
                  role="Hedge Fund Manager and Investor"
                  photoUrl="/images/experts/paul-tudor-jones.jpg"
                  points={[
                    "Compares Bitcoin to gold, calling it a strong contender as a store of value, and in a 2020 market outlook letter wrote that Bitcoin 'reminds me of gold when I first got into the business in 1976.'",
                    "Scored Bitcoin highly on attributes like trustworthiness, liquidity, and portability in his thorough quantitative analysis, ranking it above gold, fiat currencies, and financial assets on several key metrics.",
                    "Described Bitcoin as 'the fastest horse in the race' against inflation, recommending it as a portfolio allocation specifically to hedge against monetary inflation."
                  ]}
                />
                
                <div className="bg-black/30 border border-amber-500/10 rounded-lg p-5 my-8">
                  <h4 className="text-lg font-semibold text-white mb-3">Institutional Adoption Timeline</h4>
                  <div className="relative border-l-2 border-amber-500/30 pl-8 ml-4 space-y-8">
                    <div className="relative">
                      <div className="absolute -left-[42px] h-6 w-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500">
                        <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                      </div>
                      <p className="text-amber-400 font-medium">August 2020</p>
                      <p className="text-white/80 mb-1">MicroStrategy becomes the first publicly traded company to adopt Bitcoin as a treasury reserve asset, initially purchasing $250 million worth.</p>
                      <p className="text-sm text-white/60">CEO Michael Saylor: "Bitcoin is a dependable store of value and an attractive investment asset with more long-term appreciation potential than holding cash."</p>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-[42px] h-6 w-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500">
                        <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                      </div>
                      <p className="text-amber-400 font-medium">October 2020</p>
                      <p className="text-white/80 mb-1">Square Inc. (now Block) invests $50 million in Bitcoin as part of its treasury reserves.</p>
                      <p className="text-sm text-white/60">Square whitepaper: "We believe that bitcoin has the potential to be a more ubiquitous currency in the future... For a company that is building products based on a more inclusive future, this investment is a step on that journey."</p>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-[42px] h-6 w-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500">
                        <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                      </div>
                      <p className="text-amber-400 font-medium">February 2021</p>
                      <p className="text-white/80 mb-1">Tesla announces $1.5 billion Bitcoin purchase and plans to accept Bitcoin as payment.</p>
                      <p className="text-sm text-white/60">Tesla SEC filing: "We invested an aggregate $1.50 billion in bitcoin... we expect to begin accepting bitcoin as a form of payment for our products in the near future."</p>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-[42px] h-6 w-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500">
                        <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                      </div>
                      <p className="text-amber-400 font-medium">2021 - 2022</p>
                      <p className="text-white/80 mb-1">Multiple publicly traded companies and institutions add Bitcoin to their balance sheets.</p>
                      <p className="text-sm text-white/60">By 2022, over 25 public companies held Bitcoin in treasury reserves, with allocations ranging from 0.2% to over 95% of their treasury.</p>
                    </div>
                  </div>
                </div>
                
                <ExpertInsight 
                  expert="Tim Draper"
                  role="Venture Capitalist"
                  photoUrl="/images/experts/tim-draper.jpg"
                  points={[
                    "Advocates for self-custody of Bitcoin, describing it as 'the safest form of personal money' and has consistently emphasized the importance of individuals controlling their own private keys.",
                    "Views Bitcoin as more secure than traditional banking systems due to its resistance to inflation and political risks, stating in multiple interviews that 'Bitcoin is a better currency than the dollar' specifically for value storage.",
                    "Predicts Bitcoin will continue to gain adoption as a store of value as traditional currencies deteriorate, famously forecasting a $250,000 Bitcoin price based on its utility as a store of value and medium of exchange."
                  ]}
                />
                
                <ExpertInsight 
                  expert="Nick Szabo"
                  role="Cryptographer and Computer Scientist"
                  photoUrl="/images/experts/nick-szabo.jpg"
                  points={[
                    "Discusses the historical importance of collectibles for wealth preservation, writing extensively about 'primitive money' and how Bitcoin represents the digital evolution of value storage methods that span thousands of years.",
                    "Draws parallels between ancient practices and Bitcoin's role as a modern store of value, noting that Bitcoin's scarcity is 'much more reliably enforced than the scarcity of gold, platinum, or other elements.'",
                    "Emphasizes Bitcoin's 'unforgeable costliness' as similar to gold but with superior digital properties, arguing that this property is the foundation of sound money throughout human history."
                  ]}
                />
                
                <ExpertInsight 
                  expert="Michael Saylor"
                  role="Executive Chairman of MicroStrategy"
                  photoUrl="/images/experts/michael-saylor.jpg"
                  points={[
                    "Pioneered the corporate treasury adoption of Bitcoin, converting over $4 billion of MicroStrategy's cash reserves into Bitcoin based on its superior value preservation properties.",
                    "Articulates Bitcoin as 'digital energy' that can store economic value without degradation over time, likening it to a battery that can store monetary energy indefinitely.",
                    "Argues that in a world of technological disruption, monetary inflation, and negative real interest rates, Bitcoin represents the optimal solution for preserving and growing corporate treasury value."
                  ]}
                />
                
                <div className="prose prose-invert max-w-none mt-8">
                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">Institutional Perspective Shift</h3>
                  <p>
                    Major financial institutions have increasingly recognized Bitcoin's potential role in portfolios. A 2021 survey by Fidelity Digital Assets found that 71% of institutional investors intend to buy or invest in digital assets in the future, with Bitcoin being the most popular choice.<Citation num={34} url="https://www.fidelitydigitalassets.com/research-and-insights/digital-asset-survey-2021" title="The Institutional Investor Digital Assets Study" authors="Fidelity Digital Assets" year="2021" />
                  </p>
                  
                  <p>
                    BlackRock, the world's largest asset manager with over $9 trillion in assets under management, has shifted from a critical stance on Bitcoin to offering Bitcoin investment products to clients. CEO Larry Fink, who once called Bitcoin an "index of money laundering," now describes it as "an international asset" and acknowledges its potential role in portfolios.<Citation num={35} url="https://www.cnbc.com/2023/07/13/blackrock-files-for-spot-bitcoin-etf-in-a-surprise-move-after-fidelity-and-others.html" title="BlackRock files for spot bitcoin ETF, a big move from world's largest asset manager" authors="CNBC" year="2023" />
                  </p>
                </div>
                
                <Quote 
                  text="Bitcoin scored at the top of the charts for liquidity, portability, and trustworthiness. It's a way of measuring value, and that gives it financial traits similar to gold. And it's also a portfolio diversifier with correlation characteristics that make it distinct from other asset classes."
                  author="Paul Tudor Jones"
                  role="Hedge Fund Manager"
                  source="CNBC Interview"
                  sourceUrl="https://www.cnbc.com/2020/05/11/paul-tudor-jones-calls-bitcoin-a-great-speculation-says-he-has-almost-2percent-of-his-assets-in-it.html"
                  className="mt-10"
                />
                
                <Quote 
                  text="One thing that's clear is that Bitcoin has evolved from what I would call a non-correlated speculative asset to now I think what's emerging as a distinct asset class for investors... I think we're going to see Bitcoin over time taking market share from gold."
                  author="Rick Rieder"
                  role="Chief Investment Officer, BlackRock"
                  source="CNBC Squawk Box"
                  sourceUrl="https://www.cnbc.com/video/2021/02/17/blackrocks-rick-rieder-on-bitcoin-allocation.html"
                  className="mt-8"
                />
              </section>
              
              {/* Section: Bitcoin vs. Traditional Stores of Value */}
              <section className="mb-16" id="comparative-analysis">
                <SectionHeader 
                  title="Bitcoin vs. Traditional Stores of Value" 
                  icon={<BarChart className="h-6 w-6" />}
                  id="comparative-analysis" 
                />
                
                <div className="prose prose-invert max-w-none">
                  <p>
                    A quantitative comparison between Bitcoin and traditional stores of value reveals significant differences in performance, accessibility, and practical utility as wealth preservation tools.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">Performance Metrics (2013-2023)</h3>
                  <div className="my-8 p-5 bg-gradient-to-r from-amber-950/30 to-orange-950/30 border border-amber-500/20 rounded-lg overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="border-b border-amber-500/20">
                          <th className="px-4 py-3 text-left text-amber-400">Asset</th>
                          <th className="px-4 py-3 text-left text-amber-400">10-Year CAGR</th>
                          <th className="px-4 py-3 text-left text-amber-400">Volatility</th>
                          <th className="px-4 py-3 text-left text-amber-400">Sharpe Ratio</th>
                          <th className="px-4 py-3 text-left text-amber-400">Correlation to S&P 500</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr className="border-b border-amber-500/10">
                          <td className="px-4 py-3 font-medium text-white">Bitcoin</td>
                          <td className="px-4 py-3 text-white/80">+38.9%</td>
                          <td className="px-4 py-3 text-white/80">68.7%</td>
                          <td className="px-4 py-3 text-white/80">0.57</td>
                          <td className="px-4 py-3 text-white/80">0.19</td>
                        </tr>
                        <tr className="border-b border-amber-500/10">
                          <td className="px-4 py-3 font-medium text-white">Gold</td>
                          <td className="px-4 py-3 text-white/80">+4.2%</td>
                          <td className="px-4 py-3 text-white/80">15.1%</td>
                          <td className="px-4 py-3 text-white/80">0.28</td>
                          <td className="px-4 py-3 text-white/80">0.02</td>
                        </tr>
                        <tr className="border-b border-amber-500/10">
                          <td className="px-4 py-3 font-medium text-white">S&P 500</td>
                          <td className="px-4 py-3 text-white/80">+10.8%</td>
                          <td className="px-4 py-3 text-white/80">16.4%</td>
                          <td className="px-4 py-3 text-white/80">0.66</td>
                          <td className="px-4 py-3 text-white/80">1.00</td>
                        </tr>
                        <tr className="border-b border-amber-500/10">
                          <td className="px-4 py-3 font-medium text-white">U.S. Real Estate</td>
                          <td className="px-4 py-3 text-white/80">+5.7%</td>
                          <td className="px-4 py-3 text-white/80">14.3%</td>
                          <td className="px-4 py-3 text-white/80">0.40</td>
                          <td className="px-4 py-3 text-white/80">0.59</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-white">U.S. Dollar Index</td>
                          <td className="px-4 py-3 text-white/80">+1.8%</td>
                          <td className="px-4 py-3 text-white/80">7.9%</td>
                          <td className="px-4 py-3 text-white/80">0.23</td>
                          <td className="px-4 py-3 text-white/80">-0.31</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-center text-white/60 mt-1">
                    Data sources: CoinGecko, Federal Reserve Economic Data, S&P Global<Citation num={36} url="https://www.spglobal.com/spdji/en/indices/equity/sp-500/#overview" title="S&P 500 Index Data" authors="S&P Global" year="2023" />
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">Bitcoin vs. Gold: Digital vs. Physical Gold</h3>
                  <p>
                    While gold has been the premier store of value for millennia, Bitcoin offers significant advantages in the digital age:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 my-6">
                    <div className="bg-gradient-to-r from-amber-950/30 to-orange-950/30 border border-amber-500/20 rounded-lg p-4">
                      <h4 className="text-amber-300 font-medium mb-2 flex items-center">
                        <Bitcoin className="h-4 w-4 mr-2 text-amber-400" />
                        Bitcoin Advantages
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">✓</span>
                          <span><strong>Verifiability:</strong> Instantly verifiable at zero cost vs. gold requiring specialized equipment (XRF analyzers cost $15,000-50,000)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">✓</span>
                          <span><strong>Transportation:</strong> Transferable globally in minutes at minimal cost vs. gold's insurance rates of 0.5-1.5% of value + security</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">✓</span>
                          <span><strong>Divisibility:</strong> Divisible to 8 decimal places (satoshis) vs. practical gold divisibility limitations</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">✓</span>
                          <span><strong>Storage:</strong> Zero physical footprint vs. gold's vault storage costs (~0.5-1% annually)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">✓</span>
                          <span><strong>Supply predictability:</strong> Algorithmically capped at 21 million vs. gold's ~1.5% annual supply increase</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-r from-amber-950/30 to-orange-950/30 border border-amber-500/20 rounded-lg p-4">
                      <h4 className="text-amber-300 font-medium mb-2 flex items-center">
                        <Coins className="h-4 w-4 mr-2 text-amber-400" />
                        Gold Advantages
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">✓</span>
                          <span><strong>Historical precedent:</strong> 5,000+ year history as money vs. Bitcoin's 14 years</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">✓</span>
                          <span><strong>Price stability:</strong> Lower volatility (15.1% vs. 68.7% for Bitcoin)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">✓</span>
                          <span><strong>Universal recognition:</strong> Recognized globally even without technological infrastructure</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">✓</span>
                          <span><strong>Physical utility:</strong> Has industrial and decorative uses beyond monetary value</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">✓</span>
                          <span><strong>Regulatory clarity:</strong> Well-established legal status globally</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <p>
                    Research by the World Gold Council acknowledges that "digital currencies such as Bitcoin have the potential to serve as a 'digital gold'" while noting that "Bitcoin's inherent volatility and lack of yield are limiting factors for institutional adoption."<Citation num={37} url="https://www.gold.org/goldhub/research/gold-focus-2023" title="Gold Focus 2023" authors="World Gold Council" year="2023" />
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">Bitcoin vs. Fiat Currencies</h3>
                  <p>
                    Quantitative analysis reveals significant differences between Bitcoin and fiat currencies as value preservation tools:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 my-6">
                    <div className="bg-gradient-to-r from-amber-950/30 to-orange-950/30 border border-amber-500/20 rounded-lg p-6">
                      <h4 className="text-amber-300 font-medium mb-4 flex items-center">
                        <BarChart className="h-5 w-5 mr-2 text-amber-400" />
                        Supply Metrics
                      </h4>
                      <ul className="space-y-4">
                        <li className="flex justify-between items-center border-b border-amber-500/10 pb-3">
                          <span className="text-white/90">Bitcoin Maximum Supply:</span>
                          <span className="font-semibold text-white ml-4">21,000,000 BTC</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-amber-500/10 pb-3">
                          <span className="text-white/90">Bitcoin Annual Inflation (2023):</span>
                          <span className="font-semibold text-white ml-4">~1.7%</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-amber-500/10 pb-3">
                          <span className="text-white/90">Post-halving Inflation (2024):</span>
                          <span className="font-semibold text-white ml-4">~0.85%</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-amber-500/10 pb-3">
                          <span className="text-white/90">USD M2 Growth (10-yr avg):</span>
                          <span className="font-semibold text-white ml-4">~6.1% annually</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span className="text-white/90">EUR M2 Growth (10-yr avg):</span>
                          <span className="font-semibold text-white ml-4">~5.4% annually</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-r from-amber-950/30 to-orange-950/30 border border-amber-500/20 rounded-lg p-6">
                      <h4 className="text-amber-300 font-medium mb-4 flex items-center">
                        <TrendingUp className="h-5 w-5 mr-2 text-amber-400" />
                        Purchasing Power Change (2013-2023)
                      </h4>
                      <ul className="space-y-4">
                        <li className="flex justify-between items-center border-b border-amber-500/10 pb-3">
                          <span className="text-white/90">Bitcoin:</span>
                          <span className="font-semibold text-green-500 ml-4">+290,000%</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-amber-500/10 pb-3">
                          <span className="text-white/90">U.S. Dollar:</span>
                          <span className="font-semibold text-red-500 ml-4">-26.3%</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-amber-500/10 pb-3">
                          <span className="text-white/90">Euro:</span>
                          <span className="font-semibold text-red-500 ml-4">-21.7%</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-amber-500/10 pb-3">
                          <span className="text-white/90">Japanese Yen:</span>
                          <span className="font-semibold text-red-500 ml-4">-33.5%</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span className="text-white/90">British Pound:</span>
                          <span className="font-semibold text-red-500 ml-4">-24.9%</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <p>
                    Economists at the St. Louis Federal Reserve note that "Bitcoin's fixed supply rule stands in stark contrast to current central banking practices" and that "this algorithmic commitment to a fixed money supply might explain its appeal as a potential inflation hedge."<Citation num={38} url="https://research.stlouisfed.org/publications/review/2021/02/05/decentralized-finance-on-blockchain-and-smart-contract-based-financial-markets" title="Decentralized Finance: On Blockchain- and Smart Contract-Based Financial Markets" authors="Federal Reserve Bank of St. Louis" year="2021" />
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">Bitcoin vs. Real Estate</h3>
                  <p>
                    While real estate has traditionally been a reliable store of value, Bitcoin offers certain advantages:
                  </p>
                  
                  <div className="my-8 p-5 bg-gradient-to-r from-amber-950/30 to-orange-950/30 border border-amber-500/20 rounded-lg overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="border-b border-amber-500/20">
                          <th className="px-4 py-3 text-left text-amber-400">Feature</th>
                          <th className="px-4 py-3 text-left text-amber-400">Bitcoin</th>
                          <th className="px-4 py-3 text-left text-amber-400">Real Estate</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr className="border-b border-amber-500/10">
                          <td className="px-4 py-3 font-medium text-white">Liquidity</td>
                          <td className="px-4 py-3 text-white/80">24/7 global markets with near-instant settlement</td>
                          <td className="px-4 py-3 text-white/80">30-90+ days average sales time, high transaction costs</td>
                        </tr>
                        <tr className="border-b border-amber-500/10">
                          <td className="px-4 py-3 font-medium text-white">Carrying Costs</td>
                          <td className="px-4 py-3 text-white/80">Minimal to zero for self-custody</td>
                          <td className="px-4 py-3 text-white/80">Property taxes, insurance, maintenance (2-5% annually)</td>
                        </tr>
                        <tr className="border-b border-amber-500/10">
                          <td className="px-4 py-3 font-medium text-white">Divisibility</td>
                          <td className="px-4 py-3 text-white/80">Satoshis (0.00000001 BTC) allow micro-purchases</td>
                          <td className="px-4 py-3 text-white/80">Limited (REITs and new tokenization platforms excluded)</td>
                        </tr>
                        <tr className="border-b border-amber-500/10">
                          <td className="px-4 py-3 font-medium text-white">Income Generation</td>
                          <td className="px-4 py-3 text-white/80">Limited options through lending platforms</td>
                          <td className="px-4 py-3 text-white/80">Rental income (3-6% annual yield on average)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-white">Jurisdictional Exposure</td>
                          <td className="px-4 py-3 text-white/80">Global asset, independent of any single legal system</td>
                          <td className="px-4 py-3 text-white/80">Subject to local laws, taxes, and regulations</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <p className="text-white/90 mt-6 mb-4">
                    Major financial institutions have increasingly recognized Bitcoin's potential role in portfolios. A 2021 survey by Fidelity Digital Assets found that 71% of institutional investors intend to buy or invest in digital assets in the future, with Bitcoin being the most popular choice.<Citation num={39} url="https://www.fidelitydigitalassets.com/research-and-insights/2021-institutional-investor-digital-assets-study" title="The Institutional Investor Digital Assets Study" authors="Fidelity Digital Assets" year="2021" />
                  </p>
                  
                  <p className="text-white/90 mb-4">
                    According to research from the National Bureau of Economic Research, "the historically-documented average real returns of 7% for equities and 2% for housing represent realized, not expected, returns."<Citation num={40} url="https://www.nber.org/papers/w20458" title="Housing Bubbles" authors="Edward Glaeser and Charles Nathanson" year="2014" /> This highlights that while real estate provides moderate returns, it underperforms equities as a pure investment, while Bitcoin has outperformed both over its lifetime.
                  </p>
                </div>
              </section>
              
              {/* Section: Practical Considerations */}
              <section className="mb-16" id="practical-considerations">
                <SectionHeader 
                  title="Practical Considerations" 
                  icon={<FileText className="h-6 w-6" />}
                  id="practical-considerations" 
                />
                
                <div className="prose prose-invert max-w-none">
                  <p>
                    While Bitcoin offers compelling attributes for value preservation, practical implementation requires careful consideration:
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">Security and Self-Custody</h3>
                  <p>
                    Self-custody of Bitcoin requires responsible key management practices. As entrepreneur Brock Pierce advises, there's importance in "self-custody for protecting wealth in crypto."<Citation num={2} url="https://cointelegraph.com/magazine/bitcoin-ogs-experts-how-to-protect-your-crypto/" title="Cointelegraph: Bitcoin OGs & Experts - How To Protect Your Crypto" /> This typically involves hardware wallets, proper backup procedures, and security best practices.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">Volatility Management</h3>
                  <p>
                    Bitcoin's price volatility presents challenges for short-term value preservation. Cointelegraph suggests that individuals should focus on "diversification and risk management"<Citation num={4} url="https://cointelegraph.com/learn/how-to-start-preserving-wealth-with-crypto-an-easy-guide-to-stablecoins-and-bitcoin" title="Cointelegraph: How to Start Preserving Wealth with Crypto" /> when incorporating Bitcoin into a wealth preservation strategy.
                  </p>
                  <p>
                    However, for long-term holders, this volatility has historically trended upward. As Pierce notes, Bitcoin should be seen "as a long-term investment tool rather than a speculative asset."<Citation num={2} url="https://cointelegraph.com/magazine/bitcoin-ogs-experts-how-to-protect-your-crypto/" title="Cointelegraph: Bitcoin OGs & Experts - How To Protect Your Crypto" />
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">Regulatory Environment</h3>
                  <p>
                    While Bitcoin's decentralized nature provides resistance to direct control, the regulatory environment for exchanges, on-ramps, and service providers continues to evolve. Value preservation strategies should account for potential regulatory changes in relevant jurisdictions.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">Education and Understanding</h3>
                  <p>
                    Effective use of Bitcoin for value preservation requires education. Pierce advises "gradual learning for new investors" entering the space.<Citation num={2} url="https://cointelegraph.com/magazine/bitcoin-ogs-experts-how-to-protect-your-crypto/" title="Cointelegraph: Bitcoin OGs & Experts - How To Protect Your Crypto" /> Understanding Bitcoin's technical foundations, economic properties, and security model is essential for confident wealth preservation.
                  </p>
                </div>
              </section>
              
              {/* Section: Future Outlook */}
              <section className="mb-16" id="future-outlook">
                <SectionHeader 
                  title="Future Outlook" 
                  icon={<TrendingUp className="h-6 w-6" />}
                  id="future-outlook" 
                />
                
                <div className="prose prose-invert max-w-none">
                  <p>
                    Looking ahead, several key trends are likely to shape Bitcoin's evolving role in value preservation:
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">Institutional Adoption Acceleration</h3>
                  <p>
                    The approval of spot Bitcoin ETFs in multiple jurisdictions marks a significant milestone, reducing barriers to entry for traditional investors. Research from Fidelity Digital Assets indicates that "by 2026, over 25% of institutional investors globally will likely have exposure to Bitcoin in some form."<Citation num={40} url="https://www.fidelitydigitalassets.com/research-and-insights/digital-asset-outlook-2023" title="Digital Asset Outlook 2023" authors="Fidelity Digital Assets" year="2023" />
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">Geopolitical and Monetary Catalysts</h3>
                  <p>
                    The ongoing reconfiguration of the global monetary system creates potential catalysts for Bitcoin adoption. Deutsche Bank research identifies several accelerating factors, including "continued expansion of global money supplies, increasing currency controls in emerging markets, and growing demand for non-sovereign assets in a multipolar world."<Citation num={41} url="https://www.dbresearch.com/PROD/RPS_EN-PROD/The_Future_of_Payments%3A_Part_III__Digital_Currencies%3A_the_Ultimate_Hard_Power_Tool/RPS_EN_DOC_VIEW.calias?rwnode=PROD0000000000464258&ProdCollection=PROD0000000000505105" title="The Future of Payments: Part III. Digital Currencies: the Ultimate Hard Power Tool" authors="Deutsche Bank Research" year="2021" />
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">Technical Evolution</h3>
                  <p>
                    Bitcoin's protocol continues to evolve in ways that enhance its utility as a value preservation tool. Recent developments including Taproot, Schnorr signatures, and Lightning Network improvements have enhanced privacy, scalability, and programmability while maintaining Bitcoin's core value proposition.<Citation num={42} url="https://bitcoinmagazine.com/technical/taproot-complete-journey-scaling-bitcoin" title="A Complete Guide To The Taproot Upgrade" authors="Bitcoin Magazine" year="2021" />
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">Generational Wealth Transfer</h3>
                  <p>
                    According to Cerulli Associates, approximately $68 trillion in wealth will transfer from Baby Boomers to Millennials and Generation Z over the next 25 years in the United States alone. Bank of America research found that 75% of Millennials believe crypto is the future of money, suggesting increased Bitcoin allocation in wealth preservation strategies.<Citation num={43} url="https://www.cerulli.com/press-releases/cerulli-anticipates-68-trillion-wealth-transfer-over-25-years" title="Cerulli Anticipates $68 Trillion Wealth Transfer" authors="Cerulli Associates" year="2021" />
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">Challenges and Counterforces</h3>
                  <p>
                    Despite positive indicators, several factors may challenge Bitcoin's trajectory as a value preservation tool, including regulatory uncertainty, competition from CBDCs and stablecoins, technical risks in the broader ecosystem, and educational barriers to adoption.<Citation num={44} url="https://www.imf.org/en/Publications/fintech-notes/Issues/2023/04/14/Regulation-of-Crypto-Assets-530869" title="Regulation of Crypto Assets" authors="International Monetary Fund" year="2023" />
                  </p>
                  
                  <p>
                    The most likely scenario involves gradual integration into the existing financial system rather than wholesale replacement. In this future, Bitcoin would serve as a complementary, uncorrelated asset that provides unique protections against specific forms of monetary and political risk.
                  </p>
                </div>
                
                <Quote 
                  text="I believe in the long term, we're all moving toward a more digital world. As that happens, Bitcoin specifically has some characteristics as a scarce object that could actually become valuable over the long term."
                  author="Larry Fink"
                  role="CEO, BlackRock"
                  source="CNBC Interview"
                  sourceUrl="https://www.cnbc.com/video/2023/07/13/blackrock-ceo-larry-fink-explains-why-the-worlds-largest-asset-manager-filed-for-a-spot-bitcoin-etf.html"
                  className="mt-8"
                />
              </section>
              
              {/* Conclusion */}
              <section className="mb-16" id="conclusion">
                <SectionHeader 
                  title="Conclusion" 
                  icon={<BookOpen className="h-6 w-6" />}
                  id="conclusion" 
                />
                
                <div className="prose prose-invert max-w-none">
                  <p>
                    Bitcoin represents a significant innovation in value preservation technology, addressing many of the limitations inherent in traditional methods while introducing unique capabilities previously impossible in the pre-digital era.
                  </p>
                  
                  <p>
                    Its fixed supply, cryptographic security, self-custody model, global accessibility, network effects, and continuous operation provide a compelling set of attributes for individuals and institutions seeking wealth preservation in an increasingly uncertain economic landscape.
                  </p>
                  
                  <p>
                    While challenges remain—including price volatility, regulatory uncertainty, and implementation complexity—Bitcoin has demonstrated remarkable resilience and utility as a value preservation tool during its relatively short existence. As institutional adoption accelerates and the technology continues to mature, Bitcoin's role in wealth preservation strategies will likely expand.
                  </p>
                  
                  <p>
                    For those interested in exploring Bitcoin's potential for value preservation, a thoughtful approach involving education, proper security practices, and appropriate allocation within a diversified portfolio offers the most prudent path forward. Whether as a hedge against monetary inflation, a tool for financial sovereignty, or simply an uncorrelated asset in a balanced portfolio, Bitcoin offers unique properties worthy of consideration in the modern investor's toolkit.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-amber-950/20 to-black/20 border border-amber-500/20 rounded-lg p-5 mt-8">
                  <div className="flex items-start">
                    <div className="text-amber-500 mr-4 mt-1">
                      <Info className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Educational Disclaimer</h4>
                      <p className="text-white/80 text-sm">
                        This article is provided for educational and informational purposes only and should not be construed as financial advice. Bitcoin and other digital assets involve significant risk. Past performance is not indicative of future results. Readers should conduct their own research and consult with financial and tax professionals before making investment decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Sources Section */}
              <section className="mt-20 pt-10 border-t border-amber-500/20">
                <h2 className="text-2xl font-bold text-white mb-6">Sources</h2>
                
                <div className="bg-black/40 border border-amber-500/20 rounded-lg p-6">
                  <SourceItem 
                    num={1}
                    title="Bitcoin Is The Ultimate Wealth Preservation Technology"
                    url="https://bitcoinmagazine.com/culture/bitcoin-is-ultimate-wealth-preservation"
                    publication="Bitcoin Magazine"
                    authors="Leon Wankum"
                    date="2022"
                  />
                  
                  <SourceItem 
                    num={2}
                    title="Bitcoin OGs & Experts: How To Protect Your Crypto"
                    url="https://cointelegraph.com/magazine/bitcoin-ogs-experts-how-to-protect-your-crypto/"
                    publication="Cointelegraph"
                    date="2022"
                  />
                  
                  <SourceItem 
                    num={3}
                    title="Bitcoin's Role in Wealth Preservation During Economic Uncertainty"
                    url="https://www.techtimes.com/articles/299254/20231129/bitcoins-role-in-wealth-preservation-during-economic-uncertainty.htm"
                    publication="Tech Times"
                    date="2023"
                  />
                  
                  <SourceItem 
                    num={4}
                    title="How to Start Preserving Wealth with Crypto: An Easy Guide to Stablecoins and Bitcoin"
                    url="https://cointelegraph.com/learn/how-to-start-preserving-wealth-with-crypto-an-easy-guide-to-stablecoins-and-bitcoin"
                    publication="Cointelegraph"
                    date="2023"
                  />
                  
                  <SourceItem 
                    num={5}
                    title="Shelling Out: The Origins of Money"
                    url="https://nakamotoinstitute.org/shelling-out/"
                    publication="Nakamoto Institute"
                    authors="Nick Szabo"
                    date="2002"
                  />
                  
                  <SourceItem 
                    num={6}
                    title="Economic Lowdown Podcast Series, Episode 9: Functions of Money"
                    url="https://www.stlouisfed.org/education/economic-lowdown-podcast-series/episode-9-functions-of-money"
                    publication="Federal Reserve Bank of St. Louis"
                    date="2020"
                  />
                  
                  <SourceItem 
                    num={7}
                    title="Recent Balance Sheet Trends"
                    url="https://www.federalreserve.gov/monetarypolicy/bst_recenttrends.htm"
                    publication="Federal Reserve"
                    date="2022"
                  />
                  
                  <SourceItem 
                    num={8}
                    title="The Bitcoin Standard: The Decentralized Alternative to Central Banking"
                    url="https://saifedean.com/thebitcoinstandard"
                    publication="Wiley"
                    authors="Saifedean Ammous"
                    date="2018"
                  />
                  
                  <SourceItem 
                    num={9}
                    title="The cryptocurrency ecosystem"
                    url="https://www.bis.org/publ/qtrpdf/r_qt1709f.htm"
                    publication="Bank for International Settlements"
                    date="2017"
                  />
                  
                  <SourceItem 
                    num={10}
                    title="World Hyperinflations"
                    url="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2130109"
                    publication="SSRN"
                    authors="Steve H. Hanke and Nicholas Krus"
                    date="2012"
                  />
                  
                  <SourceItem 
                    num={11}
                    title="CPI Inflation Calculator"
                    url="https://www.bls.gov/data/inflation_calculator.htm"
                    publication="U.S. Bureau of Labor Statistics"
                    date="2023"
                  />
                  
                  <SourceItem 
                    num={12}
                    title="Gold and Economic Freedom"
                    url="https://www.constitution.org/mon/greenspan_gold.htm"
                    publication="The Constitution Society"
                    authors="Alan Greenspan"
                    date="1966"
                  />
                  
                  <SourceItem 
                    num={13}
                    title="Exclusive: Fake-branded bars slip dirty gold into world markets"
                    url="https://www.reuters.com/article/us-gold-swiss-fakes-exclusive/exclusive-fake-branded-bars-slip-dirty-gold-into-world-markets-idUSKCN1VI0DD"
                    publication="Reuters"
                    authors="Peter Hobson"
                    date="2019"
                  />
                  
                  <SourceItem 
                    num={14}
                    title="The relevance of gold as a strategic asset"
                    url="https://www.gold.org/goldhub/research/relevance-gold-strategic-asset-2022"
                    publication="World Gold Council"
                    date="2022"
                  />
                  
                  <SourceItem 
                    num={15}
                    title="Gold Not Glittering: An Analysis of the Morning London Gold Fix"
                    url="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2404264"
                    publication="SSRN"
                    authors="Rosa Abrantes-Metz and Albert Metz"
                    date="2014"
                  />
                  
                  <SourceItem 
                    num={16}
                    title="The Rate of Return on Everything, 1870–2015"
                    url="https://www.nber.org/papers/w24871"
                    publication="National Bureau of Economic Research"
                    authors="Òscar Jordà, Katharina Knoll, Dmitry Kuvshinov, Moritz Schularick, and Alan M. Taylor"
                    date="2019"
                  />
                  
                  <SourceItem 
                    num={17}
                    title="The Mystery of Capital"
                    url="https://www.imf.org/external/pubs/ft/fandd/2001/03/desoto.htm"
                    publication="International Monetary Fund"
                    authors="Hernando de Soto"
                    date="2001"
                  />
                  
                  <SourceItem 
                    num={18}
                    title="Cyprus: An Assessment of Financial Sector Reforms"
                    url="https://www.imf.org/external/pubs/ft/survey/so/2013/car051513a.htm"
                    publication="International Monetary Fund"
                    date="2013"
                  />
                  
                  <SourceItem 
                    num={19}
                    title="Cryptocurrencies: looking beyond the hype"
                    url="https://www.bis.org/publ/qtrpdf/r_qt1809i.htm"
                    publication="Bank for International Settlements"
                    date="2018"
                  />
                  
                  <SourceItem 
                    num={20}
                    title="CS 251: Cryptocurrencies and Blockchain Technologies"
                    url="https://crypto.stanford.edu/cs251/syllabus.html"
                    publication="Stanford University"
                    authors="Dan Boneh"
                    date="2021"
                  />
                  
                  <SourceItem 
                    num={21}
                    title="Bit Gold"
                    url="https://nakamotoinstitute.org/bit-gold/"
                    publication="Nakamoto Institute"
                    authors="Nick Szabo"
                    date="2005"
                  />
                  
                  <SourceItem 
                    num={22}
                    title="Blockchain: Enigma. Paradox. Opportunity"
                    url="https://www2.deloitte.com/content/dam/Deloitte/uk/Documents/Innovation/deloitte-uk-what-is-blockchain-2016.pdf"
                    publication="Deloitte"
                    date="2016"
                  />
                  
                  <SourceItem 
                    num={23}
                    title="Big Ideas 2022"
                    url="https://ark-invest.com/big-ideas-2022/"
                    publication="ARK Invest"
                    date="2022"
                  />
                  
                  <SourceItem 
                    num={24}
                    title="Check Your Financial Privilege"
                    url="https://bitcoinmagazine.com/culture/check-your-financial-privilege"
                    publication="Bitcoin Magazine"
                    authors="Alex Gladstein"
                    date="2021"
                  />
                  
                  <SourceItem 
                    num={25}
                    title="Yale Study Examines Cryptocurrency Returns"
                    url="https://som.yale.edu/story/2018/yale-study-examines-cryptocurrency-returns"
                    publication="Yale School of Management"
                    authors="William Goetzmann"
                    date="2018"
                  />
                  
                  <SourceItem 
                    num={26}
                    title="Kraken Intelligence Reports"
                    url="https://kraken.com/intelligence/reports"
                    publication="Kraken"
                    date="2022"
                  />
                  
                  <SourceItem 
                    num={27}
                    title="Antifragile: Things That Gain from Disorder"
                    url="https://www.fooledbyrandomness.com/antifragile.html"
                    publication="Random House"
                    authors="Nassim Nicholas Taleb"
                    date="2012"
                  />
                  
                  <SourceItem 
                    num={28}
                    title="Bitcoin Investment Thesis"
                    url="https://www.fidelitydigitalassets.com/research-and-insights/bitcoin-alternative-investment"
                    publication="Fidelity Digital Assets"
                    date="2020"
                  />
                  
                  <SourceItem 
                    num={29}
                    title="Global Findex Database"
                    url="https://www.worldbank.org/en/publication/globalfindex"
                    publication="World Bank"
                    date="2021"
                  />
                  
                  <SourceItem 
                    num={30}
                    title="Financial Inclusion and Freedom: How Bitcoin Can Address Global Financial Censorship"
                    url="https://www.mdpi.com/1911-8074/14/4/170"
                    publication="Journal of Risk and Financial Management"
                    authors="Steven Grove and Jerard Duffin"
                    date="2021"
                  />
                  
                  <SourceItem 
                    num={31}
                    title="Metcalfe's Law and Bitcoin Adoption"
                    url="https://nydig.com/research/report-metcalfes-law-and-bitcoin-adoption/"
                    publication="NYDIG Research"
                    date="2022"
                  />
                  
                  <SourceItem 
                    num={32}
                    title="Synthetic Commodity Money"
                    url="https://www.cato.org/cato-journal/spring/summer-2015/synthetic-commodity-money"
                    publication="Cato Journal"
                    authors="George Selgin"
                    date="2015"
                  />
                  
                  <SourceItem 
                    num={33}
                    title="Transaction Costs and Tethers: Why I'm a Crypto Skeptic"
                    url="https://www.nytimes.com/2018/07/31/opinion/transaction-costs-and-tethers-why-im-a-crypto-skeptic.html"
                    publication="New York Times"
                    authors="Paul Krugman"
                    date="2018"
                  />
                  
                  <SourceItem 
                    num={34}
                    title="The Institutional Investor Digital Assets Study"
                    url="https://www.fidelitydigitalassets.com/research-and-insights/digital-asset-survey-2021"
                    publication="Fidelity Digital Assets"
                    date="2021"
                  />
                  
                  <SourceItem 
                    num={35}
                    title="BlackRock files for spot bitcoin ETF, a big move from world's largest asset manager"
                    url="https://www.cnbc.com/2023/07/13/blackrock-files-for-spot-bitcoin-etf-in-a-surprise-move-after-fidelity-and-others.html"
                    publication="CNBC"
                    date="2023"
                  />
                  
                  <SourceItem 
                    num={36}
                    title="S&P 500 Index Data"
                    url="https://www.spglobal.com/spdji/en/indices/equity/sp-500/#overview"
                    publication="S&P Global"
                    date="2023"
                  />
                  
                  <SourceItem 
                    num={37}
                    title="Gold Focus 2023"
                    url="https://www.gold.org/goldhub/research/gold-focus-2023"
                    publication="World Gold Council"
                    date="2023"
                  />
                  
                  <SourceItem 
                    num={38}
                    title="Decentralized Finance: On Blockchain- and Smart Contract-Based Financial Markets"
                    url="https://research.stlouisfed.org/publications/review/2021/02/05/decentralized-finance-on-blockchain-and-smart-contract-based-financial-markets"
                    publication="Federal Reserve Bank of St. Louis"
                    date="2021"
                  />
                  
                  <SourceItem 
                    num={39}
                    title="Housing Bubbles"
                    url="https://www.nber.org/papers/w20458"
                    publication="National Bureau of Economic Research"
                    authors="Edward Glaeser and Charles Nathanson"
                    date="2014"
                  />
                  
                  <SourceItem 
                    num={40}
                    title="Digital Asset Outlook 2023"
                    url="https://www.fidelitydigitalassets.com/research-and-insights/digital-asset-outlook-2023"
                    publication="Fidelity Digital Assets"
                    date="2023"
                  />
                  
                  <SourceItem 
                    num={41}
                    title="The Future of Payments: Part III. Digital Currencies: the Ultimate Hard Power Tool"
                    url="https://www2.deloitte.com/content/dam/Deloitte/uk/Documents/Innovation/deloitte-uk-what-is-blockchain-2016.pdf"
                    publication="Deutsche Bank Research"
                    date="2021"
                  />
                  
                  <SourceItem 
                    num={42}
                    title="A Complete Guide To The Taproot Upgrade"
                    url="https://bitcoinmagazine.com/technical/taproot-complete-journey-scaling-bitcoin"
                    publication="Bitcoin Magazine"
                    date="2021"
                  />
                  
                  <SourceItem 
                    num={43}
                    title="Cerulli Anticipates $68 Trillion Wealth Transfer"
                    url="https://www.cerulli.com/press-releases/cerulli-anticipates-68-trillion-wealth-transfer-over-25-years"
                    publication="Cerulli Associates"
                    date="2021"
                  />
                  
                  <SourceItem 
                    num={44}
                    title="Regulation of Crypto Assets"
                    url="https://www.imf.org/en/Publications/fintech-notes/Issues/2023/04/14/Regulation-of-Crypto-Assets-530869"
                    publication="International Monetary Fund"
                    date="2023"
                  />
                </div>
              </section>
              
              {/* CTA Section */}
              <div className="mt-20">
                <div className="bg-gradient-to-br from-amber-950/20 to-black/20 border border-amber-500/20 rounded-xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Continue Your Bitcoin Journey</h3>
                  <p className="text-white/80 max-w-2xl mx-auto mb-6">
                    Ready to learn more about Bitcoin as a store of value? Explore our comprehensive learning resources and courses designed to help you understand the future of money.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button asChild variant="outline" className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10">
                      <Link to="/resources" className="flex items-center gap-2">
                        Explore Resources <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black">
                      <Link to="/learn">Start Learning</Link>
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Educational Disclaimer */}
              <div className="mt-12 bg-black/50 border border-amber-500/20 rounded-lg p-4 text-sm text-white/70">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <p>
                    <strong className="text-amber-500">Educational Content Only:</strong> This article is provided for informational and educational purposes only. It does not constitute financial advice, investment recommendations, or an endorsement of any specific asset. Digital assets like Bitcoin involve significant risk and volatility. Always conduct your own research and consult with qualified financial advisors before making investment decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ValuePreservationArticle; 