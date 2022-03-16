import React, { useContext, useEffect, useState } from "react";

import CollectionsCard from "./CollectionsCard";
import { Stack } from "@mui/material";

import mova from "../api/mova";
import { Link } from "react-router-dom";
import { MyContext } from "../context/MyContext";

const Collections = () => {
  const { setProductsType } = useContext(MyContext);

  const [collections, setCollections] = useState([]);

  const getCollections = async () => {
    const result = await mova.get("./collections");

    setCollections(result.data);
  };

  useEffect(() => {
    getCollections();
  }, []);

  const renderCards = () => {
    return collections.map(({ displayName, collectionId }) => {
      return (
        <Link
          to={"/collection/" + collectionId}
          key={collectionId}
          onClick={() => {
            sessionStorage.setItem(
              "productsType",
              JSON.stringify({ collection: collectionId })
            );
            setProductsType({ collection: collectionId });
          }}
        >
          <CollectionsCard
            displayName={displayName}
            collectionId={collectionId}
          />
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

export default Collections;
