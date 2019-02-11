import React, { Component } from 'react';
import {View, Text, StyleSheet } from 'react-native'

export default class Header extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.headerText}>Timerr</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        backgroundColor: '#485263'
    },
    headerText: {
        textAlign: 'center',
        fontSize: 25,
        color: 'white'
    }
});