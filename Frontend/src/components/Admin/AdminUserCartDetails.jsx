import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function AdminUserCartDetails() {
  const { userId } = useParams();  
  const [userDetails, setUserDetails] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        
        const response = await axios.get(`http://localhost:5000/api/auth/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setUserDetails(response.data);
        setCartItems(response.data.cart);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  if (loading) return <div className='flex items-center justify-center'><img src='./src/assets/pictures/loading.gif' alt="Loading" /></div>;

  return (
    <div className="container mx-auto p-4 flex flex-col ">
      <h1 className="text-3xl font-bold mb-6 text-center">User Details and Cart</h1>

      {userDetails && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-6">
            <img
              src={`http://localhost:5000/${userDetails.profileImage}`}
              alt="Profile"
              className="w-32 h-32 rounded-full border-2 border-gray-300 mb-4 md:mb-0"
            />
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold">{userDetails.username}</h2>
              <p className="text-lg text-gray-600">{userDetails.email}</p>
              <p className="text-lg text-gray-400">{userDetails.isAdmin ? 'Role: Admin' : 'Role: User'}</p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-10 mt-10">User Cart Items:</h3>
        {cartItems.length > 0 ? (
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div key={index} className="border-b pb-4 bg-red-100 p-5 rounded-lg">
                <div className="flex items-center">
                  {/* {item.image && (
                    <img
                      src={`http://localhost:5000/${item.image}`} // Assuming the image is stored on your server
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-full mr-4" // Styling the image (rounded)
                    />
                  )} */}
                  <div>
                    <h4 className="text-xl font-semibold">{item.name}</h4>
                    <p>{item.description}</p>
                    <p className="text-gray-900">Price: ${item.price.toFixed(2)}</p>
                    <p className="text-gray-900">Quantity: {item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>This user has no items in their cart.</p>
        )}
      </div>
    </div>
  );
}
