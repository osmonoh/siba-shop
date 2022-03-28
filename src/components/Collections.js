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
        <CollectionsCard
          displayName={displayName}
          collectionId={collectionId}
        />
      );
    });
  };

  return (
    <div className="collections">
      <Typography variant="h5" sx={{ marginBottom: "24px" }}>
        Our new collections waiting for you to explore:
      </Typography>
      <Stack direction="row" spacing={2}>
        {renderCards()}
      </Stack>
    </div>
  );
};

export default Collections;
