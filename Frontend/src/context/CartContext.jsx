import React, { useReducer, useContext, createContext } from 'react';

// Define initial cart state
const initialCartState = {
    items: [],
    totalQuantity: 0,
};

// Reducer function to manage cart actions
function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const itemExists = state.items.find(item => item.productId === action.payload.productId);
            let updatedItems;

            if (itemExists) {
                // If item exists, update quantity
                updatedItems = state.items.map(item =>
                    item.productId === action.payload.productId
                        ? { ...item, quantity: item.quantity + action.payload.quantity }
                        : item
                );
            } else {
                // Otherwise, add new item
                updatedItems = [...state.items, action.payload];
            }

            return {
                ...state,
                items: updatedItems,
                totalQuantity: state.totalQuantity + action.payload.quantity,
            };
        }
        case 'REMOVE_FROM_CART': {
            const updatedItems = state.items.filter(item => item.productId !== action.payload.productId);
            const removedItem = state.items.find(item => item.productId === action.payload.productId);

            return {
                ...state,
                items: updatedItems,
                totalQuantity: state.totalQuantity - (removedItem ? removedItem.quantity : 0),
            };
        }
        default:
            return state;
    }
}

// Create Cart Context
export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

    const addToCart = (productId, quantity) => {
        dispatch({ type: 'ADD_TO_CART', payload: { productId, quantity } });
    };

    const removeFromCart = productId => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: { productId } });
    };

    return (
        <CartContext.Provider value={{ cartState, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
