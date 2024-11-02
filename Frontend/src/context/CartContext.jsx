import { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
      case 'SET_CART':
          return action.payload; // Set cart from DB
      case 'ADD_TO_CART':
          // Check if the item already exists in the cart
          const existingItemIndex = state.findIndex(item => item._id === action.payload._id);
          if (existingItemIndex >= 0) {
              // Update the quantity of the existing item
              const updatedCart = [...state];
              updatedCart[existingItemIndex].quantity += action.payload.quantity;
              return updatedCart;
          } else {
              return [...state, action.payload]; // Add new item to cart
          }
      default:
          return state;
  }
};

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, []);

    useEffect(() => {
      const fetchCart = async () => {
          try {
              const token = localStorage.getItem('token');
              const userId = localStorage.getItem('userId'); // Ensure userId is retrieved
              const response = await axios.get(`http://localhost:5000/api/auth/cart`, {
                  headers: { Authorization: `Bearer ${token}` },
              });
              dispatch({ type: 'SET_CART', payload: response.data.items });
          } catch (error) {
              console.error('Failed to fetch cart', error);
          }
      };
  
      fetchCart();
  }, []);
  

    const addToCart = async (productId) => {
      try {
          const token = localStorage.getItem('token');
          const response = await axios.post('http://localhost:5000/api/auth/cart/add', { productId }, {
              headers: { Authorization: `Bearer ${token}` },
          });
  
          // Assuming the response contains the full item object
          dispatch({ type: 'ADD_TO_CART', payload: response.data.item }); // Use the correct field for the added item
      } catch (error) {
          console.error('Add to Cart Error:', error);
          alert('Error adding to cart. Please try again.');
      }
  };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
