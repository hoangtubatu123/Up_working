import * as types from '../../constants/actionTypes';
import initialState from '../../reducers/initialState';

export default function getReservationReducer(state = initialState.reservation, action ){
    switch (action.type){
        case  types.BEGIN_GET_PROVINCES :
            return {
                ...state,
                ...{
                    isLoadingProvinces : true,
                }
            }
        case types.GET_PROVINCES_SUCCESS :
            return {
                ...state,
                ...{provinces : action.provinces, isLoadingProvinces: action.isLoadingProvinces}
            };
        case types.GET_PROVINCES_ERROR :
            return {
                ...state,
                ...{isLoadingProvinces : action.isLoadingProvinces, error : action.errorProvinces}
            };

        case types.BEGIN_GET_RESERVATION :
            return{
                ...state,
                ...{isLoadingUp : action.isLoadingUp}
            };
        case types.GET_REVERVATION_SUCCESS :
            return {
                ...state,
                ...{isLoadingUp: action.isLoadingUp, bases: action.bases}
            };
        case types.GET_REVERVATION_ERROR:
            return {
                ...state,
                ...{isLoadingUp : action.isLoadingUp, errorUp : action.errorUp}
            };
        case types.BEGIN_SEARCH_BASES :
            return{
                ...state,
                ...{isLoadingUp : action.isLoadingUp}
            };
        case types.GET_SEARCH_BASES_SUCCESS :
            return {
                ...state,
                ...{isLoadingUp: action.isLoadingUp, bases: action.bases}
            };
        case types.GET_SEARCH_BASES_ERROR:
            return {
                ...state,
                ...{isLoadingUp : action.isLoadingUp, errorUp : action.errorUp}
            };
        default:
            return state;
    }
}