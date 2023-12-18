import Button from "../button/button.component";
import "./product-card.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addToCart } = useContext(CartContext);

  const addHandler = () => {
    addToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <Button buttonType="inverted" onClick={addHandler}>
        ADD TO CART
      </Button>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
