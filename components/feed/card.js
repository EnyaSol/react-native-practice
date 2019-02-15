import React, { Component } from 'React';
import {View, Text, StyleSheet} from 'react-native'

export default class Card extends Component {
    render(props){
        return(
            <View style={styles.cardContainer}>
                <Text>{this.props.time}</Text>
                <Text>{this.props.message}</Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        color: 'black'
    }
})

// #e1e9f7