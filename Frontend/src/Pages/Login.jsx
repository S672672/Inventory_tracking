import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ onLogin }) {
  const [gmail, setGmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(null);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(gmail)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ gmail, password, keepLoggedIn }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to log in');
      }

      const data = await response.json();
      if (data && data.token) {
        localStorage.setItem('token', data.token); // Store token in localStorage
        onLogin(data.user.name); // Pass user name to the parent component or set it in the state
        navigate('/'); // Redirect to homepage
      }
       else {
        setErrorMessage('Login successful but user information is missing.');
      }
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="text-center">
        <img src="https://www.something-extra.com/images/extra.svg" alt="Something Extra Logo" className="h-12 w-auto" />
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Log In</h1>
      </div>
      {errorMessage && (
        <div className="text-center text-red-500 mb-4">{errorMessage}</div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Gmail</label>
          <input
            type="email"
            id="email"
            placeholder='Enter your email'
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={gmail}
            onChange={(e) => setGmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
          <input
            type="password"
            id="password"
            placeholder='Enter your password'
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="keepLoggedIn"
            className="form-checkbox"
            checked={keepLoggedIn}
            onChange={(e) => setKeepLoggedIn(e.target.checked)}
          />
          <label htmlFor="keepLoggedIn" className="ml-2 text-gray-700">Keep me logged in</label>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Logging in...' : 'Log In'}
          </button>
        </div>
        <div className="text-center">
          <a href="/recover-gmail" className="text-gray-600 hover:text-gray-900">Forgot Gmail?</a>
          <span className="mx-2">or</span>
          <a href="/recover-password" className="text-gray-600 hover:text-gray-900">Forgot Password?</a>
        </div>
        <div className="text-center mt-4">
          <h2 className="text-lg font-bold text-gray-800 mb-2">Sign Up for Something Extra and Save!</h2>
          <button
            type="button"
            onClick={() => navigate('/signup')}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Account
          </button>
        </div>
      </form>
      <div className="text-center mt-4 text-sm">
        <a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a>
        <span className="mx-2">|</span>
        <a href="#" className="text-gray-600 hover:text-gray-900">Terms of Use</a>
      </div>
    </>
  );
}
