import React, { useState } from 'react';

export default function List(props) {
  const { title, description, icon, number, background, titleColor, sectionId } = props;

  const [isHover, setIsHover] = useState(false);
  const [isHovered, setIsHovered] = useState(true);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const scroll = () => {
    const section = document.querySelector(`#${sectionId}`);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div className="services_container">
      <div className="services_list_main">
        <div className="services">
          <div className="service_list">
            <div
              className="number_div"
              style={{
                background,
              }}
            >
              {number}
            </div>
            <hr
              className="service_list_line"
              style={{
                display: `${window.innerWidth < 992 ? 'none' : 'block'}`,
              }}
            />
          </div>

          <div className="service_details_div">
            <img className="service_icon" src={icon} alt="" />
            <div
              className="service_details"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              role="presentation"
              onClick={() => scroll(sectionId)}
            >
              <span
                className="service_title"
                style={{
                  color: isHover ? titleColor : '',
                }}
              >
                {title}
              </span>
              <span
                className="service_description"
                onMouseEnter={() => setIsHovered(false)}
                onMouseLeave={() => setIsHovered(true)}
              >
                {isHovered ? <p>{`${description.substring(0, 100)}...`}</p> : <p>{description}</p>}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
