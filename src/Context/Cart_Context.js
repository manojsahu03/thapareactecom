import { createContext, useReducer, useContext, useEffect } from "react";
import reducer from "../ReducerFile/CartReducer";

const CartContext = createContext();
const getLocalCartData=()=>{
    let  localCartData=localStorage.getItem("manojcart")
    if(localCartData === []){
        return []
    }else{
        return JSON.parse(localCartData)
        
    }
}

const initialState = {
  cart: getLocalCartData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
};
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (id, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, product } });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const clearAllCart=()=>{
    dispatch({type:"CLEAR_ALL_CART"})

  }
  useEffect(() => {
    localStorage.setItem("manojcart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem,clearAllCart }}>
      {children}
    </CartContext.Provider>
  );
};
const useCartContext = () => {
  return useContext(CartContext);
};
export { CartProvider, useCartContext };
