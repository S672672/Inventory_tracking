import React, { useContext } from 'react';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';

const Cart = () => {
  // const { cartItems, removeFromCart } = useContext(CartContext);
  const { cartItems } = useCart();
  
  console.log('Rendering cart with items:', cartItems);// Make sure removeFromCart is defined

  if (cartItems.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold">Your Cart</h1>
      {cartItems.map((item) => (
        <CartItem key={item._id} item={item} onRemove={removeFromCart} />
      ))}
      <div className="flex justify-between mt-4">
        <h2 className="text-2xl font-semibold">Total Price: ${totalPrice.toFixed(2)}</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
