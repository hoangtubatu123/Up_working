import React, {Component} from 'react';
import {Image, Platform, Text, View, StatusBar, TouchableOpacity} from 'react-native';
import {Container, Content, Item, Left, Right, Spinner} from 'native-base';
import BackButton from '../../commons/BackButton';
import Icon from '../../commons/Icon';
import Loading from '../../commons/Loading';
import WebViewAutoHeight from '../../commons/WebViewAutoHeight';
import general from '../../styles/generalStyle';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import parallaxStyle from '../../styles/parallaxStyle';
import * as color from "../../styles/color";


class DetailNotificationContainer extends Component {
    constructor() {
        super();
        this.state = {}
    }

    componentWillMount() {
    }

    render() {
        const {navigate} = this.props.navigation;
        const {goBack} = this.props.navigation;
        const {detailNew, isLoadingDetail} = this.props;
        return (
            <Container style={general.wrapperContainer}>
                <View style={[general.wrapperHeader, general.paddingBorder]}>
                    <Text style={[general.textTitleCard]} numberOfLines={1}>
                        Khai trương cơ sở mới
                    </Text>
                    <Right>
                        <TouchableOpacity
                            style={[general.padding, general.wrapperBackButton, {marginRight: -20}]}
                            onPress={() => {
                                goBack()
                            }}
                        >
                            <Icon name="ion|ios-close-outline"
                                  size={40}
                                  color={color.iconColor}
                            />
                        </TouchableOpacity>
                    </Right>
                </View>
                <Content style={{flex: 1}}>
                    <WebViewAutoHeight source={'<p></p><p style="text-align:start;"><span style="color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 14px;">Ngày 13/7 vừa qua, Cisco tuyên bố ý định mua lại Observable Networks, một công ty an ninh mạng chuyên về bảo mật cho dữ liệu đám mây. Kể từ tháng 6, Symantec cũng đã thu mua 3 công ty bảo mật là Skycure, Fireglass và Watchful Software. Trong khi đó, Microsoft đã chi tới 100 triệu USD để mua lại Hexadit</span></p><img src="http://up-co.vn/wp-content/uploads/NMH_0008-1024x683.jpg" alt="" style="float:none;height: 100%;width: 100%"/><p><span style="color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 14px;">Hexadite giờ đã nằm trong tay của Microsoft.</span></p><p style="text-align:start;"><span style="color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 14px;">Đại diện của Microsoft khẳng định: “Chưa bao giờ bảo mật và an ninh mạng lại gặp nhiều thách thức như hiện nay khi các cuộc tấn công sử dụng công nghệ ngày càng cao và không giới hạn đối tượng, Chúng tôi luôn ủng hộ và sẽ đầu tư nhiều hơn nữa vào các nền tảng số cho các doanh nghiệp cũng như tối ưu hóa việc vận hành trong một môi trường an toàn”.</span></p><p style="text-align:start;"><span style="color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 14px;">Với cơ hội phong phú và hậu thuẫn mạnh mẽ, các startup bảo mật hứa hẹn sẽ tạo nên một làn sóng mới trong thời gian tới.</span><br></p>'}/>
                </Content>

            </Container>
        );
    }
}


function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailNotificationContainer);