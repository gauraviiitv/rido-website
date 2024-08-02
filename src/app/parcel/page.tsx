import React from 'react';
import CloseButton from '@/components/CloseButton';

const RidoParcelPage = () => {
  return (
    <section className="relative text-justify p-8 md:px-32 bg-gradient-to-b from-white to-green-200">
    <CloseButton />
    <h2 className="mt-16 mb-8 text-center text-4xl font-bold">Rido Parcel</h2>

      <p className="mt-4 text-lg">
        Rido Parcel offers cab owners a seamless way to diversify their services and boost their income. Our platform is designed to facilitate easy integration, allowing you to manage both passenger bookings and parcel deliveries efficiently. By partnering with RidoParcel, you gain access to a vast network of customers who rely on timely and reliable parcel delivery services. This dual functionality ensures that your vehicle is always in demand, providing a steady flow of business opportunities throughout the day.
      </p>

      <p className="mt-4 text-lg">
        Joining Rido Parcel means you are part of a trusted and innovative brand committed to excellence and customer satisfaction. We offer comprehensive support, from easy onboarding to ongoing assistance, ensuring you have all the tools and resources needed to succeed. Our user-friendly app makes managing deliveries straightforward, with features like real-time tracking, route optimization, and secure payment processing.
      </p>

      <h3 className="mt-8 mb-4 text-center text-2xl font-bold">Contact us for business enquiries</h3>
      
      <form className="mt-4 space-y-4">
        <div className="flex justify-center">
          <label className="block text-lg md:w-1/2">
            Full name
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </label>
        </div>
        <div className="flex justify-center">
          <label className="block text-lg md:w-1/2">
            Address
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </label>
        </div>
        <div className="flex justify-center">
          <label className="block text-lg md:w-1/2">
            Mobile no.
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </label>
        </div>
        <div className="flex justify-center">
          <label className="block text-lg md:w-1/2">
            Email id
            <input type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </label>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default RidoParcelPage;
