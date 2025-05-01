import React from 'react';
import ModuleContent, { ModuleSection } from '../ModuleContent';
import { motion } from 'framer-motion';
import { 
  Check, BookOpen, Users, Server, Lock, ArrowRight, Database, 
  ShieldCheck, Cpu, Wallet, Bitcoin, Globe, ChevronRight, CheckCircle 
} from 'lucide-react';

const InfoCard = ({ title, children, icon, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="border-2 border-amber-400 bg-black rounded-lg p-5 shadow-md"
  >
    <h4 className="font-semibold text-lg mb-3 text-amber-300 flex items-center">
      {icon}
      <span className="ml-2">{title}</span>
    </h4>
    <div className="text-white">{children}</div>
  </motion.div>
);

const BitcoinFundamentals = () => {
  const [selectedAnswers, setSelectedAnswers] = React.useState<{[key: number]: string}>({});
  const [showResults, setShowResults] = React.useState(false);
  const [score, setScore] = React.useState(0);
  
  const correctAnswers = {
    1: "b", // Satoshi Nakamoto
    2: "b", // Satoshi
    3: "c", // Central Banks
    4: "a", // The Bitcoin whitepaper
    5: "d"  // All of the above
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
        return "Satoshi Nakamoto is the pseudonym used by Bitcoin's creator or creators, whose true identity remains unknown.";
      case 2:
        return "The smallest unit of bitcoin is called a 'satoshi', named after Bitcoin's creator. One bitcoin equals 100 million satoshis.";
      case 3:
        return "Central Banks are not part of the Bitcoin network, which operates as a peer-to-peer system with miners, nodes, wallet users, and developers.";
      case 4:
        return "Bitcoin was introduced through the publication of the whitepaper titled 'Bitcoin: A Peer-to-Peer Electronic Cash System' on October 31, 2008.";
      case 5:
        return "Decentralization provides several key benefits including censorship resistance, attack resistance, and eliminating the need for trusted third parties.";
      default:
        return "";
    }
  };

  const sections: ModuleSection[] = [
    {
      title: "Origins of Bitcoin",
      type: "text",
      estimatedMinutes: 6,
      content: (
        <div>
          <p className="text-white mb-4">
            Bitcoin was introduced to the world on October 31, 2008, when an individual or group using the pseudonym Satoshi Nakamoto published a whitepaper titled <strong className="text-amber-300">"Bitcoin: A Peer-to-Peer Electronic Cash System"</strong> to a cryptography mailing list.
          </p>
          
          <div className="bg-black p-6 rounded-lg overflow-hidden border-2 border-amber-400 shadow-md mb-6">
            <h3 className="text-xl font-bold mb-3 text-amber-300">The Bitcoin Whitepaper</h3>
            <p className="text-white mb-4">
              This nine-page document outlined a revolutionary digital currency system that would allow online payments to be sent directly from one party to another without going through a financial institution, effectively solving the "double-spending problem" without requiring a trusted third party.
            </p>
            <div className="mt-2 text-sm">
              <a href="https://bitcoin.org/bitcoin.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium flex items-center">
                <BookOpen className="h-4 w-4 mr-2" />
                Read the original Bitcoin whitepaper online
                <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6 bg-gradient-to-br from-amber-900/20 to-black p-4 border-l-4 border-amber-500 rounded-r-md"
          >
            <p className="text-white italic">
              "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"
            </p>
            <p className="text-amber-300 text-sm mt-2">
              — Message embedded in Bitcoin's genesis block, referencing a headline in The Times newspaper
            </p>
          </motion.div>
          
          <p className="text-white mb-4">
            On January 3, 2009, Satoshi Nakamoto mined the first block of the Bitcoin blockchain, known as the "genesis block." This block contained a message that both timestamped the block and hinted at the economic context motivating Bitcoin's creation during the global financial crisis.
          </p>
          
          <h4 className="font-semibold text-lg mt-6 mb-3 text-amber-300">The Mystery of Satoshi Nakamoto</h4>
          
          <p className="text-white mb-4">
            Despite intense speculation and investigation, the true identity of Satoshi Nakamoto remains unknown to this day. Nakamoto communicated with early Bitcoin developers and users via email and forum posts until December 2010, when they handed control of the Bitcoin source code repository to Gavin Andresen and disappeared from public involvement with Bitcoin.
          </p>
          
          <p className="text-white mb-4">
            Nakamoto's disappearance ensured that Bitcoin would develop as a truly decentralized system, without a central authority figure that could be pressured, compromised, or otherwise influenced. Today, Bitcoin continues to operate without any central control, maintained instead by a global community of developers, miners, and users.
          </p>
          
          <div className="bg-black p-5 rounded-lg my-6 border-2 border-amber-400">
            <h4 className="text-amber-300 font-semibold mb-3">Key Insight</h4>
            <p className="text-white">
              By choosing to remain anonymous and eventually stepping away from the project, Satoshi Nakamoto created something truly revolutionary: the first decentralized digital monetary system that belongs to no one and everyone at the same time.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "How Bitcoin Works: The Basics",
      type: "text",
      estimatedMinutes: 8,
      content: (
        <div>
          <p className="text-white mb-4">
            At its core, Bitcoin is a digital ledger of transactions that is maintained by a network of computers around the world. Let's break down the fundamental elements that make Bitcoin work:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <InfoCard title="Blockchain" icon={<Database className="h-5 w-5 text-amber-400" />} delay={0.1}>
              <p>
                The blockchain is Bitcoin's public ledger—a chronological chain of blocks, each containing a batch of valid transactions. Every node in the network maintains a copy of this ledger, making it distributed and resistant to tampering or revision.
              </p>
            </InfoCard>
            
            <InfoCard title="Mining" icon={<Cpu className="h-5 w-5 text-amber-400" />} delay={0.2}>
              <p>
                Mining is the process by which new bitcoins are created and transactions are added to the blockchain. Miners use powerful computers to solve complex mathematical problems, and the first to solve it gets to add a new block to the blockchain and receives newly created bitcoins as a reward.
              </p>
            </InfoCard>
            
            <InfoCard title="Public and Private Keys" icon={<Lock className="h-5 w-5 text-amber-400" />} delay={0.3}>
              <p>
                Bitcoin uses cryptography for security. Each Bitcoin wallet has a public key (which serves as an address for receiving bitcoin) and a private key (known only to the owner, used to sign transactions). Your private key is like your digital signature—never share it with anyone.
              </p>
            </InfoCard>
            
            <InfoCard title="Nodes" icon={<Server className="h-5 w-5 text-amber-400" />} delay={0.4}>
              <p>
                Nodes are computers running the Bitcoin software that maintain a copy of the blockchain, validate transactions, and relay valid transactions to other nodes. Full nodes enforce all the rules of Bitcoin, ensuring that only valid transactions are added to the blockchain.
              </p>
            </InfoCard>
            </div>
          
          <div className="bg-black p-6 rounded-lg overflow-hidden border-2 border-amber-400 shadow-md my-8">
            <h3 className="text-xl font-bold mb-4 text-amber-300">The Bitcoin Transaction Process</h3>
            <ol className="space-y-4">
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex"
              >
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-amber-500/80 text-black flex items-center justify-center mr-3 mt-0.5">1</div>
                <div>
                  <p className="text-white"><strong className="text-amber-300">Transaction Initiation:</strong> Alice wants to send 0.1 BTC to Bob. She creates a transaction using her wallet, specifying Bob's Bitcoin address and the amount.</p>
          </div>
              </motion.li>
              
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex"
              >
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-amber-500/80 text-black flex items-center justify-center mr-3 mt-0.5">2</div>
                <div>
                  <p className="text-white"><strong className="text-amber-300">Signing:</strong> Alice's wallet uses her private key to create a digital signature for this transaction, proving she controls the bitcoins she wants to send.</p>
                </div>
              </motion.li>
              
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex"
              >
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-amber-500/80 text-black flex items-center justify-center mr-3 mt-0.5">3</div>
                <div>
                  <p className="text-white"><strong className="text-amber-300">Broadcasting:</strong> The signed transaction is broadcast to the Bitcoin network, where it enters a pool of unconfirmed transactions (the "mempool").</p>
                </div>
              </motion.li>
              
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex"
              >
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-amber-500/80 text-black flex items-center justify-center mr-3 mt-0.5">4</div>
                <div>
                  <p className="text-white"><strong className="text-amber-300">Verification:</strong> Nodes in the network verify that Alice has enough bitcoin to send and that her digital signature is valid.</p>
                </div>
              </motion.li>
              
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex"
              >
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-amber-500/80 text-black flex items-center justify-center mr-3 mt-0.5">5</div>
                <div>
                  <p className="text-white"><strong className="text-amber-300">Mining:</strong> Miners select transactions from the mempool, typically prioritizing those with higher fees, and include them in a new block they're attempting to mine.</p>
                </div>
              </motion.li>
              
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex"
              >
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-amber-500/80 text-black flex items-center justify-center mr-3 mt-0.5">6</div>
                <div>
                  <p className="text-white"><strong className="text-amber-300">Confirmation:</strong> When a miner successfully mines a block containing Alice's transaction, it gets added to the blockchain. Each subsequent block adds another "confirmation," making the transaction increasingly secure and irreversible.</p>
                </div>
              </motion.li>
              
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                viewport={{ once: true }}
                className="flex"
              >
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-amber-500/80 text-black flex items-center justify-center mr-3 mt-0.5">7</div>
                <div>
                  <p className="text-white"><strong className="text-amber-300">Receipt:</strong> Bob can now see the transaction as completed in his wallet, and the 0.1 BTC is available for him to spend.</p>
                </div>
              </motion.li>
            </ol>
          </div>
          
          <p className="text-white mb-4">
            This process ensures that bitcoins can only be spent by their rightful owners and prevents the "double-spending" problem (spending the same bitcoin twice) without requiring a central authority to verify transactions.
          </p>
          
          <div className="p-5 rounded-md bg-gradient-to-br from-amber-900/30 to-black border-l-4 border-amber-400">
            <p className="text-white italic">
              "What is needed is an electronic payment system based on cryptographic proof instead of trust, allowing any two willing parties to transact directly with each other without the need for a trusted third party."
            </p>
            <p className="text-amber-300 text-sm mt-2">
              — Satoshi Nakamoto, Bitcoin whitepaper
            </p>
          </div>
        </div>
      )
    },
    {
      title: "The Bitcoin Network",
      type: "text",
      estimatedMinutes: 7,
      content: (
        <div>
          <p className="text-white mb-4">
            The Bitcoin network is a peer-to-peer system that operates without a central authority. Understanding how this network functions helps explain Bitcoin's resilience and decentralized nature.
          </p>
          
          <h4 className="font-semibold text-lg mt-6 mb-3 text-amber-300">Network Participants</h4>
          
          <div className="my-6 space-y-5">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-start"
            >
              <div className="mt-1 mr-4 p-2 rounded-full bg-amber-500/80 text-black">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h5 className="font-semibold text-amber-200">Full Nodes</h5>
                <p className="text-white">Full nodes download and verify every block and transaction, independently enforcing all the rules of Bitcoin. By running a full node, users contribute to the network's decentralization and security while ensuring they can verify their own transactions without trusting third parties.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-start"
            >
              <div className="mt-1 mr-4 p-2 rounded-full bg-amber-500/80 text-black">
                <Cpu className="h-5 w-5" />
              </div>
              <div>
                <h5 className="font-semibold text-amber-200">Miners</h5>
                <p className="text-white">Miners are specialized network participants who compete to solve cryptographic puzzles in order to create new blocks. When a miner successfully creates a valid block, they broadcast it to the network and receive newly created bitcoins (the "block reward") plus any transaction fees. This process, called Proof of Work, requires significant computational resources and electricity.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-start"
            >
              <div className="mt-1 mr-4 p-2 rounded-full bg-amber-500/80 text-black">
                <Wallet className="h-5 w-5" />
              </div>
              <div>
                <h5 className="font-semibold text-amber-200">Wallet Users</h5>
                <p className="text-white">The majority of network participants simply use Bitcoin wallets to send and receive transactions. Many use lightweight or SPV (Simplified Payment Verification) wallets, which connect to full nodes to validate their transactions without storing the entire blockchain.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-start"
            >
              <div className="mt-1 mr-4 p-2 rounded-full bg-amber-500/80 text-black">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h5 className="font-semibold text-amber-200">Developers</h5>
                <p className="text-white">Bitcoin developers work on the open-source Bitcoin code, proposing improvements through Bitcoin Improvement Proposals (BIPs). Unlike traditional software, changes to Bitcoin's rules require broad consensus among the network participants, emphasizing Bitcoin's decentralized governance model.</p>
              </div>
            </motion.div>
          </div>
          
          <h4 className="font-semibold text-lg mt-8 mb-3 text-amber-300">Decentralization: Bitcoin's Core Strength</h4>
          
          <p className="text-white mb-4">
            Bitcoin's network architecture is intentionally decentralized, meaning there is no single point of failure or control. This design offers several key advantages:
          </p>
          
          <div className="grid md:grid-cols-2 gap-5 my-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-black p-4 rounded-lg border-2 border-amber-400"
            >
              <div className="flex items-center mb-2">
                <div className="p-2 rounded-full bg-amber-500/80 text-black mr-3">
                  <Check className="h-4 w-4" />
                </div>
                <h5 className="font-semibold text-amber-300">Censorship Resistance</h5>
              </div>
              <p className="text-white text-sm">No central authority can block or reverse transactions, making Bitcoin virtually impossible to censor or control.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black p-4 rounded-lg border-2 border-amber-400"
            >
              <div className="flex items-center mb-2">
                <div className="p-2 rounded-full bg-amber-500/80 text-black mr-3">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <h5 className="font-semibold text-amber-300">Security</h5>
              </div>
              <p className="text-white text-sm">The distributed nature of the blockchain makes it extremely difficult to attack or manipulate as an attacker would need to control a majority of the network's computing power.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-black p-4 rounded-lg border-2 border-amber-400"
            >
              <div className="flex items-center mb-2">
                <div className="p-2 rounded-full bg-amber-500/80 text-black mr-3">
                  <Server className="h-4 w-4" />
                </div>
                <h5 className="font-semibold text-amber-300">Reliability</h5>
              </div>
              <p className="text-white text-sm">The network continues to function even if some nodes go offline, providing 24/7 availability without maintenance windows or downtime.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-black p-4 rounded-lg border-2 border-amber-400"
            >
              <div className="flex items-center mb-2">
                <div className="p-2 rounded-full bg-amber-500/80 text-black mr-3">
                  <Globe className="h-4 w-4" />
                </div>
                <h5 className="font-semibold text-amber-300">Neutrality</h5>
              </div>
              <p className="text-white text-sm">The network treats all transactions equally, regardless of sender, recipient, or amount, creating a level playing field for all participants.</p>
            </motion.div>
          </div>
          
          <div className="bg-black p-5 rounded-lg my-6 border-2 border-amber-400">
            <h4 className="text-amber-300 font-semibold mb-3">Key Insight</h4>
            <p className="text-white">
              Bitcoin's decentralization is not just a technical feature—it's a foundational principle that enables Bitcoin to function as truly peer-to-peer money outside the control of any government, corporation, or individual.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Bitcoin Units and Denominations",
      type: "text",
      estimatedMinutes: 5,
      content: (
        <div>
          <p className="text-white mb-4">
            Bitcoin can be divided into smaller units, making it practical for both large and small transactions. Understanding these denominations is important for anyone using Bitcoin.
          </p>
          
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse bg-black shadow-md">
              <thead>
                <tr>
                  <th className="py-3 px-4 border-b border-amber-400 text-left font-semibold text-amber-300">Name</th>
                  <th className="py-3 px-4 border-b border-amber-400 text-left font-semibold text-amber-300">Symbol</th>
                  <th className="py-3 px-4 border-b border-amber-400 text-left font-semibold text-amber-300">Value in BTC</th>
                  <th className="py-3 px-4 border-b border-amber-400 text-left font-semibold text-amber-300">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-400/30">
                <tr>
                  <td className="py-3 px-4 border-r border-amber-400/30 text-white">Bitcoin</td>
                  <td className="py-3 px-4 border-r border-amber-400/30 text-white">BTC</td>
                  <td className="py-3 px-4 border-r border-amber-400/30 text-amber-300">1 BTC</td>
                  <td className="py-3 px-4 text-white">The standard unit, equivalent to 100 million satoshis</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-r border-amber-400/30 text-white">Millibitcoin</td>
                  <td className="py-3 px-4 border-r border-amber-400/30 text-white">mBTC</td>
                  <td className="py-3 px-4 border-r border-amber-400/30 text-amber-300">0.001 BTC</td>
                  <td className="py-3 px-4 text-white">One thousandth of a bitcoin (1,000 mBTC = 1 BTC)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-r border-amber-400/30 text-white">Microbitcoin</td>
                  <td className="py-3 px-4 border-r border-amber-400/30 text-white">μBTC</td>
                  <td className="py-3 px-4 border-r border-amber-400/30 text-amber-300">0.000001 BTC</td>
                  <td className="py-3 px-4 text-white">One millionth of a bitcoin, also called a "bit" (1,000,000 μBTC = 1 BTC)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium border-r border-amber-400/30 text-orange-300">Satoshi</td>
                  <td className="py-3 px-4 border-r border-amber-400/30 text-white">sat</td>
                  <td className="py-3 px-4 border-r border-amber-400/30 text-amber-300">0.00000001 BTC</td>
                  <td className="py-3 px-4 text-white">The smallest unit of bitcoin, named after Bitcoin's creator (100,000,000 sats = 1 BTC)</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-black p-5 rounded-lg my-6 border-2 border-amber-400">
            <h4 className="text-amber-300 font-semibold mb-3">Why Satoshis Matter</h4>
            <p className="text-white">
              As Bitcoin's value has increased over time, using satoshis (or "sats") has become increasingly common for everyday transactions and price discussions. Thinking in terms of satoshis can also make Bitcoin more psychologically accessible—it's easier for most people to comprehend owning 100,000 sats than 0.001 BTC.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-black p-5 rounded-lg border-2 border-amber-400"
            >
              <h4 className="text-amber-300 font-semibold mb-3">Examples in Practice</h4>
              <ul className="space-y-3 text-white">
                <li className="flex items-center">
                  <div className="p-1.5 rounded-full bg-amber-500/80 text-black mr-2">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 16 16">
                      <circle cx="8" cy="8" r="4" />
                    </svg>
                  </div>
                  <span><strong className="text-amber-200">Coffee purchase:</strong> ≈ 10,000 sats (0.0001 BTC)</span>
                </li>
                <li className="flex items-center">
                  <div className="p-1.5 rounded-full bg-amber-500/80 text-black mr-2">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 16 16">
                      <circle cx="8" cy="8" r="4" />
                    </svg>
                  </div>
                  <span><strong className="text-amber-200">Average transaction fee:</strong> ≈ 2,000 sats (0.00002 BTC)</span>
                </li>
                <li className="flex items-center">
                  <div className="p-1.5 rounded-full bg-amber-500/80 text-black mr-2">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 16 16">
                      <circle cx="8" cy="8" r="4" />
                    </svg>
                  </div>
                  <span><strong className="text-amber-200">Small investment:</strong> 1,000,000 sats (0.01 BTC)</span>
                </li>
            </ul>
              <p className="mt-3 text-sm text-amber-500/80 italic">
              Note: These are example values only; actual prices in Bitcoin vary based on current exchange rates and network conditions.
            </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-black p-5 rounded-lg border-2 border-orange-400"
            >
              <h4 className="text-orange-300 font-semibold mb-3 flex items-center">
                <Bitcoin className="h-5 w-5 mr-2 text-orange-400" /> The "Sat Standard"
              </h4>
              <p className="text-white mb-4">
                Some Bitcoin enthusiasts have adopted a "sat standard," preferring to think and price exclusively in satoshis rather than constantly converting to and from fiat currencies.
              </p>
              <p className="text-white">
                This approach emphasizes Bitcoin's role as an independent monetary system rather than just an investment valued in dollars or other currencies. As Bitcoin adoption grows, more people may come to think in terms of sats rather than fractions of a bitcoin.
              </p>
            </motion.div>
          </div>
        </div>
      )
    },
    {
      title: "Getting Your First Bitcoin",
      type: "text",
      estimatedMinutes: 6,
      content: (
        <div>
          <p className="text-white mb-4">
            Now that you understand the basics of what Bitcoin is and how it works, you might be wondering how to acquire your first bitcoin. There are several ways to obtain bitcoin, each with its own advantages and considerations.
          </p>
          
          <div className="my-6 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="border-2 border-amber-400 rounded-lg overflow-hidden bg-black"
            >
              <div className="bg-amber-500/80 p-3">
                <h4 className="text-lg font-semibold text-white">Cryptocurrency Exchanges</h4>
              </div>
              <div className="p-4">
                <p className="mb-3 text-white">
                  Cryptocurrency exchanges are the most common way for beginners to buy bitcoin. These platforms allow you to exchange fiat currency (like USD, EUR, etc.) for bitcoin.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex">
                    <div className="w-24 font-medium text-amber-300">Pros:</div>
                    <div className="text-white">Relatively easy to use, often have good liquidity and reasonable fees</div>
                  </div>
                  <div className="flex">
                    <div className="w-24 font-medium text-amber-300">Cons:</div>
                    <div className="text-white">Require personal information for verification (KYC), you don't control the private keys while your bitcoin is on the exchange</div>
                  </div>
                  <div className="flex pt-1">
                    <div className="w-24 font-medium text-amber-300">Important:</div>
                    <div className="text-orange-400 font-semibold">Never leave large amounts of bitcoin on an exchange long-term. Transfer to your own wallet for better security.</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="border-2 border-amber-400 rounded-lg overflow-hidden bg-black"
            >
              <div className="bg-amber-500/80 p-3">
                <h4 className="text-lg font-semibold text-white">Bitcoin ATMs</h4>
              </div>
              <div className="p-4">
                <p className="mb-3 text-white">
                  Bitcoin ATMs allow you to purchase bitcoin with cash. They're becoming increasingly common in many cities around the world.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex">
                    <div className="w-24 font-medium text-amber-300">Pros:</div>
                    <div className="text-white">Convenient, often require less personal information than exchanges</div>
                  </div>
                  <div className="flex">
                    <div className="w-24 font-medium text-amber-300">Cons:</div>
                    <div className="text-white">Usually charge higher fees than online exchanges, may have lower purchase limits</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="border-2 border-amber-400 rounded-lg overflow-hidden bg-black"
            >
              <div className="bg-amber-500/80 p-3">
                <h4 className="text-lg font-semibold text-white">Peer-to-Peer Exchanges</h4>
              </div>
              <div className="p-4">
                <p className="mb-3 text-white">
                  P2P platforms connect buyers and sellers directly, allowing them to trade using various payment methods.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex">
                    <div className="w-24 font-medium text-amber-300">Pros:</div>
                    <div className="text-white">More privacy options, diverse payment methods, ability to negotiate price</div>
                  </div>
                  <div className="flex">
                    <div className="w-24 font-medium text-amber-300">Cons:</div>
                    <div className="text-white">Can be more complex for beginners, may require more time to complete trades</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="border-2 border-amber-400 rounded-lg overflow-hidden bg-black"
            >
              <div className="bg-amber-500/80 p-3">
                <h4 className="text-lg font-semibold text-white">Earning Bitcoin</h4>
              </div>
              <div className="p-4">
                <p className="mb-3 text-white">
                  Instead of buying bitcoin, you can earn it by providing goods or services in exchange for bitcoin payment.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex">
                    <div className="w-24 font-medium text-amber-300">Pros:</div>
                    <div className="text-white">No need to exchange fiat currency, often lower fees, builds the Bitcoin economy</div>
                  </div>
                  <div className="flex">
                    <div className="w-24 font-medium text-amber-300">Cons:</div>
                    <div className="text-white">Might be challenging to find opportunities depending on your location and skills</div>
                  </div>
                  <div className="flex pt-1">
                    <div className="w-24 font-medium text-amber-300">Examples:</div>
                    <div className="text-white">Freelance work, selling products, creating content, participating in Bitcoin-related programs</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="bg-black p-5 rounded-lg my-6 border-2 border-amber-400">
            <h4 className="text-amber-300 font-semibold mb-3">Start Small and Learn</h4>
            <p className="text-white">
              When first getting into Bitcoin, it's wise to start with a small amount that you can afford to lose while you're learning. The experience of buying, transferring, and securing even a small amount of bitcoin will teach you valuable lessons about how the system works.
            </p>
          </div>
          
          <div className="p-5 rounded-md bg-gradient-to-br from-orange-900/30 to-black border-l-4 border-orange-400 my-6">
            <div className="flex items-center mb-2">
              <Bitcoin className="h-5 w-5 mr-2 text-orange-400" />
              <h5 className="font-semibold text-orange-300">Next Steps</h5>
            </div>
            <p className="text-white">
            Remember that while buying bitcoin is important, understanding how to securely store it is equally crucial. In the next module, we'll explore Bitcoin wallets and security best practices to help you protect your investment.
          </p>
          </div>
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
            Test your understanding of Bitcoin's fundamentals with this short quiz.
          </p>
          
          <div className="space-y-6 mb-8">
            <div className="bg-black border-2 border-amber-400 rounded-lg p-5">
              <h4 className="text-amber-300 font-medium mb-3">1. What problem did Satoshi Nakamoto solve with Bitcoin?</h4>
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
                  <span className="text-white">The problem of excessive transaction fees in online payments</span>
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
                  <span className="text-white">The double-spending problem without requiring a trusted third party</span>
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
                  <span className="text-white">The inability to create digital scarcity in video games</span>
                </div>
              </div>
              
              {showResults && (
                <div className="mt-4">
                  {selectedAnswers[1] === correctAnswers[1] ? (
                    <p className="text-green-500 font-medium">Correct! Satoshi's invention solved the double-spending problem for digital money without requiring a trusted third party.</p>
                  ) : (
                    <p className="text-red-500 font-medium">Incorrect. Satoshi's breakthrough was solving the double-spending problem for digital money without requiring a trusted third party.</p>
                  )}
                </div>
              )}
            </div>
            
            <div className="bg-black border-2 border-amber-400 rounded-lg p-5">
              <h4 className="text-amber-300 font-medium mb-3">2. What does a Bitcoin full node do?</h4>
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
                  <span className="text-white">Only validates transactions and adds them to blocks</span>
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
                  <span className="text-white">Independently validates the entire blockchain and all rules</span>
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
                  <span className="text-white">Simply relays transactions to miners for processing</span>
                </div>
              </div>
              
              {showResults && (
                <div className="mt-4">
                  {selectedAnswers[2] === correctAnswers[2] ? (
                    <p className="text-green-500 font-medium">Correct! Full nodes independently validate that all transactions and blocks follow Bitcoin's consensus rules.</p>
                  ) : (
                    <p className="text-red-500 font-medium">Incorrect. Full nodes independently validate the entire blockchain and all consensus rules without trusting any other entities.</p>
                  )}
                </div>
              )}
            </div>
            
            <div className="bg-black border-2 border-amber-400 rounded-lg p-5">
              <h4 className="text-amber-300 font-medium mb-3">3. What primarily secures the Bitcoin network?</h4>
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
                  <span className="text-white">A trusted community of developers</span>
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
                  <span className="text-white">Advanced cryptography combined with decentralized consensus</span>
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
                  <span className="text-white">Government regulations and banking partnerships</span>
                </div>
              </div>
              
              {showResults && (
                <div className="mt-4">
                  {selectedAnswers[3] === correctAnswers[3] ? (
                    <p className="text-green-500 font-medium">Correct! Bitcoin security comes from combining cryptography with a decentralized network that reaches consensus.</p>
                  ) : (
                    <p className="text-red-500 font-medium">Incorrect. Bitcoin security comes from cryptography combined with a decentralized consensus mechanism, not from trusted entities.</p>
                  )}
                </div>
              )}
            </div>
            
            <div className="bg-black border-2 border-amber-400 rounded-lg p-5">
              <h4 className="text-amber-300 font-medium mb-3">4. What is a Bitcoin wallet?</h4>
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
                  <span className="text-white">A physical device that stores bitcoins</span>
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
                  <span className="text-white">A digital bank account managed by Bitcoin, Inc.</span>
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
                  <span className="text-white">Software that manages your private keys and interfaces with the blockchain</span>
                </div>
              </div>
              
              {showResults && (
                <div className="mt-4">
                  {selectedAnswers[4] === correctAnswers[4] ? (
                    <p className="text-green-500 font-medium">Correct! A wallet manages your private keys, allowing you to sign transactions and interact with the Bitcoin network.</p>
                  ) : (
                    <p className="text-red-500 font-medium">Incorrect. A Bitcoin wallet is software that manages your private keys and allows you to interact with the Bitcoin network.</p>
                  )}
                </div>
              )}
            </div>
            
            <div className="bg-black border-2 border-amber-400 rounded-lg p-5">
              <h4 className="text-amber-300 font-medium mb-3">5. What happens when someone tries to change a past Bitcoin transaction?</h4>
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
                  <span className="text-white">They must rebuild the entire blockchain from that point, requiring enormous computing power</span>
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
                  <span className="text-white">The transaction can be reversed by contacting Bitcoin customer support</span>
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
                  <span className="text-white">A majority vote of miners can approve the change</span>
                </div>
              </div>
              
              {showResults && (
                <div className="mt-4">
                  {selectedAnswers[5] === correctAnswers[5] ? (
                    <p className="text-green-500 font-medium">Correct! Changing past transactions requires rebuilding the entire blockchain from that point, which is practically impossible due to the enormous computing power required.</p>
                  ) : (
                    <p className="text-red-500 font-medium">Incorrect. Changing past transactions requires rebuilding the entire chain from that point, which is practically impossible due to the enormous computing power required.</p>
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
                  {score === 5 ? 'Perfect! You\'ve mastered Bitcoin\'s fundamentals.' : 
                   score >= 4 ? 'Excellent! You have a strong understanding of Bitcoin\'s fundamentals.' :
                   score >= 3 ? 'Good job! You understand the core concepts, but review the material for more clarity.' :
                   'Review the module material and try again to improve your understanding of Bitcoin\'s fundamentals.'}
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
              In this module, we've explored Bitcoin's fundamental technology and how it works as a decentralized financial system.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-amber-300 flex">
                  <span className="bg-amber-500 text-black rounded-full h-7 w-7 inline-flex items-center justify-center mr-2">1</span>
                  Bitcoin's Revolutionary Design
                </h4>
                <p className="text-white mt-2 ml-9">
                  Bitcoin solved the double-spending problem for digital money without requiring trusted third parties, creating the first truly decentralized digital currency through a combination of cryptography, game theory, and distributed computing.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-amber-300 flex">
                  <span className="bg-amber-500 text-black rounded-full h-7 w-7 inline-flex items-center justify-center mr-2">2</span>
                  The Blockchain Structure
                </h4>
                <p className="text-white mt-2 ml-9">
                  Bitcoin's blockchain is a chronological, append-only database that records all transactions in a chain of blocks. Each block references the previous one, creating an immutable record that prevents double-spending and ensures transaction finality.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-amber-300 flex">
                  <span className="bg-amber-500 text-black rounded-full h-7 w-7 inline-flex items-center justify-center mr-2">3</span>
                  Decentralized Network Participants
                </h4>
                <p className="text-white mt-2 ml-9">
                  The Bitcoin network consists of miners who secure the network by creating blocks, full nodes that validate transactions and enforce rules, and users who transact on the network. This structure distributes power and eliminates single points of failure.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-amber-300 flex">
                  <span className="bg-amber-500 text-black rounded-full h-7 w-7 inline-flex items-center justify-center mr-2">4</span>
                  Cryptographic Security
                </h4>
                <p className="text-white mt-2 ml-9">
                  Bitcoin relies on cryptographic keys to prove ownership and authorize transactions. Private keys generate digital signatures that verify the owner's permission to spend bitcoins, while public keys create addresses for receiving transactions.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-amber-300 flex">
                  <span className="bg-amber-500 text-black rounded-full h-7 w-7 inline-flex items-center justify-center mr-2">5</span>
                  Bitcoin's Value Proposition
                </h4>
                <p className="text-white mt-2 ml-9">
                  Bitcoin offers unprecedented sovereignty over personal wealth, censorship resistance, programmable money capabilities, and a truly scarce digital asset with a fixed supply of 21 million coins—features impossible in traditional financial systems.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg border border-amber-500/40">
            <h3 className="text-lg font-semibold text-amber-300 mb-3">Looking Ahead</h3>
            <p className="text-white">
              Now that you understand Bitcoin's fundamental design and key components, you're ready to explore more advanced topics in the intermediate course, including Bitcoin's consensus mechanism, mining process, monetary policy, and network security features.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <ModuleContent
      title="Bitcoin Fundamentals"
      courseTitle="Beginner's Course"
      courseSlug="beginner"
      moduleNumber={3}
      totalModules={5}
      objectives={[
        "Learn about the origins of Bitcoin and its creator",
        "Understand the basic mechanics of how Bitcoin works",
        "Identify the key participants in the Bitcoin network",
        "Recognize different Bitcoin denominations",
        "Explore ways to acquire your first bitcoin"
      ]}
      keypoints={[
        "Bitcoin's creation by Satoshi Nakamoto in 2009",
        "Blockchain, mining, and the transaction process",
        "Decentralized network of full nodes, miners, and users",
        "Bitcoin units from satoshis to full bitcoins",
        "Methods to purchase or earn bitcoin"
      ]}
      sections={sections}
      previous={{
        title: "Store of Value Explained",
        path: "/learn/beginner/store-of-value"
      }}
      next={{
        title: "Bitcoin Wallets & Security",
        path: "/learn/beginner/bitcoin-wallets"
      }}
    />
  );
};

export default BitcoinFundamentals; 