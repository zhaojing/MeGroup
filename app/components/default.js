import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Image,
    TouchableOpacity,
    Text,
    Platform,
    Dimensions,
    StyleSheet
} from "react-native";
import NavBarStyle from './Views/navBarStyle'

class Default extends Component {
    render() {
        return (
            <View>
                <NavBarStyle selectBack={() => this.onBack()} />
                <Text>敬请期待</Text>
            </View>
        )
    }

    onBack() {
        this.props.navigator.pop()
    }
}

export default Default;