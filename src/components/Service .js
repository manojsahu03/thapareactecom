import { Grid, Typography } from "@mui/material";
import React from "react";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
function Service() {
  return (
  
      <Grid container columnGap={2} rowGap={2} display="flex" flexDirection="row" justifyContent="center" alignItems="center" textAlign="center" >
        <Grid item md={3} sm={12} sx={{height:120,backgroundColor:"#F5F5F5",borderRadius:"20px"}}><LocalShippingOutlinedIcon sx={{color:"blue",height:"50px",fontSize:"20px"}}/><Typography variant="h5">Super Fast and Free Delivery</Typography></Grid>
        <Grid container gap={2} display="flex" flexDirection="column" md={3}   >
          <Grid item sx={{height:55,backgroundColor:"#F5F5F5",borderRadius:"20px"}}><SecurityOutlinedIcon sx={{color:"blue",fontSize:"20px"}}  /><Typography variant="h5">Non Contact Shipping</Typography></Grid>
          <Grid item sx={{height:55,backgroundColor:"#F5F5F5",borderRadius:"20px"}}><CurrencyRupeeOutlinedIcon sx={{color:"blue",fontSize:"20px"}} /><Typography variant="h5">Money-back Guaranteed</Typography></Grid>
        </Grid>
        <Grid item md={3}sm={12} sx={{height:120,backgroundColor:"#F5F5F5",borderRadius:"20px"}}><PaymentOutlinedIcon sx={{color:"blue",height:"50px",fontSize:"20px"}}/><Typography variant="h5">Super Secure Payment System</Typography></Grid>
      </Grid>
   
  );
}

export default Service;
