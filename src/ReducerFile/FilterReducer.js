import React from "react";

export default function FilterReducer(state, action) {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCT":
      let priceArr = action.payload.map((currElem) => currElem.price);

      let maxPrice = Math.max(...priceArr);
      console.log(maxPrice);
      return {
        ...state,
        filters_products: [...action.payload],
        all_products: [...action.payload],
        clearProduct: [...action.payload],
        // filter: { ...state.filter, maxPrice, price: maxPrice },
      };
    case "SET_GRIDVIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_LISTVIEW":
      return {
        ...state,
        grid_view: false,
      };
    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };
    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];
      const { text, category, company, price } = state.filter;
      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.name.includes(text);
        });
      }

      if (category ) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.category === category;
        });
      }
      console.log("hhuidi" + category);

      if (company) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.company === company;
        });
        console.log("company" + company);
      }
      if (price) {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.price <= price
        );
      }

      return {
        ...state,
        filters_products: tempFilterProduct,
      };
    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filter: {
          ...state.filters,
          [name]: value,
        },
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      const { filters_products } = state;
      let tempSortProduct = [...filters_products];
      const sortingProducts = (a, b) => {
        if (state.sorting_value === "(a-z)") {
          return a.name.localeCompare(b.name);
        }
        if (state.sorting_value === "(z-a)") {
          return b.name.localeCompare(a.name);
        }
        if (state.sorting_value === "lowest") {
          return a.price - b.price;
        }
        if (state.sorting_value === "highest") {
          return b.price - a.price;
        }
      };

      newSortData = tempSortProduct.sort(sortingProducts);
      return {
        ...state,
        filters_products: newSortData,
      };
    case "CLEAR_FILTERS":
      let newFilter;
      const { clearProduct } = state;
      newFilter = [...clearProduct];

      return {
        ...state,
        filters_products: newFilter,
      };
  }
}
