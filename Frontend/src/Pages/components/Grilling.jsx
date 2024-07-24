import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Grilling({ photo, offer, details}) {
  return (
    <NavLink to = '/grillingpage'>
    <div className="cursor-pointer max-w-sm rounded overflow-hidden shadow-lg border border-gray-200 h-96 w-72 flex flex-col gap-4 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
      <div className="h-64 w-full overflow-hidden">
        <img src={photo} alt={offer} className="h-full w-full object-cover" />
      </div>
      <div className="p-4">
        <div className="font-bold text-2xl text-black mb-2">{offer}</div>
        <p className="text-gray-700 text-base mb-4">{details}</p>
        <button className="bg-white hover:bg-blue-700 text-black font-bold py-2 ml-8 rounded h-12 w-32 border border-black">
          Shop Now
        </button>
      </div>
    </div>
    </NavLink>
  );
}
