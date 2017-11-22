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
import Colors from '../../theme/Colors';

export default class Feeling extends Component {
    constructor(props){
        super(props);
        this.state = {
            feelingText: '',
            grandient: ['#195da2', '#45B3C7'],
            flags: [false, false, false, false, false, false]
        }
        console.log('Success') 
    }

    render() {
        return(
            <View style={ styles.container }>
                <LinearGradient colors={ this.state.grandient } style={{ flex: 1, alignItems: 'center' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 60 }}>
                        <Text style={ styles.title }>How are you feeling?</Text>
                        <Text style={ styles.subtitle }>{ this.state.feelingText }</Text>
                    </View>
                    <View style={ styles.feelings }>
                        <View style={ styles.feelingRow }>
                            <TouchableOpacity onPress={(event) => {
                                    this.setState({ feelingText: 'Happy' });
                                    this.setState({ grandient: Colors.happy_gradient });
                                    this.setState({ flags: [true, false, false, false, false, false] });
                                    setTimeout(() => {
                                        if (this.state.flags[0]){
                                            this.props.navigator.push({
                                                name: "Dashboard",
                                                title: "Dashboard"
                                            });
                                        }
                                    }, 3000);
                                }
                            }>
                                <LinearGradient colors={ Colors.happy_gradient } style={ styles.feeling }></LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={(event) => {
                                    this.setState({ feelingText: 'OK' });
                                    this.setState({ grandient: Colors.ok_gradient });
                                    this.setState({ flags: [false, true, false, false, false, false] });
                                    setTimeout(() => {
                                        if (this.state.flags[1]){
                                            this.props.navigator.push({
                                                name: "Dashboard",
                                                title: "Dashboard"
                                            });
                                        }
                                    }, 3000);
                                }
                            }>
                                <LinearGradient colors={ Colors.ok_gradient } style={ styles.feeling }></LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={(event) => {
                                    this.setState({ feelingText: 'Good' });
                                    this.setState({ grandient: Colors.good_gradient });
                                    this.setState({ flags: [false, false, true, false, false, false] });
                                    setTimeout(() => {
                                        if (this.state.flags[2]){
                                            this.props.navigator.push({
                                                name: "Dashboard",
                                                title: "Dashboard"
                                            });
                                        }
                                    }, 3000);
                                }
                            }>
                                <LinearGradient colors={ Colors.good_gradient } style={ styles.feeling }></LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <View style={{}}>

                        </View>
                        <View style={ styles.feelingRow }>
                            <TouchableOpacity onPress={(event) => {
                                    this.setState({ feelingText: 'Sad' });
                                    this.setState({ grandient: Colors.sad_gradient });
                                    this.setState({ flags: [false, false, false, true, false, false] });
                                    setTimeout(() => {
                                        if (this.state.flags[3]){
                                            this.props.navigator.push({
                                                name: "Dashboard",
                                                title: "Dashboard"
                                            });
                                        }
                                    }, 3000);
                                }
                            }>
                                <LinearGradient colors={ Colors.sad_gradient } style={ styles.feeling }></LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={(event) => {
                                    this.setState({ feelingText: 'Angry' });
                                    this.setState({ grandient: Colors.angry_gradient });
                                    this.setState({ flags: [false, false, false, false, true, false] });
                                    setTimeout(() => {
                                        if (this.state.flags[4]){
                                            this.props.navigator.push({
                                                name: "Dashboard",
                                                title: "Dashboard"
                                            });
                                        }
                                    }, 3000);
                                }
                            }>
                                <LinearGradient colors={ Colors.angry_gradient } style={ styles.feeling }></LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={(event) => {
                                    this.setState({ feelingText: 'Anxious' });
                                    this.setState({ grandient: Colors.anxious_gradient });
                                    this.setState({ flags: [false, false, false, false, false, true] });
                                    setTimeout(() => {
                                        if (this.state.flags[5]){
                                            this.props.navigator.push({
                                                name: "Dashboard",
                                                title: "Dashboard"
                                            });
                                        }
                                    }, 3000);
                                }
                            }>
                                <LinearGradient colors={ Colors.anxious_gradient } style={ styles.feeling }></LinearGradient>
                            </TouchableOpacity>
                        </View>
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
    subtitle: {
        color: '#FFF',
        fontSize: 40,
        fontWeight: '800',
        marginTop: 10
    },
    feelings: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 20
    },
    feelingRow: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20
    },
    feeling: {
        width: 100,
        height: 200,
        borderRadius: 10,
        opacity: 0.8,
        shadowColor: '#FFF',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 10
        }
    }
})