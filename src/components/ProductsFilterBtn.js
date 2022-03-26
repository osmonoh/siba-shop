import React, { useContext, useState } from "react";
import { MyContext } from "../context/MyContext";

import Button from "@mui/material/Button";

const ProductsFilterBtn = ({ tag }) => {
  const { tagsFilter, setTagsFilter } = useContext(MyContext);
  const [tagOn, setTagOn] = useState(tagsFilter.includes(tag));

  const onClickFilterBtn = (e) => {
    const tag = e.target.innerText.toLowerCase();
    if (!tagOn) {
      setTagsFilter([...tagsFilter, tag]);

      setTagOn(true);
    } else {
      setTagsFilter(
        tagsFilter
          .slice(0, tagsFilter.indexOf(tag))
          .concat(tagsFilter.slice(tagsFilter.indexOf(tag) + 1))
      );

      setTagOn(false);
    }
  };

  return (
    <Button
      color="secondary"
      variant={tagOn ? "contained" : "outlined"}
      onClick={onClickFilterBtn}
    >
      {tag}
    </Button>
  );
};

export default ProductsFilterBtn;
