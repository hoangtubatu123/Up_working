import React, {Component} from 'react'
import {Image, KeyboardAvoidingView, Platform, StatusBar, Text, TouchableOpacity, View,ActivityIndicator} from 'react-native';
import * as size from '../../Styles/size';
import {CheckBox, Container, Content, Form, Header, Input, Item, Left} from 'native-base';
import * as loginAction from '../../Modules/loginAndRegister/loginActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import general from '../../Styles/generalStyle';
import * as color from '../../Styles/color';
import {NavigationActions} from 'react-navigation';
import Icon from '../../Commons/Icon'

class LoginContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.loginAction.getDataLogin(this.props.status);
    }

    saveData() {
        this.props.loginAction.setDataLogin(this.props.login)
    }

    signIn() {
        this.props.loginAction.loginUser(this.props.login);
        this.saveData();
    }

    updateData(name, value) {
        let login = this.props.login;
        login[name] = value;
        this.props.loginAction.updateDataLogin(login);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.status == 200) {
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({routeName: 'Main'})
                ]
            })
            this.props.navigation.dispatch(resetAction)


        }
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                keyboardVerticalOffset={Platform.OS === 'ios' ? undefined : 200}
                style={general.wrapperContainer}
            >
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={color.background}
                />
                <View style={[general.wrapperLogin]}>
                    <Image
                        resizeMode={'contain'}
                        source={{uri: 'http://startupnation.vn/pic/News/images/636168321372630328.png'}}
                        style={general.imageLogin}
                    />
                    <View>
                        <Item style={general.itemInput}>
                            <Input
                                style={general.inputTheme02}
                                underlineColorAndroid={color.none}
                                placeholder="EMAIL"
                                keyboardType={'email-address'}
                                returnKeyType={'next'}
                                autoCorrect={false}
                                onChangeText={(email) => {
                                    this.updateData('email', email);
                                }}
                                value={this.props.login.email}
                            />
                        </Item>
                    </View>
                    <View style={{marginTop: 20}}>
                        <Item style={general.itemInput}>
                            <Input
                                style={general.inputTheme02}
                                underlineColorAndroid={color.none}
                                placeholder="PASSWORD"
                                keyboardType={'email-address'}
                                returnKeyType={'next'}
                                autoCorrect={false}
                                onChangeText={(email) => {
                                    this.updateData('email', email);
                                }}
                                value={this.props.login.password}
                            />
                        </Item>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                    <View style={general.wrapperLoginButton}>
                        <TouchableOpacity
                            style={general.buttonBuyNowFullSize}
                            onPress={() => {
                                this.signIn()
                            }}
                        >
                            {(this.props.isLoading) ? (
                                <Container style={{
                                    padding: 10,
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <ActivityIndicator
                                        animated={true}
                                        color={color.navTitle}
                                        style={{
                                            flex: 1,
                                            justifyContent: 'center',
                                           alignItems: 'center',
                                            height: 40,
                                        }}
                                        size='small'
                                    />
                                </Container>
                            ) : (
                                <Text style={[general.paddingRight, general.textBigLight]}>LOG IN</Text>
                            )
                            }

                            <Icon name="feat|arrow-right"
                                  size={size.iconBig}
                                  color={color.navTitle}
                            />
                        </TouchableOpacity>
                    </View>
                        <View style={{marginTop:20}}>
                    <Text style ={[general.textLogin]}>DON'T  HAVE AN ACCOUNT? REGISTER</Text>
                        </View>
                    </View>
                    <View style={{justifyContent:'center', alignItems : 'center', bottom:-size.hei/6}}>
                        <Text style ={[general.textLogin, ]}>FORGOT PASSWORD</Text>
                    </View>
                </View>


            </KeyboardAvoidingView>
        )
    }
}

function mapStateToProps(state) {
    return {
        login: state.login.login,
        isLoading: state.login.isLoading,
        status: state.login.status,
        error: state.login.error,
        isGetLocalData: state.login.isGetLocalData,
        isAutoLogin: state.login.isAutoLogin,
        save: state.login.save
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loginAction: bindActionCreators(loginAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
