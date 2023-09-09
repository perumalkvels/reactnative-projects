import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import HorizontalCard from '../CommonComponents/horizontalCard';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useFocusEffect} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {setCartList} from '../Redux/Slices/UserSlices/userDataSlice';
import {Image} from 'react-native-elements';
import {setCurrentScreen} from '../Redux/Slices/AppSlice';

const CartScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const cartList = useSelector(state => state.userData.cartList);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(setCurrentScreen('Cart'));
    }, []),
  );

  const cartBtnHandler = () => {
    if (cartList.length) {
      console.log('Place cartItems to place Order');
    } else {
      navigation.navigate('Product');
    }
  };

  return (
    <ScrollView>
      <View style={cartScreen.container}>
        <View style={cartScreen.headerWrapper}>
          <Text style={cartScreen.headerTitle}>Your Cart</Text>
          <Text style={cartScreen.itemNos}>
            Total Items : {cartList.length}
          </Text>
          <TouchableOpacity
            style={cartScreen.clearCart}
            onPress={() => dispatch(setCartList([]))}>
            <Icon
              name={'remove-shopping-cart'}
              size={20}
              color={'black'}
              style={cartScreen.clearCartIcon}
            />
            <Text style={cartScreen.clearCartText}>Clear Items</Text>
          </TouchableOpacity>
        </View>
        {cartList.length ? (
          <>
            <View style={cartScreen.productWrapper}>
              {/* <Text style={cartScreen.headerText}> Your Cart Items </Text> */}
              <FlatList
                data={cartList}
                renderItem={({item}) => {
                  return <HorizontalCard item={item} />;
                }}
                vertical={true}
                keyExtractor={item => item.id}
              />
            </View>
          </>
        ) : (
          <>
            <View style={cartScreen.productWrapper}>
              <Image
                source={{
                  uri: 'https://www.ruuhbythebrandstore.com/images/cart_is_empty.png',
                }}
                style={cartScreen.emptyCartImage}
              />
            </View>
          </>
        )}

        <View style={cartScreen.fooderWrapper}>
          <TouchableOpacity
            style={cartScreen.placeOrderBtn}
            onPress={() => cartBtnHandler()}>
            <Icon
              // delivery-dining
              name={cartList.length ? 'delivery-dining' : 'add-shopping-cart'}
              size={25}
              color={'white'}
              style={cartScreen.buttonIcon}
            />
            <Text style={cartScreen.buttonText}>
              {cartList.length ? 'Place Order' : 'Add Food'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CartScreen;

const cartScreen = StyleSheet.create({
  container: {
    // paddingVertical: 5,
    // paddingHorizontal: 20,
  },
  headerWrapper: {
    height: 175,
    backgroundColor: '#a61900',
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 25,
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
    textAlign: 'left',
  },
  itemNos: {
    color: 'white',
    fontSize: 15,
    textAlign: 'left',
    marginHorizontal: 20,
  },
  clearCart: {
    padding: 20,
    position: 'absolute',
    top: 55,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: 'orange',
  },
  clearCartIcon: {
    fontSize: 20,
    color: 'black',
  },
  clearCartText: {
    fontSize: 15,
    color: 'black',
    // marginTop: 3,
    marginLeft: 10,
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    marginTop: 10,
  },
  productWrapper: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 10,
    marginTop: -50,
    paddingBottom: 15,
    marginHorizontal: 15,
    // height: 530,
    backgroundColor: 'white',
  },
  emptyCartImage: {
    // marginVertical: 10,
    marginTop: 20,
    height: 170,
    width: 170,
  },
  fooderWrapper: {
    // width: 200,
    paddingVertical: 10,
    marginHorizontal: 100,
  },
  placeOrderBtn: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 25,
    backgroundColor: '#990000',
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
    marginTop: 3,
    marginLeft: 10,
  },
  buttonIcon: {
    fontSize: 26,
    color: 'white',
  },
});
