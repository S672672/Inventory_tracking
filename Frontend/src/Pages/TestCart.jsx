import React, { useEffect, useState } from 'react';
import { getCart } from '../Api/Api';

const TestCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);

  const fetchCart = async () => {
    try {
      const response = await getCart();
      console.log("Response from getCart:", response); // Log the entire response

      // Ensure that the cart data is available
      if (response && response.cart) {
        setCartItems(response.cart);
      } else {
        throw new Error("Cart data is missing or not in the expected format");
      }
    } catch (err) {
      setError(err.message);
      console.error("Error fetching cart:", err); // Log the error for debugging
    }
  };

  useEffect(() => {
    fetchCart();
  }, []); // No dependencies means it runs only once when the component mounts

  return (
    <div>
      <h2>Your Cart</h2>
      {error && <p>Error: {error}</p>}
      <ul>
        {cartItems.map((item) => (
          <li key={item._id}>
            <span>{item.productId.name}</span> - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestCart;
