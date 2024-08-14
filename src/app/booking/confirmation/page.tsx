"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';

const ConfirmationPage = () => {
  const [bookingData, setBookingData] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    try {
      const data = sessionStorage.getItem('bookingData');
      console.log('Raw booking data:', data);

      if (data) {
        const parsedData = JSON.parse(data);
        console.log('Parsed booking data:', parsedData);

        setBookingData(parsedData);
      } else {
        console.log('No booking data found, redirecting to home');
        router.push('/'); 
      }
    } catch (error) {
      console.error('Error parsing booking data:', error);
      router.push('/'); 
    }
  }, [router]);

  const handleConfirmBooking = async () => {
    try {
      const response = await fetch('https://gbby8996ja.execute-api.ap-south-1.amazonaws.com/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        alert('Booking confirmation email sent successfully.');
        sessionStorage.removeItem('bookingData');
        router.push('/booking/success');
      } else {
        alert('Failed to send booking confirmation email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred while sending the booking confirmation email.');
    }
  };

  return (
    <div>
      <section className="relative text-justify p-8 md:px-32 gradient-up">
        <h2 className="mt-16 mb-8 text-center text-4xl font-bold">Booking Confirmation</h2>
        <p className="text-center text-lg">Please review your booking details.</p>
        <div className="text-center mt-4">
          <p><strong>Source:</strong> {bookingData?.source || 'N/A'}</p>
          <p><strong>Destination:</strong> {bookingData?.destination || 'N/A'}</p>
          <p><strong>Estimated Fare:</strong> ₹{bookingData?.fare || 'N/A'}</p>
          <p><strong>Name:</strong> {bookingData?.name || 'N/A'}</p>
          <p><strong>Email:</strong> {bookingData?.email || 'N/A'}</p>
          <p><strong>Phone:</strong> {bookingData?.phone || 'N/A'}</p>
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
