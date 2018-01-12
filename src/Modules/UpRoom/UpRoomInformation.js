import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View, Modal, PanResponder} from 'react-native';
import {Container, Content, Item, Left, Right, Spinner} from 'native-base';
import HamburgerButton from '../../Commons/HamburgerButton';
import Loading from '../../Commons/Loading';
import general from '../../Styles/generalStyle';
import {connect} from 'react-redux'
import {Col, Grid} from "react-native-easy-grid";

class UpRoomInformation extends Component {
    constructor() {
        super();
        this.state = {
            modal: false,
            tab: 0,
            isLoading: false,
            data:
                [

                    {
                        "url": "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=334&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                        "title": "Electric VR suit shocks gamers",
                        "description": "Technology",
                        "created_at": "24h ago"
                    },
                    {
                        "url": "https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                        "title": "Smart gadgets for safety conscious bikers",
                        "description": "Technology",
                        "created_at": "24h ago"
                    },
                    {
                        "url": "https://images.unsplash.com/photo-1501159873713-dc65286617cc?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                        "title": "A new way to study the night sky",
                        "description": "Technology",
                        "created_at": "24h ago"
                    },
                    {
                        "url": "https://images.unsplash.com/photo-1485436442739-c12c6e3673af?auto=format&fit=crop&w=553&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                        "title": "Zuckerberg's resolution: 'Fix' Facebook",
                        "description": "Technology",
                        "created_at": "24h ago"
                    },
                    {
                        "url": "https://images.unsplash.com/photo-1485893226355-9a1c32a0c81e?auto=format&fit=crop&w=500&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                        "title": "FCC chairman cancels attendance at CES",
                        "description": "Technology",
                        "created_at": "24h ago"
                    },
                    {
                        "url": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                        "title": "Nintendo Switch boasts speedy US sales",
                        "description": "Technology",
                        "created_at": "24h ago"
                    },
                ]
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
            });
        }
    }

    setModal(visible, item) {
        this.setState({
            modal: visible,
        });
    }

    isLoading() {
        this.setState({isLoading: true});
        setTimeout(() => this.setState({isLoading: false}), 200);
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container style={general.wrapperContainer}>
                <View style={[general.wrapperHeader, general.paddingBorder]}>
                    <Text style={[general.textTitleHeader]}>
                        UP LƯƠNG YÊN
                    </Text>
                    <Right>
                        <HamburgerButton navigate={navigate}/>
                    </Right>
                </View>
                <Content
                    showsVerticalScrollIndicator={false}
                    style={{flex: 1}}>
                    {
                        this.state.isLoading
                            ?
                            <Loading/>
                            :
                            <Grid>
                                <Col>
                                    {
                                        this.state.data.map((item, i) =>
                                            <TouchableOpacity
                                                key={i}
                                                activeOpacity={0.8}
                                                style={[general.marginTopBottom, general.shadow, {marginTop: 20}]}>
                                                <View style={[general.paddingLR, {paddingRight: 10}]}>
                                                    <Image
                                                        resizeMode={'cover'}
                                                        source={{uri: item.url}}
                                                        style={general.imageFeatureInCol}
                                                    />
                                                </View>

                                                <View
                                                    style={[general.marginTop, general.wrapperCenterLeftToRightColumn, general.paddingLR]}>
                                                    <Text
                                                        style={general.textTitleCard}>{item.title.toUpperCase()}</Text>
                                                    <Text/>
                                                    <Text style={general.textDescriptionCard}>{item.description}</Text>
                                                </View>
                                                <Text/>
                                                <TouchableOpacity
                                                    onPress={() => this.setModal()}
                                                    style={[general.buttonOrder, general.shadow ,general.marginLR, general.wrapperCenter, {marginRight: 10}]}>
                                                    <Text style={general.textTitleCardLight}>Đặt chỗ ngay</Text>
                                                </TouchableOpacity>
                                            </TouchableOpacity>
                                        )
                                    }
                                </Col>
                                <Col>
                                    {
                                        this.state.data.map((item, i) =>
                                            <TouchableOpacity
                                                key={i}
                                                activeOpacity={0.8}
                                                style={[general.marginTopBottom, general.shadow, {marginTop: 20}]}>
                                                <View style={[general.paddingLR, {paddingLeft: 10}]}>
                                                    <Image
                                                        resizeMode={'cover'}
                                                        source={{uri: item.url}}
                                                        style={[general.imageFeatureInCol]}
                                                    />
                                                </View>

                                                <View
                                                    style={[general.marginTop, general.wrapperCenterLeftToRightColumn, general.paddingLR]}>
                                                    <Text
                                                        style={general.textTitleCard}>{item.title.toUpperCase()}</Text>
                                                    <Text/>
                                                    <Text style={general.textDescriptionCard}>{item.description}</Text>
                                                </View>
                                                <Text/>
                                                <TouchableOpacity
                                                    onPress={() => this.setModal()}
                                                    style={[general.buttonOrder, general.shadow ,general.marginLR, general.wrapperCenter, {marginLeft: 10}]}>
                                                    <Text style={general.textTitleCardLight}>Đặt chỗ ngay</Text>
                                                </TouchableOpacity>

                                            </TouchableOpacity>
                                        )
                                    }
                                </Col>
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
                                        <View style={general.wrapperModalStaff}>
                                            <View style={[general.wrapperRowCenter, general.padding]}>

                                            </View>
                                            <View style={[general.contentModal, general.wrapperCenter]}>
                                            </View>
                                            <View
                                                style={[general.bottomModal, general.wrapperRowCenter]}
                                            >

                                            </View>
                                        </View>
                                    </View>
                                </Modal>
                            </Grid>

                    }
                </Content>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.home.data,
    }
}

export default connect(mapStateToProps)(UpRoomInformation);