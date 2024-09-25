import React from 'react';

export default function InWeeklyprop({image,description,perlb,price,totallb,loggedIn}) {
  return (
    <div className="flex items-center justify-center gap-10 m-10">
      <div className='h-1/2 w-auto border-2 border-gray-400'>
        <img
          src={image}
          alt="photo"
          className="container"
        />
      </div>
      <div className="w-auto">
        <h2 className="text-2xl font-bold mb-2">
          {description}
        </h2>
        <p className="text-gray-500 mb-4">{perlb}</p>
        <div className="flex items-center gap-4">
        <div className='flex items-center gap-2'>
          <span className="text-gray-500">approx</span>
          <span className="text-2xl font-bold">{price} ea</span>
          </div>
          <div className='font-bold'>
          <span className="text-gray-500">Avg. {totallb}</span>
          </div>
        </div>
        {loggedIn ? (
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4">
            Add to Cart
          </button>
        ) : (
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4">
            Log In to Add
          </button>
        )}
      </div>
    </div>
  );
}