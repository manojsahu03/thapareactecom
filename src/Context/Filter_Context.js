import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "../ProductContext";
import reducer from "../ReducerFile/FilterReducer";

export const FilterContext = createContext();
const initialState = {
  filters_products: [],
  all_products: [],
  clearProduct:[],
  grid_view: true,
  sorting_value: "lowest",
  filter: {
    text: "",
    category:"all",
    company:"all",
    maxPrice:0,
    price:0,
    minPrice:0,
  },
};
export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);
  const clearFilters=()=>{
    dispatch({type:"CLEAR_FILTERS"})
  }

  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };
  const setGridView = () => {
    return dispatch({ type: "SET_GRIDVIEW" });
  };
  const setListView = () => {
    return dispatch({ type: "SET_LISTVIEW" });
  };
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [state.sorting_value, state.filter]);
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCT", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, sorting, updateFilterValue,clearFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
};
export const useFilterContext = () => {
  return useContext(FilterContext);
};
