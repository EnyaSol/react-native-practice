import React, { Component } from 'react';
import { StyleSheet, View, Dimensions} from 'react-native';
import {Header, ThemeProvider, Button } from 'react-native-elements';
import { TabView, TabBar, SceneMap} from 'react-native-tab-view';

import HomePage from './components/home/homepage';
import Feed from './components/feed/feed';


export default class App extends React.Component {

  state = {
      index: 0,
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
        this.setState(prevState => ({
            feedCards: [feedCard],
            isEmptyFeed: false,
        }));
    }

    _onLike = (time) => {
        let feedCard = {
          type: 'time',
          time: time.toLocaleString(),
          message: 'A user liked ' + time.toLocaleTimeString() + '!'
        };

        if(this.state.isEmptyFeed) {
            this._onFirstLike(feedCard);
        }else {
            this.setState(prevState => ({
                feedCards: [feedCard,...prevState.feedCards]
            }));
        }

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
          initialLayout={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
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
