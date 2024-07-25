import React, { useState } from 'react';
import ContactInfo from './ContactInfo';

interface ContactButtonProps {}

const ContactButton: React.FC<ContactButtonProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-0 right-0 pb-4 flex flex-col items-end">
      <button
        className="bg-yellow-400 rounded-lg px-4 py-2 focus:outline-none w-full" // Changed bg-white to bg-yellow-400
        onClick={handleClick}
      >
        Contact Us
      </button>
      <ContactInfo isOpen={isOpen} className="w-full" />
    </div>
  );
};

export default ContactButton;
