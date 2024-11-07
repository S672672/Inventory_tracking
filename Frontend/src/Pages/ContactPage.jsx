import React, { useState } from 'react';
import BackButton from '../components/BackButton';

const ContactUs = () => {
  const [result, setResult] = useState('');

  async function onSubmit(event) {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "30149a9b-1c50-43a8-97e9-7648d4a722d5");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset(); 
      } else {
        console.error("Error:", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("An error occurred while sending your message.");
    }
  }

  return (
    <>
    <BackButton />
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-2/3 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Contact Us</h2>
        <p className="text-center text-gray-600 mb-4">We'd love to hear from you! Please fill out the form below.</p>

        <form className="max-w-lg mx-auto" onSubmit={onSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 h-32"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-red-600 text-white hover:bg-red-700 px-6 py-3 rounded-full transition duration-300"
          >
            Send Message
          </button>
        </form>

        {result && (
          <p className={`mt-4 text-center ${result.includes("Error") || result.includes("error") ? 'text-red-600' : 'text-gray-700'}`}>
            {result}
          </p>
        )}

        <div className="mt-8 ">
          <h3 className="text-xl font-bold text-gray-800 text-center">Get in Touch</h3>
          <p className="text-center text-gray-600">You can also reach us at:</p>
          <p className="text-center text-gray-700">Email: support@hamromart.com</p>
          <p className="text-center text-gray-700">Phone: (+91) 8920-789</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactUs;
