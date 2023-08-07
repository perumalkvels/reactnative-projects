import {StyleSheet,Text, View} from 'react-native';
import React, {Component} from 'react';

export default class PizzaHut extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>PizzaHut</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  red: {
    color: 'red',
  },
});
