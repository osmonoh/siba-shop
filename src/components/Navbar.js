import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import mova from "../api/mova";
import { MyContext } from "../context/MyContext";

import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Badge,
  Container,
  Button,
  IconButton,
} from "@mui/material";
import { grey, purple, indigo, blue } from "@mui/material/colors";
import { FavoriteOutlined, ShoppingBasket } from "@mui/icons-material";

const Navbar = () => {
  const { inCart } = useContext(MyContext);
  const { inFav } = useContext(MyContext);
  const { setProductsType } = useContext(MyContext);
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const result = await mova.get("./categories");

    setCategories(result.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const renderCategories = () => {
    return categories.map(({ displayName, categoryId, parentId }) => {
      if (parentId === "root")
        return (
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
            <Button sx={{ color: "white" }}>{displayName}</Button>
          </Link>
        );
    });
  };

  return (
    // <Box sx={{ flexGrow: 1 }}>
    <AppBar
      position="fixed"
      sx={{ backgroundColor: purple[700], padding: "4px" }}
    >
      {/* <Container maxWidth="lg"> */}
      <Toolbar>
        <Link to="/">
          <Typography
            variant="h5"
            component="div"
            // sx={{ display: { xs: "none", sm: "block" } }}
          >
            SIBA
          </Typography>
        </Link>

        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {renderCategories()}
        </Box>

        <Box>
          <Link to="/favourites">
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={inFav.length} color="primary">
                <FavoriteOutlined />
              </Badge>
            </IconButton>
          </Link>
          <Link to="/cart">
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge
                badgeContent={
                  inCart.length &&
                  inCart.reduce((acc, item) => (acc += item.amount), 0)
                }
                color="primary"
              >
                <ShoppingBasket />
              </Badge>
            </IconButton>
          </Link>
        </Box>
      </Toolbar>
      {/* </Container> */}
    </AppBar>
    // {/* <Toolbar /> */}
    // </Box>
  );
};

export default Navbar;
