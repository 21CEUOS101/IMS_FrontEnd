import Axios from "axios";
import { url } from "./index";

const token = localStorage.getItem('jwt');

export const Login = async ({ username, password }) => {

    const userData = {
        "username": username,
        "password": password
    };
    localStorage.removeItem('jwt');
    localStorage.removeItem('userId');
    localStorage.removeItem('password');

    const data = await Axios.post(`${url}/auth/login`, userData).then((response) => {
        localStorage.setItem('jwt', response.data.token);
        localStorage.setItem('userId', response.data.username);
        localStorage.setItem('password', userData.password);
        console.log(response.data);
        return response.data;
    });

    return data;
}

export const Register = async (user) => {
    const data = await Axios.post(`${url}/auth/register`, user).then(
        (response) => {
        return response.data;
        }
    );
    
    return data;
}
    