import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Container, Content, Item, Left, Right, Spinner} from 'native-base';
import general from '../../styles/generalStyle';



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
                    activeOpacity={0.8}
                    style={general.marginTopBottom}
                    onPress = {() => this.props.openModalHistory(item)}
                >
                    <View
                        style={[general.shadow, general.imageFeatureHeightLow, {marginLeft: 2, marginRight: 2}]}>
                        <Image
                            borderRadius={10}
                            resizeMode={'cover'}
                            source={{uri: "http://up-co.vn/wp-content/uploads/8-1024x1024.jpeg"}}
                            style={general.imageFeatureHeightLow}
                        />
                    </View>
                    <View
                        style={[general.marginTop, general.wrapperCenterLeftToRightColumn, general.paddingLR, {
                            position: "absolute",
                            bottom: 0
                        }]}>
                        <Text style={[general.textTitleCardLight]}>{item.created_at.split(" ")[1]}</Text>
                        <Text/>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }
}

export default ListHistoryRegister;