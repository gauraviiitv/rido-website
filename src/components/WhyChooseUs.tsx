import React from 'react';
import Image from 'next/image';
import tickIcon from '../assets/tick.png';
import rupeeIcon from '../assets/rupee.png';
import handIcon from '../assets/hand-raised.png';
import carIcon from '../assets/car1.png';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Image src={tickIcon} alt="Safety First" className="h-12 w-12" />,
      title: 'Safety First',
      description: 'Expert drivers, Regular vehicle maintenance and hygiene standards.',
    },
    {
      icon: <Image src={rupeeIcon} alt="Transparent Pricing" className="h-12 w-12" />,
      title: 'Transparent Pricing',
      description: 'Competitive and transparent pricing with no hidden charges.',
    },
    {
      icon: <Image src={handIcon} alt="Reliable Service" className="h-12 w-12" />,
      title: 'Reliable Service',
      description: 'We offer 24/7 service, so you can book a ride anytime, anywhere.',
    },
    {
      icon: <Image src={carIcon} alt="Variety of Options" className="h-12 w-12" />,
      title: 'Variety of Options',
      description: 'We have a range of vehicles to suit your needs.',
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4 text-white">Why Choose Us?</h2>
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
