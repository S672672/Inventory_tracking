import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Weeklyad({
  imageSrc,
  title,
  price,
  originalPrice,
  unit,
  quantity,
  additionalInfo,
}) {
  return (
    <NavLink to = 'inweekly'>
    <div className="w-full rounded-md shadow-md p-4 bg-white cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
      <div className="relative rounded-md overflow-hidden border-2 border-gray-400">
        <img
          src={imageSrc}
          alt={title}
          width={200}
          height={150}
          className="object-contain"
        />
      </div>
      <button className="mt-4 px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-400">
        Log In to Add
      </button>
      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        <p className="text-xl font-bold text-red-500">
          {price}
          {originalPrice && (
            <span className="text-gray-500 line-through ml-2">
              {originalPrice}
            </span>
          )}
        </p>
        <p className="text-gray-600">
          {quantity} {unit}
          {additionalInfo && (
            <span className="text-gray-600 ml-2">{additionalInfo}</span>
          )}
        </p>
      </div>
    </div>
    </NavLink>
  );
};