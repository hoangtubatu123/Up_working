import React, {Component} from 'react';
import {Image, PanResponder, Text, TouchableOpacity, View} from 'react-native';
import {Container, Content, Item, Left, Right, Spinner} from 'native-base';
import HamburgerButton from '../../commons/HamburgerButton';
import Loading from '../../commons/Loading';
import IconLight from '../../commons/IconLight';
import IconDark from '../../commons/IconDark';
import general from '../../styles/generalStyle';
import {connect} from 'react-redux';
import * as reservationAction from '../reservation/reservationAction';
import InfoUpContainer from '../infoUp/InfoUpContainer';
import {bindActionCreators} from 'redux'
import * as size from '../../styles/size';
import SearchBar from 'react-native-searchbar';
import SearchButton from '../../commons/SearchButton';
import Modal from 'react-native-modalbox';
import Icon from '../../commons/Icon'

class ReservationContainer extends Component {
    constructor() {
        super();
        this.state = {
            tab: 0,
            feature: {},
            province: "HÀ NỘI",
            modalProvince: false,
            isLoading: false,
            modalUp: false,
            showSearch: false,
            id: "01",
        }
        this.setModalUp = this.setModalUp.bind(this);
        // this.handleSearch = this.handleSearch.bind(this);
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

    // componentWillReceiveProps(nextProps){
    //     if(nextProps.isLoadingUp !== this.props.isLoadingUp){
    //         this.setState({bases : nextProps.bases})
    //     }
    // }
    // handleSearch(bases){
    //     this.isLoading();
    //     this.setState({bases});
    // }

    isLoading() {
        this.setState({isLoading: true});
        setTimeout(() => this.setState({isLoading: false}), 1500);
    }

    onChangeValue(item) {
        this.setState({province: item.name})
        this.setState({id: item.id});
        this.props.reservationAction.getBases(this.props.token, item.id);
        this.isLoading();
        this.refs.modal2.close();
    }

    setModalProvinces(visible) {
        this.setState({modalProvince: visible});
    }

    setModalUp(visible) {
        this.setState({modalUp: visible})
    }

    toggleSearch() {
        if (this.state.showSearch == false) {
            this.setState({showSearch: true});
            this.searchBar.show();
        } else {
            this.setState({showSearch: false});
            this.searchBar.hide();
        }
    }

    _onPanResponderGrant(event, gestureState) {
        if (event.nativeEvent.locationX === event.nativeEvent.pageX) {
            this.setState({
                modalProvince: false,
            });
        }
    }

    openModalInfoUp(item) {
        this.refs.modal1.open()
        this.setModalUp(true);
        this.setState({
            feature: {
                id : item.id,
                name: item.name,
                url: item.avatar_url,
                title: item.name,
                description: item.description,
                bonusImage: item.images_url
            }
        });
    }

    handleChangeText(input) {
        this.isLoading();
        this.props.reservationAction.getSearchBase(this.state.id, input, this.props.token)
    }


    render() {
        let bCont = <TouchableOpacity
            onPress={() => this.refs.modal2.close()}>
            <Icon
                name="fontawesome|times"
                size={20}
                style={{marginLeft: size.wid * 0.9, padding: 5, marginTop: 20}}
                color={'#eff1f4'}
            />
        </TouchableOpacity>;
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
                <SearchBar
                     onX = {() => this.refreshList()}
                    ref={(ref) => this.searchBar = ref}
                    onBack={() => this.toggleSearch()}
                    handleChangeText={(input) => this.handleChangeText(input)}
                />

                <TouchableOpacity
                    activeOpacity={1}
                    style={[general.paddingLR, general.wrapperRowCenter, {marginTop: -20}]}
                    onPress={() => this.refs.modal2.open()}>
                    <Text style={general.textTitleBoldNormal}>{this.state.province}</Text>
                    <IconDark  action = {() => this.refs.modal2.open() } name={"entypo|chevron-down"}/>
                </TouchableOpacity>

                <Content
                    showsVerticalScrollIndicator={false}

                    style={{flex: 1}}>
                    {
                        this.props.isLoadingUp || this.state.isLoading || (this.props.isLoading && this.props.bases.length === 0)
                            ?
                            <Loading/>
                            :
                            <View>
                                {
                                    this.props.bases.length != 0 ?

                                        this.props.bases.map((item, i) =>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    this.openModalInfoUp(item)
                                                }}
                                                key={i}
                                                activeOpacity={0.8}
                                                style={[general.marginTopBottom, {marginTop: 20}]}>
                                                <View style={general.paddingLR}>
                                                    <View style={[general.shadow, general.imageFeature]}>
                                                        <Image
                                                            resizeMode={'cover'}
                                                            source={{uri: item.avatar_url}}
                                                            style={general.imageFeature}
                                                        />
                                                    </View>
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
                                                    <Text
                                                        style={[general.textTitleCard, general.paddingLine]}>{item.name}</Text>
                                                    <Text style={general.textDescriptionCard}>{item.description}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                        :
                                        <View style={[general.wrapperCenter, general.paddingLR]}>
                                            <Text
                                                style={[general.textTitleCard, general.marginTop, {textAlign: 'center'}]}>
                                                Không tìm thấy kết quả nào.
                                            </Text>
                                        </View>
                                }

                            </View>

                    }
                </Content>
                <SearchButton
                    function={() => this.toggleSearch()}/>
                <Modal
                    isOpen={this.state.modalProvince}
                    ref={"modal2"}
                    style={[{
                        justifyContent: "flex-end",
                        margin: 0,
                        backgroundColor: 'transparent'
                    }, general.wrapperModalBottom]}
                    backdropContent={bCont}
                    position={"bottom"}
                >
                    <View style={general.wrapperModalBottom} {...this.panResponder.panHandlers}>
                        <TouchableOpacity style={[general.wrapperModalTypeBottom, {backgroundColor: '#f7f7f7'}]}>
                            <Text style={general.textTitleCardBlue}>Chọn tỉnh</Text>
                        </TouchableOpacity>
                        <View style={general.line}/>
                        <Content showsVerticalScrollIndicator={false}>
                            {
                                this.state.isLoading ? <Loading/> :
                                    <View style={general.wrapperCenter}>
                                        {
                                            this.props.provinces.map((item, i) => {
                                                return (
                                                    <TouchableOpacity style={{padding: 10}}
                                                                      onPress={() => this.onChangeValue(item)}>
                                                        <Text style={general.textTitleBoldNormal}>{item.name}</Text>
                                                    </TouchableOpacity>
                                                )
                                            })
                                        }
                                    </View>
                            }
                        </Content>
                        <TouchableOpacity style={[general.wrapperModalTypeBottom, {backgroundColor: '#f7f7f7'}]}
                                          onPress={() => this.refs.modal2.close()}>
                            <Text style={[general.textTitleCardBlue, {color: '#c50000'}]}>Thoát</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <Modal swipeToClose={true}
                       isOpen={this.state.modalUp}
                       style={[general.wrapperModal, {position: 'absolute'}]}
                       ref={"modal1"}
                >
                    <View style={[general.wrapperModalStaff, {height: size.hei, width: size.wid}]}>
                        <InfoUpContainer setModalUp={this.setModalUp} navigation={this.props.navigation}
                                         feature={this.state.feature}/>
                    </View>
                </Modal>
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

