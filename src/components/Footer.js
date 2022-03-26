import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Box
        bgcolor="gold"
        sx={{
          //   backgroundColor: "primary",
          padding: "24px 12px",
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography>
            Created by{" "}
            <a
              className="mfd"
              href="https://dusan-chmelko.netlify.app/"
              target="blank"
            >
              Dusan Chmelko
            </a>{" "}
            &copy; 2022
          </Typography>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
