import React from 'react';
import Image from 'next/image';
import journeyImage from '../assets/auto.jpg'; // replace with the actual path to the image

const JourneyBanner = () => {
  return (
    <div className="relative bg-green1 h-48 flex items-center justify-between px-4">
      <div className="w-2/3 h-full flex items-center justify-center">
        <h2 className="text-yellow-100 mx-32 text-center text-4xl md:text-3xl lg:text-4xl font-bold leading-tight">Book Your Next Journey Online</h2>
      </div>
      <div className="relative w-1/3 h-full">
        <Image src={journeyImage} alt="Journey Image" layout="fill" objectFit="cover" objectPosition="right center" />
      </div>
    </div>
  );
};

export default JourneyBanner;
