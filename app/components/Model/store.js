import React, { Component } from 'react';

class Store extends Component {
    getObject(key) {
        try {
            const value = await AsyncStorage.getItem('@MySuperStore:key');
            if (value !== null) {
                return (value);
            }
        } catch (error) {
            return (error);
        }
    }

    setObject(key, object) {
        try {
            await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
        } catch (error) {
            console.log('AsyncStorage'+ error);
        }
    }
}

export default store;