import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate} from 'react-router-dom';
import { FaShoppingCart, FaHome, FaBox, FaUser, FaSignOutAlt } from 'react-icons/fa';
import LogoutModal from "../components/LogoutModal";


const Navbar = ({ cartItems = [], onSearch }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [showCartMessage, setShowCartMessage] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem('token'));
    };

 
    window.addEventListener('storage', handleStorageChange);
    
  
    handleStorageChange();
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
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

  const toggleCartMessage = () => {
    if (!isLoggedIn) {
      setShowCartMessage(true);
      setTimeout(() => setShowCartMessage(false), 5000);  
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto p-4 flex items-center justify-between">
        
        <Link to="/" className="text-red-600 text-3xl font-bold">
          𝓗𝓪𝓶𝓻𝓸 𝓜𝓪𝓻𝓽
        </Link>

       
        <div className="flex mx-4 flex justify-center">
          <div className="relative w-3/4 sm:w-1/2 md:w-1/3 flex items-center justify-center gap-2">
          <NavLink to = '/search'>
            <input
               type="text"
          value=''
          onChange=''
          placeholder="Search for products, cakes, accessories..."
              className="w-64 p-2 pl-10 rounded-full text-black bg-gray-100 focus:outline-none"
            />
            </NavLink>
            <NavLink to = '/search'>
            <button
              onClick=''
              className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300"
            >
              Search
            </button>
            </NavLink>
          </div>
        </div>

       
        <div className="space-x-6 flex items-center">
          <Link to="/" className="text-gray-700 hover:text-red-300 transition duration-300 flex items-center">
            <FaHome size={30} className="mr-1" /> Home
          </Link>
          <Link to="/categoryproduct" className="text-gray-700 hover:text-red-300 transition duration-300 flex items-center">
            <FaBox size={25} className="mr-1" /> Products
          </Link>

      
          <div className="relative">
          <Link to = '/testcart'>
            <button
              onClick={toggleCartMessage}
              className="text-gray-700 hover:text-red-100 transition duration-300 flex items-center"
            >
              <FaShoppingCart size={30} />
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
              <Link to="/profile" className="text-gray-700 hover:text-green-600 transition duration-300 flex items-center">
                <FaUser size={20} className="mr-1" /> Profile
              </Link>
              <button
                onClick={handleLogoutClick}
                className="text-gray-700 hover:text-red-600 transition duration-300 flex items-center"
              >
                <FaSignOutAlt size={20} className="mr-1" /> Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="bg-red-500 text-white px-4 py-2 w-24 rounded-lg hover:bg-red-300 transition duration-300">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-green-500 text-white px-4 py-2 w-24 rounded-lg hover:bg-green-300 transition duration-300">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>

      <LogoutModal
        isOpen={showLogoutConfirm}
        onClose={handleCancelLogout}
        onLogout={handleLogout} 
      />
    </nav>
  );
};

export default Navbar;
