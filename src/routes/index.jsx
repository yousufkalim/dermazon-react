// Init
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';
import TermsConditions from '../containers/TermsConditions';

// Routes
import ByLaserComponent from '../containers/ByLaserComponent';

function Index() {
  return (
    <Routes>
      <Route path="/buy-laser" element={<ByLaserComponent />} />
      <Route path="/" element={<Home />} />
      <Route path="/terms" element={<TermsConditions />} />
    </Routes>
  );
}
export default Index;
