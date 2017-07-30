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

import BmiPage from './BmiPage';

export default class BMI extends Component {
  render() {
    return (
      <BmiPage />
    );
  }
}

AppRegistry.registerComponent('BMI', () => BMI);
