import React from 'react';
import Image from 'next/image';
import customerImage from '../assets/customer.jpg'; // replace with actual image paths
import driverImage from '../assets/driver1.jpg';
import parcelImage from '../assets/parcel.jpg';
import businessImage from '../assets/business.jpg';

const RidoForEveryone = () => {
  const features = [
    {
      image: <Image src={customerImage} alt="Rido Customer" layout="responsive" width={100} height={100} className="rounded-3xl" />,
      title: 'Rido Customer',
      description: 'Enjoy our services as a valued customer.',
    },
    {
      image: <Image src={driverImage} alt="Rido Driver" layout="responsive" width={100} height={100} className="rounded-3xl" />,
      title: 'Rido Driver',
      description: 'Make your earning by joining as a driver.',
    },
    {
      image: <Image src={parcelImage} alt="Rido Parcel" layout="responsive" width={100} height={100} className="rounded-3xl" />,
      title: 'Rido Parcel',
      description: 'Deliver parcels efficiently with Rido.',
    },
    {
      image: <Image src={businessImage} alt="Rido Business" layout="responsive" width={100} height={100} className="rounded-3xl" />,
      title: 'Rido Business',
      description: 'Make money by renting out your cabs.',
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4 text-center text-white">Rido for Everyone</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-2 rounded-3xl shadow-md flex flex-col justify-between">
            <div className="flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-medium text-center">{feature.title}</h3>
                <p className="text-sm text-gray-600 text-center">{feature.description}</p>
              </div>
              <div className="mt-auto  w-full">
                {feature.image}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RidoForEveryone;
