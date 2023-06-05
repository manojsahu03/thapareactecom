import { Box } from '@mui/material'
import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

function CartAmountToggle({amount,setIncrement,setDecrement}) {
  return (
    <Box>
        <button onClick={()=>setIncrement()}><FaPlus/></button>
        <span style={{fontSize:"17px" ,margin:"5px",fontWeight:"bold"}}>{amount}</span>
        
        <button onClick={()=>setDecrement()}><FaMinus/></button>
    </Box>
  )
}

export default CartAmountToggle
