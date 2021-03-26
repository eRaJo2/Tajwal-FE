import Axios, { AxiosResponse } from 'axios';

export const getAllHotels = () => {
    return Axios('http://www.mocky.io/v2/5eb8fcb12d0000d088357f2a').then(res =>{
        return res?.data;
    }).catch(e =>{
        Promise.reject(`Couldn't find any hotels, ${e}`)
    })
}