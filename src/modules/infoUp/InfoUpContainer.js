import React, {Component} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {Container, Content, Item, Left, Right, Spinner} from 'native-base';
import HamburgerButton from '../../commons/HamburgerButton';
import IconLight from '../../commons/IconLight';
import general from '../../styles/generalStyle';
import * as size from '../../styles/size';
import * as color from '../../styles/color';
import Icon from '../../commons/Icon';

import {connect} from 'react-redux';
import Loading from "../../commons/Loading";

class InfoUpContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            feature: this.props.navigation.state.params.feature,
        }
    }

    componentWillMount() {
        this.isLoading();
    }

    isLoading() {
        this.setState({isLoading: true})
        setTimeout(() => this.setState({isLoading: false}), 1000);
    }


    render() {
        const {navigate} = this.props.navigation;
        const {isLoaing} = this.state;
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


                <Content style={general.wrapperFullWidth}>
                    {this.state.isLoading ?
                        <Loading/>
                        :
                        <View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={[general.marginTopBottom, general.shadow]}>
                                <Image
                                    resizeMode={'cover'}
                                    source={{uri: this.state.feature.url}}
                                    style={general.imageFullWidth}
                                />
                                <View
                                    style={[general.wrapperTabInImage, general.shadow, general.wrapperCenterRow, {
                                        right: 30,
                                        bottom: 65,
                                    }]}>
                                    <IconLight name={"entypo|user"}/>
                                    <Text style={general.textDescriptionCardLight}>12</Text>
                                    <Text>&nbsp;</Text>
                                    <IconLight name={"entypo|aircraft"}/>
                                    <Text style={general.textDescriptionCardLight}>12</Text>
                                    <Text>&nbsp;</Text>
                                    <IconLight name={"entypo|archive"}/>
                                    <Text style={general.textDescriptionCardLight}>12</Text>
                                </View>
                                <View style={[general.marginTop, general.wrapperTextDownImage]}>
                                    <Text/>
                                    <Text
                                        style={[general.textTitleCard, general.paddingLR]}>{this.state.feature.title.toUpperCase()}</Text>
                                    <Text/>
                                    <Text
                                        style={[general.textDescriptionCard, general.paddingLR]}>{this.state.feature.description}</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={[{marginTop: 50}, general.paddingBorder]}>
                                <Text style={[general.textTitleCard]}>
                                    Album Ảnh
                                </Text>
                            </View>
                            <View>
                                <FlatList
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    data={this.state.feature.bonusImage}
                                    renderItem={({item}) =>
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            style={[general.wrapperImageSquare, general.marginTopBottom, general.shadow, general.marginLeftFar]}
                                        >
                                            <Image
                                                resizeMode={'cover'}
                                                source={{uri: item}}
                                                style={[general.imageSquare]}
                                            />
                                        </TouchableOpacity>
                                    }
                                />
                            </View>

                            <View style={general.wrapperBottomModule}/>
                            <View style={general.wrapperBottomModule}/>
                        </View>
                    }

                </Content>

                <View style={general.wrapperBuyNowButton}>
                    <TouchableOpacity
                        style={general.buttonBuyNowFullSize}
                        onPress={() => {
                        }}
                    >
                        <Text style={[general.paddingRight, general.textBigLight]}>Đặt chỗ
                            ngay</Text>
                        <Icon name="feat|arrow-right"
                              size={size.iconBig}
                              color={color.navTitle}
                        />
                    </TouchableOpacity>
                </View>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        news: state.home.news,
    }
}

export default connect(mapStateToProps)(InfoUpContainer);