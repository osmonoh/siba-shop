import React from "react";
import Categories from "./Categories";
import Collections from "./Collections";

import { Container, Typography } from "@mui/material";

import heroImg from "../images/hero4-r-min.jpg";
import heroImgSmall from "../images/hero-r.jpg";

const Home = () => {
  return (
    <div className="home">
      <Typography
        className="top-stripe"
        variant="subtitle2"
        sx={{ padding: "16px 8px", textAlign: "center" }}
      >
        Take advantage of member's early access and juicy discounts!{" "}
        <a className="member-link" href="https://dusan-chmelko.netlify.app/">
          Become a member now
        </a>
      </Typography>

      <div className="hero-img">
        <img src={heroImg} alt="hero image" className="hero-img-large" />
        <img src={heroImgSmall} alt="hero image" className="hero-img-small" />
      </div>

      <div className="home-sub-hero">
        <Container maxWidth="lg">
          <Typography variant="h3" gutterBottom>
            Lorem ipsum
          </Typography>
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

        <div className="home-secondary-text">
          <Typography variant="h4" gutterBottom>
            Lorem ipsum dolor
          </Typography>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
            nobis ratione ipsum, quis est voluptate. Commodi voluptatibus minima
            earum fuga provident, accusamus dignissimos voluptatum rerum nam
            magni odit. At, iusto expedita. Esse soluta quibusdam aperiam magnam
            eos repellat cupiditate ratione?
          </Typography>
        </div>

        <Collections />
      </Container>
    </div>
  );
};

export default Home;
