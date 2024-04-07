import axios from 'axios';
import Axios from 'axios'; // Move this import to the top
import { url } from './index.js';

const token = localStorage.getItem('jwt');
const config = {
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    },
    withCredentials: true,
};

export const placeOrder = async (data) => {
  try {
    const response = await axios.post(`${url}/api/order`, data, config);
    return response.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error('Error placing order:', error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Error placing order: No response from server');
    } else {
      // Something happened in setting up the request that triggered an error
      console.error('Error placing order:', error.message);
    }
    return null; 
  }
};

export const ReturnOrder = async (data) => {
    try {
        const response = await Axios.post(`${url}/api/return-order`, 
             data
        , config);
        return response.data;
    } catch (error) {
        console.error('Error placing order:', error);
        return null;
    }
};
