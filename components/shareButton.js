import React, {Component} from 'react';
import {Alert, TouchableNativeFeedback, StyleSheet, Platform, View, Text} from 'react-native';


export default class ShareButton extends Component {


    _onPressButton(){
        Alert.alert("Sharing the time with your friends!")
    }


    render(){
        return(
            <TouchableNativeFeedback
                onPress={this._onPressButton}
                background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Share Time</Text>
                </View>
            </TouchableNativeFeedback>
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
        backgroundColor: 'green'
    },
    buttonText: {
        fontSize: 25,
        fontFamily: 'Roboto',
        color: 'white'
    }
})