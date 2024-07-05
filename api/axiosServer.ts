import axios from 'axios'
import {cookies} from "next/headers";

export const createServerInstance = () => {
    const authToken = cookies().get('authToken')?.value

    if (authToken) {
        return axios.create({
            baseURL: 'http://localhost:8080/api/v1',
            headers: {
                Authorization: `Bearer ${authToken}`,
            }
        })
    }

    return axios.create({
        baseURL: 'http://localhost:8080/api/v1'
    })
}