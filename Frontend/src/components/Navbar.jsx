import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');  
    setIsLoggedIn(false);  
    setShowLogoutConfirm(false);  
    navigate('/login');  
  };

  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);  
  };

  const handleCancelLogout = () => {
    setShowLogoutConfirm(false);  
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-green-600 text-3xl font-bold">Grocery Store</Link>
        <div className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-green-600">Home</Link>
          <Link to="/products" className="text-gray-700 hover:text-green-600">Products</Link>
          <Link to="/cart" className="text-gray-700 hover:text-green-600">Cart</Link>

          {isLoggedIn ? (
            <>
              <Link to="/profile" className="text-gray-700 hover:text-green-600">Profile</Link>
              <button
                onClick={handleLogoutClick} 
                className="text-gray-700 hover:text-green-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 hover:text-green-600">Login</Link>
              <Link to="/signup" className="text-gray-700 hover:text-green-600">Sign Up</Link>
            </>
          )}
        </div>
      </div>

      
      {showLogoutConfirm && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
            <h2 className="text-xl font-semibold mb-4">Are you sure you want to log out?</h2>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCancelLogout}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
              >
                Yes, Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
