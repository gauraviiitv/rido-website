"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CognitoUserSession } from "amazon-cognito-identity-js";
import { userPool } from "../../../cognito";
import bookingImage from "@/assets/booking1.jpg";
import Navbar from "@/components/NavBar";
import CloseButton from "@/components/CloseButton";
import Footer from "@/components/Footer";
import logo1 from "@/assets/logo1.png";
import bikeImage from "@/assets/vehicle/bike.png";
import scootyImage from "@/assets/vehicle/scooty.png";
import miniImage from "@/assets/vehicle/mini.png";
import suvImage from "@/assets/vehicle/suv.png";
import autoImage from "@/assets/vehicle/auto.png";
import { LoadScriptNext, Autocomplete } from "@react-google-maps/api";

const libraries: Library[] = ['places'];


export default function Booking() {
  const router = useRouter();

  const [userSessionData, setUserSessionData] = useState({
    fullName: "",
    email: "",
    mobile: "",
  });

  const [source, setSource] = useState<string | null>("");
  const [destination, setDestination] = useState<string | null>("");

  const sourceRef = useRef<google.maps.places.Autocomplete | null>(null);
  const destinationRef = useRef<google.maps.places.Autocomplete | null>(null);

  const checkSession = () => {
    const currentUser = userPool.getCurrentUser();
    if (currentUser) {
      currentUser.getSession(
        (err: any, session: CognitoUserSession | null) => {
          if (err || !session?.isValid()) {
            router.push(
              `/auth/login?returnTo=${encodeURIComponent(
                window.location.pathname
              )}`
            );
          } else {
            const userAttributes = session.getIdToken().payload;
            setUserSessionData({
              fullName: userAttributes?.name || "",
              email: userAttributes?.email || "",
              mobile: userAttributes?.phone_number || "",
            });
          }
        }
      );
    } else {
      router.push(
        `/auth/login?returnTo=${encodeURIComponent(window.location.pathname)}`
      );
    }
  };

  useEffect(() => {
    checkSession();
    const intervalId = setInterval(checkSession, 30000);
    return () => clearInterval(intervalId);
  }, [router]);

  useEffect(() => {
    setSource(sessionStorage.getItem("source") || "");
    setDestination(sessionStorage.getItem("destination") || "");
  }, []);

  const handlePlaceChanged = (
    autocompleteRef: React.MutableRefObject<google.maps.places.Autocomplete | null>,
    setter: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    const place = autocompleteRef.current?.getPlace();
    setter(place?.formatted_address || null);
  };

  return (
    <div>
      <Navbar />
      <div
        className="p-8 md:px-32 relative flex justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bookingImage.src})` }}
      >
        <CloseButton />
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg">
          <div className="flex flex-col space-y-4 mb-4">
          <LoadScriptNext googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ''} libraries={libraries}>
              <div className="flex w-full flex-col space-y-4">
                <div className="flex flex-col">
                  <label htmlFor="source" className="mb-1 font-bold text-lg">
                    From
                  </label>
                  <Autocomplete
                    onLoad={(autocomplete) => (sourceRef.current = autocomplete)}
                    onPlaceChanged={() =>
                      handlePlaceChanged(sourceRef, setSource)
                    }
                  >
                    <input
                      id="source"
                      type="text"
                      value={source || ""}
                      onChange={(e) => setSource(e.target.value)}
                      placeholder="Enter Current location"
                      className="border w-full px-4 py-2 focus:outline-none"
                    />
                  </Autocomplete>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="destination" className="mb-1 font-bold text-lg">
                    To
                  </label>
                  <Autocomplete
                    onLoad={(autocomplete) =>
                      (destinationRef.current = autocomplete)
                    }
                    onPlaceChanged={() =>
                      handlePlaceChanged(destinationRef, setDestination)
                    }
                  >
                    <input
                      id="destination"
                      type="text"
                      value={destination || ""}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder="Enter Destination"
                      className="border w-full px-4 py-2 focus:outline-none"
                    />
                  </Autocomplete>
                </div>
              </div>
            </LoadScriptNext>
          </div>

          <div className="flex justify-between items-center mb-4">
            <span>When</span>
            <select className="border px-4 py-2 focus:outline-none">
              <option>Now</option>
              <option>Later</option>
            </select>
          </div>

          <div className="text-center text-yellow-500 bg-navy text-xl font-bold mb-6">
            <Image
              src={logo1}
              height={100}
              width={150}
              alt={"ridoLogo"}
              className="h-16 mb-4"
            />
            <p>Smartest and affordable rides on your fingertips...</p>
          </div>

          <div className="bg-yellow-100 p-4 rounded-lg">
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Image
                    src={bikeImage}
                    alt="Rido Bike"
                    width={50}
                    height={50}
                  />
                  <div className="ml-4">
                    <h3 className="font-bold">Rido Bike</h3>
                    <p>₹510.15 | 2 mins away</p>
                  </div>
                </div>
                <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded">
                  Book Bike
                </button>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Image
                    src={scootyImage}
                    alt="Rido Scooty"
                    width={50}
                    height={50}
                  />
                  <div className="ml-4">
                    <h3 className="font-bold">Rido Scooty</h3>
                    <p>₹410.15 | 4 mins away</p>
                  </div>
                </div>
                <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded">
                  Book Scooty
                </button>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Image
                    src={miniImage}
                    alt="Rido Mini"
                    width={50}
                    height={50}
                  />
                  <div className="ml-4">
                    <h3 className="font-bold">Rido Mini</h3>
                    <p>₹1500.79 | 3 mins away</p>
                  </div>
                </div>
                <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded">
                  Book Mini
                </button>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Image
                    src={suvImage}
                    alt="Rido SUV"
                    width={50}
                    height={50}
                  />
                  <div className="ml-4">
                    <h3 className="font-bold">Rido SUV</h3>
                    <p>₹1700.79 | 7 mins away</p>
                  </div>
                </div>
                <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded">
                  Book SUV
                </button>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Image
                    src={autoImage}
                    alt="Rido Auto"
                    width={50}
                    height={50}
                  />
                  <div className="ml-4">
                    <h3 className="font-bold">Rido Auto</h3>
                    <p>₹900.15 | 6 mins away</p>
                  </div>
                </div>
                <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded">
                  Book Auto
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
