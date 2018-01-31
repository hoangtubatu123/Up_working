import * as types from '../../constants/actionTypes';
import initialState from '../../reducers/initialState';

export default function historyReducer(state = initialState.history, action ){
    switch (action.type){
        case types.BEGIN_GET_HISTORY_REGISTERS:
           return {
               ...state,
               ...{isLoadingHistory: true}
           };
        case types.GET_HISTORY_REGISTERS_SUCCESS:
            return {
                ...state,
                ...{isLoadingHistory: false, history_registers : action.history_registers}
            };
        case types.GET_HISTORY_REGISTER_ERROR:
            return {
                ...state,
                ...{isLoadingHistory : false, errorHistory: true}
            };
        default:
            return state;
    }
}