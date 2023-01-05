import React from 'react';
import herosearch from '../../assets/images/herosearch.svg';

export default function HomeSection() {
  return (
    <div className="home_main">
      <div className="home_left">
        <span className="home_span">used laser for all</span>
        <h1 className="home_heading">
          <span
            style={{
              color: '#02225E',
              fontWeight: 600,
              fontSize: '48px',
            }}
          >
            DERMAZON
          </span>{' '}
          is a worldwide marketplace
        </h1>
        <p className="home_text_p">
          for the sale and purchase of pre-owned laser and energy-based devices, used in dermatology
          and aesthetic medicine field.
        </p>
        <div className="home_btn_div">
          <img src={herosearch} alt="Home Search Icon" />
          <input type="text" name="" placeholder="Example" />
          <button className="home_btn" type="submit">
            Search
          </button>
        </div>
      </div>
      <div className="home_right">
        <div className="hero_img1" />
        <div className="hero_img2" />
        <div className="transparent_div" />
      </div>
    </div>
  );
}
