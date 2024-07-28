"use client"; // Add this directive at the top

import React, { useState } from 'react';
import Image from 'next/image';
import { UserIcon, Bars3Icon } from '@heroicons/react/24/solid';
import logo from '../assets/logo.png'; // Adjust the path based on your project structure
import indFlag from '../assets/flags/in.png'; // Example path to flag images
import usFlag from '../assets/flags/us.png'; // Example path to flag images

const Navbar: React.FC = () => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English'); // Default language

  const languages = [
    { code: 'IN', name: 'हिंदी', flag: indFlag },
    { code: 'US', name: 'English', flag: usFlag },
    { code: 'NP', name: 'मैथिली', flag: indFlag }
  ];

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
    setIsMenuDropdownOpen(false); // Close the menu dropdown when opening language dropdown
  };

  const toggleMenuDropdown = () => {
    setIsMenuDropdownOpen(!isMenuDropdownOpen);
    setIsLanguageDropdownOpen(false); // Close the language dropdown when opening menu dropdown
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language.name);
    setIsLanguageDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <nav className="fixed w-full gradient-container p-4 flex justify-between items-center z-50">
      <div className="flex items-center space-x-4">
        <button className="focus:outline-none">
          <Image src={logo} alt="Logo" width={100} height={100} />
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button onClick={toggleLanguageDropdown} className="flex items-center space-x-2 px-4 py-2 bg-white text-black rounded-full">
            <Image src={languages.find(lang => lang.name === selectedLanguage)?.flag || usFlag} alt={selectedLanguage} width={20} height={20} />
            <span>{selectedLanguage}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          {isLanguageDropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg">
              {languages.map((language) => (
                <button
                  key={language.name}
                  onClick={() => handleLanguageChange(language)}
                  className="flex items-center px-4 py-2 text-black hover:bg-gray-100 w-full text-left"
                >
                  <Image src={language.flag} alt={language.name} width={20} height={20} className="mr-2" />
                  {language.name}
                </button>
              ))}
            </div>
          )}
        </div>
        <button className="bg-white text-black flex items-center px-4 py-2 rounded-full space-x-2">
          <UserIcon className="h-5 w-5 text-black" />
          <span>Log In</span>
        </button>
        <div className="relative">
          <button onClick={toggleMenuDropdown} className="focus:outline-none">
            <Bars3Icon className="h-5 w-5 text-black" />
          </button>
          {isMenuDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
              <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">Book a ride</a>
              <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">Drive with us</a>
              <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">Rido rental</a>
              <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">Rido money</a>
              <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">Rido business</a>
              <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">Customer support</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
