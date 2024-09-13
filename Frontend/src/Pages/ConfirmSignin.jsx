import { useState } from "react";
import axios from "axios";
import Navout from "./components/navout";

export default function ConfirmSignin() {
  const [name, setName] = useState("");
  const [gmail, setGmail] = useState(""); 
  const [number, setNumber] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const[marketingAccept,setMarketingAccept] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }


    const data = {
      name: name,
      gmail: gmail,
      number: number,
      referralCode: referralCode,
      password: password,
      marketingAccept:marketingAccept
      
    };

    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const contentType = response.headers.get('Content-Type');
      if (contentType && contentType.includes('application/json')) {
        const responseData = await response.json();
        console.log('Response:', responseData);

        if (response.ok) {
          setSuccessMessage('Account created successfully');
        } else {
          setError('Error creating account');
        }
      } else {
        const responseText = await response.text();
        console.error('Error:', responseText);
        setError('Error creating account');
      }

    } catch (error) {
      console.error('Error:', error.message);
      setError('Error creating account');
    }
  };

  return (
    <>
      <Navout />
      <div className="container mx-auto p-4">
        <form onSubmit={handleSubmit}>
          {error && <div className="mb-4 text-red-500">{error}</div>}
          {successMessage && <div className="mb-4 text-green-500">{successMessage}</div>}
          
          <div className="mb-4">
            <label
              htmlFor="Name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="gmail"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Gmail
            </label>
            <input
              type="email"
              id="gmail"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={gmail}
              onChange={(e) => setGmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="referral-code"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Referral Code
            </label>
            <p className="text-gray-500 text-xs mb-2">
              You will use this code to redeem offers and earn rewards at checkout in-store.
            </p>
            <input
              type="text"
              id="referral-code"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={referralCode}
              onChange={(e) => setReferralCode(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Create Password
            </label>
            <p className="text-gray-500 text-xs mb-2">
              Password must include 8 or more characters, with at least one number.
            </p>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex items-center justify-end">
              <i className="fas fa-eye text-gray-500 cursor-pointer"></i>
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirm-password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="flex items-center justify-end">
              <i className="fas fa-eye text-gray-500 cursor-pointer"></i>
            </div>
          </div>
          <div className="mb-4">
            <input type="checkbox" id="agree" className="mr-2" value={marketingAccept} onChange={(e) => setMarketingAccept(e.target.value)} />
            <label htmlFor="agree" className="text-gray-700 text-sm">
              By creating an account, I agree to the{" "}
              <a href="#" className="underline text-blue-500 hover:text-blue-700">
                Terms & Conditions
              </a>
              ,{" "}
              <a href="#" className="underline text-blue-500 hover:text-blue-700">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="underline text-blue-500 hover:text-blue-700">
                Privacy Policy
              </a>
              . I also agree to receive my personalized offers and Something Extra Dollars to the email address listed above. Something Extra communication preferences can be changed at any time in Account Settings.
            </label>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
