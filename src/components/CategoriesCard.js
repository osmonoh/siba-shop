import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/MyContext";

import Typography from "@mui/material/Typography";

import ladies from "../images/ladies1.jpg";
import men from "../images/mens1.jpg";
const img = { ladies, men };

const CategoriesCard = ({ displayName, categoryId }) => {
  const { setProductsType } = useContext(MyContext);

  return (
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
