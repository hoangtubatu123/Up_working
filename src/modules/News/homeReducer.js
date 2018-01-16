import * as types from '../../constants/actionTypes';
import initialState from '../../reducers/initialState';

export default function homeAction(state = initialState.home, action) {
    switch (action.type) {
        case types.GET_NEWS:
            return {
                ...state,
                ...{
                    news: action.news
                }
            };
        default:
            return state
    }
}