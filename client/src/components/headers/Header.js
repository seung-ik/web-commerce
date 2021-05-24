import React, { useState, useContext } from "react";
import { GlobalState } from "../../GlobalState";
import close from "./icons/times-solid.svg";
import menu from "./icons/bars-solid.svg";
import cart from "./icons/shopping-cart-solid.svg";
import { Link } from "react-router-dom";
import "./header.css";
function Header() {
  const value = useContext(GlobalState);
  return (
    <header>
      <div className="menu">
        <img src={menu} alt="" width="30" />
      </div>
      <div className="logo">
        <h1>
          <Link to="/">5000 shop</Link>
        </h1>
      </div>
      <ul>
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/login">Login ⎋ Register</Link>
        </li>
        <li>
          <img className="menu" src={close} alt="" width="30" />
        </li>
      </ul>
      <div className="cart-icon">
        <span>0</span>
        <Link to="/cart">
          <img src={cart} alt="" width="30" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
