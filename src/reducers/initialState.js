
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
        register: {},
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

    },
    notification : {
        loadingNotification : false,

    },
}