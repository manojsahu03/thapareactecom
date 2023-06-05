import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo1 from "../images/logo.png";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import "./Header.css";
import Nav from "./Nav";
import ms from "../images/multistore.jpg";
import logo2 from "../images/mslogo.png";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import {Button} from '../styles/Button'

function Header() {
  const [toggle, setToggle] = useState(false);
  // const [screenwidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    handleToggle();
  }, []);

  const handleToggle = function () {
    setToggle(!toggle);
  };

  return (
    <div>
      <nav >
        <Box
          display="flex"
          justifyContent="space-around"
          textAlign="center"
          sx={{ mt: "16px" }}
        >
          <NavLink to="/">
            <Typography
              variant="h2"
              sx={{ color: "red", fontWeight: "bold", marginLeft: "10px" }}
            >
              Multi<span style={{ color: "white" }}>Store</span>
            </Typography>
          </NavLink>
          {toggle && (
            <ul>
              <li>
                <NavLink to="/" style={{ color: "white" }}>
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" style={{ color: "white" }}>
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" style={{ color: "white" }}>
                  PRODUCTS
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" style={{ color: "white" }}>
                  CONTACTS
                </NavLink>
              </li>
              <li>
                <Button>Login</Button>
              </li>
              <li>
                <NavLink to="/cart" style={{ color: "white" }}>
                  <ShoppingCartIcon sx={{ fontSize: "30px" }} />
                </NavLink>
              </li>
            </ul>
          )}
          <button className="btn" onClick={handleToggle}>
            <MenuOutlinedIcon />
          </button>
        </Box>
      </nav>
    </div>
  );
}

export default Header;
