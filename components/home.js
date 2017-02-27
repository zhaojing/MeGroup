import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import City from './city'

class Home extends Component {
    render() {
        return (
            <View style={styles.container} >
                {this.setupNavBar()}
            </View>
        );
    }
    setupNavBar() {
        return (
            <View style={styles.navBarStyle} >
                {/* 左边按钮 */}
                <TouchableOpacity style = {styles.navButtonStyle} onPress={this.onCityButtonPressed.bind(this)}>
                    <Text style={styles.leftButtonTitleStyle}>城市</Text>
                </TouchableOpacity>

                {/* 中间标题 */}
                <Text style={styles.navBarTitleStyle}>美团</Text>

                {/* 右边按钮 */}
                <TouchableOpacity style = {styles.navButtonStyle}>
                    <Text style={styles.rightButtonTitleStyle}>优选</Text>
                </TouchableOpacity>
            </View>
        )
    }
    /*on click 事件*/
    onCityButtonPressed() {
        this.props.navigator.push({
            component: City,
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFE1FF"
    },
    ButtonTitleStyle: {
        fontSize: 15,
        color: 'blue',
        paddingLeft: 8
    },
    navButtonStyle: {
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    navBarStyle: {
        height: 64,
        backgroundColor: '#FFBBFF',
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // paddingTop: Platform.OS === 'ios' ? 15 : 0
    },
})

export default Home;