import Axios from 'axios';
import { url } from './index.js';

export const getReturnOrderById = async (id) => {

    const data = await Axios.get(`${url}/api/returnorder/${id}`).then((response) => {
        return response.data;
    });
    
    return data;
}

export const getReturnOrders = async () => {

    const data = await Axios.get(`${url}/api/returnorder`).then((response) => {
        return response.data;
    });
    
    return data;
}

export const createReturnOrder = async (returnOrder) => {

    const data = await Axios.post(`${url}/api/returnorder`, returnOrder).then((response) => {
        return response.data;
    });
    
    return data;
}

export const updateReturnOrder = async (returnOrder) => {

    const data = await Axios.put(`${url}/api/returnorder/${id}`, returnOrder).then((response) => {
        return response.data;
    });
    
    return data;
}

export const deleteReturnOrder = async (id) => {

    const data = await Axios.delete(`${url}/api/returnorder/${id}`).then((response) => {
        return response.data;
    });
    
    return data;
}