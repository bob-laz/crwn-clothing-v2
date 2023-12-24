import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";
import { useSelector } from "react-redux";
import {
  selectCartIsOpen,
  selectCartQuantity,
} from "../../store/cart/cart.selector";
import { setCartOpen } from "../../store/cart/cart.action";

import { useDispatch } from "react-redux";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectCartIsOpen);
  const cartQuantity = useSelector(selectCartQuantity);

  const toggleCartOpen = () => dispatch(setCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartQuantity}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
