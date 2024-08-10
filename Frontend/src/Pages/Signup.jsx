import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Signup() {
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
  };

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-2/3 bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className='text-center'>
        <img
          src="https://www.something-extra.com/images/logo.png"
          alt="Something Extra Logo"
          className="w-24 h-auto"
        />
        <h1 className="text-3xl font-bold ml-4">Create Account</h1>
      </div>
      <form onSubmit={handleSubmit} className="mt-8">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="existing-account"
              className="mr-2"
            />
            <label htmlFor="existing-account" className="text-gray-700 text-sm">
              I already have a Something Extra Number or Card
            </label>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex justify-center">
          <NavLink to = '/confirmsignin'>
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Continue
            </button>
            </NavLink>
          </div>
        </div>
        <div className="text-center mb-4">
          <p className="text-gray-700 text-sm">or</p>
        </div>
        <div className="text-center mb-4">
          <a
            href="#"
            className="text-blue-500 hover:text-blue-700 font-bold text-sm"
          >
            Already have a Something Extra account? Log In
          </a>
        </div>
      </form>
      <div className="text-center mt-8">
        <p className="text-gray-700 text-sm">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          {' | '}
          <a href="#" className="hover:underline">
            Notice at Collection
          </a>
          {' | '}
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          {' | '}
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
        </p>
      </div>
    </div>
    </div>
    </>
  );
}