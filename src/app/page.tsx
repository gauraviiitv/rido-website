"use client";
import { useState } from 'react';
import HomeSection from '../components/HomeSection';
import WelcomeSection from '../components/WelcomeSection';
import ServicesSection from '../components/ServicesSection';
import AboutUsSection from '../components/AboutUsSection';
import ContactSection from '../components/ContactSection';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Help from '../components/HelpButton';

export default function HomePage() {
  const [currentSection, setCurrentSection] = useState('welcome');

  return (
    <div className="bg-custom-gradient min-h-screen flex flex-col">
      <NavBar setCurrentSection={setCurrentSection} />
      <div className="pt-16 pb-24 flex-grow"> {/* Added pb-24 to ensure space for footer */}
        {currentSection === 'welcome' && <WelcomeSection />}  
        {currentSection === 'home' && <HomeSection />}
        {currentSection === 'services' && <ServicesSection />}
        {currentSection === 'about' && <AboutUsSection />}
        {currentSection === 'contact' && <ContactSection />}
      </div>
      <Help /> {/* Add the ContactButton component */}
      <Footer /> {/* Removed absolute positioning */}
    </div>
  );
}
