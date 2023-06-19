import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/authReducer";
import {testsReducer} from "./reducers/testsReducer";
import {rightAnswersReducer} from "./reducers/rightAnswersReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    tests: testsReducer,
    rightAnswers: rightAnswersReducer
})
export const store = configureStore({
    reducer:rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
