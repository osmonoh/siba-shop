import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/MyContext";

import { Card, CardMedia, CardContent, Typography } from "@mui/material";

import summer2020 from "../images/summer-r.jpg";
import winter2020 from "../images/winter-r.jpg";
import sports from "../images/extreme-r.jpg";
const img = { summer2020, winter2020, sports };

const CollectionsCard = ({ displayName, collectionId }) => {
  const { setProductsType } = useContext(MyContext);

  return (
    <Card sx={{ flexBasis: "33%" }}>
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
        <CardMedia
          component="img"
          image={img[collectionId]}
          alt={collectionId}
        />
        <CardContent>
          <Typography variant="h5" textAlign="center" component="div">
            {displayName}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default CollectionsCard;
