import React, {Component} from 'react';
import {FlatList, Text, TouchableOpacity, View, Image} from 'react-native';
import {Container, Content, Item, Left, Right, Spinner} from 'native-base';
import HamburgerButton from '../../commons/HamburgerButton';
import Loading from '../../commons/Loading';
import IconLight from '../../commons/IconLight';
import * as historyAction from '../history/historyAction'
import general from '../../styles/generalStyle';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import ListHistoryRegister from './ListHistoryRegister'
import Modal from 'react-native-modalbox';
import * as size from '../../styles/size';
import * as color from '../../styles/color';
import Icon from '../../commons/Icon';

class HistoryContainer extends Component {
    constructor(context,props) {
        super(context,props);
        this.state = {
            tab: 0,
            isLoading: false,
            item: {},
            modalHistory: false,
        }
        this.openModalHistory = this.openModalHistory.bind(this);
    }

    isLoading() {
        this.setState({isLoading: true});
        setTimeout(() => this.setState({isLoading: false}), 200);
    }

    componentWillMount() {
        this.props.historyAction.getHistoryRegister(this.props.token)
        this.isLoading();
    }

    openModalHistory(item) {
        this.setState({item: item})
        this.refs.modal1.open();
    }


    isEmpty(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    render() {
        const {navigate} = this.props.navigation;
        const {item} = this.state;
        return (
            <Container style={general.wrapperContainer}>
                <View style={[general.wrapperHeader, general.paddingBorder]}>
                    <Text style={[general.textTitleHeader]}>
                        LỊCH SỬ
                    </Text>
                    <Right>
                        <HamburgerButton navigate={navigate}/>
                    </Right>
                </View>
                <Content
                    showsVerticalScrollIndicator={false}
                    style={{flex: 1}}>
                    {
                        this.state.isLoading || this.props.isLoadingHistory
                            ?
                            <Loading/>
                            :

                            this.props.history_registers.length !== 0 ?
                                <View>
                                    <View style={general.paddingLR}>
                                        <View style={[general.wrapperFeatureHeightLow, general.shadow]}>
                                            <View style={[general.wrapperRowSpaceBetween, general.padding]}>
                                                <Text style={general.textTitleCardLight}>Số lượt còn lại</Text>
                                                <IconLight name={'entypo|dots-three-horizontal'}/>
                                            </View>
                                            <View style={general.paddingLeft}>
                                                <Text
                                                    style={[general.textTitleGiantThin, {backgroundColor: 'transparent'}]}>12</Text>
                                            </View>
                                        </View>
                                        <Text/>
                                        <Text/>
                                        <Text/>
                                        <Text style={[general.marginTop, general.textTitleBig]}>Lịch sử</Text>
                                    </View>

                                    <FlatList
                                        showsVerticalScrollIndicator={false}
                                        data={this.props.history_registers}
                                        onEndReachedThreshold={10}
                                        renderItem={({item}) => {
                                            return (
                                                <ListHistoryRegister item={item}
                                                                     modalHistory={this.state.modalHistory}
                                                                     openModalHistory={this.openModalHistory}/>)
                                        }
                                        }
                                    />

                                </View>
                                :
                                <View style={[general.wrapperCenter, general.paddingLR]}>
                                    <Text style={[general.textTitleCard, general.marginTop, {textAlign: 'center'}]}>
                                        Hiện bạn chưa đăng kí chỗ ngồi nào
                                    </Text>
                                </View>
                    }
                </Content>
                <Modal swipeToClose={true}
                       style={[general.wrapperModal]}
                       ref={"modal1"}
                >
                    <View style={[general.wrapperModalStaff, {height: size.hei, width: size.wid}]}>
                        <Container style={general.wrapperContainer}>
                            <View style={[general.wrapperHeader, general.paddingBorder]}>
                                <Text style={[general.textTitleHeader]}>
                                    LỊCH SỬ ĐẶT CHỖ
                                </Text>
                                <Right>
                                    <TouchableOpacity
                                        style={[general.padding, general.wrapperBackButton, {marginRight: -20}]}
                                        onPress={() => {
                                            this.refs.modal1.close()
                                        }}
                                    >
                                        <Icon name="ion|ios-close-outline"
                                              size={40}
                                              color={color.iconColor}
                                        />
                                    </TouchableOpacity>
                                </Right>
                            </View>
                            <Content
                                style={general.wrapperFullWidth}
                                showsVerticalScrollIndicator={false}
                            >
                                <TouchableOpacity
                                    activeOpacity={1}
                                >
                                    <View
                                        style={[general.marginTopBottom, general.shadow]}>
                                        {
                                            this.isEmpty(this.state.item) == false ?
                                             <Image
                                            resizeMode={'cover'}
                                            source={{uri: item.base.base.avatar_url }}
                                            style={general.imageFullWidth}
                                        />
                                        :
                                        <View/>
                                    }
                                       
                                    </View>
                                    {
                                        this.isEmpty(this.state.item) == false ?
                                            <View style={{marginTop: 20, marginLeft: 20}}>
                                            <Text style={[general.textTitleCard]}>Cơ sở </Text>
                                                <Text
                                                    style={general.textSmallDarkGray}>{item.base.base.name} - {item.base.district.name} - {item.base.province.name}</Text>
                                         <Text style = {{height : 5}}/>
                                         <Text style={general.textTitleCard}>Địa chỉ </Text>
                                                <Text
                                                    style={general.textSmallDarkGray}>{item.base.base.address}</Text>
                                          <Text style = {{height : 5}}/>
                                                <Text style={general.textTitleCard}>Ngày đặt chỗ</Text>
                                                <Text
                                                    style={general.textSmallDarkGray}>{this.state.item.created_at.split(" ")[1]} Vào lúc {this.state.item.created_at.split(" ")[0]}</Text>
                                          <Text style = {{height : 5}}/>
                                          <Text style={general.textTitleCard}>Gói đặt chỗ</Text>
                                                <Text
                                                    style={general.textSmallDarkGray}>{this.state.item.subscription.user_pack_name}</Text>
                                                 <Text style = {{height : 5}}/>
                                                <Text style={general.textTitleCard}>Loại chỗ ngồi</Text>
                                                <Text
                                                    style={general.textSmallDarkGray}>{this.state.item.subscription.subscription_kind_name}</Text>
                                                 <Text style = {{height : 5}}/>
                                                <Text style={general.textTitleCard}>Mô tả</Text>
                                                <Text numberOfLines={6}
                                                      style={general.textSmallDarkGray}>{this.state.item.subscription.description.trim()}</Text>
                                                 <Text style = {{height : 5}}/>
                                                <Text style={general.textTitleCard}>Chi phí</Text>
                                                <Text
                                                    style={[general.textDescriptionCard, {color: '#8bd100'}]}>{this.state.item.subscription.price.toString().replace(/\./g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".")

                                                } VND / 1
                                                    NGÀY</Text>
                                                    <Text style = {{height : 5}}/>
                                            </View>
                                            :
                                            <View/>
                                    }
                                </TouchableOpacity>

                            </Content>


                        </Container>
                    </View>
                </Modal>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoadingHistory: state.history.isLoadingHistory,
        history_registers: state.history.history_registers,
        errorHistory: state.history.errorHistory,
        token: state.login.token
    }
}

function mapDispatchToProps(dispatch) {
    return {
        historyAction: bindActionCreators(historyAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer);