import { useState } from "react";
import axios from "axios";
import Navout from "./components/navout";

export default function ConfirmSignin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [extraNumber, setExtraNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the data object with only necessary state values
    const data = {
        name: name,
        email: email,
        number: number,
        password: password,
    };

    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

        if (!response.ok) {
            // Handle HTTP errors
            const errorData = await response.json();
            throw new Error(errorData.message || 'Something went wrong');
        }

        // Parse JSON response
        const responseData = await response.json();
        console.log('Response:', responseData);

    } catch (error) {
        console.error('Error:', error.message);
    }
};

    

  return (
    <>
    <Navout />
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit}>
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
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
          Email
          </label>
          <input
            type="text"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            htmlFor="extra-number"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Something Extra Number
          </label>
          <p className="text-gray-500 text-xs mb-2">
            You will use this number to redeem offers and earn rewards at
            checkout in-store.
          </p>
          <input
            type="text"
            id="extra-number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={extraNumber}
            onChange={(e) => setExtraNumber(e.target.value)}
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
            Password must include 8 or more characters, with at least one
            number.
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex items-center justify-end">
            <i className="fas fa-eye text-gray-500 cursor-pointer"></i>
          </div>
        </div>
        <div className="mb-4">
          <input type="checkbox" id="agree" className="mr-2" />
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
            . I also agree to receive my personalized offers and Something Extra
            Dollars to the email address listed above. Something Extra
            communication preferences can be changed at any time in Account
            Settings.
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
