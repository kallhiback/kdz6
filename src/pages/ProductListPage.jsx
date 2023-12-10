import React, { useState, useEffect } from 'react';
import productsData from '../data/products.json';
import ProductCard from '../components/ProductCart';
import { useSelector } from 'react-redux';

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const cart = useSelector(state => state.cart);
  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <p>Items in Cart: {cart.length}</p> 
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
