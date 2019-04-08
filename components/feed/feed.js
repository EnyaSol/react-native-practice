import React, {Component} from 'React';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import Card from './card';

export default class Feed extends Component {

    _renderCard = (card) =>{
      return(
            <Card
              key={card.item.time}
              time={card.item.time}
              message={card.item.message}/>)
    }

    render(props){
        return(
          <FlatList
                data={this.props.feedCards}
                renderItem={this._renderCard}
                keyExtractor={(item, index) => index.toString()}
            />
          )
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
