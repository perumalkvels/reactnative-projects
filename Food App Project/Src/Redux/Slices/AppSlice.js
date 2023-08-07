import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  pageLoad: true,
  showModal: false,
  drawerState: false,
  currentScreen: 'Home',
};

export const AppSlice = createSlice({
  name: 'app',
  initialState,

  // Functions That may associate with Changing The Initial State
  reducers: {
    setPageLoad: (state, action) => {
      state.pageLoad = action.payload;
    },
    setModelShow: (state, action) => {
      state.showModal = action.payload;
    },
    setDrawerState: (state, action) => {
      state.drawerState = action.payload;
    },
    setCurrentScreen: (state, action) => {
      state.currentScreen = action.payload;
    },
  },
});

export const {setPageLoad, setModelShow, setDrawerState, setCurrentScreen} =
  AppSlice.actions;

export default AppSlice.reducer;
