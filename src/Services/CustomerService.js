import Axios from 'axios';
import { url } from './index.js';

export const getCustomerById = async (id) => {
        
    const data = await Axios.get(`${url}/api/customer/${id}`).then((response) => {
        return response.data;
    });
    
    return data;
}

export const getCustomers = async () => {
            
    const data = await Axios.get(`${url}/api/customer`).then((response) => {
        return response.data;
    });
    
    return data;
}
    
export const createCustomer = async (customer) => {
            
    const data = await Axios.post(`${url}/api/customer`, customer).then((response) => {
        return response.data;
    });
    
    return data;
}

export const updateCustomer = async (customer) => {
                
    const data = await Axios.put(`${url}/api/customer/${id}`, customer).then((response) => {
        return response.data;
    });
    
    return data;
}

export const deleteCustomer = async (id) => {

    const data = await Axios.delete(`${url}/api/customer/${id}`).then((response) => {
        return response.data;
    });
    
    return data;
}
    