import React, {Component} from 'react';
import {Text, TouchableOpacity, View, FlatList, Image} from 'react-native';
import {Container, Content, Item, Left, Right, Spinner, CardItem, Body} from 'native-base';
import HamburgerButton from '../../commons/HamburgerButton';
import general from '../../styles/generalStyle';
import {connect} from 'react-redux';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
import Icon from '../../commons/Icon'
import Loading from "../../commons/Loading";

class NotificationContainer extends Component {
    constructor() {
        super();
        this.state = {
            isLoading : false,
            data : [
                {
                    avatar_url : "https://i.pinimg.com/564x/88/4c/52/884c52a8d5778dd514a29a57ce307639.jpg",
                    content : "Nguyễn Việt Hùng đã thêm một ảnh trong ColorMe Family ",
                    created_at: "4 minutes ago",
                    seen : true
                },
                {
                    avatar_url : "https://i.pinimg.com/564x/29/0d/17/290d176e15e9e6995667687faa14f8d3.jpg",
                    content : "Nguyễn Việt Hùng đã thêm một ảnh trong ColorMe Family ",
                    created_at: "4 minutes ago",
                    seen : false
                },
                {
                    avatar_url : "https://i.pinimg.com/564x/29/0d/17/290d176e15e9e6995667687faa14f8d3.jpg",
                    content : "Nguyễn Việt Hùng đã thêm một ảnh trong ColorMe Family ",
                    created_at: "4 minutes ago",
                    seen : false
                },

            ]
        }
    }
    isLoading(){
        this.setState({isLoading : true});
        setTimeout(() => {this.setState({isLoading : false})}, 1000)
    }
    componentWillMount(){
        this.isLoading();
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container style={general.wrapperContainer}>
                <View style={[general.wrapperHeader, general.paddingBorder]}>
                    <Left>
                        <TouchableOpacity
                            style={[general.wrapperBackButton]}
                        >
                            <Icon name="fontawesome|bell-o"
                                  size={size.iconBig}
                                  color={color.iconColor}
                            />
                        </TouchableOpacity>
                    </Left>
                    <Text style={[general.textTitleHeader]}>
                        NOTIFICATIONS
                    </Text>
                    <Right>
                        <HamburgerButton navigate={navigate}/>
                    </Right>
                </View>
                <Content showsVerticalScrollIndicator={false} style={{flex: 1}}>
                    {
                        this.state.isLoading ?
                            <Loading/>
                            :
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={this.state.data}
                                onEndThreshold={5}
                                renderItem={({item}) => {
                                    return (
                                        <CardItem
                                            avatar
                                            style={[item.seen ? general.backgroundNone : general.backgroundGray, general.noMarginLeft, general.padding, general.haveBorderBottom]}>
                                            <TouchableOpacity
                                                activeOpacity={0.8}
                                                style={{flex: 1}}
                                            >
                                                <Left>
                                                    <TouchableOpacity
                                                        activeOpacity={0.8}
                                                    >
                                                        <Image
                                                            style={general.avatarUserNormalSquare}
                                                            source={{uri: item.avatar_url}}/>
                                                    </TouchableOpacity>
                                                    <Body style={general.noBorder}>
                                                    <Text
                                                        style={general.titleSmallDarkGray}>{item.content}</Text>
                                                    <View style={{flexDirection: "row", marginTop: 10}}>
                                                        <Icon
                                                            name="fontawesome|check-circle"
                                                            size={15}
                                                            color="green"
                                                        />
                                                    <Text
                                                        style={[general.describeItalicDark, {marginLeft: 10}]}>
                                                        {item.created_at}
                                                    </Text>
                                                    </View>
                                                    </Body>
                                                </Left>
                                            </TouchableOpacity>
                                        </CardItem>
                                    )
                                }
                                }
                            />
                    }

                </Content>


            </Container>
        )
    }

}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer)