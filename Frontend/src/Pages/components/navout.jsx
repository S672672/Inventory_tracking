import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navout({ isLoggedIn, name, onLoginClick, onSignupClick, onLogoutClick }) {
  console.log('username:',name);
  return (
    <nav className='bg-gray-100 p-4'>
      <div className='container mx-auto flex items-center justify-between gap-20'>
        <NavLink to='/'>
          <div className='cursor-pointer text-black text-xl font-bold hover:text-red-400 hover:underline'>
            Get your Groceries
          </div>
        </NavLink>

        <div className='font-bold text-yellow-400 text-2xl transition hover:scale-105 cursor-pointer'>
          Weekly Ad
        </div>

        <div className='font-bold cursor-pointer text-red-400 text-2xl transition hover:scale-105'>
          Dailies
        </div>

        <div className='flex-grow mx-4'>
          <input 
            type='text'
            placeholder='search.....'
            className='w-full px-3 py-2 rounded-md text-sm text-gray-700 bg-white border border-gray-300 focus:outline-none focus:border-blue-500'
          />
        </div>

        <div className='flex items-center gap-4'>
          {isLoggedIn ? (
            <>
              <div className='flex items-center'>
                <img src='/path/to/profile-icon.png' alt='Profile Icon' className='w-6 h-6 mr-2' />
                <span className='font-bold'>{name}</span>
              </div>
              <NavLink to='/cart'>
                <img src='/path/to/cart-icon.png' alt='Cart Icon' className='w-6 h-6' />
              </NavLink>
              <button onClick={onLogoutClick} className='text-sm text-red-500'>
                Logout
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={onSignupClick} 
                className='text-white cursor-pointer px-3 py-2 rounded-md text-sm font-medium bg-yellow-400 hover:bg-gray-700'
              >
                Signup
              </button>
              
              <button
                onClick={onLoginClick}
                className='text-white cursor-pointer px-3 py-2 rounded-md text-sm font-medium bg-blue-400 hover:bg-gray-700'
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
