import DirectoryItem from "../directory-items/directory-item.component";
import { CategoriesContainer } from "./category-directory.styles.js";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";

const CategoryDirectory = ({ categories }) => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <CategoriesContainer>
      {Object.keys(categoriesMap).map((title) => (
        <DirectoryItem
          key={categoriesMap[title].id}
          category={categoriesMap[title]}
          title={title}
        />
      ))}
    </CategoriesContainer>
  );
};

export default CategoryDirectory;
