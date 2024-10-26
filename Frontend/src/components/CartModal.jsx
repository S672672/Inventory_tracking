import React from 'react';
import { useNavigate } from 'react-router-dom';

const CartModal = ({ isOpen, onClose, cartItems }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`fixed top-16 right-0 w-80 bg-white shadow-xl border-l border-gray-200 rounded-l-2xl transition-transform duration-500 ease-in-out ${
        isOpen ? 'transform translate-x-0' : 'transform translate-x-full'
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="p-6 relative">
        <h2 className="text-xl font-bold text-gray-800 flex items-center">
          🛒 Your Cart
          <button
            onClick={onClose}
            className="ml-auto text-gray-500 hover:text-gray-900 focus:outline-none"
            aria-label="Close Cart"
          >
            &times;
          </button>
        </h2>

        {cartItems.length > 0 ? (
          <div className="mt-4 space-y-4">
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-4 bg-gray-50 p-3 rounded-lg shadow-sm">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded-full border border-gray-300"
                />
                <div className="flex-1">
                  <p className="text-gray-800 font-semibold">{item.name}</p>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
                </div>
                <button className="text-red-500 hover:text-red-700 font-semibold focus:outline-none">
                  Remove
                </button>
              </div>
            ))}
            <button
              onClick={() => {
                navigate('/checkout');
                onClose();
              }}
              className="w-full mt-6 bg-gradient-to-r from-green-400 to-green-600 text-white py-2 rounded-lg font-semibold text-lg shadow-md hover:from-green-500 hover:to-green-700 transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        ) : (
          <div className="mt-6 text-center text-gray-600">
            <p>Your cart is empty!</p>
            <p className="mt-2 text-sm">Add some products to see them here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
