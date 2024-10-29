// src/pages/Signup.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [file, setFile] = useState(null); // State for the profile picture
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Set the selected file
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match', { position: "top-center" });
      return;
    }

    // Create FormData to include file upload
    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    if (file) {
      formData.append('profileImage', file); // Append the profile image
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('Signup successful! Redirecting to profile...', { position: "top-center" });
      setTimeout(() => navigate('/login'), 2000);
    } catch (error) {
      toast.error(error.response ? error.response.data.message : 'Something went wrong', { position: "top-center" });
    }
  };

  return (
    <div className="container mx-auto my-16 max-w-md">
      <h1 className="text-3xl font-bold mb-8 text-center">Sign Up</h1>
      <form onSubmit={handleSignup}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profileImage">Profile Picture</label>
          <input
            type="file"
            id="profileImage"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required />
        </div>
        <button type="submit" className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 transition-all">
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-center">
        Already have an account? <Link to="/login" className="text-green-600 hover:underline">Login</Link>
      </p>
      <ToastContainer />
    </div>
  );
}

export default Signup;
