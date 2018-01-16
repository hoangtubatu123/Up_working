import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';
import * as size from '../Styles/size';
import HomeContainer from '../Modules/News/HomeContainer';
import InfoUpContainer from '../Modules/infoUp/InfoUpContainer';
import LoginContainer from '../Modules/loginAndRegister/LoginContainer';
import RegisterContainer from '../Modules/loginAndRegister/RegisterContainer';
import ReservationContainer from '../Modules/Reservation/ReservationContainer';
import HistoryContainer from '../Modules/History/HistoryContainer';
import UpRoomInformation from '../Modules/UpRoom/UpRoomInformation';
import DrawerContainer from '../Modules/drawer/DrawerContainer';
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
        InfoUp: {screen: InfoUpContainer},
        Reservation: {screen: ReservationContainer},
        History: {screen: HistoryContainer},
        UpRoom: {screen: UpRoomInformation},
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



