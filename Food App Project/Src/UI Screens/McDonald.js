import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';

export default class McDonald extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>McDonald</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  red: {
    color: 'red',
  },
});
