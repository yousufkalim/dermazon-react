import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import HeroSection from '../components/home/HeroSection';
import ContactUs from '../components/home/ContactSection';
import Testimonials from '../components/home/TestimonialsSection/Testimonials';
import Index from '../components/home/ServicesSection/Index';
// Importing Components
// Home Component
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Testimonials />
      <Index />
      <ContactUs />
      <Footer />
    </div>
  );
}
