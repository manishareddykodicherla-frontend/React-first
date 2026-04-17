import React from 'react'
import picture from '../assets/Library.svg'

export default function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="row row__column">
                < a href="">
                <figure className="footer__logo">
                    <img src={picture} className="footer__logo--img" alt=""></img>
                </figure>
                </a>
                <div className="footer__lists">
                    <a href="/" className="footer__link"> Home</a>
                    <a href="/books" className="footer__link">About</a>
                    <a href="/books" className="footer__link">Books</a>
                </div>
            </div>
        </div>
    </footer>
  )
}
