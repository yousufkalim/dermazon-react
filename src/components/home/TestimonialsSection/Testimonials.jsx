// import components and libraries

import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import TestimonialCard from './TestimonialCard';
import API from '../../../api';
import ActivArrow from '../../../assets/Union.svg';
import NonActivearrow from '../../../assets/Union1.svg';
// import icons and images

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [arrowstate, setarrowstate] = useState(false);

  const handleBackwardClick = () => {
    setarrowstate(true);

    setCurrentImageIndex(
      currentImageIndex === 0 && testimonials && testimonials.length > 0
        ? testimonials.length - 1
        : currentImageIndex - 1,
    );
  };

  const handleForwardClick = () => {
    setarrowstate(false);

    setCurrentImageIndex(
      currentImageIndex === (testimonials && testimonials.length - 1) || testimonials?.length === 0
        ? 0
        : currentImageIndex + 1,
    );
  };

  const getTestimonial = async () => {
    setLoading(true);
    await API('get', '/comments')
      .then((res) => {
        setTestimonials(res?.data?.data?.comments);
      })

      .catch((err) => {
        toast.error(err);
      });
    setLoading(false);
  };
  useEffect(() => {
    getTestimonial();
  }, []);

  return (
    <div className="client_testimonials">
      <h1 className="testimonials_heading">Client Testimonials</h1>
      <div className="testimonials">
        <div className="testimonials_card_container">
          {loading ? (
            <div className="loader">Loading</div>
          ) : (
            <>
              {testimonials[currentImageIndex] && (
                <TestimonialCard
                  description={testimonials[currentImageIndex]?.comment}
                  name={testimonials[currentImageIndex]?.userName}
                  designation={testimonials[currentImageIndex]?.companyName}
                />
              )}
              <div style={{ width: '41%', marginLeft: 'auto', padding: '3px' }}>
                <button onClick={handleBackwardClick} type="button" className="arrowButton">
                  <img
                    src={!arrowstate ? NonActivearrow : NonActivearrow}
                    alt="arrow"
                    style={{ margin: '0 8px 3px 8px', cursor: 'pointer' }}
                  />
                </button>
                <button onClick={handleForwardClick} type="button" className="arrowButton">
                  <img
                    src={arrowstate ? ActivArrow : ActivArrow}
                    alt="arrow"
                    style={{ cursor: 'pointer' }}
                  />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
