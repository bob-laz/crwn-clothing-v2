import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  Footer,
  Name,
  ProductCardContainer,
  Price,
} from "./product-card.styles.js";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addToCart } = useContext(CartContext);

  const addHandler = () => {
    addToCart(product);
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
