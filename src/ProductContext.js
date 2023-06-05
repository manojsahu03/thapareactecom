import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./ReducerFile/ProductReducer";
const AppContext = createContext();
const URL = "https://api.pujakaitem.com/api/products";
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleproduct: {},
  isSingleError: false,
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
      console.log(`upc `);
      console.log(products);
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };
  const getSingleproduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res1 = await axios.get(url);
      const singleproduct = res1.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleproduct });
    } catch (error) {
      console.log(error);
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };
  useEffect(() => {
    getProducts(URL);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleproduct }}>
      {children}
    </AppContext.Provider>
  );
};
const useProductContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useProductContext };
