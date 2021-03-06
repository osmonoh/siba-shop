import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";

import Button from "@mui/material/Button";

const ProductsFilterBtn = ({ tag, index }) => {
  const { tagsFilter, setTagsFilter } = useContext(MyContext);
  const { filterObject, setFilterObject } = useContext(MyContext);
  // const [tagOn, setTagOn] = useState(tagsFilter.includes(tag));
  // const [tagOn, setTagOn] = useState(false);

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

  return (
    <Button
      color="secondary"
      size="small"
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
