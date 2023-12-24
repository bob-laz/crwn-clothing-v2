import { createAction } from "../../util/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

export const setCartOpen = (bool) =>
  createAction(CART_ACTION_TYPES.SET_CART_OPEN, bool);

const updateCart = (cartItems) =>
  createAction(CART_ACTION_TYPES.UPDATE_CART, cartItems);

export const addToCart = (cartItems, item) => {
  const updatedCartItems = cartItems.find((i) => i.id === item.id)
    ? cartItems.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      )
    : [...cartItems, { ...item, quantity: 1 }];

  return updateCart(updatedCartItems);
};

export const removeFromCart = (cartItems, item) => {
  const foundItem = cartItems.find((i) => i.id === item.id);
  const updatedCartItems =
    foundItem.quantity > 1
      ? cartItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
        )
      : cartItems.filter((i) => i.id !== item.id);

  return updateCart(updatedCartItems);
};

export const removeAll = (cartItems, item) => {
  const updatedCartItems = cartItems.filter((i) => i.id !== item.id);

  return updateCart(updatedCartItems);
};
