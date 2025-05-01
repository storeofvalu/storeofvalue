import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ResourceGrid from '@/components/resources/ResourceGrid';
import { Button } from "@/components/ui/button";
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
import { useResources } from '@/hooks/useResources';
import { Resource } from '@/lib/resource-types';
import BitcoinLogoIcon from '../components/BitcoinLogoIcon';

// ResourceCategory component for the category cards
const ResourceCategory = ({ 
  icon, 
  title, 
  count, 
  color,
  onClick
}: { 
  icon: React.ReactNode; 
  title: string; 
  count: string; 
  color: string;
  onClick?: () => void;
}) => (
  <div 
    className="bg-card rounded-lg p-4 text-center hover:bg-card/80 transition-colors cursor-pointer"
    onClick={onClick}
  >
    <div className={`bg-${color}-500/10 rounded-full p-3 w-14 h-14 mx-auto mb-3 flex items-center justify-center`}>
      {icon}
    </div>
    <div className="text-lg font-medium">{title}</div>
    <div className="text-sm text-muted-foreground">{count}</div>
  </div>
);

// Loading skeleton component
const ResourceSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {Array.from({ length: 6 }).map((_, index) => (
      <div key={index} className="h-64 rounded-md bg-card/50 animate-pulse"></div>
    ))}
  </div>
);

const ResourcesPage = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState<'book' | 'article' | 'video' | 'podcast' | 'all'>('book');
  
  // Get resources with our custom hook
  const { 
    resources, 
    loading, 
    error,
    totalCount,
    pageCount,
    currentPage,
    hasNextPage,
    hasPreviousPage,
    goToNextPage,
    goToPreviousPage,
    goToPage
  } = useResources({
    type: activeTab === 'all' ? undefined : activeTab,
    pageSize: 6, // Show 6 resources per page
    sortBy: 'publishedAt',
    sortOrder: 'desc'
  });

  // Resource counts by type
  const resourceCounts = {
    books: resources.filter(r => r.type === 'book').length,
    articles: resources.filter(r => r.type === 'article').length,
    videos: resources.filter(r => r.type === 'video').length,
    podcasts: resources.filter(r => r.type === 'podcast').length
  };

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
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-6"
            >
              <div className="h-16 w-16 rounded-full bg-amber-500/10 flex items-center justify-center">
                <Library className="h-8 w-8 text-amber-500" />
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Bitcoin Resources
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8"
            >
              A curated collection of the best Bitcoin books, articles, videos, and podcasts to deepen your understanding.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            >
              <ResourceCategory 
                icon={<BookOpen className="h-7 w-7 text-amber-500" />}
                title="Books"
                count={`${resourceCounts.books}+ titles`}
                color="amber"
                onClick={() => setActiveTab('book')}
              />
              
              <ResourceCategory 
                icon={<FileText className="h-7 w-7 text-blue-500" />}
                title="Articles"
                count={`${resourceCounts.articles}+ pieces`}
                color="blue"
                onClick={() => setActiveTab('article')}
              />
              
              <ResourceCategory 
                icon={<Video className="h-7 w-7 text-red-500" />}
                title="Videos"
                count={`${resourceCounts.videos}+ recordings`}
                color="red"
                onClick={() => setActiveTab('video')}
              />
              
              <ResourceCategory 
                icon={<Headphones className="h-7 w-7 text-green-500" />}
                title="Podcasts"
                count={`${resourceCounts.podcasts}+ episodes`}
                color="green"
                onClick={() => setActiveTab('podcast')}
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Tab navigation */}
          <Tabs 
            defaultValue="book" 
            className="w-full"
            onValueChange={(value) => setActiveTab(value as any)}
          >
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              
              <div className="relative flex justify-center">
                <div className="bg-background px-2">
                  <TabsList className="grid w-full max-w-2xl grid-cols-2 md:grid-cols-5 gap-1 bg-card/50">
                    <TabsTrigger 
                      value="all" 
                      className="data-[state=active]:bg-purple-500/10 data-[state=active]:text-purple-600 data-[state=active]:shadow-none"
                    >
                      <Library className="mr-2 h-4 w-4" />
                      All
                    </TabsTrigger>
                    <TabsTrigger 
                      value="book" 
                      className="data-[state=active]:bg-amber-500/10 data-[state=active]:text-amber-600 data-[state=active]:shadow-none"
                    >
                      <BookOpen className="mr-2 h-4 w-4" />
                      Books
                    </TabsTrigger>
                    <TabsTrigger 
                      value="article" 
                      className="data-[state=active]:bg-blue-500/10 data-[state=active]:text-blue-600 data-[state=active]:shadow-none"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      Articles
                    </TabsTrigger>
                    <TabsTrigger 
                      value="video" 
                      className="data-[state=active]:bg-red-500/10 data-[state=active]:text-red-600 data-[state=active]:shadow-none"
                    >
                      <Video className="mr-2 h-4 w-4" />
                      Videos
                    </TabsTrigger>
                    <TabsTrigger 
                      value="podcast" 
                      className="data-[state=active]:bg-green-500/10 data-[state=active]:text-green-600 data-[state=active]:shadow-none"
                    >
                      <Headphones className="mr-2 h-4 w-4" />
                      Podcasts
                    </TabsTrigger>
                  </TabsList>
                </div>
              </div>
            </div>
            
            {/* Display resources */}
            <div className="mt-8">
              {loading ? (
                <ResourceSkeleton />
              ) : error ? (
                <div className="py-8 text-center">
                  <p className="text-red-500">Error loading resources. Please try again later.</p>
                </div>
              ) : (
                <>
                  <ResourceGrid resources={resources} />
                  
                  {/* Pagination */}
                  {pageCount > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-10">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={goToPreviousPage}
                        disabled={!hasPreviousPage}
                      >
                        Previous
                      </Button>
                      
                      {Array.from({ length: pageCount }).map((_, i) => (
                        <Button
                          key={i}
                          variant={currentPage === i + 1 ? "default" : "outline"}
                          size="sm"
                          onClick={() => goToPage(i + 1)}
                        >
                          {i + 1}
                        </Button>
                      ))}
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={goToNextPage}
                        disabled={!hasNextPage}
                      >
                        Next
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>
          </Tabs>
          
          {/* Resource stats */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <p className="text-5xl font-bold text-amber-500 mb-2">{totalCount}+</p>
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