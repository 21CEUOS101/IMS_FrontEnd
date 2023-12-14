import Axios from 'axios';
import { url } from './index.js';

export const getSupplierById = async (id) => {

    const data = await Axios.get(`${url}/api/supplier/${id}`).then((response) => {
        return response.data;
    });
    
    return data;
}

export const getSuppliers = async () => {
        
    const data = await Axios.get(`${url}/api/supplier`).then((response) => {
        return response.data;
    });
    
    return data;
}

export const createSupplier = async (supplier) => {
        
    const data = await Axios.post(`${url}/api/supplier`, supplier).then((response) => {
        return response.data;
    });
    
    return data;
}

export const updateSupplier = async (supplier) => {
            
    const data = await Axios.put(`${url}/api/supplier/${id}`, supplier).then((response) => {
        return response.data;
    });
    
    return data;
}

export const deleteSupplier = async (id) => {

    const data = await Axios.delete(`${url}/api/supplier/${id}`).then((response) => {
        return response.data;
    });
    
    return data;
}