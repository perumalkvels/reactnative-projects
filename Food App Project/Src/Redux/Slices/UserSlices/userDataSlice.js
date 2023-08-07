import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  //Initial State Declaration
  userInfo: {},
  cartList: [],
  orderList: [],
  userFavList: [],
  tempFoodList: {},
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,

  // Functions That may associate with Changing The Initial State
  reducers: {
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
      state.userFavList = action.payload;
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
  setUserInfo,
  setCartList,
  setOrderList,
  setUserFavsList,
  setTempFoodList,
} = userDataSlice.actions;

export default userDataSlice.reducer;
