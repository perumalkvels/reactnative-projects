import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const LogoContainer = () => {
  return (
    <View>
      <View style={logo.container}>
        <Image
          style={logo.image}
          source={require('../assets/images/logo1.png')}
        />
      </View>
    </View>
  );
};

export default LogoContainer;

const logo = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  image: {
    width: 100,
    height: 100,
    // backgroundColor: 'powderblue',
  },
});
