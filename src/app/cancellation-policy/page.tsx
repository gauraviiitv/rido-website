'use client';
import React from 'react';
import CloseButton from '@/components/CloseButton';
import { useTranslations } from 'next-intl';

const CancellationAndRefundPolicyPage: React.FC = () => {
  const t = useTranslations('cancellationRefundPolicy');

  return (
    <section className="relative text-justify p-8 md:px-32 bg-gradient-to-b from-white to-green-200">
      <CloseButton />
      <h2 className="mt-16 mb-8 text-center text-4xl font-bold">{t('title')}</h2>
      <p className="text-sm text-gray-500">{t('lastUpdated')}</p>

      <p className="mt-4 text-lg">
        {t('introduction')}
      </p>

      <h3 className="text-2xl font-semibold mt-6">{t('cancellationRequests')}</h3>
      <p className="mt-2 text-lg">
        {t('cancellationDetails1')}
      </p>
      <p className="mt-2 text-lg">
        {t('cancellationDetails2')}
      </p>

      <h3 className="text-2xl font-semibold mt-6">{t('damagedDefectiveItems')}</h3>
      <p className="mt-2 text-lg">
        {t('damagedDefectiveDetails')}
      </p>

      <h3 className="text-2xl font-semibold mt-6">{t('productExpectations')}</h3>
      <p className="mt-2 text-lg">
        {t('productExpectationsDetails')}
      </p>

      <h3 className="text-2xl font-semibold mt-6">{t('warrantyIssues')}</h3>
      <p className="mt-2 text-lg">
        {t('warrantyDetails')}
      </p>

      <h3 className="text-2xl font-semibold mt-6">{t('refundProcessing')}</h3>
      <p className="mt-2 text-lg">
        {t('refundProcessingDetails')}
      </p>
    </section>
  );
};

export default CancellationAndRefundPolicyPage;
