// src/pages/ProductDetails.js
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../context/CartContext';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState('');
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/api/products/${productId}`);
        setProduct(res.data);
      } catch (err) {
        setError('Failed to fetch product details. Please try again later.');
      }
    };
    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (quantity < 1) {
      alert('Please enter a valid quantity.');
      return;
    }
    addToCart(product, quantity);
  };

  if (error) return <p className="text-red-500">{error}</p>;
  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mx-auto my-8">
      <div className="flex flex-col md:flex-row">
        <img src={product.imageURL} alt={product.name} className="h-64 w-full md:w-1/2 object-cover" />
        <div className="md:ml-8 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-700 mt-2">${product.price}</p>
          <p className="text-gray-700 mt-2">{product.description}</p>
          <div className="mt-4">
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border px-4 py-2 w-20"
              min="1"
            />
            <button
              onClick={handleAddToCart}
              className="bg-green-500 text-white px-4 py-2 ml-4 rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
