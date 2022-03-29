import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyContext";

import Button from "@mui/material/Button";

const ProductsFilterBtn = ({ tag, index }) => {
  const { tagsFilter, setTagsFilter } = useContext(MyContext);
  // const [tagOn, setTagOn] = useState(tagsFilter.includes(tag));
  const [tagOn, setTagOn] = useState(false);

  const { productsType } = useContext(MyContext);

  // HERE  is The SH... !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!S
  const { filterObject, setFilterObject } = useContext(MyContext);
  //  tagsss = [...tagsss, { [tag]: false }];
  // Object.values(productsType)[0]]:
  // useEffect(() => {
  //   setItems([...items, { [tag]: false }]);
  // }, []);

  // console.log("items", items, { [tag]: false });

  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  // const onClickFilterBtn = (e) => {
  //   const tag = e.target.innerText.toLowerCase();
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
  const onClickFilterBtn = (e) => {
    const tag = e.target.innerText.toLowerCase();
    const on = filterObject;
    if (!Object.values(filterObject)[0][index][tag]) {
      setTagsFilter([...tagsFilter, tag]);
      on[Object.keys(filterObject)[0]][index][tag] = true;
      setFilterObject(on);
    } else {
      setTagsFilter(
        tagsFilter
          .slice(0, tagsFilter.indexOf(tag))
          .concat(tagsFilter.slice(tagsFilter.indexOf(tag) + 1))
      );

      on[Object.keys(filterObject)[0]][index][tag] = false;
      setFilterObject(on);
    }
  };

  // Object.values(filterObject)[0][index] &&
  //   Object.keys(filterObject).length &&
  //   console.log("test", filterObject[Object.keys(filterObject)[0]][index][tag]);

  // Object.values(filterObject)[0][index] &&
  //   Object.keys(filterObject).length &&
  //   console.log(tag, Object.values(filterObject)[0][index][tag]);

  return (
    <Button
      color="secondary"
      variant={
        Object.values(filterObject)[0][index] &&
        Object.values(filterObject)[0][index][tag]
          ? "contained"
          : "outlined"
      }
      // variant={tagOn ? "contained" : "outlined"}
      onClick={onClickFilterBtn}
    >
      {tag}
    </Button>
  );
};

export default ProductsFilterBtn;
