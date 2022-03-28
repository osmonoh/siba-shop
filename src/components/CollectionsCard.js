import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/MyContext";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia, Stack } from "@mui/material";

import summer2020 from "../images/summer.jpg";
import winter2020 from "../images/winter.jpg";
import sports from "../images/extreme.jpg";
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
          // height="140"
          image={img[collectionId]}
          alt={collectionId}
        />
        <CardContent>
          <Typography variant="h5" textAlign="center" component="div">
            {displayName}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
        {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Link>
    </Card>
  );
};

export default CollectionsCard;
