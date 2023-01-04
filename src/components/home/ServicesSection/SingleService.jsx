import React from 'react';
// import line from '../../../assets/line.svg';
import ServiceImageSlider from './ServiceImageSlider';

export default function SingleService(props) {
  const { reverse, bgColor, icon, title, btnBg, btnText, serviceDescription, sectionId } = props;
  return (
    <div
      className={reverse ? 'single_service_container_reverse' : 'single_service_container'}
      id={sectionId}
    >
      <div className={reverse ? 'single_service_left_reverse' : 'single_service_left'}>
        <ServiceImageSlider />
        {/* <img
          style={{
            display: `${window.innerWidth < 992 ? 'none' : ''}`,
          }}
          src={line}
          alt="Line"
        /> */}
      </div>
      <div className="single_service_right">
        <div
          className="single_service_icon_div"
          style={{
            backgroundColor: bgColor && bgColor,
          }}
        >
          <img className="service_icons_img" src={icon} alt="Service Icon" />
        </div>
        <h1 className="single_service_title">{title}</h1>
        <p className="single_service_text_p">{serviceDescription}</p>
        <button
          style={{
            background: btnBg,
          }}
          className="single_service_btn"
          type="button"
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}
