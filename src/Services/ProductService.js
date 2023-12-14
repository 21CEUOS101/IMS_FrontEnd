import Axios from 'axios';
import { url } from './index.js';

export const getProductById = async (id) => {
                
        const data = await Axios.get(`${url}/api/product/${id}`).then((response) => {
            return response.data;
        });
        
        return data;
}
    
export const getProducts = async () => {
                    
        const data = await Axios.get(`${url}/api/product`).then((response) => {
            return response.data;
        });
        
        return data;
}

export const createProduct = async (product) => {
                    
        const data = await Axios.post(`${url}/api/product`, product).then((response) => {
            return response.data;
        });
        
        return data;
}

export const updateProduct = async (product) => {
                        
        const data = await Axios.put(`${url}/api/product/${id}`, product).then((response) => {
            return response.data;
        });
        
        return data;
}

export const deleteProduct = async (id) => {

    const data = await Axios.delete(`${url}/api/product/${id}`).then((response) => {
        return response.data;
    });
    
    return data;
}