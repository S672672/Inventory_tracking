import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Cart({ isVisible, onClose }) {
  const [quantity, setQuantity] = useState(2);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div
      className={`fixed top-16 right-0 h-[calc(100vh-4rem)] w-full max-w-sm md:max-w-md lg:max-w-lg bg-white shadow-lg transition-transform duration-300 ${isVisible ? 'translate-x-0' : 'translate-x-full'} z-50`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-bold">Cart Preview</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="bg-gray-100 rounded-t-lg p-4 mb-4">
        <h3 className="text-md font-bold">Produce</h3>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1590555116250-9e7839c44d41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="White Corn"
              className="w-16 h-16 rounded-md" />
            <div className="ml-4">
              <h4 className="text-lg font-bold">White Corn</h4>
              <span className="text-gray-600">1.0 ea</span>
            </div>
          </div>
          <div>
            <span className="text-lg font-bold">$1.20</span>
            <span className="text-sm text-gray-600 line-through">
              $0.60 ea
            </span>
            <span className="text-sm text-gray-600">$0.95 ea</span>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <button
            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-l"
            onClick={handleDecrement}
          >
            -
          </button>
          <span className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-none">{quantity}</span>
          <button
            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-r"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center p-4 border-t">
        <span className="text-lg font-bold">Estimated Total: $1.20</span>
        <Link to = '/reviewcart'>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          Review Cart
        </button>
        </Link>
      </div>
    </div>
  );
}
