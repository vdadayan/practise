import axios from "axios";

export const apiConfig = axios.create({
    baseURL: 'https://reqres.in/api/',
    headers: {
        'Content-type': 'application/json'
    }
})

export const apiRequest = {
    getListUsers: async (id: string = '') => {
        const response = await apiConfig.get(`users/${id}`)
        return response.data
    },
    register: async (data: any) => {
        const response = await apiConfig.post(`register`, data)
        console.log(response)
    }
}