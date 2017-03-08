import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import City from './city'
import HomeType from './homeType'
import Like from './like'
import HomeList from './homeList'
import Navigation from './navigationView'

class Home extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <View style={{ height: 18, backgroundColor: '#21C0AD' }}/>
                <Navigation style={{ paddingTop: 20 }}/>
                <View style={{ height: 160 }}>
                    <HomeType selectedButton={(typeId) => this.selectedTypeButton(typeId)} />
                </View>
                <View style={styles.spaceStyle}></View>
                <Like/>
                <View style={styles.spaceStyle}></View>
                <Text style={{color: '#D6D6D6',textAlign: 'center',paddingTop: 10 }}>－猜你喜欢－</Text>
                <HomeList/>
                 <View style={{ height: 18, backgroundColor: '#21C0AD' }}/>
            </View>
        );
    }

    selectedTypeButton(inputTypeId) {

    }

    setupNavBar() {
        return (
            <View style={styles.navBarStyle} >
                {/* 左边按钮 */}
                <TouchableOpacity style={styles.navButtonStyle} onPress={this.onCityButtonPressed.bind(this)}>
                    <Text style={{ color: '#FFFFFF' }}>城市</Text>
                </TouchableOpacity>

                {/* 中间标题 */}
                <Text style={styles.ButtonTitleStyle}>美团</Text>

                {/* 右边按钮 */}
                <TouchableOpacity style={styles.navButtonStyle}>
                    <Text style={{ color: '#FFFFFF' }}>优选</Text>
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
        backgroundColor: '#FFFFFF',
    },
    spaceStyle: {
        height: 10,
        backgroundColor: '#D4D4D4'
    },
    ButtonTitleStyle: {
        fontSize: 15,
        color: '#FFFFFF',
        paddingLeft: 8
    },
    navButtonStyle: {
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    navBarStyle: {
        height: 64,
        backgroundColor: '#48D1CC',
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})

export default Home;