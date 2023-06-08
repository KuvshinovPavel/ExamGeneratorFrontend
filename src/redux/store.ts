import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/authReducer";
import {testsReducer} from "./reducers/testsReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    tests: testsReducer,
})
export const store = configureStore({
    reducer:rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
