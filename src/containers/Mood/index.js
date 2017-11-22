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
import MoodIcon from '../../components/MoodIcon';
import Colors from '../../theme/Colors';

export default class Mood extends Component{
  constructor(props){
    super(props);
    
    console.log('Success')
    
  }

  render(){
    return(
      <View style={ styles.container }>

        <LinearGradient colors={['#195da2', '#45B3C7']} style={{ flex: 1, alignItems: 'center' }}>
          
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 60 }}>
            <Text style={ styles.title }>What is your mood?</Text>
            <Text style={ styles.text }>Tap. hold and move you finger to the area of the screen that best describes how you feel.</Text>
            <Text style={ styles.text }>Lift your finger to record your mood</Text>
          </View>  

          <View style={ styles.moodpanel }>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <MoodIcon text="Happy" color={ Colors.happy } type="1" />
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: '60%' }}>
                <MoodIcon text="Ok" color={ Colors.ok } type="1" />
                <MoodIcon text="Good" color={ Colors.good } type="1" />
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: '60%', marginTop: 50 }}>
                <MoodIcon text="Sad" color={ Colors.sad } type="2" />
                <MoodIcon text="Angry" color={ Colors.angry }type="2" />
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <MoodIcon text="Anxious" color={ Colors.anxious } type="2" />
            </View>
          </View>

          <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
            <TouchableOpacity style={ styles.buttonContainer }
                onPress={ (event) =>
                    this.props.navigator.push({
                        name: "Feeling",
                        title: "Feeling"
                    })
                }
                >
                    <Text style={ styles.buttonText }>Got It</Text>
            </TouchableOpacity>
          </View>
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
  title: {
      color: '#FFF',
      fontSize: 25,
      fontWeight: '700'
  },
  moodpanel: {
      flex: 5,
      justifyContent: 'center',
      width: '100%',
      alignItems: 'center',
      paddingTop: 50,
      paddingBottom: 50
  },
  text: {
      color: '#FFF',
      opacity: 0.7,
      marginTop: 25,
      paddingLeft: 20,
      paddingRight: 20
  },
  buttonContainer: {
      
      justifyContent: 'center',
      backgroundColor: '#fff',
      height: 60,
      width: '100%'
  },
  buttonText: {
      color: '#44a0d5',
      fontSize: 20,
      fontWeight: '400',
      textAlign: 'center'
  }
})