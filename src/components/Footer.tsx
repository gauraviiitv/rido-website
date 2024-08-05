"use client"; // Add this directive at the top

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import logo1 from '../assets/logo1.png'; // replace with actual logo path
import facebookIcon from '../assets/social/facebook.png';
import instagramIcon from '../assets/social/instagram.png';
import xIcon from '../assets/social/X.png';
import threadIcon from '../assets/social/thread.png';
import linkedinIcon from '../assets/social/linkedin.png';
import youtubeIcon from '../assets/social/youtube.png';

const Footer = () => {
  const router = useRouter();
  const t = useTranslations('footer');

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <footer className="text-white pt-2 border-t border-white">
      <div className="container mx-auto">
        <div className="flex justify-end md:ml-8 lg:ml-16"> 
          <div className="grid grid-cols-4 gap-8 px-4 mx-auto md:px-0"> {/* Updated to 4 columns */}
            <div className="col-span-1">
              <h3 className="font-bold mb-4 text-sm md:text-base">{t('joinUs')}</h3>
              <ul>
                <li className="mb-2">
                  <button 
                    onClick={() => handleNavigation('/driver')}
                    className="text-gray-300 text-sm md:text-base"
                  >
                    {t('ridoDriver')}
                  </button>
                </li>
                <li className="mb-2">
                  <button 
                    onClick={() => handleNavigation('/business')}
                    className="text-gray-300 text-sm md:text-base"
                  >
                    {t('ridoBusiness')}
                  </button>
                </li>
                {/* <li className="mb-2">
                  <button 
                    onClick={() => handleNavigation('#')}
                    className="text-gray-300 text-sm md:text-base"
                  >
                    {t('ridoCustomer')}
                  </button>
                </li> */}
                <li className="mb-2">
                  <button 
                    onClick={() => handleNavigation('/parcel')}
                    className="text-gray-300 text-sm md:text-base"
                  >
                    {t('ridoParcel')}
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="font-bold mb-4 text-sm md:text-base">{t('service')}</h3>
              <ul>
                {/* <li className="mb-2">
                  <button 
                    onClick={() => handleNavigation('#')}
                    className="text-gray-300 text-sm md:text-base"
                  >
                    {t('bookACab')}
                  </button>
                </li> */}
                <li className="mb-2">
                  <button 
                    onClick={() => handleNavigation('/rental')}
                    className="text-gray-300 text-sm md:text-base"
                  >
                    {t('rental')}
                  </button>
                </li>
                {/* <li className="mb-2">
                  <button 
                    onClick={() => handleNavigation('#')}
                    className="text-gray-300 text-sm md:text-base"
                  >
                    {t('occasionalBooking')}
                  </button>
                </li> */}
                <li className="mb-2">
                  <button 
                    onClick={() => handleNavigation('/ridomoney')}
                    className="text-gray-300 text-sm md:text-base"
                  >
                    {t('ridoMoney')}
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="font-bold mb-4 text-sm md:text-base">{t('company')}</h3>
              <ul>
                <li className="mb-2">
                  <button 
                    onClick={() => handleNavigation('/about')}
                    className="text-gray-300 text-sm md:text-base"
                  >
                    {t('aboutUs')}
                  </button>
                </li>
                <li className="mb-2">
                  <button 
                    onClick={() => handleNavigation('/contact')}
                    className="text-gray-300 text-sm md:text-base"
                  >
                    {t('contactUs')}
                  </button>
                </li>
                {/* <li className="mb-2">
                  <button 
                    onClick={() => handleNavigation('#')}
                    className="text-gray-300 text-sm md:text-base"
                  >
                    {t('career')}
                  </button>
                </li>
                <li className="mb-2">
                  <button 
                    onClick={() => handleNavigation('/terms&conditions')}
                    className="text-gray-300 text-sm md:text-base"
                  >
                    {t('termsAndConditions')}
                  </button>
                </li>
                <li className="mb-2">
                  <button 
                    onClick={() => handleNavigation('/privacy-policy')}
                    className="text-gray-300 text-sm md:text-base"
                  >
                    {t('privacyPolicy')}
                  </button>
                </li>
                <li className="mb-2">
                  <button 
                    onClick={() => handleNavigation('/cancellation-policy')}
                    className="text-gray-300 text-sm md:text-base"
                  >
                    {t('cancellationPolicy')}
                  </button>
                </li> */}
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="font-bold mb-4 text-sm md:text-base">{t('policies')}</h3>
              <ul>
                <li className="mb-2">
                  <button 
                    onClick={() => handleNavigation('/terms&conditions')}
                    className="text-gray-300 text-sm md:text-base"
                  >
                    {t('termsAndConditions')}
                  </button>
                </li>
                <li className="mb-2">
                  <button 
                    onClick={() => handleNavigation('/privacy-policy')}
                    className="text-gray-300 text-sm md:text-base"
                  >
                    {t('privacyPolicy')}
                  </button>
                </li>
                <li className="mb-2">
                  <button 
                    onClick={() => handleNavigation('/cancellation-policy')}
                    className="text-gray-300 text-sm md:text-base"
                  >
                    {t('cancellationPolicy')}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="mt-6 mx-6 pt-2 flex flex-col">
            <Image src={logo1} height={100} width={150} alt={t('ridoLogo')} className="h-16 mb-4" />
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/ridocab" target="_blank" rel="noopener noreferrer">
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
        <b>{t('copyright')}</b>
      </div>
    </footer>
  );
};

export default Footer;
