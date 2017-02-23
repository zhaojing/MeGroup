import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar} from "react-native";

class Home extends Component {
  render() {
        return (
            <View style = {styles.container}>
            </View>
        );
    }
}
const styles = StyleSheet.create({
  container: {
       flex: 1,
       backgroundColor: "#FFB6C1"
    }
})

export default Home;