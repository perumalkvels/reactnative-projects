import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Button, Image, Pressable} from 'react-native';

import {FlatList} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import {
  setCartList,
  setUserFavsList,
} from '../Redux/Slices/UserSlices/userDataSlice';

import Icon from 'react-native-vector-icons/FontAwesome';

const BrandContainer = ({foodList}) => {
  const dispatch = useDispatch();
  const {cartList, userFavList} = useSelector(state => state.userData);

  useEffect(() => {
    // console.log('cart : ', cartList);
  }, [cartList]);

  const toggleFavorite = (id, isFav) => {
    dispatch(
      setUserFavsList(
        isFav
          ? userFavList.filter(itemId => id !== itemId)
          : [...userFavList, id],
      ),
    );
  };

  return (
    <>
      <View style={Styles.cardWrapper}>
        <FlatList
          data={foodList}
          renderItem={({item}) => {
            const isFavorite = userFavList.includes(item.foodId);
            return (
              <View style={Styles.productCard}>
                <View style={Styles.favoriteContainer}>
                  <Pressable
                    onPress={() => toggleFavorite(item.foodId, isFavorite)}>
                    <Icon
                      name={isFavorite ? 'heart' : 'heart-o'}
                      size={20}
                      color={isFavorite ? '#a61900' : 'gray'}
                    />
                  </Pressable>
                </View>
                <Text style={Styles.title} numberOfLines={1}>
                  {item.foodTitle}
                </Text>
                <Image style={Styles.productImg} source={{uri: item.foodImg}} />
                <Text style={Styles.desc} numberOfLines={3}>
                  {item.foodDes}
                </Text>
                <Text style={Styles.foodType}>{item.foodType}</Text>
                <Text style={Styles.foodPrice}>Rs {item.foodPrice} /-</Text>
                {/* {console.log(
                  'check Item In cart',
                  cartList.some(cartItem => cartItem.foodId === item.foodId),
                )} */}
                {cartList.some(cartItem => cartItem.foodId === item.foodId) ? (
                  <Pressable
                    onPress={() => {
                      dispatch(
                        setCartList(cartList.filter(val => item !== val)),
                      );
                    }}
                    style={[Styles.button, Styles.removeCartItemButton]}>
                    <Text style={Styles.buttonText}>In Cart </Text>
                  </Pressable>
                ) : (
                  <Pressable
                    onPress={() => {
                      dispatch(
                        setCartList([
                          ...cartList,
                          {...item, foodQty: 1, addedTime: new Date()},
                        ]),
                      );
                    }}
                    style={[Styles.button, Styles.addCartItemButton]}>
                    <Text style={Styles.buttonText}>Add To Cart</Text>
                  </Pressable>
                )}
              </View>
            );
          }}
          horizontal={true}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
};
export default BrandContainer;

const Styles = StyleSheet.create({
  cardWrapper: {
    flexDirection: 'row',
    padding: 10,
  },
  productCard: {
    // width: 160,
    height: 290,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 40,
    alignContent: 'center',
    marginVertical: 10,
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: 'white',
  },
  productImg: {
    width: 140,
    height: 100,
  },
  title: {
    width: 140,
    height: 30,
    overflow: 'hidden',
    marginVertical: 5,
    fontSize: 15,
    color: 'black',
  },
  desc: {
    width: 140,
    height: 40,
    overflow: 'hidden',
    marginVertical: 5,
    fontSize: 10,
    color: 'black',
  },
  foodType: {
    fontWeight: 'bold',
    position: 'absolute',
    left: 12,
    bottom: 73,
    fontSize: 13,
    color: '#a61900',
  },
  button: {
    position: 'absolute',
    left: 10,
    bottom: 10,
    borderRadius: 8,
    height: 30,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  addCartItemButton: {
    backgroundColor: '#a61900',
  },
  removeCartItemButton: {
    backgroundColor: 'green',
  },
  buttonText: {
    fontSize: 12,
    color: 'white',
  },
  foodPrice: {
    fontWeight: 'bold',
    position: 'absolute',
    left: 12,
    bottom: 52,
    fontSize: 15,
    color: 'green',
  },
  favoriteContainer: {
    position: 'absolute',
    bottom: 20,
    right: 15,
  },
});
