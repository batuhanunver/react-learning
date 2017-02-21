import React, { Component } from 'react';
import { View, Text, Platform, TouchableNativeFeedback, TouchableOpacity, StyleSheet } from 'react-native';


export class CustomizedButton extends Component {

  static propTypes = {
    onClick: React.PropTypes.func.isRequired,
    buttonName: React.PropTypes.string.isRequired,
    isSelected: React.PropTypes.bool.isRequired,
  }

  state = { pressStatus: false };

  buttonPressed() {
    this.props.onClick();
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.buttonPressed()} >
        <View
          style={{
            flexDirection: 'column',
            margin: 10,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>{this.props.buttonName}</Text>
          <View
            style={[
              styles.bottomLine, {
                backgroundColor: this.props.isSelected ? 'black' : 'transparent',
              }]}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  bottomLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 2,
    bottom: 0,
  },
});
