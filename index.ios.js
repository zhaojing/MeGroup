/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';
import TabbarView from './app/components/TabbarView'

const defaultRoute = {
  component: TabbarView,
};

export default class MeGroup extends Component {
  render() {
    return (
      <Navigator
        initialRoute={defaultRoute}
        renderScene={this._renderScene}
        configureScene={this._configureScene}
      />
    );
  }

  _configureScene(route, routeStack) {
    if (route.type == 'Bottom') {
      return Navigator.SceneConfigs.FloatFromBottom; // 底部弹出
    }
    return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
  }

  _renderScene(route, navigator) {
    let Component = route.component;
    return (
      <Component {...route.params} navigator={navigator} />
    );
  }
}

AppRegistry.registerComponent('MeGroup', () => MeGroup);
