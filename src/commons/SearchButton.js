import React, {Component} from 'react';
import {
    TouchableOpacity
} from 'react-native';
import Icon from './Icon';
import general from '../styles/generalStyle';
import * as color from '../styles/color';
export default class SearchButton extends Component{
    constructor(){
        super();
        this.state = {
            text: '',
        }
    }

    render(){
        return(
            <TouchableOpacity
                activeOpacity={1}
                style={[general.buttonSearch, general.shadow, {display: this.props.showType,}]}
                onPress={this.props.function}
            >
                <Icon name={'fontawesome|search'} size={15} color={'#FFF'}/>
            </TouchableOpacity>
        );
    }
}
