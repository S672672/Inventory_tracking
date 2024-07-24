
import React from 'react';

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
        <button
          className="absolute top-2 right-2 text-3xl text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
