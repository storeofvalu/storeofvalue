import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';
import { createFAQSchema } from '@/components/StructuredData';
import Analytics, { analyticsEvents, trackEvent } from '@/components/Analytics';

// FAQ data with enhanced metadata
const faqData = [
  {
    id: 'faq-bitcoin-definition',
    question: "What is Bitcoin?",
    answer: "Bitcoin is a decentralized digital currency created in 2009 by an unknown person using the pseudonym Satoshi Nakamoto. It operates without a central authority or banks, with transactions verified by network nodes through cryptography and recorded in a public distributed ledger called a blockchain.",
    category: "Fundamentals",
    dateCreated: "2023-01-15",
    dateModified: "2023-09-22"
  },
  {
    id: 'faq-bitcoin-working',
    question: "How does Bitcoin work?",
    answer: "Bitcoin works through a technology called blockchain—a distributed digital ledger that records all Bitcoin transactions. Mining computers solve complex mathematical problems to validate these transactions, which are then added to the blockchain. Each Bitcoin is stored in a digital wallet, and transactions occur directly between users without intermediaries.",
    category: "Fundamentals",
    dateCreated: "2023-01-15",
    dateModified: "2023-10-15"
  },
  {
    id: 'faq-bitcoin-safety',
    question: "Is Bitcoin safe?",
    answer: "Bitcoin's underlying blockchain technology is highly secure and has never been hacked. However, exchanges or wallets where Bitcoin is stored can be vulnerable. Users should follow best security practices like using hardware wallets for large amounts, enabling two-factor authentication, and keeping private keys secure.",
    category: "Security",
    dateCreated: "2023-01-15",
    dateModified: "2023-11-05"
  },
  {
    id: 'faq-bitcoin-purchase',
    question: "How do I buy Bitcoin?",
    answer: "You can buy Bitcoin through cryptocurrency exchanges, Bitcoin ATMs, peer-to-peer marketplaces, or payment services. You'll need to set up a wallet first, complete identity verification on most platforms, connect a payment method, place an order, and then store your Bitcoin securely.",
    category: "Getting Started",
    dateCreated: "2023-02-10",
    dateModified: "2023-12-01"
  },
  {
    id: 'faq-bitcoin-mining',
    question: "What is Bitcoin mining?",
    answer: "Bitcoin mining is the process of creating new Bitcoin by solving complex computational puzzles to verify and add transaction blocks to the blockchain. Miners use specialized hardware to compete in solving these puzzles, and the first to succeed receives newly created Bitcoin as a reward, along with transaction fees.",
    category: "Mining",
    dateCreated: "2023-02-10",
    dateModified: "2023-10-15"
  },
  {
    id: 'faq-bitcoin-cash-conversion',
    question: "Can Bitcoin be converted to cash?",
    answer: "Yes, Bitcoin can be converted to cash through cryptocurrency exchanges, Bitcoin ATMs, peer-to-peer platforms, or by selling directly to individuals. The process typically involves selling your Bitcoin at the current market rate and withdrawing the corresponding fiat currency to your bank account.",
    category: "Transactions",
    dateCreated: "2023-03-05",
    dateModified: "2023-11-20"
  },
  {
    id: 'faq-bitcoin-price',
    question: "What determines Bitcoin's price?",
    answer: "Bitcoin's price is determined by supply and demand in the market. Factors influencing its price include: adoption rates, regulatory developments, media coverage, macroeconomic factors, technological advancements, market sentiment, and halving events that reduce the rate of new Bitcoin creation.",
    category: "Economics",
    dateCreated: "2023-03-15",
    dateModified: "2023-12-10"
  },
  {
    id: 'faq-bitcoin-wallet',
    question: "What is a Bitcoin wallet?",
    answer: "A Bitcoin wallet is a digital tool that allows you to store, send, and receive Bitcoin. It contains your private keys—secret codes that give you access to your Bitcoin—and interfaces with the blockchain to track your balance. Wallets can be software-based (apps, web services), hardware devices, or even paper documents.",
    category: "Security",
    dateCreated: "2023-04-01",
    dateModified: "2023-12-15"
  }
];

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  
  // Filter FAQs based on search query
  const filteredFAQs = faqData.filter(
    faq => 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Enhanced FAQ schema with page metadata
  const enhancedFaqSchema = createFAQSchema(faqData, {
    dateCreated: "2023-01-15",
    dateModified: "2023-12-15",
    description: "Find comprehensive answers to the most frequently asked questions about Bitcoin, blockchain technology, and cryptocurrency.",
    image: "https://storeofvalue.ch/images/faq-banner.jpg"
  });
  
  // Track FAQ interactions
  const handleAccordionChange = (value: string) => {
    setActiveFaq(value);
    
    if (value) {
      const faqIndex = parseInt(value.replace('item-', ''));
      const faqItem = filteredFAQs[faqIndex];
      
      if (faqItem) {
        analyticsEvents.trackContentEngagement(
          'faq',
          faqItem.id || `faq-${faqIndex}`,
          'open',
          {
            question: faqItem.question,
            category: faqItem.category || 'General'
          }
        );
      }
    }
  };
  
  // Track search interactions
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.length > 2) {
      trackEvent('faq_search', {
        search_term: query,
        results_count: filteredFAQs.length
      });
    }
  };
  
  return (
    <Layout
      seo={{
        title: "Frequently Asked Questions",
        description: "Find answers to common questions about Bitcoin, blockchain technology, cryptocurrency, and digital assets.",
        canonicalUrl: "/faq",
        keywords: "bitcoin faq, cryptocurrency questions, blockchain help, bitcoin beginners, crypto faq",
        structuredData: enhancedFaqSchema
      }}
    >
      {/* Page-specific analytics tracking */}
      <Analytics 
        pageId="faq"
        pageCategory="support"
        pageTemplate="faq"
        contentType="information"
        keywords={["bitcoin", "faq", "questions", "help", "support"]}
        section="support"
        customDimensions={{
          question_count: faqData.length.toString(),
          categories: Array.from(new Set(faqData.map(faq => faq.category))).join(',')
        }}
      />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Breadcrumb items={[{ name: 'FAQ', href: '/faq' }]} />
        
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
        
        {/* Search box */}
        <div className="relative mb-10 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search questions..."
              className="pl-10 border-orange-500/20 focus:border-orange-500"
              value={searchQuery}
              onChange={handleSearchChange}
              aria-label="Search FAQ questions"
            />
          </div>
          {searchQuery && (
            <p className="mt-2 text-sm text-muted-foreground">
              Showing {filteredFAQs.length} of {faqData.length} questions
            </p>
          )}
        </div>
        
        {/* FAQ Categories (optional) */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {Array.from(new Set(faqData.map(faq => faq.category))).map((category) => (
              <Button 
                key={category} 
                variant="outline" 
                size="sm"
                className="text-xs"
                onClick={() => {
                  setSearchQuery(category || '');
                  analyticsEvents.trackButtonClick(
                    `Filter: ${category}`, 
                    `filter-${category}`,
                    'faq-filters'
                  );
                }}
              >
                {category}
              </Button>
            ))}
            {searchQuery && (
              <Button 
                variant="outline" 
                size="sm"
                className="text-xs bg-orange-500/10 text-orange-500 border-orange-500/20"
                onClick={() => {
                  setSearchQuery('');
                  analyticsEvents.trackButtonClick('Clear Filters', 'clear-filters', 'faq-filters');
                }}
              >
                Clear Filters
              </Button>
            )}
          </div>
        </div>
        
        {/* FAQ accordion */}
        <Accordion 
          type="single" 
          collapsible 
          className="space-y-4"
          value={activeFaq}
          onValueChange={handleAccordionChange}
        >
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <AccordionItem 
                key={faq.id || index} 
                value={`item-${index}`}
                className="border border-border rounded-lg overflow-hidden bg-card px-4"
                data-faq-id={faq.id}
                data-faq-category={faq.category}
              >
                <AccordionTrigger className="text-left py-5 hover:no-underline font-medium text-base hover:text-orange-500">
                  <div className="flex items-center justify-between w-full pr-5">
                    <span>{faq.question}</span>
                    {faq.category && (
                      <span className="text-xs px-2 py-0.5 bg-orange-500/10 text-orange-500 rounded-full ml-2 flex-shrink-0">
                        {faq.category}
                      </span>
                    )}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground">
                  {faq.answer}
                  
                  <div className="mt-4 pt-2 border-t border-border/50 text-xs text-muted-foreground/70 flex justify-between">
                    <span>Last updated: {new Date(faq.dateModified || '').toLocaleDateString()}</span>
                    {faq.id && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-auto p-0 text-xs hover:bg-transparent hover:text-orange-500"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigator.clipboard.writeText(`${window.location.origin}/faq#${faq.id}`);
                          analyticsEvents.trackButtonClick('Copy FAQ Link', `copy-${faq.id}`, 'faq-content');
                        }}
                      >
                        Copy Link
                      </Button>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-muted-foreground mb-4">No questions found matching your search.</p>
              <Button 
                variant="outline" 
                className="border-orange-500 text-orange-500 hover:bg-orange-500/10"
                onClick={() => {
                  setSearchQuery('');
                  analyticsEvents.trackButtonClick('Clear Search', 'clear-search', 'faq-search');
                }}
              >
                Clear Search
              </Button>
            </div>
          )}
        </Accordion>
        
        {/* Contact CTA */}
        <div className="mt-16 text-center border-t border-border pt-10">
          <h3 className="text-xl font-medium mb-4">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            If you couldn't find the answer to your question, feel free to contact us directly.
          </p>
          <Button 
            asChild
            className="bg-orange-500 hover:bg-orange-600 text-white shadow-sm"
            onClick={() => {
              analyticsEvents.trackButtonClick('Contact Us', 'contact-cta', 'faq-footer');
            }}
          >
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default FAQPage; 