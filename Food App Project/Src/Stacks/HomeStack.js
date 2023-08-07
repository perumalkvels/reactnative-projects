import * as React from 'react';
import HomeScreen from '../UI Screens/Home';
import KFCScreen from '../UI Screens/KFC';
import McDonaldsScreen from '../UI Screens/McDonald';
import PizzaHutScreen from '../UI Screens/PizzaHut';
import {createStackNavigator} from '@react-navigation/stack';
import {useFocusEffect} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {setCurrentScreen} from '../Redux/Slices/AppSlice';
import {useDispatch} from 'react-redux';
// import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

export default function HomeStack() {
  // const currentScreen = useSelector(state => state.appData.currentScreen);
  const dispatch = useDispatch();
  useFocusEffect(
    React.useCallback(() => {
      dispatch(setCurrentScreen('Home'));
    }, []),
  );
  // console.log('From Home Stack');
  return (
    <View style={Home.wrapper}>
      <Stack.Navigator
        initialRouteName="DefaultHome"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="DefaultHome"
          component={HomeScreen}
          // initialParams={{brand_data}}
        />
        <Stack.Screen
          name="KFC"
          component={KFCScreen}
          // initialParams={{brand_data, food_data}}
        />
        <Stack.Screen
          name="McDonald"
          component={McDonaldsScreen}
          // initialParams={{brand_data, food_data}}
        />
        <Stack.Screen
          name="PizzaHut"
          component={PizzaHutScreen}
          // initialParams={{brand_data, food_data}}
        />
      </Stack.Navigator>
    </View>
  );
}
const Home = StyleSheet.create({
  wrapper: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
