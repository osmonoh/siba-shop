import React, { useState } from "react";
import { MyContext } from "./MyContext";

const Context = ({ children }) => {
  // const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(
    JSON.parse(sessionStorage.getItem("product")) || {}
  );
  const [productsType, setProductsType] = useState(
    JSON.parse(sessionStorage.getItem("productsType")) || {}
  );
  const [tagsFilter, setTagsFilter] = useState([]);
  const [inCart, setInCart] = useState(
    JSON.parse(localStorage.getItem("inCart")) || []
  );

  return (
    <MyContext.Provider
      value={{
        // products,
        // setProducts,
        product,
        setProduct,
        productsType,
        setProductsType,
        tagsFilter,
        setTagsFilter,
        inCart,
        setInCart,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default Context;
