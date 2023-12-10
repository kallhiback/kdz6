import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/reducers/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      <img src={product.picture} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <button onClick={handleAddToCart}>Купить</button>
    </div>
  );
};

export default ProductCard;
