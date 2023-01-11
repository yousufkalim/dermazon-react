// import components and libraries

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// import icons and images

import logo from '../../assets/home/logo.svg';
import facebook from '../../assets/home/facebook.svg';
import instagram from '../../assets/home/instagram.svg';
import linkedIn from '../../assets/home/linkedIn.svg';

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const [showTopNavbar, setShowTopNavbar] = useState(false);
  const controlTopNavbar = () => {
    if (window.scrollY > 150) {
      setShowTopNavbar(true);
    } else {
      setShowTopNavbar(false);
    }
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
        <div className="header_top_left">
          <p
            style={{
              color: '#6A6A6A',
            }}
          >
            <span className="header_top_span">Dermazon France </span>
            (used laser for All)
          </p>
        </div>
        <div className="header_top_right">
          <span className="header_top_span">Follow us</span>
          <div className="icons">
            <img src={instagram} alt="instagram" />
            <a
              style={{
                marginBottom: '-7px',
              }}
              href="https://www.linkedin.com/company/dermazon-france/"
            >
              <img src={linkedIn} alt="linkedIn" />
            </a>
            <img src={facebook} alt="logo" />
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
        </div>
        <div className="menu-icon" onClick={handleShowNavbar} role="presentation">
          <MenuIcon />
        </div>
        <div className={`header_bottom_center ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/buy-laser">Buy Laser</Link>
            </li>
          </ul>
        </div>
        <div className="header_bottom_right">
          <div className="header_bottom_search">
            <input type="text" placeholder="Search" />
            <SearchIcon
              sx={{
                color: '#02225E',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
