import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/MyContext";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia, Stack } from "@mui/material";

import ladies from "../images/ladies1.jpg";
import men from "../images/mens1.jpg";
const img = { ladies, men };

const CategoriesCard = ({ displayName, categoryId }) => {
  const { setProductsType } = useContext(MyContext);

  return (
    // <Card sx={{ maxWidth: 345 }}>
    //   <CardMedia
    //     component="img"
    //     // height="140"
    //     image={img[categoryId]}
    //     alt={categoryId}
    //   />
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //       {displayName}
    //     </Typography>
    //   </CardContent>
    // </Card>

    <div className="categories-card">
      <Link
        to={"/category/" + categoryId}
        key={categoryId}
        onClick={() => {
          sessionStorage.setItem(
            "productsType",
            JSON.stringify({ category: categoryId })
          );
          setProductsType({ category: categoryId });
        }}
      >
        <img src={img[categoryId]} alt={categoryId} />
        <Typography
          variant="h4"
          component="div"
          sx={{
            position: "absolute",
            top: "32px",
            left: "32px",
            color: "white",
            // textShadow: "0 0 2px grey",
            fontWeight: "700",
          }}
        >
          {displayName}
        </Typography>
      </Link>
    </div>
  );
};

export default CategoriesCard;
