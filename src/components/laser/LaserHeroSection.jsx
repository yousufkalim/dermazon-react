import React from 'react';
import { useTranslation } from 'react-i18next';
import InputSearch from '../common/InputSearch';

export default function LaserHeroSection({ handleChange, searchQuery }) {
  const { t } = useTranslation();

  return (
    <div className="laser_outer_main">
      <div className="laser_hero_section_header">
        {/* <div className="laser_hero_section_heading_text">used laser for all</div> */}
        {/* <div className="laser_hero_section_heading"> Acheter un laser d'occasion</div> */}
        <div className="laser_hero_section_heading">
          <span className="colortxtPartLaser">{t('Buy a')}</span>
          <span>{t('Pre-Owned Laser')}</span>
        </div>

        <div className="laser_hero_section_text_paragraph">
          {/* {t(
            'We are also laser hunters, you are looking for a particular laser which is not in the below list, get in touch with us and we will find it for you.',
          )} */}
          <p>
            {t(
              "Dermazon is able to offer you a selection of used medical aesthetic lasers, carefully chosen for their reliability, quality and effectiveness in specific aesthetic treatments. However, if you are looking for a particular model that is not in our list, don't hesitate to ask us, thanks to our extensive network of contacts in France and abroad, we can find the right laser that will perfectly meet your needs.",
            )}
          </p>
        </div>
      </div>
      <div className="LaserInputSearch_component">
        <InputSearch searchQuery={searchQuery} handleChange={handleChange} />
      </div>
    </div>
  );
}
