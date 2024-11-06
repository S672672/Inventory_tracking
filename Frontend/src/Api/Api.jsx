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
  const token = localStorage.getItem('token'); // Replace with your token retrieval logic
  const response = await fetch(`${API_URL}/update`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`, // Make sure `Bearer` prefix is included
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ itemId, itemType, quantity })
  });

  if (!response.ok) {
    throw new Error('Failed to update cart item');
  }

  return response.json();
};

export const getUserCart = async (userId) => {
  const token = getAuthToken();
  try {
    const response = await fetch(`${API_URL}/${userId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      if (response.status === 401) {
        throw new Error('Unauthorized: Please log in');
      }
      if (response.status === 403) {
        throw new Error('Forbidden: You do not have permission to view this cart');
      }
      if (response.status === 404) {
        throw new Error('User not found');
      }
      throw new Error(errorData.message || 'Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching user cart:", error);
    throw error; // Re-throw the error so it can be handled by the calling component
  }
};

export const getProductDetails = async (productId) => {
  try {
    const response = await fetch(`http://localhost:5000/products/${productId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product details');
    }
    return await response.json(); // Ensure the response is returned in JSON format
  } catch (error) {
    console.error('Error fetching product details:', error);
    throw error; // Re-throw error for handling in the component
  }
};





