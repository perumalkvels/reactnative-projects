import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  //Initial State Declaration
  foodList: [],
  brandList: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,

  // Functions That may associate with Changing The Initial State
  reducers: {
    setFoodList: (state, action) => {
      state.foodList = action.payload;
    },
    setBrandList: (state, action) => {
      state.brandList = action.payload;
    },
  },
});

export const {setFoodList, setBrandList} = productSlice.actions;

export default productSlice.reducer;
