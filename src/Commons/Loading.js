import React, {Component} from 'react';
import {
    View
} from 'react-native';
import {Spinner} from 'native-base';
import {connect} from 'react-redux'

class Loading extends Component{
    render(){
        return(
            <View
                style={this.props.general.wrapperCenter}
                onPress={() => this.props.goBack(null)}
            >
                <Spinner color={this.props.colorText}/>
            </View>
        );
    }
}
function mapStateToProps(state) {
    return {
        general: state.theme.general,
        colorText: state.theme.colorText
    }
}

export default connect(mapStateToProps)(Loading);