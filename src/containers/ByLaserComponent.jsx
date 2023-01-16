// Init
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LaserComponents from '../components/laser';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

export default function ByLaserComponent() {
  const { pathname } = useLocation;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);
  return (
    <div>
      <Header />
      <LaserComponents />
      <Footer />
    </div>
  );
}
