'use client';

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

  const handleLogoClick = () => {
    setActiveButton(null); // Reset active button
    setCurrentSection('welcome');
  };

  return (
    <nav className="fixed w-full gradient-container p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <button onClick={handleLogoClick} className="focus:outline-none ml-16">
          <Image src={logo} alt="Logo" width={100} height={100} />
        </button>
        <button
          onClick={() => handleClick('home')}
          className={`p-2 rounded ${activeButton === 'home' ? 'bg-white' : 'bg-transparent text-black'} transition-colors duration-300`}
        >
          Home
        </button>
        <button
          onClick={() => handleClick('services')}
          className={`p-2 rounded ${activeButton === 'services' ? 'bg-white' : 'bg-transparent text-black'} transition-colors duration-300`}
        >
          Services
        </button>
        <button
          onClick={() => handleClick('about')}
          className={`p-2 rounded ${activeButton === 'about' ? 'bg-white' : 'bg-transparent text-black'} transition-colors duration-300`}
        >
          About Us
        </button>
        <button
          onClick={() => handleClick('contact')}
          className={`p-2 rounded ${activeButton === 'contact' ? 'bg-white' : 'bg-transparent text-black'} transition-colors duration-300`}
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
