import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View,} from 'react-native';
import {Container, Content, Item, Left, Right, Spinner} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import HamburgerButton from '../../Commons/HamburgerButton';
import Loading from '../../Commons/Loading';
import * as size from '../../Styles/size';
import * as color from '../../Styles/color';
import Icon from '../../Commons/Icon';

import {connect} from 'react-redux';

class InfoUpContainer extends Component {
    constructor(){
        super();
        this.state = {
            isLoading : false
        }
    }
    componentWillMount(){
        this.isLoading();
    }
    isLoading(){
        setTimeout(() => this.setState({isLoading : true}), 1000);

    }
    showInfo(){
        const {news, general} = this.props;
        const {isLoading} = this.state;
        return (
            <View>
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
                <View style={general.wrapperBuyNowButton}>
                    <TouchableOpacity
                        style={general.buttonBuyNowFullSize}
                        onPress={() => {

                        }}
                    >
                        <Text style={[general.paddingRight, general.textBigLight]}>Đặt mua
                            ngay</Text>
                        <Icon name="feat|arrow-right"
                              size={size.iconBig}
                              color={color.navTitle}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    render() {
        const {navigate} = this.props.navigation;
        const {general, colors} = this.props;
        return (
            <Container style={general.wrapperContainer}>
                <LinearGradient
                    colors={colors}
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
                        {this.showInfo()}
                    </View>
                </LinearGradient>
            </Container>
        )}
}
function mapStateToProps(state){
    return {
        general: state.theme.general,
        colors: state.theme.colors,
        news : state.home.news,
    }
}
export default connect(mapStateToProps)(InfoUpContainer);