import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartModal from './CartModal'; // Import the CartModal component
import LogoutModal from './LogoutModal'; // Import the LogoutModal component

const Navbar = ({ cartItems = [] }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
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
    setShowCartModal((prev) => !prev);
  };

  return (
    <nav className="bg-white shadow-lg relative">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-green-600 text-3xl font-bold">Grocery Store</Link>
        <div className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-green-600">Home</Link>
          <Link to="/categoryproduct" className="text-gray-700 hover:text-green-600">Products</Link>
          <button
            onClick={toggleCartModal}
            className="text-gray-700 hover:text-green-600 relative"
          >
            Cart ({cartItems.length})
          </button>

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
