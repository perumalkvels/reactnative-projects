import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import { Home } from './Home';

const SplashScreenComponent = () => {
  const dividerX = useSharedValue(0);

  useEffect(() => {
    SplashScreen.hide();
    setTimeout(() => {
      dividerX.value = withTiming(200, { duration: 1000 }, () => {
      navigation.navigate(Home);
      });
    }, 3000);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: dividerX.value }],
    };
  });

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={() => {}}>
        <Animated.View style={[styles.logo, animatedStyle]}>
          <Image source={require('./assets/logo.png')} style={styles.logoImage} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  logoImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
});

export default SplashScreenComponent;
