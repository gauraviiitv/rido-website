"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { UserIcon, Bars3Icon } from '@heroicons/react/24/solid';
import { useTranslations } from 'next-intl';
import { setCookie } from 'cookies-next'; // Use the cookies-next library or similar
import { CognitoUserSession } from 'amazon-cognito-identity-js';
import { userPool } from '../cognito';
import logo from '../assets/logo.png'; // Adjust the path based on your project structure
import indFlag from '../assets/in.png'; // Example path to flag images

// Define a custom type for image imports
type FlagImage = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<{ code: string, name: string, flag?: FlagImage }>({
    code: 'IN', // Set default locale to Hindi
    name: 'हिंदी',
    flag: indFlag
  });
  const [userName, setUserName] = useState<string | null>(null);

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'IN', name: 'हिंदी', flag: indFlag },
    // { code: 'NP', name: 'मैथिली', flag: indFlag }
  ];

  const t = useTranslations('navbar');

  useEffect(() => {
    const currentUser = userPool.getCurrentUser();
    if (currentUser) {
      currentUser.getSession((err: any, session: CognitoUserSession | null) => {
        if (err) {
          console.error('Error getting session:', err);
          return;
        }
        if (session?.isValid()) {
          currentUser.getUserAttributes((err: any, attributes: any) => {
            if (err) {
              console.error('Error getting attributes:', err);
              return;
            }
            const nameAttr = attributes.find((attr: any) => attr.Name === 'name');
            setUserName(nameAttr?.Value || 'User');
          });
        }
      });
    }
  }, []);

  const handleClick = () => {
    router.push('/'); // Navigate to home
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
    setIsMenuDropdownOpen(false); // Close the menu dropdown when opening language dropdown
  };

  const toggleMenuDropdown = () => {
    setIsMenuDropdownOpen(!isMenuDropdownOpen);
    setIsLanguageDropdownOpen(false); // Close the language dropdown when opening menu dropdown
  };

  const handleLanguageChange = (language: { code: string, name: string, flag?: FlagImage }) => {
    setSelectedLanguage(language);
    setIsLanguageDropdownOpen(false); // Close the dropdown after selection

    // Set a cookie for the selected language
    setCookie('locale', language.code);

    // Optionally refresh the page
    router.refresh(); // Reloads the current page, useful for dynamic content updates
  };

  const handleNavigation = (path: string) => {
    router.push(path); // Navigate to the selected path
    setIsMenuDropdownOpen(false); // Close the dropdown after navigation
  };

  const handleLogout = () => {
    const currentUser = userPool.getCurrentUser();
    if (currentUser) {
      currentUser.signOut();
      setUserName(null);
      router.refresh(); // Redirect to login page after logout
    }
  };

  return (
    <nav className="fixed w-full gradient-container p-2 flex justify-between items-center z-50">
      <div className="flex items-center space-x-4">
        <button onClick={handleClick} className="focus:outline-none">
          <Image src={logo} alt={t('logo')} width={100} height={100} /> {/* Logo Image */}
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button onClick={toggleLanguageDropdown} className="flex items-center space-x-2 px-2 bg-white text-black rounded-full">
            {selectedLanguage.flag && (
              <Image src={selectedLanguage.flag.src} alt={selectedLanguage.name} width={20} height={20} /> // Language Flag Image
            )}
            <span>{selectedLanguage.name}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /> {/* Dropdown Arrow */}
            </svg>
          </button>
          {isLanguageDropdownOpen && (
            <div className="absolute right-0 mt-2 w-28 bg-white border border-gray-200 rounded-lg shadow-lg">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language)}
                  className="flex items-center px-2 text-black hover:bg-gray-100 rounded-lg w-full text-left"
                >
                  {language.flag && (
                    <Image src={language.flag.src} alt={language.name} width={20} height={20} className="mr-2" /> 
                  )}
                  {language.name} {/* Language Name */}
                </button>
              ))}
            </div>
          )}
        </div>
        {userName ? (
  <div className="flex items-center">
    <button className="bg-white text-black flex items-center px-2 rounded-full">
      <UserIcon className="h-4 w-4 text-black" />
      <span className="ml-2">{userName}</span>
    </button>
    <button 
      onClick={handleLogout} 
      className="bg-white text-black flex items-center px-2 rounded-full ml-4"
    >
      Log Out
    </button>
  </div>
) : (
  <button 
    onClick={() => router.push('/auth/login')} // Navigate to login page
    className="bg-white text-black flex items-center px-2 rounded-full"
  >
    <UserIcon className="h-4 w-4 text-black" />
    <span className="ml-2">Log In</span>
  </button>
)}

        <div className="relative">
          <button onClick={toggleMenuDropdown} className="focus:outline-none">
            <Bars3Icon className=" mt-2 h-8 w-8 text-black" /> {/* Menu Icon */}
          </button>
          {isMenuDropdownOpen && (
            <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-lg">
              <button onClick={() => handleNavigation('/driver')} className="block py-2 px-4 text-black hover:bg-gray-100 w-full text-left rounded-lg">{t('driveWithUs')}</button>
              <button onClick={() => handleNavigation('/rental')} className="block py-2 px-4 text-black hover:bg-gray-100 w-full text-left rounded-lg">{t('ridoRental')}</button>
              <button onClick={() => handleNavigation('/ridomoney')} className="block py-2 px-4 text-black hover:bg-gray-100 w-full text-left rounded-lg">{t('ridoMoney')}</button>
              <button onClick={() => handleNavigation('/business')} className="block py-2 px-4 text-black hover:bg-gray-100 w-full text-left rounded-lg">{t('ridoBusiness')}</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
