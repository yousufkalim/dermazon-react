import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import EuroIcon from '@mui/icons-material/Euro';
import moment from 'moment';
import Collapse from '@mui/material/Collapse';
import ShareIcon from '@mui/icons-material/Share';
import { EmailShareButton } from 'react-share';
// import vender from '../../assets/home/vender.png';
import { mediaUrl } from '../../config';

export default function LaserItemsCard({ product }) {
  const [expanded, setExpanded] = useState(false);
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const url = 'https://dermazon-staging.falconweb.app/acheter-laser';
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
          <img className="product_img" src={`${mediaUrl}/${product?.images[0]}`} alt="product" />
          {product?.availability === false ? (
            // <img className="vendu" src={vender} alt="product" />
            <p className="vendu">VENDU</p>
          ) : (
            // <p className="vendu">vendu</p>
            ''
          )}
        </div>
        <div className="items_card_text">
          <div className="items_card_text_price">{product?.price}&nbsp;</div>
          <div className="items_card_text_heading">
            {product?.name} {product?.brand ? '-' : ''} {product?.brand}
          </div>
          {/* {console.log(product, language)} */}
          <div className="items_card_text_description">
            {language === 'fr' ? product?.frenchDescription : product?.description}
          </div>

          <div className="items_card_text_date">
            <div>
              <CalendarMonthIcon />
            </div>
            <div className="date_format"> {moment(product.createdAt).format('DD/MM/YYYY')}</div>
          </div>

          <Collapse in={expanded} timeout="auto" unmountOnExit className="laser_collapse">
            <div className="items_card_description">
              <div>
                {language === 'fr'
                  ? product?.frenchTechnicalDescription
                  : product?.technical_description}
                {/* {product?.technical_description
                  ? product?.technical_description
                  : '2020 handpiece Perfect condition BTL emtone with afordable price 2020 handpiece Perfect condition BTL emtone with afordable price'} */}
              </div>

              {/* <div className="items_card_Year">
                Year <p>{moment(product.createdAt).format('YYYY')} </p>
              </div> */}
              <div className="items_card_telephone">
                {' '}
                Telephone <p> +33 695 12 03 33</p>
              </div>
            </div>
          </Collapse>
        </div>
        <div className="items_card_share_icon">
          <EmailShareButton
            url={url}
            mailto="mailto:no-reply@example.com"
            target="_blank"
            subject={`${product?.name}  ${product?.brand} ${t('available at Dermazon France')}`}
            body={`${product?.name}  ${product?.brand} ${t('available at Dermazon France')}`}
            quote="Dermazone"
          >
            {/* <MailOutlineIcon round={true} className="socialIcons mail" /> */}
            <ShareIcon className="items_card_share_icon_mui" />
          </EmailShareButton>

          {/* <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer">
            
          </a> */}
        </div>
      </div>
    </div>
  );
}
