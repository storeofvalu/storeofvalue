import React from 'react';
import ModuleContent, { ModuleSection } from '../ModuleContent';
import { motion } from 'framer-motion';
import { 
  Shield, Key, GitMerge, HardDrive, Share2, Lock, 
  Layers, CheckCircle, Database, NetworkIcon, 
  Code, BarChart3 
} from 'lucide-react';

const BitcoinDesign = () => {
  const [selectedAnswers, setSelectedAnswers] = React.useState<{[key: number]: string}>({});
  const [showResults, setShowResults] = React.useState(false);
  const [score, setScore] = React.useState(0);
  
  const correctAnswers = {
    1: "c", // UTXO model
    2: "a", // Merkle trees
    3: "b", // Schnorr signatures
    4: "d", // 80 bytes
    5: "a"  // SHA-256
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
      title: "Bitcoin's Design Philosophy",
      type: "text",
      estimatedMinutes: 7,
      content: (
        <div>
          <p className="text-white mb-4">
            Bitcoin's design reflects a set of core principles that guide its development and operation. Understanding these principles helps explain why Bitcoin works the way it does and why certain design choices were made.
          </p>
          
          <h4 className="font-semibold text-lg mt-6 mb-3 text-amber-300">Core Design Principles</h4>
          
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
                  <NetworkIcon className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-amber-300">Decentralization</h4>
              </div>
              <p className="text-white">
                Bitcoin was designed to operate without central control. This extends to all aspects of the system: transaction validation, issuance policy, consensus rules, and network topology. No single entity can unilaterally change Bitcoin's rules.
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
                  <Lock className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-amber-300">Trustlessness</h4>
              </div>
              <p className="text-white">
                Users don't need to trust each other or any central authority. Bitcoin uses cryptographic proofs instead of trust, allowing any participant to independently verify all aspects of the system.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="border-2 border-amber-400 bg-black rounded-lg p-5 shadow-md"
            >
              <div className="flex items-start mb-3">
                <div className="p-2 rounded-lg bg-amber-500/80 mr-3 text-white">
                  <Shield className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-amber-300">Security Over Efficiency</h4>
              </div>
              <p className="text-white">
                Bitcoin prioritizes security and reliability over performance. When trade-offs need to be made, Bitcoin's design favors stronger security guarantees rather than higher transaction throughput or more features.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="border-2 border-amber-400 bg-black rounded-lg p-5 shadow-md"
            >
              <div className="flex items-start mb-3">
                <div className="p-2 rounded-lg bg-amber-500/80 mr-3 text-white">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-amber-300">Incentive Alignment</h4>
              </div>
              <p className="text-white">
                Bitcoin's design aligns the economic incentives of network participants with the security and stability of the system. Miners are rewarded for honest behavior and following the rules.
              </p>
            </motion.div>
          </div>
          
          <div className="bg-black p-5 rounded-lg my-6 border-2 border-amber-400">
            <h4 className="text-lg font-semibold mb-2 text-amber-300">Key Insight</h4>
            <p className="text-white">
              Bitcoin's design is conservative by nature. Changes to Bitcoin's protocol are deliberately slow and cautious, requiring broad consensus. This conservatism is a feature, not a bug—it ensures the stability and security of a system that secures hundreds of billions of dollars in value.
            </p>
          </div>
          
          <p className="text-white">
            These design principles have led to a system that has operated continuously for over a decade, with unprecedented security and reliability for a digital payment network. Understanding Bitcoin's design principles provides context for its technical architecture, which we'll explore next.
          </p>
        </div>
      )
    },
    {
      title: "The UTXO Model",
      type: "text",
      estimatedMinutes: 5,
      content: (
        <div>
          <p className="text-white mb-4">
            Bitcoin's transaction model is fundamentally different from traditional payment systems. Bitcoin uses what's called the "Unspent Transaction Output" (UTXO) model, which is crucial to understanding how Bitcoin transactions work.
          </p>
          
          <div className="grid md:grid-cols-2 gap-x-6 gap-y-4 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-black border-2 border-amber-400 rounded-lg p-5"
            >
              <div className="flex items-start mb-3">
                <div className="p-2 rounded-lg bg-amber-500/80 mr-3 text-white">
                  <Database className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-amber-300">What is a UTXO?</h4>
              </div>
              <p className="text-white">
                A UTXO is an "Unspent Transaction Output" - essentially a chunk of bitcoin that has been assigned to a specific Bitcoin address and is available to be spent. Every bitcoin in existence is represented as a UTXO in Bitcoin's ledger.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-black border-2 border-amber-400 rounded-lg p-5"
            >
              <div className="flex items-start mb-3">
                <div className="p-2 rounded-lg bg-amber-500/80 mr-3 text-white">
                  <GitMerge className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-amber-300">UTXO vs. Account Model</h4>
              </div>
              <p className="text-white">
                Unlike traditional banking or Ethereum's account model where balances are tracked, Bitcoin tracks unspent outputs. Your "balance" is the sum of all UTXOs that your private keys can unlock.
              </p>
            </motion.div>
          </div>
          
          <h4 className="text-lg font-semibold mt-8 mb-4 text-amber-300">How Bitcoin Transactions Work</h4>
          
          <div className="bg-black border-2 border-amber-400 rounded-lg p-5 mb-6">
            <div className="flex flex-col space-y-5">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <div className="min-w-[32px] h-8 w-8 rounded-full bg-amber-400 flex items-center justify-center text-black font-bold mr-4 mt-0.5">1</div>
                <div>
                  <h5 className="font-medium text-amber-300">Spending UTXOs</h5>
                  <p className="text-white">When you send bitcoin, you're not sending from an account. You're consuming (spending) one or more UTXOs that your wallet controls.</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <div className="min-w-[32px] h-8 w-8 rounded-full bg-amber-400 flex items-center justify-center text-black font-bold mr-4 mt-0.5">2</div>
                <div>
                  <h5 className="font-medium text-amber-300">Creating New UTXOs</h5>
                  <p className="text-white">Each transaction consumes existing UTXOs as inputs and creates new UTXOs as outputs. These new UTXOs can now be spent in future transactions.</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <div className="min-w-[32px] h-8 w-8 rounded-full bg-amber-400 flex items-center justify-center text-black font-bold mr-4 mt-0.5">3</div>
                <div>
                  <h5 className="font-medium text-amber-300">Change Outputs</h5>
                  <p className="text-white">UTXOs must be spent entirely. If you want to spend part of a UTXO, you must create a "change" output sending the remainder back to yourself.</p>
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="bg-black border-2 border-amber-400 rounded-lg p-5 my-6">
            <h4 className="font-semibold mb-3 text-amber-300">Example Transaction</h4>
            
            <div className="relative py-8 px-4 overflow-hidden">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center justify-between text-center relative"
              >
                <div className="bg-gray-900 p-4 rounded-lg border border-amber-400 mb-6 md:mb-0 z-10 max-w-[280px]">
                  <h5 className="font-medium mb-2 text-amber-300">Input UTXOs</h5>
                  <div className="text-white mb-2 bg-gray-800 p-2 rounded">UTXO #1: 0.5 BTC</div>
                  <div className="text-white bg-gray-800 p-2 rounded">UTXO #2: 0.3 BTC</div>
                  <p className="text-gray-400 mt-2 text-sm">Total: 0.8 BTC</p>
                </div>
                
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="h-1 w-24 bg-amber-400"
                  />
                  <div className="absolute -right-3 -top-1.5 text-amber-400">→</div>
                </div>
                
                <div className="bg-gray-900 p-4 rounded-lg border border-amber-400 z-10 max-w-[280px]">
                  <h5 className="font-medium mb-2 text-amber-300">Output UTXOs</h5>
                  <div className="text-white mb-2 bg-gray-800 p-2 rounded">To Recipient: 0.7 BTC</div>
                  <div className="text-white bg-gray-800 p-2 rounded">Change: 0.095 BTC</div>
                  <p className="text-gray-400 mt-2 text-sm">Fee: 0.005 BTC</p>
                </div>
              </motion.div>
            </div>
          </div>
          
          <h4 className="text-lg font-semibold mt-8 mb-4 text-amber-300">Advantages of the UTXO Model</h4>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-black border-2 border-amber-400 rounded-lg p-5"
            >
              <div className="flex items-start mb-3">
                <div className="p-2 rounded-lg bg-amber-500/80 mr-3 text-white">
                  <Shield className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-amber-300">Enhanced Privacy</h4>
              </div>
              <p className="text-white">
                Each transaction can use new addresses, making it harder to link transactions to a specific user. With proper wallet hygiene, the UTXO model can offer better privacy than account-based models.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-black border-2 border-amber-400 rounded-lg p-5"
            >
              <div className="flex items-start mb-3">
                <div className="p-2 rounded-lg bg-amber-500/80 mr-3 text-white">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-amber-300">Simpler Verification</h4>
              </div>
              <p className="text-white">
                Each UTXO can only be spent once and in full, eliminating complex balance tracking. This simplifies transaction validation and reduces the risk of errors or double-spending attempts.
              </p>
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
                  <Share2 className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-amber-300">Parallelization</h4>
              </div>
              <p className="text-white">
                UTXO-based transactions can be validated in parallel since they reference independent inputs, allowing for more efficient processing on multiple nodes without complex state tracking.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-black border-2 border-amber-400 rounded-lg p-5"
            >
              <div className="flex items-start mb-3">
                <div className="p-2 rounded-lg bg-amber-500/80 mr-3 text-white">
                  <Layers className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-amber-300">Enables Layer 2 Solutions</h4>
              </div>
              <p className="text-white">
                The UTXO model enables powerful layer 2 solutions like the Lightning Network and facilitates smart contracts through technologies like Taproot, allowing Bitcoin to scale while maintaining security.
              </p>
            </motion.div>
          </div>
          
          <p className="text-white">
            Understanding the UTXO model is fundamental to understanding how Bitcoin works at a technical level. It's different from account-based systems most people are familiar with, but this unique design offers significant advantages for a decentralized payment system.
          </p>
        </div>
      )
    },
    {
      title: "Blockchain Structure & Merkle Trees",
      type: "text",
      estimatedMinutes: 6,
      content: (
        <div>
          <p className="text-white mb-4">
            The blockchain is Bitcoin's solution to the problem of creating a tamper-evident, distributed ledger. Its unique structure provides security and makes it nearly impossible to alter transaction history without detection.
          </p>
          
          <h4 className="text-lg font-semibold mt-6 mb-4 text-amber-300">Block Structure</h4>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-black border-2 border-amber-400 rounded-lg p-5 mb-8"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-amber-300 font-medium mb-3">Block Header (80 bytes)</h5>
                <div className="space-y-2 text-white">
                  <div className="grid grid-cols-[140px,1fr] gap-2">
                    <div className="font-mono bg-gray-800 rounded px-2 py-1">Version</div>
                    <div>Protocol version identifier</div>
                  </div>
                  <div className="grid grid-cols-[140px,1fr] gap-2">
                    <div className="font-mono bg-gray-800 rounded px-2 py-1">PrevBlockHash</div>
                    <div>Reference to previous block</div>
                  </div>
                  <div className="grid grid-cols-[140px,1fr] gap-2">
                    <div className="font-mono bg-gray-800 rounded px-2 py-1">MerkleRoot</div>
                    <div>Hash of all transactions in block</div>
                  </div>
                  <div className="grid grid-cols-[140px,1fr] gap-2">
                    <div className="font-mono bg-gray-800 rounded px-2 py-1">Timestamp</div>
                    <div>When the block was created</div>
                  </div>
                  <div className="grid grid-cols-[140px,1fr] gap-2">
                    <div className="font-mono bg-gray-800 rounded px-2 py-1">Bits</div>
                    <div>Target difficulty value</div>
                  </div>
                  <div className="grid grid-cols-[140px,1fr] gap-2">
                    <div className="font-mono bg-gray-800 rounded px-2 py-1">Nonce</div>
                    <div>Counter for Proof of Work</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h5 className="text-amber-300 font-medium mb-3">Block Body</h5>
                <div className="text-white">
                  <p className="mb-2">Contains:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-amber-400">•</div>
                      <div>Coinbase transaction (miner reward + fees)</div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-amber-400">•</div>
                      <div>All other transactions in the block</div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-amber-400">•</div>
                      <div>Size varies dramatically (from kilobytes to megabytes)</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-5 pt-5 border-t border-gray-700">
              <div className="flex items-center">
                <Shield className="text-amber-400 mr-2 h-5 w-5"/>
                <h5 className="text-amber-300 font-medium">Security Features</h5>
              </div>
              <p className="text-white mt-2">
                The block header is crucial for Bitcoin's security. Each block header contains the hash of the previous block, creating an unbreakable chain. Changing any transaction would change the Merkle root, which would change the block hash, breaking the chain.
              </p>
            </div>
          </motion.div>
          
          <h4 className="text-lg font-semibold mt-8 mb-4 text-amber-300">Merkle Trees: Efficient Verification</h4>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col h-full"
            >
              <div className="bg-black border-2 border-amber-400 rounded-lg p-5 h-full">
                <div className="flex items-start mb-3">
                  <div className="p-2 rounded-lg bg-amber-500/80 mr-3 text-white">
                    <GitMerge className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold text-amber-300">What is a Merkle Tree?</h4>
                </div>
                <p className="text-white mb-3">
                  A Merkle tree is a binary tree of hashes that allows for efficient and secure verification of data integrity. In Bitcoin, it creates a single hash (the Merkle root) that represents all transactions in a block.
                </p>
                <p className="text-white">
                  This structure allows anyone to verify if a specific transaction is included in a block without downloading the entire block—just a small proof (Merkle proof) is needed.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <div className="bg-black border-2 border-amber-400 rounded-lg p-5 flex flex-col h-full">
                <h4 className="font-semibold mb-3 text-amber-300">Why Merkle Trees Matter</h4>
                <ul className="space-y-3 text-white flex-grow">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-amber-400" />
                    <span>Enable <strong>Simplified Payment Verification (SPV)</strong> for lightweight clients that don't store the full blockchain</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-amber-400" />
                    <span>Provide <strong>data efficiency</strong> by reducing the amount of data needed to verify transactions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-amber-400" />
                    <span>Support <strong>scalability</strong> as they allow verification without downloading entire blocks</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
          
          <div className="bg-black border-2 border-amber-400 rounded-lg p-5 mb-8">
            <h4 className="font-semibold mb-4 text-amber-300">Merkle Tree Visualization</h4>
            
            <div className="relative py-8 px-4 overflow-hidden">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                {/* Root Hash */}
                <div className="bg-amber-400 text-black p-2 rounded font-mono text-sm mb-4 w-40">
                  Merkle Root
                </div>
                
                {/* Level 1 - connecting lines */}
                <div className="h-6 w-40 relative mb-2">
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="absolute left-1/4 w-0.5 bg-amber-400 h-full" 
                  />
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="absolute right-1/4 w-0.5 bg-amber-400 h-full" 
                  />
                </div>
                
                {/* Level 1 Hashes */}
                <div className="grid grid-cols-2 gap-8 mb-6">
                  <div className="bg-gray-800 text-white p-2 rounded font-mono text-sm w-40">
                    Hash AB
                  </div>
                  <div className="bg-gray-800 text-white p-2 rounded font-mono text-sm w-40">
                    Hash CD
                  </div>
                </div>
                
                {/* Level 2 - connecting lines */}
                <div className="grid grid-cols-2 gap-8 mb-2 w-full">
                  <div className="relative flex justify-center">
                    <div className="relative w-40">
                      <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="absolute left-1/4 w-0.5 bg-amber-400 h-6" 
                      />
                      <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="absolute right-1/4 w-0.5 bg-amber-400 h-6" 
                      />
                    </div>
                  </div>
                  <div className="relative flex justify-center">
                    <div className="relative w-40">
                      <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="absolute left-1/4 w-0.5 bg-amber-400 h-6" 
                      />
                      <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="absolute right-1/4 w-0.5 bg-amber-400 h-6" 
                      />
                    </div>
                  </div>
                </div>
                
                {/* Level 2 Tx Hashes */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-gray-700 text-white p-2 rounded font-mono text-xs">
                    Tx A Hash
                  </div>
                  <div className="bg-gray-700 text-white p-2 rounded font-mono text-xs">
                    Tx B Hash
                  </div>
                  <div className="bg-gray-700 text-white p-2 rounded font-mono text-xs">
                    Tx C Hash
                  </div>
                  <div className="bg-gray-700 text-white p-2 rounded font-mono text-xs">
                    Tx D Hash
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-2">
              <p className="text-white text-sm italic text-center">Each transaction is hashed, then pairs of hashes are combined and hashed again until a single root hash remains.</p>
            </div>
          </div>
          
          <div className="bg-black border-2 border-amber-400 rounded-lg p-5 mb-8">
            <h4 className="font-semibold mb-4 text-amber-300">Merkle Proofs: Lightweight Verification</h4>
            
            <div className="flex flex-col md:flex-row gap-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <p className="text-white">
                  A Merkle proof allows verification that a transaction is in a block without downloading the entire block. This enables:
                </p>
                <ul className="space-y-2 text-white mt-3">
                  <li className="flex items-start">
                    <div className="p-1 rounded-full bg-amber-400 mr-2 mt-1">
                      <div className="text-xs text-black font-bold">1</div>
                    </div>
                    <span>Lightweight wallets that don't need the full blockchain</span>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 rounded-full bg-amber-400 mr-2 mt-1">
                      <div className="text-xs text-black font-bold">2</div>
                    </div>
                    <span>Fast verification with minimal data</span>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 rounded-full bg-amber-400 mr-2 mt-1">
                      <div className="text-xs text-black font-bold">3</div>
                    </div>
                    <span>Bitcoin to run on devices with limited storage</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex-1 flex items-center justify-center"
              >
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 max-w-sm">
                  <h5 className="text-amber-300 font-medium mb-2">Example Merkle Proof</h5>
                  <p className="text-white text-sm mb-3">
                    To verify transaction A is in a block with Merkle root X:
                  </p>
                  <div className="space-y-2 text-sm text-white font-mono">
                    <div className="bg-gray-800 p-2 rounded">1. Get Tx A hash</div>
                    <div className="bg-gray-800 p-2 rounded">2. Get Hash B</div>
                    <div className="bg-gray-800 p-2 rounded">3. Get Hash CD</div>
                    <div className="bg-gray-800 p-2 rounded">4. Hash(Hash(A+B) + Hash CD) = X?</div>
                    <div className="bg-amber-400/20 p-2 rounded text-amber-300">
                      If result equals block's Merkle root, Tx A is verified!
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          <p className="text-white mb-2">
            The blockchain structure and Merkle trees represent essential innovations in Bitcoin's design. They enable a distributed, trustless ledger that can be efficiently verified by anyone while maintaining Bitcoin's security properties.
          </p>
          
          <p className="text-white">
            These concepts may seem technical, but they're fundamental to how Bitcoin maintains its security and efficiency in a decentralized environment. The ability to verify transactions without trusting a central authority is a core capability enabled by these structures.
          </p>
        </div>
      )
    },
    {
      title: "Cryptographic Design Elements",
      type: "text",
      estimatedMinutes: 6,
      content: (
        <div>
          <p className="text-white mb-4">
            Cryptography is the foundation of Bitcoin's security model. Bitcoin uses various cryptographic techniques to secure transactions, verify ownership, and protect the integrity of the blockchain.
          </p>
          
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
                  <Key className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-amber-300">Public Key Cryptography</h4>
              </div>
              <p className="text-white">
                Bitcoin uses asymmetric cryptography where each user has a key pair: a private key (kept secret) and a public key (shared openly). The private key is used to create digital signatures, while the public key can verify those signatures without revealing the private key.
              </p>
              <div className="mt-4 p-3 bg-gray-900 rounded-lg text-white">
                <div className="flex items-center">
                  <div className="p-1.5 rounded-full bg-amber-400 mr-2">
                    <div className="text-xs text-black font-bold">!</div>
                  </div>
                  <span className="text-sm font-medium">Security Note</span>
                </div>
                <p className="text-sm mt-1">
                  Your private key is your ownership proof. If someone obtains your private key, they can steal all your bitcoin. Never share it with anyone.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-black border-2 border-amber-400 rounded-lg p-5"
            >
              <div className="flex items-start mb-3">
                <div className="p-2 rounded-lg bg-amber-500/80 mr-3 text-white">
                  <HardDrive className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-amber-300">Hash Functions</h4>
              </div>
              <p className="text-white">
                Bitcoin uses the SHA-256 hash function, which converts data of any size into a fixed-length 256-bit (32-byte) output. Hash functions are one-way: easy to verify but practically impossible to reverse-engineer.
              </p>
              <div className="mt-4 bg-gray-900 p-3 rounded-lg">
                <h5 className="text-sm font-medium text-amber-300 mb-2">Properties of SHA-256:</h5>
                <ul className="space-y-1 text-sm text-white">
                  <li className="flex items-start">
                    <div className="text-amber-400 mr-1">•</div>
                    <span>Deterministic: same input always produces same output</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-amber-400 mr-1">•</div>
                    <span>Fast to compute, impossible to reverse</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-amber-400 mr-1">•</div>
                    <span>Avalanche effect: small input changes cause large output changes</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
          
          <h4 className="text-lg font-semibold mt-8 mb-4 text-amber-300">Digital Signatures: ECDSA & Schnorr</h4>
          
          <div className="bg-black border-2 border-amber-400 rounded-lg p-5 mb-8">
            <div className="flex flex-col md:flex-row gap-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <h5 className="text-amber-300 font-medium mb-3">ECDSA (Original System)</h5>
                <p className="text-white text-sm mb-4">
                  Elliptic Curve Digital Signature Algorithm is Bitcoin's original signature scheme, based on mathematical problems involving elliptic curves.
                </p>
                <div className="bg-gray-900 rounded-lg p-3 text-white">
                  <div className="font-medium mb-2 text-amber-300">ECDSA Workflow:</div>
                  <ol className="text-sm space-y-2">
                    <li className="flex items-start">
                      <div className="min-w-[20px] h-5 w-5 rounded-full bg-amber-400 flex items-center justify-center text-black font-bold mr-2 text-xs">1</div>
                      <span>Create a digital signature using your private key and the transaction data</span>
                    </li>
                    <li className="flex items-start">
                      <div className="min-w-[20px] h-5 w-5 rounded-full bg-amber-400 flex items-center justify-center text-black font-bold mr-2 text-xs">2</div>
                      <span>Others can verify the signature using your public key</span>
                    </li>
                    <li className="flex items-start">
                      <div className="min-w-[20px] h-5 w-5 rounded-full bg-amber-400 flex items-center justify-center text-black font-bold mr-2 text-xs">3</div>
                      <span>Verification confirms you authorized the transaction without revealing your private key</span>
                    </li>
                  </ol>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <h5 className="text-amber-300 font-medium mb-3">Schnorr Signatures (Taproot Upgrade)</h5>
                <p className="text-white text-sm mb-4">
                  Introduced in the 2021 Taproot upgrade, Schnorr signatures offer several advantages over ECDSA.
                </p>
                <div className="bg-gray-900 rounded-lg p-3">
                  <div className="font-medium mb-2 text-amber-300">Key Advantages:</div>
                  <ul className="text-white text-sm space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-amber-400" />
                      <span><strong>Linearity</strong>: Multiple signatures can be combined into one signature</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-amber-400" />
                      <span><strong>Privacy</strong>: Complex transactions look like simple ones</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-amber-400" />
                      <span><strong>Efficiency</strong>: Smaller signature sizes and faster verification</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
          
          <h4 className="text-lg font-semibold mt-8 mb-4 text-amber-300">How These Elements Work Together</h4>
          
          <div className="bg-black border-2 border-amber-400 rounded-lg p-5 mb-8">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative py-4 px-4">
                <div className="flex flex-col space-y-6">
                  <div className="flex items-center justify-between relative">
                    <div className="bg-gray-900 p-3 rounded-lg border border-amber-400 w-full max-w-xs">
                      <h5 className="font-medium text-amber-300 text-sm mb-1">Transaction Creation</h5>
                      <p className="text-white text-xs">
                        Alice uses her private key to sign a transaction sending bitcoin to Bob's public key.
                      </p>
                    </div>
                    <div className="hidden md:block w-16 h-0.5 bg-amber-400"></div>
                    <div className="bg-gray-900 p-3 rounded-lg border border-amber-400 w-full max-w-xs">
                      <h5 className="font-medium text-amber-300 text-sm mb-1">Transaction Broadcast</h5>
                      <p className="text-white text-xs">
                        The signed transaction is broadcast to the Bitcoin network.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between relative">
                    <div className="bg-gray-900 p-3 rounded-lg border border-amber-400 w-full max-w-xs">
                      <h5 className="font-medium text-amber-300 text-sm mb-1">Signature Verification</h5>
                      <p className="text-white text-xs">
                        Nodes verify Alice's signature is valid using her public key, confirming she authorized the transaction.
                      </p>
                    </div>
                    <div className="hidden md:block w-16 h-0.5 bg-amber-400"></div>
                    <div className="bg-gray-900 p-3 rounded-lg border border-amber-400 w-full max-w-xs">
                      <h5 className="font-medium text-amber-300 text-sm mb-1">Block Addition</h5>
                      <p className="text-white text-xs">
                        Transaction is added to a block, which is hashed and linked to previous blocks via the previous block hash.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between relative">
                    <div className="bg-gray-900 p-3 rounded-lg border border-amber-400 w-full max-w-xs">
                      <h5 className="font-medium text-amber-300 text-sm mb-1">Merkle Tree Construction</h5>
                      <p className="text-white text-xs">
                        All transactions in the block are hashed and organized in a Merkle tree, producing a single Merkle root hash.
                      </p>
                    </div>
                    <div className="hidden md:block w-16 h-0.5 bg-amber-400"></div>
                    <div className="bg-gray-900 p-3 rounded-lg border border-amber-400 w-full max-w-xs">
                      <h5 className="font-medium text-amber-300 text-sm mb-1">Proof-of-Work</h5>
                      <p className="text-white text-xs">
                        Miners repeatedly hash the block header, changing the nonce until finding a hash that meets the target difficulty.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="bg-black border-2 border-amber-400 rounded-lg p-5">
            <h4 className="text-amber-300 font-medium mb-3">Why Cryptography Matters in Bitcoin</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-3 rounded-lg"
              >
                <h5 className="text-amber-300 font-medium text-sm mb-2">Trust Minimization</h5>
                <p className="text-white text-xs">
                  Cryptographic proofs replace the need to trust third parties or central authorities. The system can be verified mathematically rather than relying on trust.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-3 rounded-lg"
              >
                <h5 className="text-amber-300 font-medium text-sm mb-2">Digital Scarcity</h5>
                <p className="text-white text-xs">
                  Cryptography ensures Bitcoin's scarcity by making it computationally infeasible to counterfeit coins or double-spend existing ones.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-3 rounded-lg"
              >
                <h5 className="text-amber-300 font-medium text-sm mb-2">Immutability</h5>
                <p className="text-white text-xs">
                  Cryptographic hashing makes the blockchain practically immutable. Changing a past transaction would require enormous computational power.
                </p>
              </motion.div>
            </div>
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
            Test your understanding of Bitcoin's design principles with this short quiz.
          </p>
          
          <div className="space-y-6 mb-8">
            <div className="bg-black border-2 border-amber-400 rounded-lg p-5">
              <h4 className="text-amber-300 font-medium mb-3">1. Which transaction model does Bitcoin use?</h4>
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
                  <span className="text-white">Account-based model</span>
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
                  <span className="text-white">Double-entry bookkeeping</span>
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
                  <span className="text-white">UTXO (Unspent Transaction Output) model</span>
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
                  <span className="text-white">Centralized ledger model</span>
                </div>
              </div>
              
              {showResults && (
                <div className="mt-4">
                  {selectedAnswers[1] === correctAnswers[1] ? (
                    <p className="text-green-500 font-medium">Correct! Bitcoin uses UTXOs rather than account balances. Each transaction consumes UTXOs as inputs and creates new UTXOs as outputs.</p>
                  ) : (
                    <p className="text-red-500 font-medium">Incorrect. Bitcoin uses the UTXO model, where each transaction consumes existing unspent outputs and creates new ones.</p>
                  )}
                </div>
              )}
            </div>
            
            <div className="bg-black border-2 border-amber-400 rounded-lg p-5">
              <h4 className="text-amber-300 font-medium mb-3">2. What data structure does Bitcoin use for efficient transaction verification?</h4>
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
                  <span className="text-white">Merkle trees</span>
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
                  <span className="text-white">B-trees</span>
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
                  <span className="text-white">AVL trees</span>
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
                  <span className="text-white">Linked lists</span>
                </div>
              </div>
              
              {showResults && (
                <div className="mt-4">
                  {selectedAnswers[2] === correctAnswers[2] ? (
                    <p className="text-green-500 font-medium">Correct! Merkle trees allow efficient verification of transaction inclusion without downloading the entire block, enabling lightweight clients.</p>
                  ) : (
                    <p className="text-red-500 font-medium">Incorrect. Bitcoin uses Merkle trees for efficient transaction verification without requiring the download of full blocks.</p>
                  )}
                </div>
              )}
            </div>
            
            <div className="bg-black border-2 border-amber-400 rounded-lg p-5">
              <h4 className="text-amber-300 font-medium mb-3">3. Which signature scheme was introduced to Bitcoin in the 2021 Taproot upgrade?</h4>
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
                  <span className="text-white">RSA</span>
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
                  <span className="text-white">Schnorr signatures</span>
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
                  <span className="text-white">DSA</span>
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
                  <span className="text-white">Ed25519</span>
                </div>
              </div>
              
              {showResults && (
                <div className="mt-4">
                  {selectedAnswers[3] === correctAnswers[3] ? (
                    <p className="text-green-500 font-medium">Correct! Schnorr signatures enable signature aggregation, better privacy, and smaller signature sizes compared to the original ECDSA signatures.</p>
                  ) : (
                    <p className="text-red-500 font-medium">Incorrect. The Taproot upgrade introduced Schnorr signatures to Bitcoin, improving privacy and efficiency.</p>
                  )}
                </div>
              )}
            </div>
            
            <div className="bg-black border-2 border-amber-400 rounded-lg p-5">
              <h4 className="text-amber-300 font-medium mb-3">4. What is the size of a Bitcoin block header?</h4>
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
                  <span className="text-white">32 bytes</span>
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
                  <span className="text-white">64 bytes</span>
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
                  <span className="text-white">128 bytes</span>
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
                  <span className="text-white">80 bytes</span>
                </div>
              </div>
              
              {showResults && (
                <div className="mt-4">
                  {selectedAnswers[4] === correctAnswers[4] ? (
                    <p className="text-green-500 font-medium">Correct! Bitcoin block headers are exactly 80 bytes, containing all the essential information needed for the proof-of-work process.</p>
                  ) : (
                    <p className="text-red-500 font-medium">Incorrect. Bitcoin block headers are 80 bytes in size, containing version, previous block hash, merkle root, timestamp, difficulty target, and nonce.</p>
                  )}
                </div>
              )}
            </div>
            
            <div className="bg-black border-2 border-amber-400 rounded-lg p-5">
              <h4 className="text-amber-300 font-medium mb-3">5. Which hash function does Bitcoin primarily use?</h4>
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
                  <span className="text-white">SHA-256</span>
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
                  <span className="text-white">MD5</span>
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
                  <span className="text-white">RIPEMD-160</span>
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
                  <span className="text-white">SHA-1</span>
                </div>
              </div>
              
              {showResults && (
                <div className="mt-4">
                  {selectedAnswers[5] === correctAnswers[5] ? (
                    <p className="text-green-500 font-medium">Correct! SHA-256 is the primary hash function used in Bitcoin's proof-of-work and throughout the protocol, though RIPEMD-160 is also used for address creation.</p>
                  ) : (
                    <p className="text-red-500 font-medium">Incorrect. Bitcoin primarily uses SHA-256 (SHA-256d, or double SHA-256) for proof-of-work and most cryptographic operations.</p>
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
                  {score === 5 ? 'Perfect! You\'ve mastered Bitcoin\'s design principles.' : 
                   score >= 4 ? 'Excellent! You have a strong understanding of Bitcoin\'s design principles.' :
                   score >= 3 ? 'Good job! You understand the core concepts, but review the material for more clarity.' :
                   'Review the module material and try again to improve your understanding of Bitcoin\'s design principles.'}
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
              In this module, we explored Bitcoin's technical design architecture and the foundational principles that make it unique as a monetary system.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-amber-300 flex">
                  <span className="bg-amber-500 text-black rounded-full h-7 w-7 inline-flex items-center justify-center mr-2">1</span>
                  UTXO Transaction Model
                </h4>
                <p className="text-white mt-2 ml-9">
                  Bitcoin's Unspent Transaction Output model differs fundamentally from traditional account-based systems. Instead of tracking balances, it records spendable outputs, offering benefits in parallelization, privacy, and verification simplicity.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-amber-300 flex">
                  <span className="bg-amber-500 text-black rounded-full h-7 w-7 inline-flex items-center justify-center mr-2">2</span>
                  Block Structure
                </h4>
                <p className="text-white mt-2 ml-9">
                  Bitcoin blocks are composed of compact 80-byte headers containing essential metadata and the block body containing transactions. This structure, combined with Merkle trees, enables efficient verification and the full node/lightweight client model.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-amber-300 flex">
                  <span className="bg-amber-500 text-black rounded-full h-7 w-7 inline-flex items-center justify-center mr-2">3</span>
                  Cryptographic Foundation
                </h4>
                <p className="text-white mt-2 ml-9">
                  Bitcoin relies on SHA-256 hashing and public key cryptography for security. The Taproot upgrade introduced Schnorr signatures, enhancing privacy and scalability through signature aggregation and script capabilities.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-amber-300 flex">
                  <span className="bg-amber-500 text-black rounded-full h-7 w-7 inline-flex items-center justify-center mr-2">4</span>
                  Decentralization Trade-offs
                </h4>
                <p className="text-white mt-2 ml-9">
                  Bitcoin's design prioritizes decentralization, security, and reliability over transaction throughput. The block size limit is a deliberate constraint that keeps node operation accessible, maintaining a robust decentralized network at the expense of on-chain capacity.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-amber-300 flex">
                  <span className="bg-amber-500 text-black rounded-full h-7 w-7 inline-flex items-center justify-center mr-2">5</span>
                  Conservative Evolution
                </h4>
                <p className="text-white mt-2 ml-9">
                  Bitcoin's development philosophy emphasizes stability and backward compatibility. Changes to the protocol are approached cautiously, prioritizing security over rapid innovation. This conservative approach helps maintain Bitcoin's reliability as a monetary system.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg border border-amber-500/40">
            <h3 className="text-lg font-semibold text-amber-300 mb-3">Looking Ahead</h3>
            <p className="text-white">
              Now that you understand Bitcoin's fundamental design architecture, you're prepared to explore more advanced topics including Bitcoin scripting, how to analyze the blockchain, and the economic principles that drive Bitcoin's adoption and use as sound money.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <ModuleContent
      title="Bitcoin Design"
      courseTitle="Intermediate Course"
      courseSlug="intermediate"
      moduleNumber={2}
      totalModules={6}
      objectives={[
        "Understand Bitcoin's core design philosophy and principles",
        "Learn how the UTXO model works and its advantages",
        "Explore blockchain structure and the role of Merkle trees",
        "Grasp the cryptographic technologies that secure Bitcoin"
      ]}
      keypoints={[
        "Decentralization, trustlessness, and security as design priorities",
        "UTXO-based transaction model vs. account-based systems",
        "Blockchain headers, chaining, and efficient verification with Merkle trees",
        "Hash functions, ECDSA, and advanced cryptographic features like Schnorr signatures"
      ]}
      sections={sections}
      previous={{
        title: "Consensus & Mining",
        path: "/learn/intermediate/consensus-mining"
      }}
      next={{
        title: "Bitcoin Economics",
        path: "/learn/intermediate/bitcoin-economics"
      }}
    />
  );
};

export default BitcoinDesign; 