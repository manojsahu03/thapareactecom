import { Box, Typography } from '@mui/material'
import React from 'react'
import {Button} from './styles/Button' 
import { NavLink} from 'react-router-dom'

function ErrorPage() {
    
  return (
    <Box display="flex" justifyContent="center" alignItems="center" textAlign="center">
        <Box>
        <Typography variant='h2' style={{color:"red"}}>404</Typography>
        <Typography variant='h3' style={{color:"red"}}>UH OH! You're lost.</Typography>
        <Typography variant='h4' style={{margin:"2rem"}}>The page you are looking for does not exist.How you got here is a mystery.</Typography>
        <Typography variant='h4' style={{margin:"2rem"}}>But you can click the button below to go back to the home page.</Typography>
        <NavLink to="/">
        <Button >Go Back to Home</Button>
        </NavLink>
        </Box>

    </Box>
  )
}

export default ErrorPage
