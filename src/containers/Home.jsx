// Init
import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import HeroSection from '../components/home/HomeSection';
import ContactUs from '../components/home/ContactSection';
import Testimonials from '../components/home/Testimonials';
import ServicesSection from '../components/home/ServicesSection/ServicesSection';

// Importing Components

// Home Component
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Testimonials />
      <ServicesSection />
      <ContactUs />
      <Footer />
    </div>
  );
}
