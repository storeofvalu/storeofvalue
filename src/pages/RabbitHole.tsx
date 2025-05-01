import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, RefreshCw, BookOpen, ExternalLink } from "lucide-react";

interface RabbitHoleCard {
  id: number;
  title: string;
  content: string;
  emoji?: string;
  background?: string;
  image?: string;
  color?: string;
  gradient?: string;
}

const rabbitHoleCards: RabbitHoleCard[] = [
  {
    id: 0,
    title: "Down the Rabbit Hole",
    content: "Once you start learning about Bitcoin, there's no turning back. The journey will transform how you understand money, value, and freedom.",
    emoji: "🕳️🐇",
    background: "bg-gradient-to-br from-purple-900 to-black",
    color: "text-white",
    gradient: "from-white to-amber-300"
  },
  {
    id: 1,
    title: "Bitcoin Basics",
    content: "Bitcoin is a peer-to-peer electronic cash system created in 2009 by Satoshi Nakamoto. It's the world's first truly decentralized digital currency - no banks, no governments, just math.",
    emoji: "₿",
    background: "bg-gradient-to-br from-amber-500 to-orange-700",
    color: "text-white",
    gradient: "from-white to-amber-200"
  },
  {
    id: 2,
    title: "The Problem Bitcoin Solves",
    content: "Throughout history, currencies controlled by governments have always lost value through inflation. Bitcoin has a fixed supply of 21 million coins, making it the first truly scarce digital asset.",
    emoji: "🔐",
    background: "bg-gradient-to-br from-slate-900 to-slate-700",
    color: "text-white",
    gradient: "from-white to-blue-200"
  },
  {
    id: 3,
    title: "Proof of Work",
    content: "Bitcoin uses a consensus mechanism called Proof of Work. Miners compete to solve complex puzzles, securing the network and preventing double-spending while being rewarded with newly created bitcoin.",
    emoji: "⛏️",
    background: "bg-gradient-to-br from-emerald-800 to-teal-900",
    color: "text-white",
    gradient: "from-white to-emerald-200"
  },
  {
    id: 4,
    title: "Digital Scarcity",
    content: "For the first time in digital history, Bitcoin created true scarcity. Unlike any digital file that can be copied infinitely, each bitcoin is unique and cannot be duplicated, counterfeited, or spent twice.",
    emoji: "✨",
    background: "bg-gradient-to-br from-indigo-900 to-purple-900",
    color: "text-white",
    gradient: "from-white to-indigo-200"
  },
  {
    id: 5,
    title: "The Halving",
    content: "Approximately every four years, the reward for mining new blocks is cut in half. This event, known as 'the halving,' systematically reduces the rate of new bitcoin creation, reinforcing its scarcity.",
    emoji: "📉",
    background: "bg-gradient-to-br from-amber-700 to-red-900",
    color: "text-white",
    gradient: "from-white to-red-200"
  },
  {
    id: 6,
    title: "Self-Custody",
    content: "\"Not your keys, not your coins.\" Bitcoin allows you to be your own bank. With proper security practices, you can store your wealth in a way that cannot be confiscated or frozen by any third party.",
    emoji: "🔑",
    background: "bg-gradient-to-br from-blue-900 to-purple-900",
    color: "text-white",
    gradient: "from-white to-blue-200"
  },
  {
    id: 7,
    title: "Bitcoin as Freedom Technology",
    content: "Beyond money, Bitcoin represents freedom in digital form. It enables borderless transactions, censorship-resistant savings, and financial sovereignty for anyone with an internet connection.",
    emoji: "🦅",
    background: "bg-gradient-to-br from-cyan-900 to-blue-900",
    color: "text-white",
    gradient: "from-white to-cyan-200"
  },
  {
    id: 8,
    title: "Congratulations!",
    content: "You've taken your first steps down the rabbit hole. But this is just the beginning. Continue your journey through our resources to truly understand the revolutionary potential of Bitcoin.",
    emoji: "🎉",
    background: "bg-gradient-to-br from-emerald-600 to-teal-800",
    color: "text-white",
    gradient: "from-white to-emerald-200"
  }
];

const transition = {
  type: "spring",
  stiffness: 100,
  damping: 20
};

// Floating animation for background elements
const floatingAnimation = {
  y: [0, -10, 0],
  opacity: [0.5, 0.8, 0.5],
};

const floatingTransition = {
  duration: 5,
  repeat: Infinity,
  ease: "easeInOut",
};

const RabbitHolePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get startCardId from location state or default to 0
  const defaultStartCardId = location.state?.startCardId || 0;
  
  const [currentCardId, setCurrentCardId] = useState(defaultStartCardId);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right, 0 for initial
  
  // Update currentCardId when location state changes
  useEffect(() => {
    if (location.state?.startCardId !== undefined) {
      setCurrentCardId(location.state.startCardId);
    }
  }, [location.state]);
  
  const currentCard = rabbitHoleCards[currentCardId];
  const isFirstCard = currentCardId === 0;
  const isLastCard = currentCardId === rabbitHoleCards.length - 1;

  const handleYesClick = () => {
    if (isFirstCard) {
      setDirection(1);
      setCurrentCardId(1);
    }
  };

  const handleNoClick = () => {
    if (isFirstCard) {
      navigate('/');
    }
  };

  const goToPreviousCard = () => {
    if (currentCardId > 1) {
      setDirection(-1);
      setCurrentCardId(currentCardId - 1);
    } else {
      setDirection(-1);
      setCurrentCardId(0);
    }
  };

  const goToNextCard = () => {
    if (currentCardId < rabbitHoleCards.length - 1) {
      setDirection(1);
      setCurrentCardId(currentCardId + 1);
    }
  };

  const restartJourney = () => {
    setDirection(-1);
    setCurrentCardId(0);
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 300 : -300,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 300 : -300,
        opacity: 0
      };
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navigation />
      
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden z-0 opacity-30">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-amber-500/10"
          animate={floatingAnimation}
          transition={{
            ...floatingTransition,
            delay: 0,
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/10"
          animate={floatingAnimation}
          transition={{
            ...floatingTransition,
            delay: 1,
          }}
        />
        <motion.div 
          className="absolute top-3/4 left-1/2 w-72 h-72 rounded-full bg-blue-500/10"
          animate={floatingAnimation}
          transition={{
            ...floatingTransition,
            delay: 2,
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 pt-24 pb-20 md:pt-32 relative z-10">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentCardId}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
            className="max-w-4xl mx-auto"
          >
            <div className={`rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.3)] overflow-hidden ${currentCard.background} relative`}>
              {/* Card decorative elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white/5 to-transparent"></div>
                <motion.div 
                  className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-white/5"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.1, 0.2] 
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 8,
                    ease: "easeInOut" 
                  }}
                />
              </div>
              
              <div className="p-8 md:p-10 space-y-8 relative z-10">
                {/* Card header with emoji */}
                <div className="flex justify-center">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="h-28 w-28 sm:h-32 sm:w-32 flex items-center justify-center rounded-full bg-gradient-to-br from-white/10 to-black/20 backdrop-blur-md shadow-xl border border-white/10"
                  >
                    {isFirstCard ? (
                      <div className="text-center text-6xl sm:text-7xl tracking-tighter leading-none">
                        <span className="inline-block transform translate-y-1">🕳️</span>
                        <span className="inline-block transform -translate-y-1">🐇</span>
                      </div>
                    ) : (
                      <span className="text-5xl sm:text-6xl">{currentCard.emoji}</span>
                    )}
                  </motion.div>
                </div>
                
                {/* Title */}
                <motion.h1 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className={`text-3xl md:text-4xl lg:text-5xl font-bold text-center ${currentCard.color}`}
                >
                  <span className={`bg-clip-text text-transparent bg-gradient-to-r ${currentCard.gradient}`}>
                    {currentCard.title}
                  </span>
                </motion.h1>
                
                {/* Content */}
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className={`text-lg md:text-xl text-center leading-relaxed max-w-2xl mx-auto ${currentCard.color} font-light`}
                >
                  {currentCard.content}
                </motion.p>
                
                {/* Buttons */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="pt-6"
                >
                  {isFirstCard ? (
                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                      <Button 
                        variant="default" 
                        className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black text-lg py-7 px-8 rounded-full w-full sm:w-auto font-medium flex items-center gap-2 transition-all transform hover:scale-105 hover:shadow-lg shadow-md"
                        onClick={handleYesClick}
                      >
                        Take the red pill <ArrowRight className="ml-1 h-5 w-5" />
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-2 border-white/40 hover:border-white/60 text-white hover:bg-white/10 text-lg py-7 px-8 rounded-full w-full sm:w-auto font-medium transition-all duration-300"
                        onClick={handleNoClick}
                      >
                        Not today
                      </Button>
                    </div>
                  ) : isLastCard ? (
                    <div className="flex flex-wrap gap-5 justify-center">
                      <Button 
                        variant="default" 
                        className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black text-lg py-7 px-8 rounded-full font-medium flex items-center gap-2 transition-all transform hover:scale-105 hover:shadow-lg shadow-md"
                        onClick={() => navigate('/resources')}
                      >
                        <BookOpen className="h-5 w-5" /> Explore Resources 
                      </Button>
                      <Button 
                        variant="default" 
                        className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white text-lg py-7 px-8 rounded-full font-medium flex items-center gap-2 transition-all transform hover:scale-105 hover:shadow-lg shadow-md"
                        onClick={() => navigate('/learn')}
                      >
                        <ExternalLink className="h-5 w-5" /> Start Learning
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-2 border-white/40 hover:border-white/60 text-white hover:bg-white/10 text-lg py-7 px-8 rounded-full font-medium flex items-center gap-2 transition-all duration-300"
                        onClick={restartJourney}
                      >
                        <RefreshCw className="h-5 w-5" /> Start Again
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <Button 
                        variant="outline" 
                        onClick={goToPreviousCard} 
                        className="border-2 border-white/40 hover:border-white/60 text-white hover:bg-white/10 text-lg py-6 px-6 md:px-8 rounded-full font-medium flex items-center gap-2 transition-all duration-300"
                        aria-label="Previous card"
                      >
                        <ArrowLeft className="h-5 w-5" />
                        <span className="hidden md:inline">Previous</span>
                      </Button>
                      <div className="text-lg text-white/90 font-medium rounded-full bg-white/10 backdrop-blur-sm px-4 py-2">
                        {currentCardId} of {rabbitHoleCards.length - 1}
                      </div>
                      <Button 
                        variant="default" 
                        onClick={goToNextCard}
                        className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black text-lg py-6 px-6 md:px-8 rounded-full font-medium flex items-center gap-2 transition-all transform hover:scale-105 hover:shadow-lg shadow-md"
                        aria-label="Next card"
                      >
                        <span className="hidden md:inline">Go Deeper</span>
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
            
            {!isFirstCard && (
              <div className="mt-8 flex justify-center">
                <div className="h-2 w-full max-w-md bg-gray-800 rounded-full overflow-hidden shadow-inner">
                  <motion.div 
                    initial={{ width: `${((currentCardId - 1) / (rabbitHoleCards.length - 1)) * 100}%` }}
                    animate={{ width: `${(currentCardId / (rabbitHoleCards.length - 1)) * 100}%` }}
                    transition={{ duration: 0.5 }}
                    className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"
                  />
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      
      <Footer />
    </div>
  );
};

export default RabbitHolePage; 