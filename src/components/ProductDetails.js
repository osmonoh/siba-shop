import React, { useContext, useState } from "react";
import { MyContext } from "../context/MyContext";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductDetails = () => {
  const { product } = useContext(MyContext);
  // const [toCart, setToCart] = useState({});
  const { inCart, setInCart } = useContext(MyContext);
  const { inFav, setInFav } = useContext(MyContext);

  const [size, setSize] = useState("");
  const [noSize, setNoSize] = useState(false);

  console.log(inCart, inCart.length && typeof inCart[0].amount);
  // console.log("size------>", size);

  // return (
  //   <div>
  //     <img src={product.picture} alt={product.displayName} />
  //     <p>{product.displayName}</p>
  //     <select
  //       name="size"
  //       id="size"
  //       value={size}
  //       onChange={(e) => {
  //         setSize(e.target.value);
  //         setNoSize(false);
  //       }}
  //     >
  //       <option value="" defaultValue>
  //         -
  //       </option>

  //       {product.availableSizes.map((item) => {
  //         return (
  //           <option key={item} value={item}>
  //             {item}
  //           </option>
  //         );
  //       })}
  //     </select>
  //     {noSize && <p>* Please choose size</p>}
  //     {/* <input type="number" min="1" max="10" /> */}
  //     <p>{product.description}</p>
  //     <p>&euro;{product.currentPrice}</p>
  //     <button
  //       onClick={() => {
  //         if (size === "") setNoSize(true);
  //         else if (
  //           !inCart.some(
  //             (item) => product.itemId === item.itemId && size === item.size
  //           )
  //         ) {
  //           setInCart([...inCart, { ...product, size, amount: 1 }]);
  //         } else {
  //           setInCart(
  //             inCart.map((item) => {
  //               if (product.itemId === item.itemId && size === item.size) {
  //                 product.amount = item.amount + 1;
  //                 return { ...product, size };
  //               } else {
  //                 return item;
  //               }
  //             })
  //           );
  //         }
  //         // setInCart([...inCart, { ...product, size, amount: 1 }])
  //       }}
  //     >
  //       Add to cart
  //     </button>
  //     <button
  //       onClick={() => {
  //         if (
  //           !inFav.some((item) => {
  //             return item.itemId === product.itemId;
  //           })
  //         )
  //           setInFav([...inFav, product]);
  //         else setInFav(inFav.filter((item) => item.itemId !== product.itemId));
  //       }}
  //     >
  //       {!inFav.some((item) => {
  //         return item.itemId === product.itemId;
  //       })
  //         ? "Add to favourites"
  //         : "Remove from favourites"}
  //     </button>
  //   </div>
  // );

  const onClickToCartBtn = () => {
    if (size === "") setNoSize(true);
    else if (
      !inCart.some(
        (item) => product.itemId === item.itemId && size === item.size
      )
    ) {
      setInCart([...inCart, { ...product, size, amount: 1 }]);
    } else {
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
    // setInCart([...inCart, { ...product, size, amount: 1 }])
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

  return (
    <div className="product-details">
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

          <div>
            {/* <button onClick={onClickToCartBtn}>Add to cart</button> */}
            {/* <button onClick={onClickToFavBtn}>
              {!inFav.some((item) => {
                return item.itemId === product.itemId;
              })
                ? "Add to favourites"
                : "Remove from favourites"}
            </button> */}
          </div>
          <Stack spacing={1} direction="row" margin="0 auto">
            <Button variant="contained" size="large" onClick={onClickToCartBtn}>
              Add to cart
            </Button>
            <Button
              variant="outlined"
              size="large"
              endIcon={<FavoriteBorderIcon />}
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
        {/* <div>
          <select
            name="size"
            id="size"
            value={size}
            onChange={(e) => {
              setSize(e.target.value);
              setNoSize(false);
            }}
          >
            <option value="" defaultValue>
              -
            </option>
            {product.availableSizes.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
          {noSize && <p>* Please choose size</p>}
        </div> */}
      </Card>
    </div>
  );
};

export default ProductDetails;
