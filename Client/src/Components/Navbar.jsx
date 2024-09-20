import React, { useState } from 'react';
import { MdCurrencyBitcoin, MdMenu, MdClose } from "react-icons/md";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="flex justify-between items-center py-4 px-6 bg-gray-900 text-white">
        <div className='flex items-center gap-3'>
          <MdCurrencyBitcoin className='text-white text-3xl border-2 border-yellow-400 mt-[2px] rounded-md bg-green-600'/>
          <h1 className="text-2xl font-semibold text-yellow-400">Cryptex</h1>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <MdClose className="text-3xl" /> : <MdMenu className="text-3xl" />}
          </button>
        </div>
        <nav className={`space-x-4 md:flex ${isOpen ? 'block' : 'hidden'}`}>
          <NavLink to='/' className="block text-gray-300 hover:text-white px-3 py-2 rounded-md hover:bg-gray-700 font-medium cursor-pointer">Home</NavLink>
          <NavLink to='/News' className="block text-gray-300 hover:text-white px-3 py-2 rounded-md hover:bg-gray-700 font-medium cursor-pointer">News</NavLink>
          <NavLink to='/Glossary' className="block text-gray-300 hover:text-white px-3 py-2 rounded-md hover:bg-gray-700 font-medium cursor-pointer">Glossary</NavLink>
          <NavLink to='/About' className="block text-gray-300 hover:text-white px-3 py-2 rounded-md hover:bg-gray-700 font-medium cursor-pointer">About</NavLink>
        </nav>
      </header>
    </div>
  );
}
