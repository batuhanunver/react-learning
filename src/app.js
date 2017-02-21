
import React, { Component } from 'react';
import {
  View,
  Button,
} from 'react-native';
import { Logic } from './logic';
import { OtherView } from './firstQuestion.js';
import q1 from '../questions/q1.json';
import q2 from '../questions/q2.json';

export class AwesomeProject extends Component {
  state = {
    viewOne: true,
  };

  componentWillMount() {
    this.logic = new Logic([q1, q2]);
  }

  changeView() {
    this.setState({
      viewOne: !this.state.viewOne,
    });
  }

  render() {
    if (!this.state.viewOne) {
      return (
        <View style={{ marginTop: 60 }}>
          <OtherView delegate={this.logic} />
        </View>
      );
    }
    return (
      <View>
        <View style={{ marginTop: 60 }}>
          <Button title="Start" onPress={() => this.changeView()}> change view </Button>
        </View>
      </View>
    );
  }
}

