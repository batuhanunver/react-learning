/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

//import { X } from './x';

class OtherView extends Component {
  render() {
    return (
      <View>
        <Text>
          the View is now changed
          </Text>
      </View>
    );
  }
}

export default class AwesomeProject extends Component {
  constructor(p) {
    super(p);
    this.state = {
      viewOne: true
    }
  }

  changeView() {
    this.setState({
      viewOne: !this.state.viewOne
    })
  }

  render() {
    if (!this.state.viewOne) {
      return  (
        <View style={{ marginTop: 60 }}>
          <OtherView />
        </View>
      );
    }
    return (
      <View>
        <View style={{ marginTop: 60 }}>
          <Button title="Button" onPress={() => this.changeView()}> change view </Button>



        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
