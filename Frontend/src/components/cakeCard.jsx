// src/components/CakeCard.js
import React from 'react';

const CakeCard = ({ cake }) => {
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
            <button className="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 rounded">
                Add to the cart
            </button>
        </div>
    );
};

export default CakeCard;
