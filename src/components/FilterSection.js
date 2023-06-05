import React from "react";
import { useFilterContext } from "../Context/Filter_Context";
import { Box,  Typography } from "@mui/material";
import FormatePrice from "../Helper/FormatePrice";
import { Button } from "../styles/Button";

function FilterSection() {
  const {
    filter: { text, category, price, maxPrice, minPrice },
    updateFilterValue,
    all_products,
    clearFilters
  } = useFilterContext();
  console.log(text);
  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });

    return (newVal = ["all", ...new Set(newVal)])
    ;
  };

 

  let categoryOnlyData = getUniqueData(all_products, "category");
  let companyData = getUniqueData(all_products, "company");
 
  return (
    <Box margin="0em 1em 0em 1em" position="static">
      <form onSubmit={(e) => e.preventDefault}>
        <input
          type="text"
          name="text"
          value={text}
          onChange={updateFilterValue}
          placeholder="SEARCH"
        />
      </form>
      <Box>
        <br></br>
        <Typography variant="h4" textAlign="center">
          Category
        </Typography>
        <br></br>
        <Box
          sx={{ display: "flex", flexDirection: "column", position: "static" }}
        >
          {categoryOnlyData.map((curElem, index) => {
            return (
              <Button
             
                key={index}
                type="button"
                name="category"
                value={curElem}
                onClick={updateFilterValue}
                sx={{ fontSize: "1.5em", color: "grey" }}
              >
                {curElem}
              </Button>
            );
          })}
        </Box>
        <Box>
          <Typography variant="h4" textAlign="center" marginTop="1em">
            Company
          </Typography>
          <br></br>
          <form action="#">
            <select
              name="company"
              id="company"
              onClick={updateFilterValue}
              style={{ marginLeft: "5em" }}
            >
              {companyData.map((curElem, index) => {
                return (
                  <option
                    key={index}
                    value={curElem}
                    name="company"
                    style={{ textAlign: "center" }}
                  >
                    {curElem}
                  </option>
                );
              })}
            </select>
          </form>
        </Box>
        {/* <Box>
          <Typography variant="h4">Price</Typography>
          <Typography>
            <FormatePrice price={price} />
          </Typography>
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={price}
            name="price"
            onChange={updateFilterValue}
          />
        </Box> */}
        <Box margin="2em 0 0 2em" >
          <Button style={{backgroundColor:"red"}} onClick={clearFilters} >Clear Filters</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default FilterSection;
