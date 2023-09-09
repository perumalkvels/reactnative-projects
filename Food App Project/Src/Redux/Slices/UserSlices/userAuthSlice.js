import {createSlice} from '@reduxjs/toolkit';
import {setCartList,setUserInfo,setIsLogged,setOrdersList,setUserFavsList} from '../UserSlices/userDataSlice';
import auth from '@react-native-firebase/auth';
// import { firebase } from '@react-native-firebase/app';
import { fbdataservice } from '../../../../firebaseConfig';
// import axios from 'axios';

const initialState = {
  //Initial State Declaration

  isRegistered: false,

  loginData: {},

  registerData: {},
};

export const userAuthSlice = createSlice({
  name: 'login',

  initialState,

  reducers: {
    setLoginData:  (state, action) => {
      state.loginData = action.payload;
    },
    setRegisterData: (state, action) => {
      state.registerData = action.payload;
    },
  },
});

export const loginUser = logindata => async dispatch => {
  const {email, password} = logindata;
  console.log(email, password);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(async ({user}) => {

            console.log('signed in successfully!');
            const userData = await fbdataservice(`/userData/${user.uid}`,'get')
            const { userName, email, mobileno } = userData;
            dispatch(setUserInfo({'uid':user.uid,'userName':userName,'email':email,'mobile':mobileno}))
            userData.hasOwnProperty('favList') && dispatch(setUserFavsList(user.favList))
            userData.hasOwnProperty('cartList') && dispatch(setCartList(user.cartList))
            userData.hasOwnProperty('orderList') && dispatch(setCartList(user.orderList))
            console.log("all ok")
            dispatch(setIsLogged(true))

      })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.error(error);
    });
};

export const registerUser =  registerdata => async dispatch => {
  const {userName, email, password, confirmPassword, mobileno} = registerdata;
  if (password === confirmPassword) {
        await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(({user}) => {
          fbdataservice(`/userData/${user.uid}`,'set', {'userName': userName, 'email' : email,'mobileno': mobileno })
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }
      
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
      
          console.error(error);
        });
     
        } else {

    console.log('Password Doesn"t Match ');
  }
};

export const {
  setLoginData,
  setRegisterData,
} = userAuthSlice.actions;

export default userAuthSlice.reducer;
