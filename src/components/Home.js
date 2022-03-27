import React from "react";
import Categories from "./Categories";
import Collections from "./Collections";

import { Container, Typography } from "@mui/material";

import heroImg from "../images/hero4.jpg";

const Home = () => {
  return (
    <div className="home">
      <Typography
        className="top-stripe"
        variant="subtitle2"
        sx={{ padding: "16px 0", textAlign: "center" }}
      >
        Take advantage of member's early access and juicy discounts!{" "}
        <a className="member-link" href="https://dusan-chmelko.netlify.app/">
          Become a member now
        </a>
      </Typography>

      <div className="hero-img">
        <img src={heroImg} alt="hero image" />
      </div>

      <div className="home-sub-hero">
        <Container maxWidth="lg">
          <Typography variant="h3">Lorem ipsum</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid qui
            odio totam voluptas ipsam laudantium aspernatur? Nesciunt at,
            numquam blanditiis, amet ducimus, maxime dolorem enim molestias
            excepturi maiores quia nemo!
          </Typography>
        </Container>
      </div>

      <Container maxWidth="lg">
        <Categories />
        <Collections />
      </Container>
    </div>
  );
};

export default Home;
