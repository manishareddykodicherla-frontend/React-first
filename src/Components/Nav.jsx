import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Logo from '../assets/Library.svg'
import {  faBars ,faCartShopping,faTimes } from '@fortawesome/free-solid-svg-icons';
export default function Nav() {
  return (
    <div>
        <nav>
           <div className = "nav__container" >
<a href="/">
    <img src={Logo} alt ="" className="logo"/>
</a>
<ul className="nav__links">
    <li className="nav__list">
        <a href="/" className="nav__link"> Home</a>
        </li>
         <li className="nav__list">
        <a href="/" className="nav__link"> Books</a>
        </li>
        <button className="btn__menu">
            <FontAwesomeIcon icon={faBars}>
            </FontAwesomeIcon>
        </button>
        <li className='nav__icon'>
            <a href="/cart" className="nav__link">
            <FontAwesomeIcon icon={faCartShopping} />
            </a>
        </li>
</ul>
<div className='menu__backdrop'>
    <button className='btn__menu btn__menu--close'>
        <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
    </button>
    <ul className='menu__links'>
        <li className='menu__list'>
            <a href="/Home">Home</a>
        </li>
 <li className='menu__list'>
            <a href="/Books">Books</a>
        </li>
 <li className='menu__list'>
            <a href="/cart">Cart</a>
        </li>

    </ul>
</div>
           </div>
        </nav>
    </div>
  )
}
