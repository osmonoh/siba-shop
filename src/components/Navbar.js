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
  Menu,
  MenuItem,
} from "@mui/material";
import { grey, purple, indigo, blue } from "@mui/material/colors";
import { FavoriteOutlined, ShoppingBasket } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const { inCart } = useContext(MyContext);
  const { inFav } = useContext(MyContext);
  const { setProductsType } = useContext(MyContext);
  const [categories, setCategories] = useState([]);

  // MUI
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  // ------------------

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
            <Button sx={{ color: { xs: "text.secondary", sm: "white" } }}>
              {displayName}
            </Button>
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
      <Toolbar sx={{ flexWrap: "wrap", justifyContent: "center" }}>
        <Link to="/">
          <Typography
            variant="h5"
            component="div"
            // sx={{ display: { xs: "none", sm: "block" } }}
          >
            SIBA
          </Typography>
        </Link>

        {/* MOJE */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "flex" },
            justifyContent: "center",
            alignItems: "center",
            // gap: "24px",
          }}
          gap={{ md: "12px", lg: "24px" }}
          order={{ xs: "5", sm: "0" }}
        >
          <Link
            to={"/category/all"}
            key={"all"}
            onClick={() => {
              sessionStorage.setItem(
                "productsType",
                JSON.stringify({ category: "all" })
              );
              setProductsType({ category: "all" });
            }}
          >
            <Button sx={{ color: "white" }}>all</Button>
          </Link>
          {renderCategories()}
        </Box>
        {/* ------------- */}

        <Box sx={{ flexGrow: { xs: 1, sm: 0 }, textAlign: "center" }}>
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

        {/* MUI */}
        <Box
          sx={{
            // flexGrow: 1,
            display: { xs: "flex", sm: "none" },
            justifyContent: "center",
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", sm: "none" },
            }}
          >
            <Link
              to={"/category/all"}
              key={"all"}
              onClick={() => {
                sessionStorage.setItem(
                  "productsType",
                  JSON.stringify({ category: "all" })
                );
                setProductsType({ category: "all" });
              }}
            >
              <Button sx={{ color: "text.secondary" }}>all</Button>
            </Link>
            {renderCategories()}
          </Menu>
        </Box>
        {/* --------------- */}
      </Toolbar>
      {/* </Container> */}
    </AppBar>
    // {/* <Toolbar /> */}
    // </Box>
  );
};

export default Navbar;
