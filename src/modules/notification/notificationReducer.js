import initialState from '../../reducers/initialState';
import * as types from '../../constants/actionTypes';

export default function notificationReducer(state = initialState.notification, action){
    switch (action.type){
        case types.BEGIN_GET_NOTIFICATION :
            return {
                ...state,
                ...{}
            };
        case types.GET_NOTIFICATION_SUCCESS:
            return {
                ...state,
                ...{}
            };
        case types.GET_NOTIFICATION_ERROR:
            return {
                ...state,
                ...{}
            };
        default:
            return state;
    }
}