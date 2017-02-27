import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";
import TabbarView from './TabbarView'

class Nearby extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>登录</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
export default Nearby;