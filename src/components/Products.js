import React, { useContext, useEffect, useState } from "react";
import mova from "../api/mova";
import { MyContext } from "../context/MyContext";

import { Box } from "@mui/system";
import { Container, Grid, Stack } from "@mui/material";

import ProductsFilterBtn from "./ProductsFilterBtn";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // const [tagsFilter, setTagsFilter] = useState([]);

  // const [tagOn, setTagOn] = useState(false);

  const { tagsFilter, setTagsFilter } = useContext(MyContext);
  const { productsType } = useContext(MyContext);

  const getProducts = async (type) => {
    const result = await mova.get("./items", {
      params: type,
    });

    setProducts(result.data);
  };

  useEffect(() => {
    getProducts(productsType);
  }, [productsType]);

  useEffect(() => {
    if (tagsFilter.length) {
      setFilteredProducts(
        products.filter((item) => tagsFilter.includes(item.tags[0]))
      );
    } else {
      setFilteredProducts(products);
    }
  }, [tagsFilter]);

  const renderButtons = () => {
    return [
      ...new Set(products.reduce((acc, item) => acc.concat(item.tags), [])),
    ].map((item, index) => {
      return <ProductsFilterBtn key={index} tag={item} index={index} />;
    });
  };

  const renderCards = () => {
    const productsArr = filteredProducts.length ? filteredProducts : products;
    return productsArr.map((item) => {
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
          isFav={false}
        />
      );
    });
  };

  const createFilterObject = () => {
    return [
      ...new Set(products.reduce((acc, item) => acc.concat(item.tags), [])),
    ].map((item) => {
      return { [item]: false };
    });
  };
  const { filterObject, setFilterObject } = useContext(MyContext);

  useEffect(() => {
    setFilterObject({ [Object.values(productsType)[0]]: createFilterObject() });
  }, [products, productsType]);

  useEffect(() => {
    setTagsFilter([]);
  }, [productsType, products]);

  console.log(tagsFilter);

  return (
    <div className="products">
      <Container maxWidth="lg">
        <Stack spacing={1} direction="row" sx={{ margin: "0 0 30px 0" }}>
          {renderButtons()}
        </Stack>

        <Grid container spacing={4}>
          {renderCards()}
        </Grid>
      </Container>
    </div>
  );
};

export default Products;
