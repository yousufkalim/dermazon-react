import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

export default function LaserHeroSection() {
  return (
    <div className="laser_outer_main">
      <div className="laser_hero_section_header">
        <div className="laser_hero_section_heading_text">used laser for all</div>
        <div className="laser_hero_section_heading">Buy A Laser </div>
        <div className="laser_hero_section_text_paragraph">
          We are also laser hunters, you are looking for a particular laser which is not in the
          below list, get in touch with us and we will find it for you.
        </div>
      </div>
      <div className="laser_search_button_div">
        <div className="laser_search_icon">
          <div className="search_icon">
            <SearchIcon />
          </div>
          <div className="laser_hero_section_header_search_input">
            <input placeholder="Example" />
          </div>
        </div>
        <div className="laser_button_div">
          <button className="laser_hero_section_header_search_button" type="button">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
