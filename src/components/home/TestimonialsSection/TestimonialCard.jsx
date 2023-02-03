// import components and libraries

import React from 'react';

// import icons and images

export default function TestimonialCard(props) {
  const { description, name, designation } = props;

  return (
    <div className="testimonials_card">
      <p className="card_description">{description}</p>
      <div className="profile">
        {/* <div className="profile_img"><img src={image} alt="Profile" /></div> */}
        <div className="profile_info">
          <span className="name">{name}</span>
          <span className="designation">{designation}</span>
        </div>
      </div>
    </div>
  );
}
