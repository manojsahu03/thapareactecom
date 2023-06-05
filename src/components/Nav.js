import { Box } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <Box sx={{display:"flex" ,flexDirection:"column"}}>
    <ul>
        <li>
            <NavLink to="/">
                HOME
            </NavLink>
        </li>
        <li>
            <NavLink to="/">
                HOME
            </NavLink>
        </li>
        <li>
            <NavLink to="/">
                HOME
            </NavLink>
        </li>
    </ul>
    </Box>
  )
}

export default Nav
