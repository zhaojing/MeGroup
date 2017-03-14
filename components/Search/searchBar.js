import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    StatusBar,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <StatusBar barStyle="default" />
                <View style={[styles.nav]} >
                    <View style={[styles.search]}>
                        <Image source={require('../../icon/search.png')} style={[styles.searchIcon]} />
                        <TextInput placeholder="自助餐" style={[styles.searchTextInput]}></TextInput>
                    </View>
                    <TouchableOpacity onPress={() => this.onBack()}>
                        <Text style={[styles.cancel]}>取消
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    onBack() {
        this.props.navigator.pop()
    }
}

const styles = StyleSheet.create({
    nav: {
        paddingTop: 20,
        height: 42,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    search: {
        flex: 0.7,
        margin: 10,
        height: 20,
        backgroundColor: '#EBECEE',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchIcon: {
        height: 15,
        width: 15,
        margin: 5,
        tintColor: '#8F9092'
    },
    searchTextInput: {
        margin: 2,
        flex: 0.8,
        fontSize: 12,
    },
    cancel: {
        marginRight: 10,
        color: '#21C0AD'
    }
})

export default SearchBar;