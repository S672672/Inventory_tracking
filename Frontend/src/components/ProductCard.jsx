import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addToCart } from '../Api/Api';

const ProductCard = ({ product }) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = async () => {
    try {
      
      const response = await addToCart(product._id, 'Product');
      console.log('Item added to cart:', response);
      alert('Item has been added to the cart');
      
    } catch (error) {
      console.error('Error adding item to cart:', error.message);
      alert('Error adding item to the cart');
      
    }
  }

  return (
    <div className="border rounded-lg p-4 shadow-lg bg-white flex flex-col items-center justify-center">
      <img
        src={`http://localhost:5000/${product.image}` || '/placeholder-image.jpg'} 
        alt={product.name}
        className="h-40 w-full object-cover rounded-t-lg"
      />
      <div className="p-2">
        <h2 className="text-xl font-bold mt-2">{product.name}</h2>
        <p className="text-gray-700 text-lg">${product.price.toFixed(2)}</p>
        <p className="text-gray-600">{product.description}</p>
        <div className="flex items-center mt-2 gap-2 justify-between">
          <Link to={`/product/${product._id}`}>
            <button className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 transition">
              View Details
            </button>
          </Link>
          <button 
            onClick={handleAddToCart}
            className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-400 transition"
          >
            {addedToCart ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
