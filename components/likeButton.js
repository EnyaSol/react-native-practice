import React, {Component} from 'react';
import {Alert, TouchableNativeFeedback, StyleSheet, Platform, View, Text} from 'react-native';
import {Button, ThemeProvider} from 'react-native-elements';


export default class LikeButton extends Component {


    _onPressButton(){
        Alert.alert("You liked this time!")
    }


    render(){
        return(
            <Button text="Like this time!" buttonStyle={styles.button}/>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        width: 300,
        borderRadius: 200 / 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    buttonText: {
        fontSize: 25,
        fontFamily: 'Roboto',
        color: 'white'
    }
})