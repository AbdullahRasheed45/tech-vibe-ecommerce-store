import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"

const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDQ5ODcwMjAwOGIyOTBhZDJhMzlmMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MTc2NjM3MCwiZXhwIjoxNjkyMDI1NTcwfQ.zsKBQ5BHlf7HGXmdwzecvMj2tBDuxNCujCi3j1962to"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {
        token: `Bearer ${Token}` 
    }
})