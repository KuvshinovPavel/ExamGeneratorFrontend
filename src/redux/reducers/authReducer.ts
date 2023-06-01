import {User} from "../types/payloadDTO/user";
import {AuthAction, AuthActionTypes} from "../types/authTypes";

const token = localStorage.getItem('token');
const stringifiedUser = localStorage.getItem('user') || '{}';
const user: User = JSON.parse(stringifiedUser) || {};

const initState = {
    user: user || {} as User,
    isAuth: !!token
}
export const authReducer = (state = initState, action: AuthAction) => {
    if (action.type === AuthActionTypes.REGISTRATION) {
        return {
            ...state,
            isAuth: true
        }
    }

    if (action.type === AuthActionTypes.LOGIN) {
        return {
            ...state,
            isAuth: true
        }
    }
    if (action.type === AuthActionTypes.LOGOUT) {
        return {
            ...state, isAuth: false
        }
    }

    return {
        ...state
    }
}
