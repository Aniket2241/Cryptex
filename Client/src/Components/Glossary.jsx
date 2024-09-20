import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
export default function Glossary() {
  const glossary = {
    "Address": "A string of characters used to send and receive cryptocurrency.",
    "Altcoin": "Any cryptocurrency other than Bitcoin.",
    "ASIC (Application-Specific Integrated Circuit)": "Specialized hardware designed for mining cryptocurrencies.",
    "Block": "A record of transactions in a blockchain.",
    "Blockchain": "A decentralized, digital ledger that records transactions across many computers.",
    "Consensus Algorithm": "A process used to achieve agreement on a single data value among distributed processes or systems.",
    "Cryptocurrency": "A digital or virtual currency that uses cryptography for security.",
    "Decentralization": "The distribution of power away from a central authority.",
    "DeFi (Decentralized Finance)": "Financial services using smart contracts on blockchain networks.",
    "Double Spending": "The risk that a digital currency can be spent twice.",
    "Fiat Currency": "Traditional currency that is government-issued and not backed by a physical commodity.",
    "Fork": "A change to the software of a cryptocurrency that creates two separate versions of the blockchain.",
    "Gas": "A unit that measures the amount of computational effort required to execute operations, often used in Ethereum.",
    "Halving": "The process of reducing the reward for mining new blocks by half, typically seen in Bitcoin.",
    "Hash": "A function that converts an input into a fixed-length string of characters, which appears random.",
    "ICO (Initial Coin Offering)": "A fundraising method where new cryptocurrencies are sold to investors.",
    "Ledger": "A record of financial transactions.",
    "Liquidity": "The ability to quickly buy or sell an asset without affecting its price.",
    "Mining": "The process of validating and adding transactions to the blockchain.",
    "Node": "A computer that participates in the network of a blockchain.",
    "Nonce": "A number used once in cryptographic communication, often used in mining.",
    "P2P (Peer-to-Peer)": "Direct transactions between users without an intermediary.",
    "Private Key": "A secret key used to access and manage cryptocurrency funds.",
    "Proof of Stake (PoS)": "A consensus mechanism that selects validators based on the number of coins they hold and are willing to 'stake' as collateral.",
    "Proof of Work (PoW)": "A consensus mechanism that requires miners to solve complex mathematical problems to validate transactions.",
    "Public Key": "A cryptographic key that can be shared publicly and is used to receive cryptocurrency.",
    "Satoshi": "The smallest unit of Bitcoin, named after its creator, Satoshi Nakamoto.",
    "Smart Contract": "Self-executing contracts with the terms of the agreement directly written into code.",
    "Stablecoin": "A cryptocurrency pegged to a stable asset like fiat currency to reduce volatility.",
    "Token": "A unit of value issued by a project on a blockchain.",
    "Wallet": "A digital tool that allows users to store and manage their cryptocurrencies.",
    "Whale": "An individual or entity that holds a large amount of cryptocurrency.",
    "Whitepaper": "A document that outlines the technical details and objectives of a cryptocurrency project."
  };

  return (
    <>
    <Navbar/>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl text-white font-bold mb-6 text-center" style={{ textShadow: '2px 2px 4px red' }}>
          Cryptocurrency Glossary
        </h1>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(glossary).map(([term, definition], index) => (
            <div
              key={term}
              className={`p-6 border rounded-lg shadow-lg ${index % 2 === 1 ? 'bg-blue-900 text-gray-200' : 'bg-black text-gray-200'}`}
            >
              <h2 className="text-xl font-bold mb-2 text-white">{term}</h2>
              <p className="text-gray-300">{definition}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer color="text-white" bg="bg-gray-900" />
    </>
  );
}
