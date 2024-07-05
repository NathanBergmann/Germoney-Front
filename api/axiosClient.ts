import axios from 'axios'
import {getCookie} from "cookies-next";

export const createClientInstance = () => {
    const token = getCookie('authToken')
    if (token) {
        return axios.create({
            baseURL: 'http://localhost:8080/api/v1',
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
    }

    return axios.create({
        baseURL: 'http://localhost:8080/api/v1'
    })
}