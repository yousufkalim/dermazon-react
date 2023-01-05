import React, { useState } from 'react';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Collapse from '@mui/material/Collapse';
import iconsImage from '../../assets/laser_items/Vector.png';

export default function LaserItemsCard({ pic }) {
  const [expanded, setExpanded] = useState(false);
  // var date = moment();
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  // var currentDate = date.format('D/MM/YYYY');
  const fullyear = new Date().getFullYear();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="Laser_items_card_outer" onClick={handleExpandClick} role="presentation">
      <div className={expanded ? 'Laser_items_card_expand' : 'Laser_items_card'}>
        <div className="items_card_image">
          <img src={pic} alt="" />
        </div>
        <div className="items_card_text">
          <div className="items_card_text_price">18000 €</div>
          <div className="items_card_text_heading">BTL Emtone</div>
          <div className="items_card_text_description">
            2020 handpiece Perfect condition BTL emtone with afordable price
          </div>

          <div className="items_card_text_date">
            <div>
              <CalendarMonthIcon />
            </div>

            {`${day}/${month}/${year}`}
          </div>

          <Collapse in={expanded} timeout="auto" unmountOnExit className="laser_collapse">
            <div className="items_card_text">
              <div className="items_card_description">
                <div>
                  Excellent general condition <br /> Some traces of oxidation on the PAM <br />{' '}
                  Maintenance contract until October 2023
                </div>
                <br />
                <div>
                  Year <p className="items_card_telephone">{fullyear}</p>
                </div>
                <br />
                <div>
                  {' '}
                  Telephone <p className="items_card_telephone"> +33 695 12 03 33</p>
                </div>
              </div>
            </div>
          </Collapse>
        </div>
        <div className="items_card_share_icon">
          <img src={iconsImage} alt="" />
        </div>
      </div>
    </div>
  );
}
