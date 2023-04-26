// Init
import React, { useEffect } from 'react';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Files
import Index from './routes/index';
import './css/index.css';
import i18n from './utils/i18n';

// Component
function App() {
  useEffect(() => {
    const { host } = window.location;
    if (host === 'localhost:3000') {
      i18n.changeLanguage('fr');
    } else {
      i18n.changeLanguage('en');
    }
  }, []);

  return (
    <div className="App">
      {/* toastify Container for Notification */}
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar transition={Flip} />

      {/* Routes */}
      <Index />
    </div>
  );
}

// Export
export default App;
