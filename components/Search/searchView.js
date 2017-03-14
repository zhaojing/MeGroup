import React, { Component } from 'react';
import { View, Text, AsyncStorage, StyleSheet } from "react-native";
import SearchBar from './searchBar';

var STORAGE_KEY = '@SearchHistory:key';

class SearchView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            history: 'youyou',
        };
    }
    render() {
        return (
            <View style={[styles.container]}>
                <SearchBar navigator={this.props.navigator}/>
            </View>
        );
    }

    componentDidMount() {
        this._loadInitialHistory().done();
    }

    _loadInitialHistory = async () => {
        try {
            var value = await AsyncStorage.getItem(STORAGE_KEY);
            this.setState({ history: value });
        } catch (error) {
        }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1
    }
})

export default SearchView;
