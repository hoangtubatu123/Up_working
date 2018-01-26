import React, {Component} from 'react';
import {
    View
} from 'react-native';
import {Spinner} from 'native-base';
import general from '../styles/generalStyle';
import * as color from '../styles/color'
class Loading extends Component{
    render(){
        return(
            <View
                style={general.wrapperCenter}
                onPress={() => this.props.goBack(null)}
            >
                <Spinner color={color.textColorNotActive}/>
            </View>
        );
    }
}

export default Loading;