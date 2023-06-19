import {TestsAction, TestsActionTypes} from "../types/testsTypes";

const initState = {
    ogeMath: [] as Array<{ rightAnswer: string, latexEval: string, description: string }>,
    ogeInformatics: [] as Array<{cppCode :string, pascalCode:string, basicCode:string, pythonCode:string, rightAnswer:string, description:string}>,
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
    if (action.type === TestsActionTypes.GENERATE_OGE_INF) {
        return {
            ...state,
            ogeInformatics: action.payload
        }
    }
    return {
        ...state
    }
}
