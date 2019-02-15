import React, { Component } from 'react';
import { StyleSheet, View, Dimensions} from 'react-native';
import {Header, ThemeProvider, Button } from 'react-native-elements';
import { TabView, TabBar, SceneMap} from 'react-native-tab-view';

import HomePage from './components/home/homepage';
import Feed from './components/feed/feed';


export default class App extends React.Component {

  state = {
      index: 1,
      routes: [
        {key: 'home', title: 'Home'},
        {key: 'feed', title: 'Feed'},
      ],
      feedCards: [{
        type: 'time',
        time: '',
        message: 'Nobody liked a time yet. . .'
      }],
      isEmptyFeed: true,
    }


    _onFirstLike = (feedCard) => {
        let newCards = this.state.feedCards;
        // Remove default entry
        newCards.shift();
        // Add the new feedcard
        newCards.concat(feedCard);

        this.setState(prevState => ({
            feedCard: newCards,
            isEmptyFeed: false,
        }));
    }

    _onLike = (time) => {
        let feedCard = {
          type: 'time',
          time: time.toLocaleString(),
          message: 'A user liked ' + time.toLocaleString() + ' at ' + time.toLocaleString() + '!'
        };
        alert("YOU LIKED THIS TIME: " + feedCard.time + " of message: " + feedCard.message)

        if(this.state.isEmptyFeed) {
            this._onFirstLike(feedCard);
        }

        this.setState(prevState => ({
            feedCards: [...prevState.feedCards, feedCard]
        }));
        console.log(this.state.feedCards)
      }

   _renderScene = ({route}) => {
    switch(route.key){
      case 'home':
        return <HomePage onLike={this._onLike}/>;
      case 'feed':
        return <Feed feedCards={this.state.feedCards}/>;
      default:
          return null;
    }

  }

  render() {
    return (
      <ThemeProvider>
        <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Timerr', style: styles.headerText }}
            rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <TabView
          navigationState={this.state}
          renderScene={this._renderScene}
          tabBarPosition="bottom"
          onIndexChange={index => this.setState({ index})}
          initialLayout={{ width: Dimensions.get('window').width}}
          />
      </ThemeProvider>
    );
  }
}


const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    color: '#fff'
  },
  scene: {
    flex: 1
  },
});
