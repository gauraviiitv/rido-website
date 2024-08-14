"use client";
// BookingPage.tsx
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation'; // Keep this import
import { CognitoUserSession } from 'amazon-cognito-identity-js';
import { userPool } from '../../../cognito'; // Adjust path if necessary
import CloseButton from '@/components/CloseButton';
import Footer from '@/components/Footer';
import { Autocomplete, LoadScript } from '@react-google-maps/api';

// Constants
const GOOGLE_MAPS_API_KEY = 'AIzaSyBY4d3nTNA11x-Ek3H4qlhFKX_GCfjd67o'; // Replace with your Google Maps API key

const BookingPage = () => {
  const router = useRouter(); // Keep this
  const [isLoading, setIsLoading] = useState(true);
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

  // Refs for Autocomplete
  const sourceRef = useRef<google.maps.places.Autocomplete>(null);
  const destinationRef = useRef<google.maps.places.Autocomplete>(null);

  useEffect(() => {
    const currentUser = userPool.getCurrentUser();
    if (currentUser) {
      currentUser.getSession((err: any, session: CognitoUserSession | null) => {
        if (err || !session?.isValid()) {
          // Redirect to login with returnTo query parameter
          router.push(`/auth/login?returnTo=${encodeURIComponent(window.location.pathname)}`);
        } else {
          const userAttributes = session.getIdToken().payload;
          setUserSessionData({
            fullName: userAttributes?.name || '',
            email: userAttributes?.email || '',
            mobile: userAttributes?.phone_number || '',
          });
          setIsLoading(false); // User is authenticated
        }
      });
    } else {
      // Redirect to login with returnTo query parameter
      router.push(`/auth/login?returnTo=${encodeURIComponent(window.location.pathname)}`);
    }
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    if (isConfirmed) {
      // Recalculate fare if data changes after confirmation
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

    // Save initial data for comparison
    setInitialData({ source, destination });

    // Display a random estimated fare
    updateFare();
    setIsConfirmed(false); // Reset confirmation status
    setError(null);
  };

  const updateFare = () => {
    // Display a random estimated fare
    const Fare = Math.floor(Math.random() * 100) + 200; // Random fare between $10 and $60
    setEstimatedFare(Fare);
  };

  const handleConfirm = () => {
    // Check if there is a change in source or destination
    if (formData.source !== initialData.source || formData.destination !== initialData.destination) {
      updateFare();
    }
    setIsConfirmed(true);
  
    // Store data in local storage
    localStorage.setItem('bookingData', JSON.stringify({
      ...formData,
      fare: estimatedFare,
      name: userSessionData.fullName,
      email: userSessionData.email,
      phone: userSessionData.mobile,
    }));
  
    // Navigate to confirmation page
    router.push('/booking/confirmation');
  };
  
  if (isLoading) {
    return <div>Loading...</div>; // Optional loading state
  }

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={['places']}>
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
                <Autocomplete
                  onLoad={(autocomplete) => (sourceRef.current = autocomplete)}
                  onPlaceChanged={() => {
                    const place = sourceRef.current?.getPlace();
                    if (place?.formatted_address) {
                      setFormData((prevData) => ({ ...prevData, source: place.formatted_address }));
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
              </label>
            </div>
            <div className="flex justify-center">
              <label className="block text-lg md:w-1/2">
                Destination
                <Autocomplete
                  onLoad={(autocomplete) => (destinationRef.current = autocomplete)}
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
    </LoadScript>
  );
};

export default BookingPage;
