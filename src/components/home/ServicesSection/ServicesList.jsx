import React from 'react';
import List from './List';
import icon1 from '../../../assets/icon1.svg';
import icon2 from '../../../assets/icon2.svg';
import icon3 from '../../../assets/icon3.svg';
import icon4 from '../../../assets/icon4.svg';
import icon5 from '../../../assets/icon5.svg';

export default function ServicesList() {
  return (
    <div className="list">
      <List
        sectionId="BuyALaser"
        title="Buy a laser"
        description="We sell high quality and brand premium pre-owned laser, they are checked and revised by independent and experienced service engineers, it is a cost effective option to buy the right used laser, you can save on average of 40% compared to new."
        icon={icon1}
        number="1"
        background="#02225E"
        titleColor="#02225E"
      />
      <List
        sectionId="SellYourLaser"
        title="Sell your Laser"
        description="The process of selling your used medical laser is very easy. Fill the form below, and after review of your machine, we will either purpose you a purchase offer within 48 hours or we will list it on our marketplace and actively sell it with our partners and clients."
        icon={icon2}
        number="2"
        background="#B3881D"
        titleColor="#B3881D"
      />
      <List
        sectionId="MaintainYourLaser"
        title="Maintain Your Laser"
        description="All cosmetic and medical laser equipment requires a periodical preventive maintenance at least once a year, and this to avoid costly breakdowns and to guarantee good clinical functioning. For the moment we service some brands and working with others with independent field service engineers. Contact us for a quote."
        icon={icon3}
        number="3"
        background="#75CB41"
        titleColor="#75CB41"
      />
      <List
        sectionId="RentALaser"
        title="Rent a Laser"
        description="Renting an equipment is a step before committing to buying one in the future, it is also a way to avoid committing to a costly investment without having visibility of your aesthetic medicine activity. Contact us for a quote and availability of the technology you are looking for."
        icon={icon4}
        number="4"
        background="#42C6FF"
        titleColor="#42C6FF"
      />
      <List
        sectionId="DeliveryAndMove"
        title="Delivery and move"
        description="All equipment with an optical system needs a special care during transport because of the optical beam alignments, this is why we pick-up and deliver it ourselves in safe and good conditions. All international transport we provide packaging with appropriate pallet. Dermazon is also available for all manufacturers for their equipment transportation needs. "
        icon={icon5}
        number="5"
        background="#FD8833"
        titleColor="#FD8833"
      />
    </div>
  );
}
