import { useState } from "react";
import axios from "axios";
import Navout from "./components/navout";
import { toast, ToastContainer } from "react-toastify";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-toastify/dist/ReactToastify.css";

export default function ConfirmSignin() {
  const [name, setName] = useState("");
  const [gmail, setGmail] = useState("");
  const [number, setNumber] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [marketingAccept, setMarketingAccept] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const data = {
      name,
      gmail,
      number,
      referralCode,
      password,
      marketingAccept,
    };

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const contentType = response.headers.get("Content-Type");
      if (contentType && contentType.includes("application/json")) {
        const responseData = await response.json();
        if (response.ok) {
          toast.success("Account created successfully");
          setName("");
          setGmail("");
          setNumber("");
          setReferralCode("");
          setPassword("");
          setConfirmPassword("");
          setMarketingAccept(false);
        } else {
          toast.error(responseData.message || "Error creating account");
        }
      } else {
        const responseText = await response.text();
        toast.error("Error creating account: " + responseText);
      }
    } catch (error) {
      toast.error("Error creating account: " + error.message);
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="container mx- min-h-2/3 p-4">
      <div className="font-bold text-2xl text-black mb-5">Create Account</div>
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
            placeholder="your Name"
            id="Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-required="true"
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
            placeholder="your gmail"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={gmail}
            onChange={(e) => setGmail(e.target.value)}
            aria-required="true"
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
            placeholder="your Phone Number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            aria-required="true"
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
            You will use this code to redeem offers and earn rewards at checkout
            in-store.
          </p>
          <input
            type="text"
            id="referral-code"
            placeholder="Referral Code"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={referralCode}
            onChange={(e) => setReferralCode(e.target.value)}
            aria-required="true"
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
          <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="create a strong password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-required="true"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <i
              className={`fas fa-eye${
                showPassword ? "-slash" : ""
              } text-gray-500 cursor-pointer`}
              onClick={togglePasswordVisibility}
            ></i>
          </div>
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirm-password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="confirm-password"
              placeholder="Confirm your password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              aria-required="true"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <i
                className={`fas fa-eye${
                  showPassword ? "-slash" : ""
                } text-gray-500 cursor-pointer`}
                onClick={togglePasswordVisibility}
              ></i>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <input
            type="checkbox"
            id="agree"
            className="mr-2"
            checked={marketingAccept}
            onChange={(e) => setMarketingAccept(e.target.checked)}
          />
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
      <ToastContainer />
    </div>
  );
}
