// import components and libraries

import React, { useState } from 'react';

// import icons and images

export default function TestimonialCard({ description, name, designation }) {
  const [first, setfirst] = useState(false);

  const hadleClick = () => {
    setfirst(!first);
  };

  return (
    <div className="testimonials_card">
      <p className="card_description">
        {first ? description : description.slice(0, 80)}
        <br />
        {first ? (
          <button type="button" onClick={hadleClick}>
            Less Then
          </button>
        ) : (
          <button type="button" onClick={hadleClick}>
            Read More
          </button>
        )}
      </p>
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
