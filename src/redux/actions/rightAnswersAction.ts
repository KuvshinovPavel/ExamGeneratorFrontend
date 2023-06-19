import {Dispatch} from "redux";
import {RightAnswersActionTypes} from "../types/rightAnswersTypes";

export const addRightAnswerOM=()=>{
    return async(dispatch: Dispatch)=>{
        dispatch({type:RightAnswersActionTypes.ADD_RIGHT_ANSWER, payload:1})
    }
}
