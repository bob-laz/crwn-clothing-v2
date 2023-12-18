import { createContext, useState, useEffect } from "react";

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

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartTotal, setCartTotal] = useState(0.0);

  // single responsibility per useEffect
  useEffect(() => {
    setCartQuantity(cartItems.reduce((sum, item) => (sum += item.quantity), 0));
  }, [cartItems]);

  useEffect(() => {
    setCartTotal(
      cartItems.reduce((sum, item) => (sum += item.price * item.quantity), 0.0)
    );
  }, [cartItems]);

  const addToCart = (item) => {
    const foundItem = cartItems.find((i) => i.id === item.id);
    if (foundItem) {
      setCartItems(
        cartItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const foundItem = cartItems.find((i) => i.id === item.id);
    if (foundItem.quantity > 1) {
      setCartItems(
        cartItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
        )
      );
    } else {
      setCartItems(cartItems.filter((i) => i.id !== item.id));
    }
  };

  const removeAll = (item) => {
    setCartItems(cartItems.filter((i) => i.id !== item.id));
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
