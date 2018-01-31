import * as types from '../../constants/actionTypes';
import * as historyApi from '../history/historyApi';

export function getHistoryRegister(token){
    return (dispatch) => {
        dispatch({
            type : types.BEGIN_GET_HISTORY_REGISTERS,
        })
        historyApi.historyApi(token)
            .then(function(res){
                dispatch({
                    type : types.GET_HISTORY_REGISTERS_SUCCESS,
                    history_registers: res.data.data.history_registers
                })
            })
            .catch(function (){
                dispatch({
                    type : types.GET_HISTORY_REGISTER_ERROR
                })
            })
    }
}
