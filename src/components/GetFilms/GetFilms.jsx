import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const urlTrending = "/trending/all/day";
const urlId = "/movie/";
const urlCast = "/credits";
const urlReviews = "/reviews";
const KEY = "1026e0f194f2bc4cc4b6e148bd5c040a";



export const GetPopularMovie = async () => {
    const instance = axios.create({
    baseURL: `${URL}${urlTrending}`,

    params: {
        api_key: KEY,
    }
})
    const { data } = await instance.get();
    return data;
}

export const GetMovieById = async (id) => {
    const instance = axios.create({
    baseURL: `${URL}${urlId}${id}`,

    params: {
        api_key: KEY,
    }
})
    const { data } = await instance.get();
    return data;
}

export const GetMovieCast = async (id) => {
    const instance = axios.create({
        baseURL: `${URL}${urlId}${id}${urlCast}`,
        params: {
            api_key: KEY,
        }
    })
    const { data } = await instance.get();
    return data;
}

export const GetMovieReviews = async (id) => {
    const instance = axios.create({
        baseURL: `${URL}${urlId}${id}${urlReviews}`,
        params: {
            api_key: KEY,
        }
    })
    const  data = instance.get();
    return data;
}