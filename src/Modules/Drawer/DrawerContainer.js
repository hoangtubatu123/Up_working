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
                            style={[general.imageLogin, {marginLeft: 10, width :  3*size.wid/4 - 25}]}
                        />
                    </View>
                <Content style={general.padding}>

                    <TouchableOpacity
                        style={general.itemTabInDrawer}
                        onPress={() => navigate('Home')}
                    >
                        <View style={general.wrapperRowCenter}>
                            <Text style={general.textTitleCard}>Trang chủ</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={general.itemTabInDrawer}
                        onPress={() => navigate('History')}
                    >
                        <View style={general.wrapperRowCenter}>
                            <Text style={general.textTitleCard}>Lịch sử</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={general.itemTabInDrawer}
                        onPress={() => navigate('Reservation')}
                    >
                        <View style={general.wrapperRowCenter}>
                            <Text style={general.textTitleCard}>Đặt chỗ</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={general.itemTabInDrawer}
                        onPress={() => navigate('noti')}
                    >
                        <View style={general.wrapperRowCenter}>
                            <Text style={general.textTitleCard}>Thông báo</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[general.itemTabInDrawer]}
                        onPress={() => this.logout()}
                    >
                        <View style={general.wrapperRowCenter}>
                            <Text style={general.textTitleCard}>Đăng xuất</Text>
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