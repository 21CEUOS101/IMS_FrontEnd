import Axios from 'axios';
import { url } from './index.js';

export const getWManagerById = async (id) => {

    const data = await Axios.get(`${url}/api/wManager/${id}`).then((response) => {
        return response.data;
    });
    
    return data;
}

export const getWMans = async () => {
        
    const data = await Axios.get(`${url}/api/wManager`).then((response) => {
        return response.data;
    });
    
    return data;
}

export const createWManager = async (wManager) => {
        
    const data = await Axios.post(`${url}/api/wManager`, wManager).then((response) => {
        return response.data;
    });
    
    return data;
}

export const updateWManager = async (wManager) => {
            
    const data = await Axios.put(`${url}/api/wManager/${id}`, wManager).then((response) => {
        return response.data;
    });
    
    return data;
}

export const deleteWManager = async (id) => {

    const data = await Axios.delete(`${url}/api/wManager/${id}`).then((response) => {
        return response.data;
    });
    
    return data;
}