import React, { useState } from 'react';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EuroIcon from '@mui/icons-material/Euro';
import moment from 'moment';
import Collapse from '@mui/material/Collapse';
import ShareIcon from '@mui/icons-material/Share';

import { mediaUrl } from '../../config';

export default function LaserItemsCard({ product }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="Laser_items_card_outer">
      <div
        className={expanded ? 'Laser_items_card_expand' : 'Laser_items_card'}
        onClick={handleExpandClick}
        role="presentation"
      >
        <div className="items_card_image">
          <img src={`${mediaUrl}/${product?.images[0]}`} alt="product" />
        </div>
        <div className="items_card_text">
          <div className="items_card_text_price">
            {product?.price}&nbsp;
            <EuroIcon fontSize="small" />
          </div>
          <div className="items_card_text_heading">
            {product?.name} {product?.brand ? '-' : ''} {product?.brand}
          </div>

          <div className="items_card_text_description">{product?.description}</div>

          <div className="items_card_text_date">
            <div>
              <CalendarMonthIcon />
            </div>
            <div className="date_format"> {moment(product.createdAt).format('DD/MM/YYYY')}</div>
          </div>

          <Collapse in={expanded} timeout="auto" unmountOnExit className="laser_collapse">
            <div className="items_card_description">
              <div>
                {product?.technical_description
                  ? product?.technical_description
                  : '2020 handpiece Perfect condition BTL emtone with afordable price 2020 handpiece Perfect condition BTL emtone with afordable price'}
              </div>

              <div className="items_card_Year">
                Year <p>{moment(product.createdAt).format('YYYY')} </p>
              </div>
              <div className="items_card_telephone">
                {' '}
                Telephone <p> +33 695 12 03 33</p>
              </div>
            </div>
          </Collapse>
        </div>
        <div className="items_card_share_icon">
          <ShareIcon />
        </div>
      </div>
    </div>
  );
}
