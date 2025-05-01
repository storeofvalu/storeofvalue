import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  BookOpen, 
  FileText, 
  Video, 
  Headphones, 
  BookMarked,
  MessageCircle,
  Heart,
  Sparkles,
  BookOpenCheck,
  Bookmark,
  Youtube,
  Music,
  Search,
  Library
} from 'lucide-react';
import BitcoinLogoIcon from '../components/BitcoinLogoIcon';

// Styled resource card component with animation
const ResourceCard = ({ title, author, description, link, index }: { title: string, author: string, description: string, link: string, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card 
        className={`h-full flex flex-col overflow-hidden transition-all duration-300 ${isHovered ? 'shadow-lg transform -translate-y-1' : 'shadow-sm'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`h-1 w-full bg-gradient-to-r from-amber-500 to-amber-600`}></div>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl">{title}</CardTitle>
              <CardDescription className="mt-1">by {author}</CardDescription>
            </div>
            <div className="bg-amber-500/10 rounded-full p-2 hidden md:block">
              <BookMarked className="h-5 w-5 text-amber-500" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" asChild className={`w-full border-amber-500/30 ${isHovered ? 'bg-amber-500/5' : ''}`}>
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 text-amber-600 hover:text-amber-700"
            >
              View Resource 
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ExternalLink size={16} />
              </motion.div>
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

// Styled article card component with animation
const ArticleCard = ({ title, author, date, description, link, index }: { title: string, author: string, date: string, description: string, link: string, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card 
        className={`h-full flex flex-col overflow-hidden transition-all duration-300 ${isHovered ? 'shadow-lg transform -translate-y-1' : 'shadow-sm'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`h-1 w-full bg-gradient-to-r from-blue-500 to-blue-600`}></div>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl">{title}</CardTitle>
              <CardDescription className="mt-1">by {author} • {date}</CardDescription>
            </div>
            <div className="bg-blue-500/10 rounded-full p-2 hidden md:block">
              <FileText className="h-5 w-5 text-blue-500" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" asChild className={`w-full border-blue-500/30 ${isHovered ? 'bg-blue-500/5' : ''}`}>
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700"
            >
              Read Article 
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ExternalLink size={16} />
              </motion.div>
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

// Styled video card component with animation
const VideoCard = ({ title, duration, description, link, index }: { title: string, duration: string, description: string, link: string, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card 
        className={`h-full flex flex-col overflow-hidden transition-all duration-300 ${isHovered ? 'shadow-lg transform -translate-y-1' : 'shadow-sm'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`h-1 w-full bg-gradient-to-r from-red-500 to-red-600`}></div>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl">{title}</CardTitle>
              <CardDescription className="mt-1">{duration}</CardDescription>
            </div>
            <div className="bg-red-500/10 rounded-full p-2 hidden md:block">
              <Youtube className="h-5 w-5 text-red-500" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" asChild className={`w-full border-red-500/30 ${isHovered ? 'bg-red-500/5' : ''}`}>
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 text-red-600 hover:text-red-700"
            >
              Watch Video 
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ExternalLink size={16} />
              </motion.div>
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

// Styled podcast card component with animation
const PodcastCard = ({ title, host, description, link, index }: { title: string, host: string, description: string, link: string, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card 
        className={`h-full flex flex-col overflow-hidden transition-all duration-300 ${isHovered ? 'shadow-lg transform -translate-y-1' : 'shadow-sm'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`h-1 w-full bg-gradient-to-r from-green-500 to-green-600`}></div>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl">{title}</CardTitle>
              <CardDescription className="mt-1">Hosted by {host}</CardDescription>
            </div>
            <div className="bg-green-500/10 rounded-full p-2 hidden md:block">
              <Music className="h-5 w-5 text-green-500" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" asChild className={`w-full border-green-500/30 ${isHovered ? 'bg-green-500/5' : ''}`}>
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 text-green-600 hover:text-green-700"
            >
              Listen to Podcast 
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ExternalLink size={16} />
              </motion.div>
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const ResourcesPage = () => {
  const [activeTab, setActiveTab] = useState("books");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Bitcoin pattern background */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-5">
          <div className="absolute w-full h-full">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
                <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                  <rect width="100" height="100" fill="url(#smallGrid)" />
                  <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-background to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <Badge className="mb-6 px-3 py-1 bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 transition-colors">
                <Library className="mr-1 h-3.5 w-3.5" />
                <span>Knowledge Base</span>
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Bitcoin Resources
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our curated collection of resources to deepen your understanding of Bitcoin as a store of value.
            </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            >
              <div className="bg-card rounded-lg p-4 text-center hover:bg-card/80 transition-colors">
                <div className="bg-amber-500/10 rounded-full p-3 w-14 h-14 mx-auto mb-3 flex items-center justify-center">
                  <BookOpen className="h-7 w-7 text-amber-500" />
                </div>
                <div className="text-lg font-medium">Books</div>
                <div className="text-sm text-muted-foreground">10+ titles</div>
              </div>
              
              <div className="bg-card rounded-lg p-4 text-center hover:bg-card/80 transition-colors">
                <div className="bg-blue-500/10 rounded-full p-3 w-14 h-14 mx-auto mb-3 flex items-center justify-center">
                  <FileText className="h-7 w-7 text-blue-500" />
                </div>
                <div className="text-lg font-medium">Articles</div>
                <div className="text-sm text-muted-foreground">8+ pieces</div>
              </div>
              
              <div className="bg-card rounded-lg p-4 text-center hover:bg-card/80 transition-colors">
                <div className="bg-red-500/10 rounded-full p-3 w-14 h-14 mx-auto mb-3 flex items-center justify-center">
                  <Video className="h-7 w-7 text-red-500" />
                </div>
                <div className="text-lg font-medium">Videos</div>
                <div className="text-sm text-muted-foreground">10+ recordings</div>
              </div>
              
              <div className="bg-card rounded-lg p-4 text-center hover:bg-card/80 transition-colors">
                <div className="bg-green-500/10 rounded-full p-3 w-14 h-14 mx-auto mb-3 flex items-center justify-center">
                  <Headphones className="h-7 w-7 text-green-500" />
                </div>
                <div className="text-lg font-medium">Podcasts</div>
                <div className="text-sm text-muted-foreground">10+ shows</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-8"
            >
              <div className="relative max-w-xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-4 py-2 border border-border rounded-md bg-card focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50"
                  placeholder="Search all resources..."
                />
              </div>
            </motion.div>
          </div>
        </div>
          </section>
          
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Tab navigation */}
          <Tabs 
            defaultValue="books" 
            className="w-full"
            onValueChange={(value) => setActiveTab(value)}
          >
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              
              <div className="relative flex justify-center">
                <div className="bg-background px-2">
                  <TabsList className="grid w-full max-w-2xl grid-cols-2 md:grid-cols-4 gap-1 bg-card/50">
                    <TabsTrigger 
                      value="books" 
                      className="data-[state=active]:bg-amber-500/10 data-[state=active]:text-amber-600 data-[state=active]:shadow-none"
                    >
                      <BookOpen className="mr-2 h-4 w-4" />
                      Books
                    </TabsTrigger>
                    <TabsTrigger 
                      value="articles" 
                      className="data-[state=active]:bg-blue-500/10 data-[state=active]:text-blue-600 data-[state=active]:shadow-none"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      Articles
                    </TabsTrigger>
                    <TabsTrigger 
                      value="videos" 
                      className="data-[state=active]:bg-red-500/10 data-[state=active]:text-red-600 data-[state=active]:shadow-none"
                    >
                      <Video className="mr-2 h-4 w-4" />
                      Videos
                    </TabsTrigger>
                    <TabsTrigger 
                      value="podcasts" 
                      className="data-[state=active]:bg-green-500/10 data-[state=active]:text-green-600 data-[state=active]:shadow-none"
                    >
                      <Headphones className="mr-2 h-4 w-4" />
                      Podcasts
                    </TabsTrigger>
              </TabsList>
                </div>
              </div>
            </div>
            
            <AnimatePresence mode="wait">
            <TabsContent value="books" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ResourceCard 
                  title="The Bitcoin Standard" 
                  author="Saifedean Ammous"
                  description="The definitive exploration of Bitcoin's role as sound money in the digital age and its historical context."
                    link="https://saifedean.com/tbs"
                    index={0}
                />
                <ResourceCard 
                  title="Layered Money" 
                  author="Nik Bhatia"
                  description="A framework for understanding money as a layered system and Bitcoin's position in this new paradigm."
                    link="https://www.layeredmoney.com/"
                    index={1}
                />
                <ResourceCard 
                  title="The Price of Tomorrow" 
                  author="Jeff Booth"
                  description="How technology-driven deflation necessitates a new monetary paradigm, with Bitcoin as a solution."
                    link="https://thepriceoftomorrow.com/"
                    index={2}
                />
                <ResourceCard 
                  title="Inventing Bitcoin" 
                  author="Yan Pritzker"
                  description="An accessible explanation of Bitcoin's technical foundations and monetary properties."
                    link="https://www.swanbitcoin.com/inventing-bitcoin/"
                    index={3}
                />
                <ResourceCard 
                  title="The Fiat Standard" 
                  author="Saifedean Ammous"
                  description="A follow-up to The Bitcoin Standard that examines the fiat monetary system and contrasts it with Bitcoin."
                    link="https://saifedean.com/tfs"
                    index={4}
                />
                <ResourceCard 
                  title="Bitcoin: Sovereignty Through Mathematics" 
                  author="Knut Svanholm"
                  description="An exploration of how Bitcoin enables individual sovereignty through its mathematical principles."
                    link="https://books.apple.com/de/audiobook/bitcoin-sovereignty-through-mathematics-unabridged/id1495058631"
                    index={5}
                />
                <ResourceCard 
                  title="Why Buy Bitcoin" 
                  author="Andy Edstrom"
                  description="A straightforward investment case for Bitcoin from a wealth manager's perspective."
                    link="https://www.youtube.com/watch?v=ZKaXGUuvgPg"
                    index={6}
                />
                <ResourceCard 
                  title="21 Lessons" 
                  author="Gigi"
                  description="Philosophical reflections on Bitcoin and what we can learn from its emergence and properties."
                    link="https://21lessons.com/"
                    index={7}
                />
                <ResourceCard 
                  title="Thank God for Bitcoin" 
                  author="Bitcoin & Bible Group"
                  description="An examination of Bitcoin from theological and ethical perspectives."
                    link="https://books.apple.com/ie/audiobook/thank-god-for-bitcoin-the-creation-corruption/id1560262570"
                    index={8}
                />
                <ResourceCard 
                  title="The Little Bitcoin Book" 
                  author="Bitcoin Collective"
                  description="An accessible introduction to Bitcoin for beginners, explaining complex concepts in simple terms."
                    link="https://sobrief.com/books/the-little-bitcoin-book"
                    index={9}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="articles" className="mt-8">
              <div className="grid grid-cols-1 gap-8">
                <ArticleCard 
                  title="Bitcoin: A Peer-to-Peer Electronic Cash System" 
                  author="Satoshi Nakamoto"
                  date="October 31, 2008"
                  description="The original whitepaper that introduced Bitcoin to the world."
                  link="https://bitcoin.org/bitcoin.pdf"
                    index={0}
                />
                <ArticleCard 
                  title="The Bullish Case for Bitcoin" 
                  author="Vijay Boyapati"
                  date="March 2, 2018"
                  description="A comprehensive analysis of Bitcoin's emergence as a new store of value."
                  link="https://vijayboyapati.medium.com/the-bullish-case-for-bitcoin-6ecc8bdecc1"
                    index={1}
                />
                <ArticleCard 
                  title="Bitcoin is Time" 
                  author="Gigi"
                  date="June 28, 2021"
                  description="An exploration of Bitcoin as the world's most accurate timechain and its implications."
                    link="https://dergigi.com/2021/01/14/bitcoin-is-time/"
                    index={2}
                />
                <ArticleCard 
                    title="How to Value Bitcoin and Other Cryptocurrencies" 
                  author="Lyn Alden"
                  date="February 14, 2021"
                    description="Analysis of Bitcoin's fundamental value proposition compared to other cryptocurrencies."
                    link="https://www.lynalden.com/cryptocurrencies/"
                    index={3}
                />
                <ArticleCard 
                  title="Gradually, Then Suddenly" 
                  author="Parker Lewis"
                  date="August 8, 2019"
                  description="How Bitcoin adoption follows the path of all monetary technologies, slowly at first, then all at once."
                    link="https://nakamotoinstitute.org/library/gradually-then-suddenly/"
                    index={4}
                />
                <ArticleCard 
                  title="The Number Zero and Bitcoin" 
                  author="Robert Breedlove"
                  date="May 25, 2020"
                  description="Drawing parallels between the invention of zero and Bitcoin as revolutionary concepts in their respective domains."
                    link="https://breedlove22.medium.com/the-number-zero-and-bitcoin-4c193336db5b"
                    index={5}
                />
                <ArticleCard 
                  title="Bitcoin and the Primacy of the Digital World" 
                    author="Pascal Hügli"
                  date="April 10, 2020"
                  description="How Bitcoin represents the first truly digital form of scarcity and what this means for society."
                    link="https://bitcoinmagazine.com/culture/bitcoin-and-the-primacy-of-the-digital-world"
                    index={6}
                />
                <ArticleCard 
                  title="Modeling Bitcoin's Value with Scarcity" 
                  author="PlanB"
                  date="March 22, 2019"
                  description="The introduction of the Stock-to-Flow model for understanding Bitcoin's value propositions."
                    link="https://medium.com/@100trillionUSD/modeling-bitcoins-value-with-scarcity-91fa0fc03e25"
                    index={7}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="videos" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <VideoCard 
                  title="Bitcoin: Beyond the Bubble" 
                  duration="35 minutes"
                  description="Documentary exploring Bitcoin's role in the evolution of money."
                    link="https://www.youtube.com/watch?v=LszOt51OjXU"
                    index={0}
                />
                <VideoCard 
                  title="The Bitcoin Phenomenon" 
                  duration="45 minutes"
                  description="Historical perspective on Bitcoin's rise as a new monetary paradigm."
                    link="https://www.youtube.com/watch?v=6pWblf8COH4"
                    index={1}
                />
                <VideoCard 
                  title="How Bitcoin Works in 5 Minutes" 
                  duration="5 minutes"
                  description="Technical yet accessible explanation of Bitcoin's operational mechanics."
                    link="https://www.youtube.com/watch?v=l9jOJk30eQs"
                    index={2}
                />
                <VideoCard 
                  title="Bitcoin: Sound Money for the Digital Age" 
                  duration="90 minutes"
                  description="Conference presentation on Bitcoin's properties as sound money."
                    link="https://www.youtube.com/watch?v=Zbm772vF-5M"
                    index={3}
                />
                <VideoCard 
                  title="The Hidden Secrets of Money" 
                  duration="Series (7 episodes)"
                  description="Series exploring monetary history and Bitcoin's place in it by Mike Maloney."
                    link="https://www.youtube.com/playlist?list=PLE88E9ICdipidHkTehs1VbFzgwrq1jkUJ"
                    index={4}
                />
                <VideoCard 
                  title="Banking on Bitcoin" 
                  duration="90 minutes"
                  description="Documentary on Bitcoin's early days and its potential to revolutionize banking."
                    link="https://www.youtube.com/watch?v=ByvbAi924TI"
                    index={5}
                />
                <VideoCard 
                  title="Bitcoin Under the Hood" 
                  duration="60 minutes"
                  description="Technical deep dive into how Bitcoin actually works at the protocol level."
                    link="https://www.youtube.com/watch?v=Lx9zgZCMqXE"
                    index={6}
                />
                <VideoCard 
                  title="Hard Money: The Case for Bitcoin" 
                  duration="45 minutes"
                  description="Presentation by Lyn Alden on why Bitcoin represents superior money."
                    link="https://www.youtube.com/watch?v=_0zMFfvXzX0"
                    index={7}
                />
                <VideoCard 
                  title="Human Action & Bitcoin" 
                  duration="50 minutes"
                  description="Lecture connecting Austrian economic principles to Bitcoin's emergence."
                    link="https://www.youtube.com/watch?v=CzIKKEbvf8Y"
                    index={8}
                />
                <VideoCard 
                  title="The Moral Case for Bitcoin" 
                  duration="40 minutes"
                  description="Robert Breedlove's presentation on the ethics of sound money and Bitcoin."
                    link="https://www.youtube.com/watch?v=nYgVTlqoVbc"
                    index={9}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="podcasts" className="mt-8">
              <div className="grid grid-cols-1 gap-8">
                <PodcastCard 
                  title="What Bitcoin Did" 
                  host="Peter McCormack"
                  description="Interviews with leading voices in the Bitcoin space exploring all aspects of the ecosystem."
                    link="https://www.whatbitcoindid.com/"
                    index={0}
                />
                <PodcastCard 
                  title="The Investor's Podcast" 
                  host="Preston Pysh & Stig Brodersen"
                  description="Bitcoin discussions with a focus on investment thesis and macroeconomic context."
                    link="https://www.theinvestorspodcast.com/bitcoin-fundamentals/"
                    index={1}
                />
                <PodcastCard 
                  title="Bitcoin Audible" 
                  host="Guy Swann"
                  description="Audio readings and commentary on the most important Bitcoin writings and research."
                    link="https://bitcoinaudible.com/"
                    index={2}
                />
                <PodcastCard 
                  title="The Stephan Livera Podcast" 
                  host="Stephan Livera"
                  description="Austrian economics perspectives on Bitcoin as sound money for the digital age."
                    link="https://stephanlivera.com/"
                    index={3}
                />
                <PodcastCard 
                  title="Tales from the Crypt" 
                  host="Marty Bent"
                  description="Exploration of Bitcoin's cultural impact through conversations with notable figures."
                    link="https://tftc.io/tales-from-the-crypt/"
                    index={4}
                />
                <PodcastCard 
                  title="The Bitcoin Standard Podcast" 
                  host="Saifedean Ammous"
                  description="Discussions on Bitcoin, economics, and the history of money by the author of The Bitcoin Standard."
                    link="https://saifedean.com/podcast"
                    index={5}
                />
                <PodcastCard 
                  title="Orange Pill" 
                  host="Max Keiser & Stacy Herbert"
                  description="Provocative discussion on Bitcoin's impact on geopolitics and finance from veteran commentators."
                    link="https://orangepill.buzzsprout.com/"
                    index={6}
                />
                <PodcastCard 
                  title="Bitcoin Fundamentals" 
                  host="Preston Pysh"
                  description="Deep dives into the technical and economic fundamentals behind Bitcoin."
                    link="https://www.theinvestorspodcast.com/bitcoin-fundamentals/"
                    index={7}
                />
                <PodcastCard 
                  title="Bitcoin Explained" 
                  host="Shinobi & Bottomshelf"
                  description="Technical explanations of Bitcoin concepts aimed at making complex topics approachable."
                    link="https://bitcoinexplained.com/"
                    index={8}
                />
                <PodcastCard 
                  title="Bitcoin & Markets" 
                  host="Ansel Lindner"
                  description="Market analysis of Bitcoin and its relationship to the broader financial system."
                    link="https://bitcoinandmarkets.com/"
                    index={9}
                />
              </div>
            </TabsContent>
            </AnimatePresence>
          </Tabs>
          
          {/* Community CTA section */}
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
                <MessageCircle className="mr-1 h-3.5 w-3.5" />
                <span>Join Us</span>
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Dive Deeper?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join our community to access exclusive educational materials, attend online events, 
                and engage with like-minded individuals on their Bitcoin journey.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                  <Heart className="mr-2 h-5 w-5" />
                  Join Our Community
                </Button>
                <Button variant="outline" size="lg" className="border-amber-500/50 text-amber-600 hover:bg-amber-500/10">
                  <Bookmark className="mr-2 h-5 w-5" />
                  Save Resources
            </Button>
              </div>
            </div>
          </motion.section>
          
          {/* Resource stats */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <p className="text-5xl font-bold text-amber-500 mb-2">38+</p>
              <p className="text-muted-foreground">Resources</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-amber-500 mb-2">4</p>
              <p className="text-muted-foreground">Categories</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-amber-500 mb-2">25+</p>
              <p className="text-muted-foreground">Authors</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-amber-500 mb-2">100%</p>
              <p className="text-muted-foreground">Curated</p>
            </div>
          </motion.section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ResourcesPage; 