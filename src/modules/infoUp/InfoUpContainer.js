import React, {Component} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {Container, Content, Item, Left, Right, Spinner} from 'native-base';

import IconLight from '../../commons/IconLight';
import general from '../../styles/generalStyle';
import * as size from '../../styles/size';
import * as color from '../../styles/color';
import Icon from '../../commons/Icon';
import HamburgerButton from '../../commons/HamburgerButton'
import {connect} from 'react-redux';
import Loading from "../../commons/Loading";

class InfoUpContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        }
    }

    componentWillMount() {
        this.isLoading();
    }

    isLoading() {
        this.setState({isLoading: true})
        setTimeout(() => this.setState({isLoading: false}), 2000);
    }


    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container style={general.wrapperContainer}>
                <View style={[general.wrapperHeader, general.paddingBorder]}>
                    <Text style={[general.textTitleHeader]}>
                        {this.props.feature.name}
                    </Text>
                    <Right>
                        <TouchableOpacity
                            style={[general.padding, general.wrapperBackButton, {marginRight: -20}]}
                            onPress={() => {
                                this.props.setModalUp(false)
                            }}
                        >
                            <Icon name="ion|ios-close-outline"
                                  size={40}
                                  color={color.iconColor}
                            />
                        </TouchableOpacity>
                    </Right>
                </View>


                <Content style={general.wrapperFullWidth} showsVerticalScrollIndicator={false}
                >
                    {this.state.isLoading ?
                        <Loading/>
                        :
                        <TouchableOpacity activeOpacity={1}>
                            <TouchableOpacity
                                activeOpacity={1}
                                style={[general.marginTopBottom]}>
                                <View style={[general.imageFullWidth, general.shadow]}>
                                    <Image
                                        resizeMode={'cover'}
                                        source={{uri: this.props.feature.url}}
                                        style={general.imageFullWidth}
                                    />
                                </View>

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
                                        style={[general.textTitleCard, general.paddingLR]}>{this.props.feature.title.toUpperCase()}</Text>
                                    <Text/>
                                    <Text
                                        style={[general.textDescriptionCard, general.paddingLR]}>{this.props.feature.description}</Text>
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
                                    data={JSON.parse(this.props.feature.bonusImage)}
                                    renderItem={({item}) =>
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            style={[general.wrapperImageSquare, general.marginTopBottom, general.marginLeftFar]}
                                        >
                                            <View style={[general.imageSquare, general.shadow]}>
                                                <Image
                                                    resizeMode={'cover'}
                                                    source={{uri: item}}
                                                    style={[general.imageSquare]}
                                                />
                                            </View>

                                        </TouchableOpacity>
                                    }
                                />
                            </View>

                            <View style={general.wrapperBottomModule}/>
                            <View style={general.wrapperBottomModule}/>
                        </TouchableOpacity>
                    }

                </Content>

                <View style={general.wrapperBuyNowButton}>
                    <TouchableOpacity
                        style={general.buttonBuyNowFullSize}
                        onPress={() => {
                            this.props.navigation.navigate("UpRoom", {baseName: this.props.feature.name})
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


export default (InfoUpContainer);