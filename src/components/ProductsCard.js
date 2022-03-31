import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/MyContext";

import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import { FavoriteBorder, HeartBroken } from "@mui/icons-material";

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
  const { setProduct } = useContext(MyContext);
  const { inFav, setInFav } = useContext(MyContext);

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={4}
      onClick={() => {
        setProduct(item);
        sessionStorage.setItem("product", JSON.stringify(item));
      }}
    >
      <Card
        sx={{
          maxWidth: 345,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Link to={"/item/" + itemId}>
          <CardMedia component="img" image={picture} alt={displayName} />
        </Link>
        <CardContent>
          <Link to={"/item/" + itemId}>
            <Typography variant="h5" component="div" noWrap>
              {displayName}
            </Typography>
          </Link>

          <div className="product-card-bottom">
            <Typography variant="h5" color="text.secondary" textAlign="right">
              &euro;{currentPrice}
            </Typography>

            {inFav.some((item) => item.itemId === itemId) ? (
              <IconButton
                size="large"
                onClick={() => {
                  setInFav(inFav.filter((item) => item.itemId !== itemId));
                }}
              >
                <HeartBroken fontSize="string" />
              </IconButton>
            ) : (
              <IconButton
                size="large"
                onClick={() => {
                  if (
                    !inFav.some((item) => {
                      return item.itemId === itemId;
                    })
                  )
                    setInFav([...inFav, item]);
                }}
              >
                <FavoriteBorder fontSize="string" />
              </IconButton>
            )}
          </div>
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
