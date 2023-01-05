import React from 'react';
// import line from '../../../assets/line.svg';
import ServiceImageSlider from './ServiceImageSlider';

export default function SingleService(props) {
  const { reverse, bgColor, icon, title, btnBg, btnText, serviceDescription, sectionId } = props;
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
        <ServiceImageSlider />
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
