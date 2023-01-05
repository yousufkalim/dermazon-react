import React from 'react';

import LaserHeroSection from './LaserHeroSection';
import LaserItemsCard from './LaserItemsCard';
import LoadMoreButton from './LoadMoreButton';

export default function LaserComponents({ products }) {
  return (
    <div className="Laser_components">
      <LaserHeroSection />
      {products?.map((product) => (
        <LaserItemsCard product={product} />
      ))}
      {/* <LaserItemsCard pic={kindpng7087} />
      <LaserItemsCard pic={RobotArtasCart} />
      <LaserItemsCard pic={Kndpng70872} />
      <LaserItemsCard pic={RfProfoundCandela} /> */}
      <LoadMoreButton />
    </div>
  );
}
