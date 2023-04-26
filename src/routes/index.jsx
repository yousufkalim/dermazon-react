// Init
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';
import TermsConditions from '../containers/TermsConditions';
import LegalNotices from '../containers/LegalNotices';

// Routes
import ByLaserComponent from '../containers/ByLaserComponent';

function Index() {
  return (
    <Routes>
      <Route path="/acheter-laser" element={<ByLaserComponent />} />
      <Route path="/" element={<Home />} />
      <Route path="/terms" element={<TermsConditions />} />
      <Route path="/Mentions_légales" element={<LegalNotices />} />
    </Routes>
  );
}
export default Index;
