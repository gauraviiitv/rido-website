"use client"; // Add this directive at the top

import React from 'react';
import { useRouter } from 'next/navigation';

const CloseButton: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <button 
      onClick={handleClick} 
      className="absolute mt-10 top-4 right-32 text-3xl font-bold focus:outline-none"
    >
      &times;
    </button>
  );
};

export default CloseButton;
