import React from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';
import Return from './Return';

const About = () => {
  return (
    <>
      <Return additionalcss="float-left fixed "/>
      <div className="container mx-auto p-4 sm:p-8 bg-gray-900 text-white">
        
        {/* Header Section */}
        <motion.header
          className="text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 flex gap-2 justify-center">
            About <span className="text-yellow-400">Cryptex</span>
          </h1>
          <p className="text-md sm:text-lg">
            Your ultimate destination for cryptocurrency trends and insights.
          </p>
        </motion.header>

        {/* Main Section */}
        <section className="flex flex-wrap items-start justify-center gap-8">
          {/* Images Section */}
          <motion.div
            className="w-full md:w-1/2 lg:w-1/3 p-4 flex flex-col items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <img src="coin.png" alt="Crypto Trends" className="rounded-lg shadow-lg w-full" />
              <img src="bitcoin.png" alt="Bitcoin" className="rounded-lg shadow-lg w-full" />
              <img src="ethereum.png" alt="Ethereum" className="rounded-lg shadow-lg w-full" />
              <img src="xrp.png" alt="XRP" className="rounded-lg shadow-lg w-full" />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.article
            className="w-full md:w-1/2 lg:w-1/3 p-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
            <p className="mb-4">
              At Cryptex, we envision a world where cryptocurrency knowledge is accessible to everyone. We strive to demystify the complex world of digital currencies by providing clear, concise, and accurate information.
            </p>
            <p>
              Our platform is designed to be user-friendly and informative, catering to both beginners and seasoned crypto enthusiasts. We believe that understanding cryptocurrency trends and market analysis should be straightforward and engaging.
            </p>
          </motion.article>
        </section>

        {/* Join Our Journey Section */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2 className="text-2xl font-bold mb-4">Join Our Journey</h2>
          <p className="mb-4">
            Stay ahead in the crypto world by joining our community. Get the latest updates, trends, and insights delivered straight to your inbox.
          </p>
          
          <form className="flex flex-col sm:flex-row items-center justify-center gap-2">
            <input
              type="email"
              placeholder="Enter your E-mail"
              className="p-2 text-black rounded-lg w-full sm:w-auto"
            />
            <button className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
              Submit
            </button>
          </form>
        </motion.div>
      </div>

      <hr />

      {/* Footer Section */}
      <Footer bg="bg-black" color="text-white" />
    </>
  );
};

export default About;
