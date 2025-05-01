import React from 'react';
import ModuleContent, { ModuleSection } from '../ModuleContent';

const BitcoinScripting = () => {
  const [selectedAnswers, setSelectedAnswers] = React.useState<{[key: number]: string}>({});
  const [showResults, setShowResults] = React.useState(false);
  const [score, setScore] = React.useState(0);
  
  const correctAnswers = {
    1: "a", // Stack-based
    2: "b", // P2SH (Pay to Script Hash)
    3: "c"  // CHECKSIG
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

  const sections: ModuleSection[] = [
    {
      title: "Introduction to Bitcoin Script",
      type: "text",
      estimatedMinutes: 8,
      content: (
        <div>
          <p>
            Bitcoin's scripting language is a crucial yet often overlooked component of its design. This simple but powerful stack-based language defines the conditions under which bitcoin can be spent, enabling much more than simple transfers between addresses.
          </p>
          
          <div className="bg-muted p-4 rounded-md my-6 border-l-4 border-amber-500">
            <h4 className="text-lg font-semibold mb-2">What is Bitcoin Script?</h4>
            <p>
              Bitcoin Script is a simple, stack-based, Forth-like programming language used to specify the spending conditions for bitcoin outputs. It is intentionally limited in capability—it is not Turing-complete—to ensure predictable execution and prevent potential security vulnerabilities.
            </p>
          </div>
          
          <h4 className="font-semibold text-lg mt-6 mb-3">Key Characteristics</h4>
          
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-border rounded-md p-4">
              <h4 className="font-semibold mb-2">Stack-Based Execution</h4>
              <p>
                Script operates on a simple stack data structure. Operations push data onto the stack or pop data to perform operations. A script succeeds if it executes without errors and leaves a non-zero value on top of the stack.
              </p>
            </div>
            
            <div className="border border-border rounded-md p-4">
              <h4 className="font-semibold mb-2">Minimal Instruction Set</h4>
              <p>
                Bitcoin Script has a limited set of operations (opcodes) like arithmetic, stack manipulation, cryptographic operations, and conditional execution—but lacks loops, which makes execution time predictable.
              </p>
            </div>
            
            <div className="border border-border rounded-md p-4">
              <h4 className="font-semibold mb-2">Deterministic</h4>
              <p>
                Given the same input, a script will always produce the same output. This property is essential for network consensus—all nodes must agree on script execution results.
              </p>
            </div>
            
            <div className="border border-border rounded-md p-4">
              <h4 className="font-semibold mb-2">Stateless</h4>
              <p>
                Each script execution is independent and holds no state between executions. Scripts can only access data explicitly provided as input or created during execution.
              </p>
            </div>
          </div>
          
          <h4 className="font-semibold text-lg mt-6 mb-3">How Scripts Work in Bitcoin Transactions</h4>
          
          <p>
            Bitcoin transactions don't simply transfer funds from one address to another—they execute scripts to validate spending conditions:
          </p>
          
          <div className="my-6 space-y-6">
            <div className="border rounded-md overflow-hidden">
              <div className="bg-muted p-3 border-b border-amber-500">
                <h4 className="text-lg font-semibold text-amber-500">Locking Script (scriptPubKey)</h4>
              </div>
              <div className="p-4">
                <p>
                  When bitcoin is sent to someone, the output contains a <strong>locking script</strong> (also called scriptPubKey) that specifies the conditions that must be met to spend those funds in the future. 
                </p>
                <p className="mt-2">
                  This is like placing coins in a lockbox with specific conditions to open it.
                </p>
              </div>
            </div>
            
            <div className="border rounded-md overflow-hidden">
              <div className="bg-muted p-3 border-b border-amber-500">
                <h4 className="text-lg font-semibold text-amber-500">Unlocking Script (scriptSig)</h4>
              </div>
              <div className="p-4">
                <p>
                  When someone wants to spend that bitcoin, they must provide an <strong>unlocking script</strong> (scriptSig) with their transaction input that satisfies the conditions of the locking script.
                </p>
                <p className="mt-2">
                  This is like providing the correct key or combination to open the lockbox.
                </p>
              </div>
            </div>
            
            <div className="border rounded-md overflow-hidden">
              <div className="bg-muted p-3 border-b border-amber-500">
                <h4 className="text-lg font-semibold text-amber-500">Script Validation</h4>
              </div>
              <div className="p-4">
                <p>
                  To validate a transaction, the unlocking script and locking script are concatenated and executed. If the script executes without errors and leaves a non-zero value on the stack, the transaction is valid.
                </p>
              </div>
            </div>
          </div>
          
          <p>
            Bitcoin Script enables programmable money—allowing users to create custom spending conditions beyond simple transfers. In the following sections, we'll explore common script patterns and how they enable advanced Bitcoin functionality.
          </p>
        </div>
      )
    },
    {
      title: "Common Script Types",
      type: "text",
      estimatedMinutes: 10,
      content: (
        <div>
          <p>
            Bitcoin supports various script patterns for different use cases. Understanding these patterns provides insight into Bitcoin's capabilities beyond simple transfers.
          </p>
          
          <h4 className="font-semibold text-lg mt-6 mb-3">P2PK (Pay to Public Key)</h4>
          
          <div className="bg-muted p-4 rounded-md my-6 border-l-4 border-amber-500">
            <h4 className="text-lg font-semibold mb-2 text-amber-500">P2PK Structure</h4>
            <div className="font-mono text-sm mb-3 bg-gray-100 p-2 rounded text-gray-800">
              <div><span className="text-blue-600">// Locking Script</span></div>
              <div>&lt;public key&gt; OP_CHECKSIG</div>
              <div className="mt-2"><span className="text-blue-600">// Unlocking Script</span></div>
              <div>&lt;signature&gt;</div>
            </div>
            <p className="text-white">
              This was the original way to send bitcoin, used by Satoshi in early transactions. It directly specifies a public key in the locking script and requires a valid signature from the corresponding private key to spend the funds.
            </p>
          </div>
          
          <h4 className="font-semibold text-lg mt-6 mb-3">P2PKH (Pay to Public Key Hash)</h4>
          
          <div className="bg-muted p-4 rounded-md my-6 border-l-4 border-amber-500">
            <h4 className="text-lg font-semibold mb-2 text-amber-500">P2PKH Structure</h4>
            <div className="font-mono text-sm mb-3 bg-gray-100 p-2 rounded text-gray-800">
              <div><span className="text-blue-600">// Locking Script</span></div>
              <div>OP_DUP OP_HASH160 &lt;public key hash&gt; OP_EQUALVERIFY OP_CHECKSIG</div>
              <div className="mt-2"><span className="text-blue-600">// Unlocking Script</span></div>
              <div>&lt;signature&gt; &lt;public key&gt;</div>
            </div>
            <p className="text-white">
              P2PKH became the standard transaction type that corresponds to traditional Bitcoin addresses. Instead of containing the full public key, the locking script contains a hash of the public key, which offers better security and shorter scripts.
            </p>
          </div>
          
          <div className="my-6 space-y-6">
            <div className="border rounded-md overflow-hidden">
              <div className="bg-muted p-3 border-b border-amber-500">
                <h4 className="text-lg font-semibold text-amber-500">P2PKH Execution Flow</h4>
              </div>
              <div className="p-4">
                <ol className="list-decimal ml-5 space-y-2">
                  <li>The unlocking script provides a signature and the public key</li>
                  <li>OP_DUP duplicates the public key on the stack</li>
                  <li>OP_HASH160 hashes the duplicated public key</li>
                  <li>The script then pushes the expected public key hash onto the stack</li>
                  <li>OP_EQUALVERIFY verifies that the hash matches the expected value, failing if they don't match</li>
                  <li>OP_CHECKSIG verifies the signature against the provided public key</li>
                </ol>
              </div>
            </div>
          </div>
          
          <h4 className="font-semibold text-lg mt-6 mb-3">P2SH (Pay to Script Hash)</h4>
          
          <div className="bg-muted p-4 rounded-md my-6 border-l-4 border-amber-500">
            <h4 className="text-lg font-semibold mb-2 text-amber-500">P2SH Structure</h4>
            <div className="font-mono text-sm mb-3 bg-gray-100 p-2 rounded text-gray-800">
              <div><span className="text-blue-600">// Locking Script</span></div>
              <div>OP_HASH160 &lt;script hash&gt; OP_EQUAL</div>
              <div className="mt-2"><span className="text-blue-600">// Unlocking Script</span></div>
              <div>&lt;input data&gt; &lt;redeem script&gt;</div>
            </div>
            <p className="text-white">
              P2SH (BIP 16) moved complex script logic from the locking script to the unlocking script, enabling more advanced scripting without increasing transaction fees for the sender. The locking script simply contains a hash of the "redeem script" that defines the actual spending conditions.
            </p>
          </div>
          
          <p>
            P2SH revolutionized Bitcoin's capabilities by enabling more complex scripts to be used without burdening the sender with higher fees. This innovation paved the way for multi-signature wallets, time-locked contracts, and other advanced features.
          </p>
          
          <div className="my-6 space-y-6">
            <div className="border rounded-md overflow-hidden">
              <div className="bg-muted p-3 border-b border-amber-500">
                <h4 className="text-lg font-semibold text-amber-500">P2SH Advantages</h4>
              </div>
              <div className="p-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Complexity shifting:</strong> Moves the cost and complexity burden from the sender to the recipient</li>
                  <li><strong>Standardization:</strong> All P2SH outputs look the same regardless of the underlying script complexity</li>
                  <li><strong>Address format:</strong> P2SH scripts can be encoded as standard Bitcoin addresses (starting with '3')</li>
                  <li><strong>Privacy:</strong> The actual spending conditions aren't revealed until the funds are spent</li>
                </ul>
              </div>
            </div>
          </div>
          
          <h4 className="font-semibold text-lg mt-6 mb-3">P2WPKH and P2WSH (Segregated Witness)</h4>
          
          <p>
            Segregated Witness (SegWit, BIP 141) introduced new script types that separate signature data ("witness") from the transaction data:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-border rounded-md p-4">
              <h4 className="font-semibold mb-2">P2WPKH (Pay to Witness Public Key Hash)</h4>
              <p className="mb-2 text-white">The SegWit version of P2PKH.</p>
              <div className="font-mono text-sm bg-gray-100 p-2 rounded mt-3 text-gray-800">
                <div><span className="text-blue-600">// Locking Script</span></div>
                <div>0 &lt;public key hash&gt;</div>
              </div>
            </div>
            
            <div className="border border-border rounded-md p-4">
              <h4 className="font-semibold mb-2">P2WSH (Pay to Witness Script Hash)</h4>
              <p className="mb-2 text-white">The SegWit version of P2SH.</p>
              <div className="font-mono text-sm bg-gray-100 p-2 rounded mt-3 text-gray-800">
                <div><span className="text-blue-600">// Locking Script</span></div>
                <div>0 &lt;script hash&gt;</div>
              </div>
            </div>
          </div>
          
          <div className="bg-muted p-4 rounded-md my-6 border-l-4 border-amber-500">
            <h4 className="text-lg font-semibold mb-2">SegWit Benefits</h4>
            <ul className="space-y-2 text-white">
              <li><strong>Transaction malleability fix:</strong> By removing signatures from the transaction ID calculation</li>
              <li><strong>Block capacity increase:</strong> Witness data is counted at a discount for block size limits</li>
              <li><strong>Fee efficiency:</strong> Lower fees for SegWit transactions</li>
              <li><strong>Script versioning:</strong> Easier to add new script versions and opcodes in the future</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Bitcoin Smart Contracts",
      type: "text",
      estimatedMinutes: 8,
      content: (
        <div>
          <p>
            The term "smart contract" was coined by Nick Szabo in the 1990s, long before Bitcoin existed. While Bitcoin's scripting capabilities are intentionally limited compared to platforms like Ethereum, Bitcoin can still support various types of smart contracts.
          </p>
          
          <div className="p-4 my-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-md">
            <p className="italic text-gray-800">
              "A Bitcoin smart contract is a specific spending condition encoded in Bitcoin Script that automatically enforces the terms of an agreement between parties."
            </p>
          </div>
          
          <h4 className="font-semibold text-lg mt-6 mb-3">1. Multi-Signature Contracts</h4>
          
          <p>
            Multi-signature (multisig) is one of the most common Bitcoin smart contracts. It requires M-of-N signatures to authorize a transaction, where M ≤ N.
          </p>
          
          <div className="bg-muted p-4 rounded-md my-6 border-l-4 border-amber-500">
            <h4 className="text-lg font-semibold mb-2 text-amber-500">M-of-N Multisig</h4>
            <div className="font-mono text-sm mb-3 bg-gray-100 p-2 rounded">
              <div className="text-gray-800">OP_M &lt;public key 1&gt; &lt;public key 2&gt; ... &lt;public key N&gt; OP_N OP_CHECKMULTISIG</div>
            </div>
            <p className="text-white">
              This pattern requires M signatures from a set of N public keys to spend the funds. For example, a 2-of-3 multisig requires any 2 signatures from a set of 3 defined public keys.
            </p>
          </div>
          
          <p>
            Use cases for multisig include:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 my-3">
            <li><strong>Corporate treasuries:</strong> Requiring multiple executives to approve expenditures</li>
            <li><strong>Escrow services:</strong> Where 2-of-3 multisig allows a third party to arbitrate disputes</li>
            <li><strong>Shared custody:</strong> Distributing the risk of private key compromise</li>
          </ul>
          
          <h4 className="font-semibold text-lg mt-6 mb-3">2. Time-Locked Contracts</h4>
          
          <p>
            Bitcoin offers two types of time-lock mechanisms that prevent spending funds until a certain time:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border rounded-md p-4">
              <h5 className="font-semibold mb-2">CLTV (CheckLockTimeVerify)</h5>
              <p className="text-white">Prevents spending outputs until a specified block height or timestamp is reached.</p>
              <div className="bg-gray-100 text-gray-800 p-2 mt-2 rounded-md font-mono text-xs border border-gray-200">
                &lt;locktime&gt; OP_CHECKLOCKTIMEVERIFY OP_DROP
              </div>
            </div>
            
            <div className="border rounded-md p-4">
              <h5 className="font-semibold mb-2">CSV (CheckSequenceVerify)</h5>
              <p className="text-white">Specifies a relative timelock—funds can only be spent after a certain number of blocks have passed since the output was mined.</p>
              <div className="bg-gray-100 text-gray-800 p-2 mt-2 rounded-md font-mono text-xs border border-gray-200">
                &lt;relative_locktime&gt; OP_CHECKSEQUENCEVERIFY OP_DROP
              </div>
            </div>
          </div>
          
          <p>
            Time-locks enable contracts such as:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 my-3">
            <li><strong>Vesting schemes:</strong> Gradually releasing funds over time</li>
            <li><strong>Inheritance planning:</strong> Allowing heirs to access funds after a certain period of inactivity</li>
            <li><strong>Payment channels:</strong> Enabling off-chain transactions with on-chain settlement</li>
          </ul>
          
          <h4 className="font-semibold text-lg mt-6 mb-3">3. Hash Time-Locked Contracts (HTLCs)</h4>
          
          <p>
            HTLCs combine hash locks and time locks, allowing payments to be securely routed across multiple participants. They are fundamental to the Lightning Network and atomic swaps.
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md my-4">
            <p className="mb-2 font-medium text-gray-800">A basic HTLC allows funds to be spent if either:</p>
            <ol className="list-decimal pl-5 space-y-1 text-gray-800">
              <li>The recipient can provide a preimage to a hash (hash lock), OR</li>
              <li>The sender can reclaim the funds after a timeout period (time lock)</li>
            </ol>
          </div>
          
          <p>
            This simple but powerful construct enables trustless conditional payments and cross-chain atomic swaps between different blockchains.
          </p>
        </div>
      )
    },
    {
      title: "Advanced Applications",
      type: "text",
      estimatedMinutes: 7,
      content: (
        <div>
          <p>
            Despite Bitcoin's intentionally limited scripting language, developers have found creative ways to build sophisticated applications on top of it. Here are some advanced applications enabled by Bitcoin Script:
          </p>
          
          <h4 className="font-semibold text-lg mt-6 mb-3">1. Lightning Network</h4>
          
          <div className="p-4 my-4 bg-blue-50 rounded-md border border-blue-200">
            <p className="text-gray-800">
              The Lightning Network is a layer-2 scaling solution that enables instant, high-volume micropayments without committing all transactions to the blockchain. It uses a network of bidirectional payment channels secured by Bitcoin smart contracts.
            </p>
          </div>
          
          <p>
            Key components that make Lightning possible:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 my-3">
            <li><strong>Hash Time-Locked Contracts (HTLCs):</strong> Enable trustless routing of payments through intermediaries</li>
            <li><strong>Multisignature outputs:</strong> Secure the payment channels</li>
            <li><strong>Timelocks:</strong> Ensure safe channel closure even if one party becomes unresponsive</li>
            <li><strong>Revocation keys:</strong> Prevent publication of outdated channel states</li>
          </ul>
          
          <h4 className="font-semibold text-lg mt-6 mb-3">2. Discreet Log Contracts (DLCs)</h4>
          
          <p>
            DLCs are a type of smart contract that allows parties to create a financial derivative (like a bet or option contract) without revealing its existence on the blockchain.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div>
              <h5 className="font-medium mb-2">Key features of DLCs:</h5>
              <ul className="list-disc pl-5 space-y-1 text-white">
                <li>Privacy-preserving financial contracts</li>
                <li>Use trusted oracles for settlement</li>
                <li>No on-chain footprint beyond normal transactions</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium mb-2">Examples of DLC applications:</h5>
              <ul className="list-disc pl-5 space-y-1 text-white">
                <li>Price prediction markets</li>
                <li>Weather insurance contracts</li>
                <li>Peer-to-peer derivatives</li>
              </ul>
            </div>
          </div>
          
          <h4 className="font-semibold text-lg mt-6 mb-3">3. Taproot and Beyond</h4>
          
          <p>
            The Taproot upgrade (activated in 2021) significantly improved Bitcoin's smart contract capabilities through several mechanisms:
          </p>
          
          <div className="border rounded-md my-6 overflow-hidden">
            <div className="bg-amber-50 p-3 border-b">
              <h5 className="font-semibold text-gray-800">Schnorr Signatures</h5>
            </div>
            <div className="p-4 bg-white">
              <p className="text-gray-800">These replace ECDSA signatures with a more efficient signature scheme that enables:</p>
              <ul className="list-disc pl-6 space-y-1 my-2 text-gray-800">
                <li>Key and signature aggregation for multisig wallets</li>
                <li>Signature schemes that look identical regardless of complexity</li>
                <li>Improved efficiency and lower fees</li>
              </ul>
            </div>
          </div>
          
          <div className="border rounded-md my-6 overflow-hidden">
            <div className="bg-amber-50 p-3 border-b">
              <h5 className="font-semibold text-gray-800">MAST (Merkelized Abstract Syntax Trees)</h5>
            </div>
            <div className="p-4 bg-white">
              <p className="text-gray-800">MAST allows complex spending conditions to be committed to in a Merkle tree structure, where:</p>
              <ul className="list-disc pl-6 space-y-1 my-2 text-gray-800">
                <li>Only the executed spending path needs to be revealed</li>
                <li>Unused contract branches remain private</li>
                <li>Complex contracts become more efficient and private</li>
              </ul>
            </div>
          </div>
          
          <p>
            These enhancements have expanded Bitcoin's ability to support more complex smart contracts while improving privacy and efficiency, showing that Bitcoin continues to evolve its smart contract capabilities while maintaining its security-focused approach.
          </p>
        </div>
      )
    },
    {
      title: "Multi-Signature Scripts",
      type: "text",
      estimatedMinutes: 7,
      content: (
        <div>
          <p>
            Multi-signature (multisig) scripts are one of the most powerful applications of Bitcoin Script, enabling shared control of funds by requiring signatures from multiple keys to authorize a transaction.
          </p>
          
          <h4 className="font-semibold text-lg mt-6 mb-3">Basic Multisig Structure</h4>
          
          <div className="bg-muted p-4 rounded-md my-6 border-l-4 border-amber-500">
            <h4 className="text-lg font-semibold mb-2">M-of-N Multisig</h4>
            <div className="font-mono text-sm mb-3 bg-gray-100 p-2 rounded">
              <div>OP_M &lt;public key 1&gt; &lt;public key 2&gt; ... &lt;public key N&gt; OP_N OP_CHECKMULTISIG</div>
            </div>
            <p>
              This pattern requires M signatures from a set of N public keys to spend the funds. For example, a 2-of-3 multisig requires any 2 signatures from a set of 3 defined public keys.
            </p>
          </div>
          
          <div className="my-6 space-y-6">
            <div className="border rounded-md overflow-hidden">
              <div className="bg-muted p-3 border-b border-amber-500">
                <h4 className="text-lg font-semibold text-amber-500">Common Multisig Applications</h4>
              </div>
              <div className="p-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Security enhancement:</strong> Requiring multiple devices or locations to authorize high-value transactions (2-of-2 or 2-of-3)
                  </li>
                  <li>
                    <strong>Shared accounts:</strong> Joint business accounts requiring approval from multiple partners
                  </li>
                  <li>
                    <strong>Escrow services:</strong> 2-of-3 arrangements with buyer, seller, and trusted mediator
                  </li>
                  <li>
                    <strong>Corporate treasury:</strong> Requiring multiple executives to authorize fund movements
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <h4 className="font-semibold text-lg mt-6 mb-3">The Off-by-One Bug and Dummy Value</h4>
          
          <p>
            Bitcoin's multisig implementation contains a well-known quirk: OP_CHECKMULTISIG pops one extra item from the stack, a historical bug that has been encoded into the consensus rules.
          </p>
          
          <div className="bg-muted p-4 rounded-md my-6 border-l-4 border-amber-500">
            <h4 className="text-lg font-semibold mb-2 text-amber-500">Multisig with Dummy Value</h4>
            <div className="font-mono text-sm mb-3 bg-gray-100 p-2 rounded text-gray-800">
              <div><span className="text-blue-600">// Unlocking Script for 2-of-3 multisig</span></div>
              <div>OP_0 &lt;signature 1&gt; &lt;signature 2&gt;</div>
            </div>
            <p className="text-white">
              The unlocking script must include an extra value (conventionally OP_0) to account for this bug. This dummy value is popped from the stack and ignored by OP_CHECKMULTISIG.
            </p>
          </div>
          
          <h4 className="font-semibold text-lg mt-6 mb-3">Evolution of Multisig</h4>
          
          <div className="my-6 space-y-6">
            <div className="border rounded-md overflow-hidden">
              <div className="bg-muted p-3 border-b border-amber-500">
                <h4 className="text-lg font-semibold text-amber-500">Bare Multisig vs. P2SH Multisig</h4>
              </div>
              <div className="p-4">
                <p className="text-white">
                  Early multisig implementations used "bare" multisig scripts directly as locking scripts, which had several limitations:
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2 text-white">
                  <li>Required the sender to pay higher fees due to larger script size</li>
                  <li>No standardized address format for multisig scripts</li>
                  <li>Exposed the full script details to the blockchain</li>
                </ul>
                <p className="mt-3 text-white">
                  P2SH largely solved these issues by encoding the multisig script as a redeem script, hiding its details until spending and shifting fees to the receiver.
                </p>
              </div>
            </div>
            
            <div className="border rounded-md overflow-hidden">
              <div className="bg-muted p-3 border-b border-amber-500">
                <h4 className="text-lg font-semibold text-amber-500">Taproot Improvements</h4>
              </div>
              <div className="p-4">
                <p className="text-white">
                  The Taproot upgrade (2021) further improved multisig with:
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2 text-white">
                  <li>Schnorr signatures allowing key and signature aggregation</li>
                  <li>MuSig schemes enabling true multisig that looks like a single signature on-chain</li>
                  <li>Improved privacy as multisig transactions can look identical to single-sig</li>
                  <li>Reduced fees through more efficient script execution</li>
                </ul>
              </div>
            </div>
          </div>
          
          <p>
            Multisig scripts demonstrate the power of Bitcoin's programmable money capabilities, enabling complex ownership arrangements without requiring trust in third parties. This technology has been instrumental in securing large amounts of bitcoin and enabling collaborative custody solutions.
          </p>
        </div>
      )
    },
    {
      title: "Timelock Scripts",
      type: "text",
      estimatedMinutes: 6,
      content: (
        <div>
          <p>
            Timelocks are Bitcoin script mechanisms that restrict when bitcoins can be spent. They enable fascinating use cases by adding the dimension of time to Bitcoin's programmable money capabilities.
          </p>
          
          <h4 className="font-semibold text-lg mt-6 mb-3">Types of Timelocks</h4>
          
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-border rounded-md p-4">
              <h4 className="font-semibold mb-2">Transaction-Level Timelocks</h4>
              <p className="mb-2 text-white"><strong>nLockTime:</strong> Specifies the earliest time a transaction can be added to the blockchain.</p>
              <p className="text-white">If the specified time has not yet arrived, the transaction is not valid and will be rejected by the network.</p>
            </div>
            
            <div className="border border-border rounded-md p-4">
              <h4 className="font-semibold mb-2">Script-Level Timelocks</h4>
              <p className="mb-2 text-white">These are implemented within Bitcoin Script and create outputs that cannot be spent until a certain time has passed.</p>
              <p className="text-white">Unlike nLockTime, these allow funds to be locked in the blockchain while setting conditions for when they can be spent.</p>
            </div>
          </div>
          
          <h4 className="font-semibold text-lg mt-6 mb-3">Script-Level Timelock Opcodes</h4>
          
          <div className="my-6 space-y-6">
            <div className="border rounded-md overflow-hidden">
              <div className="bg-muted p-3 border-b border-amber-500">
                <h4 className="text-lg font-semibold text-amber-500">CHECKLOCKTIMEVERIFY (CLTV)</h4>
              </div>
              <div className="p-4">
                <p className="text-white">
                  Introduced in BIP 65, CLTV (OP_CHECKLOCKTIMEVERIFY) allows scripts to check that the spending transaction's nLockTime field is greater than or equal to a specified value:
                </p>
                <div className="font-mono text-sm mt-3 bg-gray-100 p-2 rounded text-gray-800">
                  <div>&lt;expiry time&gt; OP_CHECKLOCKTIMEVERIFY OP_DROP</div>
                </div>
                <p className="mt-3 text-white">
                  The transaction can only be added to the blockchain after the specified time has passed. If the time hasn't arrived, validation will fail.
                </p>
              </div>
            </div>
            
            <div className="border rounded-md overflow-hidden">
              <div className="bg-muted p-3 border-b border-amber-500">
                <h4 className="text-lg font-semibold text-amber-500">CHECKSEQUENCEVERIFY (CSV)</h4>
              </div>
              <div className="p-4">
                <p className="text-white">
                  Introduced in BIP 112, CSV (OP_CHECKSEQUENCEVERIFY) is a relative timelock that enforces a minimum time between when an output is created and when it can be spent:
                </p>
                <div className="font-mono text-sm mt-3 bg-gray-100 p-2 rounded text-gray-800">
                  <div>&lt;relative time&gt; OP_CHECKSEQUENCEVERIFY OP_DROP</div>
                </div>
                <p className="mt-3 text-white">
                  This enables time constraints relative to when the UTXO was created, rather than absolute block height or time.
                </p>
              </div>
            </div>
          </div>
          
          <h4 className="font-semibold text-lg mt-6 mb-3">Common Timelock Applications</h4>
          
          <div className="bg-muted p-4 rounded-md my-6 border-l-4 border-amber-500">
            <h4 className="text-lg font-semibold mb-2 text-amber-500">Use Cases for Timelocks</h4>
            <ul className="space-y-2 text-white">
              <li><strong>Inheritance planning:</strong> Funds that become available to heirs after a certain date if the primary key doesn't move them</li>
              <li><strong>Vesting schemes:</strong> Employee compensation that unlocks gradually over time</li>
              <li><strong>Time-based security:</strong> Cold storage with time-delayed recovery paths</li>
              <li><strong>Payment channels:</strong> The foundation of Lightning Network, enabling funds to be locked for a time period while channels operate</li>
              <li><strong>Escrow with timeout:</strong> Automatic refunds if a transaction isn't completed within a specific timeframe</li>
            </ul>
          </div>
          
          <p>
            Timelocks significantly expand Bitcoin's scripting capabilities by adding temporal logic to transactions. Combined with other script elements, they enable sophisticated contract arrangements with minimal trust requirements.
          </p>
        </div>
      )
    },
    {
      title: "Advanced Script Patterns",
      type: "text",
      estimatedMinutes: 9,
      content: (
        <div>
          <p>
            Beyond basic payments, multisig, and timelocks, Bitcoin Script enables a variety of advanced patterns that showcase its flexibility despite its intentional limitations.
          </p>
          
          <h4 className="font-semibold text-lg mt-6 mb-3">HTLC (Hash Time-Locked Contracts)</h4>
          
          <div className="bg-muted p-4 rounded-md my-6 border-l-4 border-amber-500">
            <h4 className="text-lg font-semibold mb-2 text-amber-500">HTLC Structure</h4>
            <div className="font-mono text-sm mb-3 bg-gray-100 p-2 rounded text-gray-800">
              <div>OP_IF</div>
              <div>  OP_HASH160 &lt;hash of secret&gt; OP_EQUALVERIFY</div>
              <div>  &lt;recipient public key&gt;</div>
              <div>OP_ELSE</div>
              <div>  &lt;timeout&gt; OP_CHECKLOCKTIMEVERIFY OP_DROP</div>
              <div>  &lt;sender public key&gt;</div>
              <div>OP_ENDIF</div>
              <div>OP_CHECKSIG</div>
            </div>
            <p className="text-white">
              An HTLC combines hash locks and time locks to create a conditional payment that can either be claimed by the recipient with a secret value (preimage) or refunded to the sender after a timeout.
            </p>
          </div>
          
          <div className="my-6 space-y-6">
            <div className="border rounded-md overflow-hidden">
              <div className="bg-muted p-3 border-b border-amber-500">
                <h4 className="text-lg font-semibold text-amber-500">HTLC Applications</h4>
              </div>
              <div className="p-4">
                <ul className="list-disc pl-6 space-y-2 text-white">
                  <li>
                    <strong>Atomic swaps:</strong> Cross-chain trading between different cryptocurrencies without trusted intermediaries
                  </li>
                  <li>
                    <strong>Lightning Network:</strong> The foundation for Bitcoin's layer-2 scaling solution, enabling instant, low-fee payments
                  </li>
                  <li>
                    <strong>Trustless payment routing:</strong> Allowing payments to route through untrusted intermediaries
                  </li>
                  <li>
                    <strong>Conditional payments:</strong> "Pay for knowledge" - only paying when specific information is revealed
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <h4 className="font-semibold text-lg mt-6 mb-3">Taproot and MAST</h4>
          
          <p>
            The Taproot upgrade (activated in November 2021) introduced several significant improvements to Bitcoin's scripting capabilities:
          </p>
          
          <div className="my-6 space-y-6">
            <div className="border rounded-md overflow-hidden">
              <div className="bg-muted p-3 border-b border-amber-500">
                <h4 className="text-lg font-semibold text-amber-500">MAST (Merkelized Abstract Syntax Trees)</h4>
              </div>
              <div className="p-4">
                <p>
                  MAST allows complex spending conditions to be organized in a tree structure, where only the executed condition needs to be revealed when spending. This provides:
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Improved privacy: unused script paths remain hidden</li>
                  <li>Better efficiency: only the executed condition consumes block space</li>
                  <li>More complex script conditions without proportional cost increases</li>
                </ul>
              </div>
            </div>
            
            <div className="border rounded-md overflow-hidden">
              <div className="bg-muted p-3 border-b border-amber-500">
                <h4 className="text-lg font-semibold text-amber-500">Schnorr Signatures</h4>
              </div>
              <div className="p-4">
                <p>
                  Taproot introduced Schnorr signatures (BIP 340) to Bitcoin, enabling:
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Key and signature aggregation for multisig transactions</li>
                  <li>Improved verification efficiency</li>
                  <li>Linearity properties that enable more complex protocols</li>
                  <li>Better privacy by making complex transactions look like simple ones</li>
                </ul>
              </div>
            </div>
            
            <div className="border rounded-md overflow-hidden">
              <div className="bg-muted p-3 border-b border-amber-500">
                <h4 className="text-lg font-semibold text-amber-500">Tapscript</h4>
              </div>
              <div className="p-4">
                <p>
                  Tapscript is an updated version of Bitcoin Script that works with Taproot outputs, featuring:
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Removal of some script limitations and bugs</li>
                  <li>New opcodes and capabilities</li>
                  <li>Better future-proofing through versioning</li>
                  <li>Batch verification of signatures for efficiency</li>
                </ul>
              </div>
            </div>
          </div>
          
          <h4 className="font-semibold text-lg mt-6 mb-3">Covenant Patterns</h4>
          
          <p>
            While Bitcoin doesn't natively support "covenants" (restrictions on how outputs can be spent), developers have found clever workarounds for specific use cases:
          </p>
          
          <div className="bg-muted p-4 rounded-md my-6 border-l-4 border-amber-500">
            <h4 className="text-lg font-semibold mb-2 text-amber-500">Covenant-like Constructions</h4>
            <ul className="space-y-2 text-white">
              <li><strong>OP_RETURN commitments:</strong> Committing to specific spending conditions by embedding hashes in OP_RETURN outputs</li>
              <li><strong>Presigned transactions:</strong> Creating and signing transaction chains in advance to enforce a specific sequence of operations</li>
              <li><strong>Recursive covenants:</strong> Using P2SH and transaction introspection tricks to enforce constraints across transaction generations</li>
            </ul>
            <p className="mt-3 text-white">
              True covenant capabilities may be added in future Bitcoin upgrades, which would enable use cases like vault-style storage, congestion-controlled transaction fees, and more sophisticated smart contracts.
            </p>
          </div>
          
          <p>
            These advanced script patterns represent the cutting edge of what's possible with Bitcoin today. While intentionally limited compared to general-purpose smart contract platforms, Bitcoin Script continues to evolve and enable powerful financial applications with minimal trust requirements.
          </p>
        </div>
      )
    },
    {
      title: "Knowledge Check",
      type: "quiz",
      estimatedMinutes: 3,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-2">1. What type of programming language is Bitcoin Script?</h4>
            <div className="space-y-2 mt-3">
              <div className="flex items-center space-x-2">
                <input 
                  type="radio" 
                  id="q1a" 
                  name="q1" 
                  value="a"
                  className="h-4 w-4 border-gray-300 text-amber-500 focus:ring-amber-500" 
                  onChange={(e) => {
                    const newSelections = { ...selectedAnswers };
                    newSelections[1] = e.target.value;
                    setSelectedAnswers(newSelections);
                  }}
                  checked={selectedAnswers[1] === "a"}
                />
                <label htmlFor="q1a">Stack-based</label>
              </div>
              <div className="flex items-center space-x-2">
                <input 
                  type="radio" 
                  id="q1b" 
                  name="q1" 
                  value="b"
                  className="h-4 w-4 border-gray-300 text-amber-500 focus:ring-amber-500" 
                  onChange={(e) => {
                    const newSelections = { ...selectedAnswers };
                    newSelections[1] = e.target.value;
                    setSelectedAnswers(newSelections);
                  }}
                  checked={selectedAnswers[1] === "b"}
                />
                <label htmlFor="q1b">Object-oriented</label>
              </div>
              <div className="flex items-center space-x-2">
                <input 
                  type="radio" 
                  id="q1c" 
                  name="q1" 
                  value="c"
                  className="h-4 w-4 border-gray-300 text-amber-500 focus:ring-amber-500" 
                  onChange={(e) => {
                    const newSelections = { ...selectedAnswers };
                    newSelections[1] = e.target.value;
                    setSelectedAnswers(newSelections);
                  }}
                  checked={selectedAnswers[1] === "c"}
                />
                <label htmlFor="q1c">Functional</label>
              </div>
              <div className="flex items-center space-x-2">
                <input 
                  type="radio" 
                  id="q1d" 
                  name="q1" 
                  value="d"
                  className="h-4 w-4 border-gray-300 text-amber-500 focus:ring-amber-500" 
                  onChange={(e) => {
                    const newSelections = { ...selectedAnswers };
                    newSelections[1] = e.target.value;
                    setSelectedAnswers(newSelections);
                  }}
                  checked={selectedAnswers[1] === "d"}
                />
                <label htmlFor="q1d">Procedural</label>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">2. Which script type allows complex scripts to be hidden from the blockchain until they are executed?</h4>
            <div className="space-y-2 mt-3">
              <div className="flex items-center space-x-2">
                <input 
                  type="radio" 
                  id="q2a" 
                  name="q2" 
                  value="a"
                  className="h-4 w-4 border-gray-300 text-amber-500 focus:ring-amber-500" 
                  onChange={(e) => {
                    const newSelections = { ...selectedAnswers };
                    newSelections[2] = e.target.value;
                    setSelectedAnswers(newSelections);
                  }}
                  checked={selectedAnswers[2] === "a"}
                />
                <label htmlFor="q2a">P2PKH (Pay to Public Key Hash)</label>
              </div>
              <div className="flex items-center space-x-2">
                <input 
                  type="radio" 
                  id="q2b" 
                  name="q2" 
                  value="b"
                  className="h-4 w-4 border-gray-300 text-amber-500 focus:ring-amber-500" 
                  onChange={(e) => {
                    const newSelections = { ...selectedAnswers };
                    newSelections[2] = e.target.value;
                    setSelectedAnswers(newSelections);
                  }}
                  checked={selectedAnswers[2] === "b"}
                />
                <label htmlFor="q2b">P2SH (Pay to Script Hash)</label>
              </div>
              <div className="flex items-center space-x-2">
                <input 
                  type="radio" 
                  id="q2c" 
                  name="q2" 
                  value="c"
                  className="h-4 w-4 border-gray-300 text-amber-500 focus:ring-amber-500" 
                  onChange={(e) => {
                    const newSelections = { ...selectedAnswers };
                    newSelections[2] = e.target.value;
                    setSelectedAnswers(newSelections);
                  }}
                  checked={selectedAnswers[2] === "c"}
                />
                <label htmlFor="q2c">P2PK (Pay to Public Key)</label>
              </div>
              <div className="flex items-center space-x-2">
                <input 
                  type="radio" 
                  id="q2d" 
                  name="q2" 
                  value="d"
                  className="h-4 w-4 border-gray-300 text-amber-500 focus:ring-amber-500" 
                  onChange={(e) => {
                    const newSelections = { ...selectedAnswers };
                    newSelections[2] = e.target.value;
                    setSelectedAnswers(newSelections);
                  }}
                  checked={selectedAnswers[2] === "d"}
                />
                <label htmlFor="q2d">Bare Multisig</label>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">3. Which Bitcoin Script opcode verifies a digital signature against a public key?</h4>
            <div className="space-y-2 mt-3">
              <div className="flex items-center space-x-2">
                <input 
                  type="radio" 
                  id="q3a" 
                  name="q3" 
                  value="a"
                  className="h-4 w-4 border-gray-300 text-amber-500 focus:ring-amber-500" 
                  onChange={(e) => {
                    const newSelections = { ...selectedAnswers };
                    newSelections[3] = e.target.value;
                    setSelectedAnswers(newSelections);
                  }}
                  checked={selectedAnswers[3] === "a"}
                />
                <label htmlFor="q3a">OP_VERIFY</label>
              </div>
              <div className="flex items-center space-x-2">
                <input 
                  type="radio" 
                  id="q3b" 
                  name="q3" 
                  value="b"
                  className="h-4 w-4 border-gray-300 text-amber-500 focus:ring-amber-500" 
                  onChange={(e) => {
                    const newSelections = { ...selectedAnswers };
                    newSelections[3] = e.target.value;
                    setSelectedAnswers(newSelections);
                  }}
                  checked={selectedAnswers[3] === "b"}
                />
                <label htmlFor="q3b">OP_EQUALVERIFY</label>
              </div>
              <div className="flex items-center space-x-2">
                <input 
                  type="radio" 
                  id="q3c" 
                  name="q3" 
                  value="c"
                  className="h-4 w-4 border-gray-300 text-amber-500 focus:ring-amber-500" 
                  onChange={(e) => {
                    const newSelections = { ...selectedAnswers };
                    newSelections[3] = e.target.value;
                    setSelectedAnswers(newSelections);
                  }}
                  checked={selectedAnswers[3] === "c"}
                />
                <label htmlFor="q3c">OP_CHECKSIG</label>
              </div>
              <div className="flex items-center space-x-2">
                <input 
                  type="radio" 
                  id="q3d" 
                  name="q3" 
                  value="d"
                  className="h-4 w-4 border-gray-300 text-amber-500 focus:ring-amber-500" 
                  onChange={(e) => {
                    const newSelections = { ...selectedAnswers };
                    newSelections[3] = e.target.value;
                    setSelectedAnswers(newSelections);
                  }}
                  checked={selectedAnswers[3] === "d"}
                />
                <label htmlFor="q3d">OP_HASH160</label>
              </div>
            </div>
          </div>
          
          <div className="pt-4">
            <button 
              className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors"
              onClick={checkAnswers}
            >
              Check Answers
            </button>
            <div className={`mt-4 p-4 border border-green-200 bg-green-50 rounded-md ${showResults ? 'block' : 'hidden'}`}>
              <h4 className="text-green-700 font-medium mb-2">Your Score: {score}/3</h4>
              <ul className="list-disc pl-5 text-green-600 space-y-1">
                <li>Question 1: Stack-based {correctAnswers[1] === selectedAnswers[1] ? '✓' : '✗'}</li>
                <li>Question 2: P2SH (Pay to Script Hash) {correctAnswers[2] === selectedAnswers[2] ? '✓' : '✗'}</li>
                <li>Question 3: OP_CHECKSIG {correctAnswers[3] === selectedAnswers[3] ? '✓' : '✗'}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <ModuleContent
      title="Bitcoin Scripting"
      courseTitle="Advanced Course"
      courseSlug="advanced"
      moduleNumber={3}
      totalModules={6}
      objectives={[
        "Understand the basics of Bitcoin's scripting language and execution model",
        "Learn the most common Bitcoin script types and their use cases",
        "Explore multi-signature transactions and their applications",
        "Master timelock scripts and advanced script patterns like HTLCs",
        "Understand Taproot improvements to Bitcoin scripting"
      ]}
      keypoints={[
        "Stack-based execution model of Bitcoin Script",
        "Evolution from P2PK to P2PKH, P2SH, and SegWit script types",
        "Multi-signature capabilities for shared control of funds",
        "Timelocks and hash locks for conditional spending",
        "Advanced patterns like HTLCs and Taproot/MAST improvements"
      ]}
      sections={sections}
      previous={{
        title: "Bitcoin Consensus Rules",
        path: "/learn/advanced/consensus-rules"
      }}
      next={{
        title: "Layer 2 Solutions",
        path: "/learn/advanced/layer-2-solutions"
      }}
    />
  );
};

export default BitcoinScripting; 