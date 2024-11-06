import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard'; // Your ProductCard component
import CakeCard from '../components/cakeCard'; // Your CakeCard component
import AccessoryCard from '../components/Accessory'; // Your AccessoryCard component

const SearchPage = () => {
  const [products, setProducts] = useState([]);
  const [cakes, setCakes] = useState([]);
  const [accessories, setAccessories] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch product, cake, and accessory data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch product, cake, and accessory data from respective APIs
        const productResponse = await fetch('http://localhost:5000/api/products');
        const cakeResponse = await fetch('http://localhost:5000/api/cakes');
        const accessoryResponse = await fetch('http://localhost:5000/api/accessory');

        const productsData = await productResponse.json();
        const cakesData = await cakeResponse.json();
        const accessoriesData = await accessoryResponse.json();

        // Set the fetched data to state
        setProducts(productsData);
        setCakes(cakesData);
        setAccessories(accessoriesData);

        // Initially show all items
        setFilteredItems([...productsData, ...cakesData, ...accessoriesData]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Handle search filtering
  const handleSearch = (query) => {
    setSearchQuery(query);

    const lowercasedQuery = query.toLowerCase();

    const filtered = [
      ...products,
      ...cakes,
      ...accessories,
    ].filter(item =>
      item.name.toLowerCase().includes(lowercasedQuery) ||
      item.price.toString().includes(lowercasedQuery) ||
      item.category.toLowerCase().includes(lowercasedQuery)
    );

    setFilteredItems(filtered);
  };

  return (
    <div>
      <div className="search-bar p-4">
        <input
          type="text"
          placeholder="Search by name, price, or category"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="search-input p-2 border rounded"
        />
      </div>

      <div className="card-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {filteredItems.length === 0 ? (
          <p>No matching items found.</p>
        ) : (
          filteredItems.map(item => {
            if (item.category === 'Product') {
              return <ProductCard key={item.id} {...item} />;
            } else if (item.category === 'Cake') {
              return <CakeCard key={item.id} {...item} />;
            } else if (item.category === 'Accessory') {
              return <AccessoryCard key={item.id} {...item} />;
            }
            return null;
          })
        )}
      </div>
    </div>
  );
};

export default SearchPage;
