import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export class NextButton extends Component {
  static propTypes = {
    onClick: React.PropTypes.func.isRequired,
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.props.onClick()} >
        <View
          style={{
            flexDirection: 'column',
            margin: 10,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>NEXT</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
