// import components and libraries

import React from 'react';
import { useTranslation } from 'react-i18next';
import ServicesList from './ServicesList';
import SingleService from './SingleService';
import thumbbb from '../../../assets/thumbbb.svg';

// import icons and home

// import icon1 from '../../../assets/home/icon1.svg';
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
// import BuyALaser from '../../../assets/home/BuyALaser.svg';
import SellALaser from '../../../assets/home/SellALaser.svg';
// import LaserComponents from '../../components/laser';
import LaserComponents from '../../laser';
import ClientsFeedBack from '../ClientsFeedBack';

export default function Index({ setFlag }) {
  const { t } = useTranslation();
  function scrollToContact() {
    const contactSection = document.getElementById('about');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="services_section_main" id="services_sectionid">
      <div className="services_section_bg">
        <img className="services_section_bg_img" src={serviceBG} alt="Service" />
      </div>
      <ServicesList />
      {/* <div className="services_section"> */}
      {/* <span className="services_section_span">USED USER FOR ALL</span> */}
      {/* <h1 className="services_section_heading">
          {t('Our')} <span>{t('Services')}</span>
        </h1> */}
      {/* <p className="services_section_text_p">
          based in the Paris region, and is specialized in lasers and energy-based device used in
          dermatology{' '}
        </p> */}
      {/* </div> */}
      {/* <SingleService
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
      /> */}

      <LaserComponents />
      <div className="btnWrapDiv1">
        <button className="single_service_btn12" type="button" onClick={() => scrollToContact()}>
          {t('Contact us')}
        </button>
      </div>
      <SingleService
        sectionId="SellYourLaser"
        bgColor="rgba(253, 177, 51, 0.1)"
        reverse
        icon={icon2}
        title={t('Sell your old laser')}
        btnBg="#B3881D"
        btnText={t('Contact us')}
        serviceDescription={t(
          "Don't let your lasers gather dust, we buy a wide variety of medical aesthetic lasers, from the latest to the oldest, and help you get the best price. Our trade-in process is simple and transparent: fill in our form to get a competitive quote based on the age, condition and number of shots of your equipment.",
        )}
        image={SellALaser}
        setFlag={setFlag}
      />
      <SingleService
        sectionId="MaintainYourLaser"
        bgColor="rgba(117, 203, 65, 0.1)"
        icon={icon3}
        title={t('Maintain and repair your laser')}
        btnBg="#75CB41"
        btnText={t('Contact us')}
        serviceDescription={t(
          "All medical lasers require periodic maintenance at least once a year to ensure proper clinical operation, avoid costly breakdowns and extend the life of the equipment. Dermazon offers complete maintenance and repair services under contract, in accordance with the manufacturer's protocols, such as preventive visits including precise calibrations, replacement of consuming parts such as flash lamps, optics and filters, and reconditioning of laser handpieces.",
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
          'We offer flexible rental solutions to suit your needs, allowing you to grow your business without a large initial investment.By renting your equipment from us, you benefit from access to the latest technology, controlled costs including maintenance, and the option to purchase the laser during the rental period. In addition, our team of professionals is always available to assist you in the use of your equipment and answer any questions you may have.',
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
          'The transport of medical lasers requires special attention due to the optical alignment of the light beams. That is why we take care of the transport ourselves under the best possible conditions.We also work with manufacturers by offering them a delivery-installation service by a qualified and experienced service engineer, to ensure that the lasers are properly installed once they arrive at their destination.',
        )}
        image={SingleService5}
        showImage
        setFlag={setFlag}
      />
      <div className="clientsFeedBackSection">
        <div className="clientTestirowDiv">
          <div className="imgThumbDiv">
            {' '}
            <img src={thumbbb} alt="thumbbb" />{' '}
          </div>
          <p className="clientFeedBackHeadingtxt">
            <span className="colortxtPartLaser"> {t('Clients')}</span>{' '}
            <span className="colortxtPartClient">{t('Testimonials')}</span>
          </p>
        </div>
        <ClientsFeedBack />
      </div>
    </div>
  );
}
