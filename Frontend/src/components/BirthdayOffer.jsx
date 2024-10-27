import React from 'react';
import { Link } from 'react-router-dom';

export default function BirthdayOfferCard() {
  return (
    <div className="w-1/2 h-auto rounded-2xl shadow-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white p-10 flex flex-col justify-between items-center mx-auto mb-10 mt-2 relative overflow-hidden bg-cover bg-center h-[60vh]"
         style={{ backgroundImage: 'url("./src/assets/pictures/birthday.gif")', opacity: 0.9 }}>
      <div className="text-center">
        <h2 className="text-4xl font-extrabold mb-4 drop-shadow-md">
          🎂 Exclusive Cake Celebration 🎂
        </h2>
        <p className="text-lg font-bold text-white">Unwrap Sweet Deals Just for You!</p>
        <p className="text-2xl text-green-900 mt-2 font-bold">
          <span className="text-red-900 font-bold">50% Off</span> on All Cakes Today!
        </p>
      </div>
      <div className="text-center text-blue-900 text-base mt-4 italic">
        Discover delicious cakes crafted for every celebration!
      </div>
      <Link to = '/cakes'>
      <button className="bg-yellow-300 text-red-800 font-semibold py-3 px-10 rounded-full shadow-md hover:bg-yellow-400 transition-colors mt-6">
        Explore Cakes 
      </button>
      </Link>
    </div>
  );
}
