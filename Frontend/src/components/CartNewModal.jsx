// components/CartModal.js
import React from 'react';
import { useCart } from '../context/CartContext';

const CartModal = ({ isOpen, onClose }) => {
  const { cart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="cart-modal">
      <button onClick={onClose}>Close</button>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <p>{item.productId.name}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default CartModal;
