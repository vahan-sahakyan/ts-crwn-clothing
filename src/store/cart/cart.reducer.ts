import { AnyAction } from 'redux';

import { setCartItems, setIsCartOpen } from './cart.action';

import { CartItem } from './cart.types';

export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export type CartState = {
  isCartOpen: boolean;
  cartItems: CartItem[];
};

export const cartReducer = (state = CART_INITIAL_STATE, action: AnyAction) => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }
  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }
  return state;
};
