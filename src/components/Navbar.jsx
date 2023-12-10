import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const cartItemCount = useSelector(state => state.cart.cartItems.length);

  return (
    <nav>
      <div>МОЙ МАГАЗИН</div>
      <div>
        <ul>
            <li>
                <Link to="/">Домой</Link>
            </li>
            <li>
                <Link to="/cart">Cart: {cartItemCount}</Link>
            </li>
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;
