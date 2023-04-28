import React, { useState, useEffect } from 'react';
import Fab from '@mui/material/Fab';
import { toast } from 'react-toastify';
import { StackedCarousel, ResponsiveContainer } from 'react-stacked-center-carousel';
import { motion } from 'framer-motion';
import ReviewCard from '../common/ReviewCard';
import API from '../../api';

// import SectionHeader from '../common/SectionHeader';

import { ReactComponent as RightArrow } from '../../assets/right_arrow_btn.svg';
import { ReactComponent as LeftArrow } from '../../assets/left_arrow_btn.svg';

// import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function ReviewSection() {
  //   const { i18n } = useTranslation();
  const lang = localStorage.getItem('i18nextLng');
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);
  const ref = React.useRef();
  // const [enData, setEnData] = useState([
  //   {
  //     // avatar: Client_2,
  //     userName: 'Ryan Hutchinson',
  //     companyName: 'United States',
  //     comment:
  //       'We had a job which needed quick expert help and right then we found Falcon Consulting, Job completed successfully with all work asked within the timeline, Kudos',
  //   },
  //   {
  //     // avatar: Client_2,
  //     userName: 'Ryan Hutchinson',
  //     companyName: '2United States',
  //     comment:
  //       'We had a job which needed quick expert help and right then we found Falcon Consulting, Job completed successfully with all work asked within the timeline, Kudos',
  //   },
  // ]);
  // const [frData, setFrData] = useState([
  //   {
  //     // avatar: Client_2,
  //     userName: 'Ryan Hutchinson',
  //     companyName: 'United States',
  //     comment:
  //       'We had a job which needed quick expert help and right then we found Falcon Consulting, Job completed successfully with all work asked within the timeline, Kudos',
  //   },
  //   {
  //     // avatar: Client_2,
  //     userName: 'Ryan Hutchinson',
  //     companyName: '2United States',
  //     comment:
  //       'We had a job which needed quick expert help and right then we found Falcon Consulting, Job completed successfully with all work asked within the timeline, Kudos',
  //   },
  //   {
  //     // avatar: Client_2,
  //     userName: 'Ryan Hutchinson',
  //     companyName: '3United States',
  //     comment:
  //       'We had a job which needed quick expert help and right then we found Falcon Consulting, Job completed successfully with all work asked within the timeline, Kudos',
  //   },
  // ]);
  // console.log(setFrData, setEnData, loading, frData, enData);
  const getTestimonial = () => {
    setLoading(true);
    API('get', '/comments')
      .then((res) => {
        console.log('res?.data?.data?.comments[0]', res?.data?.data?.comments.length);

        if (res?.data?.data?.comments.length === 1) {
          setTestimonials([
            res?.data?.data?.comments[0],
            res?.data?.data?.comments[0],
            res?.data?.data?.comments[0],
          ]);
        } else if (res?.data?.data?.comments.length === 2) {
          setTestimonials([
            res?.data?.data?.comments[0],
            res?.data?.data?.comments[1],
            res?.data?.data?.comments[0],
          ]);
        } else {
          setTestimonials(res?.data?.data?.comments);
        }
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err);
        setLoading(false);
      });
  };
  useEffect(() => {
    getTestimonial();
  }, []);

  console.log('testimonials2121', testimonials);

  return (
    <div>
      {testimonials.length === 0 ? (
        <div className="noReview">No reviews yet</div>
      ) : (
        <div>
          <motion.div
            initial={{ y: 100, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="ReviewSectionMain"
          >
            {/* <SectionHeader
          // WorkProcess={1}
          colorH2="#0F52BA"
          h1="your feedback matters"
          h2="Client Reviews"
          width="30%"
        /> */}
            <div className="ReviewCardSlider">
              <div className="ReviewSliderContainer">
                <div className="fade-left"> </div>
                {loading ? (
                  <>loading</>
                ) : (
                  <ResponsiveContainer
                    className="ReviewSection_Carousel"
                    carouselRef={ref}
                    render={(parentWidth, carouselRef) => {
                      let currentVisibleSlide = 5;
                      if (parentWidth <= 1440) currentVisibleSlide = 3;
                      if (parentWidth <= 720) currentVisibleSlide = 1;
                      return (
                        <StackedCarousel
                          autoRotate
                          ref={carouselRef}
                          rotationInterval={2000}
                          data={lang === 'fr' ? testimonials : testimonials}
                          carouselWidth={parentWidth}
                          slideWidth={
                            // eslint-disable-next-line no-nested-ternary
                            currentVisibleSlide === 5
                              ? parentWidth / 5.2
                              : currentVisibleSlide === 3
                              ? parentWidth / 4
                              : parentWidth / 2
                          }
                          slideComponent={ReviewCard}
                          maxVisibleSlide={5}
                          minVisible={1}
                          currentVisibleSlide={currentVisibleSlide}
                          useGrabCursor
                        />
                      );
                    }}
                  />
                )}

                <Fab
                  className="CarouselLeftArrow"
                  onClick={() => {
                    ref.current?.goBack();
                  }}
                >
                  {/* <img src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/left_arrow_btn.svg`} /> */}
                  <LeftArrow />
                </Fab>
                <Fab
                  className="CarouselRightArrow"
                  onClick={() => {
                    ref.current?.goNext(6);
                  }}
                >
                  <RightArrow />
                </Fab>
                {/* <button style={{ border: "none", background: "none", fontSize: "40px", color: "#0F52BA", fontWeight: "600" }}>
              {">"}
            </button> */}

                <div className="fade-right" />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
