import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../Stacks/HomeStack';
import ProductStack from '../Stacks/ProductStack';
import AccountStack from '../Stacks/AccountStack';
import UserProfileScreen from '../UI Screens/UserProfileScreen';
import CartScreen from '../UI Screens/Cart';
import OrderScreen from '../UI Screens/Order';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector, useDispatch} from 'react-redux';
import ProfileModal from '../CommonComponents/profileModal';

// import PageLoader from '../CommonComponents/pageloader';

// import {useNavigation} from '@react-navigation/native';
// import { useRoute } from '@react-navigation/native';

// import {decrement, increment} from '../Redux/Slices/CounterSlice';
// import {HomeFilled, ShoppingCartOutlined, StarTwoTone} from '@ant-design/icons';

const Tab = createBottomTabNavigator();

export default function BottomTabs({navigation}) {
  // const pageLoad = useSelector(state => state.appData.pageLoad);
  const {showModal} = useSelector(state => state.appData);
  const isLogged = useSelector(state => state.userAuth.isLogged);
  // console.log(isLogged);

  const bottomTabIconHandler = (focused, color, size, route) => {
    let iconName =
      route.name === 'Home'
        ? 'home'
        : route.name === 'Product'
        ? 'restaurant-menu'
        : route.name === 'Account'
        ? 'person'
        : route.name === 'Cart'
        ? 'shopping-cart'
        : 'delivery-dining';

    return <Icon name={iconName} size={28} color={color} />;
  };

  return (
    <>
      {/* {pageLoad ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="small" />
        </View>
      ) : null} */}
      {showModal && <ProfileModal />}
      <Tab.Navigator
        initialRouteName={'Home'}
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 50,
            paddingTop: 0,
            backgroundColor: '#990000',
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'black',
          tabBarLabelStyle: focused => ({
            color: focused ? '#601111' : 'gray',
          }),
          tabBarIcon: ({focused, color, size}) => {
            return bottomTabIconHandler(focused, color, size, route);
          },
        })}>
        <Tab.Screen name="Home">{props => <HomeStack {...props} />}</Tab.Screen>

        <Tab.Screen name="Product">
          {props => <ProductStack {...props} />}
        </Tab.Screen>

        <Tab.Screen name="Cart">
          {props => <CartScreen {...props} />}
        </Tab.Screen>

        <Tab.Screen name="Order">
          {props => <OrderScreen {...props} />}
        </Tab.Screen>
        {isLogged ? (
          <Tab.Screen name="Account">
            {props => <UserProfileScreen {...props} />}
          </Tab.Screen>
        ) : (
          <Tab.Screen name="Account">
            {props => <AccountStack {...props} />}
          </Tab.Screen>
        )}
      </Tab.Navigator>
    </>
  );
}

// if (route.name === 'Home') {
//   iconName = 'home';
// } else if (route.name === 'Product') {
//   iconName = 'restaurant-menu';
// } else if (route.name === 'Account') {
//   iconName = 'person';
// } else if (route.name === 'Cart') {
//   iconName = 'shopping-cart';
// } else if (route.name === 'Order') {
//   iconName = 'delivery-dining';
// }

// const dispatch = useDispatch();
// const navigator = useNavigation();
// const routeName = navigator?.options?.initialRouteName;
// console.log('navigator', navigator.options);
// console.log('routeName', routeName);
// const route = useRoute();
// const initialRouteName = route.name;
// console.log('using useRoute', initialRouteName);
