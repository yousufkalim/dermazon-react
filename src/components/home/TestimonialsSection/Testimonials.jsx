// import components and libraries

import React, { useLayoutEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';
// import icons and images

// import ellipse1 from '../../../assets/home/ellipse1.svg';
// import ellipse2 from '../../../assets/home/ellipse2.svg';
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
  {
    description:
      'No other eCommerce platform allows people to start for free and grow their store as their business grows. More importantly, WooCommerce does not charge you a portion of your profits as your business grows',
    image: profile,
    name: 'Azeem',
    designation: 'Software Engineer',
  },
];
export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(null);
  const [currentPosition, setCurrentPosition] = useState(1);

  useLayoutEffect(() => {
    setActiveTestimonial(TestimonialData[0]);
    setCurrentPosition(1);
  }, []);

  const handleNext = () => {
    if (currentPosition === TestimonialData?.length) {
      setCurrentPosition(1);
      setActiveTestimonial(TestimonialData[0]);
    } else {
      setActiveTestimonial(TestimonialData[currentPosition]);
      setCurrentPosition((prevState) => prevState + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPosition === 1) {
      setCurrentPosition(TestimonialData.length);
      const testimonialLength = TestimonialData.length - 1;
      setActiveTestimonial(TestimonialData[testimonialLength]);
    } else {
      setActiveTestimonial(TestimonialData[currentPosition - 2]);
      setCurrentPosition((prevState) => prevState - 1);
    }
  };

  return (
    <div className="client_testimonials">
      <h1 className="testimonials_heading">Client Testimonials</h1>
      <div className="testimonials">
        <div className="testimonials_card_container">
          <TestimonialCard
            description={activeTestimonial?.description}
            image={activeTestimonial?.image}
            name={activeTestimonial?.name}
            designation={activeTestimonial?.designation}
          />
          <div className="arrows">
            <div className="left_arrow">
              <img
                style={{
                  cursor: 'pointer',
                }}
                role="presentation"
                onClick={handlePrevious}
                src={leftArrow}
                alt="Left Arrow"
              />
            </div>
            <div className="right_arrow">
              <img
                style={{
                  cursor: 'pointer',
                }}
                role="presentation"
                onClick={handleNext}
                src={rightArrow}
                alt="Right Arrow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
