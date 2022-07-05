import axios from "axios";

export const apiConfig = axios.create({
    baseURL: 'https://reqres.in/api/',
    headers: {
        'Content-type': 'application/json'
    }
})

export const apiRequest = {
    getListUsers: async () => {
        const response = await apiConfig.get(`users`)
        return response.data
    },
    register: async (data: any) => {
        const response = await apiConfig.post(`register`, data)
        console.log(response)
    }
}