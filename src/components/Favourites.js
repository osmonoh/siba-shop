import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/MyContext";

import ProductsCard from "./ProductsCard";

import { Container, Grid, Typography, Button } from "@mui/material";

const Favourites = () => {
  const { inFav } = useContext(MyContext);

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

  const renderNoItems = () => {
    return (
      <div className="no-items">
        <Typography
          variant="h6"
          color="text.secondary"
          component="div"
          sx={{ marginBottom: "32px" }}
        >
          You have no products saved here.
        </Typography>
        {/* <Typography
          variant="h6"
          color="text.secondary"
          component="div"
          sx={{ marginBottom: "32px" }}
        >
          Like products in the shop to save them to your favourites.
        </Typography> */}
        <Button variant="contained" color="secondary" size="large">
          <Link to="/">Back to shop</Link>
        </Button>
      </div>
    );
  };

  return (
    <div className="favourites">
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          color="text.secondary"
          component="div"
          sx={{ marginBottom: "32px" }}
        >
          Your favourites
        </Typography>

        {inFav.length ? (
          <Grid container spacing={4}>
            {renderFavItems()}
          </Grid>
        ) : (
          renderNoItems()
        )}
      </Container>
    </div>
  );
};

export default Favourites;
