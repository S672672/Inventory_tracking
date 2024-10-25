import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faBoxes, faPlus, faShoppingCart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const AdminLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white">
        <nav className="flex flex-col h-full p-4 space-y-4">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              isActive
                ? 'bg-green-600 text-white p-2 rounded-md font-semibold flex items-center'
                : 'text-gray-300 hover:bg-green-500 hover:text-white p-2 rounded-md flex items-center'
            }
          >
            <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" />
            Dashboard
          </NavLink>
          <NavLink
            to="/admin/products"
            className={({ isActive }) =>
              isActive
                ? 'bg-green-600 text-white p-2 rounded-md font-semibold flex items-center'
                : 'text-gray-300 hover:bg-green-500 hover:text-white p-2 rounded-md flex items-center'
            }
          >
            <FontAwesomeIcon icon={faBoxes} className="mr-2" />
            Manage Products
          </NavLink>
          <NavLink
            to="/admin/add-products"
            className={({ isActive }) =>
              isActive
                ? 'bg-green-600 text-white p-2 rounded-md font-semibold flex items-center'
                : 'text-gray-300 hover:bg-green-500 hover:text-white p-2 rounded-md flex items-center'
            }
          >
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Add Product
          </NavLink>
          <NavLink
            to="/admin/user-carts"
            className={({ isActive }) =>
              isActive
                ? 'bg-green-600 text-white p-2 rounded-md font-semibold flex items-center'
                : 'text-gray-300 hover:bg-green-500 hover:text-white p-2 rounded-md flex items-center'
            }
          >
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            User Carts
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? 'bg-red-600 text-white p-2 rounded-md font-semibold flex items-center'
                : 'text-gray-300 hover:bg-red-500 hover:text-white p-2 rounded-md flex items-center'
            }
          >
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
            Logout
          </NavLink>
        </nav>
      </aside>

      <div className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
