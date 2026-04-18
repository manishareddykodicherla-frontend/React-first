import React from 'react'
import picture from '../assets/Library.svg'
import {Link } from "react-router-dom"
export default function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="row row__column">
                <Link to="">
                <figure className="footer__logo">
                    <img src={picture} className="footer__logo--img" alt=""></img>
                </figure>
                </Link>
                <div className="footer__lists">
                    <Link  to="/" className="footer__link"> Home</Link>
                    <Link to="/books" className="footer__link">About</Link>
                    <Link to="/books" className="footer__link">Books</Link>
                </div>
            </div>
        </div>
    </footer>
  )
}
