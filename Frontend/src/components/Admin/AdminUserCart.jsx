import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminUserCarts = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const fetchCarts = async () => {
      try {
        
        const response = await axios.get('http://localhost:5000/api/cart/admin/carts');
        console.log(response.data);
        setCarts(response.data); 
      } catch (error) {
        console.error('Error fetching user carts', error);
      }
    };
    fetchCarts();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">User Carts</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b-2">User Name</th>
              <th className="py-2 px-4 border-b-2">Email</th>
              <th className="py-2 px-4 border-b-2">Items in Cart</th>
            </tr>
          </thead>
          <tbody>
            {carts.map((cart) => (
              <tr key={cart.user._id}>
                
                <td className="border py-2 px-4">{cart.user.name}</td>
                <td className="border py-2 px-4">{cart.user.email}</td>

                
                <td className="border py-2 px-4">
                  {cart.items && cart.items.length > 0 ? (
                    cart.items.map((item) => (
                      <div key={item.product._id} className="mb-2">
                        <span className="font-medium">{item.product.name}</span> - 
                        <span className="text-gray-700 ml-1">Qty: {item.quantity}</span>
                      </div>
                    ))
                  ) : (
                    <p>No items in cart</p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUserCarts;
