import {IUser} from "./IUser";

export interface IListUsers {
    page: number
    per_page: number
    total: 12
    total_pages: number
    data: IUser[]
}