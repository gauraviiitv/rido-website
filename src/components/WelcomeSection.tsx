import WhyChooseUs from './WhyChooseUs';
import React from 'react';

const WelcomeSection = () => (
  <section className="p-8">
    <h1 className="text-3xl font-bold">Welcome to Rido</h1>
    <p className="mt-4 text-lg">
      At Rido, we strive to provide you with the best transportation experience.
      Whether you need a ride to the airport, a day of sightseeing, or a
      comfortable commute to your next business meeting, our fleet of
      well-maintained vehicles and professional drivers are here to serve you.
    </p>
    <WhyChooseUs />
  </section>
);

export default WelcomeSection;
