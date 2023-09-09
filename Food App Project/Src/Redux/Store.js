import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './Slices/CounterSlice';
import foodSlice from './Slices/foodSlice';
import brandSlice from './Slices/BrandSlice';
import AppSlice from './Slices/AppSlice';
import userDataSlice from './Slices/UserSlices/userDataSlice';
import userAuthSlice from './Slices/UserSlices/userAuthSlice';
import ProductSlice from './Slices/ProductSlice';
export const store = configureStore({
  reducer: {
    appData: AppSlice,
    appProducts: ProductSlice,
    userAuth: userAuthSlice,
    userData: userDataSlice,
    foodList: foodSlice,
    brandList: brandSlice,
    counter: counterSlice,
  },
});
