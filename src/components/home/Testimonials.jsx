import React from 'react';
import ellipse1 from '../../assets/images/ellipse1.svg';
import ellipse2 from '../../assets/images/ellipse2.svg';
import profile from '../../assets/images/profile.svg';
import leftArrow from '../../assets/images/leftArrow.svg';
import rightArrow from '../../assets/images/rightArrow.svg';

export default function Testimonials() {
  return (
    <div className="client_testimonials">
      <h1 className="testimonials_heading">Client Testimonials</h1>
      <div className="testimonials">
        <div className="testimonials_left">
          <img className="ellipse" src={ellipse1} alt="Ellipse" />
        </div>
        <div className="testimonials_right">
          <img className="ellipse" src={ellipse2} alt="Ellipse" />
          <div className="arrows">
            <div className="left_arrow">
              <img
                style={{
                  cursor: 'pointer',
                }}
                src={leftArrow}
                alt="Left Arrow"
              />
            </div>
            <div className="right_arrow">
              <img
                style={{
                  cursor: 'pointer',
                }}
                src={rightArrow}
                alt="Right Arrow"
              />
            </div>
          </div>
        </div>
        <div className="testimonials_card">
          <p className="card_description">
            No other eCommerce platform allows people to start for free and grow their store as
            their business grows. More importantly, WooCommerce does not charge you a portion of
            your profits as your business grows!
          </p>
          <div className="profile">
            <div className="profile_img">
              <img src={profile} alt="Profile" />
            </div>
            <div className="profile_info">
              <span className="name">David Joe</span>
              <span className="designation">CEO Creative Studio</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
