import React from 'react';
import InputSearch from '../common/InputSearch';

export default function LaserHeroSection({ handleChange, searchQuery }) {
  return (
    <div className="laser_outer_main">
      <div className="laser_hero_section_header">
        {/* <div className="laser_hero_section_heading_text">used laser for all</div> */}
        <div className="laser_hero_section_heading">Buy A Pre-Owned Laser</div>
        <div className="laser_hero_section_text_paragraph">
          We are also laser hunters, you are looking for a particular laser which is not in the
          below list, get in touch with us and we will find it for you.
        </div>
      </div>
      <div className="LaserInputSearch_component">
        <InputSearch searchQuery={searchQuery} handleChange={handleChange} />
      </div>
    </div>
  );
}
