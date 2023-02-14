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

const handleServiceScroll = () => {
  const section = document.querySelector('#services_sectionid');
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
                <Link to="/">{t('Home')}</Link>
              </li>
              <li onClick={handleServiceScroll} role="presentation">
                <Link to="/">{t('Services')}</Link>
              </li>
              {/* <li>
              <Link to="/terms">Terms & Conditions</Link>
            </li> */}
              <li>
                <Link to="/LegalNotices">{t('Legal Notice')}</Link>
              </li>
            </ul>
          </div>
          <div className="footer_middle_outer">
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
                </span>
              </a>

              <span
                className="footer_span"
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#2B2926',
                  marginLeft: '10px',

                  // display: 'flex',
                }}
              >
                <span className="lo">{t('Contact')}:</span> +33 695 12 03 33
              </span>
            </div>
          </div>
        </div>

        {/* {screenWidth < 1000 ? ( */}
        <div className="footer_top_right footer_email">
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
            </span>
          </a>
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
        </div>
        <div className="footer_top_right footer_email">
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
            </span>
          </a>
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
