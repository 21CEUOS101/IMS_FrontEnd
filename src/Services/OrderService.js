import Axios from 'axios';
import { url } from './index.js';

export const getOrderById = async (id) => {

    const data = await Axios.get(`${url}/api/order/${id}`).then((response) => {
        return response.data;
    });
    
    return data;
}

export const getOrders = async () => {
    
    const data = await Axios.get(`${url}/api/order`).then((response) => {
        return response.data;
    });
    
    return data;
}

export const createOrder = async (order) => {
    
    const data = await Axios.post(`${url}/api/order`, order).then((response) => {
        return response.data;
    });
    
    return data;
}

export const updateOrder = async (order) => {
    
    const data = await Axios.put(`${url}/api/order/${id}`, order).then((response) => {
        return response.data;
    });
    
    return data;
}

export const deleteOrder = async (id) => {

    const data = await Axios.delete(`${url}/api/order/${id}`).then((response) => {
        return response.data;
    });
    
    return data;
}