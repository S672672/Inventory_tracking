import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { addToCart } from "../Api/Api"; // Assuming you have a ProductCard component

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        fetch(`http://localhost:5000/api/products?category=${data.category}`)
          .then((res) => res.json())
          .then((products) => setRelatedProducts(products))
          .catch((error) =>
            console.error("Error fetching related products:", error)
          );
      })
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [productId]);

  if (!product) {
    return <div className="text-center">Loading...</div>;
  }

  const handleAddToCart = async () => {
    try {
      const response = await addToCart(product._id, "Product");
      console.log("Item added to cart:", response);
    } catch (error) {
      console.error("Error adding item to cart:", error.message);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Product Image */}
        <div className="flex-1">
          <img
            src={`http://localhost:5000/${product.image}`}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg shadow-xl transition-transform transform hover:scale-105"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold text-gray-800">{product.name}</h2>
          <p className="text-2xl text-gray-600 mt-2">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-lg text-gray-700 mt-4">{product.description}</p>

          <button
            className="bg-red-600 text-white px-8 py-3 mt-6 rounded-xl shadow-md hover:bg-red-400 transition duration-300"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-16">
        <hr className="border-t-2 border-gray-300" />
        <h3 className="text-2xl font-semibold text-gray-800 mt-6">
          Related Products
        </h3>

        <div className="mt-6 flex overflow-x-auto gap-6 py-4">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
