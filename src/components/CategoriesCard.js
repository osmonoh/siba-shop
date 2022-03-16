import React from "react";
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
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        // height="140"
        image={img[categoryId]}
        alt={categoryId}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {displayName}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
      </CardContent>
      {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
    </Card>
  );
};

export default CategoriesCard;
