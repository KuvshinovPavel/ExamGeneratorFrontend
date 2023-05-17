import axios, {AxiosInstance} from "axios";

const baseUrl: string = 'http://localhost:5000';
export const instance: AxiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }

});