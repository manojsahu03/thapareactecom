import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import FormatePrice from '../Helper/FormatePrice'
import { NavLink } from 'react-router-dom'
import{ Button} from '../styles/Button'
import styled from 'styled-components'

const ListView = ({products}) => {
  
  return (
    
    <Box>{products.map((cueElem)=>{
        
        const {id,name,image,price,description}=cueElem
       return (
        <Card  sx={{width:"50%",margin:"10px"}}>
            <CardContent   sx={{height:"40%"}}>
                <Box display="flex">
            <Box><img src={image} style={{width:"60%"}}/></Box>
            <Box>
                <Typography variant='h4'>{name}</Typography>
                <br></br>
                <Typography variant='h5'><FormatePrice price={price}/></Typography>
                <Typography fontSize="13px">{description.slice(0,90)}...</Typography>
                <br></br>
                <NavLink to={`/singleproduct/${id}`}>
                    <Button  >READ MORE</Button>
                </NavLink>
            </Box>
            </Box>
            </CardContent>
            
        </Card>)})}
    </Box>
  )
}

export default ListView
