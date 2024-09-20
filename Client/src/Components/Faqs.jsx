import React, { useState } from 'react';
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io";

export default function Faqs() {
  const questions = [
    {
      question: "What is cryptocurrency?",
      answer: "Cryptocurrency is a type of digital or virtual currency that uses cryptography for security. It is decentralized and typically operates on blockchain technology, which is a distributed ledger enforced by a network of computers (nodes)."
    },
    {
      question: "How can I buy cryptocurrency?",
      answer: "You can buy cryptocurrency through exchanges such as Coinbase, Binance, or Kraken. These platforms allow you to purchase cryptocurrencies using traditional currencies like USD, EUR, or INR. You'll need to create an account, verify your identity, and link a payment method to start buying."
    },
    {
      question: "Where can I buy cryptocurrency?",
      answer: "Cryptocurrency can be bought on various online exchanges such as: Coinbase, Binance, Kraken, Bitfinex, LocalBitcoins. These platforms offer different features, so it's important to choose one that suits your needs."
    },
    {
      question: "How can I trade cryptocurrency?",
      answer: "To trade cryptocurrency, you need to sign up on a cryptocurrency exchange, deposit funds, choose the trading pair, and execute buy/sell orders. Trading can be done on platforms like Binance, Kraken, and Coinbase Pro."
    },
    {
      question: "How can I earn rewards in cryptocurrency?",
      answer: "You can earn rewards in cryptocurrency through several methods, including: Staking, Mining, Yield Farming, Airdrops, Cashback and Rewards Programs."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section p-5 mt-10 bg-gray-900 rounded-lg text-white">
      <h2 className="text-3xl font-bold text-left mb-5">Frequently Asked Questions</h2>
      {questions.map((item, index) => (
        <div key={index} className="mb-5 border-b border-gray-700">
          <div className="flex items-center justify-between cursor-pointer py-3" onClick={() => toggleAnswer(index)}>
            <h3 className="text-xl font-semibold">{item.question}</h3>
            {openIndex === index ? (
              <IoMdRemoveCircleOutline className="text-2xl" />
            ) : (
              <IoMdAddCircleOutline className="text-2xl" />
            )}
          </div>
          {openIndex === index && <p className="text-gray-400 mt-2">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
}
