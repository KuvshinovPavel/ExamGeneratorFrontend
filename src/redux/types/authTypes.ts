import {AuthPayload} from "./payloadDTO/authPayload";

export type AuthAction = {
    payload: AuthPayload,
    type: string,
}

export enum AuthActionTypes {
    LOGIN = 'LOGIN', REGISTRATION = 'REGISTRATION', LOGOUT = 'LOGOUT'
}