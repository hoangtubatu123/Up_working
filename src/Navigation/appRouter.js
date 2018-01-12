import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';
import * as size from '../Styles/size';
import HomeContainer from '../Modules/News/HomeContainer';
import InfoUpContainer from '../Modules/infoUp/InfoUpContainer';
import LoginContainer from '../Modules/loginAndRegister/LoginContainer';
import ReservationContainer from '../Modules/Reservation/ReservationContainer';
import HistoryContainer from '../Modules/History/HistoryContainer';
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

        // Login: {screen: LoginContainer},
        // RegisterContainer: {screen: RegisterContainer,},
        Login: {screen: LoginContainer},
        // RegisterContainer: {screen: RegisterContainer,},Login: {screen: LoginContainer},
           Home : {screen:InfoUpContainer,}
        // EmailIdentityContainer: {screen: EmailIdentityContainer,},
        // ResetPasswordContainer: {screen: ResetPasswordContainer,},
        // CodeIdentityContainer: {screen: CodeIdentityContainer,},
        // RulesContainer: {screen: RulesContainer},
        // AttendGroup: {screen: Group},
        // Rules: {screen: RulesContainer},
        // FeedbackAppContainer: {screen: FeedbackAppContainer},
        // Main: {screen: Main,}
    }, StackNavigatorStyle
);
