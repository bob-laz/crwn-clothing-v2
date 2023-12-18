import DirectoryItem from "../directory-items/directory-item.component";
import { CategoriesContainer } from "./category-directory.styles.js";
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

const CategoryDirectory = ({ categories }) => {
  const { categoriesMap } = useContext(CategoriesContext);

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
