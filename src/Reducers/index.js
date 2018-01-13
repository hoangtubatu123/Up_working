
import homeReducer from '../Modules/News/homeReducer';
import loginReducer from '../Modules/loginAndRegister/loginReducer';
import registerReducer from '../Modules/loginAndRegister/registerReducers';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    home                        : homeReducer,
    login                       :loginReducer,
    register                    : registerReducer
});
export default rootReducer;