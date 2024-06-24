// src/apiService.js
import axios from 'axios';
import refreshToken from './TokenService';

const apiRequest = async (url, method = 'GET', data = null) => {
  const accessToken = localStorage.getItem('accessToken');

  try {
    const response = await axios({
      url,
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      data,
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Access token has expired, attempt to refresh the token
      await refreshToken();
      // Retry the original request with the new access token
      const newAccessToken = localStorage.getItem('accessToken');
      const retryResponse = await axios({
        url,
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${newAccessToken}`,
        },
        data,
      });
      return retryResponse.data;
    } else {
      // Handle other errors
      console.error('API request failed', error);
      throw error;
    }
  }
};

export default apiRequest;