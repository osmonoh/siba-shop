import React, { useContext, useState } from "react";
import { MyContext } from "../context/MyContext";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const ProductsFilterBtn = ({ tag }) => {
  // const [tagOn, setTagOn] = useState(false);

  const { tagsFilter, setTagsFilter } = useContext(MyContext);
  const [tagOn, setTagOn] = useState(tagsFilter.includes(tag));

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
    <Button
      variant={tagOn ? "contained" : "outlined"}
      onClick={onClickFilterBtn}
    >
      {tag}
    </Button>

    // <Grid
    //   item
    //   xs={1}
    //   style={{ color: `${tagOn ? "hotpink" : "rebeccapurple"}` }}
    //   onClick={onClickFilterBtn}
    // >
    //   {tag}
    // </Grid>
  );
};

export default ProductsFilterBtn;

// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

// export default function BasicButtons() {
//   return (
//     <Stack spacing={2} direction="row">
//       <Button variant="text">Text</Button>
//       <Button variant="contained">Contained</Button>
//       <Button variant="outlined">Outlined</Button>
//     </Stack>
//   );
// }
