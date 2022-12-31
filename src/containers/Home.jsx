// Init
import React from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import ContactUs from '../components/contact us/ContactUs';
import HeroSection from '../components/heroSection/HeroSection';
import Testimonials from '../components/testimonials/Testimonials';

// Importing Components

// Home Component
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}
