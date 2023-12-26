import DirectoryItem from "../directory-items/directory-item.component";
import { CategoriesContainer } from "./category-directory.styles.js";
import { useSelector } from "react-redux";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/category.selector";
import Spinner from "../spinner/spinner.component.jsx";

const CategoryDirectory = ({ categories }) => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoriesContainer>
          {Object.keys(categoriesMap).map((title) => (
            <DirectoryItem
              key={categoriesMap[title].id}
              category={categoriesMap[title]}
              title={title}
            />
          ))}
        </CategoriesContainer>
      )}
    </>
  );
};

export default CategoryDirectory;
