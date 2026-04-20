here is the whole Nav.jsx

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Logo from "../assets/Library.svg";
import {Link } from "react-router-dom"
import {
  faBars,
  faCartShopping,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
export default function Nav({ numberOfItems}) {
  function openMenu() {
    document.body.classList += " menu--open";
  }
  function closeMenu() {
    document.body.classList.remove("menu--open");
  }
  return (
    <div>
      <nav>
        <div className="nav__container">
          <Link to="/">
            <img src={Logo} alt="" className="logo" />
          </Link>
          <ul className="nav__links">
            <li className="nav__list">
              <Link to ="/" className="nav__link">
                {" "}
                Home
              </Link>
            </li>
            <li className="nav__list">
              <Link to="/books" className="nav__link">
                {" "}
                Books
              </Link>
            </li>
            <button className="btn__menu" onClick={openMenu}>
              <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </button>
            <li className="nav__icon">
              <Link to ="/cart" className="nav__link">
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
              {
             numberOfItems>0&& <span className="cart__length">{numberOfItems}</span>
}
            </li>
          </ul>
          <div className="menu__backdrop">
            <button className="btn__menu btn__menu--close" onClick={closeMenu}>
              <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
            </button>
            <ul className="menu__links">
              <li className="menu__list">
                <Link to="/">Home</Link>
              </li>
              <li className="menu__list">
                <Link to="/books">Books</Link>
              </li>
              <li className="menu__list">
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}