import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105 bg-white">
      <img
        src={product.image || '/placeholder-image.jpg'} // Fallback for missing image
        alt={product.name}
        className="h-40 w-full object-cover rounded-t-lg"
      />
      <div className="p-2">
        <h2 className="text-xl font-bold mt-2">{product.name}</h2>
        <p className="text-gray-700 text-lg">${product.price.toFixed(2)}</p>
        <p className="text-gray-600">{product.description}</p>
        <div className="flex items-center mt-2 justify-between">
          <Link to={`/product/${product._id}`} className="text-blue-500 underline">
            View Details
          </Link>
          <button className="ml-2 bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
