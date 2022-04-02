import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/MyContext";

import {
  Container,
  Stack,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { grey, purple, indigo, blue } from "@mui/material/colors";
import { IndeterminateCheckBox, AddBox, Delete } from "@mui/icons-material";

const Cart = () => {
  const { setProduct } = useContext(MyContext);
  const { inCart, setInCart } = useContext(MyContext);

  const [cartTotal, setCartTotal] = useState(0);

  const renderCartItems = () => {
    return inCart.map((item, i) => {
      return (
        // <div key={i}>
        <Card
          key={i}
          sx={{ width: { xs: "100%", md: "auto" }, display: "flex" }}
        >
          <Link
            to={"/item/" + item.itemId}
            onClick={() => {
              setProduct(item);
              sessionStorage.setItem("product", JSON.stringify(item));
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={item.picture}
              alt={item.displayName}
            />
          </Link>

          <CardContent sx={{ width: "100%", padding: "24px" }}>
            <div className="cart-item-first-line">
              <Link
                to={"/item/" + item.itemId}
                onClick={() => {
                  setProduct(item);
                  sessionStorage.setItem("product", JSON.stringify(item));
                }}
              >
                <Typography variant="h5" component="div">
                  {item.displayName}
                </Typography>
              </Link>
              <Typography variant="h5" component="div">
                &euro;{item.currentPrice}
              </Typography>
            </div>
            <Typography sx={{ marginBottom: "24px" }}>
              Size: {item.size}
            </Typography>

            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <div className="quantity">
                <IconButton
                  aria-label="minus"
                  onClick={() => {
                    setInCart(
                      inCart.map((el) => {
                        if (
                          el.itemId === item.itemId &&
                          el.size === item.size
                        ) {
                          if (item.amount > 1) item.amount -= 1;
                          return el;
                        } else return el;
                      })
                    );
                  }}
                >
                  <IndeterminateCheckBox />
                </IconButton>
                <Typography>{item.amount}</Typography>
                <IconButton
                  aria-label="plus"
                  onClick={() => {
                    setInCart(
                      inCart.map((el) => {
                        if (
                          el.itemId === item.itemId &&
                          el.size === item.size
                        ) {
                          if (item.amount < 10) item.amount += 1;
                          return el;
                        } else return el;
                      })
                    );
                  }}
                >
                  <AddBox />
                </IconButton>
              </div>

              <IconButton
                aria-label="delete"
                onClick={() => {
                  setInCart(
                    inCart.filter((el) => {
                      return (
                        el.itemId !== item.itemId ||
                        (el.itemId === item.itemId && el.size !== item.size)
                      );
                    })
                  );
                }}
              >
                <Delete />
              </IconButton>
            </CardActions>
          </CardContent>
        </Card>
        // </div>
      );
    });
  };

  const renderNoItems = () => {
    return (
      <div className="no-items">
        <Typography
          variant="h6"
          color="text.secondary"
          component="div"
          sx={{ marginBottom: "32px" }}
        >
          Shopping bag is empty.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          <Link to="/category/all">Back to shop</Link>
        </Button>
      </div>
    );
  };

  useEffect(() => {
    setCartTotal(
      Math.round(
        inCart.reduce(
          (acc, item) => (acc += item.amount * item.currentPrice),
          0
        ) * 100
      ) / 100
    );
  }, [inCart]);

  return (
    <div className="cart">
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          color="text.secondary"
          component="div"
          sx={{ marginBottom: "32px" }}
        >
          Shopping bag
        </Typography>

        {inCart.length ? (
          <div className="cart-content">
            <Stack
              spacing={2}
              sx={{ width: { xs: "100%", md: "auto" }, flexGrow: 1 }}
            >
              {inCart.length ? (
                renderCartItems()
              ) : (
                <p>Your shopping bag is empty</p>
              )}
            </Stack>

            <Card
              sx={{
                width: { xs: "100%", md: "auto" },
                backgroundColor: "rgba(255, 215, 0, 0.5)",
                backgroundColor: "pink",
                backgroundColor: purple[100],
                order: { xs: "-1", md: "0" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
                padding: "39px 32px",
              }}
            >
              <div className="total-card-text">
                <Typography variant="h5" component="div">
                  Total ({inCart.length} items): &euro;{cartTotal}
                </Typography>
                <Typography variant="caption" component="div">
                  *This total does not include delivery costs
                </Typography>
              </div>

              <Button variant="contained" size="large">
                Proceed to checkout
              </Button>
            </Card>
          </div>
        ) : (
          renderNoItems()
        )}

        {/* <div className="cart-content">
          <Stack spacing={2} sx={{ flexGrow: 1 }}>
            {inCart.length ? (
              renderCartItems()
            ) : (
              <p>Your shopping bag is empty</p>
            )}
          </Stack>

          <Card
            sx={{
              width: "320px",
              backgroundColor: "rgba(255, 215, 0, 0.5)",
              backgroundColor: "pink",
              backgroundColor: purple[100],

              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "16px",
              padding: "39px 32px",
            }}
          >
            <div className="total-card">
              <Typography variant="h5" component="div">
                Total ({inCart.length} items): &euro;{cartTotal}
              </Typography>
              <Typography variant="caption" component="div">
                *This total does not include delivery costs
              </Typography>
            </div>

            <Button variant="contained" size="large">
              Proceed to checkout
            </Button>
          </Card>
        </div> */}
      </Container>
    </div>
  );
};

export default Cart;
