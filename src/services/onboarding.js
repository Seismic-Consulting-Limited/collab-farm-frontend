const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://test-collab-farm.onrender.com';

/**
 * Submit cooperative profile onboarding data
 * @param {FormData} formData - FormData object containing all fields and files
 * @returns {Promise<Object>} Response data
 */
export const submitCooperativeProfile = async (formData) => {
  const token = localStorage.getItem('access_token');
  
  if (!token) {
    throw new Error('Authentication token not found. Please login first.');
  }

  const response = await fetch(`${API_BASE_URL}/onboard/profile/cooperative`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      // Don't set Content-Type for FormData - browser will set it with boundary
    },
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    if (response.status === 422) {
      throw new Error(errorData.detail || JSON.stringify(errorData) || 'Validation failed. Please check your inputs.');
    }
    throw new Error(errorData.detail || errorData.message || 'Profile submission failed');
  }

  return response.json();
};
