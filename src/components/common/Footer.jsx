// import components and libraries
import React from 'react';
import { Link } from 'react-router-dom';

// import icons and images

import logo from '../../assets/home/logo.svg';
// import FacebookIcon from '../../assets/home/facebook.svg';
import instragram from '../../assets/home/instragram.svg';
import linkedIn from '../../assets/home/linkedIn.svg';

const handleServiceScroll = () => {
  const section = document.querySelector('#services_sectionid');
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export default function Footer() {
  const screenWidth = window.innerWidth;
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
            <li onClick={handleServiceScroll} role="presentation">
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
        {screenWidth < 1000 ? (
          <div className="footer_top_right">
            <span
              style={{
                fontSize: '16px',
                fontWeight: '500',
                color: '#919B9B',
              }}
            >
              Email
            </span>

            <span
              style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#2B2926',
                marginLeft: '10px',
              }}
            >
              contact@dermazon.fr
            </span>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="footer_middle">
        <div className="footer-icons">
          {/* <img src={FacebookIcon} alt="logo" /> */}
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
      <div className="footer_bottom">
        <p className="footer_text_p">
          © 2023 <span className="footer_span">DERMAZON LASER</span>, All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
