import React, {Component} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {Container, Content, Item, Left, Right, Spinner} from 'native-base';
import HamburgerButton from '../../Commons/HamburgerButton';
import Loading from '../../Commons/Loading';
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
                "description": "Với hơn 100 chỗ ngồi và không gian 1000m2 chắc chắn sẽ làm bạn hài lòng",
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

    showInfo() {
        const {news} = this.props;
        const {isLoading} = this.state;
        return (
            <Content
                showsVerticalScrollIndicator={false}
            >
                {
                    isLoading
                        ?
                        <Loading/>
                        :
                        <View>
                            <View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={[general.wrapperImageFeature, general.marginTopBottom, general.shadow, {marginTop: 20}]}>
                                <Image
                                    resizeMode={'cover'}
                                    source={{uri: this.state.feature.url}}
                                    style={general.imageFeature}
                                />
                                <View style={{marginTop: 20}}>
                                    <Text
                                        style={[general.textTitleCard, general.paddingLR,{padding: 5, fontFamily: 'Montserrat-SemiBold'}]}>{this.state.feature.title.toUpperCase()}</Text>
                                    <Text
                                        style={[general.textDescriptionCard, general.paddingLR,{padding: 5}]}>{this.state.feature.description}</Text>
                                </View>
                            </TouchableOpacity>
                            </View>
                            <View style={{marginTop: 100}}>
                                <Text
                                    style={[general.textIstActive, general.marginTopBottom, general.paddingLR, {fontFamily: 'Montserrat-SemiBold'}]}>
                                    Album Ảnh
                                </Text>
                                <FlatList
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    data={news}
                                    renderItem={({item}) =>
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            style={item == news[0] ? [general.wrapperImageSquare, general.marginTopBottom, general.shadow, general.marginLeftFar] : [general.wrapperImageSquare, general.marginTopBottom, general.shadow, general.marginLeft]}>
                                            <Image
                                                resizeMode={'cover'}
                                                source={{uri: item.url}}
                                                style={[general.imageSquare]}
                                            />
                                        </TouchableOpacity>
                                    }
                                />
                            </View>
                        </View>


                }
            </Content>

        );
    }

    render() {
        const {navigate} = this.props.navigation;
        const {colors} = this.props;
        return (
            <Container style={general.wrapperContainer}>
                <View
                    style={general.linearGradient}>
                    <View style={general.wrapperHeader}>
                        <Text style={[general.textTitleHeader]}>
                            UP LƯƠNG YÊN
                        </Text>
                        <Right>
                            <HamburgerButton navigate={navigate}/>
                        </Right>
                    </View>

                    <View style={general.wrapperFullWidth}>
                        {this.showInfo()}
                    </View>

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