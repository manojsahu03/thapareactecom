import React, { useContext } from "react";
import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import Service from "./components/Service ";
import { Box } from "@mui/material";
// const Wrapper=styled.section`
// background-color:${({theme})=>theme.colors.bg};
// width:20rem;
// height:20rem;
// `
import { AppContext } from "./ProductContext";
import FeatureProductCo from "./components/FeatureProductCo";
function Home() {
  const myData = {
    name: "MULTISTORE",
  };
  return (
    <>
      {/* {info} */}
      <HeroSection myData={myData} />
      <Box marginTop="20px" marginBottom="20px">
        <FeatureProductCo />
        <Service />
      </Box>
    </>
  );
}

export default Home;
