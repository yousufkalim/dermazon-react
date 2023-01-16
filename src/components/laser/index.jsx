import React, { useEffect, useState } from 'react';
import { createFilter } from 'react-search-input';
import { toast } from 'react-toastify';
import API from '../../api';
import LaserHeroSection from './LaserHeroSection';
import LaserItemsCard from './LaserItemsCard';
import LoadMoreButton from './LoadMoreButton';

export default function LaserComponents() {
  const [products, setProducts] = useState([]);
  const [showmore, setShowmore] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');
  const KEYS_TO_FILTERS = ['name'];
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
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = products.filter(createFilter(searchQuery, KEYS_TO_FILTERS));

  return (
    <div className="Laser_components">
      <LaserHeroSection searchQuery={searchQuery} handleChange={handleChange} />

      {filteredData?.slice(0, showmore).map((product) => (
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
