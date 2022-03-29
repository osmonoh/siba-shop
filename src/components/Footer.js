import React from "react";
import { Link } from "react-router-dom";

import { Box, Container, Typography } from "@mui/material";
import { grey, purple, indigo, blue } from "@mui/material/colors";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="footer">
      <Box
        // bgcolor="#9c27b0"
        bgcolor={purple[100]}
        // bgcolor="pink"
        sx={{
          padding: "32px 12px 24px",
          color: "#9c27b0",
        }}
      >
        <Container maxWidth="lg">
          <div className="footer-top">
            <div className="footer-top-left">
              <Typography variant="h5" component="span">
                SIBA
              </Typography>
              <Typography variant="subtitle2" component="span">
                {" "}
                clothes shop
              </Typography>
            </div>
            <div className="footer-top-mid">
              <div>
                <Typography>
                  <a
                    className="footer-link"
                    href="https://dusan-chmelko.netlify.app/"
                    target="_blank"
                  >
                    About Us
                  </a>
                </Typography>
                <Typography>
                  <a
                    className="footer-link"
                    href="https://dusan-chmelko.netlify.app/"
                    target="_blank"
                  >
                    Contact
                  </a>
                </Typography>
              </div>
              <div>
                <Typography>
                  <a
                    className="footer-link"
                    href="https://dusan-chmelko.netlify.app/"
                    target="_blank"
                  >
                    Terms
                  </a>
                </Typography>
                <Typography>
                  <a
                    className="footer-link"
                    href="https://dusan-chmelko.netlify.app/"
                    target="_blank"
                  >
                    Delivery
                  </a>
                </Typography>
              </div>
              <div>
                <Typography>
                  <a
                    className="footer-link"
                    href="https://dusan-chmelko.netlify.app/"
                    target="_blank"
                  >
                    Returns
                  </a>
                </Typography>
                <Typography>
                  <a
                    className="footer-link"
                    href="https://dusan-chmelko.netlify.app/"
                    target="_blank"
                  >
                    Payment
                  </a>
                </Typography>
              </div>
            </div>

            <div className="footer-top-right">
              <a
                className="social-link"
                href="https://dusan-chmelko.netlify.app/"
                target="_blank"
              >
                <Twitter />
              </a>
              <a
                className="social-link"
                href="https://dusan-chmelko.netlify.app/"
                target="_blank"
              >
                <Facebook />
              </a>
              <a
                className="social-link"
                href="https://dusan-chmelko.netlify.app/"
                target="_blank"
              >
                <LinkedIn />
              </a>
              <a
                className="social-link"
                href="https://dusan-chmelko.netlify.app/"
                target="_blank"
              >
                <Instagram />
              </a>
            </div>
          </div>

          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              paddingTop: "12px",
            }}
          >
            Handcrafted by{" "}
            <a
              className="mfd"
              href="https://dusan-chmelko.netlify.app/"
              target="_blank"
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
