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
                    activeOpacity={1}
                    style={general.marginTopBottom}
                    onPress = {() => this.props.openModalHistory(this.props.item)}
                >
                    <View style={general.shadow}>
                        <Image
                            borderRadius={10}
                            resizeMode={'cover'}
                            source={{uri: "http://up-co.vn/wp-content/uploads/8-1024x1024.jpeg"}}
                            style={[general.imageFeatureHeightLow ,general.shadow, general.imageFeatureHeightLow,]}
                        />
                        <View
                            style={[general.marginTop, general.wrapperCenterLeftToRightColumn, general.paddingLR, {
                                position: "absolute",
                                bottom: 0
                            }]}>
                            <Text style={[general.textTitleCardLight]}>{item.created_at.split(" ")[1]}</Text>
                            <Text/>
                        </View>
                    </View>

                    <View
                        style={[general.paddingLR, {height : 30, marginTop: 10}]}>
                        <Text style={general.textTitleCard}>BKUP</Text>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }
}

export default ListHistoryRegister;