import axios from "axios";

export const apiConfig = axios.create({
    baseURL: 'https://reqres.in/api/'
})

export const apiRequest = {
    getListUsers: async () => {
        const response = await apiConfig.get(`users`)
        return response.data
    },
}