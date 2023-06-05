import React from "react";
import Product from "./Product";
import { Box, Grid } from "@mui/material";

const GridView = ({ products }) => {
  console.log(`productaaaa${products}`);
  return (
    <Box>
      <Grid container spacing={2}>
        {products.map((cueElem) => (
          <Grid item md={4} xs={12} sx={{ minWidth: "30%" }}>
            <Product key={cueElem.id} {...cueElem} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GridView;
