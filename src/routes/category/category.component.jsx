import { CategoryContainer, BaseH2 } from "./category.styles.js";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { useSelector } from "react-redux";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/category.selector.js";
import Spinner from "../../components/spinner/spinner.component.jsx";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    categoriesMap[category] && setProducts(categoriesMap[category].items);
  }, [category, categoriesMap]);

  return (
    <>
      <BaseH2>{category.toUpperCase()}</BaseH2>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </>
  );
};

export default Category;
