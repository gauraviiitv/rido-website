"use client"; // Add this directive at the top

import React from 'react';
import CloseButton from '@/components/CloseButton';
import { useTranslations } from 'next-intl';

const AboutUsPage = () => {
  const t = useTranslations('aboutUs');

  return (
    <section className="relative text-justify p-8 md:px-32 bg-gradient-to-b from-white to-green-200">
      <CloseButton />
      <h2 className="mt-16 mb-8 text-center text-4xl font-bold">{t('aboutUs')}</h2>
      <h3 className="mt-4 text-2xl font-semibold">{t('welcomeToRido')}</h3>
      <p className="mt-2">
        {t('intro')}
      </p>
      
      <h3 className="mt-4 text-2xl font-semibold">{t('ourStory')}</h3>
      <p className="mt-2">
        {t('ourStoryText')}
      </p>
      
      <h3 className="mt-4 text-2xl font-semibold">{t('ourFleet')}</h3>
      <p className="mt-2">
        {t('ourFleetText')}
      </p>
      
      <h3 className="mt-4 text-2xl font-semibold">{t('ourTeam')}</h3>
      <p className="mt-2">
        {t('ourTeamText')}
      </p>
      
      <h3 className="mt-4 text-2xl font-semibold">{t('ourCommitment')}</h3>
      <p className="mt-2">
        {t('ourCommitmentText')}
      </p>
    </section>
  );
};

export default AboutUsPage;
