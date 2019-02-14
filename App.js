import React, { Component } from 'react';
import { StyleSheet, View, Dimensions} from 'react-native';
import {Header, ThemeProvider, Button } from 'react-native-elements';
import { TabView, TabBar, SceneMap} from 'react-native-tab-view';

import HomePage from './components/home/homepage';
import Feed from './components/feed/feed';


const HomeRoute = () => (
  <HomePage />
)

const FeedRoute = () => (
  <Feed/>
)


export default class App extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home'},
      { key: 'feed', title: 'Feed'},
    ],
    likedTime: {}
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
          renderScene={SceneMap({
          home: HomeRoute,
          feed: FeedRoute,
          })}
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
