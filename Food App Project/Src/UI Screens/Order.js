import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

const OrderScreen = ({customScreenProps, navigation}) => {

  return <Text style={order.text}>This is From OrderScreen</Text>;
};

export default OrderScreen;


const order = StyleSheet.create({
  text : {
    color : 'red',
  }
})