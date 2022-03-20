import React, { useContext, useState } from "react";

import Grid from "@mui/material/Grid";
import { MyContext } from "../context/MyContext";

const ProductsFilterBtn = ({ tag }) => {
  const [tagOn, setTagOn] = useState(false);
  const { tagsFilter, setTagsFilter } = useContext(MyContext);

  const onClickFilterBtn = (e) => {
    const tag = e.target.innerText;
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

  console.log(tagsFilter);

  return (
    <Grid
      item
      xs={1}
      style={{ color: `${tagOn ? "hotpink" : "rebeccapurple"}` }}
      onClick={onClickFilterBtn}
    >
      {tag}
    </Grid>
  );
};

export default ProductsFilterBtn;
