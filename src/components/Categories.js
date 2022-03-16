import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { MyContext } from "../context/MyContext";
import CategoriesCard from "./CategoriesCard";

import mova from "../api/mova";

import { Stack } from "@mui/material";

const Categories = () => {
  const { setProductsType } = useContext(MyContext);

  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const result = await mova.get("./categories");

    setCategories(result.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const renderCards = () => {
    return categories.map(({ displayName, categoryId, parentId }) => {
      if (parentId === "root")
        return (
          <Link
            to={"/category/" + categoryId}
            key={categoryId}
            onClick={() => {
              sessionStorage.setItem(
                "productsType",
                JSON.stringify({ category: categoryId })
              );
              setProductsType({ category: categoryId });
            }}
          >
            <CategoriesCard displayName={displayName} categoryId={categoryId} />
          </Link>
        );
    });
  };

  return (
    <Stack direction="row" justifyContent="center" spacing={4}>
      {renderCards()}
    </Stack>
  );
};

export default Categories;
