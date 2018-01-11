import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View,} from 'react-native';
import {Container, Content, Item, Left, Right, Spinner} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import HamburgerButton from '../../Commons/HamburgerButton';
import Loading from '../../Commons/Loading';
import general from '../../Styles/generalStyle';
import * as size from '../../Styles/size';
import * as color from '../../Styles/color';
import Icon from '../../Commons/Icon';

import {connect} from 'react-redux'


class HomeContainer extends Component {
    constructor() {
        super();
        this.state = {
            tab: 0,
            isLoading: false,
            feature: {
                "url": "https://images.unsplash.com/photo-1505906960586-b2f5793971ad?auto=format&fit=crop&w=707&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                "title": "THIS IS SAMPLE TEXT",
                "description": "Sample description goes here",
                "created_at": "24h ago"
            },

        }
    }

    componentWillMount() {
        this.isLoading();
    }


    isLoading() {
        this.setState({isLoading: true});
        setTimeout(() => this.setState({isLoading: false}), 1000);
    }

    // ViewDashboard() {
    //     this.isLoading();
    //     this.setState({tab: 0});
    // }
    //
    // ViewBlog() {
    //     this.isLoading();
    //     this.setState({tab: 1})
    // }
    //
    // ViewCard() {
    //     this.isLoading();
    //     this.setState({tab: 2})
    // }

    ShowTab() {
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
                            <Content>
                                {
                                    news.map((item, i) =>
                                        <View>
                                            <TouchableOpacity
                                                activeOpacity={0.8}
                                                style={[general.wrapperImageFeature, general.marginTopBottom, general.shadow, general.paddingLR, {marginTop: 70}]}>
                                                <Image
                                                    resizeMode={'cover'}
                                                    source={{uri: item.url}}
                                                    style={general.imageFeature}
                                                />
                                                <View style={{marginTop: 20}}>
                                                    <Text
                                                        style={general.textTitleCard}>{item.title.toUpperCase()}</Text>
                                                    <Text
                                                        style={general.textDescriptionCard}>{item.description}</Text>
                                                </View>

                                            </TouchableOpacity>
                                            <View style={general.iconInNews}>
                                                <Icon
                                                    name="materialCommunity|star"
                                                    size={30}
                                                    style={{color:'white'}}
                                                />
                                            </View>
                                        </View>
                                    )}
                            </Content>

                            <View style={general.wrapperBottomModule}/>
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
                            TIN MỚI
                        </Text>
                        <Right>
                            <HamburgerButton navigate={navigate}/>
                        </Right>
                    </View>

                    <View style={general.wrapperFullWidth}>
                        {this.ShowTab()}
                    </View>
                </View>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        news: state.home.news,
    }
}

export default connect(mapStateToProps)(HomeContainer);