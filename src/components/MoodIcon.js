import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default (props) => {
    if (props.type == "1"){
        return (
            <View style={ styles.container }>
                <Text style={ styles.text }>{ props.text }</Text>
                <View style={[ styles.moodicon, {backgroundColor: props.color} ]}></View>
            </View>
        );
    }else{
        return (
            <View style={ styles.container }>
                <View style={[styles.moodicon, { backgroundColor: props.color }]}></View>
                <Text style={ styles.text }>{ props.text }</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    moodicon: {
        width: 30,
        height: 30,
        borderRadius: 15
    },
    text: {
        marginBottom: 10,
        color: '#FFF'
    }
})