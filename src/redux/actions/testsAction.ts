import {Dispatch} from "redux";
import {testsAPI} from "../../api/testsAPI";
import {TestsActionTypes} from "../types/testsTypes";

export const generateTestOGEMath=()=>{
    return async(dispatch: Dispatch)=>{
        try {
            await testsAPI.generateOGEMath()
                .then(({data})=>{
                    dispatch({type:TestsActionTypes.GENERATE_OGE_MATH, payload:data});
                })
        }
        catch (e) {

        }
    }
}
export const generateTestOGEInf=()=>{
    return async(dispatch: Dispatch)=>{
        try {
            await testsAPI.generateOGEInf()
                .then(({data})=>{
                    dispatch({type:TestsActionTypes.GENERATE_OGE_INF, payload:data});
                })
        }
        catch (e) {

        }
    }
}

