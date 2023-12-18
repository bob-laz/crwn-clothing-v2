import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles.js";
import ProductCard from "../../components/product-card/product-card.component";

const PREVIEW_COUNT = 4;

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>

      <Preview>
        {products.slice(0, PREVIEW_COUNT).map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
