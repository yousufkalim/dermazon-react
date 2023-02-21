// Init
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Files
import Index from './routes/index';
import './css/index.css';

// Component
function App() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('Platform for the purchase and sale of used aesthetic lasers');
  }, [t]);

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
