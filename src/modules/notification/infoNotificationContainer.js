import React, {Component} from 'react'
import {
    ActivityIndicator,
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    StatusBar,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import * as size from '../../styles/size';
import {CheckBox, Container, Content, Form, Header, Input, Item, Left} from 'native-base';
import * as loginAction from '../loginAndRegister/loginActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import general from '../../styles/generalStyle';
import * as color from '../../styles/color';
import {NavigationActions} from 'react-navigation';

class infoNotificationContainer extends Component {

}
