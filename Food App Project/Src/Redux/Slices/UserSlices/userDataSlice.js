import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  //Initial State Declaration
  isLogged: false,
  userInfo: null,
  cartList: [],
  orderList: [],
  favList: [],
  tempFoodList: {},
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,

  // Functions That may associate with Changing The Initial State
  reducers: {
    setIsLogged: (state, action) => {
      state.isLogged = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setCartList: (state, action) => {
      state.cartList = action.payload;
    },
    setOrderList: (state, action) => {
      state.orderList = action.payload;
    },
    setUserFavsList: (state, action) => {
      state.favList = action.payload;
    },
    // setFilterFoodList: (state, action) => {
    //   state.filterFoodList = action.payload;
    // },
    setTempFoodList: (state, action) => {
      state.tempFoodList = action.payload;
    },
  },
});

export const {
  setIsLogged,
  setUserInfo,
  setCartList,
  setOrderList,
  setUserFavsList,
  setTempFoodList,
} = userDataSlice.actions;

export default userDataSlice.reducer;
