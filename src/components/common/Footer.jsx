/* eslint-disable react/button-has-type */
// import components and libraries
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// import icons and images

import logo from '../../assets/home/logo.svg';
// import FacebookIcon from '../../assets/home/facebook.svg';
import instragram from '../../assets/home/icons8-instagram.svg';
import linkedIn from '../../assets/home/icons8-linkedin.svg';
import phone from '../../assets/home/phone.svg';
import whatsApp from '../../assets/home/whatsApp.svg';
import email from '../../assets/home/email.svg';
// import i18n from '../../utils/i18n';

// const handleServiceScroll = () => {
//   const section = document.querySelector('#services_sectionid');
//   section.scrollIntoView({ behavior: 'smooth', block: 'start' });
// };
const handleClick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export default function Footer() {
  const { t } = useTranslation();

  // const screenWidth = window.innerWidth;
  return (
    <div className="footer">
      <div className="footer_top">
        <div className="footer_top_left">
          <div className="logo_footer">
            <img src={logo} alt="footer logo" />
          </div>
        </div>
        <div className="footer_top_center_outer">
          <div className="footer_top_center">
            <ul>
              <li>
                <Link to="/" onClick={handleClick}>
                  {t('Home')}
                </Link>
              </li>
              {/* onClick={handleServiceScroll} role="presentation" */}
              <li>
                <p
                  style={{
                    color: 'black',
                    fontWeight: '600',
                    fontFamily: 'Poppins',
                    fontSize: '18px',
                  }}
                >
                  {t('Buy A Pre-Owned Laser')}
                </p>
              </li>

              {/* <li>
              <Link to="/terms">Terms & Conditions</Link>
            </li> */}
              <li>
                <Link to="/Mentions_légales">{t('Legal Notice')}</Link>
              </li>
            </ul>
          </div>
          <div className="footer_middle_outer">
            <p className="social_media">{t('Follow us on social media')}</p>
            <div className="footer_middle">
              <div className="footer-icons">
                {/* <img src={FacebookIcon} alt="logo" /> */}

                <a
                  style={{
                    marginBottom: '-7px',
                  }}
                  href=" https://instagram.com/dermazon.fr?igshid=YmMyMTA2M2Y="
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
            <div className="footer_top_right">
              <a href="tel:+33695120333" target="_blank" rel="noreferrer">
                <span
                  className="footer_span"
                  style={{
                    fontSize: '16px',
                    fontWeight: '500',
                    color: '#919B9B',
                    // display: 'flex',
                  }}
                >
                  <img src={phone} alt="" className="footer_img " />
                  <span
                    className="footer_span"
                    style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#2B2926',
                      marginLeft: '10px',
                    }}
                  >
                    +33 695 12 03 33
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* {screenWidth < 1000 ? ( */}
        <div className="footer_top_right">
          <a href="https://wa.me/+33695120333" target="_blank" rel="noreferrer">
            <span
              className="footer_span"
              style={{
                fontSize: '16px',
                fontWeight: '500',
                color: '#919B9B',
              }}
            >
              <img src={whatsApp} alt="" className="footer_img " />
              <span
                className="footer_span"
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#2B2926',
                  marginLeft: '10px',
                  textDecoration: 'none',
                }}
              >
                +33 695 12 03 33
              </span>
            </span>
          </a>
        </div>
        <div className="footer_top_right ">
          <a href="mailto:contact@dermazon.fr" target="_blank" rel="noreferrer">
            <span
              className="footer_span"
              style={{
                fontSize: '16px',
                fontWeight: '500',
                color: '#919B9B',
              }}
            >
              <img src={email} alt="" className="footer_img footer_img2 " />
              <span
                className="footer_span"
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#2B2926',
                  marginLeft: '10px',
                }}
              >
                contact@dermazon.fr
              </span>
            </span>
          </a>
        </div>
        {/* ) : (
          ''
        )} */}

        {/* {screenWidth < 1000 ? '' : ''} */}
      </div>

      <div className="footer_bottom">
        <p className="footer_text_p">
          © 2023 <span className="footer_span2">{t('DERMAZON LASER')}</span>,{' '}
          {t('All Rights Reserved.')}
        </p>
      </div>
    </div>
  );
}
