import React, { useState } from 'react';
import { addToCart } from '../Api/Api';

export default function AccessoryCard({ accessory }) {
  const [addedToCart, setAddedToCart] = useState(false);
  const [loading, setLoading] = useState(false); 

  const handleAddToCart = async () => {
    try {
      const response = await addToCart(accessory._id, 'Accessory');
      console.log('Item added to cart:', response);
     
    } catch (error) {
      console.error('Error adding item to cart:', error.message);
    }
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4 w-full max-w-xs transform transition duration-500 hover:scale-105">
      <img
        src={accessory.imageUrl}
        alt={accessory.name}
        className="w-full h-48 object-cover rounded-t-lg"
        onError={(e) => (e.target.src = '/path/to/placeholder-image.jpg')}
      />
      <h3 className="text-lg font-bold mb-2">{accessory.name}</h3>
      <p className="text-gray-700 mb-4">{accessory.description}</p>
      <p className="text-lg font-semibold text-gray-800 mb-4">${accessory.price.toFixed(2)}</p>
      <button
        onClick={handleAddToCart}
        aria-label={`Add ${accessory.name} to cart`}
        className={`bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} // Disable button when loading
        disabled={loading} 
      >
        {loading ? 'Adding...' : 'Add to Cart'}
      </button>
    </div>
  );
}
