import React, { useEffect } from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import TermsAndCondition from '../components/Terms/TermsAndCondition';

function TermsConditions() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <div style={{ overflow: 'hidden' }}>
      <Header />
      <TermsAndCondition />
      <Footer />
    </div>
  );
}

export default TermsConditions;
