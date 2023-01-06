// import components and libraries

import React from 'react';
import TestimonialCard from './TestimonialCard';
// import icons and images

import ellipse1 from '../../../assets/home/ellipse1.svg';
import ellipse2 from '../../../assets/home/ellipse2.svg';
import leftArrow from '../../../assets/home/leftArrow.svg';
import rightArrow from '../../../assets/home/rightArrow.svg';
import profile from '../../../assets/home/profile.svg';

const TestimonialData = [
  {
    description:
      'No other eCommerce platform allows people to start for free and grow their store as their business grows. More importantly, WooCommerce does not charge you a portion of your profits as your business grows',
    image: profile,
    name: 'David Joe',
    designation: 'CEO Creative Studio',
  },
  {
    description:
      'No other eCommerce platform allows people to start for free and grow their store as their business grows. More importantly, WooCommerce does not charge you a portion of your profits as your business grows',
    image: profile,
    name: 'Zohaib',
    designation: 'CEO Creative Studio',
  },
];
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
        {TestimonialData.map((testimonial) => {
          return (
            <TestimonialCard
              description={testimonial.description}
              image={testimonial.image}
              name={testimonial.name}
              designation={testimonial.designation}
            />
          );
        })}
      </div>
    </div>
  );
}
