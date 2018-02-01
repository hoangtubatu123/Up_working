import * as types from '../../constants/actionTypes';
import * as upRoomApi from '../upRoom/upRoomApi';

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

export function registerUserPack(email, phone, subscription_id){
    return (dispatch) =>{
        dispatch({
            type : types.BEGIN_REGISTER_USER_PACK,
        })
        upRoomApi.registerUserPack(email, phone, subscription_id)
            .then(function (res){
                dispatch({
                    type : types.REGISTER_USER_PACK_SUCCESS,
                    message : res.data.data.message,
                    status : res.data.status
                });
               console.log(res);
            })
            .catch(function(){
                dispatch({
                    type : types.REGISTER_USER_PACK_ERROR,
                });
                alert("Kiểm tra lại kết nối của bạn");
            })

    }
}
export function  closeModalSuccess(){
    return {
        type : "CLOSE_MODAL_SUCCESS",
        status: 2,
    }
}