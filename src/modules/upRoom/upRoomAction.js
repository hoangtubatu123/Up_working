import * as types from '../../constants/actionTypes';
import * as upRoomApi from '../upRoom/upRoomApi';
import {Alert} from 'react-native'
export function getUserPack(){
    return (dispatch) =>{
        dispatch({
            type : types.BEGIN_GET_USER_PACKS,
        })
        upRoomApi.getUserPack()
            .then(function (res){
                dispatch({
                    type : types.GET_USER_PACKS_SUCCESS,
                    user_packs : res.data.data.user_packs
                });

            })
            .catch(function(){
                dispatch({
                    type : types.GET_USER_PACKS_ERROR,
                });
            })

    }
}

export function registerUserPack(email, phone, subscription_id, base_id){
    return (dispatch) =>{
        dispatch({
            type : types.BEGIN_REGISTER_USER_PACK,
        })
        upRoomApi.registerUserPack(email, phone, subscription_id,base_id)
            .then(function (res){
                dispatch({
                    type : types.REGISTER_USER_PACK_SUCCESS,
                    message : res.data.data.message,
                    status : res.data.status
                });
            })
            .catch(function(){
                dispatch({
                    type : types.REGISTER_USER_PACK_ERROR,
                });
                Alert.alert("Thông báo","Kiểm tra lại kết nối của bạn");
            })

    }
}
export function  closeModalSuccess(){
    return {
        type : "CLOSE_MODAL_SUCCESS",
        status: 2,
    }
}
export function closeModalRegister(){
    return {
        type : "CLOSE_MODAL_REGISTER",
    }
}