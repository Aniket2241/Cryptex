import React from 'react';
import Navbar from './Navbar';
import HalfPage from './HalfPage';
import Footer from './Footer';
import { VscGraphLine } from "react-icons/vsc";
import Phone3d from './Phone3d';
import Cryptochart from './Cryptochart';
import Button from './Button';

export default function Home() {
  return (
    <>
      <Navbar />
      <HalfPage />
      <Phone3d />

      
      <div className='flex justify-center items-center mt-8'>
        <div className='flex border-2 gap-2 items-center p-3 rounded-xl hover:bg-gray-700 transition-all duration-300'>
          <Button
            title="Check Crypto Prices"
            background=""
            color="text-white text-lg md:text-2xl font-bold"
          />
          <VscGraphLine className='text-gray-300 text-lg md:text-2xl' />
        </div>
      </div>

      <Cryptochart />

      <Footer color="text-gray-400" bg="bg-gray-800" />
    </>
  );
}
