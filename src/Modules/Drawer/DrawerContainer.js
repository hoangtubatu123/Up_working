import React, {Component} from 'react';
import {Platform, StatusBar, Switch, Text, TouchableOpacity, View} from 'react-native';
import {Container, Content} from 'native-base';
import * as size from '../../styles/size';
import general from '../../styles/generalStyle';
import {connect} from 'react-redux';
import Icon from '../../commons/Icon';
import {bindActionCreators} from 'redux';

class DrawerContainer extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            setThemeDark: false
        }
    }

    componentWillMount() {
        this.props.homeAction.getData();
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container style={general.wrapperContainer}>
                <StatusBar
                    barStyle={"dark-content"}
                    backgroundColor={"#FFFFFF"}
                />
                <Content style={general.padding}>

                    <TouchableOpacity
                        style={general.itemTabInDrawer}
                        onPress={() => navigate('Home')}
                    >
                        <View style={general.wrapperRowCenter}>
                            <View style={general.wrapperIconDrawer}>
                                <Icon
                                    name="material|home"
                                    size={size.iconBig}
                                    style={general.colorDark}
                                />
                            </View>
                            <Text style={general.textInDrawer}>Home</Text>
                        </View>
                    </TouchableOpacity>
                    {/*<TouchableOpacity*/}
                        {/*style={general.itemTabInDrawer}*/}
                        {/*onPress={() => navigate('MusicPlay')}*/}
                    {/*>*/}
                        {/*<View style={general.wrapperRowCenter}>*/}
                            {/*<View style={general.wrapperIconDrawer}>*/}
                                {/*<Icon*/}
                                    {/*name="material|music-note"*/}
                                    {/*size={size.iconBig}*/}
                                    {/*style={general.colorDark}*/}
                                {/*/>*/}
                            {/*</View>*/}
                            {/*<Text style={general.textInDrawer}>Music Player</Text>*/}
                        {/*</View>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<TouchableOpacity*/}
                        {/*style={general.itemTabInDrawer}*/}
                        {/*onPress={() => navigate('VideoPlay')}*/}
                    {/*>*/}
                        {/*<View style={general.wrapperRowCenter}>*/}
                            {/*<View style={general.wrapperIconDrawer}>*/}
                                {/*<Icon*/}
                                    {/*name="material|video-library"*/}
                                    {/*size={size.iconBig}*/}
                                    {/*style={general.colorDark}*/}
                                {/*/>*/}
                            {/*</View>*/}
                            {/*<Text style={general.textInDrawer}>Video Player</Text>*/}
                        {/*</View>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<TouchableOpacity*/}
                        {/*style={general.itemTabInDrawer}*/}
                        {/*onPress={() => navigate('BookStore')}*/}
                    {/*>*/}
                        {/*<View style={general.wrapperRowCenter}>*/}
                            {/*<View style={general.wrapperIconDrawer}>*/}
                                {/*<Icon*/}
                                    {/*name="material|book"*/}
                                    {/*size={size.iconBig}*/}
                                    {/*style={general.colorDark}*/}
                                {/*/>*/}
                            {/*</View>*/}
                            {/*<Text style={general.textInDrawer}>Book Store</Text>*/}
                        {/*</View>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<TouchableOpacity*/}
                        {/*style={general.itemTabInDrawer}*/}
                        {/*onPress={() => navigate('Calendar')}*/}
                    {/*>*/}
                        {/*<View style={general.wrapperRowCenter}>*/}
                            {/*<View style={general.wrapperIconDrawer}>*/}
                                {/*<Icon*/}
                                    {/*name="material|perm-contact-calendar"*/}
                                    {/*size={size.iconBig}*/}
                                    {/*style={general.colorDark}*/}
                                {/*/>*/}
                            {/*</View>*/}
                            {/*<Text style={general.textInDrawer}>Calendar</Text>*/}
                        {/*</View>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<TouchableOpacity*/}
                        {/*style={general.itemTabInDrawer}*/}
                        {/*onPress={() => navigate('Dashboard')}*/}
                    {/*>*/}
                        {/*<View style={general.wrapperRowCenter}>*/}
                            {/*<View style={general.wrapperIconDrawer}>*/}
                                {/*<Icon*/}
                                    {/*name="material|dashboard"*/}
                                    {/*size={size.iconBig}*/}
                                    {/*style={general.colorDark}*/}
                                {/*/>*/}
                            {/*</View>*/}
                            {/*<Text style={general.textInDrawer}>Dashboard</Text>*/}
                        {/*</View>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<TouchableOpacity*/}
                        {/*style={general.itemTabInDrawer}*/}
                        {/*onPress={() => navigate('Map')}*/}
                    {/*>*/}
                        {/*<View style={general.wrapperRowCenter}>*/}
                            {/*<View style={general.wrapperIconDrawer}>*/}
                                {/*<Icon*/}
                                    {/*name="material|map"*/}
                                    {/*size={size.iconBig}*/}
                                    {/*style={general.colorDark}*/}
                                {/*/>*/}
                            {/*</View>*/}
                            {/*<Text style={general.textInDrawer}>Map</Text>*/}
                        {/*</View>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<TouchableOpacity*/}
                        {/*style={general.itemTabInDrawer}*/}
                        {/*onPress={() => navigate('QRCode')}*/}
                    {/*>*/}
                        {/*<View style={general.wrapperRowCenter}>*/}
                            {/*<View style={general.wrapperIconDrawer}>*/}
                                {/*<Icon*/}
                                    {/*name="fontawesome|qrcode"*/}
                                    {/*size={size.iconBig}*/}
                                    {/*style={general.colorDark}*/}
                                {/*/>*/}
                            {/*</View>*/}
                            {/*<Text style={general.textInDrawer}>QRCODE</Text>*/}
                        {/*</View>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<TouchableOpacity*/}
                        {/*style={general.itemTabInDrawer}*/}
                        {/*onPress={() => navigate('Trello')}*/}
                    {/*>*/}
                        {/*<View style={general.wrapperRowCenter}>*/}
                            {/*<View style={general.wrapperIconDrawer}>*/}
                                {/*<Icon*/}
                                    {/*name="entypo|calendar"*/}
                                    {/*size={size.iconBig}*/}
                                    {/*style={general.colorDark}*/}
                                {/*/>*/}
                            {/*</View>*/}
                            {/*<Text style={general.textInDrawer}>Jobs</Text>*/}
                        {/*</View>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<TouchableOpacity*/}
                        {/*style={general.itemTabInDrawer}*/}
                        {/*onPress={() => navigate('PersonnelManagement')}*/}
                    {/*>*/}
                        {/*<View style={general.wrapperRowCenter}>*/}
                            {/*<View style={general.wrapperIconDrawer}>*/}
                                {/*<Icon*/}
                                    {/*name="material|supervisor-account"*/}
                                    {/*size={size.iconBig}*/}
                                    {/*style={general.colorDark}*/}
                                {/*/>*/}
                            {/*</View>*/}
                            {/*<Text style={general.textInDrawer}>Personnel Management</Text>*/}
                        {/*</View>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<TouchableOpacity*/}
                        {/*style={general.itemTabInDrawer}*/}
                        {/*onPress={() => navigate('Teach')}*/}
                    {/*>*/}
                        {/*<View style={general.wrapperRowCenter}>*/}
                            {/*<View style={general.wrapperIconDrawer}>*/}
                                {/*<Icon*/}
                                    {/*name="material|work"*/}
                                    {/*size={size.iconBig}*/}
                                    {/*style={general.colorDark}*/}
                                {/*/>*/}
                            {/*</View>*/}
                            {/*<Text style={general.textInDrawer}>Teach</Text>*/}
                        {/*</View>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<TouchableOpacity*/}
                        {/*style={general.itemTabInDrawer}*/}
                        {/*onPress={() => navigate('Cart')}*/}
                    {/*>*/}
                        {/*<View style={general.wrapperRowCenter}>*/}
                            {/*<View style={general.wrapperIconDrawer}>*/}
                                {/*<Icon*/}
                                    {/*name="materialCommunity|cart"*/}
                                    {/*size={size.iconBig}*/}
                                    {/*style={general.colorDark}*/}
                                {/*/>*/}
                            {/*</View>*/}
                            {/*<Text style={general.textInDrawer}>Cart</Text>*/}
                        {/*</View>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<TouchableOpacity*/}
                        {/*style={general.itemTabInDrawer}*/}
                        {/*onPress={() => navigate('MarketingManagement')}*/}
                    {/*>*/}
                        {/*<View style={general.wrapperRowCenter}>*/}
                            {/*<View style={general.wrapperIconDrawer}>*/}
                                {/*<Icon*/}
                                    {/*name="material|donut-small"*/}
                                    {/*size={size.iconBig}*/}
                                    {/*style={general.colorDark}*/}
                                {/*/>*/}
                            {/*</View>*/}
                            {/*<Text style={general.textInDrawer}>Marketing Management</Text>*/}
                        {/*</View>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<TouchableOpacity*/}
                        {/*style={general.itemTabInDrawer}*/}
                        {/*onPress={() => navigate('FinanceManagement')}*/}
                    {/*>*/}
                        {/*<View style={general.wrapperRowCenter}>*/}
                            {/*<View style={general.wrapperIconDrawer}>*/}
                                {/*<Icon*/}
                                    {/*name="material|monetization-on"*/}
                                    {/*size={size.iconBig}*/}
                                    {/*style={general.colorDark}*/}
                                {/*/>*/}
                            {/*</View>*/}
                            {/*<Text style={general.textInDrawer}>Finance Management</Text>*/}
                        {/*</View>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<TouchableOpacity*/}
                        {/*style={general.itemTabInDrawer}*/}
                        {/*onPress={() => navigate('Base')}*/}
                    {/*>*/}
                        {/*<View style={general.wrapperRowCenter}>*/}
                            {/*<View style={general.wrapperIconDrawer}>*/}
                                {/*<Icon*/}
                                    {/*name="material|account-balance"*/}
                                    {/*size={size.iconBig}*/}
                                    {/*style={general.colorDark}*/}
                                {/*/>*/}
                            {/*</View>*/}
                            {/*<Text style={general.textInDrawer}>Bases</Text>*/}
                        {/*</View>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<TouchableOpacity*/}
                        {/*style={general.itemTabInDrawer}*/}
                        {/*onPress={() => navigate('ExerciseAndPost')}*/}
                    {/*>*/}
                        {/*<View style={general.wrapperRowCenter}>*/}
                            {/*<View style={general.wrapperIconDrawer}>*/}
                                {/*<Icon*/}
                                    {/*name="material|dashboard"*/}
                                    {/*size={size.iconBig}*/}
                                    {/*style={general.colorDark}*/}
                                {/*/>*/}
                            {/*</View>*/}
                            {/*<Text style={general.textInDrawer}>Exercise And Post</Text>*/}
                        {/*</View>*/}
                    {/*</TouchableOpacity>*/}
                    <TouchableOpacity
                        style={general.itemTabInDrawer}
                        onPress={() => navigate('Email')}
                    >
                        <View style={general.wrapperRowCenter}>
                            <View style={general.wrapperIconDrawer}>
                                <Icon
                                    name="material|email"
                                    size={size.iconBig}
                                    style={general.colorDark}
                                />
                            </View>
                            <Text style={general.textInDrawer}>Email</Text>
                        </View>
                    </TouchableOpacity>
                    {/*<TouchableOpacity*/}
                        {/*style={general.itemTabInDrawer}*/}
                        {/*onPress={() => navigate('Contact')}*/}
                    {/*>*/}
                        {/*<View style={general.wrapperRowCenter}>*/}
                            {/*<View style={general.wrapperIconDrawer}>*/}
                                {/*<Icon*/}
                                    {/*name="material|textsms"*/}
                                    {/*size={size.iconBig}*/}
                                    {/*style={general.colorDark}*/}
                                {/*/>*/}
                            {/*</View>*/}
                            {/*<Text style={general.textInDrawer}>Contact</Text>*/}
                        {/*</View>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<TouchableOpacity*/}
                        {/*style={general.itemTabInDrawer}*/}
                        {/*onPress={() => navigate('Event')}*/}
                    {/*>*/}
                        {/*<View style={general.wrapperRowCenter}>*/}
                            {/*<View style={general.wrapperIconDrawer}>*/}
                                {/*<Icon*/}
                                    {/*name="material|event"*/}
                                    {/*size={size.iconBig}*/}
                                    {/*style={general.colorDark}*/}
                                {/*/>*/}
                            {/*</View>*/}
                            {/*<Text style={general.textInDrawer}>Events</Text>*/}
                        {/*</View>*/}
                    {/*</TouchableOpacity>*/}
                    <TouchableOpacity
                        style={general.itemTabInDrawer}
                        onPress={() => navigate('Register')}
                    >
                        <View style={general.wrapperRowCenter}>
                            <View style={general.wrapperIconDrawer}>
                                <Icon
                                    name="material|dns"
                                    size={size.iconBig}
                                    style={general.colorDark}
                                />
                            </View>
                            <Text style={general.textInDrawer}>Register</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={general.wrapperBottomModule}/>
                </Content>

            </Container>
        );
    }
}
function mapStateToProps(state) {
    return {
        colors: state.theme.colors,
        colorsDrawer: state.theme.colorsDrawer
    }
}
function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DrawerContainer)