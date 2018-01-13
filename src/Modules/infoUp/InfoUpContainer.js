import React, {Component} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {Container, Content, Item, Left, Right, Spinner} from 'native-base';
import HamburgerButton from '../../Commons/HamburgerButton';
import IconLight from '../../Commons/IconLight';
import general from '../../Styles/generalStyle';
import * as size from '../../Styles/size';
import * as color from '../../Styles/color';
import Icon from '../../Commons/Icon';

import {connect} from 'react-redux';

class InfoUpContainer extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            feature: {
                "url": "https://images.unsplash.com/photo-1505906960586-b2f5793971ad?auto=format&fit=crop&w=707&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                "title": "THIS IS SAMPLE TEXT",
                "description": "Với hơn 100 chỗ ngồi và không gian 1000m2",
                "created_at": "24h ago"
            },
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
        const {colors} = this.props;
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
                            data={this.props.news}
                            renderItem={({item}) =>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={[general.wrapperImageSquare, general.marginTopBottom, general.shadow, general.marginLeftFar]}
                                >
                                    <Image
                                        resizeMode={'cover'}
                                        source={{uri: item.url}}
                                        style={[general.imageSquare]}
                                    />
                                </TouchableOpacity>
                            }
                        />
                    </View>

                    <View style={general.wrapperBottomModule}/>
                    <View style={general.wrapperBottomModule}/>
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