import React from 'react';
import Image from 'next/image';
import tickIcon from '../assets/tick.png';
import rupeeIcon from '../assets/rupee.png';
import handIcon from '../assets/hand-raised.png';
import carIcon from '../assets/car1.png';
import { useTranslations } from 'next-intl';

const WhyChooseUs = () => {
  const t = useTranslations('whyChooseUs');

  const features = [
    {
      icon: <Image src={tickIcon} alt={t('safetyFirstAlt')} className="h-12 w-12" />,
      title: t('safetyFirstTitle'),
      description: t('safetyFirstDescription'),
    },
    {
      icon: <Image src={rupeeIcon} alt={t('transparentPricingAlt')} className="h-12 w-12" />,
      title: t('transparentPricingTitle'),
      description: t('transparentPricingDescription'),
    },
    {
      icon: <Image src={handIcon} alt={t('reliableServiceAlt')} className="h-12 w-12" />,
      title: t('reliableServiceTitle'),
      description: t('reliableServiceDescription'),
    },
    {
      icon: <Image src={carIcon} alt={t('varietyOfOptionsAlt')} className="h-12 w-12" />,
      title: t('varietyOfOptionsTitle'),
      description: t('varietyOfOptionsDescription'),
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4 text-white">{t('title')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature) => (
          <div key={feature.title} className="bg-white p-4 rounded-2xl shadow-md flex items-center justify-center aspect-w-1 aspect-h-1">
            <div className="flex-shrink-0">
              {feature.icon}
            </div>
            <div className="ml-2">
              <h3 className="text-base font-medium">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
