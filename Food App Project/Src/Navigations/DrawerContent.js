import React, {useMemo, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setCurrentScreen, setDrawerState} from '../Redux/Slices/AppSlice';
import {setIsLogged} from '../Redux/Slices/UserSlices/userAuthSlice';

import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Divider} from '@rneui/themed';
import {Icon} from 'react-native-elements';

export default function DrawerComponent({navigation}) {
  const isLogged = useSelector(state => state.userAuth.isLogged);
  const currentScreen = useSelector(state => state.appData.currentScreen);
  const dispatch = useDispatch();

  const onPressHandler = useCallback(stackName => {
    dispatch(setCurrentScreen(stackName));
    navigation.navigate(stackName);
    dispatch(setDrawerState(false));
  }, []);

  const drawerContents = useMemo(() => {
    return (
      <>
        {/* User Info */}
        <View style={drawer.userInfo}>
          <Text style={drawer.userName}>John Doe</Text>
          <Text style={drawer.userEmail}>johndoe@example.com</Text>
        </View>
        <Divider style={drawer.divider} />

        <TouchableOpacity onPress={() => onPressHandler('Home')}>
          <View style={drawer.item}>
            <Icon
              name="home"
              style={drawer.icon}
              size={currentScreen === 'Home' ? 30 : 20}
              color={currentScreen === 'Home' ? 'yellow' : 'white'}
            />
            <Text
              style={[
                drawer.modName,
                currentScreen === 'Home' && drawer.activeText, // Apply activeText style when currentScreen is 'Home'
              ]}>
              Home
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onPressHandler('Product')}>
          <View style={drawer.item}>
            <Icon
              name="food-bank"
              style={drawer.icon}
              size={currentScreen === 'Product' ? 30 : 20}
              color={currentScreen === 'Product' ? 'yellow' : 'white'}
            />
            <Text
              style={[
                drawer.modName,
                currentScreen === 'Product' && drawer.activeText, // Apply activeText style when currentScreen is 'Home'
              ]}>
              AllProduct
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onPressHandler('Account')}>
          <View style={drawer.item}>
            <Icon
              name="account-circle"
              style={drawer.icon}
              size={currentScreen === 'Account' ? 30 : 20}
              color={currentScreen === 'Account' ? 'yellow' : 'white'}
            />
            <Text
              style={[
                drawer.modName,
                currentScreen === 'Account' && drawer.activeText, // Apply activeText style when currentScreen is 'Home'
              ]}>
              Account
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onPressHandler('Cart')}>
          <View style={drawer.item}>
            <Icon
              name="shopping-cart"
              style={drawer.icon}
              size={currentScreen === 'Cart' ? 30 : 20}
              color={currentScreen === 'Cart' ? 'yellow' : 'white'}
            />
            <Text
              style={[
                drawer.modName,
                currentScreen === 'Cart' && drawer.activeText, // Apply activeText style when currentScreen is 'Home'
              ]}>
              Cart
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onPressHandler('Order')}>
          <View style={drawer.item}>
            <Icon
              name="delivery-dining"
              style={drawer.icon}
              size={currentScreen === 'Order' ? 30 : 20}
              color={currentScreen === 'Order' ? 'yellow' : 'white'}
            />
            <Text
              style={[
                drawer.modName,
                currentScreen === 'Order' && drawer.activeText, // Apply activeText style when currentScreen is 'Home'
              ]}>
              Order
            </Text>
          </View>
        </TouchableOpacity>

        <View style={drawer.loggedActions}>
          {isLogged ? (
            <TouchableOpacity onPress={() => setIsLogged(false)}>
              <Text style={[drawer.modName, drawer.logMod]}>Logout</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => onPressHandler('Account')}>
              <Text style={[drawer.modName, drawer.logMod]}>LogIn</Text>
            </TouchableOpacity>
          )}
        </View>
      </>
    );
  }, [currentScreen, isLogged, onPressHandler]);

  return <View style={drawer.wrapper}>{drawerContents}</View>;
}

const drawer = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#990000',
  },
  userInfo: {
    alignItems: 'baseline',
    // marginBottom: 20,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  userName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  userEmail: {
    marginTop: 10,
    fontSize: 14,
    color: 'white',
  },
  divider: {
    marginVertical: 15,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    opacity: 0.4,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    size: 20,
    marginLeft: 20,
    color: 'yellow',
  },
  modName: {
    marginVertical: 2,
    padding: 20,
    fontSize: 15,
  },
  logMod: {
    textAlign: 'center',
  },
  activeText: {
    fontSize: 23,
    color: 'yellow',
  },
  loggedActions: {
    textAlign: 'right',
    fontSize: 20,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#770000',
  },
});

// function DrawerComponent()

// console.log('props DrawerContet: ');

// console.log('From DrawerContet');
// // console.log('Route prop:', route);
// // console.log('props', props);
// // console.log(props.navigation.navigate);
// const onPressHandler = stackName => {
//   console.log('On press Handler DrawerContet');
//   // setCurrentScreen(currentScreen);
//   // navigation.navigate(stackName);
// };
