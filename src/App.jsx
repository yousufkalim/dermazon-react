// Init
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

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
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    document.title = t('Platform for the purchase and sale of used aesthetic lasers');
  }, [t]);

  useEffect(() => {
    const check = localStorage.getItem('open');
    if (check) {
      setOpen(false);
    }
  }, []);
  const handleClose = () => {
    setOpen(false);
  };

  const handleAccepte = () => {
    localStorage.setItem('open', true);
    setOpen(false);
  };


  return (
    <div className="App">
      {/* toastify Container for Notification */}
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar transition={Flip} />
      {open && (
        <div className="CookieBanner_Container">
          <div className="CookieBanner_Div">
            <div className="CookieBanner_TypoDiv">
              <p className="CookieBanner_desp">
                {t(
                  'We Use our own and third-party cookies to personalize content and to analyze web traffic.',
                )}
              </p>
              <p className="CookieBanner_Link">
                <Link to="/Mentions_légales">
                  <h4>{t('Read more about cookies')}</h4>
                </Link>
              </p>
            </div>
            <div className="CookieBanner_BtnDiv">
              <button className="CookieBanner_AgreeBtn" type="button" onClick={handleAccepte}>
                {t('Agree')}
              </button>
              <button className="CookieBanner_DeclineBtn" type="button" onClick={handleClose}>
                {t('Decline')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Routes */}
      <Index />
    </div>
  );
}

// Export
export default App;
