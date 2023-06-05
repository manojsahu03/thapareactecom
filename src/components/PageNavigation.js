import React from "react";
import { NavLink } from "react-router-dom";

function PageNavigation({ title }) {
  return (
    <>
      <NavLink to="/"style={{fontSize:"2rem"}}>Home\</NavLink><span style={{fontSize:"2rem"}} >{title}</span>
    </>
  );
}

export default PageNavigation;
