// Init
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';

// Routes
import ByLaserComponent from '../containers/ByLaserComponent';

function Index() {
  return (
    <Routes>
      <Route path="/buy-laser" element={<ByLaserComponent />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
export default Index;
