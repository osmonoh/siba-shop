import React, { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

import { MyContext } from "./context/MyContext";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Favourites from "./components/Favourites";
import Footer from "./components/Footer";

import "./style/App.scss";

// import data from "./data";

const App = () => {
  const { inCart } = useContext(MyContext);
  const { inFav } = useContext(MyContext);
  const { productsType, setProductsType } = useContext(MyContext);

  // fetch("https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/items")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  useEffect(() => {
    if (!inCart.length) localStorage.removeItem("inCart");
    else localStorage.setItem("inCart", JSON.stringify(inCart));
  }, [inCart]);

  useEffect(() => {
    if (!inFav.length) localStorage.removeItem("inFav");
    else localStorage.setItem("inFav", JSON.stringify(inFav));
  }, [inFav]);

  const location = useLocation();
  const [, type, val] = location.pathname.split("/");

  useEffect(() => {
    if (type === "category" || type === "collection")
      setProductsType({ [type]: val });
  }, [location.pathname]);

  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/category/:id" element={<Products />} />
        <Route path="/collection/:id" element={<Products />} />
        <Route path="/item/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>

      <Footer />
      {/* </BrowserRouter> */}
    </div>
  );
};

export default App;
