
import homeReducer from '../Modules/News/homeReducer';
import loginReducer from '../Modules/loginAndRegister/loginReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    home                        : homeReducer,
    login                       :loginReducer
});
export default rootReducer;