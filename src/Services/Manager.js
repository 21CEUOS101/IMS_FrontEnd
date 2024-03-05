import Axios from 'axios';
import { url } from './index';
const token = localStorage.getItem('jwt');
const id = "m213094";
const config = {
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    },
    withCredentials: true,
};

export const getCheckWarehouse = async () => {
    try {
        // console.log(id);
        const response = await Axios.get(`${url}/api/wmanager/checkwarehousebyWid/${id}`, config);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const getPendingOrders = async () => {
    try {
        // console.log(id);
        const response = await Axios.get(`${url}/api/getallPendingByWId/${id}`, config);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const getallapprovedbutisDFByMid = async () => {
    try {
        // console.log(id);
        const response = await Axios.get(`${url}/api/getallapprovedbutisDFByMid/${id}`, config);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const getallDeliveredordersByMid = async () => {
    try {
        // console.log(id);
        const response = await Axios.get(`${url}/api/getallDeliveredordersByMid/${id}`, config);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const getallapprovedbutisDTByMid = async () => {
    try {
        // console.log(id);
        const response = await Axios.get(`${url}/api/getallapprovedbutisDTByMid/${id}`, config);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const getallcancelledByMid = async () => {
    try {
        // console.log(id);
        const response = await Axios.get(`${url}/api/getallcancelledByMid/${id}`, config);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const makeSupplierOrderByWId = async (data) => {
    try {
        const response = await Axios.post(`${url}/api/wmanager/makeSupplierOrderByWId/${id}/data`, null, {
            params: {
                data: data
            },
            ...config  
        });
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}