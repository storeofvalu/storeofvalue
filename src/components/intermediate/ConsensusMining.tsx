import React from 'react';
import ModuleContent, { ModuleSection } from '../ModuleContent';
import { motion } from 'framer-motion';
import { 
  Cpu, Hash, Gem, Zap, Network, Users, 
  Shield, Server, Clock, Award, Layers,
  CheckCircle, Lock, BarChart3, HardDrive
} from 'lucide-react';

const ConsensusMining = () => {
  const [selectedAnswers, setSelectedAnswers] = React.useState<{[key: number]: string}>({});
  const [showResults, setShowResults] = React.useState(false);
  const [score, setScore] = React.useState(0);
  
  const correctAnswers = {
    1: "b", // Proof of Work
    2: "c", // Network consensus
    3: "d", // Every 10 minutes on average
    4: "a", // Mining rewards + transaction fees
    5: "c"  // 21 million
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
      title: "Bitcoin Consensus Fundamentals",
      type: "text",
      estimatedMinutes: 7,
      content: (
        <div>
          <p className="text-white mb-4">
            In traditional financial systems, trusted institutions like banks maintain ledgers and settle transactions. Bitcoin introduces a radically different approach: a decentralized system where consensus emerges from thousands of independent participants following the same rules.
          </p>
          
          <h4 className="font-semibold text-lg mt-6 mb-3 text-amber-300">The Challenge of Decentralized Consensus</h4>
          
          <div className="bg-black border-2 border-amber-400 rounded-lg p-5 mb-6">
            <h5 className="text-amber-300 font-medium mb-3">The Byzantine Generals Problem</h5>
            <p className="text-white mb-4">
              Bitcoin solves a classic computer science challenge known as the Byzantine Generals Problem: how to ensure reliable communication and agreement in a distributed system where some participants might be unreliable or malicious.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="flex items-start mb-2">
                  <div className="p-2 rounded-full bg-amber-500/20 mr-2 text-amber-300">
                    <Users className="h-5 w-5" />
                  </div>
                  <h6 className="text-amber-300 font-medium">The Problem</h6>
                </div>
                <p className="text-white text-sm">
                  How do multiple parties, who don't trust each other and are separated geographically, collectively agree on a single version of truth?
                </p>
              </div>
              
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="flex items-start mb-2">
                  <div className="p-2 rounded-full bg-amber-500/20 mr-2 text-amber-300">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <h6 className="text-amber-300 font-medium">Bitcoin's Solution</h6>
                </div>
                <p className="text-white text-sm">
                  Bitcoin uses proof-of-work mining as a mechanism to achieve distributed consensus without central coordination, allowing global agreement on transaction history.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="border-2 border-amber-400 bg-black rounded-lg p-5 shadow-md"
            >
              <div className="flex items-start mb-3">
                <div className="p-2 rounded-lg bg-amber-500/80 mr-3 text-white">
                  <Shield className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-amber-300">Trust Minimization</h4>
              </div>
              <p className="text-white">
                Bitcoin's consensus mechanism eliminates the need to trust any individual or entity. Instead, trust is placed in the mathematical properties of cryptography and economic incentives that keep the system honest.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="border-2 border-amber-400 bg-black rounded-lg p-5 shadow-md"
            >
              <div className="flex items-start mb-3">
                <div className="p-2 rounded-lg bg-amber-500/80 mr-3 text-white">
                  <Network className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-amber-300">Decentralized Decision-Making</h4>
              </div>
              <p className="text-white">
                No central authority decides which transactions are valid or what the current state of the ledger is. Instead, the network collectively validates transactions according to predefined rules.
              </p>
            </motion.div>
          </div>
          
          <h4 className="font-semibold text-lg mt-8 mb-4 text-amber-300">Core Elements of Bitcoin Consensus</h4>
          
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-black border-2 border-amber-400 rounded-lg p-5"
            >
              <div className="flex items-start">
                <div className="min-w-[40px] h-10 w-10 rounded-full bg-amber-400 flex items-center justify-center text-black font-bold mr-4 mt-0.5">1</div>
                <div>
                  <h5 className="font-medium text-amber-300 mb-2">Network Rules</h5>
                  <p className="text-white">
                    All Bitcoin nodes agree on a set of protocol rules that define what makes a transaction and block valid. These include transaction format, signature verification, input-output balance, and monetary policy rules (like the 21 million BTC supply cap).
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-black border-2 border-amber-400 rounded-lg p-5"
            >
              <div className="flex items-start">
                <div className="min-w-[40px] h-10 w-10 rounded-full bg-amber-400 flex items-center justify-center text-black font-bold mr-4 mt-0.5">2</div>
                <div>
                  <h5 className="font-medium text-amber-300 mb-2">Proof-of-Work</h5>
                  <p className="text-white">
                    A resource-intensive computational process that makes it costly to create blocks, preventing spam and Sybil attacks. Miners must solve a cryptographic puzzle, requiring substantial computational power and energy.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black border-2 border-amber-400 rounded-lg p-5"
            >
              <div className="flex items-start">
                <div className="min-w-[40px] h-10 w-10 rounded-full bg-amber-400 flex items-center justify-center text-black font-bold mr-4 mt-0.5">3</div>
                <div>
                  <h5 className="font-medium text-amber-300 mb-2">Longest Chain Rule</h5>
                  <p className="text-white">
                    In case of competing valid chain versions (forks), nodes follow the chain with the most accumulated proof-of-work (generally the longest chain). This rule ensures all nodes eventually converge on a single version of the blockchain.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-black border-2 border-amber-400 rounded-lg p-5"
            >
              <div className="flex items-start">
                <div className="min-w-[40px] h-10 w-10 rounded-full bg-amber-400 flex items-center justify-center text-black font-bold mr-4 mt-0.5">4</div>
                <div>
                  <h5 className="font-medium text-amber-300 mb-2">Economic Incentives</h5>
                  <p className="text-white">
                    Block rewards and transaction fees incentivize miners to follow the rules and secure the network. These economic rewards align miners' self-interest with network security, creating a stable game-theoretic equilibrium.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="bg-black border-2 border-amber-400 rounded-lg p-5 my-8">
            <h4 className="text-amber-300 font-medium mb-4">How Bitcoin Consensus Differs from Traditional Systems</h4>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="px-4 py-3 text-left text-amber-300">Feature</th>
                    <th className="px-4 py-3 text-left text-amber-300">Traditional Banking</th>
                    <th className="px-4 py-3 text-left text-amber-300">Bitcoin</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  <tr className="text-white">
                    <td className="px-4 py-3 font-medium">Authority Model</td>
                    <td className="px-4 py-3">Centralized (banks, clearinghouses)</td>
                    <td className="px-4 py-3">Distributed (network consensus)</td>
                  </tr>
                  <tr className="text-white">
                    <td className="px-4 py-3 font-medium">Trust Requirement</td>
                    <td className="px-4 py-3">Trust in institutions</td>
                    <td className="px-4 py-3">Trust in mathematics and code</td>
                  </tr>
                  <tr className="text-white">
                    <td className="px-4 py-3 font-medium">Transaction Finality</td>
                    <td className="px-4 py-3">Can be reversed by authorities</td>
                    <td className="px-4 py-3">Probabilistic, becomes stronger over time</td>
                  </tr>
                  <tr className="text-white">
                    <td className="px-4 py-3 font-medium">Rule Changes</td>
                    <td className="px-4 py-3">Imposed by institutions</td>
                    <td className="px-4 py-3">Requires network-wide agreement</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <p className="text-white">
            Bitcoin's consensus mechanism represents a major breakthrough in distributed systems. It allows a global network of participants to agree on a shared ledger without central coordination or trust requirements. This foundation enables Bitcoin to function as a truly decentralized currency system.
          </p>
        </div>
      )
    },
    {
      title: "Mining Process & Proof-of-Work",
      type: "text",
      estimatedMinutes: 8,
      content: (
        <div>
          <p className="text-white mb-4">
            Mining is the process by which transactions are verified and added to the blockchain. It's also the mechanism through which new bitcoins are created. Mining serves two critical functions: securing the network and distributing new coins according to a predetermined schedule.
          </p>
          
          <h4 className="font-semibold text-lg mt-6 mb-4 text-amber-300">What is Proof-of-Work?</h4>
          
          <div className="bg-black border-2 border-amber-400 rounded-lg p-5 mb-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h5 className="text-amber-300 font-medium mb-3">The Concept</h5>
                <p className="text-white mb-4">
                  Proof-of-Work (PoW) is a consensus mechanism that requires participants (miners) to expend computational resources to solve cryptographic puzzles. These puzzles are:
                </p>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <div className="text-amber-400 mr-2">•</div>
                    <span><strong>Hard to solve</strong>: Requires significant computational power</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-amber-400 mr-2">•</div>
                    <span><strong>Easy to verify</strong>: Any network participant can quickly verify the solution</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-amber-400 mr-2">•</div>
                    <span><strong>Adjustable difficulty</strong>: Can be made harder or easier to maintain consistent block times</span>
                  </li>
                </ul>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex-1 flex items-center justify-center"
              >
                <div className="bg-gray-900 p-5 rounded-lg border border-gray-700 max-w-xs">
                  <div className="flex justify-center mb-3">
                    <Hash className="h-12 w-12 text-amber-400" />
                  </div>
                  <h5 className="text-center text-amber-300 font-medium mb-2">The Hash Puzzle</h5>
                  <p className="text-white text-sm">
                    Miners must find a block hash that begins with a specific number of zeros. The only way to find this hash is through random trial and error, requiring computational work.
                  </p>
                  <div className="mt-3 bg-gray-800 p-2 rounded font-mono text-xs text-white break-all">
                    0000000000000000000687bca986194dc2c1f949318629b44bb54fcc96afb0f0
                  </div>
                  <p className="text-gray-400 text-xs text-center mt-1">Example of a valid block hash</p>
                </div>
              </motion.div>
            </div>
          </div>
          
          <h4 className="font-semibold text-lg mt-8 mb-4 text-amber-300">The Mining Process</h4>
          
          <div className="bg-black border-2 border-amber-400 rounded-lg p-5 mb-8">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative py-4">
                <div className="flex flex-col space-y-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="min-w-[32px] h-8 w-8 rounded-full bg-amber-400 flex items-center justify-center text-black font-bold mr-4 mt-0.5">1</div>
                    <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 w-full">
                      <h5 className="font-medium text-amber-300 mb-2">Transaction Collection</h5>
                      <p className="text-white text-sm">
                        Miners collect pending transactions from the mempool, prioritizing those with higher fees.
                      </p>
                    </div>
                  </motion.div>
                  
                  <div className="flex justify-center">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: 24 }}
                      transition={{ duration: 0.3 }}
                      viewport={{ once: true }}
                      className="w-0.5 bg-amber-400"
                    />
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="min-w-[32px] h-8 w-8 rounded-full bg-amber-400 flex items-center justify-center text-black font-bold mr-4 mt-0.5">2</div>
                    <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 w-full">
                      <h5 className="font-medium text-amber-300 mb-2">Block Assembly</h5>
                      <p className="text-white text-sm">
                        The miner creates a candidate block by arranging transactions, adding a coinbase transaction (their reward), and constructing a block header.
                      </p>
                    </div>
                  </motion.div>
                  
                  <div className="flex justify-center">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: 24 }}
                      transition={{ duration: 0.3 }}
                      viewport={{ once: true }}
                      className="w-0.5 bg-amber-400"
                    />
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="min-w-[32px] h-8 w-8 rounded-full bg-amber-400 flex items-center justify-center text-black font-bold mr-4 mt-0.5">3</div>
                    <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 w-full">
                      <h5 className="font-medium text-amber-300 mb-2">Hash Calculation</h5>
                      <p className="text-white text-sm">
                        The miner repeatedly hashes the block header while incrementing a nonce value, searching for a hash that meets the current difficulty target.
                      </p>
                    </div>
                  </motion.div>
                  
                  <div className="flex justify-center">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: 24 }}
                      transition={{ duration: 0.3 }}
                      viewport={{ once: true }}
                      className="w-0.5 bg-amber-400"
                    />
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="min-w-[32px] h-8 w-8 rounded-full bg-amber-400 flex items-center justify-center text-black font-bold mr-4 mt-0.5">4</div>
                    <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 w-full">
                      <h5 className="font-medium text-amber-300 mb-2">Block Propagation</h5>
                      <p className="text-white text-sm">
                        When a valid hash is found, the miner broadcasts the block to the network. Other nodes verify it and add it to their copy of the blockchain.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-black border-2 border-amber-400 rounded-lg p-5"
            >
              <div className="flex items-start mb-3">
                <div className="p-2 rounded-lg bg-amber-500/80 mr-3 text-white">
                  <Zap className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-amber-300">Mining Hardware Evolution</h4>
              </div>
              <p className="text-white mb-4">
                Over time, mining hardware has evolved dramatically to become more efficient at solving the proof-of-work puzzle:
              </p>
              <ul className="space-y-3 text-white">
                <li className="flex items-start">
                  <div className="p-1.5 rounded-full bg-amber-400 mr-2 mt-0.5 text-black font-bold text-xs">1</div>
                  <div>
                    <div className="font-medium">CPU Mining (2009-2010)</div>
                    <p className="text-sm text-gray-300">Anyone could mine effectively with a personal computer</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="p-1.5 rounded-full bg-amber-400 mr-2 mt-0.5 text-black font-bold text-xs">2</div>
                  <div>
                    <div className="font-medium">GPU Mining (2010-2013)</div>
                    <p className="text-sm text-gray-300">Graphics cards offered 10-100x improvement over CPUs</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="p-1.5 rounded-full bg-amber-400 mr-2 mt-0.5 text-black font-bold text-xs">3</div>
                  <div>
                    <div className="font-medium">FPGA Mining (2011-2013)</div>
                    <p className="text-sm text-gray-300">Field-programmable gate arrays offered better efficiency</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="p-1.5 rounded-full bg-amber-400 mr-2 mt-0.5 text-black font-bold text-xs">4</div>
                  <div>
                    <div className="font-medium">ASIC Mining (2013-Present)</div>
                    <p className="text-sm text-gray-300">Application-specific integrated circuits designed solely for Bitcoin mining</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black border-2 border-amber-400 rounded-lg p-5"
            >
              <div className="flex items-start mb-3">
                <div className="p-2 rounded-lg bg-amber-500/80 mr-3 text-white">
                  <Clock className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-amber-300">Difficulty Adjustment</h4>
              </div>
              <p className="text-white mb-4">
                One of Bitcoin's most ingenious features is its automatic difficulty adjustment. This mechanism:
              </p>
              <ul className="space-y-4 text-white">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Recalibrates every 2,016 blocks (approximately 2 weeks)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Adjusts based on how quickly the previous 2,016 blocks were mined</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Ensures blocks are found on average every 10 minutes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Automatically compensates for increases in network hash power</span>
                </li>
              </ul>
              <div className="mt-4 bg-gray-900 p-3 rounded-lg border border-gray-700">
                <p className="text-amber-300 text-sm font-medium">Why this matters:</p>
                <p className="text-white text-sm mt-1">
                  This mechanism maintains Bitcoin's ~10-minute block time regardless of how much mining power joins the network, ensuring a predictable issuance rate and consistent transaction processing time.
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="bg-black border-2 border-amber-400 rounded-lg p-5 mb-6">
            <h4 className="text-amber-300 font-medium mb-4">Security Properties of Proof-of-Work</h4>
            
            <div className="space-y-4">
              <div className="bg-gray-900 p-4 rounded-lg">
                <h5 className="text-amber-300 font-medium mb-2">Costly to Attack, Free to Verify</h5>
                <p className="text-white text-sm">
                  The asymmetry between the high cost to create blocks and the low cost to verify them creates strong security. Miners invest capital in hardware and electricity, making honest behavior more profitable than attacks.
                </p>
              </div>
              
              <div className="bg-gray-900 p-4 rounded-lg">
                <h5 className="text-amber-300 font-medium mb-2">Time as a Security Feature</h5>
                <p className="text-white text-sm">
                  The proof-of-work system effectively uses the passage of time as a security feature. To rewrite history, an attacker would need to redo all proof-of-work from the point of attack, requiring enormous computational resources.
                </p>
              </div>
              
              <div className="bg-gray-900 p-4 rounded-lg">
                <h5 className="text-amber-300 font-medium mb-2">External Costs Create Trust</h5>
                <p className="text-white text-sm">
                  By requiring real-world resources (energy and hardware), proof-of-work creates security backed by something external to the Bitcoin network itself. This grounds Bitcoin's security in physical reality.
                </p>
              </div>
            </div>
          </div>
          
          <p className="text-white">
            Proof-of-work mining is fundamental to Bitcoin's security model. It transforms electrical energy into digital security, creating a tamper-resistant ledger without requiring trust in any central authority. While energy-intensive, this process is what enables Bitcoin to function as a decentralized monetary system with strong security guarantees.
          </p>
        </div>
      )
    },
    {
      title: "Mining Economics & Incentives",
      type: "text",
      estimatedMinutes: 6,
      content: (
        <div>
          <p className="text-white mb-4">
            Bitcoin's security doesn't just rely on cryptography—it's built on economic incentives that make honest behavior more profitable than attacks. This alignment of incentives is a critical feature of Bitcoin's design.
          </p>
          
          <h4 className="font-semibold text-lg mt-6 mb-4 text-amber-300">The Block Reward</h4>
          
          <div className="bg-black border-2 border-amber-400 rounded-lg p-5 mb-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h5 className="text-amber-300 font-medium mb-3">Structure of Miner Rewards</h5>
                <p className="text-white mb-4">
                  Miners receive two types of rewards for their work:
                </p>
                <div className="space-y-4">
                  <div className="bg-gray-900 p-3 rounded-lg">
                    <div className="flex items-start">
                      <div className="p-1.5 rounded-full bg-amber-400 mr-2 text-black font-bold">1</div>
                      <div>
                        <h6 className="text-amber-300 font-medium">Block Subsidy</h6>
                        <p className="text-white text-sm mt-1">
                          Newly created bitcoins awarded to the miner who finds a valid block. This subsidy halves approximately every four years in an event called "the halvening."
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900 p-3 rounded-lg">
                    <div className="flex items-start">
                      <div className="p-1.5 rounded-full bg-amber-400 mr-2 text-black font-bold">2</div>
                      <div>
                        <h6 className="text-amber-300 font-medium">Transaction Fees</h6>
                        <p className="text-white text-sm mt-1">
                          The difference between the inputs and outputs of all transactions in a block. Users compete to have their transactions included in the next block by offering higher fees.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex-1 flex items-center justify-center"
              >
                <div className="w-full max-w-sm">
                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                    <h5 className="text-center text-amber-300 font-medium mb-3">Block Reward Halving Schedule</h5>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-300">2009-2012:</span>
                        <span className="text-white font-mono">50 BTC</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">2012-2016:</span>
                        <span className="text-white font-mono">25 BTC</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">2016-2020:</span>
                        <span className="text-white font-mono">12.5 BTC</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">2020-2024:</span>
                        <span className="text-white font-mono">6.25 BTC</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">2024-2028:</span>
                        <span className="text-white font-mono">3.125 BTC</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">...</span>
                        <span className="text-white">...</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">~2140:</span>
                        <span className="text-white font-mono">0 BTC</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          <h4 className="font-semibold text-lg mt-8 mb-4 text-amber-300">Mining Economics</h4>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-black border-2 border-amber-400 rounded-lg p-5"
            >
              <div className="flex items-start mb-3">
                <div className="p-2 rounded-lg bg-amber-500/80 mr-3 text-white">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-amber-300">Miner Revenue and Costs</h4>
              </div>
              <h5 className="text-amber-300 font-medium mb-2">Revenue:</h5>
              <ul className="space-y-1 text-white mb-4">
                <li className="flex items-start">
                  <div className="text-amber-400 mr-1">•</div>
                  <span>Block rewards (subsidy + fees)</span>
                </li>
                <li className="flex items-start">
                  <div className="text-amber-400 mr-1">•</div>
                  <span>Probability of finding blocks based on relative hash power</span>
                </li>
              </ul>
              
              <h5 className="text-amber-300 font-medium mb-2">Costs:</h5>
              <ul className="space-y-1 text-white">
                <li className="flex items-start">
                  <div className="text-amber-400 mr-1">•</div>
                  <span>Hardware (ASIC miners)</span>
                </li>
                <li className="flex items-start">
                  <div className="text-amber-400 mr-1">•</div>
                  <span>Electricity</span>
                </li>
                <li className="flex items-start">
                  <div className="text-amber-400 mr-1">•</div>
                  <span>Cooling systems</span>
                </li>
                <li className="flex items-start">
                  <div className="text-amber-400 mr-1">•</div>
                  <span>Infrastructure and maintenance</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black border-2 border-amber-400 rounded-lg p-5"
            >
              <div className="flex items-start mb-3">
                <div className="p-2 rounded-lg bg-amber-500/80 mr-3 text-white">
                  <Gem className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-amber-300">Bitcoin's Supply Schedule</h4>
              </div>
              <p className="text-white mb-4">
                Bitcoin's monetary policy is hardcoded with three key properties:
              </p>
              <div className="space-y-3">
                <div className="bg-gray-900 p-3 rounded-lg">
                  <h6 className="text-amber-300 font-medium">Fixed Maximum Supply</h6>
                  <p className="text-white text-sm mt-1">
                    Only 21 million bitcoins will ever be created, making Bitcoin a deflationary currency with absolute scarcity.
                  </p>
                </div>
                
                <div className="bg-gray-900 p-3 rounded-lg">
                  <h6 className="text-amber-300 font-medium">Predictable Issuance</h6>
                  <p className="text-white text-sm mt-1">
                    The rate at which new bitcoins are issued follows a predetermined schedule that cannot be changed without network consensus.
                  </p>
                </div>
                
                <div className="bg-gray-900 p-3 rounded-lg">
                  <h6 className="text-amber-300 font-medium">Diminishing Inflation</h6>
                  <p className="text-white text-sm mt-1">
                    Approximately every four years, the block subsidy halves, reducing the rate of new bitcoin creation by 50%.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="bg-black border-2 border-amber-400 rounded-lg p-5 mb-8">
            <h4 className="text-amber-300 font-medium mb-4">Game Theory and Security</h4>
            
            <div className="space-y-4">
              <div className="bg-gray-900 p-4 rounded-lg">
                <h5 className="text-amber-300 font-medium mb-2">The Honest Majority Assumption</h5>
                <p className="text-white text-sm">
                  Bitcoin's security relies on the assumption that a majority of mining power is controlled by honest participants. The economic incentives make this the most rational strategy for miners.
                </p>
              </div>
              
              <div className="bg-gray-900 p-4 rounded-lg">
                <h5 className="text-amber-300 font-medium mb-2">The 51% Attack</h5>
                <p className="text-white text-sm">
                  If a miner controls more than 50% of the network's hashrate, they could theoretically double-spend coins or block transactions. However, they cannot:
                </p>
                <ul className="mt-2 space-y-1 text-white text-sm">
                  <li className="flex items-start">
                    <div className="text-red-400 mr-1">✗</div>
                    <span>Steal coins not belonging to them</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-red-400 mr-1">✗</div>
                    <span>Create bitcoins beyond the scheduled issuance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-red-400 mr-1">✗</div>
                    <span>Change fundamental protocol rules</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-900 p-4 rounded-lg">
                <h5 className="text-amber-300 font-medium mb-2">Self-Destructive Attacks</h5>
                <p className="text-white text-sm mb-3">
                  The most powerful attacks on Bitcoin would likely harm the attacker's own interests:
                </p>
                <ul className="space-y-2 text-white text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Miners usually own substantial Bitcoin holdings that would lose value if the network's security were compromised</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Large investments in mining hardware would be devalued if Bitcoin's price fell due to a successful attack</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>The community could change the proof-of-work algorithm, rendering the attacker's hardware useless</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-black border-2 border-amber-400 rounded-lg p-5 mb-8">
            <h4 className="text-amber-300 font-medium mb-4">The Transition to Fee-Based Security</h4>
            
            <p className="text-white mb-5">
              As the block subsidy decreases with each halving, transaction fees will become an increasingly important component of miner revenue:
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-3 rounded-lg"
              >
                <h5 className="text-amber-300 font-medium text-sm mb-2">Early Bitcoin (2009-2016)</h5>
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-amber-400 h-4 rounded-full" style={{ width: '90%' }}></div>
                  <span className="text-white text-xs">90%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-gray-700 h-4 rounded-full" style={{ width: '10%' }}></div>
                  <span className="text-white text-xs">10%</span>
                </div>
                <div className="flex justify-between mt-2 text-xs">
                  <span className="text-amber-300">Block Subsidy</span>
                  <span className="text-gray-400">Transaction Fees</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-3 rounded-lg"
              >
                <h5 className="text-amber-300 font-medium text-sm mb-2">Current Bitcoin (2020s)</h5>
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-amber-400 h-4 rounded-full" style={{ width: '70%' }}></div>
                  <span className="text-white text-xs">70%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-gray-700 h-4 rounded-full" style={{ width: '30%' }}></div>
                  <span className="text-white text-xs">30%</span>
                </div>
                <div className="flex justify-between mt-2 text-xs">
                  <span className="text-amber-300">Block Subsidy</span>
                  <span className="text-gray-400">Transaction Fees</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-3 rounded-lg"
              >
                <h5 className="text-amber-300 font-medium text-sm mb-2">Future Bitcoin (2030s+)</h5>
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-amber-400 h-4 rounded-full" style={{ width: '20%' }}></div>
                  <span className="text-white text-xs">20%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-gray-700 h-4 rounded-full" style={{ width: '80%' }}></div>
                  <span className="text-white text-xs">80%</span>
                </div>
                <div className="flex justify-between mt-2 text-xs">
                  <span className="text-amber-300">Block Subsidy</span>
                  <span className="text-gray-400">Transaction Fees</span>
                </div>
              </motion.div>
            </div>
            
            <p className="text-white mt-5">
              This transition is a critical milestone in Bitcoin's maturation. For Bitcoin to maintain its security in the long term, transaction fees must eventually replace the block subsidy as the primary incentive for miners.
            </p>
          </div>
          
          <p className="text-white">
            Bitcoin's economic incentives create a self-reinforcing security model. Miners are rewarded for honest behavior, and the cost of attacking the network typically exceeds the potential benefits. This economic design, combined with the cryptographic aspects, creates Bitcoin's robust security guarantees.
          </p>
        </div>
      )
    },
    {
      title: "Proof of Work vs. Proof of Stake",
      type: "text",
      estimatedMinutes: 8,
      content: (
        <div>
          <p className="text-white mb-4">
            While Bitcoin uses Proof of Work (PoW) as its consensus mechanism, other cryptocurrencies have adopted alternative approaches, most notably Proof of Stake (PoS). Understanding the differences between these mechanisms illuminates why Bitcoin's founders chose PoW and why many Bitcoiners consider it superior for a sound money system.
          </p>
          
          <div className="bg-black border-2 border-amber-400 rounded-lg p-5 mb-6">
            <h4 className="text-amber-300 font-medium mb-4">Understanding Proof of Stake</h4>
            
            <p className="text-white mb-4">
              In Proof of Stake systems, validators (the PoS equivalent of miners) are selected to create new blocks based on the amount of cryptocurrency they "stake" or lock up as collateral. Instead of competing through computational work, validators are chosen with a probability proportional to their stake.
            </p>
            
            <div className="bg-gray-900 p-4 rounded-lg mb-4">
              <h5 className="text-amber-300 font-medium mb-2">Key Features of Proof of Stake</h5>
              <ul className="space-y-2 text-white text-sm">
                <li className="flex items-start">
                  <div className="p-1 rounded-full bg-amber-400 mr-2 mt-0.5 text-black flex-shrink-0">•</div>
                  <span>Validators are selected based on the amount of cryptocurrency they stake</span>
                </li>
                <li className="flex items-start">
                  <div className="p-1 rounded-full bg-amber-400 mr-2 mt-0.5 text-black flex-shrink-0">•</div>
                  <span>Significantly less energy consumption compared to Proof of Work</span>
                </li>
                <li className="flex items-start">
                  <div className="p-1 rounded-full bg-amber-400 mr-2 mt-0.5 text-black flex-shrink-0">•</div>
                  <span>Often implements slashing (penalties) for validators who behave dishonestly</span>
                </li>
                <li className="flex items-start">
                  <div className="p-1 rounded-full bg-amber-400 mr-2 mt-0.5 text-black flex-shrink-0">•</div>
                  <span>Transaction finality can be faster in some implementations</span>
                </li>
              </ul>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h4 className="font-semibold text-lg mb-4 text-amber-300">Comparative Analysis</h4>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-black border-2 border-amber-400 rounded-lg p-4">
                <h5 className="text-amber-300 font-medium mb-3 text-center">Proof of Work</h5>
                <ul className="space-y-3 text-white text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-400 mr-2 mt-0 flex-shrink-0" />
                    <span><span className="font-medium">External Cost Guarantee:</span> Security is backed by real-world energy expenditure</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-400 mr-2 mt-0 flex-shrink-0" />
                    <span><span className="font-medium">Objective Selection:</span> Miners are selected based on provable work, not subjective criteria</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-400 mr-2 mt-0 flex-shrink-0" />
                    <span><span className="font-medium">Permissionless:</span> Anyone can participate with appropriate hardware</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-400 mr-2 mt-0 flex-shrink-0" />
                    <span><span className="font-medium">Dynamic Security:</span> Security scales with hash rate, independent of token price</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
                <h5 className="text-gray-200 font-medium mb-3 text-center">Proof of Stake</h5>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full border border-gray-500 mr-2 mt-0 flex-shrink-0" />
                    <span><span className="font-medium">Internal Security:</span> Security depends on the value of the network's tokens</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full border border-gray-500 mr-2 mt-0 flex-shrink-0" />
                    <span><span className="font-medium">Rich-Get-Richer:</span> Those with more tokens have greater influence</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full border border-gray-500 mr-2 mt-0 flex-shrink-0" />
                    <span><span className="font-medium">Validator Requirements:</span> Often requires minimum stake amounts</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full border border-gray-500 mr-2 mt-0 flex-shrink-0" />
                    <span><span className="font-medium">Circular Security:</span> System secured by itself, creating potential vulnerabilities</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          <div className="bg-black border-2 border-amber-400 rounded-lg p-5 mb-6">
            <h4 className="text-amber-300 font-medium mb-4">Why Proof of Work is Superior for Bitcoin</h4>
            
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-4 rounded-lg"
              >
                <h5 className="text-amber-300 font-medium mb-2">1. Nothing at Stake Problem</h5>
                <p className="text-white text-sm">
                  In PoS systems, validators face little cost for supporting multiple competing chains simultaneously, since "staking" on multiple chains costs nothing extra. This can lead to consensus instability. In PoW, miners must divide their computational resources to mine on competing chains, making this attack costly.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-4 rounded-lg"
              >
                <h5 className="text-amber-300 font-medium mb-2">2. Initial Distribution Problem</h5>
                <p className="text-white text-sm">
                  PoS systems face a bootstrapping dilemma: tokens must be distributed before staking can begin, creating fairness issues. PoW networks like Bitcoin allow for fair initial distribution through mining, where anyone can participate by contributing computational work.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-4 rounded-lg"
              >
                <h5 className="text-amber-300 font-medium mb-2">3. Objective vs. Subjective Finality</h5>
                <p className="text-white text-sm">
                  Bitcoin's PoW provides objective finality: the chain with the most accumulated work is unambiguously the valid chain. PoS systems often rely on social consensus or checkpoints, introducing subjective elements to finality determination.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-4 rounded-lg"
              >
                <h5 className="text-amber-300 font-medium mb-2">4. Long-Range Attacks</h5>
                <p className="text-white text-sm">
                  PoS chains are vulnerable to "long-range attacks" where validators who held stake in the past could create an alternative history from some point in the blockchain's history. PoW prevents this as recreating the chain's history would require redoing all the computational work.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-4 rounded-lg"
              >
                <h5 className="text-amber-300 font-medium mb-2">5. Wealth Concentration</h5>
                <p className="text-white text-sm">
                  PoS can lead to increased centralization as those with more tokens earn more rewards, concentrating wealth and power. PoW allows miners to convert external resources (energy) into tokens, providing a constant influx of new participants and dilution of existing stakeholders.
                </p>
              </motion.div>
            </div>
          </div>
          
          <div className="bg-black/50 border border-amber-400/50 rounded-lg p-5 mb-6">
            <div className="flex items-start mb-3">
              <div className="p-2 rounded-lg bg-amber-500/50 mr-3 text-white">
                <Zap className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-amber-300">The Energy Consumption Debate</h4>
            </div>
            <p className="text-white mb-4">
              Critics often point to Bitcoin's energy consumption as a negative, while proponents view it as essential to its security model. The energy expenditure in PoW:
            </p>
            <ul className="space-y-2 text-white">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Creates a tamper-proof history that cannot be rewritten without equivalent energy expenditure</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Enables a truly permissionless system with no gatekeepers</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Incentivizes the use of stranded energy sources and renewable power</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Provides a "thermodynamic guarantee" of Bitcoin's history</span>
              </li>
            </ul>
          </div>
          
          <p className="text-white">
            While both consensus mechanisms have their merits, Bitcoin's use of Proof of Work aligns perfectly with its core value proposition as sound money. The physics-based security, fair distribution mechanism, and resistance to centralization make PoW the superior choice for a global, censorship-resistant monetary system. The energy consumption is not a bug but a feature that underpins Bitcoin's unique security properties.
          </p>
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
            Test your understanding of Bitcoin's consensus and mining concepts with this short quiz.
          </p>
          
          <div className="space-y-6 mb-8">
            <div className="bg-black border-2 border-amber-400 rounded-lg p-5">
              <h4 className="text-amber-300 font-medium mb-3">Question 1: Bitcoin's consensus mechanism is called:</h4>
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
                  <span className="text-white">Proof of Authority</span>
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
                  <span className="text-white">Proof of Work</span>
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
                  <span className="text-white">Proof of Stake</span>
                </div>
                
                <div 
                  className={`p-3 rounded-lg flex items-center cursor-pointer ${
                    selectedAnswers[1] === 'd' 
                      ? 'bg-amber-500/40 border-2 border-amber-500' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                  onClick={() => setSelectedAnswers({...selectedAnswers, 1: 'd'})}
                >
                  <div className={`h-5 w-5 rounded-full mr-3 flex-shrink-0 ${
                    selectedAnswers[1] === 'd' ? 'bg-amber-500' : 'border-2 border-gray-500'
                  }`}></div>
                  <span className="text-white">Delegated Byzantine Fault Tolerance</span>
                </div>
              </div>
              
              {showResults && (
                <div className="mt-4">
                  {selectedAnswers[1] === correctAnswers[1] ? (
                    <p className="text-green-500 font-medium">Correct! Bitcoin uses Proof of Work as its consensus mechanism.</p>
                  ) : (
                    <p className="text-red-500 font-medium">Incorrect. Bitcoin uses Proof of Work as its consensus mechanism.</p>
                  )}
                </div>
              )}
            </div>
            
            <div className="bg-black border-2 border-amber-400 rounded-lg p-5">
              <h4 className="text-amber-300 font-medium mb-3">Question 2: How does the Bitcoin network achieve consensus?</h4>
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
                  <span className="text-white">Through a central authority that validates all transactions</span>
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
                  <span className="text-white">By voting rights proportional to how many coins you own</span>
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
                  <span className="text-white">Through miners competing to solve cryptographic puzzles and following network rules</span>
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
                  <span className="text-white">By requiring all users to manually verify each transaction</span>
                </div>
              </div>
              
              {showResults && (
                <div className="mt-4">
                  {selectedAnswers[2] === correctAnswers[2] ? (
                    <p className="text-green-500 font-medium">Correct! Miners compete to solve cryptographic puzzles, and all nodes verify that blocks follow network rules.</p>
                  ) : (
                    <p className="text-red-500 font-medium">Incorrect. Bitcoin achieves consensus through miners competing to solve cryptographic puzzles and following network rules.</p>
                  )}
                </div>
              )}
            </div>
            
            <div className="bg-black border-2 border-amber-400 rounded-lg p-5">
              <h4 className="text-amber-300 font-medium mb-3">Question 3: How often does Bitcoin target finding a new block?</h4>
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
                  <span className="text-white">Every minute</span>
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
                  <span className="text-white">Every 2 minutes</span>
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
                  <span className="text-white">Every 5 minutes</span>
                </div>
                
                <div 
                  className={`p-3 rounded-lg flex items-center cursor-pointer ${
                    selectedAnswers[3] === 'd' 
                      ? 'bg-amber-500/40 border-2 border-amber-500' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                  onClick={() => setSelectedAnswers({...selectedAnswers, 3: 'd'})}
                >
                  <div className={`h-5 w-5 rounded-full mr-3 flex-shrink-0 ${
                    selectedAnswers[3] === 'd' ? 'bg-amber-500' : 'border-2 border-gray-500'
                  }`}></div>
                  <span className="text-white">Every 10 minutes on average</span>
                </div>
              </div>
              
              {showResults && (
                <div className="mt-4">
                  {selectedAnswers[3] === correctAnswers[3] ? (
                    <p className="text-green-500 font-medium">Correct! Bitcoin adjusts its difficulty to target an average block time of 10 minutes.</p>
                  ) : (
                    <p className="text-red-500 font-medium">Incorrect. Bitcoin adjusts its difficulty to target an average block time of 10 minutes.</p>
                  )}
                </div>
              )}
            </div>
            
            <div className="bg-black border-2 border-amber-400 rounded-lg p-5">
              <h4 className="text-amber-300 font-medium mb-3">Question 4: What incentivizes miners to secure the Bitcoin network?</h4>
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
                  <span className="text-white">Mining rewards (block subsidies) and transaction fees</span>
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
                  <span className="text-white">Government subsidies for cryptocurrency development</span>
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
                  <span className="text-white">The ability to reverse transactions they don't approve of</span>
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
                  <span className="text-white">Annual membership fees paid by Bitcoin users</span>
                </div>
              </div>
              
              {showResults && (
                <div className="mt-4">
                  {selectedAnswers[4] === correctAnswers[4] ? (
                    <p className="text-green-500 font-medium">Correct! Miners are incentivized by block rewards (currently 6.25 BTC per block) and transaction fees.</p>
                  ) : (
                    <p className="text-red-500 font-medium">Incorrect. Miners are incentivized by block rewards (currently 6.25 BTC per block) and transaction fees.</p>
                  )}
                </div>
              )}
            </div>
            
            <div className="bg-black border-2 border-amber-400 rounded-lg p-5">
              <h4 className="text-amber-300 font-medium mb-3">Question 5: What is the maximum number of bitcoins that will ever exist?</h4>
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
                  <span className="text-white">1 million</span>
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
                  <span className="text-white">10 million</span>
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
                  <span className="text-white">21 million</span>
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
                  <span className="text-white">There is no maximum (infinite supply)</span>
                </div>
              </div>
              
              {showResults && (
                <div className="mt-4">
                  {selectedAnswers[5] === correctAnswers[5] ? (
                    <p className="text-green-500 font-medium">Correct! Bitcoin has a fixed supply cap of 21 million coins.</p>
                  ) : (
                    <p className="text-red-500 font-medium">Incorrect. Bitcoin has a fixed supply cap of 21 million coins.</p>
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
                  {score === 5 ? 'Perfect! You\'ve mastered the concepts of Bitcoin mining and consensus.' : 
                   score >= 4 ? 'Excellent! You have a strong understanding of these concepts.' :
                   score >= 3 ? 'Good job! You understand the core concepts, but review the material for more clarity.' :
                   'Review the module material and try again to improve your understanding.'}
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
              In this module, we explored Bitcoin's consensus mechanism and mining process, which form the foundation of its revolutionary security model.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-amber-300 flex">
                  <span className="bg-amber-500 text-black rounded-full h-7 w-7 inline-flex items-center justify-center mr-2">1</span>
                  Bitcoin's Unique Consensus Mechanism
                </h4>
                <p className="text-white mt-2 ml-9">
                  Bitcoin solved the Byzantine Generals Problem through Proof of Work, enabling decentralized consensus without trusted third parties. This breakthrough allows a global network to agree on transaction history with mathematical certainty.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-amber-300 flex">
                  <span className="bg-amber-500 text-black rounded-full h-7 w-7 inline-flex items-center justify-center mr-2">2</span>
                  Mining Secures the Network
                </h4>
                <p className="text-white mt-2 ml-9">
                  Mining is the process that secures Bitcoin through computational work, making it prohibitively expensive to attack or rewrite history. Miners compete to solve cryptographic puzzles, with automatic difficulty adjustments ensuring a 10-minute average block time.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-amber-300 flex">
                  <span className="bg-amber-500 text-black rounded-full h-7 w-7 inline-flex items-center justify-center mr-2">3</span>
                  Economic Incentives
                </h4>
                <p className="text-white mt-2 ml-9">
                  Bitcoin's economic incentives align miners' self-interest with network security. The block reward (newly created bitcoins plus transaction fees) motivates miners to validate transactions honestly and protect the network.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-amber-300 flex">
                  <span className="bg-amber-500 text-black rounded-full h-7 w-7 inline-flex items-center justify-center mr-2">4</span>
                  Transition to Fee Market
                </h4>
                <p className="text-white mt-2 ml-9">
                  As Bitcoin's block subsidy continues to decrease through halvings, transaction fees will gradually become the primary incentive for miners. This creates a sustainable security model that doesn't rely on perpetual inflation.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-amber-300 flex">
                  <span className="bg-amber-500 text-black rounded-full h-7 w-7 inline-flex items-center justify-center mr-2">5</span>
                  Proof of Work vs. Proof of Stake
                </h4>
                <p className="text-white mt-2 ml-9">
                  While Proof of Stake offers energy efficiency, Proof of Work provides superior security through its objective, external cost structure. PoW's physical link to the real world through energy expenditure gives Bitcoin uniquely strong security guarantees.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg border border-amber-500/40">
            <h3 className="text-lg font-semibold text-amber-300 mb-3">Looking Ahead</h3>
            <p className="text-white">
              With an understanding of how Bitcoin achieves consensus and maintains security, we'll next explore Bitcoin's technical design principles, examining the architectural choices that enable its unique value proposition as a decentralized monetary system.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <ModuleContent
      title="Consensus & Mining"
      courseTitle="Intermediate Course"
      courseSlug="intermediate"
      moduleNumber={1}
      totalModules={6}
      objectives={[
        "Understand the role consensus plays in a decentralized currency",
        "Learn how mining secures the Bitcoin network",
        "Grasp the economic incentives behind Bitcoin mining",
        "Explore how the network resolves conflicts and maintains a single ledger",
        "Compare Proof of Work to Proof of Stake consensus mechanisms"
      ]}
      keypoints={[
        "Proof-of-Work as a consensus mechanism",
        "Mining difficulty adjustments and their purpose",
        "Block rewards and the emission schedule",
        "Longest chain rule for conflict resolution",
        "Network security and economic incentives",
        "Why Proof of Work is superior to Proof of Stake for Bitcoin"
      ]}
      sections={sections}
      next={{
        title: "Bitcoin Design",
        path: "/learn/intermediate/bitcoin-design"
      }}
    />
  );
};

export default ConsensusMining; 