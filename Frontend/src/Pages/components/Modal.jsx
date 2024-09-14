import React from 'react';

export default function Modal({ show, onClose, children }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className="bg-white rounded-lg shadow-lg relative p-6 w-3/5 h-4/5" // width: 60% and height: 80%
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="overflow-y-auto h-full">
          {children}
        </div>
      </div>
    </div>
  );
}
