import axios from 'axios';

// BASEAPI
const BaseApi = "https://jsonplaceholder.typicode.com";

// GET users
export const GetUsers = (params: string, func: any) => {
    return axios.get(`${BaseApi}/users${params}`)
        .then((res: any) => func(res.data))
        .catch((err: any) => console.log(err))
}

// GET status
export const GetStatus = (params: string, func: any) => {
    return axios.get(`${BaseApi}/posts${params}`)
        .then((res: any) => func(res.data))
        .catch((err: any) => console.log(err))
}

// GET todos
export const GetTodos = (params: string, func: any) => {
    return axios.get(`${BaseApi}/todos${params}`)
        .then((res: any) => func(res.data))
        .catch((err: any) => console.log(err))
}

// GET comments
export const GetComments = (params: string, func: any) => {
    return axios.get(`${BaseApi}/comments${params}`)
        .then((res: any) => func(res.data))
        .catch((err: any) => console.log(err))
}

// GET albums
export const GetAlbums = (params: string, func: any) => {
    return axios.get(`${BaseApi}/albums${params}`)
        .then((res: any) => func(res.data))
        .catch((err: any) => console.log(err))
}

// GET photos
export const GetPhotos = (params: string, func: any) => {
    return axios.get(`${BaseApi}/photos${params}`)
        .then((res: any) => func(res.data))
        .catch((err: any) => console.log(err))
}

// POST status
export const PostStatus = (params: string, data: object, func: any) => {
    return axios.post(`${BaseApi}/posts${params}`, data)
        .then((res: any) => func(res.data))
        .catch((err: any) => console.log(err))
}