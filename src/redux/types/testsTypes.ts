export type TestsAction = {
    payload: Array<any>,
    type: string
}

export enum TestsActionTypes {
    GENERATE_OGE_MATH='GENERATE_OGE_MATH',
    GENERATE_OGE_INF='GENERATE_OGE_INF',
    ADD_RIGHT_ANSWER='ADD_RIGHT_ANSWER'

}
