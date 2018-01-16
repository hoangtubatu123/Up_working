
import homeReducer from '../modules/News/homeReducer';
import loginReducer from '../modules/loginAndRegister/loginReducer';
import registerReducer from '../modules/loginAndRegister/registerReducers';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    home                        : homeReducer,
    login                       :loginReducer,
    register                    : registerReducer
});
export default rootReducer;