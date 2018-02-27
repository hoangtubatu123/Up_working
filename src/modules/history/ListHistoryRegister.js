import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View, Platform} from 'react-native';
import {Container, Content, Item, Left, Right, Spinner} from 'native-base';
import general from '../../styles/generalStyle';
import * as size from "../../styles/size"
import IconLight from "../../commons/IconLight"

class ListHistoryRegister extends Component {
    shouldComponentUpdate(nextProps) {
        if (nextProps.item !== this.props.item) {
            return true;
        }
        return false;
    }

    render() {
        const {item} = this.props;
        return (
            <View style={[general.paddingLR]}>
                <TouchableOpacity
                    activeOpacity={1}
                    style={general.marginTopBottom}
                    onPress = {() => this.props.openModalHistory(this.props.item)}
                >
                    <View style={[general.shadow]}>
                        <Image
                            borderRadius={10}
                            resizeMode={'cover'}
                            source={{uri: item.base.base.avatar_url}}
                            style={[general.imageFeatureHeightLow ,general.shadow]}
                        />
                         <View
                                    style={[general.wrapperTabInImage, general.shadow, general.wrapperCenterRow, {
                                        left: -20,
                                        bottom: 0,
                                        backgroundColor : "transparent"
                                    }]}>
                                   <Text style={general.textTitleCardLight}>{item.created_at.split(" ")[1]}</Text>
                                </View>
                    </View>
                   
                    <View
                        style={[ {height : 30, marginTop: 10}]}>
                        <Text style={general.textTitleCard}>{item.base.base.name} - {item.base.district.name} - {item.base.province.name}</Text>
                        <Text/>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }
}

export default ListHistoryRegister;