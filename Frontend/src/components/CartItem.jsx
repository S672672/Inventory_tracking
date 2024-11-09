import React from 'react';

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <div className="border-b py-4 flex justify-between items-center">
      <div>
        <h2 className="text-lg font-semibold">{item.name}</h2>
        <p className="text-gray-700">Quantity: {item.quantity}</p>
        <div className="flex items-center space-x-2 mt-2">
          <button
            onClick={() => onUpdateQuantity(item._id, item.quantity - 1)}
            disabled={item.quantity <= 1} 
            className="bg-gray-200 text-gray-600 px-2 py-1 rounded focus:outline-none"
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item._id, item.quantity + 1)}
            className="bg-gray-200 text-gray-600 px-2 py-1 rounded focus:outline-none"
          >
            +
          </button>
        </div>
      </div>
      <div className="text-right">
        <p className="text-gray-900 font-bold">${(item.price * item.quantity).toFixed(2)}</p>
        <button
          onClick={() => onRemove(item._id)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
