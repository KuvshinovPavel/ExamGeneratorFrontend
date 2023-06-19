import {instance} from "./index";

export const testsAPI = {
    generateOGEMath: ()=>instance.get('/tests/oge_math'),
    generateOGEInf: ()=>instance.get('/tests/oge_inf'),

}
