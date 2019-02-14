import React, {Component} from 'react';
import {View, StyleSheet} from "react-native";
import {Button} from "react-native-elements";
import Clock from "../clock";

export default class HomePage extends Component {



    render(){
        return(
            <View style={styles.container}>
                <Clock style={styles.clock}/>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Like this time"
                    />
                    <Button
                        title="Share this time"
                        buttonStyle={styles.shareButton}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    buttonContainer: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    clock :{
        flex: 1,
        backgroundColor: 'red'
    },
    shareButton:{
        backgroundColor: 'green'
    }
})