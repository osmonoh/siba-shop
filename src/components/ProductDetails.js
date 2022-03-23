import React, { useContext, useState } from "react";
import { MyContext } from "../context/MyContext";

const ProductDetails = () => {
  const { product } = useContext(MyContext);
  // const [toCart, setToCart] = useState({});
  const { inCart, setInCart } = useContext(MyContext);
  const { inFav, setInFav } = useContext(MyContext);

  const [size, setSize] = useState("");
  const [noSize, setNoSize] = useState(false);

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
      {/* <input type="number" min="1" max="10" /> */}
      <p>{product.description}</p>
      <p>&euro;{product.currentPrice}</p>
      <button
        onClick={() => {
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
        }}
      >
        Add to cart
      </button>
      <button
        onClick={() => {
          if (
            !inFav.some((item) => {
              return item.itemId === product.itemId;
            })
          )
            setInFav([...inFav, product]);
          else setInFav(inFav.filter((item) => item.itemId !== product.itemId));
        }}
      >
        {!inFav.some((item) => {
          return item.itemId === product.itemId;
        })
          ? "Add to favourites"
          : "Remove from favourites"}
      </button>
    </div>
  );
};

export default ProductDetails;
