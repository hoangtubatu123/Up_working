import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View, Modal, PanResponder, FlatList} from 'react-native';
import {Container, Content, Item, Left, Right, Spinner} from 'native-base';
import HamburgerButton from '../../commons/HamburgerButton';
import Loading from '../../commons/Loading';
import general from '../../styles/generalStyle';
import {connect} from 'react-redux';
import * as upRoomAction from './upRoomAction';
import {bindActionCreators} from 'redux'
import ListUserPack from './ListUserPack';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
import Icon from '../../commons/Icon'

class UpRoomContainer extends Component {
    constructor() {
        super();
        this.state = {
            modal: false,
            tab: 0,
            isLoading: false,
        }
    }

    componentWillMount() {
        this.isLoading();
        this.props.upRoomAction.getUserPack();
    }

    isLoading() {
        this.setState({isLoading: true});
        setTimeout(() => this.setState({isLoading: false}), 1000);
    }

    render() {
        const {navigate} = this.props.navigation;
        const {goBack} = this.props.navigation;
        return (
            <Container style={general.wrapperContainer}>
                <View style={[general.wrapperHeader, general.paddingBorder]}>
                    <Text style={[general.textTitleHeader]}>
                        {this.props.navigation.state.params.baseName}
                    </Text>
                    <Right>
                        <HamburgerButton navigate={navigate}/>
                    </Right>
                </View>
                <View style={general.wrapperFullWidth}>
                    {this.props.isLoading || this.state.isLoading ?
                        <Loading/>
                        :
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={this.props.user_packs}
                                onEndReachedThreshold={5}
                                renderItem={({item}) => {
                                    return (
                                        <ListUserPack item = {item} isLoading = {this.props.isLoading}/>
                                    )
                                }
                                }
                            />
                    }

                </View>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.home.data,
        isLoadingUserPack : state.upRoom.isLoadingUserPack,
        user_packs : state.upRoom.user_packs,
    }
}
function mapDispatchToProps(dispatch){
    return {
        upRoomAction : bindActionCreators(upRoomAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpRoomContainer);