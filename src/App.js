import Home from "./routes/home/home.component.jsx";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component.jsx";
import Authentication from "./routes/authentication/authentication.component.jsx";
import Shop from "./routes/shop/shop.component.jsx";
import Checkout from "./routes/checkout/checkout.component.jsx";

import { useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./util/firebase.utils";
import { setCurrentUser } from "./store/user/user.action.js";
import { useDispatch } from "react-redux";
import { fetchCategoriesAsync } from "./store/categories/category.action.js";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      // user is falsy on sign-out so we always want to set
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
