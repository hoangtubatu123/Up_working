
import loginReducer from '../Modules/loginAndRegister/loginReducer';

import registerReducer from "../Modules/loginAndRegister/registerReducers";
import homeReducer from '../Modules/News/homeReducer';
import changeThemeReducer from '../Modules/News/changThemeReducer'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({

    login                       : loginReducer,
    register                    : registerReducer,
    home                        : homeReducer,
    theme                       : changeThemeReducer
});
export default rootReducer;