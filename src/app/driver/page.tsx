'use client';
import React from 'react';
import CloseButton from '@/components/CloseButton';
import { useTranslations } from 'next-intl';

const RidoDriverPage: React.FC = () => {
  const t = useTranslations('ridoDriver');

  return (
    <section className="relative text-justify p-8 md:px-32 bg-gradient-to-b from-white to-green-200">
      <CloseButton />
      <h2 className="mt-16 mb-8 text-center text-4xl font-bold">{t('title')}</h2>
      <p className="mt-4 text-lg">
        {t('intro')}
      </p>

      <h3 className="text-xl font-semibold mt-4">{t('whyJoin')}</h3>
      
      <h4 className="text-lg font-semibold mt-2">{t('competitiveEarnings.title')}</h4>
      <p>
        {t('competitiveEarnings.details1')}<br />
        {t('competitiveEarnings.details2')}
      </p>
      
      <h4 className="text-lg font-semibold mt-2">{t('flexibleScheduling.title')}</h4>
      <p>
        {t('flexibleScheduling.details1')}<br />
        {t('flexibleScheduling.details2')}
      </p>
      
      <h4 className="text-lg font-semibold mt-2">{t('advancedTechnology.title')}</h4>
      <p>
        {t('advancedTechnology.details1')}<br />
        {t('advancedTechnology.details2')}
      </p>
      
      <h4 className="text-lg font-semibold mt-2">{t('extensiveCustomerBase.title')}</h4>
      <p>
        {t('extensiveCustomerBase.details1')}<br />
        {t('extensiveCustomerBase.details2')}
      </p>
      
      <h4 className="text-lg font-semibold mt-2">{t('safetyAndSecurity.title')}</h4>
      <p>
        {t('safetyAndSecurity.details1')}<br />
        {t('safetyAndSecurity.details2')}
      </p>
      
      <h4 className="text-lg font-semibold mt-2">{t('communityAndSupport.title')}</h4>
      <p>
        {t('communityAndSupport.details1')}<br />
        {t('communityAndSupport.details2')}
      </p>
    </section>
  );
};

export default RidoDriverPage;
