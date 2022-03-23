import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/MyContext";

import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ProductsCard = ({
  item,
  itemId,
  picture,
  displayName,
  currentPrice,
  originalPrice,
  tags,
}) => {
  const { setProduct } = useContext(MyContext);

  return (
    // <Grid
    //   item
    //   xs={4}
    //   onClick={() => {
    //     setProduct(item);
    //     sessionStorage.setItem("product", JSON.stringify(item));
    //   }}
    // >
    //   <Link to={"/item/" + itemId}>
    //     <img src={picture} alt={displayName} style={{ width: "100%" }} />
    //     <p>{displayName}</p>
    //     {/* <p>{originalPrice}</p> */}
    //     <p>&euro;{currentPrice}</p>
    //   </Link>
    // </Grid>

    <Grid
      item
      xs={4}
      onClick={() => {
        setProduct(item);
        sessionStorage.setItem("product", JSON.stringify(item));
      }}
    >
      <Link to={"/item/" + itemId}>
        <Card
          sx={{
            maxWidth: 345,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
          onClick={() => {
            setProduct(item);
            sessionStorage.setItem("product", JSON.stringify(item));
          }}
        >
          {/* <Link to={"/item/" + itemId}> */}
          <CardMedia
            component="img"
            // height="100%"
            image={picture}
            alt={displayName}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" noWrap>
              {displayName}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="right"
            >
              &euro;{currentPrice}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};

export default ProductsCard;
