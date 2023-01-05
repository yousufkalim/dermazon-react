import React from 'react';

import LaserHeroSection from './LaserHeroSection';
import LaserItemsCard from './LaserItemsCard';
import LoadMoreButton from './LoadMoreButton';

import kindpng7087 from '../../assets/laser_items/image 3 (1).png';
import RobotArtasCart from '../../assets/laser_items/image 3 (2).png';
import RfProfoundCandela from '../../assets/laser_items/image 3 (3).png';
import Kndpng70872 from '../../assets/laser_items/image 3.png';

export default function LaserComponents() {
  return (
    <div className="Laser_components">
      <LaserHeroSection />
      <LaserItemsCard pic={Kndpng70872} />
      <LaserItemsCard pic={kindpng7087} />
      <LaserItemsCard pic={RobotArtasCart} />
      <LaserItemsCard pic={Kndpng70872} />
      <LaserItemsCard pic={RfProfoundCandela} />
      <LoadMoreButton />
    </div>
  );
}
