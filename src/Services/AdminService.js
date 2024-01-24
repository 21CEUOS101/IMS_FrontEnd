import Axios from 'axios';
import { url } from './index.js';

const token = localStorage.getItem('jwt');
const config = {
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    },
    withCredentials: true,
};

console.log(token);

export const getAdminById = async (id) => {

    const data = await Axios.get(`${url}/api/admin/${id}`, config).then((response) => {
        return response.data;
    });

    return data;
}

export const getAdmins = async () => {

    const data = await Axios.get(`${url}/api/admin`, config).then((response) => {
        return response.data;
    });

    return data;
}

export const createAdmin = async (admin) => {

    const data = await Axios.post(`${url}/api/admin`, admin , config).then((response) => {
        return response.data;
    });

    return data;
}

export const updateAdmin = async (admin) => {

    const data = await Axios.put(`${url}/api/admin/${admin?.id}`, admin , config).then((response) => {
        return response.data;
    });

    return data;
}

export const deleteAdmin = async (id) => {

    const data = await Axios.delete(`${url}/api/admin/${id}`, config).then((response) => {
        return response.data;
    });

    return data;
}