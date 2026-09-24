const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://test-collab-farm.onrender.com';

/**
 * Get dashboard overview data
 * @returns {Promise<Object>} Dashboard overview data
 */
export const getDashboardOverview = async () => {
  try {
    const token = localStorage.getItem('access_token');
    
    const response = await fetch(`${API_BASE_URL}/dashboard/overview`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'ngrok-skip-browser-warning': 'true',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || errorData.message || 'Failed to fetch dashboard data');
    }

    return response.json();
  } catch (error) {
    if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
      throw new Error('Unable to connect to the server. Please ensure the backend server is running.', { cause: error });
    }
    throw error;
  }
};
