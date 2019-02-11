import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import {Header, ThemeProvider, Button } from 'react-native-elements';
import Clock from './components/clock';
import ShareButton from './components/shareButton';
import LikeButton from './components/likeButton';

import AppFontLoader from './components/fontLoader';

export default class App extends React.Component {

  render() {
    return (
      <ThemeProvider>
        <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Timerr', style: styles.headerText }}
            rightComponent={{ icon: 'home', color: '#fff' }}
        />
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
  },
  buttonContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: '#fff'
  },
  clock :{
    flex: 1,
    backgroundColor: 'red'
  },
  shareButton:{
    backgroundColor: 'green'
  }

});
