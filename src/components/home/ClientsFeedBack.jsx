import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import { StackedCarousel, ResponsiveContainer } from 'react-stacked-center-carousel';
import { motion } from 'framer-motion';
import ReviewCard from '../common/ReviewCard';
// import SectionHeader from '../common/SectionHeader';

import { ReactComponent as RightArrow } from '../../assets/right_arrow_btn.svg';
import { ReactComponent as LeftArrow } from '../../assets/left_arrow_btn.svg';

// import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function ReviewSection() {
  //   const { i18n } = useTranslation();
  const lang = localStorage.getItem('i18nextLng');
  const ref = React.useRef();
  const [enData, setEnData] = useState([
    {
      // avatar: Client_2,
      name: 'Ryan Hutchinson',
      country: 'United States',
      review:
        'We had a job which needed quick expert help and right then we found Falcon Consulting, Job completed successfully with all work asked within the timeline, Kudos',
      work: 'Amazon API Gateway Migration',
    },
    {
      // avatar: Client_3,
      name: 'CB',
      country: ' United States',

      review:
        'They have a very good development team. Responsive and dependable. We are working with them on other projects. Highly recommended!',
      work: 'Kidgystic-Mobile application for Parental Control',
    },

    {
      // avatar: Client_1,
      name: 'Fahad S',
      country: 'Pakistan',
      review:
        'Falcon Consulting was a delight to work with. There Mobile App development team has a very firm grasp on React and React Native, ensured timely delivery and dedication. Will consider them for future for sure',
      work: 'ONX-Mobile application for EdTech',
    },

    {
      // avatar: Client_5,
      name: 'Laurent Louis-Henry',
      country: 'France',

      review:
        'Falcon Consulting a permis à mon application de prendre forme ! En partant d’une simple idée, ils ont su faire preuve d’initiative et me conseiller sur les décisions à prendre.',
      work: 'Tilt Entreprise',
    },
    {
      // avatar: Client_5,
      name: 'Romain D',
      country: 'France',

      review: 'Equipe très motivée, et allant au bout des choses ! Ce n’est pas le cas de tous !',
      work: 'Registre-RH',
    },
    {
      // avatar: Client_5,
      name: 'Sonya L.',
      country: 'United States',

      review:
        'Falcon Consulting did a great job. I am happy to work with them. They have great skills in MERN stack. Being not so tech savvy I had my own challenges but their Business team helped me on each step along the journey. Hope we will work very soon near future. Thank you',
      work: 'SybilSoft-Web application Development for Travel Agency',
    },
  ]);
  const [frData, setFrData] = useState([
    {
      // avatar: Client_5,
      name: 'RD',
      country: 'France',

      review: 'Equipe très motivée, et allant au bout des choses ! Ce n’est pas le cas de tous !',
      work: 'Registre-RH',
    },
    {
      // avatar: Client_5,
      name: 'Laurent Louis-Henry',
      country: 'France',

      review:
        'Falcon Consulting a permis à mon application de prendre forme ! En partant d’une simple idée, ils ont su faire preuve d’initiative et me conseiller sur les décisions à prendre.',
      work: 'Tilt Entreprise',
    },

    {
      // avatar: Client_2,
      name: 'Ryan Hutchinson',
      country: 'United States',
      review:
        'We had a job which needed quick expert help and right then we found Falcon Consulting, Job completed successfully with all work asked within the timeline, Kudos',
      work: 'Amazon API Gateway Migration',
    },
    {
      // avatar: Client_1,
      name: 'Fahad S',
      country: 'Pakistan',
      review:
        'Falcon Consulting was a delight to work with. There Mobile App development team has a very firm grasp on React and React Native, ensured timely delivery and dedication. Will consider them for future for sure',
      work: 'ONX-Mobile application for EdTech',
    },

    {
      // avatar: Client_3,
      name: 'CB',
      country: ' United States',

      review:
        'They have a very good development team. Responsive and dependable. We are working with them on other projects. Highly recommended!',
      work: 'Kidgystic-Mobile application for Parental Control',
    },

    {
      // avatar: Client_5,
      name: 'Sonya L.',
      country: 'United States',

      review:
        'Falcon Consulting did a great job. I am happy to work with them. They have great skills in MERN stack. Being not so tech savvy I had my own challenges but their Business team helped me on each step along the journey. Hope we will work very soon near future. Thank you',
      work: 'SybilSoft-Web application Development for Travel Agency',
    },
  ]);
  console.log(setFrData, setEnData);

  return (
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
                    data={lang === 'fr' ? frData : enData}
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
                    currentVisibleSlide={currentVisibleSlide}
                    useGrabCursor
                  />
                );
              }}
            />
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
  );
}
