import axios from 'axios';
import * as env from '../../constants/env';

export function getNewsApi(){
    let url = env.API_UP + "/v2/blogs?page=1" ;
    return axios.get(url);
}

export function getDetailNewApi(newId){
    let url = env.API_UP + "/v2/blog/" + newId;
    return axios.get(url);
}

export function getNewsSearchApi(txt){
    let url = env.API_UP + "/v2/blogs?page=1&search=" + txt;
    return axios.get(url);
}
export function getMoreNews(page){
    let url = env.API_UP + "/v2/blogs?page=" +page;
    return axios.get(url);
}

export function getMoreNewSearchApi(page, txt){
    let url = env.API_UP + "/v2/blogs?page=" +page + "&search=" + txt;
    return axios.get(url);
}