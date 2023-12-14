import Axios from 'axios';
import { url } from './index.js';

export const getDeliveryManById = async (id) => {
            
    const data = await Axios.get(`${url}/api/deliveryMan/${id}`).then((response) => {
        return response.data;
    });
    
    return data;
}
    
export const getDeliveryMans = async () => {
                
    const data = await Axios.get(`${url}/api/deliveryMan`).then((response) => {
        return response.data;
    });
    
    return data;
}

export const createDeliveryMan = async (deliveryMan) => {
                
    const data = await Axios.post(`${url}/api/deliveryMan`, deliveryMan).then((response) => {
        return response.data;
    });
    
    return data;
}

export const updateDeliveryMan = async (deliveryMan) => {
                    
    const data = await Axios.put(`${url}/api/deliveryMan/${id}`, deliveryMan).then((response) => {
        return response.data;
    });
    
    return data;
}

export const deleteDeliveryMan = async (id) => {

    const data = await Axios.delete(`${url}/api/deliveryMan/${id}`).then((response) => {
        return response.data;
    });
    
    return data;
}