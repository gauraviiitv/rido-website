import React from 'react';
import './HomeSection.css'; // Make sure to import the CSS file
import Image from 'next/image';
import welcomeImage from '@/assets/Welcome.png';

const HomeSection = () => (
  <section className="md:pt-20 pt-16 curved-bottom gradient-background">
    <div className="flex md:mb-2 md:pt-2 items-center justify-center">
      <p className="md:text-3xl text-xl text-white font-bold">Welcome to Rido</p>
    </div>
    <div className="flex md:pt-2 justify-center">
      <p className="text-white text-xs md:text-sm pb-2 md:mx-16 lg:mx-32 text-center">
        At Rido, we strive to provide you with the best transportation experience.
        Whether you need a ride to the airport, a day of sightseeing, or a
        comfortable commute to your next business meeting, our fleet of
        well-maintained vehicles and professional drivers are here to serve you.
      </p>
    </div>
    <div className="flex justify-center">
      <Image src={welcomeImage} alt="Welcome" className='curved-bottom full-width'/>
    </div>
  </section>
);

export default HomeSection;
