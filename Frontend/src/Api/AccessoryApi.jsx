const API_URL = 'http://localhost:5000/api/accessorycart';

const getAuthToken = () => {
  // Replace this with your method of retrieving the auth token
  return localStorage.getItem('token'); // Example using localStorage
};

export const addToCart = async (accessoryId) => {
  const token = getAuthToken();
  const response = await fetch(`${API_URL}/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, // Include token in headers
    },
    body: JSON.stringify({ accessoryId }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to add item to cart');
  }
  return await response.json(); // Returns the updated cart data
};

export const getAccessoryCart = async () => {
  const token = getAuthToken();
  return await fetch(`${API_URL}/get-cart`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`, // Include token in headers
      'Content-Type': 'application/json', // Ensure content type is set
    },
  }).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse JSON response
  });
};


export const removeFromCart = async (accessoryId) => {
  const token = getAuthToken();

  const response = await fetch(`${API_URL}/item/${accessoryId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`, // Include token in headers
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to remove item from cart');
  }

  return await response.json(); // Returns updated cart
};

export const clearCart = async () => {
  const token = getAuthToken();

  const response = await fetch(`${API_URL}/clear`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`, // Include token in headers
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to clear cart');
  }

  return await response.json(); // Returns confirmation message or updated cart
};
