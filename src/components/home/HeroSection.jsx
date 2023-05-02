// import components and libraries

import React from 'react';

// import icons and images
import { useTranslation } from 'react-i18next';

// import herosearch from '../../assets/home/herosearch.svg';
import heroSection from '../../assets/home/heroSection.svg';
// import heroSectionImg from '../../assets/home/MainHeroSectionImg.png';
// import InputSearch from '../common/InputSearch';

export default function HeroSection() {
  const { t } = useTranslation();
  const scr = window.innerWidth;
  return (
    <div className="home_main">
      <div className="home_main_inner">
        {/* <span className="home_span_text">USED LASER FOR ALL</span> */}
        {/* <h1 className="home_heading">
              <span>DERMAZON</span> {t('is a worldwide marketplace')}
            </h1> */}
        {/* <p className="home_text_p">
          {' '}
          Bienvenue sur le site internet deDermazon, Nous sommes une entreprise basée à Paris
          spécialisée dans la reprise et larevente de dispositif à base d'énergie et delasers
          d'occasion, destinés aux professionnels de lamédecine esthétique du monde entier. Notre
          expérience et notre expertise technique nous permettent de proposer des équipements de
          qualité supérieure et de marques premium à des prix abordables.
        </p> */}

        {/* <div className="input_component">
            <InputSearch />
          </div> */}

        <div className="home_right">
          <img
            className="heroBG"
            src={scr > 1000 ? heroSection : heroSection}
            alt=""
            style={{ width: '100%' }}
          />
          <p className="home_text_pi">
            {t(
              'Welcome to the Dermazon website ,We are a Paris based company specialising in the trade-in and resale of used energy based devices and lasers to aesthetic medicine professionals worldwide.',
            )}
            <br />
            {/* <span>
              {' '}
              <br />
            </span> */}
            <br />
            {t(
              'Our experience and technical expertise enable us to offer high quality, premium branded equipment at affordable prices.',
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
