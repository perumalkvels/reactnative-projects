import {createSlice} from '@reduxjs/toolkit';
import {setCartList} from '../UserSlices/userDataSlice';
import {setOrdersList} from '../UserSlices/userDataSlice';
import {setUserInfo} from '../UserSlices/userDataSlice';
// import axios from 'axios';

const initialState = {
  //Initial State Declaration

  isLogged: true,

  isRegistered: false,

  loginData: {},

  registerData: {},
};

export const userAuthSlice = createSlice({
  name: 'login',

  initialState,

  reducers: {
    setIsLogged: (state, action) => {
      state.isLogged = action.payload;
    },
    setLoginData: (state, action) => {
      state.loginData = action.payload;
    },
    setIsRegistered: (state, action) => {
      state.isRegistered = action.payload;
    },
    setRegisterData: (state, action) => {
      state.registerData = action.payload;
    },
  },
});

export const loginUser = logindata => async dispatch => {
  console.log('yes login processed', logindata);
  //   const {data} = await axios.post(
  //     'http://localhost:4000/loginUser',
  //     JSON.stringify(logindata),
  //   );
  // //   console.log(data);
  //   if (!data == '') {
  //     dispatch(setIsLogged(true));
  //     dispatch(setUserData(data[0]));
  //     dispatch(setCartList(data[0].cart_Items));

  //     alert('Login Successsfully');
  //   } else {
  //     alert('Login Failed');
  //   }
};

export const registerUser = registerdata => async dispatch => {
  const {email, password, confirmPassword, mobileno} = registerdata;

  if (password === confirmPassword) {
    console.log('yes Register processed', registerdata);
  } else {
    console.log('Password Doesn"t Match ');
  }
  //   const response = await axios.post(
  //     'http://localhost:4000/registerUser',
  //     JSON.stringify(registerdata),
  //   );

  //   console.log(response);

  // alert('Successfuly Registered');

  // dispatch(setIsRegistered(true))

  // dispatch(setRegisterData({request : 'create_candidate'}))
};

export const {
  setUserData,
  setIsLogged,
  setLoginData,
  setRegisterData,
  setIsRegistered,
} = userAuthSlice.actions;

export default userAuthSlice.reducer;
