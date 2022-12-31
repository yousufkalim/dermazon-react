import React from 'react';
import herosearch from '../../assets/herosearch.svg';

export default function HeroSection() {
  return (
    <div className="hero_main">
      <div className="hero_left">
        <span className="hero_span">used laser for all</span>
        <h1 className="hero_heading">
          <span
            style={{
              color: '#02225E',
              fontWeight: 600,
              fontSize: '48px',
            }}
          >
            DERMAZON
          </span>{' '}
          is a platform for the sale and purchase of used equipment
        </h1>
        <p className="hero_description">
          based in the Paris region, and is specialized in lasers and energy-based device used in
          dermatology and aesthetic medicine.
        </p>
        <div className="hero_btn_div">
          <img src={herosearch} alt="hero Search Icon" />
          <input type="text" name="" placeholder="Example" />
          <button className="hero_btn" type="submit">
            Search
          </button>
        </div>
      </div>
      <div className="hero_right">
        <div className="hero_img1" />
        <div className="hero_img2" />
        <div className="transparent_div" />
      </div>
    </div>
  );
}
