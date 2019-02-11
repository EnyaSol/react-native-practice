import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import {Header, ThemeProvider } from 'react-native-elements';
import Clock from './components/clock';
import ShareButton from './components/shareButton';
import LikeButton from './components/likeButton';

import AppFontLoader from './components/fontLoader';

export default class App extends React.Component {

  render() {
    return (
      <ThemeProvider>
        <View style={styles.container}>
          <Clock style={styles.clock}/>
          <View style={styles.buttonContainer}>
            <LikeButton style={styles.likeButton}/>
            <ShareButton style={styles.shareButton}/>
          </View>
        </View>
      </ThemeProvider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'pink'
  },
  likeButton: {
    flex: 1,
  },
  shareButton: {
    flex: 1,
  },
  clock :{
    flex: 1,
    backgroundColor: 'red'
  }

});
