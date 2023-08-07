import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../UI Screens/Login';
import RegisterScreen from '../UI Screens/Register';
import {useFocusEffect} from '@react-navigation/native';
import ButtonGroup from '../CommonComponents/ButtonGroup';
import {StyleSheet, View, Animated} from 'react-native';
import keyboardStatusCheck from '../CommonComponents/keyboardStatusCheck';
import {setCurrentScreen} from '../Redux/Slices/AppSlice';
import {setIsLogged} from '../Redux/Slices/UserSlices/userAuthSlice';
import {useDispatch, useSelector} from 'react-redux';
const Stack = createStackNavigator();

export default function AccountStack({navigation}) {
  // const currentScreen = useSelector(state => state.appData.currentScreen);
  // console.log(currentScreen);
  const btnsArray = ['Login', 'Register'];
  const dispatch = useDispatch();
  useFocusEffect(
    React.useCallback(() => {
      dispatch(setCurrentScreen('Account'));
    }, []),
  );
  const isKeyboardOpen = keyboardStatusCheck();
  // console.log('keyboard Status', isKeyboardOpen);

  // Create an animated value for the opacity of the ButtonGroup
  const fadeAnim = useState(new Animated.Value(1))[0];

  useEffect(() => {
    if (isKeyboardOpen) {
      // Keyboard is open, fade out the ButtonGroup
      Animated.timing(fadeAnim, {
        toValue: 0, // Fade out (opacity 0)
        duration: 500, // Animation duration in milliseconds
        useNativeDriver: true, // Improve performance
      }).start();
    } else {
      // Keyboard is closed, fade in the ButtonGroup
      Animated.timing(fadeAnim, {
        toValue: 1, // Fade in (opacity 1)
        duration: 500, // Animation duration in milliseconds
        useNativeDriver: true, // Improve performance
      }).start();
    }
  }, [isKeyboardOpen, fadeAnim]);

  return (
    <View style={style.accountContainer}>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
      <Animated.View style={{opacity: fadeAnim}}>
        <View>
          <ButtonGroup
            btnsArray={btnsArray}
            btnGpName="Account"
            navigation={navigation}
            nowSelected={0}
          />
        </View>
      </Animated.View>
    </View>
  );
}
const style = StyleSheet.create({
  accountContainer: {
    // overlay: {
    //   flex: 1,
    //   position: 'absolute',
    //   left: 0,
    //   top: 0,
    //   opacity: 0.5,
    //   backgroundColor: 'red',
    //   width: '100%',
    //   height: 360,
    //   // width: width
    // },
    flex: 1,
  },
});
