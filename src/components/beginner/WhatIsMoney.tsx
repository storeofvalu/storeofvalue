import React from 'react';
import ModuleContent, { ModuleSection } from '../ModuleContent';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Coins, Wallet, Scale, Clock, DollarSign, Bitcoin, 
  ArrowRight, Repeat, RefreshCw, BarChart4, ShieldCheck, Banknote, 
  CircleDashed, CheckCircle, Award 
} from 'lucide-react';

// Custom animation component for money functions
const MoneyFunctionCard = ({ icon, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="p-4 border-2 border-amber-400 bg-black rounded-lg flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all"
  >
    <div className="p-3 bg-amber-500/80 rounded-full mb-3 text-black">
      {icon}
    </div>
    <h4 className="font-semibold text-lg mb-2 text-amber-50">{title}</h4>
    <p className="text-white text-sm">{description}</p>
  </motion.div>
);

// Evolution of Money Timeline Component
const EvolutionTimelineItem = ({ year, title, description, icon, isLast }) => (
  <div className="flex">
    <div className="flex flex-col items-center mr-4">
      <div className="p-2 rounded-full bg-amber-500/80 text-black">
        {icon}
      </div>
      {!isLast && <div className="h-full w-0.5 bg-amber-400 mt-2"></div>}
    </div>
    <div className="pb-8">
      <div className="text-sm text-amber-200 font-medium">{year}</div>
      <div className="font-semibold mb-1 text-white">{title}</div>
      <p className="text-amber-50 text-sm">{description}</p>
    </div>
  </div>
);

// Barter vs Money Exchange Diagram
const BarterVsMoneyDiagram = () => (
  <div className="grid md:grid-cols-2 gap-6 my-8">
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="border-2 border-amber-400 bg-black rounded-lg p-5 flex flex-col"
    >
      <h3 className="text-lg font-semibold text-amber-300 mb-3 flex items-center">
        <Repeat className="h-5 w-5 mr-2 text-amber-400" /> Barter System
      </h3>
      <div className="flex-grow">
        <div className="flex flex-col items-center mb-4">
          <div className="grid grid-cols-3 gap-3 w-full mb-4">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-amber-300/80 rounded-full flex items-center justify-center shadow-sm mb-2">
                <span className="text-2xl">🌾</span>
              </div>
              <span className="text-xs text-center text-white">Farmer</span>
            </div>
            <div className="flex items-center justify-center">
              <RefreshCw className="h-8 w-8 text-amber-400" />
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-amber-300/80 rounded-full flex items-center justify-center shadow-sm mb-2">
                <span className="text-2xl">👞</span>
              </div>
              <span className="text-xs text-center text-white">Shoemaker</span>
            </div>
          </div>
        </div>
        <ul className="text-sm space-y-2 text-white pl-5 list-disc">
          <li>Requires coincidence of wants</li>
          <li>Limited to direct exchange</li>
          <li>Difficult to standardize value</li>
          <li>Inefficient for complex economies</li>
        </ul>
      </div>
    </motion.div>
    
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="border-2 border-orange-400 bg-black rounded-lg p-5 flex flex-col"
    >
      <h3 className="text-lg font-semibold text-orange-300 mb-3 flex items-center">
        <CircleDashed className="h-5 w-5 mr-2 text-orange-400" /> Monetary System
      </h3>
      <div className="flex-grow">
        <div className="flex flex-col items-center mb-4">
          <div className="grid grid-cols-5 gap-1 w-full mb-4">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-amber-300/80 rounded-full flex items-center justify-center shadow-sm mb-1">
                <span className="text-xl">🌾</span>
              </div>
              <span className="text-xs text-center text-white">Farmer</span>
            </div>
            <div className="flex items-center justify-center">
              <ArrowRight className="h-4 w-4 text-orange-400" />
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center shadow-md mb-1 border-2 border-amber-300">
                <Coins className="h-5 w-5 text-amber-600" />
              </div>
              <span className="text-xs text-center text-white font-medium">Money</span>
            </div>
            <div className="flex items-center justify-center">
              <ArrowRight className="h-4 w-4 text-orange-400" />
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-amber-300/80 rounded-full flex items-center justify-center shadow-sm mb-1">
                <span className="text-xl">👞</span>
              </div>
              <span className="text-xs text-center text-white">Shoemaker</span>
            </div>
          </div>
        </div>
        <ul className="text-sm space-y-2 text-white pl-5 list-disc">
          <li>Enables indirect exchange</li>
          <li>Provides common measure of value</li>
          <li>Allows specialization and trade</li>
          <li>Enables complex economic calculation</li>
        </ul>
      </div>
    </motion.div>
  </div>
);

const WhatIsMoney = () => {
  const [selectedAnswers, setSelectedAnswers] = React.useState<{[key: number]: string}>({});
  const [showResults, setShowResults] = React.useState(false);
  const [score, setScore] = React.useState(0);
  
  const correctAnswers = {
    1: "b", // The coincidence of wants problem in trade and exchange
    2: "d", // Generator of wealth
    3: "b", // They possessed superior monetary properties like durability, scarcity, and divisibility
    4: "b", // The ability to preserve purchasing power over time
    5: "d"  // The modern fiat system that began in 1971
  };
  
  const checkAnswers = () => {
    let newScore = 0;
    
    Object.keys(correctAnswers).forEach((questionNumber) => {
      const question = parseInt(questionNumber);
      if (selectedAnswers[question] === correctAnswers[question]) {
        newScore++;
      }
    });
    
    setScore(newScore);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const getExplanation = (questionNumber: number) => {
    switch(questionNumber) {
      case 1:
        return "Money solves the coincidence of wants problem by serving as an intermediary good that anyone will accept, enabling indirect exchange.";
      case 2:
        return "Money is not wealth itself but a technology for transferring and storing claims on real wealth (goods and services).";
      case 3:
        return "Gold and silver emerged as superior forms of money due to their durability, divisibility, scarcity, and portability compared to other commodities.";
      case 4:
        return "The store of value function enables delaying consumption, allowing people to save for large purchases or future needs.";
      case 5:
        return "Bitcoin's fixed supply cap of 21 million creates digital scarcity that cannot be altered, unlike fiat currencies that can be printed at will.";
      default:
        return "";
    }
  };

  const sections: ModuleSection[] = [
    {
      title: "Introduction to Money",
      type: "text",
      estimatedMinutes: 5,
      content: (
        <div>
          <div className="mb-6 rounded-lg overflow-hidden border-2 border-amber-400 bg-black shadow-md">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-amber-300">What Problem Does Money Solve?</h3>
              <p className="text-white mb-6">
                At its core, money is a solution to one of humanity's oldest economic problems: the inefficiency of direct trade in complex societies. Understanding money begins with understanding the problem it solves.
              </p>
              
              <BarterVsMoneyDiagram />
              
              <div className="text-sm text-amber-300 italic text-center mt-2">
                Money transforms a complex web of direct exchanges into a simple, efficient system of indirect exchanges.
              </div>
            </div>
          </div>
          
          <p className="text-white">Money is something we use every day, but few of us stop to think about what it actually is and why it exists. At its core, <strong className="text-amber-300">money is a tool that solves the problem of exchange</strong> in complex societies.</p>
          
          <p className="text-white">Imagine a world without money. If you were a farmer with extra wheat and wanted a new pair of shoes, you'd need to find a shoemaker who specifically wanted wheat at the exact time you needed shoes. This is the <strong className="text-amber-300">coincidence of wants problem</strong>, and it makes trade incredibly inefficient.</p>
          
          <p className="text-white">Money solves this problem by serving as an intermediary—a universal medium of exchange that everyone agrees to accept. This allows for indirect exchange: you sell your wheat for money, then use that money to buy shoes, regardless of whether the shoemaker wants wheat.</p>
          
          <p className="text-white">The adoption of money throughout human history has enabled greater specialization and division of labor. By making trade more efficient, money allows people to focus on what they do best, trading their specialized output for everything else they need. This specialization has been a key driver of economic growth and prosperity.</p>
          
          <div className="bg-black p-4 rounded-md my-6 border-l-4 border-amber-400">
            <h4 className="text-lg font-semibold mb-2 text-amber-300">Key Insight</h4>
            <p className="text-white">Money is not wealth itself—it's a technology for transferring and storing claims on real wealth (goods and services) across time and space.</p>
          </div>
        </div>
      )
    },
    {
      title: "The Functions of Money",
      type: "text",
      estimatedMinutes: 6,
      content: (
        <div>
          <p className="mb-4 text-white">Money serves three primary functions in an economy, each solving a unique economic problem:</p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="border-2 border-amber-400 rounded-lg shadow-md overflow-hidden bg-black"
            >
              <div className="bg-amber-500/80 p-3 text-white">
                <h4 className="font-semibold text-lg flex items-center">
                  <Wallet className="h-5 w-5 mr-2" /> Medium of Exchange
                </h4>
              </div>
              <div className="p-4">
                <div className="bg-black p-3 rounded-md mb-4 border border-amber-400">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center">
                      <div className="p-2 bg-amber-400/80 rounded-full mr-2 text-black">
                        <span className="text-sm">👨‍🌾</span>
                      </div>
                      <span className="text-sm font-medium text-white">Alice</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-amber-400" />
                    <div className="flex items-center">
                      <div className="p-2 bg-yellow-400 rounded-full mr-2 text-black">
                        <span className="text-sm">💰</span>
                      </div>
                      <span className="text-sm font-medium text-white">$50</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="p-2 bg-yellow-400 rounded-full mr-2 text-black">
                        <span className="text-sm">💰</span>
                      </div>
                      <span className="text-sm font-medium text-white">$50</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-amber-400" />
                    <div className="flex items-center">
                      <div className="p-2 bg-amber-400/80 rounded-full mr-2 text-black">
                        <span className="text-sm">👨‍🍳</span>
                      </div>
                      <span className="text-sm font-medium text-white">Bob</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-white">Allows goods and services to be traded without direct barter, solving the coincidence of wants problem.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="border-2 border-amber-400 rounded-lg shadow-md overflow-hidden bg-black"
            >
              <div className="bg-amber-500/80 p-3 text-white">
                <h4 className="font-semibold text-lg flex items-center">
                  <Scale className="h-5 w-5 mr-2" /> Unit of Account
                </h4>
              </div>
              <div className="p-4">
                <div className="bg-black p-3 rounded-md mb-4 border border-amber-400">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center">
                      <div className="p-2 bg-amber-400/80 rounded-full mr-2 text-black">
                        <span className="text-sm">🍎</span>
                      </div>
                      <span className="text-sm font-medium text-white">Apples</span>
                    </div>
                    <span className="font-medium text-amber-300">$2/lb</span>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center">
                      <div className="p-2 bg-amber-400/80 rounded-full mr-2 text-black">
                        <span className="text-sm">🥖</span>
                      </div>
                      <span className="text-sm font-medium text-white">Bread</span>
                    </div>
                    <span className="font-medium text-amber-300">$4/loaf</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="p-2 bg-amber-400/80 rounded-full mr-2 text-black">
                        <span className="text-sm">🥛</span>
                      </div>
                      <span className="text-sm font-medium text-white">Milk</span>
                    </div>
                    <span className="font-medium text-amber-300">$3/gal</span>
                  </div>
                </div>
                <p className="text-sm text-white">Provides a common measure of value, enabling comparison, accounting, and economic calculation.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="border-2 border-amber-400 rounded-lg shadow-md overflow-hidden bg-black"
            >
              <div className="bg-amber-500/80 p-3 text-white">
                <h4 className="font-semibold text-lg flex items-center">
                  <Clock className="h-5 w-5 mr-2" /> Store of Value
                </h4>
              </div>
              <div className="p-4">
                <div className="bg-black p-3 rounded-md mb-4 border border-amber-400">
                  <div className="flex flex-col items-center">
                    <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
                      <div className="bg-amber-500/80 h-2.5 rounded-full w-3/4"></div>
                    </div>
                    <div className="flex justify-between w-full mb-3">
                      <div className="flex flex-col items-center">
                        <div className="p-2 bg-amber-400/80 rounded-full mb-1 text-black">
                          <Banknote className="h-4 w-4" />
                        </div>
                        <span className="text-xs font-medium text-white">Today</span>
                      </div>
                      <div className="border-l border-dashed border-amber-400 h-10"></div>
                      <div className="flex flex-col items-center">
                        <div className="p-2 bg-amber-400/80 rounded-full mb-1 text-black">
                          <Banknote className="h-4 w-4" />
                        </div>
                        <span className="text-xs font-medium text-white">Future</span>
                      </div>
                    </div>
                    <p className="text-xs text-center text-amber-300 italic">Preserves purchasing power over time</p>
                  </div>
                </div>
                <p className="text-sm text-white">Allows wealth to be saved for future use, enabling saving, investment, and deferred consumption.</p>
              </div>
            </motion.div>
          </div>
          
          <div className="mb-6">
            <h4 className="font-semibold text-xl mb-3 text-amber-300">The Interconnected Nature of Money's Functions</h4>
            <p className="text-white">These three functions complement each other, creating a powerful economic tool. Good money should excel at all three functions, though in practice, different forms of money may perform better at some functions than others.</p>
          </div>
          
          <h4 className="font-semibold text-lg mt-6 mb-3 text-amber-300">1. Medium of Exchange</h4>
          <p className="text-white">This is money's most basic function—it's something widely accepted in exchange for goods and services. An effective medium of exchange should be:</p>
          <ul className="list-disc pl-6 space-y-1 my-3 text-white">
            <li>Portable: Easy to carry and transfer</li>
            <li>Divisible: Can be broken into smaller units</li>
            <li>Durable: Doesn't deteriorate quickly</li>
            <li>Fungible: Each unit is interchangeable with any other unit</li>
          </ul>
          <p className="text-white">Without money as a medium of exchange, we would be limited to direct barter, which requires a "double coincidence of wants"—each party must want what the other has. Money eliminates this constraint by serving as an intermediary good that anyone will accept.</p>
          
          <h4 className="font-semibold text-lg mt-6 mb-3 text-amber-300">2. Unit of Account</h4>
          <p className="text-white">Money provides a common measurement for the value of goods and services. This function allows us to:</p>
          <ul className="list-disc pl-6 space-y-1 my-3 text-white">
            <li>Compare prices across different goods</li>
            <li>Calculate profits and losses</li>
            <li>Keep accounting records</li>
            <li>Make economic calculations</li>
          </ul>
          <p className="text-white">As a unit of account, money serves as the yardstick by which market prices are measured. This standardized system of value enables the complex calculations required for modern economic planning, investing, and business operations.</p>
          
          <h4 className="font-semibold text-lg mt-6 mb-3 text-amber-300">3. Store of Value</h4>
          <p className="text-white">Money allows wealth to be saved and retrieved later with minimal loss of purchasing power. An effective store of value should:</p>
          <ul className="list-disc pl-6 space-y-1 my-3 text-white">
            <li>Maintain its value over time</li>
            <li>Be resistant to debasement or inflation</li>
            <li>Have predictable supply characteristics</li>
            <li>Be difficult to counterfeit or reproduce</li>
          </ul>
          <p className="text-white">The store of value function enables a critical economic behavior: delaying consumption. By storing value for future use, money allows people to save for large purchases, invest for the future, manage risk through insurance, and build intergenerational wealth.</p>
          
          <div className="bg-black p-4 rounded-md my-6 border-2 border-amber-400">
            <h4 className="text-amber-300 font-semibold mb-2 flex items-center">
              <Bitcoin className="h-5 w-5 mr-2 text-orange-400" /> Bitcoin Connection
            </h4>
            <p className="text-white">As we progress through this course, we'll examine how Bitcoin performs each of these functions, with particular emphasis on its properties as a store of value. While Bitcoin has shown strengths in all three areas, it currently excels most as a store of value, particularly in environments with high monetary inflation or financial instability.</p>
          </div>
        </div>
      )
    },
    {
      title: "The Evolution of Money",
      type: "text",
      estimatedMinutes: 7,
      content: (
        <div>
          <p className="mb-6 text-white">Throughout human history, money has evolved to meet the changing needs of increasingly complex societies. This evolution reflects our continuous search for more efficient and reliable monetary technologies.</p>
          
          <div className="mb-10 p-6 border-2 border-amber-400 bg-black rounded-lg shadow-md">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-amber-300 mb-3">The Evolution of Money Timeline</h3>
              <p className="text-white">Each transition in monetary history has solved previous limitations while introducing new challenges.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
              {/* Commodity Money */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="border-2 border-amber-400 rounded-lg overflow-hidden bg-black shadow-md"
              >
                <div className="p-3 bg-amber-500/80 text-white text-center">
                  <h4 className="font-medium text-sm">9000+ BCE</h4>
                </div>
                <div className="p-4 flex flex-col items-center">
                  <div className="h-16 w-16 flex items-center justify-center mb-3 bg-amber-400/80 rounded-full text-black">
                    <span className="text-3xl">🐮</span>
                  </div>
                  <h5 className="font-semibold text-center mb-1 text-amber-300">Commodity Money</h5>
                  <p className="text-xs text-white text-center mb-2">Physical items with intrinsic value</p>
                  <div className="w-full bg-black p-2 rounded text-xs text-white mt-auto border border-amber-400">
                    <span className="font-semibold block mb-1 text-amber-300">Key Innovation:</span>
                    First widely accepted standards of value
                  </div>
                </div>
              </motion.div>
              
              {/* Metallic Money */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="border-2 border-amber-400 rounded-lg overflow-hidden bg-black shadow-md"
              >
                <div className="p-3 bg-amber-500/80 text-white text-center">
                  <h4 className="font-medium text-sm">~600 BCE</h4>
                </div>
                <div className="p-4 flex flex-col items-center">
                  <div className="h-16 w-16 flex items-center justify-center mb-3 bg-amber-400/80 rounded-full text-black">
                    <Coins className="h-8 w-8" />
                  </div>
                  <h5 className="font-semibold text-center mb-1 text-amber-300">Metallic Money</h5>
                  <p className="text-xs text-white text-center mb-2">Standardized coins in precious metals</p>
                  <div className="w-full bg-black p-2 rounded text-xs text-white mt-auto border border-amber-400">
                    <span className="font-semibold block mb-1 text-amber-300">Key Innovation:</span>
                    Uniform, divisible units with state-backed legitimacy
                  </div>
                </div>
              </motion.div>
              
              {/* Representative Money */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="border-2 border-amber-400 rounded-lg overflow-hidden bg-black shadow-md"
              >
                <div className="p-3 bg-amber-500/80 text-white text-center">
                  <h4 className="font-medium text-sm">17th Century</h4>
                </div>
                <div className="p-4 flex flex-col items-center">
                  <div className="h-16 w-16 flex items-center justify-center mb-3 bg-green-400/80 rounded-full text-black">
                    <DollarSign className="h-8 w-8" />
                  </div>
                  <h5 className="font-semibold text-center mb-1 text-amber-300">Representative Money</h5>
                  <p className="text-xs text-white text-center mb-2">Paper certificates backed by precious metals</p>
                  <div className="w-full bg-black p-2 rounded text-xs text-white mt-auto border border-amber-400">
                    <span className="font-semibold block mb-1 text-amber-300">Key Innovation:</span>
                    Improved portability without sacrificing value
                  </div>
                </div>
              </motion.div>
              
              {/* Fiat Money */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
                className="border-2 border-amber-400 rounded-lg overflow-hidden bg-black shadow-md"
              >
                <div className="p-3 bg-amber-500/80 text-white text-center">
                  <h4 className="font-medium text-sm">20th Century</h4>
                </div>
                <div className="p-4 flex flex-col items-center">
                  <div className="h-16 w-16 flex items-center justify-center mb-3 bg-green-400/80 rounded-full text-black">
                    <Banknote className="h-8 w-8" />
                  </div>
                  <h5 className="font-semibold text-center mb-1 text-amber-300">Fiat Money</h5>
                  <p className="text-xs text-white text-center mb-2">Government-issued currency without commodity backing</p>
                  <div className="w-full bg-black p-2 rounded text-xs text-white mt-auto border border-amber-400">
                    <span className="font-semibold block mb-1 text-amber-300">Key Innovation:</span>
                    Elastic money supply controlled by central banks
                  </div>
                </div>
              </motion.div>
              
              {/* Digital Cryptocurrency */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
                className="border-2 border-orange-400 rounded-lg overflow-hidden bg-black shadow-md"
              >
                <div className="p-3 bg-orange-500/80 text-white text-center">
                  <h4 className="font-medium text-sm">2009 - Present</h4>
                </div>
                <div className="p-4 flex flex-col items-center">
                  <div className="h-16 w-16 flex items-center justify-center mb-3 bg-orange-400/80 rounded-full text-black">
                    <Bitcoin className="h-8 w-8" />
                  </div>
                  <h5 className="font-semibold text-center mb-1 text-orange-300">Cryptocurrency</h5>
                  <p className="text-xs text-white text-center mb-2">Digital, decentralized monetary systems</p>
                  <div className="w-full bg-black p-2 rounded text-xs text-white mt-auto border border-orange-400">
                    <span className="font-semibold block mb-1 text-orange-300">Key Innovation:</span>
                    Trustless verification and programmatic scarcity
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="text-sm text-amber-300 text-center">
              Each form of money solved problems from previous forms but introduced new challenges and trade-offs.
            </div>
          </div>
          
          <h4 className="font-semibold text-lg mt-8 mb-3 text-amber-300">Commodity Money: The Original Standard</h4>
          <p className="text-white">The earliest forms of money were commodities with intrinsic value—things valuable in themselves, not just for their use as money. These emerged organically in societies around the world, showing the universal need for standardized exchange media.</p>
          
          <div className="grid md:grid-cols-2 gap-6 my-4">
            <div className="border border-amber-400 rounded-md p-4 bg-black">
              <h5 className="font-medium mb-2 text-amber-300">Historical Examples</h5>
              <ul className="list-disc pl-6 space-y-1 text-white text-sm">
            <li>Cattle and livestock (the word "pecuniary" comes from the Latin "pecus," meaning cattle)</li>
            <li>Salt (Roman soldiers were paid in salt—the origin of the word "salary")</li>
                <li>Cowrie shells (used across Africa, Asia, and Oceania)</li>
                <li>Tobacco (used as currency in colonial Virginia)</li>
            <li>Precious metals like copper, silver, and gold</li>
          </ul>
            </div>
            <div className="border border-amber-400 rounded-md p-4 bg-black">
              <h5 className="font-medium mb-2 text-amber-300">Limitations</h5>
              <ul className="list-disc pl-6 space-y-1 text-white text-sm">
                <li>Difficult to transport in large quantities</li>
                <li>Often not easily divisible into smaller units</li>
                <li>Perishable (in many cases)</li>
                <li>Inconsistent quality and value</li>
                <li>Limited by natural supply, constraining economic growth</li>
              </ul>
            </div>
          </div>
          
          <h4 className="font-semibold text-lg mt-6 mb-3 text-amber-300">Metallic Money: The First Standardization</h4>
          <p className="text-white">Over time, precious metals emerged as superior forms of money due to their durability, portability, divisibility, and scarcity. The introduction of standardized coins around 600 BCE in Lydia (modern Turkey) revolutionized trade by providing uniform, easily recognizable units.</p>
          
          <p className="text-white mt-2">The innovation of minting—stamping metal with standardized weights and purity marks—created trust in coins as reliable units of value. This standardization enabled trade networks to expand dramatically across the ancient world.</p>
          
          <h4 className="font-semibold text-lg mt-6 mb-3 text-amber-300">Representative Money: Solving the Weight Problem</h4>
          <p className="text-white">As commerce expanded in volume and distance, carrying large amounts of metal became impractical. Representative money—paper receipts backed by precious metals stored in secure vaults—emerged as a practical solution. Notable examples include:</p>
          <ul className="list-disc pl-6 space-y-1 my-3 text-white">
            <li>Goldsmith receipts in medieval Europe</li>
            <li>The gold standard system (19th-20th centuries)</li>
          </ul>
          
          <p className="text-white mt-2">This innovation maintained the perceived stability of commodity money while gaining the portability advantages of paper. However, it introduced a new requirement: trust in the custodian holding the underlying assets.</p>
          
          <h4 className="font-semibold text-lg mt-6 mb-3 text-amber-300">Fiat Money: Removing the Metal Backing</h4>
          <p className="text-white">Modern money is primarily fiat money—currency established as money by government regulation but not backed by physical commodities. Its value derives from:</p>
          <ul className="list-disc pl-6 space-y-1 my-3 text-white">
            <li>Legal tender laws requiring its acceptance</li>
            <li>Trust in the issuing government</li>
            <li>Network effects from widespread adoption</li>
          </ul>
          <p className="text-white">The global shift to fiat currencies was completed when the United States abandoned the gold standard in 1971, marking a significant transition in monetary history. This change gave governments and central banks unprecedented control over their money supply, enabling new monetary policies but also creating risks of inflation and currency debasement.</p>
          
          <h4 className="font-semibold text-lg mt-6 mb-3 text-amber-300">Digital Money: The Computerization of Currency</h4>
          <p className="text-white">The late 20th century saw the rise of digital representations of fiat currencies—electronic bank accounts, credit cards, and online payment systems. These systems still rely on centralized financial institutions and government-backed currencies but enable faster transactions across greater distances.</p>
          
          <h4 className="font-semibold text-lg mt-6 mb-3 text-orange-300">Cryptocurrency: The Trustless Revolution</h4>
          <p className="text-white">This evolution continues with the invention of Bitcoin in 2009 and subsequent cryptocurrencies, which represent a fundamental innovation: digital scarcity without centralized control. Bitcoin combines properties of both commodity money (fixed supply, mining requirement) and digital money (portability, divisibility) while eliminating the need for trusted third parties through its blockchain technology.</p>
          
          <div className="bg-black p-5 rounded-lg my-6 border-2 border-amber-400">
            <h5 className="font-semibold mb-3 text-amber-300">Historical Perspective</h5>
            <p className="text-white mb-3">Each transition in monetary history has been driven by the search for better money—forms that more effectively fulfill the three key functions while minimizing downsides. Bitcoin represents the latest step in this evolution, addressing limitations of fiat currencies like inflation risk and centralized control while maintaining their advantages of portability and divisibility.</p>
            <p className="text-white">The historical pattern suggests that monetary systems tend to evolve toward forms that have lower storage and transaction costs, greater durability, improved divisibility, and better resistance to counterfeiting—all areas where digital cryptocurrencies potentially excel.</p>
          </div>
        </div>
      )
    },
    {
      title: "The Properties of Good Money",
      type: "text",
      estimatedMinutes: 6,
      content: (
        <div>
          <p className="text-white mb-6">Throughout history, many items have been used as money, but some have been more successful than others. The best forms of money share certain key properties that enable them to effectively fulfill money's three main functions.</p>
          
          <div className="border-2 border-amber-400 rounded-lg overflow-hidden shadow-md mb-8 bg-black">
            <div className="bg-amber-500 p-4 text-white">
              <h3 className="text-lg font-semibold">Monetary Properties Comparison</h3>
              <p className="text-sm text-white">Different forms of money excel in different properties</p>
            </div>
            
            <div className="p-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-amber-400">
                      <th className="py-2 px-3 text-left text-amber-300">Property</th>
                      <th className="py-2 px-3 text-center">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-amber-300 flex items-center justify-center mb-1 text-black">
                            <Coins className="h-4 w-4" />
                          </div>
                          <span className="text-amber-200">Gold</span>
                        </div>
                      </th>
                      <th className="py-2 px-3 text-center">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center mb-1 text-black">
                            <Banknote className="h-4 w-4" />
                          </div>
                          <span className="text-green-300">Fiat</span>
                        </div>
                      </th>
                      <th className="py-2 px-3 text-center">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center mb-1 text-black">
                            <Bitcoin className="h-4 w-4" />
                          </div>
                          <span className="text-orange-300">Bitcoin</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-amber-400/30">
                      <td className="py-3 px-3 font-medium text-white">Durability</td>
                      <td className="py-3 px-3 text-center text-amber-200">★★★★★</td>
                      <td className="py-3 px-3 text-center text-green-300">★★★☆☆</td>
                      <td className="py-3 px-3 text-center text-orange-300">★★★★★</td>
                    </tr>
                    <tr className="border-b border-amber-400/30">
                      <td className="py-3 px-3 font-medium text-white">Portability</td>
                      <td className="py-3 px-3 text-center text-amber-200">★★☆☆☆</td>
                      <td className="py-3 px-3 text-center text-green-300">★★★★☆</td>
                      <td className="py-3 px-3 text-center text-orange-300">★★★★★</td>
                    </tr>
                    <tr className="border-b border-amber-400/30">
                      <td className="py-3 px-3 font-medium text-white">Divisibility</td>
                      <td className="py-3 px-3 text-center text-amber-200">★★★☆☆</td>
                      <td className="py-3 px-3 text-center text-green-300">★★★★☆</td>
                      <td className="py-3 px-3 text-center text-orange-300">★★★★★</td>
                    </tr>
                    <tr className="border-b border-amber-400/30">
                      <td className="py-3 px-3 font-medium text-white">Fungibility</td>
                      <td className="py-3 px-3 text-center text-amber-200">★★★★★</td>
                      <td className="py-3 px-3 text-center text-green-300">★★★★☆</td>
                      <td className="py-3 px-3 text-center text-orange-300">★★★★☆</td>
                    </tr>
                    <tr className="border-b border-amber-400/30">
                      <td className="py-3 px-3 font-medium text-white">Scarcity</td>
                      <td className="py-3 px-3 text-center text-amber-200">★★★★☆</td>
                      <td className="py-3 px-3 text-center text-green-300">★☆☆☆☆</td>
                      <td className="py-3 px-3 text-center text-orange-300">★★★★★</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-medium text-white">Verifiability</td>
                      <td className="py-3 px-3 text-center text-amber-200">★★★☆☆</td>
                      <td className="py-3 px-3 text-center text-green-300">★★★☆☆</td>
                      <td className="py-3 px-3 text-center text-orange-300">★★★★★</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-6 gap-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-black border-2 border-amber-400 rounded-lg p-5 shadow-md"
            >
              <h4 className="font-semibold text-lg mb-3 text-amber-300 flex items-center">
                <ShieldCheck className="h-5 w-5 mr-2 text-amber-400" /> Durability
              </h4>
              <p className="text-white mb-3">Money shouldn't deteriorate, rot, or decay easily over time. Its physical integrity must withstand regular use and the passage of time.</p>
              <div className="bg-black rounded p-3 border border-amber-400">
                <ul className="text-sm space-y-2 text-white">
                  <li><span className="font-medium text-amber-200">Gold:</span> Can last thousands of years with minimal degradation</li>
                  <li><span className="font-medium text-green-300">Fiat:</span> Physical notes wear out and require replacement</li>
                  <li><span className="font-medium text-orange-300">Bitcoin:</span> Digital information preserved across the entire network</li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black border-2 border-amber-400 rounded-lg p-5 shadow-md"
            >
              <h4 className="font-semibold text-lg mb-3 text-amber-300 flex items-center">
                <Wallet className="h-5 w-5 mr-2 text-amber-400" /> Portability
              </h4>
              <p className="text-white mb-3">Money should have high value relative to its weight and size, making it easy to transport across distances.</p>
              <div className="bg-black rounded p-3 border border-amber-400">
                <ul className="text-sm space-y-2 text-white">
                  <li><span className="font-medium text-amber-200">Gold:</span> High density makes large values extremely heavy</li>
                  <li><span className="font-medium text-green-300">Fiat:</span> Physical cash is portable; digital transfers are very efficient</li>
                  <li><span className="font-medium text-orange-300">Bitcoin:</span> Can transfer millions of dollars with a QR code</li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-black border-2 border-amber-400 rounded-lg p-5 shadow-md"
            >
              <h4 className="font-semibold text-lg mb-3 text-amber-300 flex items-center">
                <Scale className="h-5 w-5 mr-2 text-amber-400" /> Divisibility
              </h4>
              <p className="text-white mb-3">Good money can be divided into smaller units without losing value, enabling transactions of various sizes.</p>
              <div className="bg-black rounded p-3 border border-amber-400">
                <ul className="text-sm space-y-2 text-white">
                  <li><span className="font-medium text-amber-200">Gold:</span> Can be divided, but difficult to use tiny amounts practically</li>
                  <li><span className="font-medium text-green-300">Fiat:</span> Limited by smallest denomination (e.g., cents)</li>
                  <li><span className="font-medium text-orange-300">Bitcoin:</span> Divisible to eight decimal places (1 satoshi = 0.00000001 BTC)</li>
                </ul>
            </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-black border-2 border-amber-400 rounded-lg p-5 shadow-md"
            >
              <h4 className="font-semibold text-lg mb-3 text-amber-300 flex items-center">
                <Repeat className="h-5 w-5 mr-2 text-amber-400" /> Fungibility
              </h4>
              <p className="text-white mb-3">Each unit should be interchangeable with any other unit of the same value, creating uniformity in exchange.</p>
              <div className="bg-black rounded p-3 border border-amber-400">
                <ul className="text-sm space-y-2 text-white">
                  <li><span className="font-medium text-amber-200">Gold:</span> Pure gold is perfectly fungible, regardless of source</li>
                  <li><span className="font-medium text-green-300">Fiat:</span> Bills and coins are fungible, though serial numbers exist</li>
                  <li><span className="font-medium text-orange-300">Bitcoin:</span> Technically fungible, but transaction history is traceable</li>
                </ul>
            </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-black border-2 border-amber-400 rounded-lg p-5 shadow-md"
            >
              <h4 className="font-semibold text-lg mb-3 text-amber-300 flex items-center">
                <BarChart4 className="h-5 w-5 mr-2 text-amber-400" /> Scarcity
              </h4>
              <p className="text-white mb-3">Money should be difficult to produce or find, maintaining its value through limited supply and resistance to debasement.</p>
              <div className="bg-black rounded p-3 border border-amber-400">
                <ul className="text-sm space-y-2 text-white">
                  <li><span className="font-medium text-amber-200">Gold:</span> Naturally scarce, though new mining gradually increases supply</li>
                  <li><span className="font-medium text-green-300">Fiat:</span> No natural scarcity; can be printed at will by authorities</li>
                  <li><span className="font-medium text-orange-300">Bitcoin:</span> Mathematically capped at 21 million units ever</li>
                </ul>
            </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-black border-2 border-amber-400 rounded-lg p-5 shadow-md"
            >
              <h4 className="font-semibold text-lg mb-3 text-amber-300 flex items-center">
                <ShieldCheck className="h-5 w-5 mr-2 text-amber-400" /> Verifiability
              </h4>
              <p className="text-white mb-3">Users must be able to easily verify that the money is genuine, not counterfeit or fraudulent.</p>
              <div className="bg-black rounded p-3 border border-amber-400">
                <ul className="text-sm space-y-2 text-white">
                  <li><span className="font-medium text-amber-200">Gold:</span> Requires expertise or equipment to verify purity</li>
                  <li><span className="font-medium text-green-300">Fiat:</span> Security features help, but counterfeiting remains an issue</li>
                  <li><span className="font-medium text-orange-300">Bitcoin:</span> Cryptographically verified by the entire network</li>
                </ul>
            </div>
            </motion.div>
          </div>
          
          <div className="mt-8 bg-black p-5 rounded-lg border-2 border-amber-400">
            <h4 className="text-amber-300 font-semibold mb-3">The Monetary Property Tradeoff</h4>
            <p className="text-white">When evaluating any form of money—whether ancient shells, gold coins, dollar bills, or digital currencies—consider how well it fulfills these properties. Throughout history, societies have made different tradeoffs among these properties based on their technological capabilities and economic needs.</p>
            <p className="text-white mt-3">The success of a monetary system depends largely on how well its currency satisfies these requirements. As technology advances, our ability to create forms of money that excel across all these dimensions continues to evolve—potentially reducing the need for traditional tradeoffs that have characterized money throughout history.</p>
          </div>
        </div>
      )
    },
    {
      title: "Knowledge Check",
      type: "quiz",
      estimatedMinutes: 5,
      content: (
        <div>
          <p className="text-white mb-4">
            Test your understanding of money concepts with this short quiz.
          </p>
          
          <div className="space-y-6 mb-8">
            <div className="bg-black border-2 border-amber-400 rounded-lg p-5">
              <h4 className="text-amber-300 font-medium mb-3">1. What problem does money fundamentally solve?</h4>
              <div className="space-y-2">
                <div 
                  className={`p-3 rounded-lg flex items-center cursor-pointer ${
                    selectedAnswers[1] === 'a' 
                      ? 'bg-amber-500/40 border-2 border-amber-500' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                  onClick={() => setSelectedAnswers({...selectedAnswers, 1: 'a'})}
                >
                  <div className={`h-5 w-5 rounded-full mr-3 flex-shrink-0 ${
                    selectedAnswers[1] === 'a' ? 'bg-amber-500' : 'border-2 border-gray-500'
                  }`}></div>
                  <span className="text-white">The problem of government control over the economy</span>
                </div>
                
                <div 
                  className={`p-3 rounded-lg flex items-center cursor-pointer ${
                    selectedAnswers[1] === 'b' 
                      ? 'bg-amber-500/40 border-2 border-amber-500' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                  onClick={() => setSelectedAnswers({...selectedAnswers, 1: 'b'})}
                >
                  <div className={`h-5 w-5 rounded-full mr-3 flex-shrink-0 ${
                    selectedAnswers[1] === 'b' ? 'bg-amber-500' : 'border-2 border-gray-500'
                  }`}></div>
                  <span className="text-white">The coincidence of wants problem in trade and exchange</span>
                </div>
                
                <div 
                  className={`p-3 rounded-lg flex items-center cursor-pointer ${
                    selectedAnswers[1] === 'c' 
                      ? 'bg-amber-500/40 border-2 border-amber-500' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                  onClick={() => setSelectedAnswers({...selectedAnswers, 1: 'c'})}
                >
                  <div className={`h-5 w-5 rounded-full mr-3 flex-shrink-0 ${
                    selectedAnswers[1] === 'c' ? 'bg-amber-500' : 'border-2 border-gray-500'
                  }`}></div>
                  <span className="text-white">The need to store physical wealth securely</span>
                </div>
              </div>
              
              {showResults && (
                <div className="mt-4">
                  {selectedAnswers[1] === correctAnswers[1] ? (
                    <p className="text-green-500 font-medium">Correct! Money solves the coincidence of wants problem in trade.</p>
                  ) : (
                    <p className="text-red-500 font-medium">Incorrect. Money primarily solves the coincidence of wants problem in trade and exchange.</p>
                  )}
                </div>
              )}
            </div>
            
            <div className="bg-black border-2 border-amber-400 rounded-lg p-5">
              <h4 className="text-amber-300 font-medium mb-3">2. Which of the following is NOT one of the three primary functions of money?</h4>
              <div className="space-y-2">
                <div 
                  className={`p-3 rounded-lg flex items-center cursor-pointer ${
                    selectedAnswers[2] === 'a' 
                      ? 'bg-amber-500/40 border-2 border-amber-500' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                  onClick={() => setSelectedAnswers({...selectedAnswers, 2: 'a'})}
                >
                  <div className={`h-5 w-5 rounded-full mr-3 flex-shrink-0 ${
                    selectedAnswers[2] === 'a' ? 'bg-amber-500' : 'border-2 border-gray-500'
                  }`}></div>
                  <span className="text-white">Medium of exchange</span>
                </div>
                
                <div 
                  className={`p-3 rounded-lg flex items-center cursor-pointer ${
                    selectedAnswers[2] === 'b' 
                      ? 'bg-amber-500/40 border-2 border-amber-500' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                  onClick={() => setSelectedAnswers({...selectedAnswers, 2: 'b'})}
                >
                  <div className={`h-5 w-5 rounded-full mr-3 flex-shrink-0 ${
                    selectedAnswers[2] === 'b' ? 'bg-amber-500' : 'border-2 border-gray-500'
                  }`}></div>
                  <span className="text-white">Store of value</span>
                </div>
                
                <div 
                  className={`p-3 rounded-lg flex items-center cursor-pointer ${
                    selectedAnswers[2] === 'c' 
                      ? 'bg-amber-500/40 border-2 border-amber-500' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                  onClick={() => setSelectedAnswers({...selectedAnswers, 2: 'c'})}
                >
                  <div className={`h-5 w-5 rounded-full mr-3 flex-shrink-0 ${
                    selectedAnswers[2] === 'c' ? 'bg-amber-500' : 'border-2 border-gray-500'
                  }`}></div>
                  <span className="text-white">Unit of account</span>
                </div>
                
                <div 
                  className={`p-3 rounded-lg flex items-center cursor-pointer ${
                    selectedAnswers[2] === 'd' 
                      ? 'bg-amber-500/40 border-2 border-amber-500' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                  onClick={() => setSelectedAnswers({...selectedAnswers, 2: 'd'})}
                >
                  <div className={`h-5 w-5 rounded-full mr-3 flex-shrink-0 ${
                    selectedAnswers[2] === 'd' ? 'bg-amber-500' : 'border-2 border-gray-500'
                  }`}></div>
                  <span className="text-white">Generator of wealth</span>
                </div>
              </div>
              
              {showResults && (
                <div className="mt-4">
                  {selectedAnswers[2] === correctAnswers[2] ? (
                    <p className="text-green-500 font-medium">Correct! The three primary functions of money are medium of exchange, store of value, and unit of account.</p>
                  ) : (
                    <p className="text-red-500 font-medium">Incorrect. "Generator of wealth" is not one of the three primary functions of money.</p>
                  )}
                </div>
              )}
            </div>
            
            <div className="bg-black border-2 border-amber-400 rounded-lg p-5">
              <h4 className="text-amber-300 font-medium mb-3">3. Why did precious metals like gold emerge as superior forms of money in early civilizations?</h4>
              <div className="space-y-2">
                <div 
                  className={`p-3 rounded-lg flex items-center cursor-pointer ${
                    selectedAnswers[3] === 'a' 
                      ? 'bg-amber-500/40 border-2 border-amber-500' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                  onClick={() => setSelectedAnswers({...selectedAnswers, 3: 'a'})}
                >
                  <div className={`h-5 w-5 rounded-full mr-3 flex-shrink-0 ${
                    selectedAnswers[3] === 'a' ? 'bg-amber-500' : 'border-2 border-gray-500'
                  }`}></div>
                  <span className="text-white">They were mandated by governments as the only legal form of money</span>
                </div>
                
                <div 
                  className={`p-3 rounded-lg flex items-center cursor-pointer ${
                    selectedAnswers[3] === 'b' 
                      ? 'bg-amber-500/40 border-2 border-amber-500' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                  onClick={() => setSelectedAnswers({...selectedAnswers, 3: 'b'})}
                >
                  <div className={`h-5 w-5 rounded-full mr-3 flex-shrink-0 ${
                    selectedAnswers[3] === 'b' ? 'bg-amber-500' : 'border-2 border-gray-500'
                  }`}></div>
                  <span className="text-white">They possessed superior monetary properties like durability, scarcity, and divisibility</span>
                </div>
                
                <div 
                  className={`p-3 rounded-lg flex items-center cursor-pointer ${
                    selectedAnswers[3] === 'c' 
                      ? 'bg-amber-500/40 border-2 border-amber-500' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                  onClick={() => setSelectedAnswers({...selectedAnswers, 3: 'c'})}
                >
                  <div className={`h-5 w-5 rounded-full mr-3 flex-shrink-0 ${
                    selectedAnswers[3] === 'c' ? 'bg-amber-500' : 'border-2 border-gray-500'
                  }`}></div>
                  <span className="text-white">They had religious significance and were required for ceremonial purposes</span>
                </div>
              </div>
              
              {showResults && (
                <div className="mt-4">
                  {selectedAnswers[3] === correctAnswers[3] ? (
                    <p className="text-green-500 font-medium">Correct! Gold and silver naturally emerged as money due to their superior monetary properties.</p>
                  ) : (
                    <p className="text-red-500 font-medium">Incorrect. Precious metals emerged as money because they had superior monetary properties like durability, scarcity, and divisibility.</p>
                  )}
                </div>
              )}
            </div>
            
            <div className="bg-black border-2 border-amber-400 rounded-lg p-5">
              <h4 className="text-amber-300 font-medium mb-3">4. What is the most important aspect of money's function as a "store of value"?</h4>
              <div className="space-y-2">
                <div 
                  className={`p-3 rounded-lg flex items-center cursor-pointer ${
                    selectedAnswers[4] === 'a' 
                      ? 'bg-amber-500/40 border-2 border-amber-500' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                  onClick={() => setSelectedAnswers({...selectedAnswers, 4: 'a'})}
                >
                  <div className={`h-5 w-5 rounded-full mr-3 flex-shrink-0 ${
                    selectedAnswers[4] === 'a' ? 'bg-amber-500' : 'border-2 border-gray-500'
                  }`}></div>
                  <span className="text-white">The ability to be easily transported across distances</span>
                </div>
                
                <div 
                  className={`p-3 rounded-lg flex items-center cursor-pointer ${
                    selectedAnswers[4] === 'b' 
                      ? 'bg-amber-500/40 border-2 border-amber-500' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                  onClick={() => setSelectedAnswers({...selectedAnswers, 4: 'b'})}
                >
                  <div className={`h-5 w-5 rounded-full mr-3 flex-shrink-0 ${
                    selectedAnswers[4] === 'b' ? 'bg-amber-500' : 'border-2 border-gray-500'
                  }`}></div>
                  <span className="text-white">The ability to preserve purchasing power over time</span>
                </div>
                
                <div 
                  className={`p-3 rounded-lg flex items-center cursor-pointer ${
                    selectedAnswers[4] === 'c' 
                      ? 'bg-amber-500/40 border-2 border-amber-500' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                  onClick={() => setSelectedAnswers({...selectedAnswers, 4: 'c'})}
                >
                  <div className={`h-5 w-5 rounded-full mr-3 flex-shrink-0 ${
                    selectedAnswers[4] === 'c' ? 'bg-amber-500' : 'border-2 border-gray-500'
                  }`}></div>
                  <span className="text-white">The ability to be divided into smaller units</span>
                </div>
                
                <div 
                  className={`p-3 rounded-lg flex items-center cursor-pointer ${
                    selectedAnswers[4] === 'd' 
                      ? 'bg-amber-500/40 border-2 border-amber-500' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                  onClick={() => setSelectedAnswers({...selectedAnswers, 4: 'd'})}
                >
                  <div className={`h-5 w-5 rounded-full mr-3 flex-shrink-0 ${
                    selectedAnswers[4] === 'd' ? 'bg-amber-500' : 'border-2 border-gray-500'
                  }`}></div>
                  <span className="text-white">The ability to be recognized by various merchants</span>
                </div>
              </div>
              
              {showResults && (
                <div className="mt-4">
                  {selectedAnswers[4] === correctAnswers[4] ? (
                    <p className="text-green-500 font-medium">Correct! Preserving purchasing power over time is the essential aspect of a good store of value.</p>
                  ) : (
                    <p className="text-red-500 font-medium">Incorrect. The ability to preserve purchasing power over time is the most important aspect of money as a store of value.</p>
                  )}
                </div>
              )}
            </div>
            
            <div className="bg-black border-2 border-amber-400 rounded-lg p-5">
              <h4 className="text-amber-300 font-medium mb-3">5. Which monetary system was first to completely abandon the gold standard?</h4>
              <div className="space-y-2">
                <div 
                  className={`p-3 rounded-lg flex items-center cursor-pointer ${
                    selectedAnswers[5] === 'a' 
                      ? 'bg-amber-500/40 border-2 border-amber-500' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                  onClick={() => setSelectedAnswers({...selectedAnswers, 5: 'a'})}
                >
                  <div className={`h-5 w-5 rounded-full mr-3 flex-shrink-0 ${
                    selectedAnswers[5] === 'a' ? 'bg-amber-500' : 'border-2 border-gray-500'
                  }`}></div>
                  <span className="text-white">The Roman Empire's coin system</span>
                </div>
                
                <div 
                  className={`p-3 rounded-lg flex items-center cursor-pointer ${
                    selectedAnswers[5] === 'b' 
                      ? 'bg-amber-500/40 border-2 border-amber-500' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                  onClick={() => setSelectedAnswers({...selectedAnswers, 5: 'b'})}
                >
                  <div className={`h-5 w-5 rounded-full mr-3 flex-shrink-0 ${
                    selectedAnswers[5] === 'b' ? 'bg-amber-500' : 'border-2 border-gray-500'
                  }`}></div>
                  <span className="text-white">The early Chinese paper money system</span>
                </div>
                
                <div 
                  className={`p-3 rounded-lg flex items-center cursor-pointer ${
                    selectedAnswers[5] === 'c' 
                      ? 'bg-amber-500/40 border-2 border-amber-500' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                  onClick={() => setSelectedAnswers({...selectedAnswers, 5: 'c'})}
                >
                  <div className={`h-5 w-5 rounded-full mr-3 flex-shrink-0 ${
                    selectedAnswers[5] === 'c' ? 'bg-amber-500' : 'border-2 border-gray-500'
                  }`}></div>
                  <span className="text-white">The European banking system in the Middle Ages</span>
                </div>
                
                <div 
                  className={`p-3 rounded-lg flex items-center cursor-pointer ${
                    selectedAnswers[5] === 'd' 
                      ? 'bg-amber-500/40 border-2 border-amber-500' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                  onClick={() => setSelectedAnswers({...selectedAnswers, 5: 'd'})}
                >
                  <div className={`h-5 w-5 rounded-full mr-3 flex-shrink-0 ${
                    selectedAnswers[5] === 'd' ? 'bg-amber-500' : 'border-2 border-gray-500'
                  }`}></div>
                  <span className="text-white">The modern fiat system that began in 1971</span>
                </div>
              </div>
              
              {showResults && (
                <div className="mt-4">
                  {selectedAnswers[5] === correctAnswers[5] ? (
                    <p className="text-green-500 font-medium">Correct! The modern fiat era began when the US abandoned the gold standard in 1971.</p>
                  ) : (
                    <p className="text-red-500 font-medium">Incorrect. The modern fiat system that began in 1971 was the first to completely abandon the gold standard globally.</p>
                  )}
                </div>
              )}
            </div>
          </div>
          
          {!showResults ? (
            <button 
              onClick={checkAnswers}
              className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg"
            >
              Check Answers
            </button>
          ) : (
            <div className="space-y-4">
              <div className="p-4 bg-gray-900 rounded-lg text-center">
                <p className="text-xl font-bold text-white mb-2">Your Score: {score}/5</p>
                <p className="text-amber-400">
                  {score === 5 ? 'Perfect! You\'ve mastered the fundamental concepts of money.' : 
                   score >= 4 ? 'Excellent! You have a strong understanding of money concepts.' :
                   score >= 3 ? 'Good job! You understand the core concepts, but review the material for more clarity.' :
                   'Review the module material and try again to improve your understanding of money fundamentals.'}
                </p>
              </div>
              
              <button 
                onClick={resetQuiz}
                className="w-full py-3 border border-amber-500 text-amber-500 hover:bg-amber-500/10 font-medium rounded-lg"
              >
                Retry Quiz
              </button>
            </div>
          )}
        </div>
      )
    },
    {
      title: "Key Takeaways",
      type: "text",
      estimatedMinutes: 2,
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Module Summary</h3>
            <p className="text-white mb-6">
              In this module, we explored the fundamental concept of money, its origins, functions, and evolution throughout human history.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-amber-300 flex">
                  <span className="bg-amber-500 text-black rounded-full h-7 w-7 inline-flex items-center justify-center mr-2">1</span>
                  Money Solves a Coordination Problem
                </h4>
                <p className="text-white mt-2 ml-9">
                  Money enables indirect exchange by eliminating the need for a coincidence of wants in trade, allowing economies to grow beyond simple barter transactions.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-amber-300 flex">
                  <span className="bg-amber-500 text-black rounded-full h-7 w-7 inline-flex items-center justify-center mr-2">2</span>
                  Three Essential Functions
                </h4>
                <p className="text-white mt-2 ml-9">
                  Effective money serves as a medium of exchange for trading, a unit of account for measuring value, and a store of value for preserving wealth over time.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-amber-300 flex">
                  <span className="bg-amber-500 text-black rounded-full h-7 w-7 inline-flex items-center justify-center mr-2">3</span>
                  The Evolution of Money
                </h4>
                <p className="text-white mt-2 ml-9">
                  Money has evolved through five major stages: barter, commodity money, metallic money, paper money, and digital money—each addressing limitations of previous forms.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-amber-300 flex">
                  <span className="bg-amber-500 text-black rounded-full h-7 w-7 inline-flex items-center justify-center mr-2">4</span>
                  Properties of Good Money
                </h4>
                <p className="text-white mt-2 ml-9">
                  Good money exhibits durability, portability, divisibility, uniformity, limited supply, and acceptability—qualities that determine its effectiveness in fulfilling monetary functions.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-amber-300 flex">
                  <span className="bg-amber-500 text-black rounded-full h-7 w-7 inline-flex items-center justify-center mr-2">5</span>
                  Bitcoin's Monetary Innovation
                </h4>
                <p className="text-white mt-2 ml-9">
                  Bitcoin represents a quantum leap in monetary technology, combining digital properties with scarcity and decentralization in a way that was previously impossible.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg border border-amber-500/40">
            <h3 className="text-lg font-semibold text-amber-300 mb-3">Looking Ahead</h3>
            <p className="text-white">
              Having established a foundation for understanding money, we'll next explore Bitcoin's role as a store of value—one of money's critical functions and perhaps Bitcoin's most important contribution to the monetary landscape.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <ModuleContent
      title="What is Money?"
      courseTitle="Beginner's Course"
      courseSlug="beginner"
      moduleNumber={1}
      totalModules={5}
      objectives={[
        "Understand the core functions of money and their significance",
        "Trace the historical evolution of money from commodities to cryptocurrencies",
        "Identify the key properties that make for good money",
        "Recognize how Bitcoin embodies these monetary properties"
      ]}
      keypoints={[
        "The three functions of money: medium of exchange, unit of account, store of value",
        "The evolution of monetary forms throughout history",
        "Six essential properties of good money",
        "How Bitcoin compares to traditional forms of money"
      ]}
      sections={sections}
      next={{
        title: "Store of Value Explained",
        path: "/learn/beginner/store-of-value"
      }}
    />
  );
};

export default WhatIsMoney; 