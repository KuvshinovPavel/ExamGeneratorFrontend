
import {RightAnswersAction, RightAnswersActionTypes} from "../types/rightAnswersTypes";

const initState = {
    ogeMathRightAnswers: 0,
    ogeInformaticsRightAnswers: 0,
    egeMathRightAnswers: 0,
    egeInformaticsRightAnswers: 0,

}

export const rightAnswersReducer =(state = initState, action: RightAnswersAction)=>{
    if (action.type === RightAnswersActionTypes.ADD_RIGHT_ANSWER) {
        return {
            ...state,
           ogeMathRightAnswers: state.ogeMathRightAnswers+action.payload
        }
    }
    return {
        ...state
    }
}
