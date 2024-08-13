import React from 'react';
import CloseButton from '@/components/CloseButton';
import { useTranslations } from 'next-intl';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

const TermsAndConditionsPage: React.FC = () => {
  const t = useTranslations('termsAndConditions');

  return (
    <div>
    <Navbar />
    <section className="relative text-justify p-8 md:px-32 bg-gradient-to-b from-white to-green-200">
      <CloseButton />
      <h2 className="mt-16 mb-8 text-center text-4xl font-bold">{t('title')}</h2>
      <p className="text-sm text-gray-500">{t('lastUpdated')}</p>

      <p className="mt-4 text-lg">
        {t('intro')}
      </p>

      <p className="mt-4 text-lg">
        {t('useGovernance')}
      </p>

      <h3 className="text-2xl font-semibold mt-6">{t('contentChanges')}</h3>
      <p className="mt-2 text-lg">
        {t('contentChangesDesc')}
      </p>

      <h3 className="text-2xl font-semibold mt-6">{t('accuracyLiability')}</h3>
      <p className="mt-2 text-lg">
        {t('accuracyLiabilityDesc1')}
      </p>
      <p className="mt-2 text-lg">
        {t('accuracyLiabilityDesc2')}
      </p>

      <h3 className="text-2xl font-semibold mt-6">{t('intellectualProperty')}</h3>
      <p className="mt-2 text-lg">
        {t('intellectualPropertyDesc1')}
      </p>
      <p className="mt-2 text-lg">
        {t('intellectualPropertyDesc2')}
      </p>

      <h3 className="text-2xl font-semibold mt-6">{t('unauthorizedUse')}</h3>
      <p className="mt-2 text-lg">
        {t('unauthorizedUseDesc')}
      </p>

      <h3 className="text-2xl font-semibold mt-6">{t('externalLinks')}</h3>
      <p className="mt-2 text-lg">
        {t('externalLinksDesc1')}
      </p>
      <p className="mt-2 text-lg">
        {t('externalLinksDesc2')}
      </p>

      <h3 className="text-2xl font-semibold mt-6">{t('governingLaw')}</h3>
      <p className="mt-2 text-lg">
        {t('governingLawDesc')}
      </p>

      <h3 className="text-2xl font-semibold mt-6">{t('transactionLiability')}</h3>
      <p className="mt-2 text-lg">
        {t('transactionLiabilityDesc')}
      </p>
    </section>
    <Footer/>
    </div>
  );
};

export default TermsAndConditionsPage;
