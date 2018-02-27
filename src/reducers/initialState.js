
import {StyleSheet} from 'react-native';
import * as colorLight from '../styles/color';
import * as style from '../styles/generalStyle';

let color = colorLight;

export default {
    login: {
        login: {},
        token: undefined,
        isLoading: false,
        error: false,
        result: false,
        isGetLocalData: false,
        status: 0,
        user: {},
    },
    register: {
        name : "",
        email:"",
        isLoading: false,
        error: false,
        status: 0,
    },
    home: {
        isLoading: false,
        news: [],
        error : false,
        detailNew : {},
        isLoadingDetail : false,
        errorDetail : false,
        isLoadingSearch : false,
        errorSearch:  false,
        isLoadingMore : false,
        errorLoadMore : false,
        isRefreshing: false,
        errorRefresh: false,
        isLoadingMoreSearch : false,
        errorLoadMoreSearch : false
    },
    reservation : {
        isLoadingProvinces : false,
        errorProvinces : false,
        errorUp : false,
        isLoadingUp : false,
        provinces : [],
        bases : [],
    },
    upRoom : {
        isLoadingUserPack : false,
        user_packs : [],
        errorUserPack : false,
        isLoadingRegister : false,
        message : "",
        errorRegister : false,
        status : 0,
    },
    history : {
        isLoadingHistory : false,
        history_registers : [],
        errorHistory : false
    },
    notification : {
        notifications : [
            {
                avatar_url : "https://i.pinimg.com/564x/88/4c/52/884c52a8d5778dd514a29a57ce307639.jpg",
                content : "Nguyễn Việt Hùng đã thêm một ảnh trong ColorMe Family ",
                created_at: "4 minutes ago",
                seen : true
            },
            {
                avatar_url : "https://i.pinimg.com/564x/29/0d/17/290d176e15e9e6995667687faa14f8d3.jpg",
                content : "Nguyễn Việt Hùng đã thêm một ảnh trong ColorMe Family ",
                created_at: "4 minutes ago",
                seen : false
            },
            {
                avatar_url : "https://i.pinimg.com/564x/29/0d/17/290d176e15e9e6995667687faa14f8d3.jpg",
                content : "Nguyễn Việt Hùng đã thêm một ảnh trong ColorMe Family ",
                created_at: "4 minutes ago",
                seen : false
            },
        ],
        loadingNotification : false,

    },
}