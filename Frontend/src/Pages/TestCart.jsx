import React, { useEffect, useState } from 'react';
import { getCart, removeFromCart, clearCart, updateCartItem } from '../Api/Api';

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

  const incrementQuantity = async (itemId, itemType) => {
    try {
      const updatedCart = cartItems.map((item) => {
        if (item.itemId === itemId && item.itemType === itemType) {
          const updatedQuantity = item.quantity + 1;
          return { ...item, quantity: updatedQuantity };
        }
        return item;
      });
      setCartItems(updatedCart);
      alert('Item quantity updated');
      await updateCartItem(itemId, itemType, updatedCart.find(item => item.itemId === itemId && item.itemType === itemType).quantity);
    } catch (err) {
      setError(err.message);
    }
  };

  const decrementQuantity = async (itemId, itemType) => {
    try {
      const updatedCart = cartItems.map((item) => {
        if (item.itemId === itemId && item.itemType === itemType) {
          const updatedQuantity = item.quantity > 1 ? item.quantity - 1 : 1;
          return { ...item, quantity: updatedQuantity };
        }
        return item;
      });
      setCartItems(updatedCart);
      await updateCartItem(itemId, itemType, updatedCart.find(item => item.itemId === itemId && item.itemType === itemType).quantity);
    } catch (err) {
      setError(err.message);
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

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
        <div className="flex flex-col items-center justify-center">
          <p className="text-center text-gray-500">Your cart is empty.</p>
          <img src='./src/assets/pictures/empty.jpg' alt="Empty Cart" />
        </div>
      ) : (
        <div>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.itemId} className="flex justify-between items-start p-4 border rounded-lg shadow-sm">
                <div className="flex-1">
                  <div className="flex space-x-4">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-full"
                        style={{ border: '1px solid black' }}
                      />
                    )}
                    <div>
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p className="text-gray-600">{item.description}</p>
                      <span className="text-gray-800 font-bold">
                        ${ (item.price * item.quantity).toFixed(2) }
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <button
                      onClick={() => decrementQuantity(item.itemId, item.itemType)}
                      className="bg-gray-300 text-gray-800 px-2 rounded"
                    >
                      -
                    </button>
                    <span className="text-gray-600">Quantity: {item.quantity}</span>
                    <button
                      onClick={() => incrementQuantity(item.itemId, item.itemType)}
                      className="bg-gray-300 text-gray-800 px-2 rounded"
                    >
                      +
                    </button>
                  </div>
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
          <div className="text-right font-bold text-xl mt-4">
            Total Price: ${totalPrice.toFixed(2)}
          </div>
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
