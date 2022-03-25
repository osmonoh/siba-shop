import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyContext";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
  const { inCart, setInCart } = useContext(MyContext);
  const [cartTotal, setCartTotal] = useState(0);

  const renderCartItems = () => {
    return inCart.map((item, i) => {
      return (
        <div key={i}>
          <Card sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={item.picture}
              alt={item.displayName}
            />

            <CardContent sx={{ width: "100%", padding: "24px" }}>
              <div className="cart-item-first-line">
                <Typography variant="h5" component="div">
                  {item.displayName}
                </Typography>
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
      inCart.reduce((acc, item) => (acc += item.amount * item.currentPrice), 0)
    );
  }, [inCart]);

  return (
    <div className="cart">
      <Typography variant="h4" component="div" sx={{ marginBottom: "32px" }}>
        Your shopping bag
      </Typography>
      <div className="cart-content">
        <Stack spacing={2} sx={{ flexGrow: 1 }}>
          {inCart.length ? (
            renderCartItems()
          ) : (
            <p>Your shopping bag is empty</p>
          )}
        </Stack>
        <Box sx={{ width: "300px", height: "300px", backgroundColor: "gold" }}>
          <Typography variant="h5" component="div">
            Total ({inCart.length} items): &euro;{cartTotal}
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default Cart;
