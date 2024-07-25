import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
      <h3 className="font-bold text-lg mb-2">How can we help you?</h3>
      <p className="mb-2">Call customer care - 7070703855 (Mon-Fri, 9AM to 6 PM)</p>
      <p className="mb-2">Call Driver executive - 7070703855 (Mon-Fri, 9AM to 6 PM)</p>
      <p className="mb-2">Technical support - 7070703855 (Mon-Fri, 9AM to 6 PM)</p>
      <Link href="https://api.whatsapp.com/send?phone=917070703855&text=Hi" target="_blank" className="hover:underline">
        Chat with us (Mon-Fri, 9AM to 6 PM)
      </Link>
    </motion.div>
  );
};

export default ContactInfo;
