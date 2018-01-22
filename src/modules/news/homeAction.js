import * as types from '../../constants/actionTypes'
import * as homeApi from '../../modules/news/homeApi'
//get all new
export function beginGetNews(){
    return{
        type : types.BEGIN_GET_NEWS,
        isLoading : true
    }
}
export function getNewSuccess(res){
    return{
        type : types.GET_NEWS_SUCCESS,
        isLoading: false,
        news : res.data.blogs
    }
}
export function getNewError() {
    return {
        type : types.GET_NEWS_ERROR,
        isLoading : false,
        error : true,
    }
}
export function getNews() {
    return (dispatch) => {
        dispatch(beginGetNews);
        homeApi.getNewsApi()
            .then(function (res){
                dispatch(getNewSuccess(res))
            })
            .catch(function(){
                dispatch(getNewError())
            })
    }
}
// detail new
export function beginGetDetail(){
    return {
        type : types.BEGIN_GET_DETAIL_NEW,
        isLoadingDetail: true,
    }
}
export function getDetailSuccess(res){
    return {
        type : types.GET_DETAIL_NEW_SUCCESS,
        isLoadingDetail: false,
        detailNew : res.data.data.product
    }
}
export function getDetailError(){
    return {
        type : types.GET_DETAIL_NEW_ERROR,
        isLoadingDetail: false,
        errorDetail: true
    }
}
export function getDetailNew(newId){
    return (dispatch) => {
        dispatch(beginGetDetail());
        homeApi.getDetailNewApi(newId)
            .then(function(res){
                dispatch(getDetailSuccess(res));
            })
            .catch(function () {
                dispatch(getDetailError());
            })
    }
}
//get new when search

export function beginGetSearchNew(){
    return {
        type : types.BEGIN_SEARCH_NEW,
        isLoadingSearch: true,
    }
}
export function getSearchNewSuccess(res){
    return {
        type : types.GET_SEARCH_NEW_SUCCESS,
        isLoadingSearch: false,
        news : res.data.blogs
    }
}
export function getSearchNewError(){
    return {
        type : types.GET_SEARCH_NEW_ERROR,
        isLoadingSearch: false,
        errorSearch: true
    }
}
export function getSearchNew(txt){
    return (dispatch) => {
        dispatch(beginGetSearchNew());
        homeApi.getNewsSearchApi(txt)
            .then(function(res){
                dispatch(getSearchNewSuccess(res));
            })
            .catch(function () {
                dispatch(getSearchNewError());
            })
    }
}
// get More News

export function getMoreNews(page){
    return (dispatch) =>{
        dispatch({
            type : types.BEGIN_GET_MORE_NEWS,
        })
        homeApi.getMoreNews(page)
            .then(function (res){
                dispatch({
                    type : types.GET_MORE_NEWS_SUCCESS,
                    news : res.data.blogs
                });

            })
            .catch(function(){
                dispatch({
                    type : types.GET_MORE_NEWS_ERROR,
                });
            })

    }
}
//refresh
export function refreshNews(){
    return (dispatch) =>{
        dispatch({
            type : types.BEGIN_REFRESH_NEWS,
        })
        homeApi.getNewsApi()
            .then(function (res){
                dispatch({
                    type : types.GET_REFRESH_SUCCESS,
                    news : res.data.blogs
                });

            })
            .catch(function(){
                dispatch({
                    type : types.GET_REFRESH_ERROR,
                });
            })

    }
}
// get More News When Search
export function getMoreNewsSearch(page, txt){
    return (dispatch) =>{
        dispatch({
            type : types.BEGIN_MORE_NEWS_SEARCH,
        })
        homeApi.getMoreNewSearchApi(page, txt)
            .then(function (res){
                dispatch({
                    type : types.GET_MORE_NEWS_SEARCH_SUCCESS,
                    news : res.data.blogs
                });

            })
            .catch(function(){
                dispatch({
                    type : types.GET_MORE_NEWS_SEARCH_ERROR,
                });
            })

    }
}






