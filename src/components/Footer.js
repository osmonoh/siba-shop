import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Box
        bgcolor="pink"
        sx={{ backgroundColor: "pink", padding: "12px", textAlign: "center" }}
      >
        <Container maxWidth="lg">
          <Typography>Created by Dusan Chmelko &copy; 2022</Typography>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
