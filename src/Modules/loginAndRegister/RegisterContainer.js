import React, {Component} from 'react'
import {Image, KeyboardAvoidingView, Platform, StatusBar, Text, TouchableOpacity, View,ActivityIndicator, Alert} from 'react-native';
import * as size from '../../Styles/size';
import {CheckBox, Container, Content, Form, Header, Input, Item, Left} from 'native-base';
import * as registerAction from '../../Modules/loginAndRegister/registerAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import general from '../../Styles/generalStyle';
import * as color from '../../Styles/color';
import {NavigationActions} from 'react-navigation';
import Icon from '../../Commons/Icon';
import BackButton from '../../Commons/BackButton';

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
    register(value) {
        if (this.state.email === '' || this.state.name === '' || this.state.username === '' || this.state.password === '') {
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
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                keyboardVerticalOffset={Platform.OS === 'ios' ? undefined : 200}
                style={general.wrapperContainer}
            >
                <StatusBar
                    backgroundColor={color.background}
                />
          <View style={{marginTop:20}}>
                <BackButton />
          </View>
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
                                    this.setState({email})
                                }}
                                value={this.state.email}
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
                                onChangeText={(password) => {
                                    this.setState({password})
                                }}
                                value={this.state.password}
                            />
                        </Item>
                    </View>
                    <View style={{marginTop: 20}}>
                        <Item style={general.itemInput}>
                            <Input
                                style={general.inputTheme02}
                                underlineColorAndroid={color.none}
                                placeholder="NAME"
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
                                style={general.inputTheme02}
                                underlineColorAndroid={color.none}
                                placeholder="USERNAME"
                                keyboardType={'email-address'}
                                returnKeyType={'next'}
                                autoCorrect={false}
                                onChangeText={(username) => {
                                   this.setState({username})
                                }}
                                value={this.state.username}
                            />
                        </Item>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <View style={general.wrapperLoginButton}>
                            <TouchableOpacity
                                style={general.buttonBuyNowFullSize}
                                onPress={() => {
                                    this.register(this.state)
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
                                    <Text style={[general.paddingRight, general.textBigLight]}>REGISTER</Text>
                                )
                                }

                                <Icon name="feat|arrow-right"
                                      size={size.iconBig}
                                      color={color.navTitle}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{justifyContent:'center', alignItems : 'center', bottom:-size.hei/6+20}}>
                        <Text style ={[general.textLogin, ]}>FORGOT PASSWORD</Text>
                    </View>
                </View>


            </KeyboardAvoidingView>
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
        registerAction: bindActionCreators(registerAction, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
