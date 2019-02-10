import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import ChatScreen from "react-native/local-cli/templates/HelloNavigation/views/chat/ChatScreen";


class InputBox extends Component {
  constructor(props){
    super(props);
    this.state = {text : ''};
  }

  render(){
    return(
        <View style={this.props.smallView}>
          <TextInput
            style={{height: 40}}
            placeholder="Type here for me!"
            onChangeText={(text) => this.setState({text})}
          />
          <Text>
            {this.state.text}
          </Text>
        </View>
    )
  }

}


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <InputBox style={styles.smallView}/>
        <View style={styles.mediumView}/>
        <View style={styles.largeView}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }, smallView: {
    height: 200, width: 200,
    backgroundColor: 'skyblue'
  }, mediumView: {
    height: 200, width: 200,
    backgroundColor: 'powderblue'
  }, largeView: {
    height: 200, width: 200,
    backgroundColor: 'steelblue'
  }
});
