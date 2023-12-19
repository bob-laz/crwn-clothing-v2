import { createContext, useReducer } from "react";
import { createAction } from "../util/reducer/reducer.utils";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addToCart: () => null,
  removeFromCart: () => null,
  cartQuantity: 0,
  removeAll: () => null,
  cartTotal: 0.0,
});

export const CART_ACTION_TYPES = {
  UPDATE_CART: "UPDATE_CART",
  SET_CART_OPEN: "SET_CART_OPEN",
};

// use reducers when one update needs to update multiple state values
const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.UPDATE_CART:
      const { cartItems, cartQuantity, cartTotal } = payload;
      return { ...state, cartItems, cartQuantity, cartTotal };
    case CART_ACTION_TYPES.SET_CART_OPEN:
      return { ...state, isCartOpen: payload };
    default:
      throw new Error(`Unhandled type in cartReducer: ${type}`);
  }
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartQuantity: 0,
  cartTotal: 0.0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const { isCartOpen, cartItems, cartQuantity, cartTotal } = state;

  const setIsCartOpen = (open) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_CART_OPEN, open));
  };

  const addToCart = (item) => {
    const updatedCartItems = cartItems.find((i) => i.id === item.id)
      ? cartItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      : [...cartItems, { ...item, quantity: 1 }];

    cartItemReducer(updatedCartItems);
  };

  const removeFromCart = (item) => {
    const foundItem = cartItems.find((i) => i.id === item.id);
    const updatedCartItems =
      foundItem.quantity > 1
        ? cartItems.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
          )
        : cartItems.filter((i) => i.id !== item.id);

    cartItemReducer(updatedCartItems);
  };

  const removeAll = (item) => {
    const updatedCartItems = cartItems.filter((i) => i.id !== item.id);

    cartItemReducer(updatedCartItems);
  };

  const cartItemReducer = (updatedCartItems) => {
    const cartTotal = updatedCartItems.reduce(
      (sum, item) => (sum += item.price * item.quantity),
      0.0
    );

    const cartQuantity = updatedCartItems.reduce(
      (sum, item) => (sum += item.quantity),
      0
    );

    dispatch(
      createAction(CART_ACTION_TYPES.UPDATE_CART, {
        cartItems: updatedCartItems,
        cartQuantity,
        cartTotal,
      })
    );
  };

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addToCart,
        removeFromCart,
        cartQuantity,
        removeAll,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
