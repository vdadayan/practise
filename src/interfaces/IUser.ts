import {IUserSupport} from "./IListUsers";

export interface IUser {
    id: number,
    email: string,
    first_name: string
    last_name: string
    avatar: string
}

export interface ISingleUser {
    data: IUser,
    support: IUserSupport
}