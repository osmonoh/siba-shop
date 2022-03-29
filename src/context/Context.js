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
  const [inFav, setInFav] = useState(
    JSON.parse(localStorage.getItem("inFav")) || []
  );

  const [filterObject, setFilterObject] = useState([]);

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
        inFav,
        setInFav,
        filterObject,
        setFilterObject,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default Context;
