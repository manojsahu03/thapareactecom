import React from "react";

function CartReducer(state, action) {
  if (action.type === "ADD_TO_CART") {
    let { id, amount, product } = action.payload;
   
    let cartProduct;
    cartProduct = {
      id: id,
      name: product.name,
      amount,
      image: product.image[0].url,
      max:product.stock,
      price:product.price
    };
    return {
        ...state,
        cart : [...state.cart,cartProduct]
    }
  }
  if(action.type==="REMOVE_ITEM"){
    let updatedCart=state.cart.filter((curElem)=>curElem.id!==action.payload)
    return{
        ...state,cart:updatedCart
    }
  }
  if(action.type==="CLEAR_ALL_CART"){
    return {
        ...state,cart:[]
    }
  }

  return state;
}

export default CartReducer;
