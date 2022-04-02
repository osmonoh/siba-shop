import React, { useEffect, useState } from "react";
import mova from "../api/mova";

import CollectionsCard from "./CollectionsCard";

import { Stack, Typography } from "@mui/material";

const Collections = () => {
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
          key={collectionId}
          displayName={displayName}
          collectionId={collectionId}
        />
      );
    });
  };

  return (
    <div className="collections">
      <Typography variant="h5" sx={{ marginBottom: "24px" }}>
        Explore our new collections:
      </Typography>
      <Stack
        direction="row"
        sx={{
          flexWrap: "wrap",
          justifyContent: { sm: "center", lg: "space-between" },
          gap: { xs: "24px 2%", lg: "0" },
        }}
      >
        {renderCards()}
      </Stack>
    </div>
  );
};

export default Collections;
