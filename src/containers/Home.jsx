import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import HeroSection from '../components/home/HeroSection';
import ContactUs from '../components/home/ContactSection';
import Testimonials from '../components/home/TestimonialsSection/Testimonials';
import Index from '../components/home/ServicesSection/Index';

// Home Component
export default function Home() {
  const { pathname } = useLocation;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);
  return (
    <div style={{ overflow: 'hidden' }}>
      <Header />
      <HeroSection />
      <Testimonials />
      <Index />
      <div id="about" style={{ position: 'absolute', marginTop: '-80px' }} />
      <ContactUs />
      <Footer />
    </div>
  );
}
