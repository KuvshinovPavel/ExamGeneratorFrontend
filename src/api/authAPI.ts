import {instance} from "./index";

export const authAPI = {
    login: (email: string, password: string)=>instance.post('/auth/login', {
        email, password
    }),
    register: (userName: string, email: string, password: string) => instance.post('/auth/register/',{
        userName,email, password
    }),
}