import React from 'react';

const LogoutModal = ({ isOpen, onClose, onLogout }) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 transition-opacity duration-300 
        ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      style={{ zIndex: 1000 }} 
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4">Are you sure you want to log out?</h2>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onLogout}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition-colors"
          >
            Yes, Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
