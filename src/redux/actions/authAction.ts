import {Dispatch} from "redux";
import {authAPI} from "../../api/authAPI";
import {AuthActionTypes} from "../types/authTypes";

export const login = (email: string, password: string) => {
    return async (dispatch: Dispatch) => {
        try {
            await authAPI.login(email, password).then(({data}) => {
                dispatch({type: AuthActionTypes.LOGIN, payload: data});
                localStorage.setItem('token', data.token);
                const user: string = JSON.stringify(data.user);
                localStorage.setItem('user', user);
            })
        } catch (e) {
            console.log(e);
        }
    }
}

export const register = (userName: string, email: string, password: string) => {
    return async (dispatch: Dispatch) => {
        try {
            await authAPI.register(userName, email, password).then(({data}) => {
                dispatch({type: AuthActionTypes.REGISTRATION, payload: data});
                localStorage.setItem('token', data.token);
                const user: string = JSON.stringify(data.user);
                localStorage.setItem('user', data.user);
            })
        } catch (e) {
            console.log(e);
        }
    }
}