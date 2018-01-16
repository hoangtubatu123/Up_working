
import homeReducer from '../modules/news/homeReducer';
import loginReducer from '../modules/loginAndRegister/loginReducer';
import registerReducer from '../modules/loginAndRegister/registerReducers';
import getReservationReducer from '../modules/reservation/reservationReducer'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    home                        : homeReducer,
    login                       :loginReducer,
    register                    : registerReducer,
    reservation                 : getReservationReducer
});
export default rootReducer;