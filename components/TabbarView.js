import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, StatusBar, Image } from "react-native";
import TabNavigator from 'react-native-tab-navigator'
import Home from './home'
import Mine from './mine'
import Nearby from './nearby'

class TabbarView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: '首页',
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <StatusBar barStyle="light-content" />
                </View>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '首页'}
                        title="首页"
                        titleStyle={styles.tabText}
                        renderIcon={() => <Image source={require('../icon/home.png')} />}
                        selectedTitleStyle={styles.selectedTabText}
                        onPress={() => this.setState({ selectedTab: '首页' })}>
                        <Home navigator={this.props.navigator} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '附近'}
                        title="附近"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        onPress={() => this.setState({ selectedTab: '附近' })}>
                        <Nearby navigator={this.props.navigator} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '我的'}
                        title="我的"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        onPress={() => this.setState({ selectedTab: '我的' })}>
                        <Mine />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFE1FF",
        flex: 1
    },
    tabText: {
        color: "#999999",
        fontSize: 13
    },
    selectedTabText: {
        color: "#000000",
        fontSize: 13
    }
});

export default TabbarView;