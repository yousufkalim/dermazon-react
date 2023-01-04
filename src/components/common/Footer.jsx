import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import linkedIn from '../../assets/linkedIn.svg';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_top">
        <div className="footer_top_left">
          <div className="logo">
            <img src={logo} alt="footer logo" />
          </div>
        </div>
        <div className="footer_top_center">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Services</Link>
            </li>
          </ul>
        </div>
        <div className="footer_top_right">
          <span
            style={{
              fontSize: '16px',
              fontWeight: '500',
              color: '#919B9B',
            }}
          >
            Contact
          </span>

          <span
            style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#2B2926',
              marginLeft: '10px',
            }}
          >
            +33 695 12 03 33
          </span>
        </div>
      </div>
      <div className="footer_middle">
        <div className="footer-icons">
          <img src={facebook} alt="logo" />
          <img src={instagram} alt="instagram" />
          <img src={linkedIn} alt="linkedIn" />
        </div>
      </div>
      <div className="footer_bottom">
        <p className="footer_text_p">
          © 2023 <span className="footer_span">DERMAZON LASER</span>, All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
