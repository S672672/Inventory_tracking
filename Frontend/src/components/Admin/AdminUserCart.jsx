import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default function AdminUserCarts() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/users', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await axios.delete(`http://localhost:5000/api/auth/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setUsers(users.filter(user => user._id !== userId)); 
        alert('User deleted successfully.');
      } catch (error) {
        console.error('Error deleting user:', error);
        alert('Could not delete user. Please try again.');
      }
    }
  };

  if (loading) return <div className='flex items-center justify-center'><img src='./src/assets/pictures/loading.gif' alt="Loading" /></div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Users List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map(user => (
          <div key={user._id} className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
            <img
              src={`http://localhost:5000/${user.profileImage}`}
              alt="Profile"
              className="w-24 h-24 rounded-full border-2 border-gray-300 mb-4" />
            <h2 className="text-xl font-semibold">{user.username}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-400">{user.isAdmin ? 'Role: Admin' : 'Role: User'}</p>
            <button
              onClick={() => handleDelete(user._id)}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition"
            >
              Delete User
            </button>
            <NavLink to = {`/admin/getUserCart/${user._id}`}>
            <div className='text-blue-400 underline cursor-pointer hover:text-green-400'>View Details</div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
