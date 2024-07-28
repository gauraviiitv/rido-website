import React from 'react';
import './HomeSection.css'; // Make sure to import the CSS file

const HomeSection = () => (
  <section className="pt-20 gradient-background">
    <div className="flex pt-2 items-center justify-center">
      <h1 className="text-3xl text-white font-bold">Welcome to Rido</h1> {/* Heading font size unchanged */}
    </div>
    <div className="flex pt-2 justify-center">
      <p className="text-white text-sm mx-32 text-center">
        At Rido, we strive to provide you with the best transportation experience.
        Whether you need a ride to the airport, a day of sightseeing, or a
        comfortable commute to your next business meeting, our fleet of
        well-maintained vehicles and professional drivers are here to serve you.
      </p>
    </div>
  </section>
);

export default HomeSection;
