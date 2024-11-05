const API_URL = 'http://localhost:5000/api/cart';

const getAuthToken = () => {
  return localStorage.getItem('token'); 
};

export const addToCart = async (itemId, itemType) => {
  const token = getAuthToken();
  const response = await fetch(`${API_URL}/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, 
    },
    body: JSON.stringify({ itemId, itemType }), 
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to add item to cart');
  }
  return await response.json(); 
};

export const getCart = async () => {
  const token = getAuthToken();
  return await fetch(`${API_URL}/get-cart`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`, 
      'Content-Type': 'application/json', 
    },
  }).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
};

export const removeFromCart = async (itemId, itemType) => { 
  const token = getAuthToken();

  const response = await fetch(`${API_URL}/remove`, { 
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`, 
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify({ itemId, itemType }), 
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to remove item from cart');
  }

  return await response.json();
};

export const clearCart = async () => {
  const token = getAuthToken();

  const response = await fetch(`${API_URL}/clear`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`, 
      'Content-Type': 'application/json', 
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to clear cart');
  }

  return await response.json(); 
};

// Example API function
export const updateCartItem = async (itemId, itemType, quantity) => {
  return fetch(`${API_URL}/update`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ itemId, itemType, quantity }),
  });
};

