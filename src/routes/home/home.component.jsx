import CategoryDirectory from "../../components/category-directory/category-directory.component";
import { Outlet } from "react-router-dom";

const Home = () => {

  return (
    <>
      <CategoryDirectory />
      <Outlet />
    </>
  );
};

export default Home;
