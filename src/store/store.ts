import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {userApi, userSlice} from "./slices/userSlice";

const rootReducer = combineReducers({
    userReducer: userSlice.reducer,
    [userApi.reducerPath]: userApi.reducer
})
const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware)
    })
}

export const store = setupStore()
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
//     RootState,
//     unknown,
//     Action<string>>;
