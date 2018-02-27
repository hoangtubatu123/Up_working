import * as env from '../../constants/env';
import axios from 'axios' ;

export function getUserPack(){
    let url = env.API_UP + '/coworking-space/user-packs';
    return axios.get(url);
}
export function registerUserPack(email, phone, subscription_id,base_id){
    let url = env.API_UP + '/coworking-space/register/18';
    return axios.post(url, {
        email : email,
        phone : phone,
        subscription_id : subscription_id,
        base_id : base_id
    })
}