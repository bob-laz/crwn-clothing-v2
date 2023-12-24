import { CART_ACTION_TYPES } from "./cart.types";

const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  console.log("cart reducer", state, action);
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.UPDATE_CART:
      return { ...state, cartItems: payload };
    case CART_ACTION_TYPES.SET_CART_OPEN:
      return { ...state, isCartOpen: payload };
    default:
      return state;
  }
};
