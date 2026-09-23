const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://bounce-emerald-drench.ngrok-free.dev';

/**
 * Register a new user
 * @param {Object} userData - User registration data
 * @param {string} userData.email - User email
 * @param {string} userData.password - User password
 * @param {boolean} userData.is_active - Active status
 * @param {boolean} userData.is_superuser - Superuser status
 * @param {boolean} userData.is_verified - Verification status
 * @param {string} userData.first_name - First name
 * @param {string} userData.last_name - Last name
 * @param {string} userData.phone_number - Phone number
 * @param {string} userData.role - User role (ADMIN, USER, etc.)
 * @param {string} userData.investor_type - Investor type (INDIVIDUAL, CORPORATE, etc.)
 * @param {string} userData.verification_status - Verification status
 * @returns {Promise<Object>} Response data
 */
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || errorData.message || 'Registration failed');
    }

    return response.json();
  } catch (error) {
    if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
      throw new Error('Unable to connect to the server. Please ensure the backend server is running at http://localhost:8000', { cause: error });
    }
    throw error;
  }
};

/**
 * Login user with username and password
 * @param {string} username - User email or username
 * @param {string} password - User password
 * @returns {Promise<Object>} Response data with access_token
 */
export const loginUser = async (username, password) => {
  const formData = new URLSearchParams();
  formData.append('username', username);
  formData.append('password', password);

  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || errorData.message || 'Login failed');
  }

  return response.json();
};

/**
 * Store authentication token in localStorage
 * @param {string} token - JWT access token
 */
export const storeAuthToken = (token) => {
  localStorage.setItem('access_token', token);
};

/**
 * Retrieve authentication token from localStorage
 * @returns {string|null} JWT access token or null
 */
export const getAuthToken = () => {
  return localStorage.getItem('access_token');
};

/**
 * Remove authentication token from localStorage
 */
export const removeAuthToken = () => {
  localStorage.removeItem('access_token');
};
