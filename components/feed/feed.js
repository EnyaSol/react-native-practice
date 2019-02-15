import React, {Component} from 'React';
import {View, Text, StyleSheet} from 'react-native';

import Card from './card';

export default class Feed extends Component {

    render(props){
        return(
            <View style={styles.feedContainer}>
                {
                    this.props.feedCards.map(
                        function(card){
                            return(
                                <Card
                                    key={card.time}
                                    time={card.time}
                                    message={card.message}/>
                            )
                        }
                    )
                }
            </View>)

    }
}

const styles = StyleSheet.create({
    feedContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',

    },
    feedCard: {
        flex: 1,
        color: '#e1e9f7'
    }
})