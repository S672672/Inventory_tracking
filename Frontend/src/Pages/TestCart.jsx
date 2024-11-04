import React, { useEffect, useState } from 'react';
import { getCart, removeFromCart, clearCart } from '../Api/Api';

const TestCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const data = await getCart(); 
        setCartItems(data.cart); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); 
      }
    };

    fetchCartItems();
  }, []);

  const handleRemove = async (itemId, itemType) => {
    try {
      await removeFromCart(itemId, itemType); 
      setCartItems((prevItems) => 
        prevItems.filter((item) => item.itemId !== itemId || item.itemType !== itemType)
      ); 
    } catch (err) {
      setError(err.message);
    }
  };

  const handleClearCart = async () => {
    try {
      await clearCart(); 
      setCartItems([]);
    } catch (err) {
      setError(err.message); 
    }
  };

  if (loading) {
    return <div className="text-center py-4">Loading...</div>; 
  }

  if (error) {
    return <div className="text-red-600 text-center py-4">Error: {error}</div>; 
  }

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p> 
      ) : (
        <div>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.itemId} className="flex justify-between items-start p-4 border rounded-lg shadow-sm">
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2> 
                  <p className="text-gray-600">{item.description}</p> 
                  <span className="text-gray-800 font-bold">${item.price.toFixed(2)}</span> 
                  <div className="text-gray-600">Quantity: {item.quantity}</div>
                </div>
                <button 
                  onClick={() => handleRemove(item.itemId, item.itemType)} 
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button 
            className="mt-4 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700" 
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default TestCart;
