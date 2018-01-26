import axios from 'axios';
import * as env from '../../constants/env';

export function getProvincesApi(token){
     let url = env.API_UP + "/v2/base/provinces?token=" + token;
     return axios.get(url);
}

export function getReservation(token, provinceId){
    let url = env.API_UP +  "/v2/base/province/" + provinceId + "?token=" + token;
    return axios.get(url);
}

export function getSearchBaseApi(provinceId, txt, token){
    let url = env.API_UP +  "/v2/base/province/" + provinceId + "?token=" + token + "&search=" + txt;
    return axios.get(url);
}