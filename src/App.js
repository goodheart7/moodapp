import React, { Component } from 'react'
import {   
  StyleSheet,
  TouchableHighlight
} from 'react-native'

import AppNavigator from './containers/AppNavigator'

export default class App extends Component{

  render(){
    return(
        <AppNavigator  />      
    )
  }
}
