import React from 'react';

export default function ShopCategories({ onClose }) {
    const categories = ['Fruits', 'Diary', 'Roasted', 'Garden', 'Kitchen'];

    return (
        <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg p-4">
            <h2 className="text-xl font-bold mb-4">Shop by Categories</h2>
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
                Close
            </button>
            <ul>
                {categories.map((category, index) => (
                    <li key={index} className="py-2">
                        <a href="#" className="text-blue-600 hover:text-blue-800">{category}</a>
                    </li>
                ))}
            </ul>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                View All
            </button>
        </div>
    );
}