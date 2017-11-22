import React, { Component } from 'react'
import {   
  View,
  StyleSheet,
  Image,
  Text,
  KeyboardAvoidingView,
  Navigator
} from 'react-native'
import { Item, Input } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import SignupForm from './SignupForm';

export default class SignUp extends Component{
  constructor(props){
    super(props);
    
    console.log('Success')
    
  }

  render(){
    return(
      <KeyboardAvoidingView behavior="padding" style={ styles.container }>

        <LinearGradient colors={['#004BA7', '#45B3C7']} style={{ flex: 1, alignItems: 'center' }}>     
          
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 60 }}>
            <Text style={styles.title}>SIGN UP</Text>
            <Text style={styles.backtitle}>SIGN UP</Text>
          </View>  
          
          <View style={ styles.signupContainer }>
              <SignupForm { ...this.props} />
          </View>
        </LinearGradient>

      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1
  },
  signupContainer: {
    width: '100%',
    flexGrow: 1,
    justifyContent: 'center'
  },
  title: {
    position: 'absolute',
    top: 5,
    color: '#00ff3c',
    fontSize: 50,
    zIndex: 100,
  },
  backtitle: {
    position: 'absolute',
    top: 0,
    opacity: 0.5,
    color: '#97f9ae',
    fontSize: 60,
  }
})