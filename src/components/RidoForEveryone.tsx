import React from 'react';
import Image from 'next/image';
import customerImage from '../assets/customer.jpg'; // replace with actual image paths
import driverImage from '../assets/driver1.jpg';
import parcelImage from '../assets/parcel.jpg';
import businessImage from '../assets/business.jpg';
import journeyImage from '../assets/journey.png';
import { useTranslations } from 'next-intl';

const RidoForEveryone = () => {
  const t = useTranslations('ridoForEveryone');

  const features = [
    {
      image: <Image src={customerImage} alt={t('customerAlt')} layout="responsive" width={100} height={100} className="rounded-3xl" />,
      title: t('customerTitle'),
      description: t('customerDescription'),
    },
    {
      image: <Image src={driverImage} alt={t('driverAlt')} layout="responsive" width={100} height={100} className="rounded-3xl" />,
      title: t('driverTitle'),
      description: t('driverDescription'),
    },
    {
      image: <Image src={parcelImage} alt={t('parcelAlt')} layout="responsive" width={100} height={100} className="rounded-3xl" />,
      title: t('parcelTitle'),
      description: t('parcelDescription'),
    },
    {
      image: <Image src={businessImage} alt={t('businessAlt')} layout="responsive" width={100} height={100} className="rounded-3xl" />,
      title: t('businessTitle'),
      description: t('businessDescription'),
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-center text-white underline">{t('title')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-2 rounded-3xl shadow-md flex flex-col justify-between">
            <div className="flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-medium text-center">{feature.title}</h3>
                <p className="text-sm text-gray-600 text-center">{feature.description}</p>
              </div>
              <div className="mt-auto w-full">
                {feature.image}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8 p-0">
        <Image src={journeyImage} alt={t('journeyAlt')} className="w-full" />
      </div>
    </div>
  );
};

export default RidoForEveryone;
