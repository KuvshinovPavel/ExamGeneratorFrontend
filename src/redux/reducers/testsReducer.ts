import {TestsAction, TestsActionTypes} from "../types/testsTypes";

const initState = {
    ogeMath: [] as Array<{ rightAnswer: string, latexEval: string }>,
    ogeInformatics: [] as Array<{ rightAnswer: string, latexEval: string }>,
    egeMath: [] as Array<{ rightAnswer: string, latexEval: string }>,
    egeInformatics: [] as Array<{ rightAnswer: string, latexEval: string }>,
}
export const testsReducer = (state = initState, action: TestsAction) => {
    if (action.type === TestsActionTypes.GENERATE_OGE_MATH) {
        return {
            ...state,
            ogeMath: action.payload
        }
    }
    return {
        ...state
    }
}
