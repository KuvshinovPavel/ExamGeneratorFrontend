import {instance} from "./index";

export const testsAPI = {
    generateOGEMath: ()=>instance.get('/tests'),

}
