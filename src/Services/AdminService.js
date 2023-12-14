import Axios from 'axios';
import { url } from './index.js';

export const getAdminById = async (id) => {
    
    const data = await Axios.get(`${url}/api/admin/${id}`).then((response) => {
        return response.data;
    });
    
    return data;
}

export const getAdmins = async () => {
        
    const data = await Axios.get(`${url}/api/admin`).then((response) => {
        return response.data;
    });
    
    return data;
}
    
export const createAdmin = async (admin) => {
        
    const data = await Axios.post(`${url}/api/admin`, admin).then((response) => {
        return response.data;
    });
    
    return data;
}

export const updateAdmin = async (admin) => {
            
    const data = await Axios.put(`${url}/api/admin/${id}`, admin).then((response) => {
        return response.data;
    });
    
    return data;
}

export const deleteAdmin = async (id) => {

    const data = await Axios.delete(`${url}/api/admin/${id}`).then((response) => {
        return response.data;
    });
    
    return data;
}
    
    

