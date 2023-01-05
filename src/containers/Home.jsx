// Init
import React, { useEffect, useState } from 'react';

// Importing Components

import LaserComponents from '../components/laser/LaserComponents';
import API from '../api';
// Home Component
export default function Home() {
  const [products, setProducts] = useState([]);

  console.log('Products page ===>');

  const getProducts = async () => {
    console.log('Get products run');
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
    <div>
      <LaserComponents products={products} />
    </div>
  );
}
