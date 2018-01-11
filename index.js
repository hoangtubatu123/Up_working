import { AppRegistry } from 'react-native';
import App from './src/App';
import React, { Component } from 'react';
export default class UpWorking extends Component {
    render(){
        return(
            <App/>
        )
    }
}

console.disableYellowBox = true;
console.disableRedBox = true;
AppRegistry.registerComponent('UpWorking', () => UpWorking);
