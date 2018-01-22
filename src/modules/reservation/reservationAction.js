import * as types from '../../constants/actionTypes';
import * as reservationApi from '../reservation/reservationApi';

// get provinces
export function beginGetProvinces() {
    return {
        type : types.BEGIN_GET_PROVINCES,
        isLoadingProvinces : true,
    }
}
export function getProvincesSuccess(res){
    return {
        type : types.GET_PROVINCES_SUCCESS,
        isLoadingProvinces: false,
        provinces:  res.data.data.provinces,
    }
}
export function getProvincesError(){
    return {
        type : types.GET_PROVINCES_ERROR,
        isLoadingProvinces : false,
        errorProvinces: true,
    }
}
export function getProvinces(token){
    return (dispatch) => {
        dispatch(beginGetProvinces());
        reservationApi.getProvincesApi(token)
            .then(function (res){
                dispatch(getProvincesSuccess(res))
            })
            .catch(function(error){
                dispatch(getProvincesError())
                console.log(error);
            })
    }
}
// get Up in provinces
export function beginGetUPCoWorking() {
    return {
        type : types.BEGIN_GET_PROVINCES,
        isLoadingUp : true,
    }
}
export function getBasesSuccess(res){
    return {
        type : types.GET_REVERVATION_SUCCESS,
        isLoadingUp: false,
        bases: res.data.data.bases,
    }
}
export function getBasesError(){
    return {
        type : types.GET_REVERVATION_ERROR,
        isLoadingUp : false,
        errorUp: true,
    }
}
export function getBases(token, provinceId){
    return (dispatch) => {
        dispatch(beginGetUPCoWorking());
        reservationApi.getReservation(token, provinceId)
            .then(function (res){
                dispatch(getBasesSuccess(res))
            })
            .catch(function(){
                dispatch(getBasesError())
            })
    }
}

export function getSearchBase(provinceId, txt, token){
    return (dispatch) =>{
        dispatch({
            type : types.BEGIN_SEARCH_BASES,
        })
        reservationApi.getSearchBaseApi(provinceId,txt, token)
            .then(function (res){
                dispatch({
                    type : types.GET_SEARCH_BASES_SUCCESS,
                    bases : res.data.data.bases
                });

            })
            .catch(function(){
                dispatch({
                    type : types.GET_SEARCH_BASES_ERROR,
                });
            })

    }
}