// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";

// const pages = ["Products", "Pricing", "Blog"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

// const Navbar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
//           >
//             LOGO
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: "white", display: "block" }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: "45px" }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };
// export default Navbar;

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import mova from "../api/mova";

// import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";

import { grey, purple, indigo, blue } from "@mui/material/colors";

import { Container, Button } from "@mui/material";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { MyContext } from "../context/MyContext";

export default function PrimarySearchAppBar() {
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
            <Typography>{displayName}</Typography>
          </Link>
        );
    });
  };

  return (
    // <Box sx={{ flexGrow: 1 }}>
    <AppBar
      position="fixed"
      sx={{ backgroundColor: blue[300], padding: "4px" }}
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
                {/* <MailIcon /> */}
                {/* <FavoriteBorderOutlinedIcon /> */}
                <FavoriteOutlinedIcon />
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
                {/* <NotificationsIcon /> */}
                {/* <ShoppingBasketOutlinedIcon /> */}
                <ShoppingBasketIcon />
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
}
