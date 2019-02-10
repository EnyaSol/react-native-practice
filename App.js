import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, Button, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, Alert, Platform} from 'react-native';
import Clock from './components/clock';
import ShareButton from './components/shareButton';
import LikeButton from './components/likeButton';

import AppFontLoader from './components/fontLoader';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Clock/>
        <View style={styles.buttonContainer}>
          <LikeButton style={styles.likeButton}/>

          <ShareButton style={styles.shareButton}/>
        </View>
      </View>
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
    alignItems: 'center'
  },
  likeButton: {
    flex: 1,
  },
  shareButton: {
    flex: 1,
  }

});
