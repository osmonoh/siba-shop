import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyContext } from "./context/MyContext";

import "./style/App.scss";

import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";

import { Container } from "@mui/material";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { ContactlessOutlined } from "@mui/icons-material";

import data from "./data";
import Favourites from "./components/Favourites";

const App = () => {
  // const [data, setData] = useState([]);
  const { inCart } = useContext(MyContext);

  fetch("https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/items")
    .then((res) => res.json())
    .then((data) => console.log(data));

  // useEffect(() => {
  //   fetch("https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/items")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  console.log(data);

  useEffect(() => {
    if (!inCart.length && localStorage.getItem("inCart"))
      localStorage.removeItem("inCart");
    else localStorage.setItem("inCart", JSON.stringify(inCart));
  }, [inCart]);

  // console.log("inCart(APP): ", inCart);

  return (
    <div className="App">
      {/* <div>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div> */}
      <BrowserRouter>
        <Navbar />
        {/* <Cart /> */}
        <Container maxWidth="lg">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/category/:id" element={<Products />} />
            <Route path="/collection/:id" element={<Products />} />
            <Route path="/item/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
};

export default App;
