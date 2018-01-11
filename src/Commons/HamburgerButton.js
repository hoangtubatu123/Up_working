import React, {Component} from 'react';
import {
    TouchableOpacity
} from 'react-native';
import Icon from './Icon';
import {connect} from 'react-redux';

class HamburgerButton extends Component{
    render(){
        const {general} = this.props;
        return(
            <TouchableOpacity
                onPress={() => this.props.navigate('DrawerOpen')}>
                <Icon
                    name="materialCommunity|menu"
                    size={35}
                    style={[general.iconStyle, {marginRight: -3, padding: 5}]}
                />
            </TouchableOpacity>
        );
    }
}
function mapStateToProps(state) {
    return {
        general: state.theme.general,
    }
}

export default connect(mapStateToProps)(HamburgerButton);
