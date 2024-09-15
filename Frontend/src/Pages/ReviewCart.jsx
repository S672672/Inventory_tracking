import React, { useState } from 'react';

export default function ReviewCart() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Cart Preview</h2>
        <button className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="border-b border-gray-200 py-2 mb-4">
        <h3 className="text-md font-semibold">Produce</h3>
      </div>
      <div className="flex items-center mb-4">
        <img
          src="https://images.unsplash.com/photo-1572287265177-e2e9397f0078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="White Corn"
          className="w-20 h-20 rounded-lg object-cover mr-4"
        />
        <div>
          <h4 className="text-lg font-semibold">White Corn</h4>
          <p className="text-gray-500">1.0 ea</p>
          <div className="flex items-center mt-2">
            <button
              className="bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-600 font-medium rounded-l-lg text-sm px-2 py-1"
              onClick={() => setQuantity(quantity - 1)}
              disabled={quantity === 1}
            >
              -
            </button>
            <input
              type="number"
              className="bg-gray-200 text-center w-10 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-600 font-medium rounded-none px-2 py-1"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <button
              className="bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-600 font-medium rounded-r-lg text-sm px-2 py-1"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
          <p className="text-gray-500 mt-2">
            ${(quantity * 0.6).toFixed(2)} ea
          </p>
          <p className="text-gray-500 line-through">
            ${(quantity * 0.95).toFixed(2)} ea
          </p>
        </div>
      </div>
      <div className="border-b border-gray-200 py-2 mb-4"></div>
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-semibold">Estimated Total:</h4>
        <p className="text-lg font-semibold">
          ${(quantity * 0.6).toFixed(2)}
        </p>
      </div>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mt-4 w-full">
        Review Cart
      </button>
    </div>
  );
}