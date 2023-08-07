import React, {useState} from 'react';
import AppDrawerNavigator from './AppDrawerNavigator';
import Header from './Src/CommonComponents/Header';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const RouteStack = () => {
  const [currentScreen,setCurrentScreen] = useState('Home');
  return (
    <>
      {/* style={styles.scrollView} */}
      <NavigationContainer>
        <Header />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name="AppDrawerNavigator"
            component={AppDrawerNavigator}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default RouteStack;
