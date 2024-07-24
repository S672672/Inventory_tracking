import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Keep Logged In:', keepLoggedIn);
  };

  return (
    <>
      <div className="text-center">
        <img src="https://www.something-extra.com/images/extra.svg" alt="Something Extra Logo" className="h-12 w-auto" />
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Log In</h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
          <input
            type="password"
            id="password"
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
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Log In
          </button>
        </div>
        <div className="text-center">
          <a href="#" className="text-gray-600 hover:text-gray-900">Forgot Email?</a>
          <span className="mx-2">or</span>
          <a href="#" className="text-gray-600 hover:text-gray-900">Forgot Password?</a>
        </div>
        <div className="text-center mt-4">
          <h2 className="text-lg font-bold text-gray-800 mb-2">Sign Up for Something Extra and Save!</h2>
          <button
            type="button"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Account
          </button>
        </div>
      </form>
      <div className="text-center mt-4 text-sm">
        <a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy.</a>
        <span className="mx-2">|</span>
        <a href="#" className="text-gray-600 hover:text-gray-900">Notice at Collection</a>
        <span className="mx-2">|</span>
        <a href="#" className="text-gray-600 hover:text-gray-900">Terms of Use</a>
        <span className="mx-2">|</span>
        <a href="#" className="text-gray-600 hover:text-gray-900">Terms & Conditions</a>
      </div>
    </>
  );
}
