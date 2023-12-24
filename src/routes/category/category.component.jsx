import { CategoryContainer, BaseH2 } from "./category.styles.js";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector.js";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    categoriesMap[category] && setProducts(categoriesMap[category].items);
  }, [category, categoriesMap]);

  return (
    <>
      <BaseH2>{category.toUpperCase()}</BaseH2>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
