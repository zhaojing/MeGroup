import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    StatusBar
} from "react-native";
import NavBarStyle from '../Views/navBarStyle'

class SearchList extends Component {
    render() {
        return (
            <View>
                <StatusBar barStyle="light-content" />
                <NavBarStyle selectBack={() => this.onBack()} />
                <Text>敬请期待</Text>
            </View>
        )
    }

    onBack() {
        this.props.navigator.pop()
    }
}

export default SearchList;