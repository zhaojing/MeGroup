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
import TabbarView from './components/TabbarView'
import Nearby from './components/nearby'

const defaultRoute = {
  component: TabbarView,
  // component: Nearby,
};

export default class MeGroup extends Component {
  _renderScene(route, navigator) {
    let Component = route.component;
    return (
      <Component {...route.params} navigator={navigator} />
    );
  }
  render() {
    return (
      <Navigator
        initialRoute={defaultRoute}
        renderScene={this._renderScene}
      />
    );
  }
}

AppRegistry.registerComponent('MeGroup', () => MeGroup);
