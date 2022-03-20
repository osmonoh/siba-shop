import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid";
import { MyContext } from "../context/MyContext";

const ProductsCard = ({
  item,
  itemId,
  picture,
  displayName,
  currentPrice,
  originalPrice,
  tags,
}) => {
  const { setProduct } = useContext(MyContext);

  return (
    <Grid
      item
      xs={4}
      onClick={() => {
        setProduct(item);
        sessionStorage.setItem("product", JSON.stringify(item));
      }}
    >
      <Link to={"/item/" + itemId}>
        <img src={picture} alt={displayName} style={{ width: "100%" }} />
        <p>{displayName}</p>
        {/* <p>{originalPrice}</p> */}
        <p>&euro;{currentPrice}</p>
      </Link>
    </Grid>
  );
};

export default ProductsCard;
