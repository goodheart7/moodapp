import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text,
    Navigator
} from 'react-native';

export default class SignupForm extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <TextInput
                    placeholder="Name"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    style={ styles.input }
                    />
                <TextInput
                    placeholder="Phone"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    style={ styles.input }
                    />
                <TextInput
                    placeholder="Address"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    style={ styles.input }
                    />
                <TextInput
                    placeholder="Password"
                    secureTextEntry
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    style={ styles.input }
                    />
                <TextInput
                    placeholder="Confirm Password"
                    secureTextEntry
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    style={ styles.input }
                    />

                <TouchableOpacity style={ styles.buttonContainer }>
                    <Text style={ styles.buttonText }>SIGN UP</Text>
                </TouchableOpacity>
                
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
                    <Text>I have an account     </Text>
                    <TouchableOpacity onPress={ (event) =>
                        this.props.navigator.pop()
                    }>
                        <Text style={{ color: '#FFF', fontSize: 18, marginTop: -5 }}>Log In</Text>
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
