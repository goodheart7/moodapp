import React, { Component } from 'react'
import {   
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Navigator
} from 'react-native'

import LinearGradient from 'react-native-linear-gradient';

export default class Mood extends Component{
  constructor(props){
    super(props);
    
    console.log('Success')
    
  }

  render(){
    return(
      <View style={ styles.container }>

        <LinearGradient colors={['#195da2', '#45B3C7']} style={{ flex: 1, alignItems: 'center' }}>
          <Text>DashBoard</Text>
        </LinearGradient>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1
  },
  
})