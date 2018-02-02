import React, {Component} from 'react';
import {ActivityIndicator, Image, Modal, PanResponder, Text, TouchableOpacity, View} from 'react-native';
import {Body, Container, Content, Input, Item, Left, Right, Spinner} from 'native-base';
import general from '../../styles/generalStyle';
import * as size from '../../styles/size';
import * as color from '../../styles/color';
import * as upRoomAction from '../upRoom/upRoomAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import Icon from '../../commons/Icon'
import Loading from "../../commons/Loading";


class ListUserPack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            loading: false,
            modal: false,
            modalRegister: false,
            modalSuccess: false,
            phone: "",
            email: this.props.email
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.status === 1) {
            this.setState({modalRegister: false, modal: false, modalSuccess: true})
        }
    }

    componentWillMount() {
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (event, gestureState) => true,
            onPanResponderGrant: this._onPanResponderGrant.bind(this),
        })
    }

    _onPanResponderGrant(event, gestureState) {
        if (event.nativeEvent.locationX === event.nativeEvent.pageX) {
            this.setState({
                modal: false,
                modalRegister: false,
            });
            this.props.upRoomAction.closeModalSuccess();
        }
    }

    setModal(visible) {
        this.setState({modal: visible});
    }

    isLoading() {
        this.setState({loading: true});
        setTimeout(() => {
            this.setState({loading: false})
        }, 1000);
    }

    changeSubsCription(i) {
        this.isLoading();
        this.setState({id: i});
    }

    register() {
        this.setState({modal: false, modalRegister: true});
    }

    registerUserPack(email, phone, subscription_id) {
        if (email == "" || phone == "") {
            alert("Bạn cần nhập đầy đủ thông tin trên");
        } else {
            this.props.upRoomAction.registerUserPack(email, phone, subscription_id)
        }
    }


    render() {
        return (
            <View>
                <View
                    activeOpacity={0.8}
                    style={[general.marginTopBottom, general.paddingLR, {marginTop: 20}]}>
                    <View style={{marginBottom: 10}}>
                        <Text numberOfLines={1}
                              style={general.textTitleCard}>{this.props.item.name.toUpperCase()}</Text>
                    </View>
                    <View style={[general.imageFeature, general.shadow]}>
                        <Image
                            resizeMode={'cover'}
                            source={{uri: this.props.item.avatar_url}}
                            style={general.imageFeature}
                        />
                    </View>
                    <View style={general.marginTopFar}>
                        <Text numberOfLines={1}
                              style={general.textTitleCard}>Thông tin</Text>
                        <Text numberOfLines={2} style={[general.textDescriptionCard, general.paddingLine]}>Với hơn 1000 chỗ
                            ngồi trong không
                            gian 1000m2, chắc chắn sẽ khiến bạn hài lòng và thăng hoa khi làm việc</Text>
                    </View>
                    <View style={{
                        width: size.wid * 0.9,
                        height: 50,
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: color.none
                    }}>
                        <TouchableOpacity
                            style={[general.buttonBuyNowFullSize]}
                            onPress={() =>
                                this.setModal(true)
                            }
                        >
                            <Text style={[general.paddingRight, general.textBigLight]}>Đặt chỗ
                                ngay</Text>
                            <Icon name="feat|arrow-right"
                                  size={size.iconBig}
                                  color={color.navTitle}
                            />
                        </TouchableOpacity>
                    </View>


                </View>
                <Modal
                    presentationStyle="overFullScreen"
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modal}
                >
                    <View
                        style={general.wrapperModal}
                        {...this.panResponder.panHandlers}
                    >
                        <View style={[general.wrapperModalStaff]}>
                            <View style={[general.wrapperCenter, general.padding]}>
                                <Text/>
                                <Text style={general.textTitleBig}>Xác nhận</Text>
                            </View>
                            <View style={general.contentModal}>
                                <View style={general.paddingLR}>
                                    <Text/>
                                    <Text
                                        style={[general.textDescriptionCard, general.textAlign]}>Chào {this.props.name ? this.props.name : "Admin"}</Text>
                                    <Text/>
                                    <Text style={[general.textSmallDarkGray, general.textAlign]}>Bạn đang tiến hành đặt
                                        chỗ tại Up.</Text>
                                    <Text style={[general.textSmallDarkGray, general.textAlign]}>Vui lòng chọn gói dịch
                                        vụ mà bạn mong muốn nhé.</Text>
                                    <Text/>
                                </View>
                                <View style={{height: 50}}>
                                    <Content horizontal={true}
                                             showsHorizontalScrollIndicator={false}
                                    >
                                        {
                                            this.props.item.subscriptions.map((item, i) => {
                                                    let color = this.state.id == i ? "#8bd100" : "#a7abb2"
                                                    return (
                                                        <TouchableOpacity
                                                            onPress={() => this.changeSubsCription(i)}
                                                            style={[general.buttonSmall, general.shadow, general.wrapperCenter, general.paddingLR, general.marginLeft, {backgroundColor: color}]}>
                                                            <Text
                                                                style={general.textTitleCardLight}>{item.subscription_kind_name}</Text>
                                                        </TouchableOpacity>
                                                    )
                                                }
                                            )
                                        }
                                    </Content>
                                </View>
                                <View style={general.paddingLR}>
                                    {
                                        this.state.loading || this.props.isLoading || this.props.item.subscriptions.length == 0 ?
                                            <Loading/>
                                            :
                                            <View>
                                                <Text style={general.textTitleCard}>Loại chỗ ngồi</Text>
                                                <Text
                                                    style={general.textSmallDarkGray}>{this.props.item.subscriptions[this.state.id].subscription_kind_name}</Text>
                                                <Text/>
                                                <Text style={general.textTitleCard}>Mô tả</Text>
                                                <Text numberOfLines={6}
                                                      style={general.textSmallDarkGray}>{this.props.item.subscriptions[this.state.id].description.trim()}</Text>
                                                <Text/>
                                                <Text style={general.textTitleCard}>Chi phí</Text>
                                                <Text
                                                    style={[general.textDescriptionCard, {color: '#8bd100'}]}>{this.props.item.subscriptions[this.state.id].price.toString().replace(/\./g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                                                } VND / 1
                                                    NGÀY</Text>
                                                <Text/>
                                            </View>
                                    }
                                </View>
                            </View>
                            <View style={[general.bottomModal, general.wrapperRowCenter, {bottom: 20}]}>
                                <TouchableOpacity
                                    onPress={() => this.register()}
                                    style={[general.buttonOrder, general.shadow, general.wrapperCenter, general.paddingLRFar]}>
                                    <Text style={general.textTitleCardLight}>Xác nhận</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <Modal
                    presentationStyle="overFullScreen"
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalRegister}
                >
                    <View
                        style={general.wrapperModal}
                        {...this.panResponder.panHandlers}
                    >
                        <View style={general.modalCart}>
                            <View style={[general.headerModal, general.haveBorderBottom]}>
                                <Text style={general.textTitleCardDark}>
                                    XÁC NHẬN ĐĂNG KÍ
                                </Text>
                            </View>
                            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                                <Item style={general.itemInput}>
                                    <Input
                                        style={[general.inputTheme02, general.textDescriptionCard, {marginTop: 20}]}
                                        underlineColorAndroid={color.none}
                                        placeholder="Số điện thoại của bạn"
                                        returnKeyType={'next'}
                                        autoCorrect={false}
                                        onChangeText={(phone) => {
                                            this.setState({phone})
                                        }}
                                    />
                                </Item>
                                <Item style={[general.itemInput, {marginTop: 30}]}>
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
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <TouchableOpacity
                                    style={[general.buttonOrderInModal, {bottom: 20, width: size.wid - 80,}, general.wrapperCenter]}
                                    onPress={() => {
                                        this.registerUserPack(this.state.email, this.state.phone, this.props.item.subscriptions[this.state.id].id)
                                    }}
                                >
                                    {(this.props.isLoadingRegister) ? (
                                        <ActivityIndicator
                                            animated={true}
                                            color={color.navTitle}
                                            style={{
                                                height: 20,
                                            }}
                                            size='small'
                                        />
                                    ) : (
                                        <Text style={[general.paddingRight, general.textBigLight]}>Đăng kí</Text>
                                    )
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <Modal
                    presentationStyle="overFullScreen"
                    animationType="fade"
                    transparent={true}
                    visible={this.props.status === 1 ? true : false}
                >
                    <View
                        style={general.wrapperModal}
                        {...this.panResponder.panHandlers}
                    >
                        <View style={general.modalCartStatus}>
                            <View style={[general.topModal, general.haveBorderBottom]}>
                                <Text style={general.titleBigDarkBold}>
                                    ĐẶT CHỖ THÀNH CÔNG
                                </Text>
                            </View>
                            <View style={general.contentModal}>
                                <View style={[general.wrapperForm, {}]}>
                                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                        <View style={{
                                            borderRadius: 50,
                                            height: 80,
                                            width: 80,
                                            backgroundColor: "#8bd100",
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <Icon
                                                name="material|done"
                                                color={"#fff"}
                                                size={50}
                                            />
                                        </View>
                                    </View>
                                    <View style={general.wrapperTextInputInfoUser}>
                                        <Text style={general.textPrice2}>
                                            Chúc mừng bạn đã đặt chỗ thành công.
                                            Vui lòng check email để kiểm tra lại đơn hàng.
                                            Chúng tôi sẽ liên hệ với bạn trong thời gian sớm
                                            nhất
                                        </Text>
                                    </View>
                                </View>

                            </View>
                            <View style={[general.bottomModal, general.haveBorderTop]}>
                                <Body>
                                <TouchableOpacity style={general.buttonOrderInModal}
                                                  onPress={() => this.props.upRoomAction.closeModalSuccess()}
                                >
                                    <Text style={general.textBigLight}>Xác nhận</Text>
                                </TouchableOpacity>
                                </Body>
                            </View>
                        </View>
                    </View>
                </Modal>


            </View>

        )
    }

}

function mapStateToProps(state) {
    return {
        isLoadingRegister: state.upRoom.isLoadingRegister,
        email: state.login.user.email,
        name: state.login.user.name,
        status: state.upRoom.status
    }
}

function mapDispatchToProps(dispatch) {
    return {
        upRoomAction: bindActionCreators(upRoomAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListUserPack);

