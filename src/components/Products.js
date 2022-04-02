import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import mova from "../api/mova";
import { MyContext } from "../context/MyContext";

import ProductsFilterBtn from "./ProductsFilterBtn";
import ProductsCard from "./ProductsCard";

import { Container, Grid, Stack } from "@mui/material";

const Products = () => {
  const { tagsFilter, setTagsFilter } = useContext(MyContext);
  const { productsType } = useContext(MyContext);
  const { setFilterObject } = useContext(MyContext);

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // const [tagOn, setTagOn] = useState(false);

  const getProducts = async (type) => {
    const result =
      type.category === "all"
        ? await mova.get("./items")
        : await mova.get("./items", {
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

  const createFilterObject = () => {
    return [
      ...new Set(products.reduce((acc, item) => acc.concat(item.tags), [])),
    ].map((item) => {
      return { [item]: false };
    });
  };

  useEffect(() => {
    setFilterObject({ [Object.values(productsType)[0]]: createFilterObject() });
  }, [products, productsType]);

  useEffect(() => {
    setTagsFilter([]);
  }, [productsType, products]);

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

  return (
    <div className="products">
      <Container maxWidth="lg">
        <Stack
          // spacing={1}
          direction="row"
          sx={{
            margin: "0 0 30px 0",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {renderButtons()}
        </Stack>

        <Grid
          container
          sx={{
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {renderCards()}
        </Grid>
      </Container>
    </div>
  );
};

export default Products;
