import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";
import FilterSection from "./components/FilterSection";
import Sort from "./components/Sort";
import ProductList from "./components/ProductList";
import { useFilterContext } from "./Context/Filter_Context";

const Products = () => {
  return (
    <Box display="flex" flexDirection="row" justifyContent="center">
      <Box>
        <FilterSection />
      </Box>
      <Box>
        <Box marginBottom="10px">
          <Sort />
        </Box>
        <Box>
          <ProductList />
        </Box>
      </Box>
    </Box>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
