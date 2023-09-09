import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  //Initial State Declaration
  brandList: [
    {
      brandName: 'KFC',
      img: require('../../assets/images/bannerKfc.png'),
      logoImg: require('../../assets/images/kfcSmallsize.jpg'),
      title: "Chicken Styles in ' KFC '",
      desc: 'When it comes to the best type of food to order at a restaurant',
    },
    {
      brandName: 'McDonald',
      img: require('../../assets/images/bannerPizzaHut.png'),
      logoImg: require('../../assets/images/mcdonalds-logo.png'),
      title: "Pizza Styles in  ' PizzaHut '",
      desc: 'Nulla vitae elit libero, a pharetra augue mollis interdum',
    },
    {
      brandName: 'PizzaHut',
      img: require('../../assets/images/bannermcDonalds.jpg'),
      logoImg: require('../../assets/images/pizzaHutSmallsize.png'),
      title: "Burger Styles in ' McDonald's '",
      desc: 'When it comes to the best type of food to order at a restaurant',
    },
  ],
};

export const brandListSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {
    setBrandList: (state, action) => {
      state.brandList = action.payload;
    },
  },
});

// export const addFoodItem = foodItem => dispatch => {
//   let localfoodList = JSON.parse(localStorage.getItem('food-list'));
//   let newFoodList = [...localfoodList, foodItem];
//   localStorage.setItem('food-list', JSON.stringify(newFoodList));
// };

export const {setBrandList} = brandListSlice.actions;

export default brandListSlice.reducer;
