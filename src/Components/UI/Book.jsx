import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link } from "react-router-dom"
import Rating from "./Rating"
import Price from "../Price"
export default function Book( {book}) {
  return (
    <div className="book">
        <Link to={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
                <img src={book.url}/>
            </figure>
        </Link>
        <div className="book__title">
            <Link to={`/books/${book.id}`}>
                {book.title}
            </Link>
        </div>
        <Rating rating={book.rating}/>
        
    </div>
  )
}
