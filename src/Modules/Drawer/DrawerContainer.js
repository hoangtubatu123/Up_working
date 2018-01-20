import React, {Component} from 'react';
import {Platform, StatusBar, Switch, Text, TouchableOpacity, View, Image} from 'react-native';
import {Container, Content} from 'native-base';
import * as size from '../../styles/size';
import general from '../../styles/generalStyle';
import {connect} from 'react-redux';
import Icon from '../../commons/Icon';
import  * as logoutAction from '../loginAndRegister/logoutAction';
import {bindActionCreators} from 'redux'
class DrawerContainer extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            setThemeDark: false
        }
    }
    logout(){
        this.props.logoutAction.logout();
        this.props.navigation.navigate('Login');
    }


    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container style={general.wrapperContainer}>
                <StatusBar
                    barStyle={"dark-content"}
                    backgroundColor={"#FFFFFF"}
                />
                    <View style={[general.wrapperLogoInDrawer]}>
                        <Image
                            resizeMode={'contain'}
                            source={require('../../../assets/image/384x176logo.png')}
                            style={[general.imageLogin, {marginLeft: 10}]}
                        />
                    </View>
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
                                />
                            </View>
                            <Text style={general.textInDrawer}>Home</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={general.itemTabInDrawer}
                        onPress={() => navigate('Reservation')}
                    >
                        <View style={general.wrapperRowCenter}>
                            <View style={general.wrapperIconDrawer}>
                                <Icon
                                    name="material|video-library"
                                    size={size.iconBig}
                                />
                            </View>
                            <Text style={general.textInDrawer}>Reservation</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={general.itemTabInDrawer}
                        onPress={() => navigate('History')}
                    >
                        <View style={general.wrapperRowCenter}>
                            <View style={general.wrapperIconDrawer}>
                                <Icon
                                    name="material|book"
                                    size={size.iconBig}
                                />
                            </View>
                            <Text style={general.textInDrawer}>History</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={general.itemTabInDrawer}
                        onPress={() => navigate('UpRoom')}
                    >
                        <View style={general.wrapperRowCenter}>
                            <View style={general.wrapperIconDrawer}>
                                <Icon
                                    name="material|perm-contact-calendar"
                                    size={size.iconBig}
                                />
                            </View>
                            <Text style={general.textInDrawer}>UpRoom</Text>
                        </View>
                    </TouchableOpacity>
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
                                />
                            </View>
                            <Text style={general.textInDrawer}>Email</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={general.itemTabInDrawer}
                        onPress={() => this.logout()}
                    >
                        <View style={general.wrapperRowCenter}>
                            <View style={general.wrapperIconDrawer}>
                                <Icon
                                    name="fontawesome|sign-out"
                                    size={size.iconBig}
                                    style={general.colorDark}
                                />
                            </View>
                            <Text style={general.textInDrawer}>Đăng xuất</Text>
                        </View>
                    </TouchableOpacity>
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

                    <View style={general.wrapperBottomModule}/>
                </Content>

            </Container>
        );
    }
}
function mapStateToProps(state) {
    return {
    }
}
function mapDispatchToProps(dispatch) {
    return {
        logoutAction : bindActionCreators(logoutAction, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DrawerContainer)