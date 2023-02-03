// import components and libraries

import React from 'react';
import ServicesList from './ServicesList';
import SingleService from './SingleService';

// import icons and home

import icon1 from '../../../assets/home/icon1.svg';
import icon2 from '../../../assets/home/icon2.svg';
import icon3 from '../../../assets/home/icon3.svg';
import icon4 from '../../../assets/home/icon4.svg';
import icon5 from '../../../assets/home/icon5.svg';
import serviceBG from '../../../assets/home/serviceBG.svg';
import service1 from '../../../assets/home/service1.svg';
import service2 from '../../../assets/home/service2.svg';
import SingleService3 from '../../../assets/home/LaserMachineImg.svg';
import SingleService4 from '../../../assets/home/SingleService4.svg';
import SingleService5 from '../../../assets/home/SingleService5.svg';

export default function Index() {
  return (
    <div className="services_section_main" id="services_sectionid">
      <div className="services_section_bg">
        <img className="services_section_bg_img" src={serviceBG} alt="Service" />
      </div>
      <div className="services_section">
        {/* <span className="services_section_span">USED USER FOR ALL</span> */}
        <h1 className="services_section_heading">
          Our <span>Services</span>
        </h1>
        {/* <p className="services_section_text_p">
          based in the Paris region, and is specialized in lasers and energy-based device used in
          dermatology{' '}
        </p> */}
      </div>
      <ServicesList />
      <SingleService
        sectionId="BuyALaser"
        bgColor="rgba(66, 85, 255, 0.1)"
        icon={icon1}
        title="Buy A Pre-Owned Laser"
        btnBg="#02225E"
        btnText="Contact us"
        serviceDescription="We sell high quality and brand premium pre-owned laser, they are checked and revised by independent and experienced service engineers, it is a cost effective option to buy the right used laser, you can save on average of 40% compared to new."
        image={service1}
      />
      <SingleService
        sectionId="SellYourLaser"
        bgColor="rgba(253, 177, 51, 0.1)"
        reverse
        icon={icon2}
        title="Sell Your Laser"
        btnBg="#B3881D"
        btnText="Contact us"
        serviceDescription="The process of selling your used medical laser is very easy. Fill the form below, and after review of your machine, we will either purpose you a purchase offer within 48 hours or we will list it on our marketplace and actively sell it with our partners and clients."
        image={service2}
      />
      <SingleService
        sectionId="MaintainYourLaser"
        bgColor="rgba(117, 203, 65, 0.1)"
        icon={icon3}
        title="Maintain Your Laser"
        btnBg="#75CB41"
        btnText="Contact us"
        serviceDescription="All cosmetic and medical laser equipment requires a periodical preventive maintenance at least once a year, and this to avoid costly breakdowns and to guarantee good clinical functioning. For the moment we service some brands and working with others with independent field service engineers. Contact us for a quote."
        image={SingleService3}
      />
      <SingleService
        sectionId="RentALaser"
        bgColor="rgba(66, 198, 255, 0.1)"
        reverse
        icon={icon4}
        title="Rent a Laser"
        btnBg="#42C6FF"
        btnText="Contact us"
        serviceDescription="Renting an equipment is a step before committing to buying one in the future, it is also a way to avoid committing to a costly investment without having visibility of your aesthetic medicine activity. Contact us for a quote and availability of the technology you are looking for."
        image={SingleService4}
      />
      <SingleService
        sectionId="DeliveryAndMove"
        bgColor="rgba(253, 136, 51, 0.1)"
        icon={icon5}
        title="Pick-up and Delivery"
        btnBg="#FD8833"
        btnText="Contact us"
        serviceDescription="All equipment with an optical system needs a special care during transport because of the optical beam alignments, this is why we pick-up and deliver it ourselves in safe and good conditions. All international transport we provide packaging with appropriate pallet. Dermazon is also available for all manufacturers for their equipment transportation needs."
        image={SingleService5}
        showImage
      />
    </div>
  );
}
