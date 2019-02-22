import React, {Component} from 'react';
import {View, StyleSheet} from "react-native";
import {Button} from "react-native-elements";
import Clock from "../clock";

export default class HomePage extends Component {

    state = {
        currTime: new Date()
    }

    _updateCurrTime = (updatedTime) => {
        this.setState({
            currTime: updatedTime
        })
    }

    _onLike = () => this.props.onLike(this.state.currTime)

    render(){
        return(
            <View style={styles.container}>
                <Clock
                    updateTime={this._updateCurrTime}
                />
                <View style={styles.buttonContainer}>
                    <Button
                        title="Like this time"
                        onPress={this._onLike}
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
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 3,
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    shareButton:{
        backgroundColor: 'green'
    }
})