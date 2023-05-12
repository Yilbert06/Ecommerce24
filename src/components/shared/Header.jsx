import React from "react";
import { Link } from "react-router-dom";
import './style/header.css'

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <Link to="/">E-commerce</Link>
      </h1>
      <nav className="nav">
        <ul>
          <li className="nav__login">
            <Link to="/login"><i className="fa-solid fa-user"></i></Link>
          </li>
          <li className="nav__register">
            <Link to="/register"><i className="fa-regular fa-clipboard"></i></Link>
          </li>
          <li className="nav__purchase">
            <Link to="/Purchases"><i className="fa-solid fa-store"></i></Link>
          </li>
          <li className="nav__car">
            <Link className="car__toggle" to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
