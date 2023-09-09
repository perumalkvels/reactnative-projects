import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';
import {Avatar} from '@rneui/themed';
// import ProfileModal from './profileModal';
import {useSelector, useDispatch} from 'react-redux';
import {setModelShow, setDrawerState} from '../Redux/Slices/AppSlice';
import { fbdataservice } from '../../firebaseConfig'; 
export default function Header() {

  const {isLogged,userInfo,cartList,orderList,favList} = useSelector(state => state.userData);
  const {currentScreen, drawerState, toastAlert} = useSelector(state => state.appData);
  console.log('isLogged',isLogged);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const showModal = useSelector(state => state.appData.showModal);

  // this useEffect update to firebase when cartList is updated...
  useEffect(() => {
    if (isLogged) {
      cartList.length ? 
        fbdataservice(`/userData/${userInfo?.uid}/cartList`,'set', {...cartList})
        :
        fbdataservice(`/userData/${userInfo?.uid}/cartList`,'remove')
        }
  }, [cartList, isLogged]);

  // this useEffect update to firebase when favList is updated...
  useEffect(() => {
    if (isLogged) {
      favList.length ? 
      fbdataservice(`/userData/${userInfo?.uid}/favList`,'set', {...favList})
      :
      fbdataservice(`/userData/${userInfo?.uid}/favList`,'remove')
    }
  }, [favList, isLogged]);

  useEffect(() => {
    drawerState
      ? navigation.dispatch(DrawerActions.openDrawer())
      : navigation.dispatch(DrawerActions.closeDrawer());
  });

  return (
    <>
      {/* <ProfileModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      /> */}
      
      <View style={header.area}>
        <View style={header.contents}>
          <View style={header.toggleMenu}>
            <TouchableOpacity
              style={header.pressableContainer}
              onPress={() => {
                dispatch(setDrawerState(drawerState ? false : true));
              }}>
              <Image
                style={header.toggleImage}
                source={require('../assets/images/download.png')}
              />
            </TouchableOpacity>
            <Text style={header.headerText}>{currentScreen}</Text>
          </View>

          <View style={header.logoSpace}>
            <Image
              style={header.tinyLogo}
              source={{
                uri: 'https://www.codester.com/static/uploads/items/000/018/18519/preview-xl.jpg',
              }}
            />
          </View>

          <View style={header.userState}>
            {/* <Pressable
              style={header.pressableContainer}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}> */}
            {isLogged ? (
              <TouchableOpacity
                style={header.pressableContainer}
                onPress={() => dispatch(setModelShow(!showModal))}>
                {!userInfo.img ? (
                  <Text  style={header.userIcon}>
                    {userInfo.charAt(0)} 
                  </Text>
                 
                 ) : ( <Avatar
                      size={64}
                      style={header.userIcon}
                      rounded
                      source={require('../assets/images/user.jpeg')}
                  />)
                } 
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={header.pressableContainer}
                onPress={() => {
                  navigation.navigate('Account'); // setModalVisible(!modalVisible);
                }}>
                <Text style={[header.text, header.authState]}>Login</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </>
  );
}

const header = StyleSheet.create({
  area: {
    backgroundColor: 'white',
    // backgroundColor: '#601111',
    height: 60,
    padding: 15,
  },
  contents: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleMenu: {
    width: '30%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleImage: {
    width: 30,
    height: 30,
    paddingBottom: 10,
    marginRight: 5,
  },
  headerText: {
    fontSize: 15,
    color: 'gray',
    alignItems: 'center',
  },
  logoSpace: {
    width: '33%',
  },
  tinyLogo: {
    width: 60,
    height: 60,
    paddingBottom: 10,
  },
  userState: {
    width: '25%',
    alignItems: 'center',
  },
  pressableContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  userIcon: {
    marginLeft: 30,
    width: 35,
    height: 35,
  },
  text: {
    color: 'black',
  },
  authState: {
    fontSize: 18,
    marginLeft: 15,
  },
});
