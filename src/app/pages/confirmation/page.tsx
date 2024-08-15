"use client";

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CognitoUserSession } from 'amazon-cognito-identity-js';
import { userPool } from '../../../cognito';
import driverImage from '@/assets/driver.png';
import Navbar from '@/components/NavBar';
import CloseButton from '@/components/CloseButton';
import Footer from '@/components/Footer';
import logo1 from '@/assets/logo1.png';
import { LoadScript, Autocomplete } from '@react-google-maps/api';

export default function Booking() {
  const router = useRouter();

  const [userSessionData, setUserSessionData] = useState({
    fullName: '',
    email: '',
    mobile: '',
  });

  const [source, setSource] = useState<string | null>('');
  const [destination, setDestination] = useState<string | null>('');

  const sourceRef = useRef<google.maps.places.Autocomplete | null>(null);
  const destinationRef = useRef<google.maps.places.Autocomplete | null>(null);

  // Function to check the current session
  const checkSession = () => {
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
  };

  useEffect(() => {
    // Check the session immediately when the component mounts
    checkSession();

    // Set up an interval to check the session every 30 seconds
    const intervalId = setInterval(checkSession, 30000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [router]);

  useEffect(() => {
    // Retrieve the source and destination from sessionStorage
    setSource(sessionStorage.getItem('source') || '');
    setDestination(sessionStorage.getItem('destination') || '');
  }, []);

  const handlePlaceChanged = (autocompleteRef: React.MutableRefObject<google.maps.places.Autocomplete | null>, setter: React.Dispatch<React.SetStateAction<string | null>>) => {
    const place = autocompleteRef.current?.getPlace();
    setter(place?.formatted_address || null);
  };

  return (
    <div>
      <Navbar />
      <div className="relative flex justify-center items-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${driverImage.src})` }}>
        <CloseButton />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <div className="relative z-10 w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg">
          {/* Source and Destination */}
          <div className="flex flex-col space-y-4 mb-4">
            <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ''} libraries={['places']} id="script-loader">
              <div className="flex flex-col space-y-4">
                <Autocomplete
                  onLoad={(autocomplete) => (sourceRef.current = autocomplete)}
                  onPlaceChanged={() => handlePlaceChanged(sourceRef, setSource)}
                >
                  <input
                    type="text"
                    value={source || ''}
                    onChange={(e) => setSource(e.target.value)}
                    placeholder="Enter Current location"
                    className="border px-4 py-2 focus:outline-none"
                  />
                </Autocomplete>

                <Autocomplete
                  onLoad={(autocomplete) => (destinationRef.current = autocomplete)}
                  onPlaceChanged={() => handlePlaceChanged(destinationRef, setDestination)}
                >
                  <input
                    type="text"
                    value={destination || ''}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Enter Destination"
                    className="border px-4 py-2 focus:outline-none"
                  />
                </Autocomplete>
              </div>
            </LoadScript>
          </div>

          {/* When dropdown */}
          <div className="flex justify-between items-center mb-4">
            <span>When</span>
            <select className="border px-4 py-2 focus:outline-none">
              <option>Now</option>
              <option>Later</option>
            </select>
          </div>

          {/* Rido Header */}
          <div className="text-center bg-navy text-xl font-bold mb-6">
          <Image src={logo1} height={100} width={150} alt={('ridoLogo')} className="h-16 mb-4" />
            <p>Smartest and affordable rides on your fingertips...</p>
          </div>

          {/* Available Rides */}
          <div className="bg-yellow-100 p-4 rounded-lg">
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Image src="/path/to/bike-icon.png" alt="Rido Bike" width={50} height={50} /> {/* Example icon */}
                  <div className="ml-4">
                    <h3 className="font-bold">Rido Bike</h3>
                    <p>₹510.15 | 2 mins away</p>
                  </div>
                </div>
                <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded">Book Bike</button>
              </div>
            </div>
            {/* Repeat for other vehicles... */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
