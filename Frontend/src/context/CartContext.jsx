import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    if (quantity <= 0) return; 

    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item._id === product._id);
      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;

        if (newQuantity <= product.stock) {
          return prevItems.map(item =>
            item._id === product._id ? { ...item, quantity: newQuantity } : item
          );
        } else {
          alert('Cannot add more items than available in stock');
          return prevItems; 
        }
      }
      return [...prevItems, { ...product, quantity }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item._id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
