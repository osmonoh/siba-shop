import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/MyContext";
import mova from "../api/mova";
import CollectionsCard from "./CollectionsCard";

import { Stack, Typography } from "@mui/material";

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
    <div className="collections">
      <Typography variant="h5" gutterBottom>
        Our new collections waiting for you to explore:
      </Typography>
      <Stack direction="row" justifyContent="space-between" spacing={4}>
        {renderCards()}
      </Stack>
    </div>
  );
};

export default Collections;
