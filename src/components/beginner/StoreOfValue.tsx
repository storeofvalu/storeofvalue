import React from 'react';
import ModuleContent, { ModuleSection } from '../ModuleContent';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const StoreOfValue = () => {
  const [selectedAnswers, setSelectedAnswers] = React.useState<{[key: number]: string}>({});
  const [showResults, setShowResults] = React.useState(false);
  const [score, setScore] = React.useState(0);
  
  const correctAnswers = {
    1: "b", // To transfer purchasing power from the present to the future
    2: "b", // 21 million coins
    3: "b", // It increases, indicating growing scarcity
    4: "b", // Volatility (the others are key properties)
    5: "a"  // Gold
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

  const sections: ModuleSection[] = [
    {
      title: "What is a Store of Value?",
      type: "text",
      estimatedMinutes: 5,
      content: (
        <div>
          <p className="text-white mb-4">
            A <strong className="text-amber-300">store of value</strong> is any asset that can be saved, retrieved, and exchanged at a later time without significant loss of purchasing power. In other words, it's something that maintains its value over time and allows you to preserve wealth for future use.
          </p>
          
          <div className="bg-black p-4 rounded-md my-6 border-l-4 border-amber-400">
            <h4 className="text-lg font-semibold mb-2 text-amber-300">Key Insight</h4>
            <p className="text-white">The key function of a store of value is to transfer purchasing power from the present to the future.</p>
          </div>
          
          <p className="text-white mb-4">
            Consider what happens when you work hard and earn money. You have two options:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 my-4 text-white">
            <li>
              <strong className="text-amber-300">Spend it immediately</strong> on goods and services
            </li>
            <li>
              <strong className="text-amber-300">Save some for future use</strong> by storing it in something that will maintain its value
            </li>
          </ul>
          
          <p className="text-white">
            The second option requires a reliable store of value—an asset that won't significantly depreciate while you're holding it. Without good stores of value, saving and long-term planning become virtually impossible, forcing societies into immediate consumption patterns.
          </p>
        </div>
      )
    },
    {
      title: "Properties of an Effective Store of Value",
      type: "text",
      estimatedMinutes: 6,
      content: (
        <div>
          <p className="text-white mb-4">
            Not all assets maintain their value equally well over time. The best stores of value share several important properties:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="border-2 border-amber-400 bg-black rounded-md p-4"
            >
              <h4 className="font-semibold mb-2 text-amber-300">Scarcity</h4>
              <p className="text-white">The supply must be limited and difficult to increase. Assets that can be easily created or replicated make poor stores of value because they can be inflated away. Examples include precious metals, which require significant resources to mine, and Bitcoin, which has a fixed maximum supply of 21 million coins.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="border-2 border-amber-400 bg-black rounded-md p-4"
            >
              <h4 className="font-semibold mb-2 text-amber-300">Durability</h4>
              <p className="text-white">The asset must withstand time without degrading. Physical deterioration undermines an asset's ability to store value long-term. Gold doesn't rust or corrode, while digital assets like Bitcoin can be stored indefinitely without degradation.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="border-2 border-amber-400 bg-black rounded-md p-4"
            >
              <h4 className="font-semibold mb-2 text-amber-300">Portability</h4>
              <p className="text-white">Value should be easily transportable across space. Assets that are difficult to move limit your ability to take your wealth with you or transfer it to others. Digital assets excel here, as they can be transferred globally in minutes.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="border-2 border-amber-400 bg-black rounded-md p-4"
            >
              <h4 className="font-semibold mb-2 text-amber-300">Divisibility</h4>
              <p className="text-white">The ability to divide into smaller units allows for precise storage and exchange of value. Bitcoin can be divided down to 0.00000001 BTC (1 satoshi), making even tiny transactions possible.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="border-2 border-amber-400 bg-black rounded-md p-4"
            >
              <h4 className="font-semibold mb-2 text-amber-300">Recognizability</h4>
              <p className="text-white">Users must be able to easily verify the asset's authenticity. Counterfeit resistance is crucial for maintaining trust in the store of value. Bitcoin transactions can be verified by anyone running a node.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="border-2 border-amber-400 bg-black rounded-md p-4"
            >
              <h4 className="font-semibold mb-2 text-amber-300">Fungibility</h4>
              <p className="text-white">Each unit should be interchangeable with any other unit of the same value. This property ensures consistent valuation and ease of exchange.</p>
            </motion.div>
          </div>
          
          <p className="text-white">
            An asset that fulfills these criteria well has a greater likelihood of maintaining its value over time, making it an effective store of value.
          </p>
        </div>
      )
    },
    {
      title: "Traditional Stores of Value",
      type: "text",
      estimatedMinutes: 7,
      content: (
        <div>
          <p className="text-white mb-4">
            Throughout history, humans have used various assets to store value. Let's examine some traditional stores of value and their performance in this role:
          </p>
          
          <div className="my-6 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="border-2 border-amber-400 bg-black rounded-md overflow-hidden"
            >
              <div className="bg-amber-500/80 p-3 border-b border-amber-400">
                <h4 className="text-lg font-semibold text-white">Precious Metals (Gold and Silver)</h4>
              </div>
              <div className="p-4">
                <div className="flex items-start mb-2">
                  <div className="min-w-[100px] font-medium text-amber-300">Strengths:</div>
                  <ul className="list-disc pl-5 space-y-1 text-white">
                    <li>Limited supply and difficult to mine</li>
                    <li>Highly durable (doesn't corrode)</li>
                    <li>Thousands of years of historical acceptance</li>
                    <li>No counterparty risk (physical possession)</li>
                  </ul>
                </div>
                <div className="flex items-start">
                  <div className="min-w-[100px] font-medium text-amber-300">Limitations:</div>
                  <ul className="list-disc pl-5 space-y-1 text-white">
                    <li>Heavy and difficult to transport in large quantities</li>
                    <li>Costly to secure and store safely</li>
                    <li>Can be confiscated physically</li>
                    <li>Difficult to verify authenticity without specialized equipment</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="border-2 border-amber-400 bg-black rounded-md overflow-hidden"
            >
              <div className="bg-amber-500/80 p-3 border-b border-amber-400">
                <h4 className="text-lg font-semibold text-white">Real Estate</h4>
              </div>
              <div className="p-4">
                <div className="flex items-start mb-2">
                  <div className="min-w-[100px] font-medium text-amber-300">Strengths:</div>
                  <ul className="list-disc pl-5 space-y-1 text-white">
                    <li>Limited supply (especially in desirable locations)</li>
                    <li>Provides utility (shelter, income from rent)</li>
                    <li>Generally appreciates over very long time periods</li>
                  </ul>
                </div>
                <div className="flex items-start">
                  <div className="min-w-[100px] font-medium text-amber-300">Limitations:</div>
                  <ul className="list-disc pl-5 space-y-1 text-white">
                    <li>Completely immobile</li>
                    <li>High maintenance costs and property taxes</li>
                    <li>Subject to local regulations and policy changes</li>
                    <li>Illiquid (can take months to sell)</li>
                    <li>Not divisible into smaller units</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="border-2 border-amber-400 bg-black rounded-md overflow-hidden"
            >
              <div className="bg-amber-500/80 p-3 border-b border-amber-400">
                <h4 className="text-lg font-semibold text-white">Fiat Currencies</h4>
              </div>
              <div className="p-4">
                <div className="flex items-start mb-2">
                  <div className="min-w-[100px] font-medium text-amber-300">Strengths:</div>
                  <ul className="list-disc pl-5 space-y-1 text-white">
                    <li>Highly liquid and accepted everywhere within issuing country</li>
                    <li>Relatively stable in short time frames</li>
                    <li>Easy to store and transfer in digital form</li>
                  </ul>
                </div>
                <div className="flex items-start">
                  <div className="min-w-[100px] font-medium text-amber-300">Limitations:</div>
                  <ul className="list-disc pl-5 space-y-1 text-white">
                    <li>Unlimited supply (can be printed at will by governments)</li>
                    <li>Consistently loses purchasing power over time due to inflation</li>
                    <li>Subject to monetary policy changes and currency controls</li>
                    <li>Relies on trust in the issuing government</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
          
          <p className="text-white">
            Each of these traditional stores of value has benefits and drawbacks. An ideal store of value would combine the best aspects of each while minimizing their limitations.
          </p>
        </div>
      )
    },
    {
      title: "Why Bitcoin as a Store of Value?",
      type: "text",
      estimatedMinutes: 8,
      content: (
        <div>
          <p className="text-white mb-4">
            Bitcoin was created in 2009 as a peer-to-peer electronic cash system, but it has increasingly been recognized for its properties as a store of value, sometimes called "digital gold." Let's examine why Bitcoin excels in this function:
          </p>
          
          <div className="bg-black p-5 rounded-lg my-6 border-2 border-amber-400">
            <h4 className="text-lg font-semibold mb-2 text-amber-300">Absolute Scarcity</h4>
            <p className="text-white">Bitcoin has a fixed supply cap of 21 million coins, which will never be increased. This makes it the first example of <strong className="text-amber-300">absolute scarcity</strong> in a monetary good—we know exactly how many bitcoins will ever exist.</p>
          </div>
          
          <p className="text-white mb-4">
            Unlike gold, which has an unknown total supply and can experience increased production if prices rise, or fiat currencies that can be printed indefinitely, Bitcoin's supply is mathematically guaranteed by its code. The rate at which new bitcoins are created also decreases over time through a process called "halving," which occurs approximately every four years.
          </p>
          
          <h4 className="font-semibold text-lg mt-6 mb-3 text-amber-300">Digital Durability</h4>
          
          <p className="text-white mb-4">
            As a digital asset, Bitcoin doesn't physically deteriorate. As long as the Bitcoin network continues to operate, the bitcoins you own will remain intact indefinitely. They can't be damaged, destroyed, or degraded by environmental factors.
          </p>
          
          <h4 className="font-semibold text-lg mt-6 mb-3 text-amber-300">Unparalleled Portability</h4>
          
          <p className="text-white mb-4">
            Bitcoin can be transferred anywhere in the world in minutes, regardless of the amount. You can send $10 worth or $10 billion worth for roughly the same fee, and no one can stop the transaction or freeze your funds. This makes Bitcoin superior to traditional stores of value like gold (heavy, difficult to transport) or real estate (immobile).
          </p>
          
          <h4 className="font-semibold text-lg mt-6 mb-3 text-amber-300">Censorship Resistance</h4>
          
          <p className="text-white mb-4">
            Bitcoin operates on a decentralized network of computers worldwide. This makes it extremely resistant to censorship, confiscation, or shutdown by any single government or entity. As long as the internet exists somewhere, Bitcoin can be accessed and transferred.
          </p>
          
          <div className="bg-black p-4 rounded-md my-6 border-2 border-amber-400">
            <h4 className="text-lg font-semibold mb-2 text-amber-300">Bitcoin vs. Traditional Stores of Value</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse bg-black">
                <thead>
                  <tr>
                    <th className="py-2 px-3 text-left font-semibold border-b-2 border-amber-400 text-amber-300">Property</th>
                    <th className="py-2 px-3 text-left font-semibold border-b-2 border-amber-400 text-amber-300">Bitcoin</th>
                    <th className="py-2 px-3 text-left font-semibold border-b-2 border-amber-400 text-amber-300">Gold</th>
                    <th className="py-2 px-3 text-left font-semibold border-b-2 border-amber-400 text-amber-300">Real Estate</th>
                    <th className="py-2 px-3 text-left font-semibold border-b-2 border-amber-400 text-amber-300">Fiat Currency</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-amber-400/30">
                  <tr>
                    <td className="py-2 px-3 font-medium border-r border-amber-400/30 text-amber-200">Scarcity</td>
                    <td className="py-2 px-3 border-r border-amber-400/30 text-white">Fixed at 21M</td>
                    <td className="py-2 px-3 border-r border-amber-400/30 text-white">Limited, but unknown</td>
                    <td className="py-2 px-3 border-r border-amber-400/30 text-white">Limited, location-dependent</td>
                    <td className="py-2 px-3 text-white">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium border-r border-amber-400/30 text-amber-200">Durability</td>
                    <td className="py-2 px-3 border-r border-amber-400/30 text-white">Perfect</td>
                    <td className="py-2 px-3 border-r border-amber-400/30 text-white">Very high</td>
                    <td className="py-2 px-3 border-r border-amber-400/30 text-white">Requires maintenance</td>
                    <td className="py-2 px-3 text-white">Physical: Low, Digital: High</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium border-r border-amber-400/30 text-amber-200">Portability</td>
                    <td className="py-2 px-3 border-r border-amber-400/30 text-white">Excellent</td>
                    <td className="py-2 px-3 border-r border-amber-400/30 text-white">Poor</td>
                    <td className="py-2 px-3 border-r border-amber-400/30 text-white">None</td>
                    <td className="py-2 px-3 text-white">Good (digital)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium border-r border-amber-400/30 text-amber-200">Divisibility</td>
                    <td className="py-2 px-3 border-r border-amber-400/30 text-white">8 decimal places</td>
                    <td className="py-2 px-3 border-r border-amber-400/30 text-white">Limited</td>
                    <td className="py-2 px-3 border-r border-amber-400/30 text-white">Very limited</td>
                    <td className="py-2 px-3 text-white">2 decimal places</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium border-r border-amber-400/30 text-amber-200">Censorship Resistance</td>
                    <td className="py-2 px-3 border-r border-amber-400/30 text-white">Very high</td>
                    <td className="py-2 px-3 border-r border-amber-400/30 text-white">Medium</td>
                    <td className="py-2 px-3 border-r border-amber-400/30 text-white">Low</td>
                    <td className="py-2 px-3 text-white">Low</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <p className="text-white">
            These properties make Bitcoin uniquely positioned as a digital store of value for the internet age, combining the scarcity of gold with the transferability of digital information.
          </p>
        </div>
      )
    },
    {
      title: "Bitcoin's Stock-to-Flow Model",
      type: "text",
      estimatedMinutes: 5,
      content: (
        <div>
          <p className="text-white mb-4">
            One framework for understanding Bitcoin's value as a store of value is the Stock-to-Flow (S2F) model, which has traditionally been used to analyze precious metals like gold and silver.
          </p>
          
          <div className="bg-black p-5 rounded-lg my-6 border-2 border-amber-400">
            <h4 className="text-lg font-semibold mb-2 text-amber-300">What is Stock-to-Flow?</h4>
            <p className="text-white"><strong className="text-amber-300">Stock-to-Flow</strong> is the ratio between the existing supply of an asset (stock) and the amount newly produced in a year (flow). A higher ratio indicates that relatively little new supply is created compared to the existing supply, suggesting the asset is scarce and potentially valuable as a store of value.</p>
          </div>
          
          <p className="text-white mb-4">
            The formula is simple:
          </p>
          
          <div className="bg-black p-5 rounded-md my-6 border-2 border-amber-400">
            <p className="font-mono text-center text-white">Stock-to-Flow = Total Existing Supply ÷ Annual New Production</p>
          </div>
          
          <h4 className="font-semibold text-lg mt-6 mb-3 text-amber-300">Bitcoin's Increasing Stock-to-Flow</h4>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-black p-5 rounded-lg my-6 border-2 border-amber-400"
          >
            <h4 className="text-lg font-semibold mb-3 text-amber-300">Bitcoin Halving Schedule and S2F Impact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-24 font-medium text-amber-200">2009-2012:</div>
                <div className="text-white">50 BTC per block (S2F ≈ 0.5 - 4)</div>
              </div>
              <div className="flex items-center">
                <div className="w-24 font-medium text-amber-200">2012-2016:</div>
                <div className="text-white">25 BTC per block (S2F ≈ 8 - 15)</div>
              </div>
              <div className="flex items-center">
                <div className="w-24 font-medium text-amber-200">2016-2020:</div>
                <div className="text-white">12.5 BTC per block (S2F ≈ 20 - 25)</div>
              </div>
              <div className="flex items-center">
                <div className="w-24 font-medium text-amber-200">2020-2024:</div>
                <div className="text-white">6.25 BTC per block (S2F ≈ 50 - 60)</div>
              </div>
              <div className="flex items-center">
                <div className="w-24 font-medium text-amber-200">2024-2028:</div>
                <div className="text-white">3.125 BTC per block (S2F &gt; 100)</div>
              </div>
            </div>
          </motion.div>
          
          <p className="text-white mb-4">
            For comparison, gold has a stock-to-flow ratio of approximately 60, meaning it would take 60 years of mining at current rates to double the existing supply. After the 2024 halving, Bitcoin is expected to surpass gold's stock-to-flow ratio, making it even more scarce in terms of new supply relative to existing stock.
          </p>
          
          <p className="text-white">
            While the S2F model has its critics and limitations, it provides a useful framework for understanding why Bitcoin's programmatic scarcity makes it potentially valuable as a long-term store of value. The model suggests that Bitcoin's value should increase over time as its scarcity, measured by stock-to-flow, increases.
          </p>
        </div>
      )
    },
    {
      title: "Challenges to Bitcoin as a Store of Value",
      type: "text",
      estimatedMinutes: 6,
      content: (
        <div>
          <p className="text-white mb-4">
            While Bitcoin has many properties that make it an excellent store of value, it also faces several challenges:
          </p>
          
          <div className="my-6 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="border-2 border-amber-400 bg-black rounded-md overflow-hidden"
            >
              <div className="bg-amber-500/80 p-3 border-b border-amber-400">
                <h4 className="text-lg font-semibold text-white">Price Volatility</h4>
              </div>
              <div className="p-4">
                <p className="mb-2 text-white">
                  Bitcoin's price has experienced significant volatility throughout its history, with price swings of 20-30% in a single day not uncommon.
                </p>
                <div className="flex items-start mt-3">
                  <div className="min-w-[100px] font-medium text-amber-300">Perspective:</div>
                  <div>
                    <p className="text-white">While volatility makes Bitcoin less suitable for short-term value storage, many long-term holders view volatility as the price of adoption for a nascent asset class. Historically, Bitcoin's volatility has decreased as its market capitalization has grown, and this trend may continue as adoption increases.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="border-2 border-amber-400 bg-black rounded-md overflow-hidden"
            >
              <div className="bg-amber-500/80 p-3 border-b border-amber-400">
                <h4 className="text-lg font-semibold text-white">Regulatory Uncertainty</h4>
              </div>
              <div className="p-4">
                <p className="mb-2 text-white">
                  Different countries have varying approaches to Bitcoin regulation, from full legalization to partial or complete bans.
                </p>
                <div className="flex items-start mt-3">
                  <div className="min-w-[100px] font-medium text-amber-300">Perspective:</div>
                  <div>
                    <p className="text-white">Regulatory clarity has improved significantly in recent years, with many major economies now providing frameworks for Bitcoin ownership and trading. Bitcoin's decentralized nature also means it can continue to function globally even if restricted in certain jurisdictions.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="border-2 border-amber-400 bg-black rounded-md overflow-hidden"
            >
              <div className="bg-amber-500/80 p-3 border-b border-amber-400">
                <h4 className="text-lg font-semibold text-white">Technical Complexity</h4>
              </div>
              <div className="p-4">
                <p className="mb-2 text-white">
                  Using and securing Bitcoin requires some technical knowledge, creating barriers to adoption for less tech-savvy individuals.
                </p>
                <div className="flex items-start mt-3">
                  <div className="min-w-[100px] font-medium text-amber-300">Perspective:</div>
                  <div>
                    <p className="text-white">User interfaces and security solutions are constantly improving, making Bitcoin more accessible to broader audiences. Similar to early internet adoption, the technical barriers are likely to decrease over time.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="border-2 border-amber-400 bg-black rounded-md overflow-hidden"
            >
              <div className="bg-amber-500/80 p-3 border-b border-amber-400">
                <h4 className="text-lg font-semibold text-white">Energy Consumption</h4>
              </div>
              <div className="p-4">
                <p className="mb-2 text-white">
                  Bitcoin mining requires significant energy expenditure, leading to criticism about its environmental impact.
                </p>
                <div className="flex items-start mt-3">
                  <div className="min-w-[100px] font-medium text-amber-300">Perspective:</div>
                  <div>
                    <p className="text-white">Mining increasingly utilizes renewable energy sources, and some argue that Bitcoin's energy usage is justified by its value as a global, incorruptible monetary system. The energy cost can be viewed as the price of securing a global network without requiring trusted third parties.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <p className="text-white">
            Understanding these challenges is important for anyone considering Bitcoin as a store of value. However, many Bitcoin proponents argue that these issues are either temporary growing pains or acceptable trade-offs for Bitcoin's unique properties.
          </p>
        </div>
      )
    },
    {
      title: "Knowledge Check",
      type: "quiz",
      estimatedMinutes: 3,
      content: (
        <div>
          <p className="text-white mb-4">
            Test your understanding of Bitcoin as a store of value with this short quiz.
          </p>
          
          <div className="space-y-6 mb-8">
            <div className="bg-black border-2 border-amber-400 rounded-lg p-5">
              <h4 className="text-amber-300 font-medium mb-3">1. What is the primary function of a store of value?</h4>
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
                  <span className="text-white">To make payments and purchases in daily life</span>
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
                  <span className="text-white">To transfer purchasing power from the present to the future</span>
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
                  <span className="text-white">To serve as a unit of account for pricing goods and services</span>
                </div>
              </div>
              
              {showResults && (
                <div className="mt-4">
                  {selectedAnswers[1] === correctAnswers[1] ? (
                    <p className="text-green-500 font-medium">Correct! Store of value allows wealth to be preserved over time.</p>
                  ) : (
                    <p className="text-red-500 font-medium">Incorrect. The primary function of a store of value is to transfer purchasing power from the present to the future.</p>
                  )}
                </div>
              )}
            </div>
            
            <div className="bg-black border-2 border-amber-400 rounded-lg p-5">
              <h4 className="text-amber-300 font-medium mb-3">2. What is Bitcoin's maximum supply?</h4>
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
                  <span className="text-white">1 million coins</span>
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
                  <span className="text-white">21 million coins</span>
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
                  <span className="text-white">100 million coins</span>
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
                  <span className="text-white">Unlimited, but with decreasing issuance</span>
                </div>
              </div>
              
              {showResults && (
                <div className="mt-4">
                  {selectedAnswers[2] === correctAnswers[2] ? (
                    <p className="text-green-500 font-medium">Correct! Bitcoin has a hard cap of 21 million coins that will ever be created.</p>
                  ) : (
                    <p className="text-red-500 font-medium">Incorrect. Bitcoin's protocol limits the maximum supply to 21 million coins.</p>
                  )}
                </div>
              )}
            </div>
            
            <div className="bg-black border-2 border-amber-400 rounded-lg p-5">
              <h4 className="text-amber-300 font-medium mb-3">3. What happens to Bitcoin's Stock-to-Flow ratio after each halving event?</h4>
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
                  <span className="text-white">It decreases, making Bitcoin less scarce</span>
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
                  <span className="text-white">It increases, indicating growing scarcity</span>
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
                  <span className="text-white">It remains constant regardless of halvings</span>
                </div>
              </div>
              
              {showResults && (
                <div className="mt-4">
                  {selectedAnswers[3] === correctAnswers[3] ? (
                    <p className="text-green-500 font-medium">Correct! Each halving reduces new supply, increasing the Stock-to-Flow ratio and making Bitcoin more scarce.</p>
                  ) : (
                    <p className="text-red-500 font-medium">Incorrect. Bitcoin's Stock-to-Flow ratio increases after each halving, indicating greater scarcity.</p>
                  )}
                </div>
              )}
            </div>
            
            <div className="bg-black border-2 border-amber-400 rounded-lg p-5">
              <h4 className="text-amber-300 font-medium mb-3">4. Which of the following is NOT a key property of an effective store of value?</h4>
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
                  <span className="text-white">Durability</span>
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
                  <span className="text-white">Volatility</span>
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
                  <span className="text-white">Portability</span>
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
                  <span className="text-white">Scarcity</span>
                </div>
              </div>
              
              {showResults && (
                <div className="mt-4">
                  {selectedAnswers[4] === correctAnswers[4] ? (
                    <p className="text-green-500 font-medium">Correct! Volatility is generally undesirable in a store of value; stability is preferred.</p>
                  ) : (
                    <p className="text-red-500 font-medium">Incorrect. Volatility is not a desirable property for a store of value; stability is preferred.</p>
                  )}
                </div>
              )}
            </div>
            
            <div className="bg-black border-2 border-amber-400 rounded-lg p-5">
              <h4 className="text-amber-300 font-medium mb-3">5. Which traditional store of value has the highest Stock-to-Flow ratio?</h4>
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
                  <span className="text-white">Gold</span>
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
                  <span className="text-white">Silver</span>
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
                  <span className="text-white">Oil</span>
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
                  <span className="text-white">The US Dollar</span>
                </div>
              </div>
              
              {showResults && (
                <div className="mt-4">
                  {selectedAnswers[5] === correctAnswers[5] ? (
                    <p className="text-green-500 font-medium">Correct! Gold has the highest Stock-to-Flow ratio among traditional commodities, around 60-70, meaning it would take 60-70 years of production to double the existing supply.</p>
                  ) : (
                    <p className="text-red-500 font-medium">Incorrect. Gold has the highest Stock-to-Flow ratio among traditional stores of value.</p>
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
                  {score === 5 ? 'Perfect! You\'ve mastered the store of value concepts.' : 
                   score >= 4 ? 'Excellent! You have a strong understanding of store of value principles.' :
                   score >= 3 ? 'Good job! You understand the core concepts, but review the material for more clarity.' :
                   'Review the module material and try again to improve your understanding of store of value concepts.'}
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
              In this module, we explored how Bitcoin functions as a store of value and why its unique properties make it particularly well-suited for this role.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-amber-300 flex">
                  <span className="bg-amber-500 text-black rounded-full h-7 w-7 inline-flex items-center justify-center mr-2">1</span>
                  The Store of Value Function
                </h4>
                <p className="text-white mt-2 ml-9">
                  A store of value is any asset that maintains its purchasing power over time, allowing people to save the product of their labor for future use. This is one of money's three key functions.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-amber-300 flex">
                  <span className="bg-amber-500 text-black rounded-full h-7 w-7 inline-flex items-center justify-center mr-2">2</span>
                  Properties of Effective Stores of Value
                </h4>
                <p className="text-white mt-2 ml-9">
                  The best stores of value are durable, portable, divisible, verifiable, scarce, and have established transaction histories. Bitcoin excels in all these categories, particularly in scarcity with its fixed supply of 21 million coins.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-amber-300 flex">
                  <span className="bg-amber-500 text-black rounded-full h-7 w-7 inline-flex items-center justify-center mr-2">3</span>
                  Traditional Store of Value Limitations
                </h4>
                <p className="text-white mt-2 ml-9">
                  Gold is hindered by physical constraints that make it difficult to verify, transport, and secure. Fiat currencies suffer from unlimited supply and the constant threat of inflation through money printing.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-amber-300 flex">
                  <span className="bg-amber-500 text-black rounded-full h-7 w-7 inline-flex items-center justify-center mr-2">4</span>
                  Bitcoin's Store of Value Advantages
                </h4>
                <p className="text-white mt-2 ml-9">
                  Bitcoin combines gold's scarcity with digital properties that make it easily verifiable, instantly transportable, highly divisible, and impossible to counterfeit. Its decentralized nature means it's resistant to censorship and confiscation.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-amber-300 flex">
                  <span className="bg-amber-500 text-black rounded-full h-7 w-7 inline-flex items-center justify-center mr-2">5</span>
                  The Stock-to-Flow Model
                </h4>
                <p className="text-white mt-2 ml-9">
                  The Stock-to-Flow ratio measures an asset's scarcity by comparing existing supply to new production. Bitcoin's regular halving events continually increase its Stock-to-Flow ratio, making it increasingly scarce over time and potentially more valuable.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg border border-amber-500/40">
            <h3 className="text-lg font-semibold text-amber-300 mb-3">Looking Ahead</h3>
            <p className="text-white">
              Now that you understand Bitcoin's role as a store of value, our next module will explore Bitcoin's fundamentals – how it works, the technology behind it, and the innovative solutions it provides to longstanding problems in digital currencies.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <ModuleContent
      title="Store of Value Explained"
      courseTitle="Beginner's Course"
      courseSlug="beginner"
      moduleNumber={2}
      totalModules={5}
      objectives={[
        "Understand what makes an effective store of value",
        "Compare traditional stores of value with their strengths and limitations",
        "Analyze Bitcoin's unique properties as a digital store of value",
        "Recognize the challenges Bitcoin faces in its store of value function"
      ]}
      keypoints={[
        "Store of value fundamentals and key properties",
        "Comparison of gold, real estate, fiat currencies, and Bitcoin",
        "Bitcoin's fixed supply and Stock-to-Flow model",
        "Addressing volatility and other challenges"
      ]}
      sections={sections}
      previous={{
        title: "What is Money?",
        path: "/learn/beginner/what-is-money"
      }}
      next={{
        title: "Bitcoin Fundamentals",
        path: "/learn/beginner/bitcoin-fundamentals"
      }}
    />
  );
};

export default StoreOfValue; 