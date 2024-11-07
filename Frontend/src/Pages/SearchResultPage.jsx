import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import CakeCard from "../components/cakeCard"; 
import AccessoryCard from "../components/Accessory";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [loading, setLoading] = useState(true); 
  const location = useLocation();

  
  const fetchData = async () => {
    try {
      const [productsRes, cakesRes, accessoriesRes] = await Promise.all([
        axios.get("http://localhost:5000/api/products"),
        axios.get("http://localhost:5000/api/cakes"),
        axios.get("http://localhost:5000/api/accessory"),
      ]);

      
      const allItems = [
        ...productsRes.data.map(item => ({ ...item, category: 'product' })),
        ...cakesRes.data.map(item => ({ ...item, category: 'cake' })),
        ...accessoriesRes.data.map(item => ({ ...item, category: 'accessory' })),
      ];

      
      const lowercasedQuery = searchQuery.toLowerCase();
      const filtered = allItems.filter(
        (item) =>
          item.name.toLowerCase().includes(lowercasedQuery) ||
          item.description.toLowerCase().includes(lowercasedQuery)
      );

      setFilteredResults(filtered);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  
  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Search Results for "{searchQuery}"</h1>

      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search by name or description..."
        className="p-2 border rounded"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredResults.length > 0 ? (
          filteredResults.map((item, index) => {
        
            if (item.category === "product") {
              return <ProductCard key={index} product={item} />;
            } else if (item.category === "cake") {
              return <CakeCard key={index} cake={item} />;
            } else if (item.category === "accessory") {
              return <AccessoryCard key={index} accessory={item} />;
            }
            return null;
          })
        ) : (
          <p>No items found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
