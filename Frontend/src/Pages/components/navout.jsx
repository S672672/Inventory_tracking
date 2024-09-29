import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { useState } from "react";
import Cart from "./Cart";

export default function Navout({
  isLoggedIn,
  name,
  onLoginClick,
  onSignupClick,
  onLogoutClick,
}) {
  const [isCartVisible, setIsCartVisible] = useState(false);
  
  const handleCartClick = () => {
    setIsCartVisible(!isCartVisible);
  };
  

  console.log("username:", name);
  return (
    <>
    <nav className="bg-gray-100 p-4">
      <div className="container mx-auto flex items-center justify-between gap-20">
        <NavLink to="/">
          <div className="cursor-pointer text-black text-xl font-bold hover:text-red-400 hover:underline">
            Get your Groceries
          </div>
        </NavLink>

        <div className="font-bold text-yellow-400 text-2xl transition hover:scale-105 cursor-pointer">
          Weekly Ad
        </div>

        <div className="font-bold cursor-pointer text-red-400 text-2xl transition hover:scale-105">
          Dailies
        </div>

        <div className="flex-grow mx-4">
          <input
            type="text"
            placeholder="search....."
            className="w-full px-3 py-2 rounded-md text-sm text-gray-700 bg-white border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <div className="flex items-center">
              <FaUser size={24} className="text-black" />
              <span className="text-blue-700">Hi,</span>
                <span className="font-bold">{name}</span>
              </div>
              <NavLink>
              <FaShoppingCart size={24} onClick={handleCartClick} className="text-gray-800" />
              </NavLink>
              <button onClick={onLogoutClick} className="text-sm text-red-500">
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={onSignupClick}
                className="text-white cursor-pointer px-3 py-2 rounded-md text-sm font-medium bg-yellow-400 hover:bg-gray-700"
              >
                Signup
              </button>

              <button
                onClick={onLoginClick}
                className="text-white cursor-pointer px-3 py-2 rounded-md text-sm font-medium bg-blue-400 hover:bg-gray-700"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
      </nav>
      <Cart isVisible={isCartVisible} onClose={() => setIsCartVisible(false)} />
      </>
  );
}