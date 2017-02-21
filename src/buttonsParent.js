import React, { Component } from 'react';
import { View, Text, Platform, TouchableNativeFeedback, TouchableOpacity, StyleSheet } from 'react-native';
import { CustomizedButton } from './customizedButtons.js';

export class ButtonsParent extends Component {
  static propTypes = {
    selectionChanged: React.PropTypes.func.isRequired,
    onclick: React.PropTypes.func.isRequired,
  }

  state = {
    selectedOne: '',
  }

  selectButton(name) {
    this.setState({ selectedOne: name });
    this.props.selectionChanged(name);
    this.props.onclick(name);
  }

  render() {
    return (
      <View>
        <CustomizedButton isSelected={this.state.selectedOne === 'yes'} buttonName="Yes" onClick={() => this.selectButton('yes')} />
        <CustomizedButton isSelected={this.state.selectedOne === 'no'} buttonName="No" onClick={() => this.selectButton('no')} />
      </View>
    );
  }
}
