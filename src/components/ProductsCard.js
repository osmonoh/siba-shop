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
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";

const ProductsCard = ({
  item,
  itemId,
  picture,
  displayName,
  currentPrice,
  originalPrice,
  tags,
  isFav,
}) => {
  const { product, setProduct } = useContext(MyContext);
  const { inFav, setInFav } = useContext(MyContext);

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
      // sx={{ position: "relative" }}
      onClick={() => {
        setProduct(item);
        sessionStorage.setItem("product", JSON.stringify(item));
      }}
    >
      {/* <Link to={"/item/" + itemId}> */}
      <Card
        sx={{
          // position: "relative",
          maxWidth: 345,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
        // onClick={() => {
        //   setProduct(item);
        //   sessionStorage.setItem("product", JSON.stringify(item));
        // }}
      >
        <Link to={"/item/" + itemId}>
          <CardMedia
            component="img"
            // height="100%"
            image={picture}
            alt={displayName}
          />
        </Link>
        <CardContent>
          <Link to={"/item/" + itemId}>
            <Typography gutterBottom variant="h5" component="div" noWrap>
              {displayName}
            </Typography>
          </Link>

          <Typography variant="h6" color="text.secondary" textAlign="right">
            &euro;{currentPrice}
          </Typography>

          {isFav ? (
            <IconButton
              size="large"
              onClick={() => {
                setInFav(inFav.filter((item) => item.itemId !== itemId));
              }}
            >
              <HeartBrokenIcon fontSize="string" />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                if (
                  !inFav.some((item) => {
                    return item.itemId === itemId;
                  })
                )
                  setInFav([...inFav, item]);
              }}
            >
              <FavoriteBorderIcon />
            </IconButton>
          )}
        </CardContent>
      </Card>
      {/* {isFav && (
        <IconButton
          sx={{ position: "absolute", top: "0", right: "0" }}
          onClick={() => {
            // e.stopPropagation();
            setInFav(inFav.filter((item) => item.itemId !== product.itemId));
          }}
        >
          <FavoriteIcon />
        </IconButton>
      )} */}
    </Grid>
  );
};

export default ProductsCard;
