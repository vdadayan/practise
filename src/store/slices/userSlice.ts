import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IUser, IUserResult} from "../../interfaces/IUser";
import {apiRequest} from "../../api/apiConfig";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

const initialState: IUserResult = {
    data: [],
    page: 0,
    per_page: 0,
    total: 0,
    total_pages: 0
}

export const fetchUser = createAsyncThunk(
    'user',
    async (id: string, thunkAPI) => {
        try {
            const response = await apiRequest.getListUsers(id)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Ошибка запроса')
        }
    }
)

export const userApi = createApi({
    reducerPath: 'userApi',
    tagTypes: ['users'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://reqres.in/api/',
    }),
    endpoints: (build) => ({
        fetchAllUsers: build.query<IUserResult, string>({
            query: () => ({url: `/users`}),
        }),
        fetchCurrentUser: build.query<IUser, string>({
            query: (id: string) => ({url: `/users/${id}`})
        }),
        addUser: build.mutation({
            query: (body: { name: string, job: string }) => ({
                url: 'users',
                method: 'POST',
                body
            })
        })
    })
})

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
})

