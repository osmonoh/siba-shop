import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/MyContext";

import Box from "@mui/material/Box";
import { Container, Stack, Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

import { grey, purple, indigo, blue } from "@mui/material/colors";

const Cart = () => {
  const { setProduct } = useContext(MyContext);
  const { inCart, setInCart } = useContext(MyContext);
  const [cartTotal, setCartTotal] = useState(0);

  const renderCartItems = () => {
    return inCart.map((item, i) => {
      return (
        <div key={i}>
          <Card sx={{ display: "flex" }}>
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
                {/* <Typography variant="subtitle1" color="text.secondary" component="div">
                            {item.description}
                          </Typography> */}
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
                    <IndeterminateCheckBoxIcon />
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
                    <AddBoxIcon />
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
                  <DeleteIcon />
                </IconButton>
              </CardActions>

              {/* <button
                onClick={() => {
                  setInCart(
                    inCart.map((el) => {
                      if (el.itemId === item.itemId && el.size === item.size) {
                        if (item.amount > 1) item.amount -= 1;
                        return el;
                      } else return el;
                    })
                  );
                }}
              >
                -
              </button>
              <button
                onClick={() => {
                  setInCart(
                    inCart.map((el) => {
                      if (el.itemId === item.itemId && el.size === item.size) {
                        if (item.amount < 10) item.amount += 1;
                        return el;
                      } else return el;
                    })
                  );
                }}
              >
                +
              </button>
              <button
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
                remove
              </button> */}
            </CardContent>
          </Card>

          {/* <p>
            {item.displayName} <span> - {item.size}</span>{" "}
            <span> x {item.amount}</span>
          </p> */}

          {/* <input
            type="number"
            name=""
            id=""
            value={item.amount}
            min="1"
            max="10"
            onChange={(e) => {
              if (e.target.value > 0 && e.target.value < 11) {
                setInCart(
                  inCart.map((el) => {
                    if (el.itemId === item.itemId) {
                      el.amount = Number(e.target.value);
                      return el;
                    }
                  })
                );
              }
            }}
          /> */}

          {/* <button
            onClick={() => {
              setInCart(
                inCart.map((el) => {
                  if (el.itemId === item.itemId && el.size === item.size) {
                    if (item.amount > 1) item.amount -= 1;
                    return el;
                  } else return el;
                })
              );
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              setInCart(
                inCart.map((el) => {
                  if (el.itemId === item.itemId && el.size === item.size) {
                    if (item.amount < 10) item.amount += 1;
                    return el;
                  } else return el;
                })
              );
            }}
          >
            +
          </button>
          <button
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
            remove
          </button> */}
        </div>
      );
    });
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

        <div className="cart-content">
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
              // height: "188px",
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
        </div>
      </Container>
    </div>
  );
};

export default Cart;
