import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/MyContext";

import {
  Box,
  Container,
  Stack,
  Card,
  CardContent,
  CardMedia,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  IconButton,
  Snackbar,
} from "@mui/material";
import { ArrowBack, FavoriteBorder, Close } from "@mui/icons-material";

const ProductDetails = () => {
  const { product } = useContext(MyContext);
  const { inCart, setInCart } = useContext(MyContext);
  const { inFav, setInFav } = useContext(MyContext);

  const [size, setSize] = useState("");
  const [noSize, setNoSize] = useState(false);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const onClickToCartBtn = () => {
    if (size === "") setNoSize(true);
    else if (
      !inCart.some(
        (item) => product.itemId === item.itemId && size === item.size
      )
    ) {
      setOpen(true);
      setInCart([...inCart, { ...product, size, amount: 1 }]);
    } else {
      setOpen(true);
      setInCart(
        inCart.map((item) => {
          if (product.itemId === item.itemId && size === item.size) {
            product.amount = item.amount + 1;
            return { ...product, size };
          } else {
            return item;
          }
        })
      );
    }
  };

  const onClickToFavBtn = () => {
    if (
      !inFav.some((item) => {
        return item.itemId === product.itemId;
      })
    )
      setInFav([...inFav, product]);
    else setInFav(inFav.filter((item) => item.itemId !== product.itemId));
  };

  const handleSnackClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const snackAction = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleSnackClose}
      >
        <Close fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className="product-details">
      <Container maxWidth="lg">
        <IconButton sx={{ marginBottom: "32px" }} onClick={() => navigate(-1)}>
          <ArrowBack fontSize="large" />
        </IconButton>

        <Card sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            sx={{ maxWidth: 452 }}
            image={product.picture}
            alt={product.displayName}
          />

          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "32px",
              padding: "32px",
            }}
          >
            <div className="card-content-top">
              <div className="card-text">
                <Typography
                  variant="h5"
                  sx={{ marginBottom: "24px" }}
                  component="div"
                >
                  {product.displayName}
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  color="text.secondary"
                  component="div"
                >
                  {product.description}
                </Typography>
              </div>
              <div className="size-n-price">
                <Box sx={{ minWidth: 100, position: "relative" }}>
                  <FormControl fullWidth>
                    <InputLabel id="size">Size</InputLabel>
                    <Select
                      labelId="size"
                      id="size-select"
                      value={size}
                      label="Size"
                      onChange={(e) => {
                        setSize(e.target.value);
                        setNoSize(false);
                      }}
                    >
                      {product.availableSizes.map((item) => {
                        return (
                          <MenuItem key={item} value={item}>
                            {item}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                  {noSize && <p className="no-size">* Please select size</p>}
                </Box>

                <Typography
                  variant="h5"
                  gutterBottom
                  component="div"
                  textAlign="right"
                >
                  &euro;{product.currentPrice}
                </Typography>
              </div>
            </div>

            <Stack spacing={1} direction="row" margin="0 auto">
              <Button
                variant="contained"
                size="large"
                onClick={onClickToCartBtn}
              >
                Add to cart
              </Button>
              <Button
                variant="outlined"
                size="large"
                endIcon={<FavoriteBorder />}
                onClick={onClickToFavBtn}
              >
                {!inFav.some((item) => {
                  return item.itemId === product.itemId;
                })
                  ? `Add to `
                  : "Remove from "}
              </Button>
            </Stack>
          </CardContent>
        </Card>

        <Snackbar
          open={open}
          autoHideDuration={4000}
          onClose={handleSnackClose}
          message="Added to cart"
          action={snackAction}
        />
      </Container>
    </div>
  );
};

export default ProductDetails;
