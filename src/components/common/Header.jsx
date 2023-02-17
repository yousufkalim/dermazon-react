// import components and libraries

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import icons and images
import { useTranslation } from 'react-i18next';

import logo from '../../assets/home/logo.svg';
// import instragram from '../../assets/home/instragram.svg';
import icons8instagram from '../../assets/home/icons8-instagram.svg';
import Flag from '../../assets/home/flag.png';
import FrFlag from '../../assets/home/fran_flag.png';
import icons8linkedin from '../../assets/home/icons8-linkedin.svg';

export default function Header() {
  const [showBtn, setShowBtn] = useState(false);
  const { i18n, t } = useTranslation();
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const [showTopNavbar, setShowTopNavbar] = useState(false);
  const controlTopNavbar = () => {
    if (window.scrollY > 100) {
      setShowTopNavbar(true);
    } else {
      setShowTopNavbar(false);
    }
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
    setShowBtn(!showBtn);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlTopNavbar);
    return () => {
      window.removeEventListener('scroll', controlTopNavbar);
    };
  }, []);

  return (
    <div className="header">
      <div
        className="header_top"
        style={{
          display: `${showTopNavbar ? 'none' : ''}`,
        }}
      >
        <div className="header_top_left">{/* <span>Dermazon France </span> */}</div>
        <div className="header_top_right">
          <span className="header_top_span">{t('Follow us')}</span>

          <div className="icons">
            <a
              style={{
                marginBottom: '-7px',
              }}
              href="https://instagram.com/dermazon.fr?igshid=YmMyMTA2M2Y="
              target="_blank"
              rel="noreferrer"
            >
              <img src={icons8instagram} alt="logo" />
            </a>
            <a
              style={{
                marginBottom: '-7px',
              }}
              href="https://www.linkedin.com/company/dermazon-france/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={icons8linkedin} alt="linkedIn" />
            </a>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="header_bottom_left">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <p>{t('PRE-OWNED LASERS')}</p>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar} role="presentation">
          <MenuIcon />
        </div>

        {/* <div className={showNavbar ? 'header_bottom_center_button' : 'header_bottom_center'}> */}
        <div className={`header_bottom_center ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <Link to="/">{t('Home')}</Link>
            </li>
            <li>
              <Link to="/buy-laser">{t('Buy a pre-owned laser')}</Link>
            </li>
          </ul>
        </div>
        {showBtn ? (
          <button className="trans_btn" type="button" onClick={() => changeLanguage('fr')}>
            <img src={FrFlag} alt="Flag" />
            FR
          </button>
        ) : (
          <button className="trans_btn" type="button" onClick={() => changeLanguage('en')}>
            <img src={Flag} alt="Flag" />
            EN
          </button>
        )}
        {/* <div className="header_bottom_right">
          <div className="header_bottom_search">
            <input type="text" placeholder="Search" />
            <SearchIcon
              sx={{
                color: '#02225E',
              }}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}
