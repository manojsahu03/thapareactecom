import React from "react";
import HeroSection from "./components/HeroSection";
import { Box, Typography } from "@mui/material";
import ele from './images/electronic.jpg'

function About() {
  const myData = {
    name: "World's Largest Ecommerce Website",
  };
  return (
    <>
      <HeroSection myData={myData} />
      <br></br>
      <Box sx={{margin:"15px"}}>
        <Typography fontSize="17px" color="#686868" sx={{fontWeight:"bold"}}>
          Founded in August of 2008 and based in Bengaluru,MultiStore is a trusted Comunnity marketplace for
          people to list,discover and book unique products around the
          world-online or from mobile phone or Tablet.
        </Typography>
        <br></br>
        <Typography fontSize="17px" color="#686868" sx={{fontWeight:"bold"}}>
          MultiStore Private Limited is an Indian e-commerce company,
          headquartered in Bengaluru, and incorporated in Singapore as a private
          limited company. The company initially focused on online book sales
          before expanding into other product categories such as consumer
          electronics, fashion, home essentials, groceries, and lifestyle
          products. The service competes primarily with Amazon India and
          domestic rival Snapdeal.[5][6] As of March 2017, MultiStore held a 39.5%
          market share in the Indian e-commerce industry.[7] MultiStore has a
          dominant position in the apparel segment, bolstered by its acquisition
          of Myntra, and was described as being "neck and neck" with Amazon in
          the sale of electronics and mobile phones.[8] In August 2018, American
          retail chain Walmart acquired a 77% controlling stake in MultiStore for
          US$16 billion, valuing MultiStore at around US$20 billion.[9] MultiStore
          is valued at $37.6 billion as of 2022.[10] It is planning to go public
          through a listing in the United States of America in 2023.[11]
        </Typography>
        <br></br>
        <Box>
          <img src={ele} style={{width:"100%",height:"auto"}}/>
        </Box>
      </Box>
    </>
  );
}

export default About;
