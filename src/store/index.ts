import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import cartData from './modules/cart/reducer';

const rootReducers = combineReducers({
  cart: cartData,
});

export const store = configureStore({
  reducer: rootReducers,
});
