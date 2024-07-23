"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../assets/logo.png'; // Adjust the path based on your project structure

type NavBarProps = {
  setCurrentSection: (section: string) => void;
};

const NavBar: React.FC<NavBarProps> = ({ setCurrentSection }) => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleClick = (section: string) => {
    setActiveButton(section);
    setCurrentSection(section);
  };
  return (
    <nav className="fixed w-full bg-gradient-to-r from-blue-500 to-yellow-500 p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-4"> {/* Added items-center for vertical alignment and space-x-4 for spacing */}
        <Image src={logo} alt="Logo" width={50} height={50} className="mr-4" /> {/* Adjust size as needed */}
        <button
          onClick={() => handleClick('welcome')}
          className={`p-2 rounded ${activeButton === 'welcome' ? 'bg-white text-blue-500' : 'bg-transparent text-white'} transition-colors duration-300`}
        >
          Home
        </button>
        <button
          onClick={() => handleClick('services')}
          className={`p-2 rounded ${activeButton === 'services' ? 'bg-white text-blue-500' : 'bg-transparent text-white'} transition-colors duration-300`}
        >
          Services
        </button>
        <button
          onClick={() => handleClick('about')}
          className={`p-2 rounded ${activeButton === 'about' ? 'bg-white text-blue-500' : 'bg-transparent text-white'} transition-colors duration-300`}
        >
          About Us
        </button>
        <button
          onClick={() => handleClick('contact')}
          className={`p-2 rounded ${activeButton === 'contact' ? 'bg-white text-blue-500' : 'bg-transparent text-white'} transition-colors duration-300`}
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
