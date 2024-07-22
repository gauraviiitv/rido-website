"use client";
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
    <div className="bg-custom-gradient min-h-screen flex flex-col">
      <NavBar setCurrentSection={setCurrentSection} />
      <div className="pt-16 pb-24 flex-grow"> {/* Added pb-24 to ensure space for footer */}
        {currentSection === 'welcome' && <WelcomeSection />}
        {currentSection === 'services' && <ServicesSection />}
        {currentSection === 'about' && <AboutUsSection />}
        {currentSection === 'contact' && <ContactSection />}
      </div>
      <ContactButton /> {/* Add the ContactButton component */}
      <Footer /> {/* Removed absolute positioning */}
    </div>
  );
}
