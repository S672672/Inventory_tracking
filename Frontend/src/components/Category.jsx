import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ShopByCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="container mx-auto my-16">
      <h2 className="text-4xl font-bold text-center mb-12">Shop by Category</h2>
      <div className="flex overflow-x-auto space-x-4 items-center justify-center">
     
        <Link
          to="/products" 
          className="bg-blue-600 text-white rounded-full py-3 px-6 text-lg font-semibold transition-transform transform hover:scale-105"
        >
          All
        </Link>
        
        {categories.map((category) => (
          <Link
            key={category._id}
            to={`/category/${category._id}`}
            className="bg-blue-600 text-white rounded-full py-3 px-6 text-lg font-semibold transition-transform transform hover:scale-105"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategory;
