import React from 'react';
import Image from 'next/image';
import logo1 from '../assets/logo1.png'; // replace with actual logo path
import facebookIcon from '../assets/facebook.png';
import instagramIcon from '../assets/instagram.png';
import xIcon from '../assets/x.png';
import threadIcon from '../assets/thread.png';
import linkedinIcon from '../assets/linkedin.png';
import youtubeIcon from '../assets/youtube.png';

const Footer = () => {
  return (
    <footer className="text-white pt-2 border-t border-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div className="mt-6 pt-2 flex flex-col">
            <Image src={logo1} height={100} width={150} alt="Rido Logo" className="h-16 mb-4" />
            <div className="flex space-x-4">
              <Image src={facebookIcon} alt="Facebook" className="h-6 w-6" />
              <Image src={instagramIcon} alt="Instagram" className="h-6 w-6" />
              <Image src={xIcon} alt="X(formerly Twitter)" className="h-6 w-6" />
              <Image src={threadIcon} alt="Google" className="h-6 w-6" />
              <Image src={linkedinIcon} alt="LinkedIn" className="h-6 w-6" />
              <Image src={youtubeIcon} alt="YouTube" className="h-6 w-6" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <h3 className="font-bold mb-4">JOIN US</h3>
              <ul>
                <li className="mb-2"><a href="#" className="text-gray-300">Rido driver</a></li>
                <li className="mb-2"><a href="#" className="text-gray-300">Rido business</a></li>
                <li className="mb-2"><a href="#" className="text-gray-300">Rido Customer</a></li>
                <li className="mb-2"><a href="#" className="text-gray-300">Rido Parcel</a></li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="font-bold mb-4">SERVICE</h3>
              <ul>
                <li className="mb-2"><a href="#" className="text-gray-300">Book a cab</a></li>
                <li className="mb-2"><a href="#" className="text-gray-300">Rental</a></li>
                <li className="mb-2"><a href="#" className="text-gray-300">Occasional booking</a></li>
                <li className="mb-2"><a href="#" className="text-gray-300">Rido money</a></li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="font-bold mb-4">COMPANY</h3>
              <ul>
                <li className="mb-2"><a href="/about" className="text-gray-300">About us</a></li>
                <li className="mb-2"><a href="/contact" className="text-gray-300">Contact us</a></li>
                <li className="mb-2"><a href="#" className="text-gray-300">Career</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white mt-6 pt-2 flex justify-center w-full">
        <b>Copyright &copy; 2024 Rido SP Services Private Limited. All rights reserved.</b>
      </div>
    </footer>
  );
};

export default Footer;
