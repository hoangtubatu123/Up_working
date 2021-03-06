import React, {Component} from 'react';
import {
    TouchableOpacity
} from 'react-native';
import Icon from './Icon';

class IconName extends Component{
    render(){
        return(
            <TouchableOpacity
                onPress={this.props.action}>
                <Icon
                    name={this.props.name}
                    size={15}
                    color={'#fff'}
                    style={{padding: 5, backgroundColor: 'transparent'}}
                />
            </TouchableOpacity>
        );
    }
}

export default IconName;