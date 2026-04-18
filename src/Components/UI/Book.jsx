import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar , faStarHalfAlt} from '@fortawesome/free-solid-svg-icons'
import {Link } from "react-router-dom"
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
        <div className="book__ratings"> 
            {
                new Array(Math.floor(book.rating)).fill(0).map((_,index)=><FontAwesomeIcon icon={faStar} key={index}></FontAwesomeIcon>)
            // to use map on array it need to have something in it ,it shouldn't be empty  
}
  
  {
!Number.isInteger(book.rating) &&<FontAwesomeIcon icon={faStarHalfAlt} />
  }
   </div>
        <div className="book__price">
            {
            book.salePrice?
          ( <><span className='book__price--normal'>${book.originalPrice}</span>
            ${book.salePrice}</>) :
            (<>${book.originalPrice}</>)
}
        </div>
    </div>
  )
}
