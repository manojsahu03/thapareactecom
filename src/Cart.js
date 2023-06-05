import styled from "styled-components";
import { useCartContext } from "./Context/Cart_Context";
import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import CartItem from "./components/CartItem";
import FormatePrice from "./Helper/FormatePrice";
import CartAmountToggle from "./components/CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { Button } from "./styles/Button";
import { NavLink } from "react-router-dom";


const Cart = () => {
  const { cart, removeItem,clearAllCart } = useCartContext();
  const setDecrement = () => {
    // amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrement = () => {
    // amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  

  return (
    <div>
      <Typography fontSize="30px" fontWeight="bolder" textAlign="center" color="blue">CART SECTION</Typography>
      <br></br>

      <TableContainer component={Paper} >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{fontSize:"1.8em",fontWeight:"bold"}}>Item</TableCell>
              <TableCell sx={{fontSize:"1.8em",fontWeight:"bold"}}>Price</TableCell>
              <TableCell sx={{fontSize:"1.8em",fontWeight:"bold"}}>Quantity</TableCell>
              <TableCell sx={{fontSize:"1.8em",fontWeight:"bold"}}>Subtotal</TableCell>
              <TableCell sx={{fontSize:"1.8em",fontWeight:"bold"}}>Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {cart.map((curElem) => (
              <TableRow key={curElem.id}>
                <TableCell>
                  <img
                    style={{ width: "70px" }}
                    src={curElem.image}
                    alt={curElem.id}
                  />
                  <Typography fontSize="2em">{curElem.name}</Typography>
                </TableCell>
                <TableCell style={{ fontSize: "16px" }}>
                  <FormatePrice price={curElem.price} />
                </TableCell>
                <TableCell>
                  <CartAmountToggle
                    amount={curElem.amount}
                    setDecrement={setDecrement}
                    setIncrement={setIncrement}
                  />

                  
                </TableCell>
                <TableCell>
                  <p>
                    <FormatePrice price={curElem.amount * curElem.price} />
                  </p>
                </TableCell>
                <TableCell >
                  <FaTrash
                    color="red"
                    fontSize="15px"
                    onClick={() => removeItem(curElem.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box display="flex" justifyContent="space-between">
        <NavLink to="/products">
          <Button style={{ margin: "1em 0 0 0.5em" }}>Continue Shopping</Button>
        </NavLink>
        <Button style={{ margin: "1em 12.5em 0 0", backgroundColor: "red" }} onClick={clearAllCart}>
          Clear All
        </Button>
      </Box>
    </div>
  );
};

export default Cart;
