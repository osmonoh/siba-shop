import React, { useContext, useState } from "react";
import { MyContext } from "../context/MyContext";

const ProductDetails = () => {
  const { product } = useContext(MyContext);
  // const [toCart, setToCart] = useState({});
  const { inCart, setInCart } = useContext(MyContext);

  const [size, setSize] = useState("");

  console.log(inCart, inCart.length && typeof inCart[0].amount);
  // console.log("size------>", size);
  return (
    <div>
      <img src={product.picture} alt={product.displayName} />
      <p>{product.displayName}</p>
      <select
        name="size"
        id="size"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      >
        {/* <option value="" defaultValue>
          -
        </option> */}

        {product.availableSizes.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      {/* <input type="number" min="1" max="10" /> */}
      <p>{product.description}</p>
      <p>{product.currentPrice}</p>
      <button
        onClick={() => {
          if (
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
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductDetails;
