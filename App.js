/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import LoggedOut from './src/screens/LoggedOut';
import Login from './src/screens/Login';



export default class App extends Component {
  render() {
    return (
      <Login/>
    );
  }
}
