import React from 'react';
import CloseButton from '@/components/CloseButton';
import { useTranslations } from 'next-intl';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

const RidoRentalPage: React.FC = () => {
  const t = useTranslations('ridoRental');

  return (
    <div>
    <Navbar />
    <section className="relative text-justify p-8 md:px-32 bg-gradient-to-b from-white to-green-200">
      <CloseButton />
      <h2 className="mt-16 mb-8 text-center text-4xl font-bold">{t('title')}</h2>

      <p className="mt-4 text-lg">
        {t('intro')}
      </p>

      <h3 className="mt-8 mb-4 text-2xl font-bold">{t('howItWorksTitle')}</h3>
      
      <p className="mt-4 text-lg">
        <strong>{t('step1Title')}</strong><br />
        {t('step1Desc')}
      </p>

      <p className="mt-4 text-lg">
        <strong>{t('step2Title')}</strong><br />
        {t('step2Desc')}
      </p>

      <p className="mt-4 text-lg">
        <strong>{t('step3Title')}</strong><br />
        {t('step3Desc')}
      </p>

      <p className="mt-4 text-lg">
        <strong>{t('step4Title')}</strong><br />
        {t('step4Desc')}
      </p>

      <h3 className="mt-8 mb-4 text-2xl font-bold">{t('fleetOptionsTitle')}</h3>
      
      <p className="mt-4 text-lg">
        <strong>{t('economyTitle')}:</strong> {t('economyDesc')}<br />
        <strong>{t('luxuryTitle')}:</strong> {t('luxuryDesc')}<br />
        <strong>{t('suvTitle')}:</strong> {t('suvDesc')}<br />
        <strong>{t('vansTitle')}:</strong> {t('vansDesc')}
      </p>
      <Footer />
    </section>
    </div>
  );
};

export default RidoRentalPage;
