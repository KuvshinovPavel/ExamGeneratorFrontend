import {Dispatch} from "redux";
import {testsAPI} from "../../api/testsAPI";
import {TestsActionTypes} from "../types/testsTypes";

export const generateTest=()=>{
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
