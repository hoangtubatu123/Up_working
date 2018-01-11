import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View,} from 'react-native';
import {Container, Content, Item, Left, Right, Spinner} from 'native-base';
import HamburgerButton from '../../Commons/HamburgerButton';
import Loading from '../../Commons/Loading';
import IconLight from '../../Commons/IconLight';
import IconDark from '../../Commons/IconDark';
import general from '../../Styles/generalStyle';
import {connect} from 'react-redux'


class HomeContainer extends Component {
    constructor() {
        super();
        this.state = {
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
                        ĐẶT CHỖ
                    </Text>
                    <Right>
                        <HamburgerButton navigate={navigate}/>
                    </Right>
                </View>
                <TouchableOpacity style={[general.paddingLR, general.wrapperRowCenter,{marginTop: - 30, marginBottom: 10}]}>
                    <Text style={general.textTitleBoldNormal}>HÀ NỘI</Text>
                    <IconDark name={"entypo|chevron-down"}/>
                </TouchableOpacity>
                <Content
                    showsVerticalScrollIndicator={false}
                    style={{flex: 1}}>
                    {
                        this.state.isLoading
                            ?
                            <Loading/>
                            :
                            <View>
                                {
                                    this.state.data.map((item, i) =>
                                        <TouchableOpacity
                                            key={i}
                                            activeOpacity={0.8}
                                            style={[general.marginTopBottom, general.shadow, {marginTop: 20}]}>
                                            <View style={general.paddingLR}>
                                                <Image
                                                    resizeMode={'cover'}
                                                    source={{uri: item.url}}
                                                    style={general.imageFeature}
                                                />
                                                <View
                                                    style={[general.wrapperTabInImage, general.shadow, general.wrapperCenterRow]}>
                                                    <IconLight name={"entypo|user"}/>
                                                    <Text style={general.textDescriptionCardLight}>12</Text>
                                                    <Text>&nbsp;</Text>
                                                    <IconLight name={"entypo|aircraft"}/>
                                                    <Text style={general.textDescriptionCardLight}>12</Text>
                                                    <Text>&nbsp;</Text>
                                                    <IconLight name={"entypo|archive"}/>
                                                    <Text style={general.textDescriptionCardLight}>12</Text>

                                                </View>
                                            </View>

                                            <View
                                                style={[general.marginTop, general.wrapperCenterLeftToRightColumn, general.paddingLR]}>
                                                <Text style={general.textTitleCard}>{item.title.toUpperCase()}</Text>
                                                <Text/>
                                                <Text style={general.textDescriptionCard}>{item.description}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }

                            </View>
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

export default connect(mapStateToProps)(HomeContainer);