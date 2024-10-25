import React from 'react';

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="border-b py-4 flex justify-between items-center">
      <div>
        <h2 className="text-lg font-semibold">{item.name}</h2>
        <p className="text-gray-700">Quantity: {item.quantity}</p>
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
