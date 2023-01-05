import React, { useState, useEffect } from 'react';
import service1 from '../../../assets/images/service1.svg';
import service2 from '../../../assets/images/service2.svg';
import service3 from '../../../assets/images/service3.svg';
import service4 from '../../../assets/images/service4.svg';
import service5 from '../../../assets/images/service5.svg';

const servicesImages = [service1, service2, service3, service4, service5];
const delay = 2500;
export default function ServiceImageSlider() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    setTimeout(
      () => setSlide((prevIndex) => (prevIndex === servicesImages.length - 1 ? 0 : prevIndex + 1)),
      delay,
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
