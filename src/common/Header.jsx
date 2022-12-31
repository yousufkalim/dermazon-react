import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import linkedIn from '../assets/linkedIn.svg';
import search from '../assets/search.svg';

export default function Header() {
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
        <div className="header_bottom_center">
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
            <img src={search} alt="search" />
          </div>
        </div>
      </div>
    </div>
  );
}
