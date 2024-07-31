import React from 'react';
import CloseButton from '@/components/CloseButton';

const RidoParcelPage = () => {
  return (
    <section className="relative text-justify p-8 px-32 bg-gradient-to-b from-white to-green-200">
    <CloseButton />
    <h2 className="mt-16 mb-8 text-center text-4xl font-bold">Rido Parcel</h2>

      <p className="mt-4 text-lg">
        Rido Parcel offers cab owners a seamless way to diversify their services and boost their income. Our platform is designed to facilitate easy integration, allowing you to manage both passenger bookings and parcel deliveries efficiently. By partnering with RidoParcel, you gain access to a vast network of customers who rely on timely and reliable parcel delivery services. This dual functionality ensures that your vehicle is always in demand, providing a steady flow of business opportunities throughout the day.
      </p>

      <p className="mt-4 text-lg">
        Joining Rido Parcel means you are part of a trusted and innovative brand committed to excellence and customer satisfaction. We offer comprehensive support, from easy onboarding to ongoing assistance, ensuring you have all the tools and resources needed to succeed. Our user-friendly app makes managing deliveries straightforward, with features like real-time tracking, route optimization, and secure payment processing.
      </p>

      <h3 className="mt-8 mb-4 text-center text-2xl font-bold">Contact us for business enquiries</h3>
      
      <form className="flex flex-col items-center space-y-4">
        <input type="text" name="firstName" placeholder="First name" className="w-full p-2 border rounded" />
        <input type="text" name="address" placeholder="Address" className="w-full p-2 border rounded" />
        <input type="text" name="mobileNumber" placeholder="Mobile no." className="w-full p-2 border rounded" />
        <input type="email" name="email" placeholder="Email id" className="w-full p-2 border rounded" />
        <button type="submit" className="px-4 py-2 text-white bg-yellow-500 rounded">Submit</button>
      </form>
    </section>
  );
};

export default RidoParcelPage;
