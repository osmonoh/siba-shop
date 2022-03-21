import React, { useContext, useEffect, useState } from "react";
import mova from "../api/mova";
import { MyContext } from "../context/MyContext";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";

import ProductsFilterBtn from "./ProductsFilterBtn";
import ProductsCard from "./ProductsCard";

const Products = () => {
  // const [products, setProducts] = useState(
  //   JSON.parse(sessionStorage.getItem("products")) || []
  // );
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  console.log(JSON.parse(sessionStorage.getItem("products")));
  console.log(products);
  // const [tagsFilter, setTagsFilter] = useState([]);

  // const [tagOn, setTagOn] = useState(false);

  const { tagsFilter, setTagsFilter } = useContext(MyContext);
  const { productsType } = useContext(MyContext);

  // const getProducts = async (type, value) => {
  //   const result = await mova.get("./items", {
  //     params: { [type]: value },
  //   });

  //   setProducts(result.data);
  // };
  const getProducts = async (type) => {
    const result = await mova.get("./items", {
      params: type,
    });

    setProducts(result.data);
  };

  useEffect(() => {
    getProducts(productsType);
  }, [productsType]);

  // useEffect(() => {
  //   sessionStorage.setItem("products", JSON.stringify(products));
  // }, [products]);

  useEffect(() => {
    if (tagsFilter.length) {
      setFilteredProducts(
        products.filter((item) => tagsFilter.includes(item.tags[0]))
      );
    } else {
      setFilteredProducts(products);
    }
  }, [tagsFilter]);

  // const onClickFilterBtn = (e) => {
  //   const tag = e.target.innerText;
  //   if (!tagOn) {
  //     setTagsFilter([...tagsFilter, tag]);
  //     setTagOn(true);
  //   } else {
  //     setTagsFilter(
  //       tagsFilter
  //         .slice(0, tagsFilter.indexOf(tag))
  //         .concat(tagsFilter.slice(tagsFilter.indexOf(tag) + 1))
  //     );

  //     setTagOn(false);
  //   }
  // };

  const renderButtons = () => {
    return [
      ...new Set(products.reduce((acc, item) => acc.concat(item.tags), [])),
    ].map((item, index) => {
      return (
        // <Grid
        //   item
        //   xs={1}
        //   style={{ color: `${tagOn ? "red" : "gold"}` }}
        //   onClick={onClickFilterBtn}
        // >
        //   {item}
        // </Grid>
        <ProductsFilterBtn key={index} tag={item} />
      );
    });
  };

  const renderCards = () => {
    const productsArr = filteredProducts.length ? filteredProducts : products;
    return productsArr.map((item) => {
      // return (
      //   <p key={item.itemId}>
      //     {item.displayName}
      //     <span>
      //       {" "}
      //       - {item.categoryId} - {item.collectionId}
      //     </span>
      //   </p>
      // );

      // return (
      //   <Grid item xs={4} key={itemId}>
      //     <Link to={"/item/" + itemId}>
      //       <img src={picture} alt={displayName} style={{ width: "100%" }} />
      //       <p>{displayName}</p>
      //       {/* <p>{originalPrice}</p> */}
      //       <p>{currentPrice}</p>
      //     </Link>
      //   </Grid>
      // );
      const {
        itemId,
        picture,
        displayName,
        currentPrice,
        originalPrice,
        tags,
      } = item;

      return (
        <ProductsCard
          key={itemId}
          item={item}
          itemId={itemId}
          picture={picture}
          displayName={displayName}
          currentPrice={currentPrice}
          originalPrice={originalPrice}
          tags={tags}
        />
      );
    });
  };

  // console.log(tagsFilter);

  return (
    <Box className="products">
      {/* <Stack spacing={1} direction="row" margin="0 0 30px 0">
        {renderButtons()}
      </Stack> */}
      <Grid container spacing={4} margin="0 0 30px 0">
        {renderButtons()}
      </Grid>

      <Grid container spacing={4}>
        {renderCards()}
      </Grid>
    </Box>
  );
};

export default Products;
