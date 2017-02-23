/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator'
import Home from './components/home'
import Mine from './components/mine'
import Nearby from './components/nearby'

export default class MeGroup extends Component {
  constructor(props){  
        super(props)  
        this.state={  
            selectedTab:'首页',  
        }  
   }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator> 
          <TabNavigator.Item  
                        selected={this.state.selectedTab === '首页'}  
                        title="首页"  
                        titleStyle={styles.tabText}  
                        selectedTitleStyle={styles.selectedTabText}  
                        onPress={() => this.setState({ selectedTab: '首页' })}>  
                        <Home/>  
          </TabNavigator.Item>
          <TabNavigator.Item  
                        selected={this.state.selectedTab === '附近'}  
                        title="附近"  
                        titleStyle={styles.tabText}  
                        selectedTitleStyle={styles.selectedTabText}  
                        onPress={() => this.setState({ selectedTab: '附近' })}>  
                        <Nearby/>  
          </TabNavigator.Item>
          <TabNavigator.Item  
                        selected={this.state.selectedTab === '我的'}  
                        title="我的"  
                        titleStyle={styles.tabText}  
                        selectedTitleStyle={styles.selectedTabText}  
                        onPress={() => this.setState({ selectedTab: '我的' })}>  
                        <Mine/>  
          </TabNavigator.Item>
        </TabNavigator>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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

AppRegistry.registerComponent('MeGroup', () => MeGroup);
