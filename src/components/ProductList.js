import React from 'react'
import { useFilterContext } from '../Context/Filter_Context'
import GridView from './GridView';
import ListView from './ListView';

function ProductList() {
  const {filters_products,grid_view}=useFilterContext();
  console.log(`productlist..`)
  console.log(filters_products)
 
  if(grid_view===true){
    return <GridView products={filters_products}/>
  }
  if(grid_view===false){
    return <ListView products={filters_products}/>
  }
  
}

export default ProductList
