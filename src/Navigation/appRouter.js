import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';
import * as size from '../Styles/size';
import HomeContainer from '../Modules/News/HomeContainer';
import ReservationContainer from '../Modules/Reservation/ReservationContainer';
import UpRoomInformation from '../Modules/UpRoom/UpRoomInformation';

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
        Home: {screen: HomeStackNavigator},
    },
    {
        drawerWidth: size.wid * 3 / 4,
        drawerPosition: 'right',
        contentComponent: props => <DrawerContainer {...props} />,
    }
);
 const Main = StackNavigator(
    {
        Drawer: {screen: Drawer},
    },
    {headerMode: 'none'}
);



export const Start = StackNavigator(
    {
           Home : {screen:UpRoomInformation,}
    }, StackNavigatorStyle
);
