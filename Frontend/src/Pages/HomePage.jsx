// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import ShopByCategory from '../components/Category';
import ProductList from './ProductList';

const Home = () => {
  return (
    <div>
     
      <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white h-screen flex items-center justify-center relative">
        <div className="text-center z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to Fresh Grocery</h1>
          <p className="text-lg md:text-xl mb-6">Discover the best dairy, packed food, and small appliances.</p>
          <Link to="/products" className="bg-white text-green-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-200 transition-all">
            Shop Now
          </Link>
        </div>
      
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1566843971903-fbd8f6f35192?auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center z-0"></div>
      </section>
      <ShopByCategory />
      <ProductList />
      <section className="bg-green-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Exclusive Offers</h2>
          <p className="text-lg mb-12">Get the freshest dairy products and best-packed food deals today!</p>
          <Link to="/products" className="bg-green-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-green-500 transition-all">
            Browse Products
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
