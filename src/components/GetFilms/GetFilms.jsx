import axios from "axios";

const URL = "https://api.themoviedb.org/3/trending/all/day";
const KEY = "1026e0f194f2bc4cc4b6e148bd5c040a";

const instance = axios.create({
    baseURL: URL,
    params: {
        api_key: KEY,
    }
})

export const GetPopularMovie = async() => {
    const { data } = await instance.get();
    return data;
}