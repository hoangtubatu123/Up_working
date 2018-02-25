import initialState from '../../reducers/initialState';
import * as types from '../../constants/actionTypes';

export default function upRoomReducer(state =  initialState.upRoom, action){
    switch (action.type){
        case types.BEGIN_GET_USER_PACKS :
            return {
                ...state,
                ...{isLoadingUserPack: true,}

            };
        case types.GET_USER_PACKS_SUCCESS :
            return {
                ...state,
                ...{isLoadingUserPack: false, user_packs : action.user_packs}
            };
        case types.GET_USER_PACKS_ERROR:
            return {
                ...state,
                ...{isLoadingUserPack : false, errorUserPack: false}
            };
        case types.BEGIN_REGISTER_USER_PACK:
            return {
                ...state,
                ...{
                    isLoadingRegister: true,
                }
            };
        case types.REGISTER_USER_PACK_SUCCESS:
            return {
                ...state,
                ...{
                    message : action.message, isLoadingRegister: false, status : action.status
                }
            };
        case types.REGISTER_USER_PACK_ERROR:
            return {
                ...state,
                ...{
                    isLoadingRegister : false, errorUserPack: true
                }
            };

        case "CLOSE_MODAL_SUCCESS":
            return {
                ...state,
                ...{status : action.status}
            }
        default:
            return state;
    }
}