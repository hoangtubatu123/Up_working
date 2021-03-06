import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Container, Content, Item, Left, Right, Spinner} from 'native-base';
import general from '../../styles/generalStyle';
import Icon from '../../commons/Icon';

class ListView extends Component {

    shouldComponentUpdate(nextProps) {
        if (nextProps.item !== this.props.item) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('infoNew', {id: this.props.item.id})
                    }}
                    activeOpacity={0.8}
                    style={[general.marginTopBottom, general.paddingLR, {marginBottom: 20}]}>
                    <View style={[general.shadow, general.imageFeature]}>
                        <Image
                            resizeMode={'cover'}
                            source={{uri: "http://" + this.props.item.url}}
                            style={general.imageFeature}
                        />
                        <Text style={[general.categoryInImage, general.textDescriptionCardLight]}>
                            {this.props.item.category ? this.props.item.category : 'Category'}
                        </Text>
                    </View>
                    <View style={{marginTop: 20}}>
                        <Text numberOfLines={1}
                              style={general.textTitleCard}>{this.props.item.title.toUpperCase()}</Text>
                        <Text style={general.textDescriptionCard}>{this.props.item.description}</Text>
                    </View>

                </TouchableOpacity>

            </View>

        )
    }
}

export default ListView;