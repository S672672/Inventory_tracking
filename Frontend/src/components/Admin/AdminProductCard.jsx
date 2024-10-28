// ProductCard.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const ProductCard = ({ product, onDelete, onEdit }) => {
  return (
    <div className="min-w-[300px] max-w-full h-auto m-2 bg-white border-solid border-4 rounded-lg z-10 flex-col justify-center items-center cursor-pointer p-1 shadow-black shadow-md transform hover:scale-105 transition-transform duration-200 mx-auto">
      <img
        src={`http://localhost:5000/uploads/${product.image}`}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="flex items-center justify-center font-bold text-black p-2">
        {product.name}
      </div>
      <div className="flex items-center justify-center text-gray-600 p-2">
        ${product.price}
      </div>
      <div className="flex items-center justify-center text-gray-800 p-2">
        {product.description}
      </div>
      <div className="flex items-center justify-center p-2">
        <NavLink to={`/edit-product/${product._id}`}>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded mr-2">
            Edit
          </button>
        </NavLink>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => onDelete(product._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
