import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import API from '../../api';
import LaserHeroSection from './LaserHeroSection';
import LaserItemsCard from './LaserItemsCard';
import LoadMoreButton from './LoadMoreButton';

export default function LaserComponents() {
  const [products, setProducts] = useState([]);
  const [showmore, setShowmore] = useState(5);
  const getProducts = async () => {
    await API('get', '/products')
      .then((res) => {
        setProducts(res?.data?.data?.products);
      })

      .catch((err) => {
        toast.error(err);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="Laser_components">
      <LaserHeroSection />

      {products?.slice(0, showmore).map((product) => (
        <LaserItemsCard product={product} />
      ))}

      <div>
        <LoadMoreButton
          onPress={() => {
            setShowmore((prev) => prev + 5);
          }}
        />
      </div>
    </div>
  );
}
