"use client";

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import driver from '@/assets/driver.png';
import booking from '@/assets/booking.png';
import { LoadScriptNext, Autocomplete } from '@react-google-maps/api';

// Declare the libraries array outside the component
const libraries: Library[] = ['places'];

export default function BookingSection() {
  const [currentLocation, setCurrentLocation] = useState<string | null>(null);
  const [destination, setDestination] = useState<string | null>(null);

  const router = useRouter();

  // Use refs to store the autocomplete instances
  const currentLocationRef = useRef<google.maps.places.Autocomplete | null>(null);
  const destinationRef = useRef<google.maps.places.Autocomplete | null>(null);

  const handlePlaceChanged = (autocompleteRef: React.MutableRefObject<google.maps.places.Autocomplete | null>, setter: React.Dispatch<React.SetStateAction<string | null>>) => {
    const place = autocompleteRef.current?.getPlace();
    setter(place?.formatted_address || null);
  };

  const handleSearch = () => {
    if (currentLocation && destination) {
      sessionStorage.setItem('source', currentLocation);
      sessionStorage.setItem('destination', destination);
      router.push('/pages/confirmation');
    }
  };

  return (
    <section className="relative w-full curved-bottom gradient-container flex flex-col items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${driver.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
        }}
      ></div>

      <div className="relative z-10 w-full rounded-lg">
        {/* Background layer with opacity */}
        <div className="absolute inset-0 bg-white opacity-30 rounded-lg"></div>

        {/* Content layer */}
        <div className="relative px-10 md:margin-100 z-20">
          {/* Heading */}
          <h1 className="md:text-4xl text-xl font-bold text-gray-900 text-center">
            Across all the cities in Bihar now
          </h1>

          {/* Input fields with Google Maps Autocomplete */}
          <LoadScriptNext googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ''} libraries={libraries}>
          <div className="flex flex-col md:flex-row justify-center items-center w-full bg-navy space-y-4 md:space-y-0 md:space-x-4 py-3 my-3">
            <Autocomplete
              onLoad={(autocomplete) => (currentLocationRef.current = autocomplete)}
              onPlaceChanged={() => handlePlaceChanged(currentLocationRef, setCurrentLocation)}
            >
              <input
                type="text"
                placeholder="Enter Source"
                className="border md:w-auto px-4 py-2 focus:outline-none"
              />
            </Autocomplete>

            <Autocomplete
              onLoad={(autocomplete) => (destinationRef.current = autocomplete)}
              onPlaceChanged={() => handlePlaceChanged(destinationRef, setDestination)}
            >
              <input
                type="text"
                placeholder="Enter Destination"
                className="border md:w-auto px-4 py-2 focus:outline-none"
              />
            </Autocomplete>

            <button 
              className="bg-yellow-500 text-black font-bold py-2 px-4 md:w-auto"
              onClick={handleSearch}
            >
              Search Rido Vehicle
            </button>
          </div>

          </LoadScriptNext>

        </div>
      </div>

      {/* Car and Character Image */}
      <div className="relative z-10 mt-8">
        <Image
          src={booking.src}
          alt="Booking Image"
          className="curved-bottom full-width"
          layout="responsive"
          width={500}
          height={300}
        />
      </div>
    </section>
  );
}
