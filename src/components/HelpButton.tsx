"use client"; // Add this directive at the top

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import whatsapp from '../assets/social/Whatsapp.png'; // Adjust the path based on your project structure
import phone from '../assets/phone.png'; // Adjust the path based on your project structure
import help from '../assets/help.png'; // Import the help image

interface HelpProps {
  className?: string;
}

const Help: React.FC<HelpProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed bottom-0 right-0 p-4 flex flex-col items-end ${className}`}>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, translateY: 100 }}
          animate={{ opacity: isOpen ? 1 : 0, translateY: isOpen ? -10 : 100 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-100 rounded w-48 break-words"
        >  
          <h3 className="font-bold text-lg mb-2 bg-blue-300 p-2 text-sm rounded">How can we help you? <span className='text-xs'>(Available 24X7)</span></h3>
          <p className="mb-2 px-2 flex items-center space-x-2">
            <Link href="tel:+917070703855" target="_blank" className="hover:underline text-xs flex items-center space-x-2">
              <Image src={phone} width={20} height={20} alt="Phone" />
              <span>Call Customer Care: 7070703855</span>
            </Link>
          </p>
          <p className="mb-2 px-2 flex items-center space-x-2">
            <Link href="tel:+917070703855" target="_blank" className="hover:underline text-xs flex items-center space-x-2">
              <Image src={phone} width={20} height={20} alt="Phone" />
              <span>Call Driver Executive: 7070703855</span>
            </Link>
          </p>
          <p className="mb-2 px-2 flex items-center space-x-2">
            <Link href="tel:+917070703855" target="_blank" className="hover:underline text-xs flex items-center space-x-2">
              <Image src={phone} width={20} height={20} alt="Phone" />
              <span>Technical Support: 7070703855</span>
            </Link>
          </p>
          <p className="mb-2 px-2 flex items-center space-x-2">
            <Link href="https://wa.me/917070703855?text=Hi" target="_blank" className="hover:underline text-xs flex items-center space-x-2">
              <Image src={whatsapp} width={20} height={20} alt="WhatsApp" /> 
              <span>Chat with us on WhatsApp</span>
            </Link>
          </p>
        </motion.div>
      )}
      <button 
        onClick={handleClick}
        className="focus:outline-none"
      >
        <Image src={help} width={100} height={100} alt="Help" />
      </button>
    </div>
  );
};

export default Help;
