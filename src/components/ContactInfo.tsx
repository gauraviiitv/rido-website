import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import whatsapp from '../assets/Whatsapp.png'; // Adjust the path based on your project structure
import phone from '../assets/phone.png'; // Adjust the path based on your project structure
import Image from 'next/image';

interface ContactInfoProps {
  isOpen: boolean;
  className?: string; // Add className property
}

const ContactInfo: React.FC<ContactInfoProps> = ({ isOpen }) => {
  return (
    <motion.div
      animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-100 rounded-lg p-4 max-w-sm break-words"
    >
      <h3 className="font-bold text-lg mb-2">How can we help you? (Available 24X7)</h3>
      <p className="mb-2 flex items-center space-x-2">
      <Link href="tel:+917070703855" target="_blank" className="hover:underline flex items-center space-x-2">
        <Image src={phone} width={20} height={20} alt="WhatsApp" />
      </Link>
        <span>Call customer care - </span><Link href="tel:+917070703855" className="text-blue-500 hover:underline">70 70 70 3855</Link>
      </p>
      <p className="mb-2 flex items-center space-x-2">
      <Link href="tel:+917070703855" target="_blank" className="hover:underline flex items-center space-x-2">
        <Image src={phone} width={20} height={20} alt="WhatsApp" />
      </Link>
        <span>Call Driver executive - </span><Link href="tel:+917070703855" className="text-blue-500 hover:underline">70 70 70 3855</Link>
      </p>
      <p className="mb-2 flex items-center space-x-2">
      <Link href="tel:+917070703855" target="_blank" className="hover:underline flex items-center space-x-2">
        <Image src={phone} width={20} height={20} alt="WhatsApp" />
      </Link>
        <span>Technical support - </span><Link href="tel:+917070703855" className="text-blue-500 hover:underline">70 70 70 3855</Link>
      </p>
      <Link href="https://wa.me/917070703855?text=Hi" target="_blank" className="hover:underline flex items-center space-x-2">
        <Image src={whatsapp} width={20} height={20} alt="WhatsApp" /> <span>Chat with us on WhatsApp</span>
      </Link>
    </motion.div>
  );
};

export default ContactInfo;
