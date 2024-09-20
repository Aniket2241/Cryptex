import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = ({bg,color}) => {
  return (
    <footer className={`${bg} ${color} py-4`}>
      <div className="container mx-auto text-center">
        <p className="mb-2">&copy; 2024 Cryptocurrency Glossary. Empowering Your Crypto Knowledge</p>
        <p>Made with ♥ by Aniket</p>
        <div className="mt-2 flex justify-center">
            <div className='flex items-center'>
                <SiLeetcode className='text-orange-300 text-xl'/>
          <a href="https://leetcode.com/u/aniket2241/" target="_blank"  className="mx-2 text-white hover:text-gray-400">LeetCode</a>
          </div>
          <div className='flex items-center'>
           <FaGithub className='text-xl'/> 
          <a href="https://github.com/Aniket2241" target="_blank"  className="mx-2 text-white hover:text-gray-400">GitHub</a>
          </div>
          <div className='flex items-center'>
          <FaLinkedin className='text-blue-500 text-xl'/>
          <a href="https://www.linkedin.com/in/aniket-bhardwaj-672243296/" target="_blank"  className="mx-2 text-white hover:text-gray-400">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
