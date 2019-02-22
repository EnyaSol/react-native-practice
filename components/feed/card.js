import React, { Component } from 'React';
import {View, Text, StyleSheet} from 'react-native'
import LikeButton from "../likeButton";
import {Button} from "react-native-elements";

export default class Card extends Component {
    render(props){
        return(
            <View style={styles.cardContainer}>
                <View style={styles.cardText}>
                    <Text style={styles.cardTime}>{this.props.time}</Text>
                    <Text style={styles.cardMessage}>{this.props.message}</Text>
                </View>
                <Button
                    title="Like this time"
                    style={styles.likeButton}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        height: 132,
        width: 340,
        backgroundColor: '#e1e9f7',
        margin: 10,
        borderRadius: 8,
    },
    cardText:{
        padding: 10
    },
    cardTime:{
      fontSize: 15
    },
    cardMessage: {
        fontSize: 20
    },
    likeButton: {
        width: 96,
        height: 24
    }
})

// #e1e9f7