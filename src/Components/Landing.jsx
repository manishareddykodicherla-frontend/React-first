import React from 'react'
import UndrawBooks from "../assets/Undraw_Books.svg"
import {Link } from "react-router-dom"
export default function landing() {
  return (
    <section id="landing">
        <header>
            <div className='header__container'>
                <div className='header__description'>
                    <h1> Australia's most awarded online libarary platform </h1>
                    <h2> Find your dream Book with <span className='purple'></span>Library</h2>
                    <Link to="#features">
                        <button className="btn">Browse books</button>
                    </Link>
                </div>
                <figure className="header__img--wrapper">
                    <img src={UndrawBooks} alt=""/>
                </figure>
            </div>
        </header>
    </section>
  )
}
