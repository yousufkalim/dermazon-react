import React, { useState } from 'react';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import moment from 'moment';
import Collapse from '@mui/material/Collapse';
import iconsImage from '../../assets/laser_items/Vector.png';
import { mediaUrl } from '../../config';

export default function LaserItemsCard({ product }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log('Single product ', `${mediaUrl}/${product?.images?.[0]}`);
  return (
    <div className="Laser_items_card_outer" onClick={handleExpandClick} role="presentation">
      <div className={expanded ? 'Laser_items_card_expand' : 'Laser_items_card'}>
        <div className="items_card_image">
          <img src={`${mediaUrl}/${product?.images?.[1]}`} alt="product" />
        </div>
        <div className="items_card_text">
          <div className="items_card_text_price">{product?.price}</div>
          <div className="items_card_text_heading">{product?.name}</div>
          <div className="items_card_text_description">
            {/* 2020 handpiece Perfect condition BTL emtone with afordable price */}
            {product?.description}
          </div>

          <div className="items_card_text_date">
            <div className="items_card_text_date_icon">
              <CalendarMonthIcon sx={{ fontSize: 30 }} />
            </div>
            <div className="date_format"> {moment(product.createdAt).format('DD/mm/YYYY')}</div>
          </div>

          <Collapse in={expanded} timeout="auto" unmountOnExit className="laser_collapse">
            <div className="items_card_text">
              <div className="items_card_description">
                <div>
                  {product?.technical_description}
                  {/* Excellent general condition <br /> Some traces of oxidation on the PAM <br />{' '}
                  Maintenance contract until October 2023 */}
                </div>
                <br />
                <div>
                  Year{' '}
                  <p className="items_card_telephone">{moment(product.createdAt).format('YYYY')}</p>
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
