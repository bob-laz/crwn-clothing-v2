import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  Footer,
  Name,
  ProductCardContainer,
  Price,
} from "./product-card.styles.js";
import { addToCart } from "../../store/cart/cart.action.js";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector.js";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const { name, imageUrl, price } = product;
  const cartItems = useSelector(selectCartItems);

  const addHandler = () => {
    dispatch(addToCart(cartItems, product));
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addHandler}>
        ADD TO CART
      </Button>
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
    </ProductCardContainer>
  );
};

export default ProductCard;
