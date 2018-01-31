import axios from 'axios';
import * as env from '../../constants/env';

export function historyApi(token){
   let url = env.API_UP + "/coworking-space/history-registers?token=" +token;
   return axios.get(url);
}