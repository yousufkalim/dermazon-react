import React, { useEffect, useState } from 'react';
import { createFilter } from 'react-search-input';
import { Pagination } from '@mui/material';
import { toast } from 'react-toastify';
import API from '../../api';
import LaserHeroSection from './LaserHeroSection';
import LaserItemsCard from './LaserItemsCard';

export default function LaserComponents() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(10);
  const KEYS_TO_FILTERS = ['name'];
  const getProducts = async () => {
    await API('get', '/products')
      .then((res) => {
        res?.data?.data?.products.sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateB - dateA;
        });

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
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredData.slice(indexOfFirstCard, indexOfLastCard);
  const handleChangepage = (event, value) => {
    setCurrentPage(value);
  };
  let numberOfPages;
  if (filteredData) {
    numberOfPages = Math.ceil(filteredData.length / 10);
  } else {
    numberOfPages = 0;
  }

  return (
    <div className="Laser_components">
      <LaserHeroSection searchQuery={searchQuery} handleChange={handleChange} />
      {currentCards.map((product) => (
        <LaserItemsCard product={product} />
      ))}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <Pagination count={numberOfPages} page={currentPage} onChange={handleChangepage} />
        </div>
      </div>
    </div>
  );
}
