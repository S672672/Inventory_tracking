import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard"; // Your ProductCard component
import CakeCard from "../components/cakeCard"; // Your CakeCard component
import AccessoryCard from "../components/Accessory"; // Your AccessoryCard component

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [loading, setLoading] = useState(true); // To show loading state while fetching data
  const location = useLocation();

  // Fetch data for products, cakes, and accessories
  const fetchData = async () => {
    try {
      const [productsRes, cakesRes, accessoriesRes] = await Promise.all([
        axios.get("http://localhost:5000/api/products"),
        axios.get("http://localhost:5000/api/cakes"),
        axios.get("http://localhost:5000/api/accessory"),
      ]);

      // Combine all the data into one array with added category info
      const allItems = [
        ...productsRes.data.map(item => ({ ...item, category: 'product' })),
        ...cakesRes.data.map(item => ({ ...item, category: 'cake' })),
        ...accessoriesRes.data.map(item => ({ ...item, category: 'accessory' })),
      ];

      // Filter data based on the search query (case-insensitive)
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

  // Function to handle the search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Effect to fetch data and filter results when the search query changes
  useEffect(() => {
    fetchData();
  }, [searchQuery]); // Re-run when searchQuery changes

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Search Results for "{searchQuery}"</h1>

      {/* Search input */}
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search by name or description..."
        className="p-2 border rounded"
      />

      {/* Render filtered results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredResults.length > 0 ? (
          filteredResults.map((item, index) => {
            // Render different components based on the category (added manually)
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
