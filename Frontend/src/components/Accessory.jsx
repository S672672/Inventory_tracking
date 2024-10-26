// src/components/CakeCard.js
import React from 'react';

export default function Accessory({ accessory }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 m-4 w-full max-w-xs transform transition duration-500 hover:scale-105">
            <img
                src={accessory.imageUrl}
                alt={accessory.name}
                className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-lg font-bold mb-2">{accessory.name}</h3>
            <p className="text-gray-700 mb-4">{accessory.description}</p>
            <p className="text-lg font-semibold text-gray-800 mb-4">${accessory.price.toFixed(2)}</p>
            <button className="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 rounded">
                Add to the cart
            </button>
        </div>
    );
}
