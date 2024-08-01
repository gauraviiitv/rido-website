import React from 'react';
import Image from 'next/image';
import logo1 from '../assets/logo1.png'; // replace with actual logo path
import facebookIcon from '../assets/social/facebook.png';
import instagramIcon from '../assets/social/instagram.png';
import xIcon from '../assets/social/X.png';
import threadIcon from '../assets/social/thread.png';
import linkedinIcon from '../assets/social/linkedin.png';
import youtubeIcon from '../assets/social/youtube.png';

const Footer = () => {
  return (
    <footer className="text-white pt-2 border-t border-white">
      <div className="container mx-auto">
        <div className="flex justify-end md:ml-8 lg:ml-16"> 
          <div className="grid grid-cols-4 gap-8 px-4 mx-auto md:px-0"> {/* Updated to 4 columns */}
            <div className="col-span-1">
              <h3 className="font-bold mb-4 text-sm md:text-base">JOIN US</h3>
              <ul>
                <li className="mb-2"><a href="/driver" className="text-gray-300 text-sm md:text-base">Rido driver</a></li>
                <li className="mb-2"><a href="/business" className="text-gray-300 text-sm md:text-base">Rido business</a></li>
                {/* <li className="mb-2"><a href="#" className="text-gray-300 text-sm md:text-base">Rido Customer</a></li> */}
                <li className="mb-2"><a href="/parcel" className="text-gray-300 text-sm md:text-base">Rido Parcel</a></li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="font-bold mb-4 text-sm md:text-base">SERVICE</h3>
              <ul>
                {/* <li className="mb-2"><a href="#" className="text-gray-300 text-sm md:text-base">Book a cab</a></li> */}
                <li className="mb-2"><a href="/rental" className="text-gray-300 text-sm md:text-base">Rental</a></li>
                {/* <li className="mb-2"><a href="#" className="text-gray-300 text-sm md:text-base">Occasional booking</a></li> */}
                <li className="mb-2"><a href="/ridomoney" className="text-gray-300 text-sm md:text-base">Rido money</a></li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="font-bold mb-4 text-sm md:text-base">COMPANY</h3>
              <ul>
                <li className="mb-2"><a href="/about" className="text-gray-300 text-sm md:text-base">About us</a></li>
                <li className="mb-2"><a href="/contact" className="text-gray-300 text-sm md:text-base">Contact us</a></li>
                {/* <li className="mb-2"><a href="#" className="text-gray-300 text-sm md:text-base">Career</a></li> */}
                {/* <li className="mb-2"><a href="/terms&conditions" className="text-gray-300 text-sm md:text-base">Terms & Conditions</a></li>
                <li className="mb-2"><a href="/privacy-policy" className="text-gray-300 text-sm md:text-base">Privacy Policy</a></li>
                <li className="mb-2"><a href="/cancellation-policy" className="text-gray-300 text-sm md:text-base">Cancellation & Refund Policy</a></li> */}
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="font-bold mb-4 text-sm md:text-base">POLICIES</h3>
              <ul>
                <li className="mb-2"><a href="/terms&conditions" className="text-gray-300 text-sm md:text-base">Terms & Conditions</a></li>
                <li className="mb-2"><a href="/privacy-policy" className="text-gray-300 text-sm md:text-base">Privacy Policy</a></li>
                <li className="mb-2"><a href="/cancellation-policy" className="text-gray-300 text-sm md:text-base">Cancellation & Refund Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="mt-6 mx-6 pt-2 flex flex-col">
            <Image src={logo1} height={100} width={150} alt="Rido Logo" className="h-16 mb-4" />
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/cabsrido" target="_blank" rel="noopener noreferrer">
                <Image src={facebookIcon} alt="Facebook" className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/ridocabs/" target="_blank" rel="noopener noreferrer">
                <Image src={instagramIcon} alt="Instagram" className="h-6 w-6" />
              </a>
              <a href="https://x.com/ridocabs/" target="_blank" rel="noopener noreferrer">
                <Image src={xIcon} alt="X (formerly Twitter)" className="h-6 w-6" />
              </a>
              <a href="https://www.threads.net/ridocabs/" target="_blank" rel="noopener noreferrer">
                <Image src={threadIcon} alt="Threads" className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/ridocabs/" target="_blank" rel="noopener noreferrer">
                <Image src={linkedinIcon} alt="LinkedIn" className="h-6 w-6" />
              </a>
              <a href="https://www.youtube.com/@ridocabs/" target="_blank" rel="noopener noreferrer">
                <Image src={youtubeIcon} alt="YouTube" className="h-6 w-6" />
              </a>
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
