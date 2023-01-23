// import components and libraries

import React, { useLayoutEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';
// import icons and images

// import ellipse1 from '../../../assets/home/ellipse1.svg';
// import ellipse2 from '../../../assets/home/ellipse2.svg';
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

  useLayoutEffect(() => {
    setActiveTestimonial(TestimonialData[0]);
  }, []);

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
        </div>
      </div>
    </div>
  );
}
