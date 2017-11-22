import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text,
    Navigator
} from 'react-native';

export default class LoginForm extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    style={ styles.input }
                    />
                <TextInput
                    placeholder="Password"
                    secureTextEntry
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    style={ styles.input }
                    />

                <TouchableOpacity style={{ alignItems: 'flex-end' }}>
                    <Text style={{ color: '#FFF', marginBottom: 20 }}>Forgotten Password? </Text>
                </TouchableOpacity>

                <TouchableOpacity style={ styles.buttonContainer }
                    onPress={ (event) =>
                        this.props.navigator.push({
                            name: "Mood",
                            title: "Mood"
                        })
                    }
                >
                    <Text style={ styles.buttonText }>LOGIN</Text>
                </TouchableOpacity>
                
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
                    <Text>Don't have an account?     </Text>
                    <TouchableOpacity onPress={ (event) =>
                        this.props.navigator.push({
                            name: "SignUp",
                            title: "SignUp"
                        })
                    }>
                        <Text style={{ color: '#FFF', fontSize: 18, marginTop: -5 }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: '700'
    }
});
