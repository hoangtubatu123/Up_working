
import homeReducer from '../modules/news/homeReducer';
import loginReducer from '../modules/loginAndRegister/loginReducer';
import registerReducer from '../modules/loginAndRegister/registerReducers';
import upRoomReducer from '../modules/upRoom/upRoomReducer';
import getReservationReducer from '../modules/reservation/reservationReducer';
import notificationReducer from '../modules/notification/notificationReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    home                        : homeReducer,
    login                       :loginReducer,
    register                    : registerReducer,
    reservation                 : getReservationReducer,
    upRoom                      : upRoomReducer,
    notification                : notificationReducer
});
export default rootReducer;