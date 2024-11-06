import React, { useState } from 'react';
import { addToCart } from '../Api/Api';


const CakeCard = ({ cake }) => {
    const [addedToCart, setAddedToCart] = useState(false);

    const handleAddToCart = async () => {
      try {
        
        const response = await addToCart(cake._id, 'Cake');
        console.log('Item added to cart:', response);
        alert('Item added to the cart')
        
      } catch (error) {
        console.error('Error adding item to cart:', error.message);
        alert('Error adding item to the cart')
     
      }
    }
    

    return (
        <div className="bg-white shadow-md rounded-lg p-4 m-4 w-full max-w-xs transform transition duration-500 hover:scale-105">
            <img
                src={cake.imageUrl}
                alt={cake.name}
                className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-lg font-bold mb-2">{cake.name}</h3>
            <p className="text-sm text-gray-600 mb-2">Flavor: {cake.flavor}</p>
            <p className="text-sm text-gray-600 mb-2">Size: {cake.size}</p>
            <p className="text-gray-700 mb-4">{cake.description}</p>
            <p className="text-lg font-semibold text-gray-800 mb-4">${cake.price.toFixed(2)}</p>
            <button 
                onClick={handleAddToCart}
                className={`font-bold py-2 px-4 rounded ${addedToCart ? 'bg-green-500' : 'bg-red-600 hover:bg-red-400'} text-white transition`}
            >
                {addedToCart ? 'Added!' : 'Add to the cart'}
            </button>
        </div>
    );
};

export default CakeCard;