// import React, {Component} from 'react';
// import {
//     DrawerItems, TouchableOpacity, StatusBar, View
// } from 'react-native';
import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';
// import Icon from '../commons/Icon';
// import * as color from '../styles/color';
import * as size from '../Styles/size';
// LOGIN

//
//  MAIN SCREEN
import HomeContainer from '../Modules/News/HomeContainer';

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
           Home : {screen:HomeContainer,}
    }, StackNavigatorStyle
);
