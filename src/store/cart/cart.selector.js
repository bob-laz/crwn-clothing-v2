import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce(
      (sum, item) => (sum += item.price * item.quantity),
      0.0
    );
  }
);

export const selectCartQuantity = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((sum, item) => (sum += item.quantity), 0);
  }
);

export const selectCartIsOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);
