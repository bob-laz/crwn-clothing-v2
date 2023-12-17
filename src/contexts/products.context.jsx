import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../util/shop-data.json";

export const ProductsContext = createContext({
  products: null,
  setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);

  useEffect(() => {
    setProducts(SHOP_DATA);

    return () => setProducts(null);
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
