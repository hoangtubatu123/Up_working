import React, {Component} from 'react';
import {Image, Modal, PanResponder, Text, TouchableOpacity, View} from 'react-native';
import {Container, Content, Item, Left, Right, Spinner} from 'native-base';
import HamburgerButton from '../../commons/HamburgerButton';
import Loading from '../../commons/Loading';
import IconLight from '../../commons/IconLight';
import IconDark from '../../commons/IconDark';
import general from '../../styles/generalStyle';
import {connect} from 'react-redux';
import * as reservationAction from '../reservation/reservationAction';
import {bindActionCreators} from 'redux'


class ReservationContainer extends Component {
    constructor() {
        super();
        this.state = {
            tab: 0,
            province: "HÀ NỘI",
            modalProvince: false,
            isLoading: false,

        }
    }

    componentWillMount() {
        this.props.reservationAction.getBases(this.props.token, "01");
        this.props.reservationAction.getProvinces(this.props.token);
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (event, gestureState) => true,
            onPanResponderGrant: this._onPanResponderGrant.bind(this),
        })
        this.isLoading();
    }

    isLoading() {
        this.setState({isLoading: true});
        setTimeout(() => this.setState({isLoading: false}), 1000);
    }
    onChangeValue(item){
        this.setState({province : item.name})
        this.props.reservationAction.getBases(this.props.token, item.id);
        this.isLoading();
        this.setModalProvinces(false);
    }

    setModalProvinces(visible) {
        this.setState({modalProvince: visible});
    }

    _onPanResponderGrant(event, gestureState) {
        if (event.nativeEvent.locationX === event.nativeEvent.pageX) {
            this.setState({
                modalProvince: false,
            });
        }
    }


    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container style={general.wrapperContainer}>
                <View style={[general.wrapperHeader, general.paddingBorder]}>
                    <Text style={[general.textTitleHeader]}>
                        ĐẶT CHỖ
                    </Text>
                    <Right>
                        <HamburgerButton navigate={navigate}/>
                    </Right>
                </View>

                <TouchableOpacity
                    style={[general.paddingLR, general.wrapperRowCenter, {marginTop: -30, marginBottom: 10}]}
                    onPress={() => this.setModalProvinces(true)}>
                    <Text style={general.textTitleBoldNormal}>{this.state.province}</Text>
                    <IconDark name={"entypo|chevron-down"} />
                </TouchableOpacity>

                <Content
                    showsVerticalScrollIndicator={false}
                    style={{flex: 1}}>
                    {
                        this.props.isLoadingUp || this.state.isLoading
                            ?
                            <Loading/>
                            :
                            <View>
                                {
                                    this.props.bases.map((item, i) =>
                                        <TouchableOpacity
                                            onPress={() => navigate('infoUp', {
                                                feature: {
                                                    url: item.avatar_url,
                                                    title: item.name,
                                                    description: item.address,
                                                    bonusImage: item.images_url.split(",")
                                                }
                                            })}
                                            key={i}
                                            activeOpacity={0.8}
                                            style={[general.marginTopBottom, general.shadow, {marginTop: 20}]}>
                                            <View style={general.paddingLR}>
                                                <Image
                                                    resizeMode={'cover'}
                                                    source={{uri: item.avatar_url}}
                                                    style={general.imageFeature}
                                                />
                                                <View
                                                    style={[general.wrapperTabInImage, general.shadow, general.wrapperCenterRow]}>
                                                    <IconLight name={"entypo|user"}/>
                                                    <Text style={general.textDescriptionCardLight}>12</Text>
                                                    <Text>&nbsp;</Text>
                                                    <IconLight name={"entypo|aircraft"}/>
                                                    <Text style={general.textDescriptionCardLight}>12</Text>
                                                    <Text>&nbsp;</Text>
                                                    <IconLight name={"entypo|archive"}/>
                                                    <Text style={general.textDescriptionCardLight}>12</Text>

                                                </View>
                                            </View>

                                            <View
                                                style={[general.marginTop, general.paddingLR, general.wrapperTextDownImage]}>
                                                <Text style={general.textTitleCard}>{item.name}</Text>
                                                <Text/>
                                                <Text style={general.textDescriptionCard}>{item.address}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }
                                <Modal
                                    presentationStyle="overFullScreen"
                                    animationType="fade"
                                    transparent={true}
                                    visible={this.state.modalProvince}
                                >
                                    <View
                                        style={general.wrapperModal}
                                        {...this.panResponder.panHandlers}
                                    >
                                        <View style={[general.wrapperModalStaff, {height : 200}]}>
                                            <Content style={{flex: 1}}>

                                                {
                                                    this.state.isLoading ? <Loading/>
                                                        :
                                                    this.props.provinces.map((item, i) => {
                                                    return (
                                                        <TouchableOpacity style = {{ padding : 10}}onPress = {() => this.onChangeValue(item)}>
                                                             <Text>{item.name}</Text>
                                                        </TouchableOpacity>
                                                    )
                                                })
                                                }
                                            </Content>
                                        </View>
                                    </View>
                                </Modal>
                            </View>

                    }
                </Content>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoadingProvinces: state.reservation.isLoadingProvinces,
        errorProvinces: state.reservation.errorProvinces,
        errorUp: state.reservation.errorUp,
        isLoadingUp: state.reservation.isLoadingUp,
        provinces: state.reservation.provinces,
        bases: state.reservation.bases,
        token: state.login.token,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        reservationAction: bindActionCreators(reservationAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReservationContainer);