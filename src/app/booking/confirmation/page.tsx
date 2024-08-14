"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';

const ConfirmationPage = () => {
  const [bookingData, setBookingData] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    // Get booking data from local storage
    const data = localStorage.getItem('bookingData');
    if (data) {
      setBookingData(JSON.parse(data));
      localStorage.removeItem('bookingData'); // Clear data after use
    } else {
      router.push('/'); // Redirect to home if no data is found
    }
  }, [router]);

  const handleConfirmBooking = () => {
    // Handle booking confirmation logic here
    // Example: Call an API to confirm the booking
    router.push('/booking/success'); // Redirect to a success page
  };

  return (
    <div>
      <section className="relative text-justify p-8 md:px-32 gradient-up">
        <h2 className="mt-16 mb-8 text-center text-4xl font-bold">Booking Confirmation</h2>
        <p className="text-center text-lg">Please review your booking details.</p>
        <div className="text-center mt-4">
          <p><strong>Source:</strong> {bookingData.source}</p>
          <p><strong>Destination:</strong> {bookingData.destination}</p>
          <p><strong>Estimated Fare:</strong> ₹{bookingData.fare}</p>
          <p><strong>Name:</strong> {bookingData.name}</p>
          <p><strong>Email:</strong> {bookingData.email}</p>
          <p><strong>Phone:</strong> {bookingData.phone}</p>
          <button
            onClick={handleConfirmBooking}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
          >
            Confirm Booking
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ConfirmationPage;
