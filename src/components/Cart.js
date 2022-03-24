import React, { useContext, useEffect } from "react";
import { MyContext } from "../context/MyContext";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Cart = () => {
  const { inCart, setInCart } = useContext(MyContext);

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

            <CardContent>
              <Typography variant="h5" component="div">
                {item.displayName}
              </Typography>
              {/* <Typography variant="subtitle1" color="text.secondary" component="div">
          {item.description}
        </Typography> */}
              <Typography variant="h6" gutterBottom component="div">
                &euro;{item.currentPrice}
              </Typography>
              <Typography>
                Size: {item.size}
                <span> x {item.amount}</span>
              </Typography>

              <button
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
              </button>
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

  //   useEffect(() => {
  //     renderCartItems();
  //   }, [inCart]);

  return (
    <div>
      <p>Cart </p>
      {inCart.length ? renderCartItems() : <p>Your shopping bag is empty</p>}
    </div>
  );
};

export default Cart;
