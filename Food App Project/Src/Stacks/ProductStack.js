import React, {useEffect, useMemo, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {setCurrentScreen} from '../Redux/Slices/AppSlice';
import {createStackNavigator} from '@react-navigation/stack';

// import {useIsFocused} from '@react-navigation/native';
import {useFocusEffect} from '@react-navigation/native';
import {useIsFocused} from '@react-navigation/native';

import AllProductScreen from '../UI Screens/AllProduct';
import KFCScreen from '../UI Screens/KFC';
import McDonaldsScreen from '../UI Screens/McDonald';
import PizzaHutScreen from '../UI Screens/PizzaHut';
import ButtonGroup from '../CommonComponents/ButtonGroup';
import {useDispatch, useSelector} from 'react-redux';

const Stack = createStackNavigator();

export default function ProductStack({navigation, route}) {
  const btnsArray = ['All', 'KFC', 'McDonald', 'PizzaHut'];
  const dispatch = useDispatch();
  const {params: selectedScreen} = route;
  const [curSelected, setCurSelectedScreen] = useState('All');
  const [prevScreen, setPrevScreen] = useState(null);
  // console.log('curSelected', curSelected);
  // console.log('prevScreen', prevScreen);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(setCurrentScreen('Product'));
    }, []),
  );

  useEffect(() => {
    selectedScreen && setPrevScreen(selectedScreen);
  }, [selectedScreen]);

  useEffect(() => {
    if (prevScreen != null) {
      setCurSelectedScreen(prevScreen);
      setPrevScreen(null);
    }
  }, [prevScreen]);

  // useEffect(() => {
  //   navigation.navigate(curSelected);
  // }, []);

  const btnGroupHandler = useMemo(() => {
    return (
      <ButtonGroup
        btnsArray={btnsArray}
        btnGpName="Product"
        navigation={navigation}
        nowSelected={btnsArray.indexOf(curSelected)}
      />
    );
  }, [navigation, curSelected,prevScreen ]);

  return (
    <View style={product.productWrapper}>
      <View style={{flex: 1}}>
        <Stack.Navigator
          initialRouteName={curSelected}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="All" component={AllProductScreen} />
          <Stack.Screen
            name="KFC"
            component={KFCScreen}
            // initialParams={{brand_data, food_data, cart, setCartList}}
          />
          <Stack.Screen
            name="McDonald"
            component={McDonaldsScreen}
            // initialParams={{brand_data, food_data, cart, setCartList}}
          />
          <Stack.Screen
            name="PizzaHut"
            component={PizzaHutScreen}
            // initialParams={{brand_data, food_data, cart, setCartList}}
          />
        </Stack.Navigator>
      </View>
      {btnGroupHandler}
      <View />
    </View>
  );
}
const product = StyleSheet.create({
  productWrapper: {
    flex: 1,
    backgroundColor: '#00000000',
  },

  subHeader: {
    backgroundColor: 'orange',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 5,
    marginBottom: 10,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'transparent',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//   },
//   containerStyle: {
//     height: 35,
//     width: '75%',
//     borderWidth: 0,
//     backgroundColor: 'transparent',
//     marginTop: 0,
//     borderRadius: 1,
//   },
//   buttonStyle: {
//     backgroundColor: 'transparent',
//     borderWidth: 0.5,
//   },
//   selectedButtonStyle: {
//     backgroundColor: 'blue',
//   },
// });

// const [selectedIndex, setSelectedIndex] = useState(0);

/* <View style={styles.container}>
        <ButtonGroup
          buttons={['All', 'KFC', 'McDonald', 'PizzaHut']}
          selectedIndex={selectedIndex}
          onPress={value => handleButtonGroup(value)}
          containerStyle={styles.containerStyle}
          buttonStyle={styles.buttonStyle}
          selectedButtonStyle={styles.selectedButtonStyle}
          innerBorderStyle={{width: 0}}
          containerBorderRadius={0}
          underlayColor={'red'}
        />
      </View> */

// Handle Button Group  ### Old Code
// const handleButtonGroup = btnIndex => {
//   setSelectedIndex(btnIndex);
//   const screenName =
//     btnIndex === 0
//       ? 'AllProduct'
//       : btnIndex === 1
//       ? 'KFC'
//       : btnIndex === 2
//       ? 'McDonald'
//       : btnIndex === 3
//       ? 'PizzaHut'
//       : 'AllProduct';

//   navigation.navigate(screenName);
// };

// useEffect(() => {
//   navigation.navigate(selectedScreen);
//   return selectedScreen ? btnsArray.indexOf(selectedScreen) : 0;
// }, [btnsArray, navigation, selectedScreen]);

// const productStackHandle = useMemo(() => {
//   return (
//     <>
//       <View style={{flex: 1}}>
//         <Stack.Navigator
//           initialRouteName={btnsArray[selectedScreenIndex]}
//           screenOptions={{
//             headerShown: false,
//           }}>
//         </Stack.Navigator>
//       </View>
//       <View>
//         <ButtonGroup
//           btnsArray={btnsArray}
//           btnGpName="Product"
//           navigation={navigation}
//           nowSelected={selectedScreenIndex}
//         />
//       </View>
//     </>
//   );
// }, [navigation, selectedScreen]);

// return <View style={product.productWrapper}>{productStackHandle}</View>;
