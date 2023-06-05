import { Table, TableCell } from '@mui/material'
import React from 'react'

function CartItem({id,name,image,amount,price}) {
  return (
    <>
    <Table>

    <TableCell>
        <img src={image} alt={id}/>
    </TableCell>
    <TableCell>helloooo</TableCell>
    </Table>
    </>
    
  )
}

export default CartItem
