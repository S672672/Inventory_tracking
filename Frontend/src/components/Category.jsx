import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Offerheading from './Offerheading';

export default function CategoryProductList() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories', error);
      }
    };

    fetchProducts();
    fetchCategories();
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} has been added to your cart!`);
  };

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category && product.category.name === selectedCategory);

  return (
    <div className='flex flex-col gap-10 items-center justify-center'>
    <Offerheading heading='Explore the Products by category'/>
      <div className="flex justify-center my-4">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`rounded-full py-2 px-4 text-white ${selectedCategory === 'All' ? 'bg-blue-500' : 'bg-gray-500'}`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category._id}
              onClick={() => setSelectedCategory(category.name)}
              className={`rounded-full py-2 px-4 text-white ${selectedCategory === category.name ? 'bg-blue-500' : 'bg-gray-500'}`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filteredProducts.map((product) => (
          <div key={product._id} className="border rounded-lg overflow-hidden shadow-md">
            {product.image && (
              <img
                src={`http://localhost:5000/uploads/${product.image}`}
                alt={product.name}
                className="w-full h-32 object-cover" />
            )}
            <div className="p-4">
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
              <p className="text-gray-800">{product.description}</p>
              <p className="text-gray-600">Category: {product.category ? product.category.name : 'N/A'}</p>
              <div className="mt-4 flex gap-4">
              <button
                  className="bg-green-500 text-white px-4 py-2 rounded"
                  onClick={() => setSelectedProduct(product)}
                >
                  View Details
                </button>
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded mr-2"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
