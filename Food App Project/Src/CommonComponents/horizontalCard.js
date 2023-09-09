import React, {useCallback} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector, useDispatch} from 'react-redux';
import {setCartList} from '../Redux/Slices/UserSlices/userDataSlice';
import moment from 'moment';

const HorizontalCard = ({item}) => {
  const dispatch = useDispatch();
  const cartList = useSelector(state => state.userData.cartList);
  const {
    foodId,
    foodTitle,
    foodDes,
    foodImg,
    foodPrice,
    foodQty,
    foodType,
    addedTime,
  } = item;
  // const now = moment();

  // This function takes added time to calculate the time difference

  const getTimeDifference = useCallback(
    cartTime => {
      const now = moment();
      const added = moment(cartTime);

      const diffInMinutes = now.diff(added, 'minutes');
      const diffInHours = now.diff(added, 'hours');
      const diffInDays = now.diff(added, 'days');

      if (diffInMinutes < 60) {
        return `${diffInMinutes} min ago`;
      } else if (diffInHours < 24) {
        return `${diffInHours} hour ago`;
      } else {
        return `${diffInDays} day ago`;
      }
    },
    [cartList],
  );

  // This function handles the no. of quantity
  const handleChangeQuantity = operation => {
    if (
      (operation === 'decrement' && foodQty > 1) ||
      (operation === 'increment' && foodQty <= 10)
    ) {
      const updatedCartList = cartList.map(cartItem => {
        return cartItem.foodId === foodId
          ? {
              ...cartItem,
              foodQty:
                operation === 'increment'
                  ? cartItem.foodQty + 1
                  : cartItem.foodQty - 1,
            }
          : cartItem;
      });
      dispatch(setCartList(updatedCartList));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.priceBadge}>{getTimeDifference(addedTime)}</Text>
      <View style={styles.topContents}>
        <Image source={{uri: foodImg}} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {foodTitle}
          </Text>
          <Text style={styles.description}>{foodType}</Text>
          <Text style={styles.tinydetails} numberOfLines={2}>
            {foodDes}
          </Text>
        </View>
      </View>
      <View style={styles.bottomContents}>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => {
            dispatch(
              setCartList(cartList.filter(val => foodId !== val.foodId)),
            );
          }}>
          <Icon name={'delete'} size={20} color={'white'} />
        </TouchableOpacity>

        <Text style={styles.price}>Price: ${foodPrice * foodQty}</Text>

        <View style={styles.quantityContainer}>
          {/* <Text style={styles.quantity}>{'foodQty'}</Text> */}
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => handleChangeQuantity('decrement')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{foodQty}</Text>

          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => handleChangeQuantity('increment')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: 160,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#910000',
    padding: 15,
    paddingVertical: 10,
    shadowColor: '#52006A',
    shadowOffset: {width: 2, height: 2}, // Modify the shadowOffset to include both width and height
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
  },
  topContents: {
    flexDirection: 'row',
  },
  priceBadge: {
    position: 'absolute',
    right: -2,
    top: -10,
    // color: 'black',
    // backgroundColor: 'orange',
    color: 'white',
    backgroundColor: 'green',
    padding: 8,
    fontSize: 8,
    borderRadius: 15,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  image: {
    width: 85,
    height: 85,
    borderRadius: 8,
  },
  detailsContainer: {
    width: 200,
    height: 100,
    marginLeft: 10,
  },
  title: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 15,
  },
  description: {
    color: 'black',
    fontSize: 12,
    marginTop: 5,
    fontWeight: 'bold',
  },
  tinydetails: {
    color: 'gray',
    fontSize: 12,
    marginTop: 5,
  },
  bottomContents: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  price: {
    marginTop: 8,
    marginLeft: 9,
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#990000',
    padding: 8,
    borderRadius: 6,
  },
  removeButton: {
    padding: 9,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: '#990000',
  },
  quantity: {
    padding: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
  },
  addButton: {
    backgroundColor: 'green',
    padding: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HorizontalCard;
