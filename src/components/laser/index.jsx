import React, { useEffect, useState } from 'react';
import API from '../../api';
import LaserHeroSection from './LaserHeroSection';
import LaserItemsCard from './LaserItemsCard';
import LoadMoreButton from './LoadMoreButton';

export default function LaserComponents() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    await API('get', '/products')
      .then((res) => {
        setProducts(res?.data?.data?.products);
        console.log('Products ', res);
      })
      .catch((err) => console.log('ERROR ', err));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="Laser_components">
      <LaserHeroSection />
      {products?.map((product) => (
        <LaserItemsCard product={product} />
      ))}
      <LoadMoreButton />
    </div>
  );
}
