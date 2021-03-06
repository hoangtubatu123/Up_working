import React, {Component} from 'react'
import {Image, KeyboardAvoidingView, Platform, StatusBar, Text, TouchableOpacity, View,ActivityIndicator, Alert,} from 'react-native';
import * as size from '../../styles/size';
import {CheckBox, Container, Content, Form, Header, Input, Item, Left} from 'native-base';
import * as registerAction from '../loginAndRegister/registerAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import general from '../../styles/generalStyle';
import * as color from '../../styles/color';
import * as loginAction from '../loginAndRegister/loginActions';
import Icon from '../../commons/Icon';
import BackButton from "../../commons/BackButton"
import {NavigationActions} from 'react-navigation'

class RegisterContainer extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            name: '',
            username: '',
            password: '',
            checkRules: true,
        }
    }
    saveData(login){
        this.props.loginAction.setDataLogin(login);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.status === 200){
            let login = {"email": this.state.email, "password": this.state.password}
            this.saveData(login);
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({routeName: 'Drawer'})
                ]
            })
            this.props.navigation.dispatch(resetAction);
        }
    }
    register(value) {
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(this.state.email) == false) {
            Alert.alert("Email không hợp lệ ")
        }
        else if (this.state.email === '' || this.state.name === '' || this.state.username === '' || this.state.password === '') {
            Alert.alert('Có lỗi xảy ra', 'Bạn chưa nhập đủ thông tin.');
        }
        else if (!this.state.checkRules) {
            Alert.alert('Có lỗi xảy ra', 'Bạn chưa đồng ý với điều khoản sử dụng.');
        }
        else {
            this.props.registerAction.registerUser(value);
        }
    }
    render(){
        const {navigate} = this.props.navigation;
        const {goBack} = this.props.navigation;
        return (
            <View style={{flex: 1}}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'android' ? 'position' : "position"}
                keyboardVerticalOffset={Platform.OS === 'ios' ? undefined : 0}
                style={general.wrapperContainer}
            >

                <View style={[general.wrapperLogin, {padding: 20, backgroundColor : "transparent"}]}>
                    <Image
                        resizeMode={'contain'}
                        source={require('../../../assets/image/384x176logo.png')}
                        style={[general.imageLogin, general.marginLR]}
                    />
                   <View style = {{marginTop : 20}}>
                        <Item style={general.itemInput}>
                            <Input
                                style={[general.inputTheme02, general.textDescriptionCard]}
                                underlineColorAndroid={color.none}
                                placeholder="Email"
                                returnKeyType={'next'}
                                autoCorrect={false}
                                onChangeText={(email) => {
                                    this.setState({email})
                                }}
                                value={this.state.email}
                            />
                        </Item>
                    </View>
                    <View style={{marginTop: 20}}>
                        <Item style={[general.itemInput]}>
                            <Input
                                style={[general.inputTheme02, general.textDescriptionCard]}
                                underlineColorAndroid={color.none}
                                placeholder="Password"
                                returnKeyType={'next'}
                                autoCorrect={false}
                                secureTextEntry={true}
                                onChangeText={(password) => {
                                    this.setState({password})
                                }}
                                value={this.state.password}
                            />
                        </Item>
                    </View>
                    <View style={{marginTop: 20}}>
                        <Item style={[general.itemInput]}>
                            <Input
                                style={[general.inputTheme02 ,general.textDescriptionCard]}
                                underlineColorAndroid={color.none}
                                placeholder="Name"
                                keyboardType={'email-address'}
                                returnKeyType={'next'}
                                autoCorrect={false}
                                onChangeText={(name) => {
                                   this.setState({name})
                                }}
                                value={this.state.name}
                            />
                        </Item>
                    </View>
                    <View style={{marginTop: 20}}>
                        <Item style={general.itemInput}>
                            <Input
                                style={[general.inputTheme02, general.textDescriptionCard]}
                                underlineColorAndroid={color.none}
                                placeholder="Username"
                                keyboardType={'email-address'}
                                returnKeyType={'done'}
                                autoCorrect={false}
                                onSubmitEditing={() => {
                                    this.register(this.state)
                                }}
                                onChangeText={(username) => {
                                   this.setState({username})
                                }}
                                value={this.state.username}
                            />
                        </Item>
                    </View>
                    <View style={general.wrapperCenter}>
                        <View style={general.wrapperLoginButton}>
                            <TouchableOpacity
                                style={general.buttonBuyNowFullSize}
                                onPress={() => {
                                    this.register(this.state)
                                }}
                            >
                                {(this.props.isLoading) ? (

                                        <ActivityIndicator
                                            animated={true}
                                            color={color.navTitle}
                                            style={{
                                                height: 20,
                                            }}
                                            size='small'
                                        />

                                ) : (
                                    <Text style={[general.paddingRight, general.textBigLight]}>REGISTER</Text>
                                )
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/*<View style={{justifyContent: 'center', alignItems: 'center', bottom: -size.hei / 6 + 20}}>*/}
                    {/*<Text style={[general.textLogin,]}>FORGOT PASSWORD</Text>*/}
                    {/*</View>*/}
                </View>
            </KeyboardAvoidingView>
            <View style={general.wrapperBackButtonAbsolute}>
                <BackButton goBack={goBack}/>
            </View>
        </View>
        )
    }

}
function mapStateToProps(state){
    return {
        isLoading: state.register.isLoading,
        status: state.register.status,
        error: state.register.error,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        registerAction: bindActionCreators(registerAction, dispatch),
        loginAction : bindActionCreators(loginAction, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
