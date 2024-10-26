import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from './Modal';

const AdminProductList = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
  });
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

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
        const response = await axios.get('http://localhost:5000/api/categories'); // Adjust this to your API endpoint
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories', error);
      }
    };

    fetchProducts();
    fetchCategories();
  }, []);

  const handleDelete = async (productId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error('Error deleting product', error);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setProductData({
      name: product.name,
      price: product.price,
      description: product.description,
      category: product.category ? product.category._id : '',
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedData = { ...productData };
    if (!productData.category) {
      delete updatedData.category;
    }

    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:5000/api/products/${editingProduct._id}`, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const response = await axios.get('http://localhost:5000/api/products');
      setProducts(response.data);
      setEditingProduct(null);
    } catch (error) {
      console.error('Error updating product', error.response ? error.response.data : error);
    }
  };

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category && product.category.name === selectedCategory);

  return (
    <div>

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
                className="w-full h-32 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
              <p className="text-gray-800">{product.description}</p>
              <p className="text-gray-600">Category: {product.category ? product.category.name : 'N/A'}</p>
              <div className="mt-4">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded"
                  onClick={() => handleEdit(product)}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={!!editingProduct} onClose={() => setEditingProduct(null)}>
        <h3 className="text-xl mb-4">Edit Product</h3>
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            placeholder="Product Name"
            value={productData.name}
            onChange={(e) => setProductData({ ...productData, name: e.target.value })}
            className="border rounded p-2 mb-2 w-full"
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={productData.price}
            onChange={(e) => setProductData({ ...productData, price: e.target.value })}
            className="border rounded p-2 mb-2 w-full"
            required
          />
          <textareaS
            placeholder="Description"
            value={productData.description}
            onChange={(e) => setProductData({ ...productData, description: e.target.value })}
            className="border rounded p-2 mb-2 w-full"
            required
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Update Product
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AdminProductList;
