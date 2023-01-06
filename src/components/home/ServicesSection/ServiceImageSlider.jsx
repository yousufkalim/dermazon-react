// import components and libraries

import React, { useState, useEffect } from 'react';

// import icons and images

import service1 from '../../../assets/home/service1.svg';
import service2 from '../../../assets/home/service2.svg';
import service3 from '../../../assets/home/service3.svg';
import service4 from '../../../assets/home/service4.svg';
import service5 from '../../../assets/home/service5.svg';

const servicesImages = [service1, service2, service3, service4, service5];
export default function ServiceImageSlider() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    setTimeout(
      () => setSlide((prevIndex) => (prevIndex === servicesImages.length - 1 ? 0 : prevIndex + 1)),
      2500,
    );

    return () => {};
  }, [slide]);

  return (
    <div className="slide_show">
      <div className="slide_show_container">
        <div
          className="slide_show_Slider"
          style={{
            transform: `translate3d(${-slide * 100}%, 0, 0)`,
          }}
        >
          {servicesImages.map((image) => (
            <div className="slide" key={Math.random()}>
              <img src={image} alt="" />
            </div>
          ))}
        </div>
        <div className="slideshowDots">
          {servicesImages.map((_, idx) => (
            <div key={Math.random()} className={`slideshowDot${slide === idx ? ' active' : ''}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
