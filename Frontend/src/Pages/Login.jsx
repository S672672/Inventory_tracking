import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    setLoading(true); 
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
  
      const { token, isAdmin } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('isAdmin', isAdmin);
  
      toast.success('Login successful! Redirecting...', { position: "top-center" });
  
      // Clear input fields
      setEmail('');
      setPassword('');

      setTimeout(() => {
        if (isAdmin) {
          navigate('/Admin/dashboard');
        } else {
          navigate('/');
        }
      }, 2000);
  
    } catch (error) {
      toast.error(error.response ? error.response.data.message : 'Login failed', { position: "top-center" });
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="container mx-auto my-16 max-w-md">
      <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button 
          type="submit" 
          className={`w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 transition-all ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} 
          disabled={loading} 
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <p className="mt-4 text-center">
        Don't have an account? <Link to="/signup" className="text-green-600 hover:underline">Sign Up</Link>
      </p>
      <ToastContainer />
    </div>
  );
};

export default Login;
