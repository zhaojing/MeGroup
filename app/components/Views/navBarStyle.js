import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native";

class NavBarStyle extends Component {
    render() {
        return (
            <View style={styles.navBarStyle} >
                {/* 左边按钮 */}
                <TouchableOpacity style={styles.navButtonStyle} onPress={this.onBack.bind(this)}>
                    <Text style={styles.leftButtonTitleStyle}>返回</Text>
                </TouchableOpacity>
            </View>
        );
    }
    onBack() {
        this.props.selectBack();
    }
}

const styles = StyleSheet.create({
    navButtonStyle: {
        marginLeft: 10,
    },

    leftButtonTitleStyle: {
        color: '#FFFFFF'
    },

    navBarStyle: {
        height: 64,
        backgroundColor: '#48D1CC',
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        flexDirection: 'row',
        alignItems: 'center'
        // paddingTop: Platform.OS === 'ios' ? 15 : 0
    }
});

export default NavBarStyle;