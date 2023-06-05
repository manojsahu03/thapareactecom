import { Box } from "@mui/material";
import React, { useState } from "react";
import CartAmountToggle from "./CartAmountToggle";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../Context/Cart_Context";

function AddToCart({ product }) {
  const {addToCart}=useCartContext(  )
  const [amount, setAmount] = useState(1);
  const { id, color, stock } = product;
  const setDecrement = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrement = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  return (
    <Box>
      <CartAmountToggle
        amount={amount}
        setDecrement={setDecrement}
        setIncrement={setIncrement}
      />
      <NavLink to="/cart" onClick={()=>addToCart(id,amount,product)}>
        <Button style={{ marginTop: "10px" }}>Add To Cart</Button>
      </NavLink>
    </Box>
  );
}

export default AddToCart;
