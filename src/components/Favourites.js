import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";

import ProductsCard from "./ProductsCard";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Favourites = () => {
  const { inFav, setInFav } = useContext(MyContext);

  // const renderFavItems = () => {
  //   return inFav.map((item) => {
  //     return (
  //       <div key={item.itemId}>
  //         <p>{item.displayName}</p>
  //         <button
  //           onClick={() =>
  //             setInFav(inFav.filter((el) => el.itemId !== item.itemId))
  //           }
  //         >
  //           Remove from favourites
  //         </button>
  //       </div>
  //     );
  //   });
  // };

  const renderFavItems = () => {
    return inFav.map((item) => {
      const {
        itemId,
        picture,
        displayName,
        currentPrice,
        originalPrice,
        tags,
      } = item;

      return (
        <ProductsCard
          key={itemId}
          item={item}
          itemId={itemId}
          picture={picture}
          displayName={displayName}
          currentPrice={currentPrice}
          originalPrice={originalPrice}
          tags={tags}
          isFav={true}
        />
      );
    });
  };

  return (
    <div className="favourites">
      <Typography variant="h4" component="div" sx={{ marginBottom: "32px" }}>
        Your favourites
      </Typography>
      {/* {inFav.length ? renderFavItems() : <p>No products here</p>} */}
      <Grid container spacing={4}>
        {inFav.length ? renderFavItems() : <p>No products here</p>}
      </Grid>
    </div>
  );
};

export default Favourites;
