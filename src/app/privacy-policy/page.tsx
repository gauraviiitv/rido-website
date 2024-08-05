import React from 'react';
import CloseButton from '@/components/CloseButton';
import { useTranslations } from 'next-intl';

const PrivacyPolicyPage: React.FC = () => {
  const t = useTranslations('privacyPolicy');

  return (
    <section className="relative text-justify p-8 md:px-32 bg-gradient-to-b from-white to-green-200">
      <CloseButton />
      <h2 className="mt-16 mb-8 text-center text-4xl font-bold">{t('title')}</h2>
      <p className="text-sm text-gray-500">{t('lastUpdated')}</p>
      <p className="mt-4 text-lg">
        {t('intro1')}
      </p>
      <p className="mt-4 text-lg">
        {t('intro2')}
      </p>
      <p className="mt-4 text-lg">
        {t('intro3')}
      </p>

      <h3 className="text-2xl font-semibold mt-6">{t('infoCollectionTitle')}</h3>
      <ul className="list-disc list-inside mt-2 text-lg">
        <li>{t('infoName')}</li>
        <li>{t('infoContact')}</li>
        <li>{t('infoDemographic')}</li>
        <li>{t('infoOther')}</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6">{t('useOfInfoTitle')}</h3>
      <p className="mt-2 text-lg">
        {t('useOfInfoIntro')}
      </p>
      <ul className="list-disc list-inside mt-2 text-lg">
        <li>{t('useOfInfoInternal')}</li>
        <li>{t('useOfInfoImprovement')}</li>
        <li>{t('useOfInfoPromotional')}</li>
        <li>{t('useOfInfoMarketResearch')}</li>
      </ul>

      <p className="mt-4 text-lg">
        {t('securityInfo')}
      </p>

      <h3 className="text-2xl font-semibold mt-6">{t('cookiesTitle')}</h3>
      <p className="mt-2 text-lg">
        {t('cookiesIntro1')}
      </p>
      <p className="mt-2 text-lg">
        {t('cookiesIntro2')}
      </p>
      <p className="mt-2 text-lg">
        {t('cookiesIntro3')}
      </p>
      <p className="mt-2 text-lg">
        {t('cookiesIntro4')}
      </p>

      <h3 className="text-2xl font-semibold mt-6">{t('controlTitle')}</h3>
      <p className="mt-2 text-lg">
        {t('controlIntro')}
      </p>
      <ul className="list-disc list-inside mt-2 text-lg">
        <li>{t('controlDirectMarketing')}</li>
        <li>{t('controlChangeMind')}</li>
      </ul>
      <p className="mt-2 text-lg">
        {t('controlNoSell')}
      </p>
      <p className="mt-2 text-lg">
        {t('controlUpdateInfo')}
      </p>
    </section>
  );
};

export default PrivacyPolicyPage;
