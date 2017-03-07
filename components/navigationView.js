import React, { Component } from 'react';
import {
    View,
    Text,
    Platform,
    Image,
    TextInput,
    StyleSheet
} from 'react-native';

class Navigation extends Component {
    render() {
        return (
            <View style={[styles.navigation]}>
                <View style={[styles.headerNav]}>
                    <Text style={[styles.whiteText]}>西安</Text>
                    <Image source={require('../icon/angle-arrow-down.png')} style={[styles.arrowDown]} />
                </View>
                <View style={[styles.headerSearch]}>
                    <View style={[styles.headerSearchDiv]} >
                        <Image source={require('../icon/search.png')} style={[styles.searchIcon]} />
                        <Text style={[styles.placeholder]}>自助餐</Text>
                    </View>
                </View>
                <View style={[styles.headerNav]}>
                    <Image source={require('../icon/qr-code.png')} style={[styles.qrCodeAndNotification]} />
                    <Image source={require('../icon/notification.png')} style={[styles.qrCodeAndNotification]} />
                </View>
            </View>
        );
    }
}

export default Navigation;

const NAVIGATION_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
    navigation: {
        flexDirection: 'row',
        height: NAVIGATION_HEIGHT,
        backgroundColor: '#21C0AD'
    },
    headerNav: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 80
    },
    headerSearch: {
        flex: 0.6,
        justifyContent: 'center',
    },
    whiteText: {
        color: 'white'
    },
    arrowDown: {
        width: 10,
        height: 10,
        tintColor: 'white'
    },
    headerSearchDiv: {
        height: 26,
        backgroundColor: 'white',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    qrCodeAndNotification: {
        width: 15,
        height: 15,
        margin: 5,
        tintColor: 'white'
    },
    searchIcon: {
        width: 15,
        height: 15,
        tintColor: 'gray'
    },
    placeholder: {
        color: 'gray'
    }
});