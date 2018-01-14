import * as types from '../../Constants/actionTypes'
import {AsyncStorage} from 'react-native'


export function logoutSuccess() {
    return {
        type: types.LOGOUT,
        status: 1
    }
}

export function logout() {
    return async function (dispatch) {
        try {
            await AsyncStorage.removeItem('@ColorMe:save')
            dispatch(logoutSuccess())
        }
        catch (error) {
        }
        ;
    }
}



