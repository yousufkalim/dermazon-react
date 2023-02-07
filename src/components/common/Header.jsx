// import components and libraries

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import icons and images

import logo from '../../assets/home/logo.svg';
import instragram from '../../assets/home/instragram.svg';
import linkedIn from '../../assets/home/linkedIn.svg';

export default function Header() {
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
          <span className="header_top_span">Follow us</span>
          <div className="icons">
            <a
              style={{
                marginBottom: '-7px',
              }}
              href="https://instagram.com/dermazon.fr?igshid=YmMyMTA2M2Y="
              target="_blank"
              rel="noreferrer"
            >
              <img src={instragram} alt="logo" />
            </a>
            <a
              style={{
                marginBottom: '-7px',
              }}
              href="https://www.linkedin.com/company/dermazon-france/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedIn} alt="linkedIn" />
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
          <p> PRE-OWNED LASER</p>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar} role="presentation">
          <MenuIcon />
        </div>

        {/* <div className={showNavbar ? 'header_bottom_center_button' : 'header_bottom_center'}> */}
        <div className={`header_bottom_center ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/buy-laser">Buy A Pre-Owned Laser</Link>
            </li>
          </ul>
        </div>
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
