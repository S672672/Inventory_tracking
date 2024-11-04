const API_URL = 'http://localhost:5000/api/cakecart';

const getAuthToken = () => {
  // Replace this with your method of retrieving the auth token
  return localStorage.getItem('token'); // Example using localStorage
};

export const addToCart = async (cakeId) => {
  const token = getAuthToken();
  const response = await fetch(`${API_URL}/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, // Include token in headers
    },
    body: JSON.stringify({ cakeId }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to add item to cart');
  }
  return await response.json(); // Returns the updated cart data
};

export const getCakeCart = async () => {
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


export const removeFromCart = async (cakeId) => {
  const token = getAuthToken();

  const response = await fetch(`${API_URL}/item/${cakeId}`, {
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
