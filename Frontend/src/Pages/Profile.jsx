// src/pages/Profile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('/api/users/profile');
        setUser(res.data);
      } catch (err) {
        setError('Failed to load user data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  if (!user) return <p>No user data available.</p>;

  return (
    <div className="container mx-auto my-16 max-w-md">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Profile</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Welcome, {user.name || "User!"}</h2>
        <p className="mb-2"><strong>Email:</strong> {user.email}</p>
        <p className="mb-2"><strong>Account Created:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
        
        <button className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 transition-all mt-6">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
