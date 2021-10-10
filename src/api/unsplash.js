import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID BV8DMpkzDBzsQL7dOEF3y8CbyiuLCRHRpg0T3DDaqOk',
    }
})