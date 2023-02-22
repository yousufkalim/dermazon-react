// import components and libraries

import React from 'react';
import { useTranslation } from 'react-i18next';
import ServicesList from './ServicesList';
import SingleService from './SingleService';

// import icons and home

import icon1 from '../../../assets/home/icon1.svg';
import icon2 from '../../../assets/home/icon2.svg';
import icon3 from '../../../assets/home/icon3.svg';
import icon4 from '../../../assets/home/icon4.svg';
import icon5 from '../../../assets/home/icon5.svg';
import serviceBG from '../../../assets/home/serviceBG.svg';
// import service1 from '../../../assets/home/service1.svg';
// import service2 from '../../../assets/home/service2.svg';
import SingleService3 from '../../../assets/home/LaserMachineImg.svg';
import SingleService4 from '../../../assets/home/SingleService4.svg';
import SingleService5 from '../../../assets/home/SingleService5.svg';
import BuyALaser from '../../../assets/home/BuyALaser.svg';
import SellALaser from '../../../assets/home/SellALaser.svg';

export default function Index({ setFlag }) {
  const { t } = useTranslation();

  return (
    <div className="services_section_main" id="services_sectionid">
      <div className="services_section_bg">
        <img className="services_section_bg_img" src={serviceBG} alt="Service" />
      </div>
      <ServicesList />
      <div className="services_section">
        {/* <span className="services_section_span">USED USER FOR ALL</span> */}
        <h1 className="services_section_heading">
          {t('Our')} <span>{t('Services')}</span>
        </h1>
        {/* <p className="services_section_text_p">
          based in the Paris region, and is specialized in lasers and energy-based device used in
          dermatology{' '}
        </p> */}
      </div>
      <SingleService
        sectionId="BuyALaser"
        bgColor="rgba(66, 85, 255, 0.1)"
        icon={icon1}
        title={t('Buy a pre-owned laser')}
        btnBg="#02225E"
        btnText={t('Buy A Laser')}
        serviceDescription={t(
          'We sell high quality and brand premium pre-owned laser, they are checked and revised by independent and experienced service engineers. Find the right laser with us and save 50% on average compared to new.',
        )}
        image={BuyALaser}
        Path="/acheter-laser"
        setFlag={setFlag}
      />
      <SingleService
        sectionId="SellYourLaser"
        bgColor="rgba(253, 177, 51, 0.1)"
        reverse
        icon={icon2}
        title={t('Sell Your Laser')}
        btnBg="#B3881D"
        btnText={t('Contact us')}
        serviceDescription={t(
          'The process of selling your used medical laser is very easy. Fill the form below, and after review of your machine, we will either purpose you a purchase offer within 24 hours or we will list it on our marketplace and actively sell it with our partners and clients.',
        )}
        image={SellALaser}
        setFlag={setFlag}
      />
      <SingleService
        sectionId="MaintainYourLaser"
        bgColor="rgba(117, 203, 65, 0.1)"
        icon={icon3}
        title={t('Maintain Your Laser')}
        btnBg="#75CB41"
        btnText={t('Contact us')}
        serviceDescription={t(
          'All medical laser equipment require a periodical preventive maintenance at least once a year, and this to avoid costly breakdowns and to guarantee good clinical functioning. For the moment we offer a laser repair and preventive maintenance with flashlamp change and handpieces refurbishment of certain brands. Do not hesitate to contact us for a quote or for more information',
        )}
        image={SingleService3}
        setFlag={setFlag}
      />
      <SingleService
        sectionId="RentALaser"
        bgColor="rgba(66, 198, 255, 0.1)"
        reverse
        icon={icon4}
        title={t('Rent a Laser')}
        btnBg="#42C6FF"
        btnText={t('Contact us')}
        serviceDescription={t(
          "Renting an equipment is an ideal step before buying one, it's also a way to avoid committing to an expensive investment without having visibility on your activity of aesthetic medicine. You can rent according to your needs with an option to buy. Contact us for a quote and to know the availability of the technology you are looking for.",
        )}
        image={SingleService4}
        setFlag={setFlag}
      />
      <SingleService
        sectionId="DeliveryAndMove"
        bgColor="rgba(253, 136, 51, 0.1)"
        icon={icon5}
        title={t('Pick-up and Delivery')}
        btnBg="#FD8833"
        btnText={t('Contact us')}
        serviceDescription={t(
          'The transport of lasers requires special attention due to the optical alignment of the laser beams, which is why we take care of the transport ourselves under the right conditions. We are also available to manufacturers as a subcontractor',
        )}
        image={SingleService5}
        showImage
        setFlag={setFlag}
      />
    </div>
  );
}
