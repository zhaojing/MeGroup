import React, { Component } from 'react';
import {View, Text, AsyncStorage } from "react-native";

var STORAGE_KEY = '@SearchHistory:key';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            history: 'youyou',
        };
    }
    render() {
        return (
            <View>
                <Text>
                    {this.state.history}
                </Text>
            </View>
        );
    }

  componentDidMount() {
    this._loadInitialHistory().done();
  }

    _loadInitialHistory = async () => {
        try {
            var value = await AsyncStorage.getItem(STORAGE_KEY);
            this.setState({history: value});
        } catch (error) {
        }
    }
}

export default Search;