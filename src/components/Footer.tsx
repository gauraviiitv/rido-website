import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-white text-center">
      <div className="flex justify-center mt-6 pt-4 space-x-6">
        <a href="#"><img src="/facebook.png" alt="Facebook" className="h-8" /></a>
        <a href="#"><img src="/twitter.png" alt="Twitter" className="h-8" /></a>
        <a href="#"><img src="/instagram.png" alt="Instagram" className="h-8" /></a>
      </div>
      <div className="border-t border-white mt-6 pt-2">
        <b>Copyright &copy; 2024 Rido SP Services Private Limited. All rights reserved.</b>
      </div>
    </footer>
  );
};

export default Footer;
