import {User} from "./user";

export type AuthPayload = {
    user: User,
    token: string
}