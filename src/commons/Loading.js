import React, {Component} from 'react';
import {
    View
} from 'react-native';
import {Spinner} from 'native-base';
import general from '../styles/generalStyle';

class Loading extends Component{
    render(){
        return(
            <View
                style={general.wrapperCenter}
                onPress={() => this.props.goBack(null)}
            >
                <Spinner color="#8bd100"/>
            </View>
        );
    }
}

export default Loading;