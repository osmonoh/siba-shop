import React from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

import { grey, purple, indigo, blue } from "@mui/material/colors";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <footer className="footer">
      <Box
        // bgcolor="#9c27b0"
        bgcolor={purple[100]}
        sx={{
          //   backgroundColor: "primary",
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
              <Typography variant="subtitle"> clothes shop</Typography>
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
                <TwitterIcon />
              </a>
              <a
                className="social-link"
                href="https://dusan-chmelko.netlify.app/"
                target="_blank"
              >
                <FacebookIcon />
              </a>
              <a
                className="social-link"
                href="https://dusan-chmelko.netlify.app/"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
              <a
                className="social-link"
                href="https://dusan-chmelko.netlify.app/"
                target="_blank"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          <Typography
            sx={{
              textAlign: "center",
              // borderTop: "1px solid #9c27b0",
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
