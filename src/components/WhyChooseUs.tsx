import React from 'react';
import safetyIcon from 'path/to/safety-icon.png';
import pricingIcon from 'path/to/pricing-icon.png';
import reliableServiceIcon from 'path/to/reliable-service-icon.png';
import varietyOptionsIcon from 'path/to/variety-options-icon.png';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <img src={safetyIcon} alt="Safety First" className="h-6 w-6" />,
      title: 'Safety First',
      description: 'Expert drivers, Regular vehicle maintenance and hygiene standards.',
    },
    {
      icon: <img src={pricingIcon} alt="Transparent Pricing" className="h-6 w-6" />,
      title: 'Transparent Pricing',
      description: 'Competitive and transparent pricing with no hidden charges.',
    },
    {
      icon: <img src={reliableServiceIcon} alt="Reliable Service" className="h-6 w-6" />,
      title: 'Reliable Service',
      description: 'We offer 24/7 service, so you can book a ride anytime, anywhere.',
    },
    {
      icon: <img src={varietyOptionsIcon} alt="Variety of Options" className="h-6 w-6" />,
      title: 'Variety of Options',
      description: 'We have a range of vehicles to suit your needs.',
    },
  ];

  return (
    <div className="bg-gray-100 p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div key={feature.title} className="flex flex-col items-center">
            {feature.icon}
            <h3 className="text-lg font-medium mt-2">{feature.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
