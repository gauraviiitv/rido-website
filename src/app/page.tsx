"use client";
import './globals.css';
import { useState } from 'react';
import WelcomeSection from '../components/WelcomeSection';
import ServicesSection from '../components/ServicesSection';
import AboutUsSection from '../components/AboutUsSection';
import ContactSection from '../components/ContactSection';
import NavBar from '../components/NavBar';
import Footer from '@/components/Footer';
import ContactButton from '@/components/ContactButton';

export default function HomePage() {
  const [currentSection, setCurrentSection] = useState('welcome');

  return (
    <div className="bg-custom-gradient min-h-screen flex flex-col relative">
      <NavBar setCurrentSection={setCurrentSection} /> {/* Ensure the prop is passed here */}
      <div className="pt-16 flex-grow"> {/* Ensure padding to avoid overlap with navbar */}
        {currentSection === 'welcome' && <WelcomeSection />}
        {currentSection === 'services' && <ServicesSection />}
        {currentSection === 'about' && <AboutUsSection />}
        {currentSection === 'contact' && <ContactSection />}
      </div>
      <ContactButton /> {/* Add the ContactButton component */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <Footer />
      </div>
    </div>
  );
}
