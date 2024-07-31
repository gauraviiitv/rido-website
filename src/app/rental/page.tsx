import React from 'react';
import CloseButton from '@/components/CloseButton';

const RidoRentalPage = () => {
  return (
    <section className="relative text-justify p-8 px-32 bg-gradient-to-b from-white to-green-200">
    <CloseButton />
    <h2 className="mt-16 mb-8 text-center text-4xl font-bold">Rido Rental</h2>

      <p className="mt-4 text-lg">
        With our user-friendly online booking system, renting a cab has never been easier. Reserve your vehicle in just a few clicks!
      </p>

      <h3 className="mt-8 mb-4 text-2xl font-bold">How It Works</h3>
      
      <p className="mt-4 text-lg">
        <strong>Step 1: Choose Your Vehicle</strong><br />
        Browse our extensive fleet and select the car that best suits your needs.
      </p>

      <p className="mt-4 text-lg">
        <strong>Step 2: Book Online</strong><br />
        Fill in your details and choose your rental dates. Our secure online booking system makes the process quick and easy.
      </p>

      <p className="mt-4 text-lg">
        <strong>Step 3: Pick Up Your Car</strong><br />
        Visit our location or opt for our convenient delivery service. We’ll have your vehicle ready and waiting for you.
      </p>

      <p className="mt-4 text-lg">
        <strong>Step 4: Enjoy Your Ride</strong><br />
        Whether you're driving around the city or hitting the open road, enjoy the freedom and convenience of your rental.
      </p>

      <h3 className="mt-8 mb-4 text-2xl font-bold">Fleet Options</h3>
      
      <p className="mt-4 text-lg">
        <strong>Economy Cars:</strong> Fuel-efficient and perfect for city driving.<br />
        <strong>Luxury Sedans:</strong> Travel in style and comfort.<br />
        <strong>SUVs:</strong> Spacious and ideal for family trips or group outings.<br />
        <strong>Vans:</strong> Great for moving large groups or transporting goods.
      </p>
    </section>
  );
};

export default RidoRentalPage;
