import React from 'react';
import { Link } from 'react-router-dom';

const BrowseCategoriesCard = ({ image, title }) => {
  return (
    <div className="flex items-center justify-center bg-white rounded-lg p-4 mt-24 mb-20 w-[70vw] h-[70vh] border-0 my-10">
      <div className="flex-1 pr-2 items-center justify-center text-center"> 
        <h2 className="text-3xl text-gray-700 mb-1 font-bold">{title}</h2> 
        <p className="text-lg text-gray-500 mb-2">Exploring category makes your shopping easy and simple</p>
        <Link to = '/categoryproduct'>
        <button className="bg-red-600 text-white rounded-md px-6 py-2 hover:bg-red-700">
          Explore
        </button>
        </Link>
      </div>
      
      <img 
        src={image} 
        alt="Category" 
        className="w-1/2 h-full object-cover rounded-lg"
      />
    </div>
  );
};

export default BrowseCategoriesCard;
