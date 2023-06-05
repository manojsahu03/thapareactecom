import { Grid, Typography } from "@mui/material";
import React from "react";
import hero from "../images/hero.jpg";
import Service from "./Service ";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";


function HeroSection({ myData} ) {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <Grid item xs={12} md={5} marginLeft="100px">
          <Typography variant="h4" fontFamily="sans-serif">
            WELCOME TO
          </Typography>
          <br></br>
          <Typography variant="h3" color="#3399ff" fontWeight="bold">
            {myData.name}
          </Typography>
          <br></br>
          <Typography variant="h4" color="#686868">
            World's no 1 ecommerce website
          </Typography>
          <Typography variant="h4" color="#686868">
            where you will get all product
          </Typography>
          <Typography variant="h4" color="#686868">
            at the most affordable price
          </Typography>
          <br></br>
          <NavLink to="/products">
          <Button>SHOP NOW</Button>
          </NavLink>
        </Grid>
        <Grid item xs={12} md={5}>
          <img src={hero} alt="hero" style={{ height: "300px" }} />
        </Grid>
      </Grid>
    </>
  );
}

export default HeroSection;
