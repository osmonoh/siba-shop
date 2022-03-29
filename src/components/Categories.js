import React, { useEffect, useState } from "react";
import mova from "../api/mova";

import CategoriesCard from "./CategoriesCard";

import { Stack } from "@mui/material";

const Categories = () => {
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
          <CategoriesCard
            key={categoryId}
            displayName={displayName}
            categoryId={categoryId}
          />
        );
    });
  };

  return (
    <div className="categories">
      <Stack direction="row" spacing={0}>
        {renderCards()}
      </Stack>
    </div>
  );
};

export default Categories;
