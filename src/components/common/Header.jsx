import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/images/logo.svg';
import facebook from '../../assets/images/facebook.svg';
import instagram from '../../assets/images/instagram.svg';
import linkedIn from '../../assets/images/linkedIn.svg';
import headerSearch from '../../assets/images/headerSearch.svg';

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <div className="header">
      <div className="header_top">
        <div className="header_top_left">
          <p>
            <span className="header_top_span">Dermazon France</span>
            (Used laser for All)
          </p>
        </div>
        <div className="header_top_right">
          <span className="header_top_span">Follow us</span>
          <div className="icons">
            <img src={facebook} alt="logo" />
            <img src={instagram} alt="instagram" />
            <img src={linkedIn} alt="linkedIn" />
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="header_bottom_left">
          <div className="logo">
            <img src={logo} alt="logo" />
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
              <Link to="/">Buy Laser</Link>
            </li>
            <li>
              <Link to="/">Sell Laser</Link>
            </li>
            <li>
              <Link to="/">Maintain</Link>
            </li>
            <li>
              <Link to="/">Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="header_bottom_right">
          <div className="header_bottom_search">
            <input type="text" placeholder="Search" />
            <img src={headerSearch} alt="search" />
          </div>
        </div>
      </div>
    </div>
  );
}
