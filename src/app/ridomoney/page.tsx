import React from 'react';
import CloseButton from '@/components/CloseButton';
import { useTranslations } from 'next-intl';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

const RidoMoneyPage: React.FC = () => {
  const t = useTranslations('ridoMoney');

  return (
    <div>
    <Navbar />
    <section className="relative text-justify p-8 md:px-32 bg-gradient-to-b from-white to-green-200">
      <CloseButton />
      <h2 className="mt-16 mb-8 text-center text-4xl font-bold">{t('title')}</h2>

      <p className="mt-4 text-lg">
        <strong>{t('ridoMoneyTitle')}</strong>
      </p>
      <p className="mt-2 text-lg">
        {t('ridoMoneyDesc')}
      </p>
      <ul className="mt-2 text-lg list-disc list-inside">
        <li><strong>{t('instantPaymentsTitle')}:</strong> {t('instantPaymentsDesc')}</li>
        <li><strong>{t('seamlessTransfersTitle')}:</strong> {t('seamlessTransfersDesc')}</li>
        <li><strong>{t('secureTransactionsTitle')}:</strong> {t('secureTransactionsDesc')}</li>
        <li><strong>{t('convenienceTitle')}:</strong> {t('convenienceDesc')}</li>
      </ul>

      <p className="mt-4 text-lg">
        <strong>{t('ridoCoinTitle')}</strong>
      </p>
      <p className="mt-2 text-lg">
        {t('ridoCoinDesc')}
      </p>
      <ul className="mt-2 text-lg list-disc list-inside">
        <li><strong>{t('earnWhileYouDriveTitle')}:</strong> {t('earnWhileYouDriveDesc')}</li>
        <li><strong>{t('customerRewardsTitle')}:</strong> {t('customerRewardsDesc')}</li>
        <li><strong>{t('redeemForDiscountsTitle')}:</strong> {t('redeemForDiscountsDesc')}</li>
        <li><strong>{t('exclusiveOffersTitle')}:</strong> {t('exclusiveOffersDesc')}</li>
      </ul>

      <p className="mt-4 text-lg">
        <strong>{t('whyChooseTitle')}</strong>
      </p>
      <p className="mt-2 text-lg">
        {t('whyChooseDesc')}
      </p>
    </section>
    <Footer/>
    </div>
  );
};

export default RidoMoneyPage;
