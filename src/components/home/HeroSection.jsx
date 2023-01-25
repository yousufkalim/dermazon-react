// import components and libraries

import React from 'react';

// import icons and images

// import herosearch from '../../assets/home/herosearch.svg';
import heroSection from '../../assets/home/heroSection.svg';
import InputSearch from '../common/InputSearch';

export default function HeroSection() {
  return (
    <div className="home_main">
      <div className="home_main_inner">
        <div className="home_left">
          <div className="home_left_inner">
            <span className="home_span_text">USED LASER FOR ALL</span>
            <h1 className="home_heading">
              <span>DERMAZON</span> is a worldwide marketplace
            </h1>
            <p className="home_text_p">
              for the sale and purchase of pre-owned laser and energy-based devices, used in
              dermatology and aesthetic medicine field.
            </p>
          </div>
          <div className="input_component">
            <InputSearch />
          </div>
        </div>
        <div className="home_right">
          <img className="heroBG" src={heroSection} alt="" />
        </div>
      </div>
    </div>
  );
}
