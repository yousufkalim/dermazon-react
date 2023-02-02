// import components and libraries

import React from 'react';
import { Link } from 'react-router-dom';
// import ServiceImageSlider from './ServiceImageSlider';
// import laserMachineHome from '../../../assets/home/laserMachineHome.png';

export default function SingleService(props) {
  const {
    reverse,
    bgColor,
    icon,
    title,
    btnBg,
    btnText,
    serviceDescription,
    sectionId,
    Path,
    image,
    showImage,
  } = props;
  const firstWord = title.split(' ')[0];
  function removeFirstWord() {
    const indexOfSpace = title.indexOf(' ');
    if (indexOfSpace === -1) {
      return '';
    }
    return title.slice(indexOfSpace + 1);
  }

  return (
    <div
      className={reverse ? 'single_service_container_reverse' : 'single_service_container'}
      id={sectionId}
    >
      <div className={reverse ? 'single_service_left_reverse' : 'single_service_left'}>
        {reverse || showImage ? (
          <img
            src={image}
            alt="Single Service"
            style={{
              height: '450px',
              width: '450px',
              marginRight: '20%',
            }}
          />
        ) : (
          <img
            alt="Single Service"
            className="laserMachineHomeImg"
            src={image}
            style={{
              // background: 'red',
              height: '450px',
              width: '450px',
              marginRight: '20%',
            }}
          />
          // <ServiceImageSlider />
        )}
      </div>
      <div className="single_service_right">
        <div className="single_servise_controler">
          <div className="single_servise_controler_div">
            <div
              className="single_service_icon_div"
              style={{
                backgroundColor: bgColor && bgColor,
              }}
            >
              <img className="service_icons_img" src={icon} alt="Service Icon" />
            </div>
            <h1 className="single_service_title">
              <span
                style={{
                  color: btnBg,
                }}
              >
                {`${firstWord} ${' '}`}
              </span>
              {removeFirstWord(title)}
            </h1>
          </div>
        </div>

        <p className="single_service_text_p">{serviceDescription}</p>
        <div
          className={reverse ? 'single_service_left_reverse_mobile' : 'single_service_left_mobile'}
        >
          {reverse || showImage ? (
            <img
              src={image}
              alt="Single Service"
              style={{
                height: '450px',
                width: '450px',
                marginRight: '20%',
              }}
            />
          ) : (
            <img
              alt="Single Service"
              className="laserMachineHomeImg"
              src={image}
              style={{
                // background: 'red',
                height: '450px',
                width: '450px',
                marginRight: '20%',
              }}
            />
            // <ServiceImageSlider />
          )}
        </div>
        <Link
          to={Path}
          // href="#ContactUs"
          style={{
            textDecoration: 'none',
          }}
        >
          <button
            style={{
              background: btnBg,
            }}
            className="single_service_btn"
            type="button"
          >
            {btnText}
          </button>
        </Link>
      </div>
    </div>
  );
}
