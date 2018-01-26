import React, {Component} from 'react';
import {Image, Platform, Text, View, StatusBar} from 'react-native';
import {Container, Content, Item, Left, Right, Spinner} from 'native-base';
import BackButton from '../../commons/BackButton';
import Loading from '../../commons/Loading';
import WebViewAutoHeight from '../../commons/WebViewAutoHeight';
import general from '../../styles/generalStyle';
import {connect} from 'react-redux'
import * as homeAction from './homeAction';
import {bindActionCreators} from 'redux';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import parallaxStyle from '../../styles/parallaxStyle';


class InfoNewContainer extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
        }
    }

    componentWillMount() {
        this.props.homeAction.getDetailNew(this.props.navigation.state.params.id);
    }

    render() {
        const {navigate} = this.props.navigation;
        const {goBack} = this.props.navigation;
        const {detailNew, isLoadingDetail} = this.props;
        return (
            <Container style={general.wrapperContainer}>
                <ParallaxScrollView
                    backgroundColor={'#FFF'}
                    showsVerticalScrollIndicator={false}
                    headerBackgroundColor={'#FFF'}
                    stickyHeaderHeight={Platform.OS === 'ios' ? 70 : 60}
                    parallaxHeaderHeight={350}
                    backgroundSpeed={10}
                    renderBackground={() => (
                        <View style={general.wrapperImageFullWidth}>
                            <View key="background">
                            </View>
                        </View>
                    )}
                    renderForeground={() => (
                        <View key="parallax-header" style={[parallaxStyle.parallaxHeaderTitle]}>
                            <View style={general.paddingLR}>
                                <Text style={[general.textTitleHeader, {textAlign: 'center', paddingLeft: 20, paddingRight: 20}]} numberOfLines={3}>
                                    {
                                        isLoadingDetail
                                            ?
                                            'Đang tải...'
                                            :
                                            detailNew.title
                                    }
                                </Text>
                                <Text/>
                                <View style={general.wrapperCenter}>
                                    <Image
                                        source={{uri: detailNew.author ? "http://" +  detailNew.author.avatar_url : ''}}
                                        style={general.imageCircleBig}/>
                                </View>
                                <Text/>
                                <Text style={[general.textTitleCard, {textAlign: 'center'}]} numberOfLines={1}>
                                    Đăng bởi <Text style={[general.textTitleCard, {color: '#287aff'}]}>
                                    {
                                        isLoadingDetail
                                            ?
                                            'Đang tải...'
                                            :
                                            detailNew.author ? detailNew.author.name : 'Up Co-working'
                                    }
                                </Text>
                                </Text>
                                <Text style={[general.textDescriptionCard, {textAlign: 'center'}]}
                                      numberOfLines={1}>
                                    {
                                        isLoadingDetail
                                            ?
                                            'Đang tải...'
                                            :
                                            detailNew.created_at
                                    }
                                </Text>
                                <Text/>
                                <View style={general.wrapperCenter}>
                                    <Text style={[general.category, general.textDescriptionCardLight, {bottom: 0}]}>
                                        {
                                            isLoadingDetail
                                                ?
                                                'Đang tải...'
                                                :
                                                detailNew.category
                                        }
                                    </Text>
                                </View>
                            </View>
                        </View>
                    )}
                    renderStickyHeader={() => (
                        <View key="sticky-header" style={parallaxStyle.stickySection}>
                            <View style={[general.wrapperCenter,Platform.OS === 'ios' ? {marginTop: 30} : {marginTop: 20}]}>
                                <Text style={[general.textTitleBig, {paddingLeft: 50, paddingRight: 50}]} numberOfLines={1}>
                                    {
                                        isLoadingDetail
                                            ?
                                            'Đang tải...'
                                            :
                                            detailNew.title
                                    }
                                </Text>
                            </View>
                        </View>
                    )}
                    renderFixedHeader={() => (
                        <View key="fixed-header" style={general.wrapperIconFixedHeader}>
                            <Left style={Platform.OS === 'ios' ? {marginTop: 20} : {marginTop: 10}}>
                                <BackButton goBack={goBack}/>
                            </Left>
                        </View>
                    )}
                >
                    {
                        isLoadingDetail
                            ?
                            <Loading/>
                            :
                            <WebViewAutoHeight source={detailNew.content ? detailNew.content : ''}/>
                    }
                </ParallaxScrollView>
            </Container>
        );
    }
}


function mapStateToProps(state) {
    return {
        detailNew: state.home.detailNew,
        isLoadingDetail: state.home.isLoadingDetail,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        homeAction: bindActionCreators(homeAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoNewContainer);