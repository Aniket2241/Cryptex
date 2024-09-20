import React, { useEffect, useState } from 'react';
import Heading from './Heading';
export default function Phone3d() {
  const [rotation, setRotation] = useState(80);

  const handleScroll = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const rotationDegree = 80 - (scrollPosition / maxScroll) * 130; 
    setRotation(rotationDegree);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <div className="flex flex-col items-center justify-center flex-wrap mt-10">
   
    <Heading 
      info="Explore Bitcoin, Ethereum, and 350+ cryptocurrencies" 
      color="text-gray-100" 
      center="text-center" 
      size="text-3xl sm:text-5xl lg:text-7xl"
    />

<div className='flex justify-center mt-[-10%]'>
      <img 
        src="phone.webp" 
        alt="phone" 
        className="  transition-transform duration-200 ease-linear" 
        style={{ transform: `rotateX(${rotation}deg)` }} 
      />
    </div></div>
    </>
  );
}

