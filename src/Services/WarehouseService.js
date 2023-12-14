import Axios from 'axios';
import { url } from './index.js';

export const getWarehouseById = async (id) => {

    const data = await Axios.get(`${url}/api/warehouse/${id}`).then((response) => {
        return response.data;
    });
    
    return data;
}

export const getWarehouses = async () => {
        
    const data = await Axios.get(`${url}/api/warehouse`).then((response) => {
        return response.data;
    });
    
    return data;
}

export const createWarehouse = async (warehouse) => {
        
    const data = await Axios.post(`${url}/api/warehouse`, warehouse).then((response) => {
        return response.data;
    });
    
    return data;
}

export const updateWarehouse = async (warehouse) => {
            
    const data = await Axios.put(`${url}/api/warehouse/${id}`, warehouse).then((response) => {
        return response.data;
    });
    
    return data;
}

export const deleteWarehouse = async (id) => {

    const data = await Axios.delete(`${url}/api/warehouse/${id}`).then((response) => {
        return response.data;
    });
    
    return data;
}