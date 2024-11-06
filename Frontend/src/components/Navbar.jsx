import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartModal from './CartModal';
import LogoutModal from './LogoutModal';

const Navbar = ({ cartItems = [] }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showCartMessage, setShowCartMessage] = useState(false);
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

  const toggleCartModal = () => {
    if (!isLoggedIn) {
      setShowCartMessage(true);
      setTimeout(() => setShowCartMessage(false), 5000); 
      return;
    }
    setShowCartModal((prev) => !prev);
  };

  return (
    <nav className="bg-white shadow-lg relative">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-green-600 text-3xl font-bold">Hamro Mart</Link>
        <div className="space-x-6 flex items-center">
          <Link to="/" className="text-gray-700 hover:text-green-600 transition duration-300">Home</Link>
          <Link to="/categoryproduct" className="text-gray-700 hover:text-green-600 transition duration-300">Products</Link>
          <div className="relative">
         <Link to = '/testcart'>
            <button
              onClick=''
              className="text-gray-700 hover:text-green-600 transition duration-300"
            >
              Cart
            </button>
            </Link>
            {showCartMessage && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-gradient-to-r from-red-400 to-red-600 text-white text-sm p-2 rounded-lg shadow-lg flex items-center space-x-2 w-48 z-10">
                <span className="font-semibold">⚠️ Please log in first to add and view your cart!</span>
              </div>
            )}
          </div>

          {isLoggedIn ? (
            <>
              <Link to="/profile" className="text-gray-700 hover:text-green-600 transition duration-300">Profile</Link>
              <button
                onClick={handleLogoutClick}
                className="text-gray-700 hover:text-green-600 transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 hover:text-green-600 transition duration-300">Login</Link>
              <Link to="/signup" className="text-gray-700 hover:text-green-600 transition duration-300">Sign Up</Link>
            </>
          )}
        </div>
      </div>

      <CartModal isOpen={showCartModal} onClose={toggleCartModal} cartItems={cartItems} />
      <LogoutModal 
        isOpen={showLogoutConfirm} 
        onClose={handleCancelLogout} 
        onLogout={handleLogout} 
      />
    </nav>
  );
};

export default Navbar;
