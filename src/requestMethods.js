import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjkwNWRjYWMxZDU4Yjk0YTM5OTc2OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDQ5MzAwOCwiZXhwIjoxNjcwNzUyMjA4fQ.8JRjU4kC1YUfkro1_P4ZZ2VvwOp5m2EpNHQk3laqpyc"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})