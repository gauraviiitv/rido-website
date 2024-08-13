'use client';
import React from 'react';
import CloseButton from '@/components/CloseButton';
import { useTranslations } from 'next-intl';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';


const ContactUsPage: React.FC = () => {
  const t = useTranslations('contactUs');

  return (
    <div>
    <Navbar />
    <section className="p-8 md:px-32 text-justify bg-gradient-to-b from-white to-green-200">
      <CloseButton />
      <h2 className="mt-16 mb-8 text-center text-4xl font-bold">{t('title')}</h2>
      <h2 className="text-2xl font-bold">{t('getInTouch')}</h2>
      <p className="mt-4 text-lg">
        {t('intro')}
      </p>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">{t('customerSupport')}</h3>
        <p>{t('customerSupportDetails1')}</p>
        <p>{t('customerSupportPhone')}</p>
        <p>
          {t('customerSupportEmail')} <a href="mailto:customers@ridocabs.com" className="text-blue-500">customers@ridocabs.com</a>
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">{t('driverSupport')}</h3>
        <p>{t('driverSupportDetails')}</p>
        <p>{t('driverSupportPhone')}</p>
        <p>
          {t('driverSupportEmail')} <a href="mailto:drivers@ridocabs.com" className="text-blue-500">drivers@ridocabs.com</a>
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">{t('feedbackSuggestions')}</h3>
        <p>{t('feedbackSuggestionsDetails')}</p>
        <p>
          {t('feedbackSuggestionsEmail')} <a href="mailto:feedback@ridocabs.com" className="text-blue-500">feedback@ridocabs.com</a>
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">{t('ourLocation')}</h3>
        <p>
          {t('headOffice')}<br />
          {t('address')}
        </p>
        <p>{t('locationPhone')}</p>
        <p>
          {t('locationEmail')} <a href="mailto:support@ridocabs.com" className="text-blue-500">support@ridocabs.com</a>
        </p>
      </div>
    </section>
    <Footer />
    </div>
  );
};

export default ContactUsPage;
