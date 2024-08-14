"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { CognitoUserSession } from 'amazon-cognito-identity-js';
import { userPool } from '../../../cognito';
import CloseButton from '@/components/CloseButton';
import Footer from '@/components/Footer';
import { Autocomplete, LoadScriptNext } from '@react-google-maps/api';

const GOOGLE_MAPS_API_KEY = 'AIzaSyBY4d3nTNA11x-Ek3H4qlhFKX_GCfjd67o';

const BookingPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    source: '',
    destination: '',
  });
  const [userSessionData, setUserSessionData] = useState({
    fullName: '',
    email: '',
    mobile: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [estimatedFare, setEstimatedFare] = useState<number | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [initialData, setInitialData] = useState({ source: '', destination: '' });

  const sourceRef = useRef<google.maps.places.Autocomplete | null>(null);
  const destinationRef = useRef<google.maps.places.Autocomplete | null>(null);

  useEffect(() => {
    const currentUser = userPool.getCurrentUser();
    if (currentUser) {
      currentUser.getSession((err: any, session: CognitoUserSession | null) => {
        if (err || !session?.isValid()) {
          router.push(`/auth/login?returnTo=${encodeURIComponent(window.location.pathname)}`);
        } else {
          const userAttributes = session.getIdToken().payload;
          setUserSessionData({
            fullName: userAttributes?.name || '',
            email: userAttributes?.email || '',
            mobile: userAttributes?.phone_number || '',
          });
        }
      });
    } else {
      router.push(`/auth/login?returnTo=${encodeURIComponent(window.location.pathname)}`);
    }
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    if (isConfirmed) {
      updateFare();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { source, destination } = formData;

    if (!source || !destination) {
      setError('Please fill in all fields.');
      return;
    }

    setInitialData({ source, destination });
    updateFare();
    setIsConfirmed(false);
    setError(null);
  };

  const updateFare = () => {
    const fare = Math.floor(Math.random() * 100) + 200;
    setEstimatedFare(fare);
  };

  const handleConfirm = () => {
    if (formData.source !== initialData.source || formData.destination !== initialData.destination) {
      updateFare();
    }
    setIsConfirmed(true);

    sessionStorage.setItem('bookingData', JSON.stringify({
      ...formData,
      fare: estimatedFare,
      name: userSessionData.fullName,
      email: userSessionData.email,
      phone: userSessionData.mobile,
    }));

    router.push('/booking/confirmation');
  };

  const setSourceRef = (autocomplete: google.maps.places.Autocomplete | null) => {
    sourceRef.current = autocomplete;
  };

  const setDestinationRef = (autocomplete: google.maps.places.Autocomplete | null) => {
    destinationRef.current = autocomplete;
  };

  return (
    <>
      <LoadScriptNext googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={['places']}>
        <div>
          <section className="relative text-justify p-8 md:px-32 gradient-up">
            <CloseButton />
            <h2 className="mt-16 mb-8 text-center text-4xl font-bold">Book a Cab</h2>
            <p className="mt-4 text-lg">Enter your booking details.</p>
            {error && <p className="text-red-500 text-center">{error}</p>}
            {estimatedFare !== null && !isConfirmed && (
              <div className="text-center">
                <p className="text-lg font-semibold">Estimated Fare: ₹{estimatedFare}</p>
              </div>
            )}
            {isConfirmed && (
              <p className="text-center text-lg font-semibold">Fare Confirmed: ₹{estimatedFare}</p>
            )}
            <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
              <div className="flex justify-center">
                <label className="block text-lg md:w-1/2">
                  Source
                  {typeof window !== 'undefined' && window.google && (
                    <Autocomplete
                      onLoad={setSourceRef}
                      onPlaceChanged={() => {
                        const place = sourceRef.current?.getPlace();
                        if (place?.formatted_address) {
                          setFormData((prevData) => ({
                            ...prevData,
                            source: place.formatted_address || '', // Fallback value to ensure `source` is always a string
                          }));
                        }
                      }}
                    >
                      <input
                        type="text"
                        name="source"
                        value={formData.source}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                      />
                    </Autocomplete>
                  )}
                </label>
              </div>
              <div className="flex justify-center">
                <label className="block text-lg md:w-1/2">
                  Destination
                  {typeof window !== 'undefined' && window.google && (
                    <Autocomplete
                      onLoad={setDestinationRef}
                      onPlaceChanged={() => {
                        const place = destinationRef.current?.getPlace();
                        if (place?.formatted_address) {
                          setFormData((prevData) => ({ ...prevData, destination: place.formatted_address }));
                        }
                      }}
                    >
                      <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                      />
                    </Autocomplete>
                  )}
                </label>
              </div>
              <div className="flex justify-center space-x-4">
                <button type="submit" className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md">
                  Check Fare
                </button>
                <button
                  type="button"
                  onClick={handleConfirm}
                  className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
                >
                  Confirm Fare
                </button>
              </div>
            </form>
          </section>
          <Footer />
        </div>
      </LoadScriptNext>
    </>
  );
};

export default BookingPage;
