import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatePrice from '../Helper/FormatePrice';


function Product(cueElem) {
    const {id,name,image,price,category}=cueElem
  return (
    
    <NavLink to={`/singleproduct/${id}`}>
        <Box  sx={{display:"flex", flexDirection:"row"}}>
    <div className="card">
      <figure>
        <img src={image} alt={name}  style={{width:"95%"}}/>
        <figcaption className="caption" style={{color:"red"}}>{category}</figcaption>
      </figure>

      <div className="card-data">
        <div className="card-data-flex" style={{display:"flex",justifyContent:"space-around"}}>
          
          <h3>{name}</h3>
          <p className="card-data--price">{ <FormatePrice price={price}/>}</p>
        </div>
      </div>
    </div>
    </Box>

   
  </NavLink>
  
  )
}

export default Product
