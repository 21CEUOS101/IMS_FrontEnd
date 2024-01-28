import Axios from 'axios';
import { url } from './index';

// const token = "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W3siYXV0aG9yaXR5IjoiQURNSU4ifV0sInN1YiI6ImFzaGlzaEBnbWFpbC5jb20iLCJpYXQiOjE3MDYzNTA4ODcsImV4cCI6MTcwNjM2ODg4N30.N07njdeJTWXnw7UHF8XL8-TcN4gJViNORA7oDfiZwKP82K6aiT0NgG1qfnGCpNGP64_H1vMHgbxkfbjEHqYGCA";
const token = localStorage.getItem('jwt');
const config = {
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    },
    withCredentials: true,
};

export const getorder_statusCByDId = async (id) => {
    try {
        console.log(id);
        const response = await Axios.get(`${url}/api/order/orderstatusCByDId/${id}`, config);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const getw2worder_statusCByDId = async (id) => {
    try {


        const response = await Axios.get(`${url}/api/w2worder/w2worderstatusCByDId/${id}`, config);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }

}
export const getorder_statusPByDId = async (id) => {
    try {
        console.log(id);
        const response = await Axios.get(`${url}/api/order/orderstatusPByDId/${id}`, config);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const getw2worder_statusPByDId = async (id) => {
    try {
        const response = await Axios.get(`${url}/api/w2worder/w2worderstatusPByDId/${id}`, config);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const getDeliveryManProfile = async (id) => {
    try {
        const response = await Axios.get(`${url}/api/deliveryman/profile/${id}`, config);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const updateProfile = async (id, data) => {
    try {
        const response = await Axios.post(`${url}/api/deliveryman/${id}`, data, config);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const getorderstatusShipped = async (id) => {
    try {
        const response = await Axios.get(`${url}/api/order/orderstatusSByDId/${id}`, config);
        // console.log("hello1");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const getw2worderstatusShipped = async (id) => {
    try {
        const response = await Axios.get(`${url}/api/w2worder/w2worderstatusSByDId/${id}`, config);
        // console.log("hello2");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const Completedorder = async (id, status) => {
    try {
        const response = await Axios.post(`${url}/api/order/${id}/status`, null, {
            params: {
                status: status
            },
            ...config  // assuming config is defined and contains any necessary headers
        });
        // console.log("hello2");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const Completedw2worder = async (id, status) => {
    try {
        const response = await Axios.post(`${url}/api/w2worder/${id}/status`, null, {
            params: {
                status: status
            },
            ...config  // assuming config is defined and contains any necessary headers
        });
        // console.log("hello2");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const Shippedw2wOrder = async (id, order) => {
    try {
        console.log(id)
        console.log(order)
        const response = await Axios.post(`${url}/api/w2worder/assignBydeliveryman/${id}/data`, null, {
            params: {
                data: order
            },
            ...config  // assuming config is defined and contains any necessary headers
        });
        // console.log("hello2");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}
export const ShippedOrder = async (id, order) => {
    try {
        const response = await Axios.post(`${url}/api/order/assignBydeliveryman/${id}/data`, null, {
            params: {
                data: order
            },
            ...config  // assuming config is defined and contains any necessary headers
        });
        // console.log("hello2");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as needed
    }
}