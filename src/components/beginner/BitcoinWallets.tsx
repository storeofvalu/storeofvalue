import React from 'react';
import ModuleContent, { ModuleSection } from '../ModuleContent';
import { Link } from 'react-router-dom';
import { Wallet, Shield, Lock, Server, Key, CheckSquare } from 'lucide-react';

const BitcoinWallets = () => {
  // Define the module sections
  const sections: ModuleSection[] = [
    {
      title: "Introduction to Bitcoin Wallets",
      type: "text",
      estimatedMinutes: 5,
      content: (
        <div>
          <p className="text-white mb-4">
            Bitcoin wallets are essential tools that allow you to interact with the Bitcoin network. 
            Despite the name, they don't actually "store" your bitcoin - all bitcoin exists on the blockchain. 
            Instead, wallets store the cryptographic keys that give you access to your bitcoin.
          </p>
          
          <div className="bg-black p-6 rounded-lg border-2 border-amber-400 mb-6">
            <h3 className="text-xl font-bold mb-3 text-amber-300">What Bitcoin Wallets Actually Do</h3>
            <p className="text-white">
              A Bitcoin wallet manages your private keys - the secret codes that allow you to spend your bitcoin. 
              These private keys correspond to public addresses where your bitcoin is assigned on the blockchain.
            </p>
          </div>
          
          <p className="text-white">
            Your wallet software allows you to:
          </p>
          
          <ul className="list-disc pl-6 mb-4 space-y-2 text-white">
            <li>Generate new Bitcoin addresses to receive funds</li>
            <li>Sign transactions to send bitcoin to others</li>
            <li>Monitor your balance and transaction history</li>
            <li>Connect to the Bitcoin network (directly or via third parties)</li>
          </ul>
        </div>
      )
    },
    {
      title: "Types of Bitcoin Wallets",
      type: "text",
      estimatedMinutes: 8,
      content: (
        <div>
          <p className="text-white mb-4">
            There are several types of Bitcoin wallets, each with different security and convenience tradeoffs.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-black p-4 rounded-lg border border-amber-400">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-amber-500/80 rounded-full mr-3 text-black">
                  <Server className="h-5 w-5" />
                </div>
                <h4 className="font-semibold text-lg text-amber-300">Hot Wallets</h4>
              </div>
              <p className="text-white text-sm">
                Connected to the internet, convenient but less secure. Includes mobile, desktop, and web wallets.
              </p>
            </div>
            
            <div className="bg-black p-4 rounded-lg border border-amber-400">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-amber-500/80 rounded-full mr-3 text-black">
                  <Shield className="h-5 w-5" />
                </div>
                <h4 className="font-semibold text-lg text-amber-300">Cold Wallets</h4>
              </div>
              <p className="text-white text-sm">
                Kept offline for maximum security, used for long-term storage. Includes hardware wallets and paper wallets.
              </p>
            </div>
          </div>
          
          <p className="text-white italic">
            Best practice: Use hot wallets for small amounts and day-to-day transactions, cold wallets for larger holdings.
          </p>
        </div>
      )
    },
    {
      title: "Security Best Practices",
      type: "text",
      estimatedMinutes: 7,
      content: (
        <div>
          <p className="text-white mb-4">
            Securing your Bitcoin is essential. Here are key security practices to follow:
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-start">
              <div className="p-2 bg-amber-500/80 rounded-full mr-3 text-black mt-1">
                <Key className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-semibold text-amber-300 mb-1">Backup Your Seed Phrase</h4>
                <p className="text-white text-sm">
                  Most wallets provide a 12-24 word recovery phrase. Write it down on paper and store it securely. 
                  Never store it digitally or take photos of it.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="p-2 bg-amber-500/80 rounded-full mr-3 text-black mt-1">
                <Lock className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-semibold text-amber-300 mb-1">Use Strong Passwords</h4>
                <p className="text-white text-sm">
                  Secure your wallet with strong, unique passwords. Consider using a password manager.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="p-2 bg-amber-500/80 rounded-full mr-3 text-black mt-1">
                <CheckSquare className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-semibold text-amber-300 mb-1">Verify Addresses Carefully</h4>
                <p className="text-white text-sm">
                  Always double-check addresses when sending bitcoin. Consider starting with small test transactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <ModuleContent
      title="Bitcoin Wallets & Security"
      courseTitle="Beginner's Course"
      courseSlug="beginner"
      moduleNumber={4}
      totalModules={5}
      objectives={[
        "Understand what Bitcoin wallets actually store and how they work",
        "Compare different wallet types and their security tradeoffs",
        "Learn essential security practices for protecting your bitcoin",
        "Know how to safely back up your wallet"
      ]}
      keypoints={[
        "Bitcoin wallets store private keys, not actual bitcoin",
        "Hot wallets vs. cold wallets security comparison",
        "Importance of seed phrase backups",
        "Essential security best practices"
      ]}
      sections={sections}
      previous={{
        title: "Bitcoin Fundamentals",
        path: "/learn/beginner/bitcoin-fundamentals"
      }}
      next={{
        title: "Buying & Using Bitcoin",
        path: "/learn/beginner"
      }}
    />
  );
};

export default BitcoinWallets; 