import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard'; 

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(12); 
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
        setAllProducts(response.data); 
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };
    fetchProducts();
  }, []);

  const handleSeeMore = () => {
    setVisibleProducts((prev) => prev + 6); 
  };

  return (
    <section className="container mx-auto my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {allProducts.slice(0, visibleProducts).map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      {visibleProducts < allProducts.length && (
        <div className="text-center mt-8">
          <button
            onClick={handleSeeMore}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
          >
            See More Products
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductList;
