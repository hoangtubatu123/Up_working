import * as types from '../../constants/actionTypes';
import * as notificationApi from '../notification/notificationApi';

export function getNotification(){
    return (dispatch) => {
        dispatch({
            type : types.BEGIN_GET_NOTIFICATION,
        })
        notificationApi.getNotificationsApi()
            .then(function(){
                dispatch({
                    type : types.GET_NOTIFICATION_SUCCESS,
                })
            })
            .catch(function(){
                dispatch({
                    type : types.GET_NOTIFICATION_ERROR
                })

            })
    }
}