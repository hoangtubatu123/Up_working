import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';
import * as size from '../styles/size';
import HomeContainer from '../modules/news/HomeContainer';
import InfoUpContainer from '../modules/infoUp/InfoUpContainer';
import LoginContainer from '../modules/loginAndRegister/LoginContainer';
import RegisterContainer from '../modules/loginAndRegister/RegisterContainer';
import ReservationContainer from '../modules/reservation/ReservationContainer';
import HistoryContainer from '../modules/history/HistoryContainer';
import UpRoomContainer from '../modules/upRoom/UpRoomContainer';
import DrawerContainer from '../modules/drawer/DrawerContainer';
import InfoNewContainer from '../modules/news/InfoNewContainer';
import * as React from "react";

const StackNavigatorStyle = {
    navigationOptions: {
        header: null,
    },
};
const HomeStackNavigator = StackNavigator({
    HomeContainer: {screen: HomeContainer},

}, StackNavigatorStyle);


const Drawer = DrawerNavigator(
    {
        Home: {screen: HomeContainer},
        Reservation: {screen: ReservationContainer},
        History: {screen: HistoryContainer},
        UpRoom: {screen: UpRoomContainer},
        infoUp : {screen : InfoUpContainer},
        infoNew : {screen : InfoNewContainer}
    },
    {
        drawerWidth: size.wid * 3 / 4,
        drawerPosition: 'right',
        contentComponent: props => <DrawerContainer {...props}/>,
    }
);
export const Main = StackNavigator(
    {
        Login:{screen:LoginContainer},
        Register : {screen:RegisterContainer},
        Drawer: {screen: Drawer},
    },
    {headerMode: 'none'}
);



