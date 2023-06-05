import { Box, Typography } from "@mui/material";
import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../Context/Filter_Context";

function Sort() {
  const { filters_products, grid_view, setListView, setGridView,sorting } =
    useFilterContext();
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      sx={{ backgroundColor: "#e5e5e5", marginRight: "20px" }}
    >
      <Box>
        <button onClick={setGridView}>
          <BsFillGridFill />
        </button>
        <button onClick={setListView}>
          <BsList />
        </button>
      </Box>
      <Box>
        <Typography fontSize="1.4rem">
          {filters_products.length} Products Available
        </Typography>
      </Box>
      <Box>
        <Typography fontSize="1.4rem">
          <form action="#">
            <label htmlFor="sort"></label>
            <select name="sort" id="sort" onClick={sorting}>
              <option value="lowest">Price(lowest)</option>
              <option value="#" disabled></option>
              <option value="highest">Price(highest)</option>
              <option value="#" disabled></option>
              <option value="(a-z)">(a-z)</option>
              <option value="#" disabled></option>
              <option value="(z-a)">(z-a)</option>
            </select>
          </form>
        </Typography>
      </Box>
    </Box>
  );
}

export default Sort;
